import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PricingPlansService } from './pricing-plans.service';
import { Prisma } from '../generated/prisma';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('pricing-plans')
export class PricingPlansController {
    constructor(private readonly pricingPlansService: PricingPlansService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() data: Prisma.PricingPlanCreateInput) {
        return this.pricingPlansService.create(data);
    }

    @Get()
    findAll() {
        return this.pricingPlansService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.pricingPlansService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: Prisma.PricingPlanUpdateInput) {
        return this.pricingPlansService.update(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.pricingPlansService.remove(id);
    }
}
