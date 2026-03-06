import { Module } from '@nestjs/common';
import { HomeStatsService } from './home-stats.service';
import { HomeStatsController } from './home-stats.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [HomeStatsController],
  providers: [HomeStatsService],
})
export class HomeStatsModule { }
