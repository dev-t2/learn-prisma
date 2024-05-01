import { IntersectionType, PickType } from '@nestjs/swagger';

import { User, UserInfo } from './entities';

export class CreateUserDto extends IntersectionType(
  PickType(User, ['email'] as const),
  PickType(UserInfo, ['phoneNumber'] as const),
) {}
