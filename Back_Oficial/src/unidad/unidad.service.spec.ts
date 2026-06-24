import { Test, TestingModule } from '@nestjs/testing';
import { UnidadService } from './unidad.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UnidadService', () => {
  let service: UnidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UnidadService,
        {
          provide: PrismaService,
          useValue: {
            unidad: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UnidadService>(UnidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
