import { Sequelize } from 'sequelize-typescript';
import { Account, UsersAccount } from 'src/app/accounts/account.model';
import { User } from 'src/app/users/user.model';
import { SEQUELIZE } from 'src/core/constants';
import { dbConfig } from './db.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig);
      sequelize.addModels([User,Account,UsersAccount]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
