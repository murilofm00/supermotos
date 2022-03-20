import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt/jwt.strategy';
import { LocalStrategy } from './strategy/local/local.strategy';

const JWT_TOKEN = process.env.JWT_TOKEN;
@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_TOKEN,
      signOptions: {
        expiresIn: '60m',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
