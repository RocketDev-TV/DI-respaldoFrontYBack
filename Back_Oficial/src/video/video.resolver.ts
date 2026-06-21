import { Args, Context, Int, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Video, TipoVideo } from './entities/video.entity';
import { VideoService } from './video.service';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { AlumnoService } from '../alumno/alumno.service';
import { RolUsuario } from '../alumno/entities/alumno.entity';

@Resolver(() => Video)
export class VideoResolver {
  constructor(
    private readonly videoService: VideoService,
    private readonly alumnoService: AlumnoService,
  ) {}

  @ResolveField(() => [TipoVideo])
  tipos(@Parent() video: Video) {
    if (!video.tipos) return [];
    
    if (typeof video.tipos === 'string') {
      try {
        const parsed = (video.tipos as string).replace(/^{/, '[').replace(/}$/, ']');
        return JSON.parse(parsed);
      } catch (e) {
        return [];
      }
    }
    
    return video.tipos;
  }

  @Query(() => [Video], { name: 'videos' })
  findAll(
    @Args('contenidoId', { type: () => Int, nullable: true }) contenidoId?: number,
    @Args('asignacionId', { type: () => Int, nullable: true }) asignacionId?: number,
    @Args('publicado', { nullable: true }) publicado?: boolean,
  ) {
    return this.videoService.findAll(contenidoId, asignacionId, publicado);
  }

  @Query(() => Video, { name: 'video', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.videoService.findOne(id);
  }

  @Mutation(() => Video, { name: 'crearVideo' })
  create(@Args('datos') datos: CreateVideoInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.videoService.create(datos);
  }

  @Mutation(() => Video, { name: 'actualizarVideo' })
  update(@Args('datos') datos: UpdateVideoInput, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.videoService.update(datos);
  }

  @Mutation(() => Video, { name: 'eliminarVideo' })
  remove(@Args('id', { type: () => Int }) id: number, @Context() context: any) {
    this.alumnoService.requireRoles(context, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.videoService.remove(id);
  }
}