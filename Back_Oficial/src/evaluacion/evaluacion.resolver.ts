import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EvaluacionService } from './evaluacion.service';
import { CalificacionAsignacion, Entrega } from './entities/evaluacion.entity';
import { RegistrarEntregaInput } from './dto/registrar-entrega.input';
import { GuardarCalificacionAsignacionInput } from './dto/guardar-calificacion-asignacion.input';
import { AlumnoService } from '../alumno/alumno.service';
import { RolUsuario } from '../alumno/entities/alumno.entity';

@Resolver()
export class EvaluacionResolver {
  constructor(
    private readonly evaluacionService: EvaluacionService,
    private readonly alumnoService: AlumnoService,
  ) {}

  @Query(() => [Entrega], { name: 'entregas' })
  entregas(
    @Args('grupo', { type: () => String, nullable: true }) grupo: string | undefined,
    @Args('parcial', { type: () => Int, nullable: true }) parcial: number | undefined,
    @Args('alumnoId', { type: () => Int, nullable: true }) alumnoId: number | undefined,
    @Args('asignacionId', { type: () => Int, nullable: true }) asignacionId: number | undefined,
    @Context() context: any,
  ) {
    const usuario = this.alumnoService.getSessionUserFromContext(context);
    return this.evaluacionService.obtenerEntregas(
      {
        ...(grupo ? { grupo } : {}),
        ...(typeof parcial === 'number' ? { parcial } : {}),
        ...(typeof alumnoId === 'number' ? { alumnoId } : {}),
        ...(typeof asignacionId === 'number' ? { asignacionId } : {}),
      },
      usuario,
    );
  }

  @Query(() => [CalificacionAsignacion], { name: 'calificacionesAsignacion' })
  calificacionesAsignacion(
    @Args('grupo', { type: () => String, nullable: true }) grupo: string | undefined,
    @Args('parcial', { type: () => Int, nullable: true }) parcial: number | undefined,
    @Args('alumnoId', { type: () => Int, nullable: true }) alumnoId: number | undefined,
    @Args('asignacionId', { type: () => Int, nullable: true }) asignacionId: number | undefined,
    @Context() context: any,
  ) {
    const usuario = this.alumnoService.getSessionUserFromContext(context);
    return this.evaluacionService.obtenerCalificaciones(
      {
        ...(grupo ? { grupo } : {}),
        ...(typeof parcial === 'number' ? { parcial } : {}),
        ...(typeof alumnoId === 'number' ? { alumnoId } : {}),
        ...(typeof asignacionId === 'number' ? { asignacionId } : {}),
      },
      usuario,
    );
  }

  @Mutation(() => Entrega, { name: 'registrarEntrega' })
  async registrarEntrega(@Args('datos') datos: RegistrarEntregaInput, @Context() context: any) {
    const usuario = this.alumnoService.getSessionUserFromContext(context);
    return await this.evaluacionService.registrarEntrega(datos, usuario);
  }

  @Mutation(() => CalificacionAsignacion, { name: 'guardarCalificacionAsignacion' })
  guardarCalificacionAsignacion(
    @Args('datos') datos: GuardarCalificacionAsignacionInput,
    @Context() context: any,
  ) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.evaluacionService.guardarCalificacion(datos);
  }

  @Mutation(() => Boolean, { name: 'devolverEntrega' })
  async devolverEntrega(
    @Args('alumnoId', { type: () => Int }) alumnoId: number,
    @Args('asignacionId', { type: () => Int }) asignacionId: number,
  ) {
    return await this.evaluacionService.devolverEntrega(alumnoId, asignacionId);
  }
}