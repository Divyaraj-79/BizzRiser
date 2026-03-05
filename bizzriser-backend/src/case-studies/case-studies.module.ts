import { Module } from '@nestjs/common';
import { CaseStudiesService } from './case-studies.service';
import { CaseStudiesController } from './case-studies.controller';

import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [CaseStudiesController],
  providers: [CaseStudiesService],
})
export class CaseStudiesModule { }
