import { Module } from '@nestjs/common';
import { CuestionarioResolver } from './cuestionario.resolver';
import { CuestionarioService } from './cuestionario.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AlumnoModule } from '../alumno/alumno.module';

@Module({
  imports: [PrismaModule, AlumnoModule],
  providers: [CuestionarioResolver, CuestionarioService],
  exports: [CuestionarioService],
})
export class CuestionarioModule {}
