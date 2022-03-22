import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { categoriaProviders } from './categoria.provider';

@Module({
  controllers: [CategoriaController],
  providers: [CategoriaService, ...categoriaProviders],
})
export class CategoriaModule {}
