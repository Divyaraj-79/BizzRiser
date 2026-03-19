import { PrismaClient } from '@prisma/client';

// Simple Prisma client for Hostinger
const prisma = new PrismaClient();

async function main() {
    console.log('🏁 Starting simple seeding process...');
    try {
        console.log('🌱 Seeding database...');

        // ─── Home Stats ────────────────────────────────────────────────────────────
        console.log('📊 Seeding Home Stats...');
        await prisma.homeStat.deleteMany();
        await prisma.homeStat.createMany({
            data: [
                { value: '10,000+', label: 'WhatsApp Messages Sent', order: 0 },
                { value: '98%', label: 'Customer Satisfaction Rate', order: 1 },
                { value: '5x', label: 'Average Lead Conversion Rate', order: 2 },
                { value: '24/7', label: 'Automated Support Coverage', order: 3 },
            ],
        });

        // ─── Testimonials ──────────────────────────────────────────────────────────
        console.log('💬 Seeding Testimonials...');
        await prisma.testimonial.deleteMany();
        await prisma.testimonial.createMany({
            data: [
                { author: 'Sarah Jenkins', role: 'CMO, TechGrowth', content: 'BizzRiser completely transformed how we handle customer support.', rating: 5, published: true },
                { author: 'Alex Patel', role: 'Founder, ShopNow', content: 'The WhatsApp automation is incredible.', rating: 5, published: true },
            ],
        });

        // ─── Case Studies ──────────────────────────────────────────────────────────
        console.log('📚 Seeding Case Studies...');
        await prisma.caseStudy.deleteMany();
        await prisma.caseStudy.createMany({
            data: [
                {
                    company: 'FashionBrand X',
                    industry: 'E-Commerce',
                    slug: 'fashion-brand-x',
                    title: 'Growth via WhatsApp',
                    goal: 'Marketing',
                    metric: '+340%',
                    metricLabel: 'ROI',
                    excerpt: 'Success story.',
                    content: 'Detailed content.',
                    published: true,
                }
            ],
        });

        // ─── Admin User ────────────────────────────────────────────────────────────
        console.log('👤 Seeding Admin User...');
        const adminEmail = 'admin@bizzriser.com';
        const existingAdmin = await prisma.adminUser.findUnique({ where: { email: adminEmail } });
        if (!existingAdmin) {
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
            console.log('✅ Admin user created: admin123');
        }

        console.log('🎉 Seeding process complete!');
    } catch (error) {
        console.error('❌ Seeding failed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
