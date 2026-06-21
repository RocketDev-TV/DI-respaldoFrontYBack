import { Module } from '@nestjs/common';
import { AsignacionResolver } from './asignacion.resolver';
import { AsignacionService } from './asignacion.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AlumnoModule } from '../alumno/alumno.module';

@Module({
  imports: [PrismaModule, AlumnoModule],
  providers: [AsignacionResolver, AsignacionService],
  exports: [AsignacionService],
})
export class AsignacionModule {}
