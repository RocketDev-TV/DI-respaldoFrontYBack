import { BadRequestException, ForbiddenException } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { RolUsuario } from '../alumno/entities/alumno.entity';

describe('EvaluacionService', () => {
  const prisma = {
    asignacion: {
      findUnique: jest.fn(),
    },
    entrega: {
      findMany: jest.fn(),
      upsert: jest.fn(),
      delete: jest.fn(),
    },
    calificacionAsignacion: {
      findMany: jest.fn(),
      upsert: jest.fn(),
    },
  };

  const service = new EvaluacionService(prisma as never);
  const alumno = {
    id: 7,
    nombre: 'Alumno',
    apellido: 'Prueba',
    email: 'alumno@example.com',
    grupo: 'TC-01',
    rol: RolUsuario.ALUMNO,
    estado: 'ACTIVO',
  } as never;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('rechaza archivos mayores a 10 MB', async () => {
    await expect(
      service.registrarEntrega(
        {
          alumnoId: 7,
          asignacionId: 2,
          nombreArchivo: 'grande.pdf',
          mimeType: 'application/pdf',
          tamano: 10 * 1024 * 1024 + 1,
          archivoBase64: 'AAAA',
        },
        alumno,
      ),
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('impide entregar para otro alumno', async () => {
    await expect(
      service.registrarEntrega(
        {
          alumnoId: 8,
          asignacionId: 2,
          nombreArchivo: 'tarea.pdf',
          mimeType: 'application/pdf',
          tamano: 100,
          archivoBase64: 'AAAA',
        },
        alumno,
      ),
    ).rejects.toBeInstanceOf(ForbiddenException);
  });

  it('deriva grupo y parcial desde la asignación y registra la entrega', async () => {
    prisma.asignacion.findUnique.mockResolvedValue({
      id: 2,
      grupo: 'TC-01',
      periodo: 1,
    });
    prisma.entrega.upsert.mockResolvedValue({ id: 1 });

    await service.registrarEntrega(
      {
        alumnoId: 7,
        asignacionId: 2,
        nombreArchivo: 'tarea.pdf',
        mimeType: 'application/pdf',
        tamano: 100,
        archivoBase64: 'AAAA',
      },
      alumno,
    );

    expect(prisma.entrega.upsert).toHaveBeenCalledWith({
      data: expect.objectContaining({
        alumnoId: 7,
        asignacionId: 2,
        grupo: 'TC-01',
        parcial: 1,
      }),
    });
  });
});
