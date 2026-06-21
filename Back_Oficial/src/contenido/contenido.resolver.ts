import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Contenido, TipoMateria } from './entities/contenido.entity';
import { ContenidoService } from './contenido.service';
import { CreateContenidoInput } from './dto/create-contenido.input';
import { UpdateContenidoInput } from './dto/update-contenido.input';
import { AlumnoService } from '../alumno/alumno.service';
import { RolUsuario } from '../alumno/entities/alumno.entity';

@Resolver(() => Contenido)
export class ContenidoResolver {
  constructor(
    private readonly contenidoService: ContenidoService,
    private readonly alumnoService: AlumnoService,
  ) {}

  @Query(() => [Contenido], { name: 'contenidos' })
  findAll(@Args('tipoMateria', { type: () => TipoMateria, nullable: true }) tipoMateria?: TipoMateria) {
    return this.contenidoService.findAll(tipoMateria);
  }

  @Query(() => Contenido, { name: 'contenido', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contenidoService.findOne(id);
  }

  @Mutation(() => Contenido, { name: 'crearContenido' })
  createContenido(@Args('datos') datos: CreateContenidoInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.contenidoService.create(datos);
  }

  @Mutation(() => Contenido, { name: 'actualizarContenido' })
  updateContenido(@Args('datos') datos: UpdateContenidoInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.contenidoService.update(datos);
  }

  @Mutation(() => Contenido, { name: 'eliminarContenido' })
  removeContenido(@Args('id', { type: () => Int }) id: number, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.contenidoService.remove(id);
  }
}
