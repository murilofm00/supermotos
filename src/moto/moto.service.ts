import { Inject, Injectable } from '@nestjs/common';
import { Categoria } from 'src/entities/categoria.entity';
import { Comentario } from 'src/entities/comentario.entity';
import { Marca } from 'src/entities/marca.entity';
import { Moto } from 'src/entities/moto.entity';
import { Usuario } from 'src/entities/usuario.entity';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';

@Injectable()
export class MotoService {
  constructor(
    @Inject('MOTOS_REPOSITORY')
    private motosRepository: typeof Moto,
  ) {}

  async create(createMotoDto: CreateMotoDto) {
    const moto: Moto = this.motosRepository.build({
      ...createMotoDto,
    });
    await moto.save();
    return moto;
  }

  findAll() {
    return this.motosRepository.findAll<Moto>({ include: [Categoria, Marca] });
  }

  findOne(id: number) {
    return this.motosRepository.findOne({
      include: [Categoria, Marca, { model: Comentario, include: [Usuario] }],
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateMotoDto: UpdateMotoDto): Promise<Moto> {
    const moto: Moto = await this.findOne(id);
    await moto.update({ ...updateMotoDto });
    return moto;
  }

  remove(id: number) {
    return this.motosRepository.destroy({
      where: {
        id: id,
      },
    });
  }
}
