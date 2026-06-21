import { Field, InputType, Int } from '@nestjs/graphql';
import { EstadoUsuario, RolUsuario } from '../entities/alumno.entity';

@InputType()
export class UpdateUsuarioInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  nombre?: string;

  @Field({ nullable: true })
  apellido?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  grupo?: string;

  @Field(() => RolUsuario, { nullable: true })
  rol?: RolUsuario;

  @Field(() => EstadoUsuario, { nullable: true })
  estado?: EstadoUsuario;
}
