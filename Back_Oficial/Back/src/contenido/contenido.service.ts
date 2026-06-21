import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TipoMateria } from './entities/contenido.entity';
import { CreateContenidoInput } from './dto/create-contenido.input';
import { UpdateContenidoInput } from './dto/update-contenido.input';

@Injectable()
export class ContenidoService {
  constructor(private prisma: PrismaService) {}

  findAll(tipoMateria?: TipoMateria) {
    return this.prisma.contenido.findMany({
      where: tipoMateria ? { tipoMateria } : undefined,
    });
  }

  findOne(id: number) {
    return this.prisma.contenido.findUnique({ where: { id } });
  }

  create(datos: CreateContenidoInput) {
    return this.prisma.contenido.create({ data: datos });
  }

  update(datos: UpdateContenidoInput) {
    return this.prisma.contenido.update({ where: { id: datos.id }, data: datos });
  }

  remove(id: number) {
    return this.prisma.contenido.delete({ where: { id } });
  }
}
