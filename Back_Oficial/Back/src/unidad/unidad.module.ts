import { Module } from '@nestjs/common';
import { UnidadService } from './unidad.service';
import { UnidadResolver } from './unidad.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AlumnoModule } from '../alumno/alumno.module';

@Module({
  imports: [PrismaModule, AlumnoModule],
  providers: [UnidadResolver, UnidadService],
})
export class UnidadModule {}
