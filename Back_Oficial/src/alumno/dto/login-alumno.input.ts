import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginAlumnoInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
