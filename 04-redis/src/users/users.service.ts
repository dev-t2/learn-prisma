import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

import { UsersRepository } from './users.repository';
import { CreateUserDto, FindUsersDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async createUsers() {
    return await this.usersRepository.createUsers();
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.usersRepository.createUser(createUserDto);
  }

  async createRedis() {
    return await this.cacheManager.set('key', 'value');
  }

  async findUsers(findUsersDto: FindUsersDto) {
    return await this.usersRepository.findUsers(findUsersDto);
  }

  async findUser(id: number) {
    return await this.usersRepository.findUser(id);
  }

  async findRedis() {
    return await this.cacheManager.get('key');
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

  async deleteRedis() {
    return await this.cacheManager.del('key');
  }
}
