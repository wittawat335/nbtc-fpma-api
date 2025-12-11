import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mssql', // Database type ของคุณ
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.name'),

      // Options เพิ่มเติมตามรูปของคุณ
      options: {
        encrypt: this.configService.get<boolean>('database.encrypt'),
        trustServerCertificate: true,
      },

      // Dev vs Prod settings
      autoLoadEntities: true,
      synchronize: false, // แนะนำให้เป็น false เสมอสำหรับ MSSQL Production

      extra: {
        validateConnection: false,
        trustServerCertificate: true,
      },
    };
  }
}
