import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './strategy/local-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return req.user;
  }
}
