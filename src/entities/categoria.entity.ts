import { AllowNull, Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Moto } from './moto.entity';

@Table
export class Categoria extends Model {
  @AllowNull(false)
  @Column
  descricao: string;

  @HasMany(() => Moto)
  motos: Moto[];
}
