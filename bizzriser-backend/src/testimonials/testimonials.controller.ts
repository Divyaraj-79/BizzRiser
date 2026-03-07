import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { Prisma } from '../generated/prisma';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('testimonials')
export class TestimonialsController {
    constructor(private readonly testimonialsService: TestimonialsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() data: Prisma.TestimonialCreateInput) {
        return this.testimonialsService.create(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.testimonialsService.findAll();
    }

    @Get('published')
    findPublished() {
        return this.testimonialsService.findPublished();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.testimonialsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: Prisma.TestimonialUpdateInput) {
        return this.testimonialsService.update(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.testimonialsService.remove(id);
    }
}
