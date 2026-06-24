import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { TipoPregunta } from '../entities/cuestionario.entity';

@InputType()
export class OpcionRespuestaInput {
  @Field()
  texto: string;

  @Field()
  esCorrecta: boolean;
}

@InputType()
export class PreguntaInput {
  @Field()
  texto: string;

  @Field(() => TipoPregunta)
  tipo: TipoPregunta;

  @Field(() => Float)
  puntos: number;

  @Field(() => [OpcionRespuestaInput])
  opciones: OpcionRespuestaInput[];
}

@InputType()
export class CrearCuestionarioInput {
  @Field()
  titulo: string;

  @Field({ nullable: true, defaultValue: '' })
  descripcion?: string;

  @Field({ nullable: true, defaultValue: true })
  activo?: boolean;

  @Field(() => [PreguntaInput])
  preguntas: PreguntaInput[];
}

@InputType()
export class ActualizarCuestionarioInput {
  @Field({ nullable: true })
  titulo?: string;

  @Field({ nullable: true })
  descripcion?: string;

  @Field({ nullable: true })
  activo?: boolean;
}

@InputType()
export class ActualizarPreguntaInput {
  @Field({ nullable: true })
  texto?: string;

  @Field(() => TipoPregunta, { nullable: true })
  tipo?: TipoPregunta;

  @Field(() => Float, { nullable: true })
  puntos?: number;
}

@InputType()
export class ActualizarOpcionInput {
  @Field({ nullable: true })
  texto?: string;

  @Field({ nullable: true })
  esCorrecta?: boolean;
}

@InputType()
export class AgregarPreguntaInput {
  @Field(() => Int)
  cuestionarioId: number;

  @Field()
  texto: string;

  @Field(() => TipoPregunta)
  tipo: TipoPregunta;

  @Field(() => Float)
  puntos: number;

  @Field(() => [OpcionRespuestaInput], { nullable: true, defaultValue: [] })
  opciones?: OpcionRespuestaInput[];
}

@InputType()
export class AgregarOpcionInput {
  @Field(() => Int)
  preguntaId: number;

  @Field()
  texto: string;

  @Field({ defaultValue: false })
  esCorrecta: boolean;
}

@InputType()
export class RegistrarEvaluacionInput {
  @Field(() => Int)
  alumnoId: number;

  @Field(() => Int)
  cuestionarioId: number;

  @Field(() => Float)
  calificacionFinal: number;

  @Field({ defaultValue: false })
  pendienteRevision: boolean;
}

@InputType()
export class RegistrarRespuestaAbiertaInput {
  @Field(() => Int)
  alumnoId: number;

  @Field(() => Int)
  cuestionarioId: number;

  @Field(() => Int)
  preguntaId: number;

  @Field()
  texto: string;
}

@InputType()
export class CalificarRespuestaAbiertaInput {
  @Field(() => Int)
  id: number;

  @Field()
  esCorrecta: boolean;

  @Field(() => Float)
  puntosOtorgados: number;
}
