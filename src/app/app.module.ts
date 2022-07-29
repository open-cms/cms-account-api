import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/config/db/db.module';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UsersModule, AccountsModule],
})
export class AppModule {}
