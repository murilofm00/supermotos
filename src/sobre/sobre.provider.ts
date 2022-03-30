import { Sobre } from 'src/entities/sobre.entity';

export const sobreProviders = [
  {
    provide: 'SOBRE_REPOSITORY',
    useValue: Sobre,
  },
];
