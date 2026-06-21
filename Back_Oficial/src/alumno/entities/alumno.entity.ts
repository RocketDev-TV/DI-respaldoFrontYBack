import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Contenido } from '../../contenido/entities/contenido.entity';

export enum RolUsuario {
  ALUMNO = 'ALUMNO',
  MODERADOR = 'MODERADOR',
  ADMINISTRADOR = 'ADMINISTRADOR',
}

export enum EstadoUsuario {
  ACTIVO = 'ACTIVO',
  INACTIVO = 'INACTIVO',
}

registerEnumType(RolUsuario, { name: 'RolUsuario' });
registerEnumType(EstadoUsuario, { name: 'EstadoUsuario' });

@ObjectType({ description: 'Usuario autenticable del sistema' })
export class Alumno {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  apellido: string;

  @Field()
  email: string;

  @Field()
  grupo: string;

  @Field(() => RolUsuario)
  rol: RolUsuario;

  @Field(() => EstadoUsuario)
  estado: EstadoUsuario;

  @Field(() => [Contenido], { nullable: true })
  contenidosCompletados?: Contenido[];
}

@ObjectType()
export class AuthPayload {
  @Field()
  token: string;

  @Field(() => Alumno)
  usuario: Alumno;
}
