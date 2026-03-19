import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root() {
    return { 
      message: 'BizzRiser API is live',
      documentation: '/api/docs',
      health: '/health'
    };
  }

  @Get('health')
  health(): { status: string; timestamp: string } {
    return { status: 'healthy', timestamp: new Date().toISOString() };
  }
}
