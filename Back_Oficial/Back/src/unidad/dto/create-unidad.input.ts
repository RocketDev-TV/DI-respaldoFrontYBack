import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUnidadInput {
  @Field()
  nombre: string;
}
