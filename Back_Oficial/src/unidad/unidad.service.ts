import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUnidadInput } from './dto/create-unidad.input';
import { UpdateUnidadInput } from './dto/update-unidad.input';
import { TipoMateria } from '../contenido/entities/contenido.entity';

@Injectable()
export class UnidadService {
  constructor(private prisma: PrismaService) {}

  findAll(tipoMateria?: TipoMateria) {
    return this.prisma.unidad.findMany({
      where: tipoMateria ? { tipoMateria } : undefined,
      include: { contenidos: true },
    });
  }

  findOne(id: number) {
    return this.prisma.unidad.findUnique({ where: { id }, include: { contenidos: true } });
  }

  create(createUnidadInput: CreateUnidadInput) {
    return this.prisma.unidad.create({ data: createUnidadInput });
  }

  update(id: number, updateUnidadInput: UpdateUnidadInput) {
    return this.prisma.unidad.update({ where: { id }, data: updateUnidadInput });
  }

  remove(id: number) {
    return this.prisma.unidad.delete({ where: { id } });
  }
}
