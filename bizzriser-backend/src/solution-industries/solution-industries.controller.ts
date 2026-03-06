import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SolutionIndustriesService } from './solution-industries.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('solution-industries')
export class SolutionIndustriesController {
    constructor(private readonly solutionIndustriesService: SolutionIndustriesService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() data: Prisma.SolutionIndustryCreateInput) {
        return this.solutionIndustriesService.create(data);
    }

    @Get()
    findAll() {
        return this.solutionIndustriesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.solutionIndustriesService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: Prisma.SolutionIndustryUpdateInput) {
        return this.solutionIndustriesService.update(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.solutionIndustriesService.remove(id);
    }
}
