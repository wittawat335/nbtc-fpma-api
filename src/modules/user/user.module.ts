import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles, UserRoles, Users } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Users,
      UserRoles,
      Roles,])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}