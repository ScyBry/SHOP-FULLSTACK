import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoilerPartsController } from './boiler-parts.controller';
import { BoilerPartsEntity } from './boiler-parts.model';
import { BoilerPartsService } from './boiler-parts.service';

@Module({
  imports: [SequelizeModule.forFeature([BoilerPartsEntity])],
  controllers: [BoilerPartsController],
  providers: [BoilerPartsService],
  exports: [BoilerPartsService],
})
export class BoilerPartsModule {}
