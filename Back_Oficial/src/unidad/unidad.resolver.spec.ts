import { Test, TestingModule } from '@nestjs/testing';
import { UnidadResolver } from './unidad.resolver';
import { UnidadService } from './unidad.service';

describe('UnidadResolver', () => {
  let resolver: UnidadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadResolver, UnidadService],
    }).compile();

    resolver = module.get<UnidadResolver>(UnidadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
