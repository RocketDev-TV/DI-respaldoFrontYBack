import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegistrarEntregaInput } from './dto/registrar-entrega.input';
import { GuardarCalificacionAsignacionInput } from './dto/guardar-calificacion-asignacion.input';
import { SessionUser } from '../auth/auth.utils';
import { RolUsuario } from '../alumno/entities/alumno.entity';

@Injectable()
export class EvaluacionService {
  constructor(private prisma: PrismaService) {}

  registrarEntrega(datos: RegistrarEntregaInput, usuario: SessionUser) {
    if (usuario.rol === RolUsuario.ALUMNO && usuario.id !== datos.alumnoId) {
      throw new ForbiddenException('No puedes registrar entregas para otro alumno');
    }

    return this.prisma.entrega.upsert({ data: datos });
  }

  obtenerEntregas(filtros: Record<string, unknown>, usuario: SessionUser) {
    if (usuario.rol === RolUsuario.ALUMNO) {
      return this.prisma.entrega.findMany({
        where: {
          ...filtros,
          alumnoId: usuario.id,
        },
      });
    }

    return this.prisma.entrega.findMany({ where: filtros });
  }

  guardarCalificacion(datos: GuardarCalificacionAsignacionInput) {
    return this.prisma.calificacionAsignacion.upsert({ data: datos });
  }

  obtenerCalificaciones(filtros: Record<string, unknown>, usuario: SessionUser) {
    if (usuario.rol === RolUsuario.ALUMNO) {
      return this.prisma.calificacionAsignacion.findMany({
        where: {
          ...filtros,
          alumnoId: usuario.id,
        },
      });
    }

    return this.prisma.calificacionAsignacion.findMany({ where: filtros });
  }
}
