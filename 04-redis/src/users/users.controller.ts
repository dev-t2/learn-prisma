import { Controller, Post, Body, Delete, Param, Patch, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ParsePositiveIntPipe } from 'src/common/pipes';
import { UsersService } from './users.service';
import { CreateUserDto, FindUsersDto, UpdateUserDto } from './users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @Get()
  async findUsers(@Query() findUsersDto: FindUsersDto) {
    return await this.usersService.findUsers(findUsersDto);
  }

  @Delete()
  async deleteUsers() {
    return await this.usersService.deleteUsers();
  }

  @Post('faker')
  async createUsers() {
    return await this.usersService.createUsers();
  }

  @Post('redis')
  async createRedis() {
    return await this.usersService.createRedis();
  }

  @Get('redis')
  async findRedis() {
    return await this.usersService.findRedis();
  }

  @Delete('redis')
  async deleteRedis() {
    return await this.usersService.deleteRedis();
  }

  @Get(':id')
  async findUser(@Param('id', ParsePositiveIntPipe) id: number) {
    return await this.usersService.findUser(id);
  }

  @Patch(':id')
  async updateUser(
    @Param('id', ParsePositiveIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParsePositiveIntPipe) id: number) {
    return await this.usersService.deleteUser(id);
  }
}
