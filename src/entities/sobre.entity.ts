import { AllowNull, Column, Model, Table } from 'sequelize-typescript';
@Table
export class Sobre extends Model {
  @AllowNull(false)
  @Column
  sobre: string;

  @AllowNull(false)
  @Column
  banner_sobre: string;
}
