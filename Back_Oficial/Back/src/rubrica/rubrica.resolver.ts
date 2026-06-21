import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Rubrica } from './entities/rubrica.entity';

@Resolver(() => Rubrica)
export class RubricaResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Rubrica], { name: 'rubricasPorPeriodo' })
  async getRubricas(
    @Args('periodo', { type: () => Int }) periodo: number,
  ) {
    return this.prisma.rubrica.findMany({
      where: {
        periodo: periodo,
      },
    });
  }
}