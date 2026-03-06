import { Module } from '@nestjs/common';
import { IndustryChatbotsService } from './industry-chatbots.service';
import { IndustryChatbotsController } from './industry-chatbots.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [IndustryChatbotsController],
  providers: [IndustryChatbotsService],
})
export class IndustryChatbotsModule { }
