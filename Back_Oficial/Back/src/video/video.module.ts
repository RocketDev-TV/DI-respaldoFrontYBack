import { Module } from '@nestjs/common';
import { VideoResolver } from './video.resolver';
import { VideoService } from './video.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AlumnoModule } from '../alumno/alumno.module';

@Module({
  imports: [PrismaModule, AlumnoModule],
  providers: [VideoResolver, VideoService],
  exports: [VideoService],
})
export class VideoModule {}
