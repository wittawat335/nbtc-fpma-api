import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './typeorm-config.service';

@Module({
  imports: [
    // ตรงนี้คือหัวใจสำคัญ: ใช้ useClass เพื่อดึง Logic จาก Service ด้านบนมาใช้
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
  ],
  providers: [TypeOrmConfigService],
  exports: [TypeOrmModule], // Export ออกไปเพื่อให้ Module อื่นๆ เรียกใช้ Database ได้
})
export class DatabaseModule {}
