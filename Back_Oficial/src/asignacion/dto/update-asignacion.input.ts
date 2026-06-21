import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateAsignacionInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  titulo?: string;

  @Field({ nullable: true })
  descripcion?: string;

  @Field(() => Int, { nullable: true })
  porcentaje?: number;

  @Field(() => Int, { nullable: true })
  periodo?: number;

  @Field({ nullable: true })
  grupo?: string;

  @Field({ nullable: true })
  entregable?: boolean;

  @Field({ nullable: true })
  rubrica?: string;

  @Field(() => Int, { nullable: true })
  orden?: number;

  @Field({ nullable: true })
  activa?: boolean;

  @Field(() => Int, { nullable: true })
  contenidoId?: number;

  @Field(() => [Int], { nullable: true })
  videoIds?: number[];
}
