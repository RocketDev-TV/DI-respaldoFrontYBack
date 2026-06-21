import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Asignacion } from './entities/asignacion.entity';
import { AsignacionService } from './asignacion.service';
import { CreateAsignacionInput } from './dto/create-asignacion.input';
import { UpdateAsignacionInput } from './dto/update-asignacion.input';
import { AlumnoService } from '../alumno/alumno.service';
import { RolUsuario } from '../alumno/entities/alumno.entity';

@Resolver(() => Asignacion)
export class AsignacionResolver {
  constructor(
    private readonly asignacionService: AsignacionService,
    private readonly alumnoService: AlumnoService,
  ) {}

  @Query(() => [Asignacion], { name: 'asignaciones' })
  findAll(
    @Args('periodo', { type: () => Int, nullable: true }) periodo?: number,
    @Args('contenidoId', { type: () => Int, nullable: true }) contenidoId?: number,
    @Args('grupo', { nullable: true }) grupo?: string,
  ) {
    return this.asignacionService.findAll(periodo, contenidoId, grupo);
  }

  @Query(() => Asignacion, { name: 'asignacion', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.asignacionService.findOne(id);
  }

  @Mutation(() => Asignacion, { name: 'crearAsignacion' })
  create(@Args('datos') datos: CreateAsignacionInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.asignacionService.create(datos);
  }

  @Mutation(() => Asignacion, { name: 'actualizarAsignacion' })
  update(@Args('datos') datos: UpdateAsignacionInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.asignacionService.update(datos);
  }

  @Mutation(() => Asignacion, { name: 'eliminarAsignacion' })
  remove(@Args('id', { type: () => Int }) id: number, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.asignacionService.remove(id);
  }
}
