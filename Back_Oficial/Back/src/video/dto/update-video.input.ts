import { Field, InputType, Int } from '@nestjs/graphql';
import { TipoVideo } from '../entities/video.entity';

@InputType()
export class UpdateVideoInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  titulo?: string;

  @Field({ nullable: true })
  descripcion?: string;

  @Field({ nullable: true })
  youtubeUrl?: string;

  @Field(() => [TipoVideo], { nullable: true })
  tipos?: TipoVideo[];

  @Field(() => Int, { nullable: true })
  contenidoId?: number;

  @Field(() => [Int], { nullable: true })
  asignacionIds?: number[];

  @Field({ nullable: true })
  publicado?: boolean;
}
