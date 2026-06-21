import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Asignacion } from '../../asignacion/entities/asignacion.entity';

export enum TipoVideo {
  APRENDIZAJE = 'APRENDIZAJE',
  ACTIVIDAD = 'ACTIVIDAD',
  OTRO = 'OTRO',
}

registerEnumType(TipoVideo, { name: 'TipoVideo' });

@ObjectType()
export class Video {
  @Field(() => ID)
  id: number;

  @Field()
  titulo: string;

  @Field()
  descripcion: string;

  @Field()
  youtubeUrl: string;

  @Field()
  youtubeId: string;

  @Field(() => [TipoVideo])
  tipos: TipoVideo[];

  @Field()
  publicado: boolean;

  @Field(() => Int, { nullable: true })
  contenidoId?: number | null;

  @Field(() => [Asignacion], { nullable: true })
  asignaciones?: Asignacion[];
}
