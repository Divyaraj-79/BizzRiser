import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) { }

  async getDashboardStats() {
    // Basic aggregated statistics for the admin dashboard
    const totalLeads = await this.prisma.lead.count();
    const totalSubscribers = await this.prisma.newsletterSubscriber.count({
      where: { status: 'SUBSCRIBED' }
    });
    const newMessages = await this.prisma.contactMessage.count({
      where: { status: 'NEW' }
    });

    // In a real app we'd also fetch conversation metrics, revenue, etc.
    return {
      totalLeads,
      activeSubscribers: totalSubscribers,
      unreadMessages: newMessages,
      // mock data for charts
      revenueGrowth: 24.5,
      activeConversations: 1245,
    };
  }
}
