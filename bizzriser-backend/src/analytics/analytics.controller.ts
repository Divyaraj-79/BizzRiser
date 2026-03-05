import { Controller, Get, UseGuards } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) { }

  @UseGuards(JwtAuthGuard)
  @Get('dashboard')
  getDashboardStats() {
    return this.analyticsService.getDashboardStats();
  }
}
