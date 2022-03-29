import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { Role, Roles } from 'src/auth/roles.decorator';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Roles(Role.Public)
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto, false);
  }

  @Roles(Role.Admin)
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Roles(Role.User)
  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: any) {
    const requestUser = request?.user;
    if (
      requestUser &&
      (requestUser.isAdmin || requestUser.id === parseInt(id))
    ) {
      return this.usuarioService.findOne(+id);
    } else {
      return new UnauthorizedException();
    }
  }

  @Roles(Role.User)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
    @Req() request: any,
  ) {
    const requestUser = request?.user;
    if (
      requestUser &&
      (requestUser.isAdmin || requestUser.id === parseInt(id))
    ) {
      return this.usuarioService.update(
        +id,
        updateUsuarioDto,
        requestUser.isAdmin ? updateUsuarioDto.isAdmin : false,
      );
    } else {
      return new UnauthorizedException();
    }
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
