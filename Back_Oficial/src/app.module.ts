import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { AlumnoModule } from './alumno/alumno.module'; // Importa el módulo AlumnoModule
import { ContenidoModule } from './contenido/contenido.module';
import { UnidadModule } from './unidad/unidad.module';
import { RubricaModule } from './rubrica/rubrica.module';
import { InsigniaModule } from './insignia/insignia.module';
import { AsignacionModule } from './asignacion/asignacion.module';
import { VideoModule } from './video/video.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { loadLocalEnvFiles } from './load-env';

loadLocalEnvFiles();

@Module({
  imports: [
    PrismaModule,
    /* Para usar con resend
    MailerModule.forRoot({
      transport: {
        host: 'smtp.resend.com',
        port: 465,
        secure: true, // puerto 465 (SSL)
        auth: {
          user: 'resend',
          pass: process.env.RESEND_API_KEY,
        },
      },
      defaults: {
        from: process.env.EMAIL_FROM,
      },
    }),
    */

    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
      defaults: {
        from: `"Soporte Sara M. García" <${process.env.EMAIL_USER}>`,
      },
    }),
    AlumnoModule,
    ContenidoModule,
    UnidadModule,
    RubricaModule,
    InsigniaModule,
    AsignacionModule,
    VideoModule,
    AuthModule,
    EvaluacionModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:
        process.env.NODE_ENV === 'production' ? true : join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: process.env.NODE_ENV !== 'production',
      introspection: process.env.NODE_ENV !== 'production',
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
