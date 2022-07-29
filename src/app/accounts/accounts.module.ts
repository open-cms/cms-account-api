import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AccountsController } from './accounts.controller';

import { accountsProviders } from './accounts.providers';
import { AccountsService } from './accounts.service';

@Module({
  imports: [UsersModule],
  controllers: [AccountsController],
  providers: [...accountsProviders, AccountsService],
  exports: [AccountsService],
})
export class AccountsModule {}
