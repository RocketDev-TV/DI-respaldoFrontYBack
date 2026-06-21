import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Entrega {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  asignacionId: number;

  @Field(() => Int)
  alumnoId: number;

  @Field(() => Float, { nullable: true })
  calificacion?: number;

  @Field({ nullable: true })
  entregadoEn?: Date;

  // Los campos nuevos para los archivos
  @Field({ nullable: true })
  nombreArchivo?: string;

  @Field({ nullable: true })
  mimeType?: string;

  @Field(() => Int, { nullable: true })
  tamano?: number;

  @Field({ nullable: true })
  archivoBase64?: string;
}

@ObjectType()
export class CalificacionAsignacion {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  asignacionId: number;

  @Field(() => Int)
  alumnoId: number;

  @Field({ nullable: true })
  grupo?: string;

  @Field(() => Int, { nullable: true })
  parcial?: number;

  @Field(() => Float, { nullable: true })
  calificacion?: number;

  @Field({ nullable: true })
  observaciones?: string;

  @Field({ nullable: true })
  fechaCalificacion?: Date;
}