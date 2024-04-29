import { PickType } from '@nestjs/swagger';

import { User } from './user.entity';

export class CreateUserDto extends PickType(User, ['email'] as const) {}
