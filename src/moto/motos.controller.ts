import { Body, Controller, Get, Post } from '@nestjs/common';
import { Moto } from 'src/entities/moto.entity';
import { MotosService } from './motos.service';

@Controller('motos')
export class MotosController {
  constructor(private readonly motosService: MotosService) {}

  @Get()
  async getAll(): Promise<Moto[]> {
    const motos: Moto[] = await this.motosService.findAll();
    return motos;
  }

  @Post()
  async Save(@Body() motoDTO: Moto): Promise<Moto> {
    const moto: Moto = await this.motosService.Add(motoDTO);
    return moto;
  }
}
