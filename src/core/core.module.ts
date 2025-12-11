import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { configModuleOptions } from './config/configuration.options';

@Global() // 
@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    DatabaseModule,
  ],
  exports: [
    DatabaseModule,
  ],
})
export class CoreModule {}