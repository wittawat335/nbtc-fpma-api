import { Module } from '@nestjs/common';
import { TestModule } from './modules/test/test.module';
import { CoreModule } from './core/core.module';
import { MasterDataModule } from './modules/master-data/master-data.module';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ProposalModule } from './modules/proposal/proposal.module';
import { FilesModule } from './modules/files/files.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TestModule,
    CoreModule,
    MasterDataModule,
    AuthModule,
    DashboardModule,
    ProposalModule,
    FilesModule,
    UserModule,
  ],
})
export class AppModule {}
