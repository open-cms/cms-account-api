import { Inject, Injectable } from '@nestjs/common';
import { ACCOUNT_REPOSITORY, USER_REPOSITORY } from 'src/core/constants';
import { accountPermission } from 'src/core/enums/accountPermission';
import { User } from '../users/user.model';
import { UsersService } from '../users/users.service';
import { Account } from './account.model';
import { AccountDto, AddUserToAccountDto } from './dto/account.dto';

@Injectable()
export class AccountsService {
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService,
    @Inject(ACCOUNT_REPOSITORY)
    private readonly accountRepository: typeof Account,
  ) {}

  async createAccountUserRelation(
    account: Account,
    user: User,
    permission: number,
  ): Promise<{ user: User; account: Account }> {
    account.$set('users', user, {
      through: { permission: permission },
    });
    return { user, account };
  }

  async create(accountRequest: AccountDto): Promise<Account> {
    const user = await this.usersService.findOneByEmail(
      accountRequest.user_email,
    );
    const body = {
      company_name: accountRequest.company_name,
    };
    const account = await this.accountRepository.create<Account>(body);
    return (
      await this.createAccountUserRelation(account, user, accountPermission.ALL)
    ).account;
  }

  async findOneById(id: number): Promise<Account> {
    return await this.accountRepository.findOne<Account>({ where: { id } });
  }

  async addUser(addUserToAccountDto: AddUserToAccountDto): Promise<void> {    
    const user = await this.usersService.findOneByEmail(
      addUserToAccountDto.user_email,
    );
    const account = await this.findOneById(addUserToAccountDto.accountId);
    await this.createAccountUserRelation(
      account,
      user,
      addUserToAccountDto.permission,
    );
  }
}
