import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'senha',
    });
  }

  async validate(email: string, senha: string): Promise<any> {
    const usuario = await this.authService.validarUsuario(email, senha);
    if (!usuario) {
      throw new UnauthorizedException();
    }
    return usuario;
  }
}
