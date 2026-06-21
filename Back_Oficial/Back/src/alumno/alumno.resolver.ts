import {
  Args,
  Context,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Alumno, AuthPayload, RolUsuario } from './entities/alumno.entity';
import { Contenido } from '../contenido/entities/contenido.entity';
import { CreateAlumnoInput } from './dto/create-alumno.input';
import { LoginAlumnoInput } from './dto/login-alumno.input';
import { AlumnoService } from './alumno.service';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Resolver(() => Alumno)
export class AlumnoResolver {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Query(() => [Alumno], { name: 'usuarios' })
  async getUsuarios(@Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.ADMINISTRADOR]);
    return this.alumnoService.findAll();
  }

  @Query(() => [String], { name: 'grupos' })
  async getGrupos(@Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.alumnoService.obtenerGrupos();
  }

  @Mutation(() => Alumno, { name: 'crearAlumno' })
  crearAlumno(@Args('datos') datos: CreateAlumnoInput) {
    return this.alumnoService.create(datos);
  }

  @Mutation(() => AuthPayload, { name: 'iniciarSesion' })
  iniciarSesion(@Args('datos') datos: LoginAlumnoInput) {
    return this.alumnoService.login(datos);
  }

  @Mutation(() => Alumno, { name: 'crearUsuario' })
  crearUsuario(@Args('datos') datos: CreateUsuarioInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.ADMINISTRADOR]);
    return this.alumnoService.createUsuario(datos);
  }

  @Mutation(() => Alumno, { name: 'actualizarUsuario' })
  actualizarUsuario(@Args('datos') datos: UpdateUsuarioInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.ADMINISTRADOR]);
    return this.alumnoService.updateUsuario(datos);
  }

  @Mutation(() => Alumno, { name: 'actualizarMiPerfil' })
  async actualizarMiPerfil(
    @Args('datos') datos: UpdateUsuarioInput, 
    @Context() context: any
  ) {
    const usuarioSesion = this.alumnoService.getSessionUserFromContext(context);
    
    datos.id = usuarioSesion.id;
    
    return this.alumnoService.updateUsuario(datos);
  }

  @Mutation(() => Alumno, { name: 'eliminarUsuario' })
  eliminarUsuario(@Args('id', { type: () => Int }) id: number, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.ADMINISTRADOR]);
    return this.alumnoService.removeUsuario(id);
  }

  @Mutation(() => Alumno, { nullable: true })
  async completarContenido(
    @Args('alumnoId', { type: () => Int }) alumnoId: number,
    @Args('contenidoId', { type: () => Int }) contenidoId: number,
  ) {
    console.log(`El alumno ${alumnoId} completo el contenido ${contenidoId}`);
    return null;
  }

  @ResolveField(() => [Contenido])
  async contenidosCompletados(@Parent() _alumno: Alumno): Promise<Contenido[]> {
    return [];
  }
}
