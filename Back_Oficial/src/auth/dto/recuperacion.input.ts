import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SolicitarRecuperacionInput {
  @Field()
  email: string;
}

@InputType()
export class RestablecerPasswordInput {
  @Field()
  email: string;
  
  @Field()
  codigo: string;
  
  @Field()
  nuevoPassword: string;
}