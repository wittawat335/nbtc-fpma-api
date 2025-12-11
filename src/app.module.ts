import { Module } from '@nestjs/common';
import { TestModule } from './modules/test/test.module';
import { Test2Module } from './modules/test2/test2.module';
import { CoreModule } from './core/core.module';
import { MasterDataModule } from './modules/master-data/master-data.module';

@Module({
  imports: [TestModule, Test2Module, CoreModule, MasterDataModule],
})
export class AppModule {}
