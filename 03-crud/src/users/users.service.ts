import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUsers() {
    return await this.usersRepository.createUsers();
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.usersRepository.createUser(createUserDto);
  }

  async deleteUsers() {
    return await this.usersRepository.deleteUsers();
  }

  async deleteUser(id: number) {
    return await this.usersRepository.deleteUser(id);
  }
}
