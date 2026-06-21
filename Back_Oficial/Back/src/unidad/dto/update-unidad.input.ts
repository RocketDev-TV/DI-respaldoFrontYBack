import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUnidadInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  nombre?: string;
}
