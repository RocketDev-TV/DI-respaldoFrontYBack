import { Field, InputType, Int } from '@nestjs/graphql';
import { TipoContenido, TipoMateria } from '../entities/contenido.entity';

@InputType()
export class UpdateContenidoInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  titulo?: string;

  @Field({ nullable: true })
  descripcion?: string;

  @Field(() => TipoContenido, { nullable: true })
  tipo?: TipoContenido;

  @Field(() => TipoMateria, { nullable: true })
  tipoMateria?: TipoMateria;

  @Field(() => Int, { nullable: true })
  orden?: number;

  @Field({ nullable: true })
  url_recurso?: string;

  @Field(() => [String], { nullable: true })
  contenido?: string[];

  @Field(() => Int, { nullable: true })
  unidadId?: number;
}
