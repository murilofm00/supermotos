import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioDTO } from './dto/usuario.dto';

@Injectable()
export class AuthService {
  constructor(private usuarioService: UsuarioService) {}

  async validarUsuario(email: string, senha: string): Promise<UsuarioDTO> {
    const usuario: Usuario = await this.usuarioService.findByEmail(email);
    if (usuario && usuario.senha === senha) {
      return usuario;
    }
    return null;
  }
}
