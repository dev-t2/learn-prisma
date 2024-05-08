import { ApiProperty } from '@nestjs/swagger';
import { UserInfo as UserInfoModal } from '@prisma/client';
import { IsMobilePhone, IsPositive } from 'class-validator';
import { Transform } from 'class-transformer';

import { Common } from 'src/common/entities';

export class UserInfo extends Common implements UserInfoModal {
  @ApiProperty({ required: true, description: 'User ID' })
  @IsPositive()
  userId: number;

  @ApiProperty({ required: true, description: 'Age' })
  @IsPositive()
  age: number;

  @ApiProperty({ required: true, description: 'Phone Number' })
  @Transform(({ value }: { value: string }) => value.replaceAll('-', ''))
  @IsMobilePhone('ko-KR')
  phoneNumber: string;
}
