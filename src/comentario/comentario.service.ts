import { Inject, Injectable } from '@nestjs/common';
import { Comentario } from 'src/entities/comentario.entity';
import { Moto } from 'src/entities/moto.entity';
import { Usuario } from 'src/entities/usuario.entity';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Injectable()
export class ComentarioService {
  constructor(
    @Inject('COMENTARIOS_REPOSITORY')
    private comentariosRepository: typeof Comentario,
  ) {}

  async create(createComentarioDto: CreateComentarioDto) {
    const comentario: Comentario = this.comentariosRepository.build({
      ...createComentarioDto,
    });
    await comentario.save();
    return comentario;
  }

  async findAll() {
    const comentarios: Comentario[] =
      await this.comentariosRepository.findAll<Comentario>({
        include: [Moto, Usuario],
      });
    for (const comentario of comentarios) {
      delete comentario.usuario.isAdmin;
    }

    return comentarios;
  }

  findOne(id: number) {
    return this.comentariosRepository.findOne({
      include: [Moto, Usuario],
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateComentarioDto: UpdateComentarioDto) {
    const comentario: Comentario = await this.findOne(id);
    await comentario.update({ ...updateComentarioDto });
    return comentario;
  }

  remove(id: number) {
    return this.comentariosRepository.destroy({
      where: {
        id: id,
      },
    });
  }
}
