import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RecursoArchivo {
  @Field(() => Int)
  id: number;

  @Field()
  tipo: string;

  @Field()
  titulo: string;

  @Field({ nullable: true })
  tamano?: string;

  @Field()
  mimeType: string;

  @Field()
  nombreArchivo: string;

  @Field({ nullable: true })
  archivoBase64?: string;

  @Field({ nullable: true })
  creadoEn?: Date;

  @Field({ nullable: true })
  creadoPor?: string;

  @Field({ nullable: true })
  rolCreador?: string;
}
