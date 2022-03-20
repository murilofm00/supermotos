import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role, Roles } from './roles.decorator';
import { LocalAuthGuard } from './strategy/local/local-auth.guard';

@Roles(Role.Admin)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Roles(Role.Public)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
