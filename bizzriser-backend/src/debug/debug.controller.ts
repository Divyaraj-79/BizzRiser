import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Controller('debug')
export class DebugController {
    constructor(private prisma: PrismaService) { }

    @Get('seed')
    async runSeed() {
        const logs: string[] = [];
        const log = (msg: string) => {
            console.log(msg);
            logs.push(msg);
        };

        try {
            log('🏁 Starting manual debug seeding process...');

            // 1. Check current table counts
            const counts = {
                homeStats: await this.prisma.homeStat.count(),
                testimonials: await this.prisma.testimonial.count(),
                solutionIndustries: await this.prisma.solutionIndustry.count(),
                pricingPlans: await this.prisma.pricingPlan.count(),
                industryChatbots: await this.prisma.industryChatbot.count(),
                blogs: await this.prisma.blog.count(),
                caseStudies: await this.prisma.caseStudy.count(),
                adminUsers: await this.prisma.adminUser.count(),
                newsletters: await this.prisma.newsletterSubscriber.count(),
            };
            log(`📊 Current Counts: ${JSON.stringify(counts)}`);

            // 2. Force seed essential blogs if 0
            if (counts.blogs === 0) {
                log('📝 Force seeding Blogs...');
                await this.prisma.blog.createMany({
                    data: [
                        {
                            title: 'The Ultimate Guide to WhatsApp Marketing in 2024',
                            slug: 'whatsapp-marketing-2024',
                            excerpt: 'Discover the latest trends, strategies, and templates for driving revenue through WhatsApp Business API this year.',
                            content: '## Introduction\n\nWhatsApp has become the worlds most popular messaging app...',
                            category: 'Marketing',
                            author: 'Sarah Jenks',
                            published: true,
                            featured: true,
                            readTime: 7,
                            tags: JSON.stringify(['WhatsApp', 'Marketing', 'Automation']),
                            metaTitle: 'WhatsApp Marketing Guide 2024 | BizzRiser',
                            metaDescription: 'Complete guide to WhatsApp marketing in 2024 including templates and strategies.',
                        }
                    ]
                });
                log('✅ Blog whatsapp-marketing-2024 created');
            }

            // 3. Force seed essential admin if 0
            if (counts.adminUsers === 0) {
                log('👤 Force seeding Admin User...');
                const hashedPassword = await bcrypt.hash('admin123', 10);
                await this.prisma.adminUser.create({
                    data: {
                        email: 'admin@bizzriser.com',
                        password: hashedPassword,
                        name: 'Super Admin',
                        role: 'ADMIN'
                    }
                });
                log('✅ Admin user created: admin@bizzriser.com');
            }

            // 4. Force seed case studies if 0
            if (counts.caseStudies === 0) {
                log('📚 Force seeding Case Studies...');
                await this.prisma.caseStudy.createMany({
                    data: [
                        {
                            company: 'FashionBrand X',
                            industry: 'E-Commerce',
                            slug: 'fashion-brand-x',
                            title: 'How FashionBrand X generated $1.2M during Black Friday via WhatsApp',
                            goal: 'Marketing',
                            metric: '+340%',
                            metricLabel: 'ROI on Black Friday',
                            excerpt: 'By switching from email blasts to personalized WhatsApp broadcasts, this leading fashion retailer saw unprecedented engagement rates.',
                            content: '## The Challenge\nFashionBrand X needed a more effective way to reach customers during the high-stakes holiday season...\n\n## The Solution\nBy moving their marketing to WhatsApp, they achieved much higher open and click rates compared to email...',
                            logoUrl: 'https://img.freepik.com/free-vector/shopping-bag-cart-icon_24877-51177.jpg',
                            bannerUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
                            published: true,
                        }
                    ]
                });
                log('✅ Case Study fashion-brand-x created');
            }

            log('🎉 Manual seeding complete!');
            return { success: true, logs, currentCounts: counts };

        } catch (error) {
            log(`❌ SEEDING FAILED: ${error.message}`);
            return { success: false, error: error.message, logs };
        }
    }

    @Get('info')
    async getDbInfo() {
        // Very simple endpoint to verify database connection string
        return {
            render: process.env.RENDER,
            prismaUrlSet: !!process.env.PRISMA_URL,
            databaseUrlSet: !!process.env.DATABASE_URL
        }
    }
}
