import {
  AllowNull,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Categoria } from './categoria.entity';

@Table
export class Moto extends Model {
  @AllowNull(false)
  @Column
  nome: string;

  @AllowNull(false)
  @Column
  ano: number;

  @AllowNull(false)
  @Column
  descricao: string;

  @AllowNull(false)
  @Column
  potencia: number;

  @ForeignKey(() => Categoria)
  @AllowNull(false)
  @Column
  idCategoria: number;
}
