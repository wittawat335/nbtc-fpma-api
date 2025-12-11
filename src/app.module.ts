import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestModule } from './modules/test/test.module';
import { Test2Module } from './modules/test2/test2.module';
import { DatabaseModule } from './core/database/database.module';
import { configModuleOptions } from './core/config/configuration.options';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    DatabaseModule,
    TestModule,
    Test2Module,
  ],
})
export class AppModule {}
