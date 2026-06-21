import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Insignia } from './entities/insignia.entity';

@Resolver(() => Insignia)
export class InsigniaResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Insignia], { name: 'insignias' })
  async getInsignias() {
    return this.prisma.insignia.findMany();
  }
}