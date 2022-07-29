import { IsNotEmpty, IsEmail, IsEnum } from 'class-validator';
import { accountPermission } from 'src/core/enums/accountPermission';

export class AccountDto {
  @IsNotEmpty()
  readonly company_name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly user_email: string;
}

export class AddUserToAccountDto {
  @IsNotEmpty()
  @IsEmail()
  readonly user_email: string;

  @IsNotEmpty()
  readonly accountId: number;

  @IsEnum(accountPermission)
  readonly permission: accountPermission;
}
