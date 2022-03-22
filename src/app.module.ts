import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/strategy/jwt/jwt-auth.guard';
import { RolesGuard } from './auth/roles.guard';
import { CategoriaModule } from './categoria/categoria.module';
import { MotoModule } from './moto/moto.module';
import { MarcaModule } from './marca/marca.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    MotoModule,
    UsuarioModule,
    AuthModule,
    CategoriaModule,
    MarcaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
