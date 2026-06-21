import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GuardarCalificacionAsignacionInput {
  @Field(() => Int)
  asignacionId: number;

  @Field(() => Int)
  alumnoId: number;

  @Field()
  grupo: string;

  @Field(() => Int)
  parcial: number;

  @Field(() => Int)
  calificacion: number;

  @Field({ nullable: true })
  observaciones?: string;
}
