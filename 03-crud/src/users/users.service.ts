import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { CreateUserDto, FindUsersDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUsers() {
    return await this.usersRepository.createUsers();
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.usersRepository.createUser(createUserDto);
  }

  async findUsers(findUsersDto: FindUsersDto) {
    return await this.usersRepository.findUsers(findUsersDto);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.updateUser(id, updateUserDto);
  }

  async deleteUsers() {
    return await this.usersRepository.deleteUsers();
  }

  async deleteUser(id: number) {
    return await this.usersRepository.deleteUser(id);
  }
}
