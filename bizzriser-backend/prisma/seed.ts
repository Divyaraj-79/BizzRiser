import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

async function getPrisma() {
    const databaseUrl = process.env.PRISMA_URL || process.env.DATABASE_URL || '';
    const isRender = process.env.RENDER === 'true' || !!process.env.RENDER;
    const isSqlite = !isRender && (databaseUrl.startsWith('file:') || databaseUrl.includes('.db'));

    if (isSqlite) {
        /* eslint-disable @typescript-eslint/no-var-requires */
        const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
        const url = databaseUrl.replace('file:', '') || './dev.db';
        const adapter = new PrismaBetterSqlite3({ url });
        return new PrismaClient({ adapter } as any);
    }

    /* eslint-disable @typescript-eslint/no-var-requires */
    const { Pool } = require('pg');
    const { PrismaPg } = require('@prisma/adapter-pg');
    const pool = new Pool({ connectionString: databaseUrl });
    const adapter = new PrismaPg(pool);
    return new PrismaClient({ adapter } as any);
}

async function main() {
    console.log('🏁 Starting unified seeding process...');
    const prisma = await getPrisma();
    try {
        console.log('🌱 Seeding database...');

        // ─── Home Stats ────────────────────────────────────────────────────────────
        console.log('📊 Seeding Home Stats...');
        const statsCount = await prisma.homeStat.count();
        if (statsCount === 0) {
            await prisma.homeStat.createMany({
                data: [
                    { value: '10,000+', label: 'WhatsApp Messages Sent', order: 0 },
                    { value: '98%', label: 'Customer Satisfaction Rate', order: 1 },
                    { value: '5x', label: 'Average Lead Conversion Rate', order: 2 },
                    { value: '24/7', label: 'Automated Support Coverage', order: 3 },
                ],
            });
            console.log('✅ Home Stats seeded successfully');
        } else {
            console.log('ℹ️  Home Stats already exist, skipping');
        }

        // ─── Testimonials ──────────────────────────────────────────────────────────
        console.log('💬 Seeding Testimonials...');
        const testimonialsCount = await prisma.testimonial.count();
        if (testimonialsCount === 0) {
            await prisma.testimonial.createMany({
                data: [
                    { author: 'Sarah Jenkins', role: 'CMO, TechGrowth', content: 'BizzRiser completely transformed how we handle customer support. We recovered 30% more abandoned carts within the first week.', rating: 5, published: true },
                    { author: 'Alex Patel', role: 'Founder, ShopNow', content: 'The WhatsApp automation is incredible. Our response time went from hours to seconds. Customers love how instant we feel now.', rating: 5, published: true },
                    { author: 'Meera Nair', role: 'Head of CX, WealthWise', content: 'We were skeptical at first but the chatbot handles 80% of our inquiries without any human intervention. Game changer.', rating: 5, published: true },
                    { author: 'Rohan Shah', role: 'Growth Lead, FinEdge', content: 'BizzRiser has reduced our support team workload by 60%. The ROI in just 2 months is remarkable.', rating: 5, published: true },
                    { author: 'Diana West', role: 'CEO, BeautyBox', content: 'Our broadcast campaigns now get 4x higher open rates than email. WhatsApp automation is the future.', rating: 5, published: true },
                ],
            });
            console.log('✅ Testimonials seeded successfully');
        } else {
            console.log('ℹ️  Testimonials already exist, skipping');
        }

        // ─── Solution Industries ───────────────────────────────────────────────────
        console.log('🏭 Seeding Solution Industries...');
        const industriesCount = await prisma.solutionIndustry.count();
        if (industriesCount === 0) {
            await prisma.solutionIndustry.createMany({
                data: [
                    { title: 'E-Commerce', description: 'Recover abandoned carts, send order updates, and handle returns automatically via WhatsApp.', icon: 'ShoppingCart', order: 0 },
                    { title: 'Real Estate', description: 'Qualify leads, book property viewings, and nurture prospects with automated WhatsApp flows.', icon: 'Building2', order: 1 },
                    { title: 'Healthcare', description: 'Send appointment reminders, handle patient FAQs, and follow-up post-consultation automatically.', icon: 'Stethoscope', order: 2 },
                    { title: 'Education', description: 'Engage students with course updates, answer admissions queries, and send fee reminders.', icon: 'GraduationCap', order: 3 },
                    { title: 'Travel & Tourism', description: 'Automate booking confirmations, itinerary updates, and 24/7 travel support.', icon: 'Plane', order: 4 },
                    { title: 'Finance', description: 'Send account alerts, loan reminders, and provide instant support for banking queries.', icon: 'TrendingUp', order: 5 },
                ],
            });
            console.log('✅ Solution Industries seeded successfully');
        } else {
            console.log('ℹ️  Solution Industries already exist, skipping');
        }

        // ─── Pricing Plans ─────────────────────────────────────────────────────────
        console.log('💰 Seeding Pricing Plans...');
        await prisma.pricingPlan.deleteMany();
        await prisma.pricingPlan.createMany({
            data: [
                // Monthly Plans
                {
                    name: 'Starter',
                    price: '₹2,999/mo',
                    description: 'Perfect for small businesses just getting started with WhatsApp automation.',
                    features: JSON.stringify(['1,000 messages/month', '1 WhatsApp number', 'Basic chatbot builder', 'Contact management', 'Email support']),
                    recommended: false,
                    billingCycle: 'monthly',
                },
                {
                    name: 'Growth',
                    price: '₹7,999/mo',
                    description: 'For growing teams that need more power, broadcasts, and integrations.',
                    features: JSON.stringify(['10,000 messages/month', '3 WhatsApp numbers', 'Advanced chatbot builder', 'Broadcast campaigns', 'CRM integrations', 'Priority support']),
                    recommended: true,
                    billingCycle: 'monthly',
                },
                {
                    name: 'Enterprise',
                    price: 'Custom',
                    description: 'For large teams with custom needs, dedicated infrastructure, and SLAs.',
                    features: JSON.stringify(['Unlimited messages', 'Unlimited numbers', 'Custom AI training', 'Dedicated account manager', 'White-label option', '24/7 phone support']),
                    recommended: false,
                    billingCycle: 'monthly',
                },
                // Yearly Plans
                {
                    name: 'Starter',
                    price: '₹29,999/yr',
                    description: 'Save 2 months of subscription with our yearly starter plan.',
                    features: JSON.stringify(['1,000 messages/month', '1 WhatsApp number', 'Basic chatbot builder', 'Contact management', 'Email support']),
                    recommended: false,
                    billingCycle: 'yearly',
                },
                {
                    name: 'Growth',
                    price: '₹79,999/yr',
                    description: 'Our most popular plan with significant yearly savings.',
                    features: JSON.stringify(['10,000 messages/month', '3 WhatsApp numbers', 'Advanced chatbot builder', 'Broadcast campaigns', 'CRM integrations', 'Priority support']),
                    recommended: true,
                    billingCycle: 'yearly',
                },
                {
                    name: 'Enterprise',
                    price: 'Custom',
                    description: 'Large scale solutions with custom yearly contracts.',
                    features: JSON.stringify(['Unlimited messages', 'Unlimited numbers', 'Custom AI training', 'Dedicated account manager', 'White-label option', '24/7 phone support']),
                    recommended: false,
                    billingCycle: 'yearly',
                },
            ],
        });
        console.log('✅ Pricing Plans seeded successfully');


        // ─── Industry Chatbots ─────────────────────────────────────────────────────
        console.log('🤖 Seeding Industry Chatbots...');
        const chatbotsCount = await prisma.industryChatbot.count();
        if (chatbotsCount === 0) {
            await prisma.industryChatbot.createMany({
                data: [
                    {
                        industry: 'travel',
                        brand: 'Travel X',
                        flowSteps: JSON.stringify([
                            { role: 'bot', message: "Hi! I'm Travel X's AI assistant. Where would you like to travel?" },
                            { role: 'user', message: 'I want to go to Bali this December.' },
                            { role: 'bot', message: 'Amazing choice! 🌴 We have packages from ₹45,000 per person. How many travellers?' },
                            { role: 'user', message: '2 adults, 1 child.' },
                            { role: 'bot', message: 'Perfect! I have a 7-night family package for ₹1,12,000 including flights. Want to see the itinerary?' },
                            { role: 'user', message: 'Yes please!' },
                            { role: 'bot', message: '✈️ Sending your personalised Bali itinerary now. Should I hold this package for you for 24 hours?' },
                            { role: 'user', message: 'Yes please!' },
                            { role: 'bot', message: '✈️ Sending your personalised Bali itinerary now. Should I hold this package for you for 24 hours?' },
                        ]),
                    },
                    {
                        industry: 'ecommerce',
                        brand: 'ShopEase',
                        flowSteps: JSON.stringify([
                            { role: 'bot', message: "Hi! You left something in your cart at ShopEase 🛒 Can I help you complete your order?" },
                            { role: 'user', message: 'Yes, I wanted to check the delivery time first.' },
                            { role: 'bot', message: 'Great news! Your order will be delivered within 2-3 business days with free shipping. 🚀' },
                            { role: 'user', message: 'Ok, is there any discount?' },
                            { role: 'bot', message: "Since you're a returning customer, I'm applying a 10% discount automatically! Use code WELCOME10. Want to complete your order now? 🎉" },
                        ]),
                    },
                    {
                        industry: 'realestate',
                        brand: 'PropFind',
                        flowSteps: JSON.stringify([
                            { role: 'bot', message: "Hello! I'm PropFind's assistant. Are you looking to buy, sell, or rent a property?" },
                            { role: 'user', message: 'Looking to buy a 3BHK in Pune.' },
                            { role: 'bot', message: 'We have 12 properties matching that. Budget range? (e.g., 50L-80L)' },
                            { role: 'user', message: 'Around 70 lakhs.' },
                            { role: 'bot', message: '🏠 Found 4 great options in Kothrud & Baner within your budget. Shall I schedule site visits this weekend?' },
                        ]),
                    },
                    {
                        industry: 'healthcare',
                        brand: 'HealthCare Plus',
                        flowSteps: JSON.stringify([
                            { role: 'bot', message: "Hi! I'm your HealthCare Plus assistant. How can I help you today?" },
                            { role: 'user', message: "I'd like to book an appointment with a dermatologist." },
                            { role: 'bot', message: 'Dr. Sharma is available on Tuesday at 3 PM or Wednesday at 11 AM. Which works for you?' },
                            { role: 'user', message: 'Tuesday 3 PM please.' },
                            { role: 'bot', message: "Perfect! ✅ Appointment confirmed with Dr. Sharma on Tuesday at 3 PM. I'll send you a reminder 1 hour before." },
                        ]),
                    },
                ],
            });
            console.log('✅ Industry Chatbots seeded successfully');
        } else {
            console.log('ℹ️  Industry Chatbots already exist, skipping');
        }

        // ─── Blogs ─────────────────────────────────────────────────────────────
        console.log('📝 Seeding Blogs...');
        const blogsCount = await prisma.blog.count();
        if (blogsCount === 0) {
            await prisma.blog.createMany({
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
                    },
                    {
                        title: 'Building an Automated WhatsApp Sales Funnel',
                        slug: 'sales-funnel-whatsapp',
                        excerpt: 'Learn how to capture leads, nurture them with automated sequences, and close deals directly in WhatsApp.',
                        content: '## Why Automated Funnels?\n\nManual follow-ups are slow...',
                        category: 'Sales',
                        author: 'Mike Ross',
                        published: true,
                        featured: true,
                        readTime: 9,
                        tags: JSON.stringify(['Sales', 'Automation', 'Tutorial']),
                        metaTitle: 'WhatsApp Sales Funnel Automation | BizzRiser',
                    },
                    {
                        title: 'Mastering Customer Retention with Automated Support',
                        slug: 'customer-retention-strategies',
                        excerpt: 'Stop losing customers to slow support times. Implement AI-driven ticketing systems within WhatsApp.',
                        content: '## Retention is Key\n\nAcquiring a new customer is 5x more expensive...',
                        category: 'Support',
                        author: 'Elena Davis',
                        published: true,
                        featured: true,
                        readTime: 6,
                        tags: JSON.stringify(['Support', 'Retention']),
                    },
                    {
                        title: 'How to Reduce Cart Abandonment by 40% with WhatsApp',
                        slug: 'reduce-cart-abandonment',
                        excerpt: 'Learn the exact automated flow that top e-commerce brands use to recover lost sales instantly.',
                        content: '## The $18 Billion Problem\n\nCart abandonment is a major issue...',
                        category: 'E-Commerce',
                        author: 'Mike Ross',
                        published: true,
                        featured: false,
                        readTime: 5,
                        tags: JSON.stringify(['E-Commerce', 'Cart Abandonment']),
                    },
                ],
            });
            console.log('✅ Blogs seeded successfully');
        } else {
            console.log('ℹ️  Blogs already exist, skipping');
        }

        // ─── Newsletter Subscribers ───────────────────────────────────────────
        console.log('📧 Seeding Newsletter Subscribers...');
        await prisma.newsletterSubscriber.deleteMany();
        await prisma.newsletterSubscriber.createMany({
            data: [
                { email: 'divyaraj.test@example.com', status: 'SUBSCRIBED' },
                { email: 'parag.dev@gmail.com', status: 'SUBSCRIBED' },
                { email: 'hello@bizzriser.com', status: 'SUBSCRIBED' },
            ],
        });
        console.log('✅ Newsletter Subscribers seeded successfully');

        // ─── Case Studies ──────────────────────────────────────────────────────────
        console.log('📚 Seeding Case Studies...');
        await prisma.caseStudy.deleteMany();
        await prisma.caseStudy.createMany({
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
                },
                {
                    company: 'Metro Real Estate',
                    industry: 'Real Estate',
                    slug: 'metro-real-estate',
                    title: 'Qualifying high-intent property buyers automatically 24/7',
                    goal: 'Lead Gen',
                    metric: '45%',
                    metricLabel: 'Increase in Qualified Leads',
                    excerpt: 'Metro deployed a pre-qualification bot that captures requirements before handing off to human agents, saving 20 hours a week.',
                    content: '## Scaling Lead Qualification\nMetro was overwhelmed with low-quality inquiries. The automated WhatsApp bot now triages every prospect instantly...',
                    logoUrl: 'https://img.freepik.com/free-vector/modern-office-building-icon-design_24877-62024.jpg',
                    bannerUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
                    published: true,
                },
                {
                    company: 'Global EdTech',
                    industry: 'Education',
                    slug: 'global-edtech',
                    title: 'Scaling student support across 15 countries with AI routing',
                    goal: 'Support',
                    metric: '-60%',
                    metricLabel: 'Reduction in Ticket Resolution Time',
                    excerpt: 'Handling thousands of enrollment queries simply wasn\'t scaling via email. BizzRiser\'s automated FAQ bot solved 70% of questions instantly.',
                    content: '## Instant Global Support\nWith students across multiple timezones, email support was too slow. Our AI bot now provides instant answers in 12 languages...',
                    logoUrl: 'https://img.freepik.com/free-vector/group-people-icon_24877-51147.jpg',
                    bannerUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
                    published: true,
                },
                {
                    company: 'HealthPlus Clinics',
                    industry: 'Healthcare',
                    slug: 'health-plus-clinic',
                    title: 'Automating appointment reminders and follow-ups securely',
                    goal: 'Retention',
                    metric: '28%',
                    metricLabel: 'Fewer No-Show Appointments',
                    excerpt: 'Implementing a strict, compliant automated reminder system via WhatsApp significantly improved clinic efficiency and patient care.',
                    content: '## Secure Patient Communication\nHealthPlus needed a HIPAA-compliant way to remind patients of appointments. WhatsApp proved to be the most reliable channel...',
                    logoUrl: 'https://img.freepik.com/free-vector/target-icon-flat-design_24877-51167.jpg',
                    bannerUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
                    published: true,
                },
                {
                    company: 'Fresh Grocer',
                    industry: 'Retail',
                    slug: 'fresh-grocer',
                    title: 'Managing explosive delivery query volume during holidays',
                    goal: 'Support',
                    metric: '1.2M',
                    metricLabel: 'Queries Handled Automatically',
                    excerpt: 'How a local grocery chain scaled their delivery update system using BizzRiser\'s Shopify integration and automated tracking flows.',
                    content: '## Handling Holiday Surges\nFresh Grocer avoids support meltdowns by automating delivery tracking. Customers can now check their status in 5 seconds on WhatsApp...',
                    logoUrl: 'https://img.freepik.com/free-vector/shopping-bag-cart-icon_24877-51177.jpg',
                    bannerUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
                    published: true,
                },
                {
                    company: 'FinanceNow',
                    industry: 'Fintech',
                    slug: 'finance-now',
                    title: 'Creating a frictionless loan application process via chat',
                    goal: 'Lead Gen',
                    metric: '3x',
                    metricLabel: 'Faster Application Processing',
                    excerpt: 'Replacing cumbersome web forms with an interactive conversational flow increased loan application completion rates dramatically.',
                    content: '## The Future of Finance\nFinanceNow replaced boring forms with a friendly WhatsApp chat. Application completion rates tripled in the first month...',
                    logoUrl: 'https://img.freepik.com/free-vector/business-chart-icon-design_24877-51163.jpg',
                    bannerUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
                    published: true,
                }
            ],
        });
        console.log('✅ Case Studies seeded successfully');

        // ─── Admin User ────────────────────────────────────────────────────────────
        console.log('👤 Seeding Admin User...');
        const adminEmail = 'admin@bizzriser.com';
        const existingAdmin = await prisma.adminUser.findUnique({ where: { email: adminEmail } });
        if (!existingAdmin) {
            /* eslint-disable @typescript-eslint/no-var-requires */
            const bcrypt = require('bcrypt');
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await prisma.adminUser.create({
                data: {
                    email: adminEmail,
                    password: hashedPassword,
                    name: 'Super Admin',
                    role: 'ADMIN'
                }
            });
            console.log('✅ Admin user created: admin@bizzriser.com / admin123');
        } else {
            console.log('ℹ️  Admin user already exists');
        }

        console.log('🎉 Seeding process complete!');
    } finally {
        await prisma.$disconnect();
    }
}


main()
    .catch(e => { console.error(e); process.exit(1); });
