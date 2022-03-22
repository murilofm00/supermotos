import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MotoService } from './moto.service';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';
import { Role, Roles } from 'src/auth/roles.decorator';

@Controller('moto')
export class MotoController {
  constructor(private readonly motoService: MotoService) {}

  @Roles(Role.Admin)
  @Post()
  create(@Body() createMotoDto: CreateMotoDto) {
    return this.motoService.create(createMotoDto);
  }

  @Roles(Role.Public)
  @Get()
  findAll() {
    return this.motoService.findAll();
  }

  @Roles(Role.Public)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motoService.findOne(+id);
  }

  @Roles(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMotoDto: UpdateMotoDto) {
    return this.motoService.update(+id, updateMotoDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motoService.remove(+id);
  }
}
