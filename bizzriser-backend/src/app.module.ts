import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './auth/auth.module';
import { CaseStudiesModule } from './case-studies/case-studies.module';
import { CareersModule } from './careers/careers.module';
import { ContactsModule } from './contacts/contacts.module';
import { NewslettersModule } from './newsletters/newsletters.module';
import { LeadsModule } from './leads/leads.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [PrismaModule, UploadModule, BlogsModule, AuthModule, CaseStudiesModule, CareersModule, ContactsModule, NewslettersModule, LeadsModule, AnalyticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
