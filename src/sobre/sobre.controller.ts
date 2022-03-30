import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { Role, Roles } from 'src/auth/roles.decorator';
import { SobreDto } from './dto/sobre.dto';
import { SobreService } from './sobre.service';

@Controller('sobre')
export class SobreController {
  constructor(private readonly sobreService: SobreService) {}

  @Roles(Role.Admin)
  @Patch()
  update(@Body() motoDto: SobreDto) {
    return this.sobreService.update(motoDto);
  }

  @Roles(Role.User)
  @Get()
  read() {
    return this.sobreService.find();
  }
}
