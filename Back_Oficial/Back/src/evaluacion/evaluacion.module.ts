import { Module } from '@nestjs/common';
import { EvaluacionResolver } from './evaluacion.resolver';
import { EvaluacionService } from './evaluacion.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AlumnoModule } from '../alumno/alumno.module';

@Module({
  imports: [PrismaModule, AlumnoModule],
  providers: [EvaluacionResolver, EvaluacionService],
  exports: [EvaluacionService],
})
export class EvaluacionModule {}
