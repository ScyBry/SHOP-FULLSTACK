import { Controller } from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';

@Controller('boiler-parts')
export class BoilerPartsController {
  constructor(private readonly boilerPartsService: BoilerPartsService) {}
}
