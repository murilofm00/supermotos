import { Comentario } from 'src/entities/comentario.entity';

export const comentarioProviders = [
  {
    provide: 'COMENTARIOS_REPOSITORY',
    useValue: Comentario,
  },
];
