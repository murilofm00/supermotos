import { Module } from '@nestjs/common';
import { MotoService } from './moto.service';
import { MotoController } from './moto.controller';
import { motoProviders } from './moto.provider';

@Module({
  controllers: [MotoController],
  providers: [MotoService, ...motoProviders],
})
export class MotoModule {}
