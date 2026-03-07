import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { IndustryChatbotsService } from './industry-chatbots.service';
import { Prisma } from '../generated/prisma';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('industry-chatbots')
export class IndustryChatbotsController {
    constructor(private readonly industryChatbotsService: IndustryChatbotsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() data: Prisma.IndustryChatbotCreateInput) {
        return this.industryChatbotsService.create(data);
    }

    @Get()
    findAll() {
        return this.industryChatbotsService.findAll();
    }

    @Get('slug/:industrySlug')
    findByIndustry(@Param('industrySlug') industrySlug: string) {
        return this.industryChatbotsService.findByIndustry(industrySlug);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.industryChatbotsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: Prisma.IndustryChatbotUpdateInput) {
        return this.industryChatbotsService.update(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.industryChatbotsService.remove(id);
    }
}
