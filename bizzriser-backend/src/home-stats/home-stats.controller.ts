import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HomeStatsService } from './home-stats.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('home-stats')
export class HomeStatsController {
    constructor(private readonly homeStatsService: HomeStatsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() data: Prisma.HomeStatCreateInput) {
        return this.homeStatsService.create(data);
    }

    @Get()
    findAll() {
        return this.homeStatsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.homeStatsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: Prisma.HomeStatUpdateInput) {
        return this.homeStatsService.update(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.homeStatsService.remove(id);
    }
}
