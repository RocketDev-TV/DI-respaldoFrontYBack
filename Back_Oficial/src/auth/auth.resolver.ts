import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RestablecerPasswordInput, SolicitarRecuperacionInput } from './dto/recuperacion.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { Alumno } from '../alumno/entities/alumno.entity';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => String)
  ping() {
    return 'pong';
  }

  @Mutation(() => Boolean, { description: 'Genera un código y lo envía por correo' })
  async solicitarRecuperacionPassword(
    @Args('datos') datos: SolicitarRecuperacionInput,
  ): Promise<boolean> {
    return this.authService.solicitarRecuperacion(datos.email);
  }

  @Mutation(() => Boolean, { description: 'Valida el código y actualiza la contraseña' })
  async restablecerPassword(
    @Args('datos') datos: RestablecerPasswordInput,
  ): Promise<boolean> {
    return this.authService.restablecerPassword(datos.email, datos.codigo, datos.nuevoPassword);
  }

  @Mutation(() => Alumno, { name: 'actualizarUsuario', description: 'Actualiza los datos de un usuario desde el panel de administración' })
  async actualizarUsuario(
    @Args('datos') datos: UpdateUsuarioInput,
  ) {
    return this.authService.actualizarUsuario(datos);
  }
}