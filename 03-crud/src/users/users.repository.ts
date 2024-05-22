import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { faker } from '@faker-js/faker/locale/ko';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, FindUsersDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUsers() {
    try {
      const queries = new Array(100).fill(null).map(() => {
        return this.prismaService.user.create({
          data: {
            email: faker.internet.email(),
            userInfo: { create: { phoneNumber: faker.phone.number().replaceAll('-', '') } },
          },
          include: { userInfo: true },
        });
      });

      const users = await this.prismaService.$transaction(queries);

      return { users };
    } catch (e) {
      console.error(e);

      throw new InternalServerErrorException();
    }
  }

  async createUser({ email, phoneNumber }: CreateUserDto) {
    try {
      return await this.prismaService.user.create({
        data: { email, userInfo: { create: { phoneNumber } } },
        include: { userInfo: true },
      });
    } catch (e) {
      console.error(e);

      throw new InternalServerErrorException();
    }
  }

  async findUsers({ page, take }: FindUsersDto) {
    try {
      return await this.prismaService.user.findMany({
        orderBy: { id: 'asc' },
        skip: take * (page - 1),
        take,
      });
    } catch (e) {
      console.error(e);

      throw new InternalServerErrorException();
    }
  }

  async findUser(id: number) {
    try {
      return await this.prismaService.user.findUnique({
        where: { id },
        // include: { userInfo: true },
        select: { id: true, email: true, userInfo: { select: { phoneNumber: true, age: true } } },
      });
    } catch (e) {
      console.error(e);

      throw new InternalServerErrorException();
    }
  }

  async updateUser(id: number, { email }: UpdateUserDto) {
    try {
      return await this.prismaService.user.update({
        where: { id },
        data: { email, userInfo: { update: { age: { set: 35 } } } },
        include: { userInfo: true },
      });
    } catch (e) {
      console.error(e);

      throw new InternalServerErrorException();
    }
  }

  async deleteUsers() {
    try {
      return await this.prismaService.user.deleteMany({ where: { id: { in: [3, 4, 5] } } });
    } catch (e) {
      console.error(e);

      throw new InternalServerErrorException();
    }
  }

  async deleteUser(id: number) {
    try {
      return await this.prismaService.user.delete({ where: { id } });
    } catch (e) {
      console.error(e);

      throw new InternalServerErrorException();
    }
  }
}
