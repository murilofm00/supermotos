import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

@Table
export class Usuario extends Model {
  @AllowNull(false)
  @Column
  nome: string;

  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  senha: string;

  @AllowNull(false)
  @Column
  isAdmin: boolean;
}
