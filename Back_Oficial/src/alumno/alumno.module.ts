import { Module } from '@nestjs/common';
import { AlumnoResolver } from './alumno.resolver';
import { AlumnoService } from './alumno.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AlumnoResolver, AlumnoService],
  exports: [AlumnoService],
})
export class AlumnoModule {}
