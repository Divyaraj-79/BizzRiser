import { Module } from '@nestjs/common';
import { SolutionIndustriesService } from './solution-industries.service';
import { SolutionIndustriesController } from './solution-industries.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [SolutionIndustriesController],
  providers: [SolutionIndustriesService],
})
export class SolutionIndustriesModule { }
