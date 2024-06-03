import { ApiProperty, IntersectionType, PickType } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';

import { User, UserInfo } from './entities';

export class CreateUserDto extends IntersectionType(
  PickType(User, ['email'] as const),
  PickType(UserInfo, ['phoneNumber'] as const),
) {}

export class FindUsersDto {
  @ApiProperty({ required: false, nullable: true, description: 'Page' })
  @IsOptional()
  @IsPositive()
  page: number = 1;

  @ApiProperty({ required: false, nullable: true, description: 'Take' })
  @IsOptional()
  @IsPositive()
  take: number = 20;
}

export class UpdateUserDto extends PickType(User, ['email'] as const) {}
