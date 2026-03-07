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

            // 5. Force seed home stats if 0
            if (counts.homeStats === 0) {
                log('📈 Force seeding Home Stats...');
                await this.prisma.homeStat.createMany({
                    data: [
                        { label: 'Clients Served', value: '10,000+', order: 1 },
                        { label: 'Messages Delivered', value: '500M+', order: 2 },
                        { label: 'Campaigns Automated', value: '25M+', order: 3 },
                        { label: 'Revenue Generated', value: '$2B+', order: 4 },
                    ]
                });
                log('✅ Home Stats created');
            }

            // 6. Force seed testimonials if 0
            if (counts.testimonials === 0) {
                log('🗣️ Force seeding Testimonials...');
                await this.prisma.testimonial.createMany({
                    data: [
                        { content: "BizzRiser completely transformed how we handle customer support. We recovered 30% more abandoned carts within the first week.", author: "Sarah Jenkins", role: "CMO, TechGrowth", rating: 5, published: true },
                        { content: "The WhatsApp automation is incredible. Our response time went from hours to seconds.", author: "Alex Patel", role: "Founder, ShopNow", rating: 5, published: true },
                        { content: "We were skeptical at first but the chatbot handles 80% of our inquiries without any human intervention. Game changer.", author: "Meera Nair", role: "Head of CX, WealthWise", rating: 5, published: true },
                        { content: "BizzRiser has reduced our support team workload by 60%. The ROI in just 2 months is remarkable.", author: "Rohan Shah", role: "Growth Lead, FinEdge", rating: 5, published: true },
                    ]
                });
                log('✅ Testimonials created');
            }

            // 7. Force seed solution industries if 0
            if (counts.solutionIndustries === 0) {
                log('🏢 Force seeding Solution Industries...');
                await this.prisma.solutionIndustry.createMany({
                    data: [
                        { id: "travel", title: 'Travel & Hospitality', description: '', icon: 'Plane', order: 1 },
                        { id: "ecommerce", title: 'E-Commerce', description: '', icon: 'TrendingUp', order: 2 },
                        { id: "realestate", title: 'Real Estate', description: '', icon: 'Users', order: 3 },
                        { id: "education", title: 'Education', description: '', icon: 'Bot', order: 4 },
                        { id: "healthcare", title: 'Healthcare', description: '', icon: 'Shield', order: 5 },
                    ]
                });
                log('✅ Solution Industries created');
            }

            // 8. Force seed industry chatbots if 0
            if (counts.industryChatbots === 0) {
                log('🤖 Force seeding Industry Chatbots...');
                await this.prisma.industryChatbot.createMany({
                    data: [
                        {
                            industry: 'travel', brand: 'Travel X', flowSteps: JSON.stringify([
                                { sender: 'bot', text: 'Hi! Planning your next getaway with {brand}?' },
                                { sender: 'user', text: 'Yes, looking for a beach resort.' },
                                { sender: 'bot', text: 'Great choice! Checkout our top 3 Maldives packages 🏝️' },
                                { sender: 'user', text: 'Can I see the itinerary for the first one?' },
                                { sender: 'bot', text: 'Sure! Here is the detailed 5-day itinerary...' }
                            ])
                        },
                        {
                            industry: 'ecommerce', brand: 'Shop X', flowSteps: JSON.stringify([
                                { sender: 'bot', text: 'Hey there! Your cart at {brand} is waiting for you.' },
                                { sender: 'user', text: 'I forgot to apply the discount code.' },
                                { sender: 'bot', text: 'No worries! Use code SAVE20 for 20% off. Checkout now?' },
                                { sender: 'user', text: 'Yes, applied it. Processing payment now.' },
                                { sender: 'bot', text: 'Awesome! We\'ve received your order. Tracking link sent! 🚀' }
                            ])
                        },
                        {
                            industry: 'realestate', brand: 'Estates X', flowSteps: JSON.stringify([
                                { sender: 'bot', text: 'Welcome to {brand} Real Estate! Looking to buy or rent?' },
                                { sender: 'user', text: 'Buy a 2 BHK apartment.' },
                                { sender: 'bot', text: 'Got it. Here are 3 premium 2 BHKs in your preferred location.' },
                                { sender: 'user', text: 'The second one looks good. Can I schedule a visit?' },
                                { sender: 'bot', text: 'Absolutely! I scheduled a visit for tomorrow at 10 AM. See you!' }
                            ])
                        },
                        {
                            industry: 'education', brand: 'Edu X', flowSteps: JSON.stringify([
                                { sender: 'bot', text: 'Hello from {brand}! Interested in our new courses?' },
                                { sender: 'user', text: 'Yes, details about the Data Science bootcamp.' },
                                { sender: 'bot', text: 'It\'s a 12-week intensive course. Next batch starts next week.' },
                                { sender: 'user', text: 'What is the fee structure?' },
                                { sender: 'bot', text: 'The fee is $999. You can pay in 3 installments too. Register now?' }
                            ])
                        },
                        {
                            industry: 'healthcare', brand: 'Health X', flowSteps: JSON.stringify([
                                { sender: 'bot', text: 'Hi! How can {brand} assist you with your health today?' },
                                { sender: 'user', text: 'I need to book a consultation with Dr. Smith.' },
                                { sender: 'bot', text: 'Dr. Smith is available tomorrow at 4 PM. Should I book?' },
                                { sender: 'user', text: 'Yes, please.' },
                                { sender: 'bot', text: 'Consultation booked successfully. Your token number is 42.' }
                            ])
                        }
                    ]
                });
                log('✅ Industry Chatbots created');
            }

            // 9. Force seed pricing plans if 0
            if (counts.pricingPlans === 0) {
                log('💳 Force seeding Pricing Plans...');
                await this.prisma.pricingPlan.createMany({
                    data: [
                        { name: "Starter", description: "Perfect for small businesses getting started with WhatsApp automation.", price: "49", billingCycle: "monthly", features: JSON.stringify(["1,000 Free Tier Conversations", "Basic Chatbot Builder", "Shared Inbox for 3 Agents", "Standard Analytics", "Email Support"]), recommended: false },
                        { name: "Growth", description: "Our most popular plan for scaling businesses that need advanced automation.", price: "99", billingCycle: "monthly", features: JSON.stringify(["5,000 Free Tier Conversations", "Advanced Chatbot Builder", "Shared Inbox for 10 Agents", "Advanced Analytics & Flow Builder", "Priority Support 24/7", "Basic API Access"]), recommended: true },
                        { name: "Enterprise", description: "Custom solutions for large organizations with complex communication needs.", price: "299", billingCycle: "monthly", features: JSON.stringify(["Unlimited Conversations", "Custom Chatbot Development", "Unlimited Agents", "Custom Reporting", "Dedicated Account Manager", "Full API Access & Webhooks", "Custom System Integrations"]), recommended: false },
                        { name: "Starter", description: "Perfect for small businesses getting started with WhatsApp automation.", price: "39", billingCycle: "yearly", features: JSON.stringify(["1,000 Free Tier Conversations", "Basic Chatbot Builder", "Shared Inbox for 3 Agents", "Standard Analytics", "Email Support"]), recommended: false },
                        { name: "Growth", description: "Our most popular plan for scaling businesses that need advanced automation.", price: "79", billingCycle: "yearly", features: JSON.stringify(["5,000 Free Tier Conversations", "Advanced Chatbot Builder", "Shared Inbox for 10 Agents", "Advanced Analytics & Flow Builder", "Priority Support 24/7", "Basic API Access"]), recommended: true },
                        { name: "Enterprise", description: "Custom solutions for large organizations with complex communication needs.", price: "249", billingCycle: "yearly", features: JSON.stringify(["Unlimited Conversations", "Custom Chatbot Development", "Unlimited Agents", "Custom Reporting", "Dedicated Account Manager", "Full API Access & Webhooks", "Custom System Integrations"]), recommended: false }
                    ]
                });
                log('✅ Pricing Plans created');
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
