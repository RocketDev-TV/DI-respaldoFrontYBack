import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Rubrica {
  @Field(() => Int)
  id: number;

  @Field()
  titulo: string;

  @Field()
  criterios: string;

  @Field()
  url: string;

  @Field(() => Int)
  periodo: number;
}