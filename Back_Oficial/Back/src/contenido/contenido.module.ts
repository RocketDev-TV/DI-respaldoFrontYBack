import { Module } from '@nestjs/common';
import { ContenidoResolver } from './contenido.resolver';
import { ContenidoService } from './contenido.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AlumnoModule } from '../alumno/alumno.module';

@Module({
  imports: [PrismaModule, AlumnoModule],
  providers: [ContenidoResolver, ContenidoService],
  exports: [ContenidoService],
})
export class ContenidoModule {}
