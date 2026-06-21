import { Module } from '@nestjs/common';
import { RubricaResolver } from './rubrica.resolver';
import { RubricaService } from './rubrica.service';

@Module({
    providers: [RubricaService, RubricaResolver],
})
export class RubricaModule {}