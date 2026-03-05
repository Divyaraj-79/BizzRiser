import { Module } from '@nestjs/common';
import { NewslettersService } from './newsletters.service';
import { NewslettersController } from './newsletters.controller';

import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [NewslettersController],
  providers: [NewslettersService],
})
export class NewslettersModule { }
