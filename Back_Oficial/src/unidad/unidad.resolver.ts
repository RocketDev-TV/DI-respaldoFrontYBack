import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UnidadService } from './unidad.service';
import { Unidad } from './entities/unidad.entity';
import { CreateUnidadInput } from './dto/create-unidad.input';
import { UpdateUnidadInput } from './dto/update-unidad.input';
import { TipoMateria } from '../contenido/entities/contenido.entity';
import { AlumnoService } from '../alumno/alumno.service';
import { RolUsuario } from '../alumno/entities/alumno.entity';

@Resolver(() => Unidad)
export class UnidadResolver {
  constructor(
    private readonly unidadService: UnidadService,
    private readonly alumnoService: AlumnoService,
  ) {}

  @Query(() => [Unidad], { name: 'unidades' })
  findAll(@Args('tipoMateria', { type: () => TipoMateria, nullable: true }) tipoMateria?: TipoMateria) {
    return this.unidadService.findAll(tipoMateria);
  }

  @Query(() => Unidad, { name: 'unidad', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.unidadService.findOne(id);
  }

  @Mutation(() => Unidad, { name: 'crearUnidad' })
  create(@Args('createUnidadInput') createUnidadInput: CreateUnidadInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.unidadService.create(createUnidadInput);
  }

  @Mutation(() => Unidad, { name: 'actualizarUnidad' })
  update(@Args('updateUnidadInput') updateUnidadInput: UpdateUnidadInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.unidadService.update(updateUnidadInput.id, updateUnidadInput);
  }

  @Mutation(() => Unidad, { name: 'eliminarUnidad' })
  remove(@Args('id', { type: () => Int }) id: number, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.unidadService.remove(id);
  }
}
