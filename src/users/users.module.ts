import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { UserEntity } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
