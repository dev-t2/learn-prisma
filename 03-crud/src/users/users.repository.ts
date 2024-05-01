import { Injectable, InternalServerErrorException } from '@nestjs/common';

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
}
