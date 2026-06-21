import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Entrega {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  asignacionId: number;

  @Field(() => Int)
  alumnoId: number;

  @Field()
  grupo: string;

  @Field(() => Int)
  parcial: number;

  @Field()
  nombreArchivo: string;

  @Field()
  mimeType: string;

  @Field(() => Int)
  tamano: number;

  @Field()
  archivoBase64: string;

  @Field()
  estado: string;

  @Field()
  fechaEntrega: string;
}

@ObjectType()
export class CalificacionAsignacion {
  @Field(() => ID)
  id: number;

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

  @Field()
  fechaCalificacion: string;
}
