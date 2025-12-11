import { Module } from '@nestjs/common';
import { MasterDataService } from './master-data.service';
import { MasterDataController } from './master-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FpmaMasterDistrict } from 'src/entities/FpmaMasterDistrict';
import { FpmaMasterDepartment } from 'src/entities/FpmaMasterDepartment';

@Module({
  imports: [
    TypeOrmModule.forFeature([FpmaMasterDistrict, FpmaMasterDepartment]),
  ],
  controllers: [MasterDataController],
  providers: [MasterDataService],
  exports: [MasterDataService], // export เผื่อ Module อื่นอยากเรียกใช้
})
export class MasterDataModule {}
