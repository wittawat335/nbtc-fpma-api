import { Module } from '@nestjs/common';
import { MasterDataService } from './master-data.service';
import { MasterDataController } from './master-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FpmaMasterDistrict } from 'src/entities/FpmaMasterDistrict';
import { FpmaMasterDepartment } from 'src/entities/FpmaMasterDepartment';
import { FpmaMasterDivision } from 'src/entities/FpmaMasterDivision';
import { FpmaMasterEducationalQualification } from 'src/entities/FpmaMasterEducationalQualification';
import { FpmaMasterForm } from 'src/entities/FpmaMasterForm';
import { FpmaMasterGovermentPolicy } from 'src/entities/FpmaMasterGovermentPolicy';
import { FpmaMasterLicense } from 'src/entities/FpmaMasterLicense';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FpmaMasterDistrict,
      FpmaMasterDepartment,
      FpmaMasterDivision,
      FpmaMasterEducationalQualification,
      FpmaMasterForm,
      FpmaMasterGovermentPolicy,
      FpmaMasterLicense,
    ]),
  ],
  controllers: [MasterDataController],
  providers: [MasterDataService],
  exports: [MasterDataService], // export เผื่อ Module อื่นอยากเรียกใช้
})
export class MasterDataModule {}
