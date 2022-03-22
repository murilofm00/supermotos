import { Inject, Injectable } from '@nestjs/common';
import { Marca } from 'src/entities/marca.entity';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';

@Injectable()
export class MarcaService {
  constructor(
    @Inject('MARCAS_REPOSITORY') private marcasRepository: typeof Marca,
  ) {}

  async create(createMarcaDto: CreateMarcaDto) {
    const marca: Marca = this.marcasRepository.build({
      ...createMarcaDto,
    });
    await marca.save();
    return marca;
  }

  findAll() {
    return this.marcasRepository.findAll<Marca>();
  }

  findOne(id: number) {
    return this.marcasRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    const marca: Marca = await this.findOne(id);
    await marca.update({ ...updateMarcaDto });
    return marca;
  }

  remove(id: number) {
    return this.marcasRepository.destroy({
      where: {
        id: id,
      },
    });
  }
}
