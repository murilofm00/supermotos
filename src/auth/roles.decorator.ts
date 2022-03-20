import { SetMetadata } from '@nestjs/common';

export enum Role {
  Public = 'public',
  Admin = 'admin',
  User = 'user',
}

export const Roles = (...args: Role[]) => SetMetadata('roles', args);
