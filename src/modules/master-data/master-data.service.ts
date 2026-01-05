import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { MASTER_CONFIG } from './master-data.config';

@Injectable()
export class MasterDataService {
  constructor(private dataSource: DataSource) {}

  async getOptions(type: string, parentId?: string | number) {
    const config = MASTER_CONFIG[type];

    if (!config) {
      throw new BadRequestException(
        `Master data type '${type}' is not configured.`,
      );
    }

    try {
      const repository = this.dataSource.getRepository(config.entity);

      const selectColumns = [config.value, config.label];
      if (config.extraSelect) {
        selectColumns.push(...config.extraSelect);
      }

      const queryBuilder = repository
        .createQueryBuilder('m')
        .select(selectColumns.map((col) => `m.${col}`))
        .orderBy(`m.${config.orderBy}`, 'ASC');

      if (parentId && config.parentField) {
        queryBuilder.where(`m.${config.parentField} = :parentId`, { parentId });
      }

      const data = await queryBuilder.getMany();

      return data.map((item) => {
        const result: any = {
          value: item[config.value],
          label: item[config.label],
        };
        if (config.extraSelect) {
          config.extraSelect.forEach((field) => {
            result[field] = item[field];
          });
        }
        return result;
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException(
        'Database error: Check column names in config.',
      );
    }
  }
  async getById(type: string, id: string | number) {
    const config = MASTER_CONFIG[type];

    if (!config) {
      throw new BadRequestException(
        `Master data type '${type}' is not configured.`,
      );
    }

    try {
      const repository = this.dataSource.getRepository(config.entity);

      const whereCondition = {};
      whereCondition[config.value] = id;

      const data = await repository.findOne({
        where: whereCondition,
        select: [config.value, config.label],
      });

      if (!data) {
        throw new NotFoundException(
          `Data not found for type ${type} with id ${id}`,
        );
      }

      return {
        value: data[config.value],
        label: data[config.label],
      };
    } catch (error) {
      console.error(error);
      if (error instanceof NotFoundException) throw error;

      throw new BadRequestException(
        'Database error: Check column names in config or invalid ID.',
      );
    }
  }
}
