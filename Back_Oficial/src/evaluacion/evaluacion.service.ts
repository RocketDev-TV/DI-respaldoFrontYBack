import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegistrarEntregaInput } from './dto/registrar-entrega.input';
import { GuardarCalificacionAsignacionInput } from './dto/guardar-calificacion-asignacion.input';
import { SessionUser } from '../auth/auth.utils';
import { RolUsuario } from '../alumno/entities/alumno.entity';

@Injectable()
export class EvaluacionService {
  private static readonly MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

  constructor(private prisma: PrismaService) {}

  async registrarEntrega(datos: RegistrarEntregaInput, usuario: SessionUser) {
    if (usuario.rol === RolUsuario.ALUMNO && usuario.id !== datos.alumnoId) {
      throw new ForbiddenException('No puedes registrar entregas para otro alumno');
    }

    if (datos.tamano <= 0 || datos.tamano > EvaluacionService.MAX_FILE_SIZE_BYTES) {
      throw new BadRequestException('El archivo debe pesar como máximo 10 MB');
    }

    if (!datos.nombreArchivo.trim() || !datos.mimeType.trim() || !datos.archivoBase64.trim()) {
      throw new BadRequestException('Los datos del archivo están incompletos');
    }

    const asignacion = await this.prisma.asignacion.findUnique({
      where: { id: Number(datos.asignacionId) },
    });

    if (!asignacion) {
      throw new NotFoundException('La asignación no existe');
    }

    if (
      usuario.rol === RolUsuario.ALUMNO &&
      asignacion.grupo &&
      asignacion.grupo !== usuario.grupo
    ) {
      throw new ForbiddenException('La asignación no pertenece a tu grupo');
    }

    return this.prisma.entrega.upsert({
      data: {
        asignacionId: Number(datos.asignacionId),
        alumnoId: Number(datos.alumnoId),
        grupo: asignacion.grupo || usuario.grupo || '',
        parcial: asignacion.periodo,
        nombreArchivo: datos.nombreArchivo.trim(),
        mimeType: datos.mimeType.trim(),
        tamano: Number(datos.tamano),
        archivoBase64: datos.archivoBase64,
      },
    });
  }

  async obtenerEntregas(filtros: Record<string, unknown>, usuario: SessionUser) {
    return this.prisma.entrega.findMany({
      where: {
        ...filtros,
        ...(usuario.rol === RolUsuario.ALUMNO ? { alumnoId: usuario.id } : {}),
      },
    });
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

  async devolverEntrega(alumnoId: number, asignacionId: number): Promise<boolean> {
    await this.prisma.entrega.devolver({ where: { alumnoId, asignacionId } });
    return true;
  }

  async desbloquearRespuestas(alumnoId: number, asignacionId: number, desbloqueadas: boolean) {
    return this.prisma.entrega.desbloquearRespuestas({
      where: { alumnoId, asignacionId },
      data: { respuestasDesbloqueadas: desbloqueadas },
    });
  }
}