import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/config/configuration';
import validationSchema from './core/config/validation';
import { TestModule } from './modules/test/test.module';
import { Test2Module } from './modules/test2/test2.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      validationSchema,
    }),
    TestModule,
    Test2Module,
    DatabaseModule,
  ],
})
export class AppModule {}
