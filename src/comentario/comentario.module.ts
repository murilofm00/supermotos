import { Module } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioController } from './comentario.controller';
import { comentarioProviders } from './comentario.provider';

@Module({
  controllers: [ComentarioController],
  providers: [ComentarioService, ...comentarioProviders],
})
export class ComentarioModule {}
