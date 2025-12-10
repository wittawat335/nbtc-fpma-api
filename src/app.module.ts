import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import configuration from './config/configuration';
import validationSchema from './config/validation'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      validationSchema,
    }),
    
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        
        options: {
          encrypt: configService.get<boolean>('database.encrypt'),
          trustServerCertificate: true, // แนะนำให้เปิด true สำหรับ Local/Dev
        },
        
        autoLoadEntities: true, // ให้โหลด Entity จาก Module ลูกๆ อัตโนมัติ
        synchronize: false, // Database First ต้องปิดตัวนี้เสมอ (ห้ามเป็น true)
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}