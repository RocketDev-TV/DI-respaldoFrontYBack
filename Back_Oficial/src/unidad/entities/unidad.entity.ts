import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Contenido } from '../../contenido/entities/contenido.entity';

@ObjectType()
export class Unidad {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field(() => [Contenido], { nullable: true })
  contenidos?: Contenido[];
}
