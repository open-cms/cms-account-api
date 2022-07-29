import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('create')
  async create(@Body() user: UserDto) {
    return await this.userService.create(user)
  }
}
