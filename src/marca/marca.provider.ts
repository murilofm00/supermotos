import { Marca } from 'src/entities/marca.entity';

export const marcaProviders = [
  {
    provide: 'MARCAS_REPOSITORY',
    useValue: Marca,
  },
];
