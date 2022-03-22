import { Categoria } from 'src/entities/categoria.entity';

export const categoriaProviders = [
  {
    provide: 'CATEGORIAS_REPOSITORY',
    useValue: Categoria,
  },
];
