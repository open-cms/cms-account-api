import {
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table
export class Account extends Model {
  @Column({ allowNull: false })
  company_name: string;

  @BelongsToMany(() => User, () => UsersAccount)
  users: User[];
}

@Table
export class UsersAccount extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Account)
  @Column
  accountId: number;

  @Column
  permission: number;
}
