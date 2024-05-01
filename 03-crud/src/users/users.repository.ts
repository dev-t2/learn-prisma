import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { faker } from '@faker-js/faker/locale/ko';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

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
}
