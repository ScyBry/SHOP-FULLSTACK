import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { databaseConfig } from './config/configuration';
import { SequelizeConfigService } from './config/sequelizeConfig.sevice';
import { UsersModule } from './users/users.module';
import { BoilerPartsModule } from './boiler-parts/boiler-parts.module';

@Module({
  imports: [
    UsersModule,
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    AuthModule,
    PassportModule,
    BoilerPartsModule,
  ],
})
export class AppModule {}
