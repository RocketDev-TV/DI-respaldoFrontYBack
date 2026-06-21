import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '@nestjs-modules/mailer';
import { decodeIncomingPassword, hashPassword } from './auth.utils';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private mailer: MailerService,
  ) {}

  async solicitarRecuperacion(email: string) {
    const emailLimpio = email.toLowerCase().trim();
    const alumno = await this.prisma.alumno.findUnique({ where: { email: emailLimpio } });
    
    if (!alumno) {
      throw new NotFoundException('El correo no está registrado');
    }

    const codigo = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
    
    await (this.prisma as any).verificationCode.create({
      data: {
        code: codigo,
        expiresAt,
        alumnoId: alumno.id,
      },
    });

    await this.mailer.sendMail({
      to: alumno.email,
      subject: 'Código de Recuperación de Contraseña',
      text: `Hola ${alumno.nombre},\n\nTu código para restablecer tu contraseña es: ${codigo}\n\nEste código expirará en 15 minutos. Si no solicitaste esto, ignora este mensaje.`,
    });

    return true;
  }

  async restablecerPassword(email: string, codigo: string, nuevoPasswordEncriptado: string) {
    const emailLimpio = email.toLowerCase().trim();
    const alumno = await this.prisma.alumno.findUnique({ where: { email: emailLimpio } });
    
    if (!alumno) throw new NotFoundException('Usuario no encontrado');

    const verificacion = await (this.prisma as any).verificationCode.findFirst({
      where: { alumnoId: alumno.id, code: codigo },
      orderBy: { createdAt: 'desc' },
    });
    if (!verificacion) {
      throw new BadRequestException('El código es incorrecto');
    }

    if (verificacion.expiresAt < new Date()) {
      throw new BadRequestException('El código ha expirado. Solicita uno nuevo.');
    }

    const passwordPlano = decodeIncomingPassword(nuevoPasswordEncriptado);
    const passwordHasheado = hashPassword(passwordPlano);

    await this.prisma.alumno.update({
      where: { id: alumno.id },
      data: { password: passwordHasheado },
    });

    await (this.prisma as any).verificationCode.deleteMany({
      where: { alumnoId: alumno.id },
    });

    return true;
  }
}