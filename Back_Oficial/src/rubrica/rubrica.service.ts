import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RubricaService {
    constructor(private prisma: PrismaService) {}

    async findByPeriodo(periodo: number) {
    return this.prisma.rubrica.findMany({
        where: { periodo },
    });
    }
}