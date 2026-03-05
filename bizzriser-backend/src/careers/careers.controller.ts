import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCareerDto: CreateCareerDto) {
    return this.careersService.create(createCareerDto);
  }

  @Get()
  findAll(@Query('all') all?: boolean) {
    const activeOnly = all ? false : true;
    return this.careersService.findAll(activeOnly);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careersService.update(id, updateCareerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careersService.remove(id);
  }
}
