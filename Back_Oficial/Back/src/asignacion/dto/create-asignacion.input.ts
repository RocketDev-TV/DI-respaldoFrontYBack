import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateAsignacionInput {
  @Field()
  titulo: string;

  @Field({ defaultValue: '' })
  descripcion: string;

  @Field(() => Int, { defaultValue: 0 })
  porcentaje: number;

  @Field(() => Int)
  periodo: number;

  @Field({ defaultValue: '' })
  grupo: string;

  @Field({ defaultValue: true })
  entregable: boolean;

  @Field({ defaultValue: '' })
  rubrica: string;

  @Field(() => Int, { defaultValue: 0 })
  orden: number;

  @Field({ defaultValue: true })
  activa: boolean;

  @Field(() => Int, { nullable: true })
  contenidoId?: number;

  @Field(() => [Int], { defaultValue: [] })
  videoIds: number[];
}
