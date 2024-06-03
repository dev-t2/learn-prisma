import { ApiProperty } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { IsEmail, IsPositive } from 'class-validator';

import { Common } from 'src/common/entities';

export class User extends Common implements UserModel {
  @ApiProperty({ required: true, description: 'ID' })
  @IsPositive()
  id: number;

  @ApiProperty({ required: true, description: 'Email' })
  @IsEmail()
  email: string;
}
