import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CrearRecursoInput } from './dto/crear-recurso.input';

@Injectable()
export class RecursoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.recursoArchivo.findMany();
  }

  findOne(id: number) {
    return this.prisma.recursoArchivo.findUnique({ where: { id } });
  }

  create(datos: CrearRecursoInput & { creadoPor?: string; rolCreador?: string }) {
    return this.prisma.recursoArchivo.create({ data: datos });
  }

  delete(id: number) {
    return this.prisma.recursoArchivo.delete({ where: { id } });
  }
}
