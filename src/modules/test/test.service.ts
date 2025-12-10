import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { FpmaMasterDistrict } from 'src/entities/FpmaMasterDistrict';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { CreateFpmaMasterDistrictDto } from './dto/CreateFpmaMasterDistrictDto';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(FpmaMasterDistrict)
    private repository: Repository<FpmaMasterDistrict>,
  ) {}
  async create(createTestDto: CreateFpmaMasterDistrictDto) : Promise<FpmaMasterDistrict> {
    const mapper = plainToInstance(FpmaMasterDistrict, createTestDto);

    const data = this.repository.create(mapper);

    return await this.repository.save(data)
  }

  async findAll(): Promise<FpmaMasterDistrict[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<FpmaMasterDistrict> {
    const data = await this.repository.findOneBy({ itemId: id });

    if (!data) {
      throw new NotFoundException(`ID ${id} not found`);
    }

    return data;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
