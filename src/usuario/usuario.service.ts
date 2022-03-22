import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { SequelizeScopeError } from 'sequelize/types';
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

    try {
      await usuario.save();
      return usuario;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new HttpException('Email já utilizado.', HttpStatus.CONFLICT);
      } else {
        throw new HttpException(error.errors[0].message, HttpStatus.CONFLICT);
      }
    }
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
