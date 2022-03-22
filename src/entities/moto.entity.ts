import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Categoria } from './categoria.entity';

@Table
export class Moto extends Model {
  @Column
  nome: string;

  @Column
  ano: number;

  @Column
  descricao: string;

  @Column
  potencia: number;

  @ForeignKey(() => Categoria)
  @Column
  idCategoria: number;
}
