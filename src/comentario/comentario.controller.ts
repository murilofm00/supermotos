import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Role, Roles } from 'src/auth/roles.decorator';
import { ComentarioService } from './comentario.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Controller('comentario')
export class ComentarioController {
  constructor(private readonly comentarioService: ComentarioService) {}

  @Roles(Role.User)
  @Post()
  create(@Body() createComentarioDto: CreateComentarioDto) {
    return this.comentarioService.create(createComentarioDto);
  }

  @Roles(Role.Admin)
  @Get()
  findAll() {
    return this.comentarioService.findAll();
  }

  @Roles(Role.User)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comentarioService.findOne(+id);
  }

  @Roles(Role.User)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComentarioDto: UpdateComentarioDto,
  ) {
    return this.comentarioService.update(+id, updateComentarioDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comentarioService.remove(+id);
  }
}
