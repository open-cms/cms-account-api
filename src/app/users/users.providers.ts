import { USER_REPOSITORY } from 'src/core/constants';
import { User } from './user.model';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
