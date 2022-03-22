import {
  AllowNull,
  Column,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Comentario } from './comentario.entity';

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

  @HasMany(() => Comentario)
  comentarios: Comentario[];
}
