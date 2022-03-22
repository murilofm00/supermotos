import { Moto } from 'src/entities/moto.entity';

export const motoProviders = [
  {
    provide: 'MOTOS_REPOSITORY',
    useValue: Moto,
  },
];
