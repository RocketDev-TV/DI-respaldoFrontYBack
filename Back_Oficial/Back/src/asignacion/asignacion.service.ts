import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAsignacionInput } from './dto/create-asignacion.input';
import { UpdateAsignacionInput } from './dto/update-asignacion.input';

@Injectable()
export class AsignacionService {
  constructor(private prisma: PrismaService) {}

  findAll(periodo?: number, contenidoId?: number, grupo?: string) {
    return this.prisma.asignacion.findMany({
      where: {
        ...(typeof periodo === 'number' ? { periodo } : {}),
        ...(typeof contenidoId === 'number' ? { contenidoId } : {}),
        ...(grupo ? { grupo } : {}),
      },
    });
  }

  findOne(id: number) {
    return this.prisma.asignacion.findUnique({ where: { id } });
  }

  create(datos: CreateAsignacionInput) {
    return this.prisma.asignacion.create({ data: datos });
  }

  update(datos: UpdateAsignacionInput) {
    return this.prisma.asignacion.update({ where: { id: datos.id }, data: datos });
  }

  remove(id: number) {
    return this.prisma.asignacion.delete({ where: { id } });
  }
}
