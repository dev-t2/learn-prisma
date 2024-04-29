import { User as UserModel } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPositive } from 'class-validator';

export class User implements UserModel {
  @ApiProperty({ required: true, description: 'ID' })
  @IsPositive()
  id: number;

  @ApiProperty({ required: true, description: 'Email' })
  @IsEmail()
  email: string;
}
