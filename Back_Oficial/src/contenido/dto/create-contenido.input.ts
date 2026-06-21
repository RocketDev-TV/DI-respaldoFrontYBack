import { Field, InputType, Int } from '@nestjs/graphql';
import { TipoContenido, TipoMateria } from '../entities/contenido.entity';

@InputType()
export class CreateContenidoInput {
  @Field()
  titulo: string;

  @Field()
  descripcion: string;

  @Field(() => TipoContenido)
  tipo: TipoContenido;

  @Field(() => TipoMateria)
  tipoMateria: TipoMateria;

  @Field(() => Int)
  orden: number;

  @Field({ nullable: true })
  url_recurso?: string;

  @Field(() => [String])
  contenido: string[];

  @Field(() => Int)
  unidadId: number;
}
