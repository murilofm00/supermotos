import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Moto } from './moto.entity';
import { Usuario } from './usuario.entity';

@Table
export class Comentario extends Model {
  @AllowNull(false)
  @Column
  comentario: string;

  @ForeignKey(() => Moto)
  @AllowNull(false)
  @Column
  idMoto: number;

  @ForeignKey(() => Usuario)
  @AllowNull(false)
  @Column
  idUsuario: number;

  @BelongsTo(() => Moto)
  moto: Moto;

  @BelongsTo(() => Usuario)
  usuario: Usuario;
}
