import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Account, UsersAccount } from '../accounts/account.model';

@Table
export class User extends Model {
  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false, validate: { isEmail: true }, unique: true })
  email: string;

  @Column({
    allowNull: false,
    unique: true,
  })
  phone: string;

  @Column({ defaultValue: false })
  isAuthenticated: boolean;

  @BelongsToMany(() => Account, () => UsersAccount)
  accounts: Account[];
}
