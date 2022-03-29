import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioDTO } from './dto/usuario.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async validarUsuario(email: string, senha: string): Promise<UsuarioDTO> {
    const usuario: Usuario = await this.usuarioService.findByEmail(email);
    if (usuario && usuario.senha === senha) {
      return usuario as UsuarioDTO;
    }
    return null;
  }

  async login(usuario: any) {
    const payload: UsuarioDTO = {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      isAdmin: usuario.isAdmin,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
