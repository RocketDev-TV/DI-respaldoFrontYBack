import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class RegistrarEntregaInput {
  @Field(() => Int)
  asignacionId: number;

  @Field(() => Int)
  alumnoId: number;

  @Field()
  nombreArchivo: string;

  @Field()
  mimeType: string;

  @Field(() => Int)
  tamano: number;

  @Field()
  archivoBase64: string;
}
