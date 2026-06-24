import { Args, Context, Int, Float, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CuestionarioService } from './cuestionario.service';
import {
  Cuestionario,
  EvaluacionCuestionario,
  EvaluacionConAlumno,
  OpcionRespuesta,
  Pregunta,
  RespuestaAbierta,
} from './entities/cuestionario.entity';
import {
  ActualizarCuestionarioInput,
  ActualizarOpcionInput,
  ActualizarPreguntaInput,
  AgregarOpcionInput,
  AgregarPreguntaInput,
  CalificarRespuestaAbiertaInput,
  CrearCuestionarioInput,
  RegistrarEvaluacionInput,
  RegistrarRespuestaAbiertaInput,
} from './dto/crear-cuestionario.input';
import { AlumnoService } from '../alumno/alumno.service';
import { RolUsuario } from '../alumno/entities/alumno.entity';

const ROLES_STAFF = [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR];

@Resolver()
export class CuestionarioResolver {
  constructor(
    private readonly cuestionarioService: CuestionarioService,
    private readonly alumnoService: AlumnoService,
  ) {}

  /* ── Cuestionario CRUD ─────────────────────────────────────── */

  @Mutation(() => Cuestionario, { name: 'crearCuestionarioCompleto' })
  crearCuestionarioCompleto(@Args('datos') datos: CrearCuestionarioInput, @Context() ctx: any) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.crearCuestionarioCompleto(datos);
  }

  @Query(() => [Cuestionario], { name: 'cuestionarios' })
  cuestionarios(@Args('todos', { type: () => Boolean, nullable: true }) todos: boolean | undefined) {
    return this.cuestionarioService.obtenerCuestionarios(!todos);
  }

  @Query(() => Cuestionario, { name: 'cuestionario' })
  cuestionario(@Args('id', { type: () => Int }) id: number) {
    return this.cuestionarioService.obtenerCuestionario(id);
  }

  @Mutation(() => Cuestionario, { name: 'actualizarCuestionario' })
  actualizarCuestionario(
    @Args('id', { type: () => Int }) id: number,
    @Args('datos') datos: ActualizarCuestionarioInput,
    @Context() ctx: any,
  ) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.actualizarCuestionario(id, datos);
  }

  @Mutation(() => Boolean, { name: 'eliminarCuestionario' })
  eliminarCuestionario(@Args('id', { type: () => Int }) id: number, @Context() ctx: any) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.eliminarCuestionario(id);
  }

  /* ── Preguntas ─────────────────────────────────────────────── */

  @Mutation(() => Pregunta, { name: 'agregarPregunta' })
  agregarPregunta(@Args('datos') datos: AgregarPreguntaInput, @Context() ctx: any) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.agregarPregunta(datos);
  }

  @Mutation(() => Pregunta, { name: 'actualizarPregunta' })
  actualizarPregunta(
    @Args('id', { type: () => Int }) id: number,
    @Args('datos') datos: ActualizarPreguntaInput,
    @Context() ctx: any,
  ) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.actualizarPregunta(id, datos);
  }

  @Mutation(() => Boolean, { name: 'eliminarPregunta' })
  eliminarPregunta(@Args('id', { type: () => Int }) id: number, @Context() ctx: any) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.eliminarPregunta(id);
  }

  /* ── Opciones ──────────────────────────────────────────────── */

  @Mutation(() => OpcionRespuesta, { name: 'agregarOpcion' })
  agregarOpcion(@Args('datos') datos: AgregarOpcionInput, @Context() ctx: any) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.agregarOpcion(datos);
  }

  @Mutation(() => OpcionRespuesta, { name: 'actualizarOpcion' })
  actualizarOpcion(
    @Args('id', { type: () => Int }) id: number,
    @Args('datos') datos: ActualizarOpcionInput,
    @Context() ctx: any,
  ) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.actualizarOpcion(id, datos);
  }

  @Mutation(() => Boolean, { name: 'eliminarOpcion' })
  eliminarOpcion(@Args('id', { type: () => Int }) id: number, @Context() ctx: any) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.eliminarOpcion(id);
  }

  /* ── Evaluaciones ──────────────────────────────────────────── */

  @Mutation(() => EvaluacionCuestionario, { name: 'registrarEvaluacionCuestionario', nullable: true })
  registrarEvaluacionCuestionario(@Args('datos') datos: RegistrarEvaluacionInput, @Context() ctx: any) {
    this.alumnoService.getSessionUserFromContext(ctx);
    return this.cuestionarioService.registrarEvaluacion(datos);
  }

  @Query(() => [EvaluacionCuestionario], { name: 'evaluacionesCuestionario' })
  evaluacionesCuestionario(
    @Args('alumnoId', { type: () => Int, nullable: true }) alumnoId: number | undefined,
    @Args('cuestionarioId', { type: () => Int, nullable: true }) cuestionarioId: number | undefined,
    @Context() ctx: any,
  ) {
    const usuario = this.alumnoService.getSessionUserFromContext(ctx);
    const id = usuario.rol === RolUsuario.ALUMNO ? usuario.id : alumnoId;
    return this.cuestionarioService.obtenerEvaluaciones(id, cuestionarioId);
  }

  @Query(() => [EvaluacionConAlumno], { name: 'evaluacionesConAlumno' })
  evaluacionesConAlumno(
    @Args('cuestionarioId', { type: () => Int }) cuestionarioId: number,
    @Context() ctx: any,
  ) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.obtenerEvaluacionesConAlumno(cuestionarioId);
  }

  /* ── Respuestas abiertas ───────────────────────────────────── */

  @Mutation(() => RespuestaAbierta, { name: 'registrarRespuestaAbierta' })
  registrarRespuestaAbierta(@Args('datos') datos: RegistrarRespuestaAbiertaInput, @Context() ctx: any) {
    this.alumnoService.getSessionUserFromContext(ctx);
    return this.cuestionarioService.registrarRespuestaAbierta(datos);
  }

  @Query(() => [RespuestaAbierta], { name: 'respuestasAbiertas' })
  respuestasAbiertas(
    @Args('cuestionarioId', { type: () => Int, nullable: true }) cuestionarioId: number | undefined,
    @Args('alumnoId', { type: () => Int, nullable: true }) alumnoId: number | undefined,
    @Args('calificada', { type: () => Boolean, nullable: true }) calificada: boolean | undefined,
    @Context() ctx: any,
  ) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.obtenerRespuestasAbiertas(cuestionarioId, alumnoId, calificada);
  }

  @Mutation(() => RespuestaAbierta, { name: 'calificarRespuestaAbierta' })
  calificarRespuestaAbierta(@Args('datos') datos: CalificarRespuestaAbiertaInput, @Context() ctx: any) {
    this.alumnoService.requireRoles(ctx, ROLES_STAFF);
    return this.cuestionarioService.calificarRespuestaAbierta(datos);
  }
}
