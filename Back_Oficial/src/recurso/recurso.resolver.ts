import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecursoService } from './recurso.service';
import { RecursoArchivo } from './entities/recurso.entity';
import { CrearRecursoInput } from './dto/crear-recurso.input';
import { AlumnoService } from '../alumno/alumno.service';
import { RolUsuario } from '../alumno/entities/alumno.entity';

@Resolver()
export class RecursoResolver {
  constructor(
    private readonly recursoService: RecursoService,
    private readonly alumnoService: AlumnoService,
  ) {}

  @Query(() => [RecursoArchivo], { name: 'obtenerRecursos' })
  obtenerRecursos() {
    return this.recursoService.findAll();
  }

  @Query(() => RecursoArchivo, { name: 'recurso', nullable: true })
  recurso(@Args('id', { type: () => Int }) id: number) {
    return this.recursoService.findOne(id);
  }

  @Mutation(() => RecursoArchivo, { name: 'crearRecurso' })
  crearRecurso(@Args('datos') datos: CrearRecursoInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    const usuario = this.alumnoService.getSessionUserFromContext(context);
    return this.recursoService.create({
      ...datos,
      creadoPor: `${usuario.nombre} ${usuario.apellido}`.trim(),
      rolCreador: usuario.rol,
    });
  }

  @Mutation(() => Boolean, { name: 'eliminarRecurso' })
  eliminarRecurso(@Args('id', { type: () => Int }) id: number, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.recursoService.delete(id);
  }
}
