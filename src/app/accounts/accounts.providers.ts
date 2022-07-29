import { ACCOUNT_REPOSITORY, USERS_ACCOUNT_REPOSITORY,  } from 'src/core/constants';
import { Account, UsersAccount } from './account.model';

export const accountsProviders = [
  {
    provide: ACCOUNT_REPOSITORY,
    useValue: Account,
  },
  {
    provide: USERS_ACCOUNT_REPOSITORY,
    useValue: UsersAccount
  }
];
