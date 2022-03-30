import { Module } from '@nestjs/common';
import { SobreService } from './sobre.service';
import { SobreController } from './sobre.controller';
import { sobreProviders } from './sobre.provider';

@Module({
  controllers: [SobreController],
  providers: [SobreService, ...sobreProviders],
})
export class SobreModule {}
