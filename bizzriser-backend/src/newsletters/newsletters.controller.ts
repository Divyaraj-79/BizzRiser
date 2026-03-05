import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NewslettersService } from './newsletters.service';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterDto } from './dto/update-newsletter.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('newsletters')
export class NewslettersController {
  constructor(private readonly newslettersService: NewslettersService) { }

  // Public endpoint for signup form
  @Post()
  create(@Body() createNewsletterDto: CreateNewsletterDto) {
    return this.newslettersService.create(createNewsletterDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.newslettersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newslettersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsletterDto: UpdateNewsletterDto) {
    return this.newslettersService.update(id, updateNewsletterDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newslettersService.remove(id);
  }
}
