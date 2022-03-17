import { Usuario } from 'src/entities/usuario.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIOS_REPOSITORY',
    useValue: Usuario,
  },
];
