import {
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class UserEntity extends Model {
  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;
}
