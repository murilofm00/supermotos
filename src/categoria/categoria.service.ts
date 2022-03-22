import { Inject, Injectable } from '@nestjs/common';
import { Categoria } from 'src/entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @Inject('CATEGORIAS_REPOSITORY')
    private categoriasRepository: typeof Categoria,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const categoria: Categoria = this.categoriasRepository.build({
      ...createCategoriaDto,
    });
    await categoria.save();
    return categoria;
  }

  findAll(): Promise<Categoria[]> {
    return this.categoriasRepository.findAll<Categoria>();
  }

  findOne(id: number) {
    return this.categoriasRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria: Categoria = await this.findOne(id);
    await categoria.update({ ...updateCategoriaDto });
    return categoria;
  }

  remove(id: number) {
    return this.categoriasRepository.destroy({
      where: {
        id: id,
      },
    });
  }
}
