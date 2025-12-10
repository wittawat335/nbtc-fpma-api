import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FpmaMasterDistrict } from 'src/entities/FpmaMasterDistrict';

@Module({
  imports:[TypeOrmModule.forFeature([FpmaMasterDistrict])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
