import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Video } from '../../video/entities/video.entity';

@ObjectType()
export class Asignacion {
  @Field(() => ID)
  id: number;

  @Field()
  titulo: string;

  @Field()
  descripcion: string;

  @Field(() => Int)
  porcentaje: number;

  @Field(() => Int)
  periodo: number;

  @Field()
  grupo: string;

  @Field()
  entregable: boolean;

  @Field()
  rubrica: string;

  @Field(() => Int)
  orden: number;

  @Field()
  activa: boolean;

  @Field(() => Int, { nullable: true })
  contenidoId?: number | null;

  @Field(() => [Video], { nullable: true })
  videos?: Video[];

  @Field({ defaultValue: 'ENTREGADO' })
  estado: string;

  @Field(() => Boolean, { defaultValue: false })
  respuestasDesbloqueadas: boolean;

  @Field({ nullable: true })
  archivoRespuestas?: string;

  @Field({ nullable: true })
  nombreArchivoRespuestas?: string;

  @Field({ nullable: true })
  mimeTypeRespuestas?: string;
}
