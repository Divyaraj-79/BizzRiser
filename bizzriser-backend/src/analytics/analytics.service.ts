import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) { }

  async getDashboardStats() {
    // Basic aggregated statistics for the admin dashboard
    const [totalLeads, activeSubscribers, unreadMessages, totalBlogs, totalCaseStudies] = await Promise.all([
      this.prisma.lead.count(),
      this.prisma.newsletterSubscriber.count({ where: { status: 'SUBSCRIBED' } }),
      this.prisma.contactMessage.count({ where: { status: 'NEW' } }),
      this.prisma.blog.count(),
      this.prisma.caseStudy.count(),
    ]);

    return {
      totalLeads,
      activeSubscribers,
      unreadMessages,
      totalBlogs,
      totalCaseStudies,
      // mock data for charts
      revenueGrowth: 24.5,
      activeConversations: 1245,
    };
  }
}
