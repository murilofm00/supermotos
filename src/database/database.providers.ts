import { Sequelize } from 'sequelize-typescript';
import { Moto } from 'src/entities/moto.entity';
import { Usuario } from 'src/entities/usuario.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './assets/db/database.sqlite',
      });
      sequelize.options.omitNull = true;
      sequelize.addModels([Moto, Usuario]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
