import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PartnerInfoService } from './partner-info.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('partner-info')
export class PartnerInfoController {
    constructor(private readonly partnerInfoService: PartnerInfoService) { }

    @Get('section')
    getSection() {
        return this.partnerInfoService.getSection();
    }

    @UseGuards(JwtAuthGuard)
    @Patch('section')
    updateSection(@Body() data: any) {
        return this.partnerInfoService.updateSection(data);
    }

    @Get('stats')
    getStats() {
        return this.partnerInfoService.getStats();
    }

    @UseGuards(JwtAuthGuard)
    @Post('stats')
    createStat(@Body() data: { label: string; value: string; order: number }) {
        return this.partnerInfoService.createStat(data);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('stats/:id')
    updateStat(@Param('id') id: string, @Body() data: { label: string; value: string; order: number }) {
        return this.partnerInfoService.updateStat(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('stats/:id')
    deleteStat(@Param('id') id: string) {
        return this.partnerInfoService.deleteStat(id);
    }
}
