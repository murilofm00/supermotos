import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Moto } from './moto.entity';

@Table
export class Categoria extends Model {
  @Column
  descricao: string;

  @HasMany(() => Moto)
  motos: Moto[];
}
