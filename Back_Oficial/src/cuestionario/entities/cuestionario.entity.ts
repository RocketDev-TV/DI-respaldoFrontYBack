import { ObjectType, Field, Int, Float, registerEnumType } from '@nestjs/graphql';

export enum TipoPregunta {
  MULTIPLE = 'MULTIPLE',
  ABIERTA = 'ABIERTA',
}

registerEnumType(TipoPregunta, { name: 'TipoPregunta' });

@ObjectType()
export class OpcionRespuesta {
  @Field(() => Int)
  id: number;

  @Field()
  texto: string;

  @Field()
  esCorrecta: boolean;

  @Field(() => Int)
  preguntaId: number;
}

@ObjectType()
export class Pregunta {
  @Field(() => Int)
  id: number;

  @Field()
  texto: string;

  @Field(() => TipoPregunta)
  tipo: TipoPregunta;

  @Field(() => Float)
  puntos: number;

  @Field(() => Int)
  cuestionarioId: number;

  @Field(() => [OpcionRespuesta])
  opciones: OpcionRespuesta[];
}

@ObjectType()
export class Cuestionario {
  @Field(() => Int)
  id: number;

  @Field()
  titulo: string;

  @Field()
  descripcion: string;

  @Field()
  activo: boolean;

  @Field({ nullable: true })
  creadoEn?: Date;

  @Field(() => [Pregunta])
  preguntas: Pregunta[];
}

@ObjectType()
export class EvaluacionCuestionario {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  alumnoId: number;

  @Field(() => Int)
  cuestionarioId: number;

  @Field(() => Float)
  calificacionFinal: number;

  @Field()
  pendienteRevision: boolean;

  @Field({ nullable: true })
  completadoEn?: Date;
}

@ObjectType()
export class EvaluacionConAlumno {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  alumnoId: number;

  @Field(() => Int)
  cuestionarioId: number;

  @Field(() => Float)
  calificacionFinal: number;

  @Field()
  pendienteRevision: boolean;

  @Field({ nullable: true })
  completadoEn?: Date;

  @Field()
  alumnoNombre: string;

  @Field()
  alumnoApellido: string;

  @Field()
  alumnoEmail: string;

  @Field({ nullable: true })
  alumnoGrupo?: string;
}

@ObjectType()
export class RespuestaAbierta {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  alumnoId: number;

  @Field(() => Int)
  cuestionarioId: number;

  @Field(() => Int)
  preguntaId: number;

  @Field()
  texto: string;

  @Field()
  calificada: boolean;

  @Field({ nullable: true })
  esCorrecta?: boolean;

  @Field(() => Float, { nullable: true })
  puntosOtorgados?: number;

  @Field({ nullable: true })
  creadoEn?: Date;

  @Field()
  alumnoNombre: string;

  @Field()
  alumnoApellido: string;

  @Field()
  preguntaTexto: string;

  @Field(() => Float)
  preguntaPuntos: number;
}
