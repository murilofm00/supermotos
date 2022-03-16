import { Moto } from 'src/entities/moto.entity';

export const motosProviders = [
  {
    provide: 'MOTOS_REPOSITORY',
    useValue: Moto,
  },
];
