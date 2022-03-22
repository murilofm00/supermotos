import { Sequelize } from 'sequelize-typescript';
import { Categoria } from 'src/entities/categoria.entity';
import { Comentario } from 'src/entities/comentario.entity';
import { Marca } from 'src/entities/marca.entity';
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
      sequelize.addModels([Moto, Usuario, Categoria, Marca, Comentario]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
