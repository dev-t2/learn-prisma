import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';

export class Common {
  @ApiProperty({ description: 'Created At' })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ description: 'Updated At' })
  @IsDate()
  updatedAt: Date;
}
