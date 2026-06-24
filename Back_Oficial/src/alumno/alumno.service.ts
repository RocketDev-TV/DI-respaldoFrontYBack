import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAlumnoInput } from './dto/create-alumno.input';
import { LoginAlumnoInput } from './dto/login-alumno.input';
import { PrismaService } from '../prisma/prisma.service';
import { AuthPayload, EstadoUsuario, RolUsuario } from './entities/alumno.entity';
import {
  SessionUser,
  createAuthToken,
  decodeIncomingPassword,
  hashPassword,
  isPasswordHashed,
  sanitizeBearerToken,
  verifyAuthToken,
  verifyPassword,
} from '../auth/auth.utils';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Injectable()
export class AlumnoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.alumno.findMany();
  }

  async obtenerGrupos() {
    return this.prisma.alumno.findGroups();
  }

  async create(datos: CreateAlumnoInput) {
    return this.createUsuarioInterno({
      ...datos,
      password: decodeIncomingPassword(datos.password),
      grupo: datos.grupo,
      rol: RolUsuario.ALUMNO,
      estado: EstadoUsuario.ACTIVO,
    });
  }

  async createUsuario(datos: CreateUsuarioInput) {
    return this.createUsuarioInterno({
      ...datos,
      password: decodeIncomingPassword(datos.password),
    });
  }

  async login(datos: LoginAlumnoInput): Promise<AuthPayload> {
    const usuario = await this.prisma.alumno.findUnique({
      where: { email: datos.email.toLowerCase().trim() },
    });

    if (!usuario) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    if (usuario.estado !== EstadoUsuario.ACTIVO) {
      throw new UnauthorizedException('La cuenta esta inactiva');
    }

    const passwordPlano = decodeIncomingPassword(datos.password);

    if (!verifyPassword(passwordPlano, usuario.password)) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    if (!isPasswordHashed(usuario.password)) {
      await this.prisma.alumno.update({
        where: { id: usuario.id },
        data: { password: hashPassword(passwordPlano) },
      });
    }

    return {
      token: createAuthToken(this.toSessionUser(usuario)),
      usuario,
    };
  }

  async updateUsuario(datos: UpdateUsuarioInput) {
    const usuarioExistente = await this.prisma.alumno.findUnique({ where: { id: datos.id } });
    if (!usuarioExistente) {
      throw new BadRequestException('Usuario no encontrado');
    }

    if (datos.email && datos.email.toLowerCase().trim() !== usuarioExistente.email) {
      const usuarioConEmail = await this.prisma.alumno.findUnique({
        where: { email: datos.email.toLowerCase().trim() },
      });

      if (usuarioConEmail && usuarioConEmail.id !== datos.id) {
        throw new BadRequestException('El correo ya esta registrado');
      }
    }

    return this.prisma.alumno.update({
      where: { id: datos.id },
      data: {
        ...datos,
        email: datos.email?.toLowerCase().trim(),
        nombre: datos.nombre?.trim(),
        apellido: datos.apellido?.trim(),
        grupo: datos.grupo?.trim(),
        password: datos.password ? hashPassword(decodeIncomingPassword(datos.password)) : undefined,
      },
    });
  }

  async removeUsuario(id: number) {
    const usuario = await this.prisma.alumno.findUnique({ where: { id } });
    if (!usuario) {
      throw new BadRequestException('Usuario no encontrado');
    }

    if (usuario.rol === RolUsuario.ADMINISTRADOR) {
      const administradores = await this.prisma.alumno.findMany();
      const activos = administradores.filter(
        (item) => item.rol === RolUsuario.ADMINISTRADOR && item.estado === EstadoUsuario.ACTIVO,
      );

      if (activos.length <= 1) {
        throw new BadRequestException('Debe existir al menos un administrador activo');
      }
    }

    return this.prisma.alumno.delete({ where: { id } });
  }

  getSessionUserFromContext(context: any): SessionUser {
    const token = sanitizeBearerToken(context?.req?.headers?.authorization);

    if (!token) {
      throw new UnauthorizedException('No se envio un token de acceso');
    }

    try {
      const payload = verifyAuthToken(token);
      return {
        id: payload.id,
        nombre: payload.nombre,
        apellido: payload.apellido,
        email: payload.email,
        grupo: payload.grupo,
        rol: payload.rol,
        estado: payload.estado,
      };
    } catch (error) {
      throw new UnauthorizedException(error instanceof Error ? error.message : 'Token invalido');
    }
  }

  requireRoles(context: any, roles: RolUsuario[]) {
    const usuario = this.getSessionUserFromContext(context);

    if (usuario.estado !== EstadoUsuario.ACTIVO) {
      throw new ForbiddenException('La cuenta esta inactiva');
    }

    if (!roles.includes(usuario.rol)) {
      throw new ForbiddenException('No tienes permisos para ejecutar esta accion');
    }

    return usuario;
  }

  private async createUsuarioInterno(datos: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    grupo: string;
    rol: RolUsuario;
    estado: EstadoUsuario;
  }) {
    this.validatePassword(datos.password);
    const email = datos.email.toLowerCase().trim();
    const usuarioExistente = await this.prisma.alumno.findUnique({ where: { email } });

    if (usuarioExistente) {
      throw new BadRequestException('El correo ya esta registrado');
    }

    return this.prisma.alumno.create({
      data: {
        nombre: datos.nombre.trim(),
        apellido: datos.apellido.trim(),
        email,
        grupo: datos.grupo.trim(),
        password: hashPassword(datos.password),
        rol: datos.rol,
        estado: datos.estado,
      },
    });
  }

  private validatePassword(password: string) {
    if (!password || password.length < 6) {
      throw new BadRequestException('La contraseña debe tener al menos 6 caracteres');
    }
  }

  private toSessionUser(usuario: any): SessionUser {
    return {
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      grupo: usuario.grupo,
      rol: usuario.rol,
      estado: usuario.estado,
    };
  }
}
