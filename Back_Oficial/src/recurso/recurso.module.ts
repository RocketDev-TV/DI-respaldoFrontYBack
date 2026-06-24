import { Module } from '@nestjs/common';
import { RecursoResolver } from './recurso.resolver';
import { RecursoService } from './recurso.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AlumnoModule } from '../alumno/alumno.module';

@Module({
  imports: [PrismaModule, AlumnoModule],
  providers: [RecursoResolver, RecursoService],
})
export class RecursoModule {}
