import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Insignia {
    @Field(() => Int)
    id: number;

    @Field()
    nombre: string;

    @Field()
    nivel: string;

    @Field()
    icon: string;
}