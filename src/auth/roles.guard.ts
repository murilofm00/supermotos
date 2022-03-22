import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from './dto/usuario.dto';
import { Role } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles: Role[] = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (roles.includes(Role.Public)) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const user = request.user as UsuarioDTO;

    if (roles.includes(Role.Admin)) {
      return user.isAdmin;
    }

    if (roles.includes(Role.User)) {
      return !!user;
    }

    return false;
  }
}
