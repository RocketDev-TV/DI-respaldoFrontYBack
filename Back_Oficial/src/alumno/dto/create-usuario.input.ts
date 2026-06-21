import { Field, InputType } from '@nestjs/graphql';
import { EstadoUsuario, RolUsuario } from '../entities/alumno.entity';

@InputType()
export class CreateUsuarioInput {
  @Field()
  nombre: string;

  @Field()
  apellido: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ defaultValue: '' })
  grupo: string;

  @Field(() => RolUsuario)
  rol: RolUsuario;

  @Field(() => EstadoUsuario, { defaultValue: EstadoUsuario.ACTIVO })
  estado: EstadoUsuario;
}
