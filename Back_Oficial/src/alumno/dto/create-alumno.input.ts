import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAlumnoInput {
  @Field()
  nombre: string;

  @Field()
  apellido: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  grupo: string;
}
