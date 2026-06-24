import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RestablecerPasswordInput, SolicitarRecuperacionInput } from './dto/recuperacion.input';

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
}
