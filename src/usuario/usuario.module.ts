import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usuarioProviders } from './usuario.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, ...usuarioProviders],
  exports: [UsuarioService],
})
export class UsuarioModule {}
