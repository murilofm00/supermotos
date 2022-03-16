import { Injectable, Inject } from '@nestjs/common';
import { Moto } from '../entities/moto.entity';

@Injectable()
export class MotosService {
  constructor(
    @Inject('MOTOS_REPOSITORY')
    private motosRepository: typeof Moto,
  ) {}

  async findAll(): Promise<Moto[]> {
    return this.motosRepository.findAll<Moto>();
  }

  async Add(motoDTO: Moto): Promise<Moto> {
    const moto: Moto = new Moto(motoDTO);
    await moto.save();
    return moto;
  }
}
