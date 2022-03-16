import { Sequelize } from 'sequelize-typescript';
import { Moto } from 'src/entities/moto.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './assets/db/database.sqlite',
      });
      sequelize.addModels([Moto]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
