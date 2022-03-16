import { Module } from '@nestjs/common';
import { MotosController } from './motos.controller';
import { MotosService } from './motos.service';
import { DatabaseModule } from '../database/database.module';
import { motosProviders } from './motos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MotosController],
  providers: [MotosService, ...motosProviders],
})
export class MotosModule {}
