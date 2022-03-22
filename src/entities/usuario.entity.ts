import { AllowNull, Column, Model, Table, Unique } from 'sequelize-typescript';

@Table
export class Usuario extends Model {
  @AllowNull(false)
  @Column
  nome: string;

  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column
  senha: string;

  @AllowNull(false)
  @Column
  isAdmin: boolean;
}
