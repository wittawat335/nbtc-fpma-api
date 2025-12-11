import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mssql',
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.name'),

      entities: [
        __dirname + '/modules/**/*.entity{.ts,.js}',
        __dirname + '/entities/*.ts',
      ], // ชี้ไปหา Entity ใน modules

      options: {
        encrypt: this.configService.get<boolean>('database.encrypt'),
        trustServerCertificate: true,
      },

      autoLoadEntities: true,
      synchronize: false, // DB First ห้ามเปิดเป็น true เด็ดขาด

      extra: {
        validateConnection: false,
        trustServerCertificate: true,
      },
    };
  }
}
