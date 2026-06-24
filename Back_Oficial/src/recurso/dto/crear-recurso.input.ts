import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CrearRecursoInput {
  @Field()
  titulo: string;

  @Field()
  tipo: string;

  @Field()
  nombreArchivo: string;

  @Field()
  mimeType: string;

  @Field({ nullable: true })
  tamano?: string;

  @Field()
  archivoBase64: string;
}
