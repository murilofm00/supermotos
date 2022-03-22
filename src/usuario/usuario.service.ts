import { Inject, Injectable } from '@nestjs/common';
import { Usuario } from 'src/entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIOS_REPOSITORY')
    private usuariosRepository: typeof Usuario,
  ) {}

  async create(
    createUsuarioDto: CreateUsuarioDto,
    isAdmin: boolean,
  ): Promise<Usuario> {
    const usuario: Usuario = this.usuariosRepository.build({
      ...createUsuarioDto,
      isAdmin,
    });
    await usuario.save();
    return usuario;
  }

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.findAll<Usuario>();
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  findByEmail(email: string) {
    return this.usuariosRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
    isAdmin: boolean,
  ): Promise<Usuario> {
    const usuario: Usuario = await this.findOne(id);
    await usuario.update({ ...updateUsuarioDto, isAdmin });
    return usuario;
  }

  remove(id: number) {
    return this.usuariosRepository.destroy({
      where: {
        id: id,
      },
    });
  }
}
