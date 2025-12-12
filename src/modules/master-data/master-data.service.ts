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

  async getOptions(type: string) {
    // ดึง Config ตาม type ที่ส่งมา
    const config = MASTER_CONFIG[type];

    // ถ้าไม่เจอ Config (แสดงว่า Frontend ส่ง key ผิด)
    if (!config) {
      throw new BadRequestException(
        `Master data type '${type}' is not configured.`,
      );
    }

    try {
      // ขอ Repository จาก Entity ที่กำหนดไว้
      const repository = this.dataSource.getRepository(config.entity);

      const data = await repository.find({
        select: [config.value, config.label],
        order: {
          [config.orderBy]: 'ASC',
        },
      });

      // แปลงข้อมูลให้อยู่ในรูปแบบ { value, label } ที่ Dropdown ทั่วไปต้องการ
      return data.map((item) => ({
        value: item[config.value], // เช่น ItemID (1, 2, 3...)
        label: item[config.label], // เช่น 'อำเภอเมือง', 'ฝ่ายไอที'
      }));
    } catch (error) {
      console.error(error);
      throw new BadRequestException(
        'Database error: Check column names in config.',
      );
    }
  }
}
