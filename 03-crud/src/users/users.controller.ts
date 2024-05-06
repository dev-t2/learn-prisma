import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';
import { ParsePositiveIntPipe } from 'src/common/pipes';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @Delete()
  async deleteUsers() {
    return await this.usersService.deleteUsers();
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParsePositiveIntPipe) id: number) {
    return await this.usersService.deleteUser(id);
  }

  @Post('faker')
  async createUsers() {
    return await this.usersService.createUsers();
  }
}
