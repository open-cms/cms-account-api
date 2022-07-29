import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountDto, AddUserToAccountDto } from './dto/account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}
  
  @Post('create')
  async create(@Body() account: AccountDto) {
    return await this.accountService.create(account)
  }

  @Post('addUser')
  async addUser(@Body() addUserToAccountDto: AddUserToAccountDto) {
    return await this.accountService.addUser(addUserToAccountDto)
  }
}
