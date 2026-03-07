import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
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
import { HomeStatsModule } from './home-stats/home-stats.module';
import { IndustryChatbotsModule } from './industry-chatbots/industry-chatbots.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { SolutionIndustriesModule } from './solution-industries/solution-industries.module';
import { PricingPlansModule } from './pricing-plans/pricing-plans.module';
import { DebugModule } from './debug/debug.module';

@Module({
  imports: [
    DebugModule,
    PrismaModule,
    UploadModule,
    BlogsModule,
    AuthModule,
    CaseStudiesModule,
    CareersModule,
    ContactsModule,
    NewslettersModule,
    LeadsModule,
    AnalyticsModule,
    HomeStatsModule,
    IndustryChatbotsModule,
    TestimonialsModule,
    SolutionIndustriesModule,
    PricingPlansModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT ?? '587') || 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      defaults: {
        from: '"No Reply" <noreply@bizzriser.com>',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
