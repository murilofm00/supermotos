import { Module } from '@nestjs/common';
import { MotosModule } from './moto/motos.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MotosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
