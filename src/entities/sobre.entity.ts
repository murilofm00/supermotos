import { AllowNull, Column, Model } from 'sequelize-typescript';

export class Sobre extends Model {
  @AllowNull(false)
  @Column
  sobre: string;

  @AllowNull(false)
  @Column
  banner_sobre: string;
}
