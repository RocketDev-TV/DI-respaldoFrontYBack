import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class AsignacionKpis {
  @Field(() => Int)
  totalAlumnos!: number;

  @Field(() => Int)
  entregasRealizadas!: number;

  @Field(() => Float)
  tasaCumplimiento!: number;

  @Field(() => [String])
  alumnosEnRiesgo!: string[]; // Nombres de alumnos con pocas entregas
}