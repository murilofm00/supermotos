import { Table, Column, Model } from 'sequelize-typescript';

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
}
