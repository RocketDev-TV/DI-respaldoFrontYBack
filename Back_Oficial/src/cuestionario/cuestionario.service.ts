import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CrearCuestionarioInput,
  RegistrarEvaluacionInput,
  ActualizarCuestionarioInput,
  ActualizarPreguntaInput,
  ActualizarOpcionInput,
  AgregarPreguntaInput,
  AgregarOpcionInput,
  RegistrarRespuestaAbiertaInput,
  CalificarRespuestaAbiertaInput,
} from './dto/crear-cuestionario.input';

@Injectable()
export class CuestionarioService {
  constructor(private prisma: PrismaService) {}

  async crearCuestionarioCompleto(datos: CrearCuestionarioInput) {
    return this.prisma.cuestionario.create({ data: datos });
  }

  async obtenerCuestionarios(soloActivos = true) {
    return this.prisma.cuestionario.findMany({ where: soloActivos ? { activo: true } : {} });
  }

  async obtenerCuestionario(id: number) {
    const c = await this.prisma.cuestionario.findUnique({ where: { id } });
    if (!c) throw new NotFoundException('Cuestionario no encontrado');
    return c;
  }

  async actualizarCuestionario(id: number, datos: ActualizarCuestionarioInput) {
    await this.obtenerCuestionario(id);
    return this.prisma.cuestionario.update({ where: { id }, data: datos });
  }

  async eliminarCuestionario(id: number) {
    return this.prisma.cuestionario.delete({ where: { id } });
  }

  async agregarPregunta(datos: AgregarPreguntaInput) {
    return this.prisma.pregunta.create({ data: datos });
  }

  async actualizarPregunta(id: number, datos: ActualizarPreguntaInput) {
    return this.prisma.pregunta.update({ where: { id }, data: datos });
  }

  async eliminarPregunta(id: number) {
    return this.prisma.pregunta.delete({ where: { id } });
  }

  async agregarOpcion(datos: AgregarOpcionInput) {
    return this.prisma.opcionRespuesta.create({ data: datos });
  }

  async actualizarOpcion(id: number, datos: ActualizarOpcionInput) {
    return this.prisma.opcionRespuesta.update({ where: { id }, data: datos });
  }

  async eliminarOpcion(id: number) {
    return this.prisma.opcionRespuesta.delete({ where: { id } });
  }

  async registrarEvaluacion(datos: RegistrarEvaluacionInput) {
    return this.prisma.evaluacionCuestionario.create({ data: datos });
  }

  async obtenerEvaluaciones(alumnoId?: number, cuestionarioId?: number) {
    return this.prisma.evaluacionCuestionario.findMany({
      where: {
        ...(alumnoId ? { alumnoId } : {}),
        ...(cuestionarioId ? { cuestionarioId } : {}),
      },
    });
  }

  async obtenerEvaluacionesConAlumno(cuestionarioId: number) {
    return this.prisma.evaluacionCuestionario.findWithAlumno({ where: { cuestionarioId } });
  }

  async registrarRespuestaAbierta(datos: RegistrarRespuestaAbiertaInput) {
    return this.prisma.respuestaAbierta.create({ data: datos });
  }

  async obtenerRespuestasAbiertas(cuestionarioId?: number, alumnoId?: number, calificada?: boolean) {
    return this.prisma.respuestaAbierta.findMany({
      where: {
        ...(cuestionarioId ? { cuestionarioId } : {}),
        ...(alumnoId ? { alumnoId } : {}),
        ...(calificada !== undefined ? { calificada } : {}),
      },
    });
  }

  async calificarRespuestaAbierta(datos: CalificarRespuestaAbiertaInput) {
    const respuesta = await this.prisma.respuestaAbierta.update({
      where: { id: datos.id },
      data: { calificada: true, esCorrecta: datos.esCorrecta, puntosOtorgados: datos.puntosOtorgados },
    });

    // Recalcular calificación final si todas las respuestas del alumno en ese cuestionario están calificadas
    const todas = await this.obtenerRespuestasAbiertas(respuesta.cuestionarioId, respuesta.alumnoId);
    const todasCalificadas = todas.every((r: any) => r.calificada);

    if (todasCalificadas) {
      const puntosAbiertas = todas.reduce((acc: number, r: any) => acc + (r.puntosOtorgados ?? 0), 0);
      const evaluaciones = await this.obtenerEvaluaciones(respuesta.alumnoId, respuesta.cuestionarioId);
      if (evaluaciones.length > 0) {
        const ev = evaluaciones[0] as any;
        const cuestionario = await this.obtenerCuestionario(respuesta.cuestionarioId);
        const puntosMax = (cuestionario as any).preguntas.reduce((acc: number, p: any) => acc + p.puntos, 0);
        // calificacionFinal ya incluía los puntos de opción múltiple; sumamos los de abiertas
        const nuevaCalif = puntosMax > 0
          ? Math.round(((ev.calificacionFinal / 100 * puntosMax) + puntosAbiertas) / puntosMax * 100 * 10) / 10
          : 0;
        await this.prisma.evaluacionCuestionario.update({
          where: { id: ev.id },
          data: { calificacionFinal: Math.min(nuevaCalif, 100), pendienteRevision: false },
        });
      }
    }

    return respuesta;
  }
}
