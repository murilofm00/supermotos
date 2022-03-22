import { Module } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaController } from './marca.controller';
import { marcaProviders } from './marca.provider';

@Module({
  controllers: [MarcaController],
  providers: [MarcaService, ...marcaProviders],
})
export class MarcaModule {}
