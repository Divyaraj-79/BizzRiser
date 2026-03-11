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
        await prisma.homeStat.deleteMany();
        await prisma.homeStat.createMany({
            data: [
                { value: '10,000+', label: 'WhatsApp Messages Sent', order: 0 },
                { value: '98%', label: 'Customer Satisfaction Rate', order: 1 },
                { value: '5x', label: 'Average Lead Conversion Rate', order: 2 },
                { value: '24/7', label: 'Automated Support Coverage', order: 3 },
            ],
        });
        console.log('✅ Home Stats seeded successfully');

        // ─── Testimonials ──────────────────────────────────────────────────────────
        console.log('💬 Seeding Testimonials...');
        await prisma.testimonial.deleteMany();
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

        // ─── Solution Industries ───────────────────────────────────────────────────
        console.log('🏭 Seeding Solution Industries...');
        await prisma.solutionIndustry.deleteMany();
        const industries = [
    {
        id: '11111111-1111-1111-1111-111111111111',
        title: 'Travel & Hospitality',
        slug: 'travel-and-hospitality',
        description: 'Automate itinerary sharing, lead qualification, payment reminders, and booking follow-ups.',
        icon: 'Plane',
        order: 1,
        content: JSON.stringify({
            hero: {
                headline: 'Turn Travel Inquiries into Confirmed Bookings — Automatically on WhatsApp',
                subheadline: 'Automate itinerary sharing, lead qualification, payment reminders, and booking follow-ups. Deliver instant responses to travelers and convert more inquiries into confirmed trips.',
                shortDescription: 'Modern travelers prefer quick responses on WhatsApp. With BizzRiser, travel agencies can automate customer communication, manage leads efficiently, and provide seamless booking experiences without manual chaos.',
            },
            problem: {
                title: 'Challenges Travel Businesses Face',
                points: [
                    '80%+ inquiries come on WhatsApp but replies are delayed.',
                    'Travel consultants spend hours answering repetitive questions.',
                    'Important leads get lost in chats.',
                    'Payment reminders and booking confirmations are handled manually.',
                    'Managing peak season inquiries becomes overwhelming.',
                    'Result: Missed bookings and frustrated customers.'
                ]
            },
            solution: {
                title: 'Smart WhatsApp Automation for Travel Agencies',
                description: 'BizzRiser automates the entire inquiry-to-booking journey.',
                points: [
                    'Automatically respond to new travel inquiries',
                    'Share packages, itineraries, and pricing instantly',
                    'Capture traveler details with automated forms',
                    'Send payment reminders and booking confirmations',
                    'Manage multiple agents handling inquiries'
                ]
            },
            useCases: [
                { title: 'Instant Inquiry Handling', description: 'Automatically respond to incoming inquiries with travel packages, FAQs, and destination information.' },
                { title: 'Automated Itinerary Sharing', description: 'Send customized itineraries instantly without manual effort.' },
                { title: 'Lead Qualification', description: 'Collect travel dates, destination preference, budget, and group size automatically.' },
                { title: 'Booking Confirmation', description: 'Send automated booking confirmations, payment links, and trip details.' },
                { title: 'Follow-Up Automation', description: "Remind potential travelers who haven't confirmed their bookings." }
            ],
            flow: [
                'Customer sends message',
                'Auto response with destination options',
                'Customer selects package',
                'System collects travel details',
                'Agent notified',
                'Quotation shared',
                'Payment reminder',
                'Booking confirmed'
            ],
            benefits: [
                'Faster response to inquiries',
                'Higher booking conversion',
                'Reduced manual workload',
                'Organized customer conversations',
                'Better customer experience'
            ],
            audiences: [
                'Travel Agencies',
                'Tour Operators',
                'Visa Consultants',
                'Holiday Package Providers',
                'Destination Management Companies'
            ],
            cta: {
                headline: 'Automate Your Travel Bookings Today',
                subheadline: 'Start converting WhatsApp inquiries into confirmed travel bookings with BizzRiser.'
            }
        })
    },
    {
        id: '22222222-2222-2222-2222-222222222222',
        title: 'E-Commerce',
        slug: 'e-commerce',
        description: 'Automate product inquiries, abandoned cart reminders, order updates, and customer support.',
        icon: 'ShoppingCart',
        order: 2,
        content: JSON.stringify({
            hero: {
                headline: 'Convert WhatsApp Conversations into Online Sales',
                subheadline: 'Automate product inquiries, abandoned cart reminders, order updates, and customer support through WhatsApp.',
                shortDescription: 'E-commerce customers expect instant answers before buying. BizzRiser helps online brands automate conversations, recover lost sales, and improve customer engagement.',
            },
            problem: {
                title: 'Challenges E-Commerce Brands Face',
                points: [
                    'Customers ask repetitive product questions',
                    'Slow replies cause lost sales',
                    'Abandoned carts remain unrecovered',
                    'Order status queries flood support teams',
                    'Customer engagement after purchase is weak'
                ]
            },
            solution: {
                title: 'High-Converting Sales Channel',
                description: 'BizzRiser turns WhatsApp into a high-converting sales channel.',
                points: [
                    'Automated product inquiry responses',
                    'Abandoned cart recovery automation',
                    'Order confirmation and tracking notifications',
                    'Promotional broadcast campaigns',
                    'Customer support automation'
                ]
            },
            useCases: [
                { title: 'Product Inquiry Automation', description: 'Automatically answer product questions, pricing, and availability.' },
                { title: 'Abandoned Cart Recovery', description: 'Remind customers about products left in cart.' },
                { title: 'Order Updates', description: 'Send automated order confirmation, shipping updates, and delivery notifications.' },
                { title: 'Promotional Campaigns', description: 'Send targeted product promotions and offers.' },
                { title: 'Customer Support Automation', description: 'Provide quick answers to FAQs and common customer queries.' }
            ],
            flow: [
                'Customer asks about product',
                'Automated product catalog shared',
                'Customer selects item',
                'Purchase link sent',
                'Order confirmed',
                'Shipping updates sent automatically'
            ],
            benefits: [
                'Increase online sales',
                'Recover abandoned carts',
                'Reduce support workload',
                'Improve customer experience',
                'Boost repeat purchases'
            ],
            audiences: [
                'D2C Brands',
                'Shopify Stores',
                'Online Retailers',
                'Fashion & Lifestyle Brands',
                'Electronics Stores'
            ],
            cta: {
                headline: 'Turn WhatsApp into Your Highest Converting Sales Channel',
                subheadline: 'Start automating your e-commerce conversations today.'
            }
        })
    },
    {
        id: '33333333-3333-3333-3333-333333333333',
        title: 'Real Estate',
        slug: 'real-estate',
        description: 'Automate property inquiries, site visits, share brochures, and nurture leads.',
        icon: 'Building2',
        order: 3,
        content: JSON.stringify({
            hero: {
                headline: 'Capture and Convert Property Leads Instantly',
                subheadline: 'Automate property inquiries, schedule site visits, share brochures, and nurture leads directly on WhatsApp.',
                shortDescription: 'Real estate inquiries move fast. With BizzRiser, property developers and agents can instantly respond to leads and keep prospects engaged until conversion.',
            },
            problem: {
                title: 'Challenges Real Estate Faces',
                points: [
                    'Property inquiries flood WhatsApp',
                    'Agents struggle to respond quickly',
                    'Property details are shared manually',
                    'Follow-ups with potential buyers are inconsistent',
                    'Leads go cold quickly'
                ]
            },
            solution: {
                title: 'Efficient Lead Conversion',
                description: 'BizzRiser helps real estate businesses manage and convert leads efficiently.',
                points: [
                    'Automated property inquiry responses',
                    'Brochure and project details sharing',
                    'Site visit scheduling',
                    'Lead qualification',
                    'Automated follow-ups'
                ]
            },
            useCases: [
                { title: 'Property Inquiry Automation', description: 'Instantly respond to inquiries with project details and images.' },
                { title: 'Lead Qualification', description: 'Capture budget, location preference, and property type.' },
                { title: 'Brochure Sharing', description: 'Automatically send project brochures and floor plans.' },
                { title: 'Site Visit Scheduling', description: 'Allow customers to book site visits directly via WhatsApp.' },
                { title: 'Lead Nurturing', description: 'Send updates about project launches, offers, and availability.' }
            ],
            flow: [
                'Customer inquiry',
                'Property options shared',
                'Customer selects project',
                'Brochure sent automatically',
                'Site visit scheduled',
                'Agent notified'
            ],
            benefits: [
                'Faster lead response',
                'Better lead qualification',
                'Higher site visit bookings',
                'Organized property inquiries',
                'Improved lead conversion'
            ],
            audiences: [
                'Real Estate Developers',
                'Property Consultants',
                'Real Estate Agencies',
                'Builders & Developers'
            ],
            cta: {
                headline: 'Never Miss a Property Inquiry Again',
                subheadline: 'Automate your real estate lead management with BizzRiser.'
            }
        })
    },
    {
        id: '44444444-4444-4444-4444-444444444444',
        title: 'Education',
        slug: 'education',
        description: 'Convert Student Inquiries into Admissions Automatically',
        icon: 'GraduationCap',
        order: 4,
        content: JSON.stringify({
            hero: {
                headline: 'Convert Student Inquiries into Admissions Automatically',
                subheadline: 'Automate course inquiries, admission counseling, reminders, and student engagement on WhatsApp.',
                shortDescription: 'The admission process is chaotic. BizzRiser simplifies student engagement and course queries to increase enrollments directly through automated WhatsApp flows.',
            },
            problem: {
                title: 'Challenges Educational Institutions Face',
                points: [
                    'Thousands of student inquiries during admission season',
                    'Counselors answering repetitive questions',
                    'Follow-ups with interested students get missed',
                    'Admission processes feel slow and manual'
                ]
            },
            solution: {
                title: 'A Simplified Admission Journey',
                description: 'BizzRiser simplifies the student admission journey.',
                points: [
                    'Automated course inquiry handling',
                    'Student lead capture',
                    'Admission counseling automation',
                    'Application reminders',
                    'Broadcast updates for admissions'
                ]
            },
            useCases: [
                { title: 'Course Inquiry Automation', description: 'Share course details, fees, and eligibility automatically.' },
                { title: 'Student Lead Capture', description: 'Collect student information instantly.' },
                { title: 'Admission Counseling', description: 'Guide students through admission steps.' },
                { title: 'Application Reminders', description: 'Send reminders for form submission and deadlines.' },
                { title: 'Student Updates', description: 'Notify students about classes, exams, and announcements.' }
            ],
            flow: [
                'Student asks about course',
                'Automated course details sent',
                'Student lead captured',
                'Counseling scheduled',
                'Application link sent',
                'Admission confirmed'
            ],
            benefits: [
                'Faster response to student inquiries',
                'Higher admission conversion',
                'Reduced counseling workload',
                'Organized student communication'
            ],
            audiences: [
                'Coaching Institutes',
                'Colleges & Universities',
                'EdTech Companies',
                'Skill Training Institutes'
            ],
            cta: {
                headline: 'Simplify Your Admission Process with Automation',
                subheadline: 'Handle thousands of student inquiries without chaos.'
            }
        })
    },
    {
        id: '55555555-5555-5555-5555-555555555555',
        title: 'Healthcare',
        slug: 'healthcare',
        description: 'Simplify Patient Communication with WhatsApp Automation',
        icon: 'Stethoscope',
        order: 5,
        content: JSON.stringify({
            hero: {
                headline: 'Simplify Patient Communication with WhatsApp Automation',
                subheadline: 'Automate appointment bookings, reminders, patient queries, and follow-ups.',
                shortDescription: 'Medical professionals are busy. Delegate appointment handling and routine queries to BizzRiser so clinics can focus on patient care.',
            },
            problem: {
                title: 'Challenges Healthcare Providers Face',
                points: [
                    'Appointment booking calls overwhelm staff',
                    'Patients forget appointments',
                    'Repetitive questions about timings and services',
                    'Manual follow-ups with patients'
                ]
            },
            solution: {
                title: 'Streamlined Patient Experiences',
                description: 'BizzRiser helps healthcare providers streamline patient communication.',
                points: [
                    'Automated appointment booking',
                    'Appointment reminders',
                    'Patient inquiry automation',
                    'Follow-up reminders'
                ]
            },
            useCases: [
                { title: 'Appointment Booking', description: 'Allow patients to book appointments via WhatsApp.' },
                { title: 'Automated Reminders', description: 'Send appointment reminders to reduce no-shows.' },
                { title: 'Patient Query Automation', description: 'Answer common patient questions instantly.' },
                { title: 'Follow-Up Messages', description: 'Send reminders for checkups and reports.' }
            ],
            flow: [
                'Patient requests appointment',
                'Available slots shared',
                'Patient selects slot',
                'Appointment confirmed',
                'Reminder sent 24h before',
                'Post-visit feedback / reports shared'
            ],
            benefits: [
                'Reduced receptionist workload',
                'Fewer missed appointments',
                'Faster patient responses',
                'Better patient experience'
            ],
            audiences: [
                'Clinics',
                'Hospitals',
                'Diagnostic Centers',
                'Healthcare Providers'
            ],
            cta: {
                headline: 'Make Patient Communication Simple and Efficient',
                subheadline: 'Automate healthcare communication with BizzRiser.'
            }
        })
    },
    {
        id: '66666666-6666-6666-6666-666666666666',
        title: 'Manufacturers',
        slug: 'manufacturers',
        description: 'Automate Dealer and Distributor Communication on WhatsApp',
        icon: 'TrendingUp',
        order: 6,
        content: JSON.stringify({
            hero: {
                headline: 'Automate Dealer and Distributor Communication on WhatsApp',
                subheadline: 'Streamline product inquiries, order updates, distributor communication, and support.',
                shortDescription: 'Supply chains run on information. Ensure your distributors, dealers, and B2B partners always have the latest catalogs, prices, and order statuses in their pockets.',
            },
            problem: {
                title: 'Challenges Manufacturers Face',
                points: [
                    'Dealers frequently request product details and pricing',
                    'Order updates handled manually',
                    'Communication between brand and distributors is fragmented',
                    'Marketing communication is inconsistent'
                ]
            },
            solution: {
                title: 'Efficient Dealer Management',
                description: 'BizzRiser enables manufacturers to manage dealer communication efficiently.',
                points: [
                    'Automated product catalog sharing',
                    'Distributor communication automation',
                    'Order updates and notifications',
                    'Promotional broadcast campaigns'
                ]
            },
            useCases: [
                { title: 'Dealer Inquiry Automation', description: 'Provide instant product and pricing details.' },
                { title: 'Product Catalog Sharing', description: 'Automatically share product catalogs and specifications.' },
                { title: 'Distributor Communication', description: 'Send announcements and product updates.' },
                { title: 'Order Notifications', description: 'Notify dealers about order status and dispatch updates.' }
            ],
            flow: [
                'Dealer requests catalog',
                'PDF brochure sent',
                'Dealer submits bulk order inquiry',
                'Sales rep notified',
                'Invoice & tracking details shared automatically'
            ],
            benefits: [
                'Stronger distributor relationships',
                'Faster dealer communication',
                'Organized order communication',
                'Efficient product promotion'
            ],
            audiences: [
                'FMCG Brands',
                'Industrial Manufacturers',
                'Electronics Manufacturers',
                'Consumer Goods Companies'
            ],
            cta: {
                headline: 'Strengthen Your Distributor Network with Automation',
                subheadline: 'Simplify dealer communication using BizzRiser.'
            }
        })
    }
];
        for (const ind of industries) {
            await prisma.solutionIndustry.create({ data: ind });
        }
        console.log('✅ Solution Industries seeded successfully');

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
        await prisma.industryChatbot.deleteMany();
        await prisma.industryChatbot.createMany({
            data: [
                {
                    industry: '11111111-1111-1111-1111-111111111111',
                    brand: 'Travel X',
                    flowSteps: JSON.stringify([
                        { sender: 'bot', text: "Hi! I'm Travel X's AI assistant. Where would you like to travel?" },
                        { sender: 'user', text: 'I want to go to Bali this December.' },
                        { sender: 'bot', text: 'Amazing choice! 🌴 We have packages from ₹45,000 per person. How many travellers?' },
                        { sender: 'user', text: '2 adults, 1 child.' },
                        { sender: 'bot', text: 'Perfect! I have a 7-night family package for ₹1,12,000 including flights. Want to see the itinerary?' },
                        { sender: 'user', text: 'Yes please!' },
                        { sender: 'bot', text: '✈️ Sending your personalised Bali itinerary now. Should I hold this package for you for 24 hours?' },
                    ]),
                },
                {
                    industry: '22222222-2222-2222-2222-222222222222',
                    brand: 'ShopEase',
                    flowSteps: JSON.stringify([
                        { sender: 'bot', text: "Hi! You left something in your cart at ShopEase 🛒 Can I help you complete your order?" },
                        { sender: 'user', text: 'Yes, I wanted to check the delivery time first.' },
                        { sender: 'bot', text: 'Great news! Your order will be delivered within 2-3 business days with free shipping. 🚀' },
                        { sender: 'user', text: 'Ok, is there any discount?' },
                        { sender: 'bot', text: "Since you're a returning customer, I'm applying a 10% discount automatically! Use code WELCOME10. Want to complete your order now? 🎉" },
                    ]),
                },
                {
                    industry: '33333333-3333-3333-3333-333333333333',
                    brand: 'PropFind',
                    flowSteps: JSON.stringify([
                        { sender: 'bot', text: "Hello! I'm PropFind's assistant. Are you looking to buy, sell, or rent a property?" },
                        { sender: 'user', text: 'Looking to buy a 3BHK in Pune.' },
                        { sender: 'bot', text: 'We have 12 properties matching that. Budget range? (e.g., 50L-80L)' },
                        { sender: 'user', text: 'Around 70 lakhs.' },
                        { sender: 'bot', text: '🏠 Found 4 great options in Kothrud & Baner within your budget. Shall I schedule site visits this weekend?' },
                    ]),
                },
                {
                    industry: '44444444-4444-4444-4444-444444444444',
                    brand: 'Edu X',
                    flowSteps: JSON.stringify([
                        { sender: 'bot', text: "Hello from Edu X! Interested in our new courses?" },
                        { sender: 'user', text: 'Yes, details about the Data Science bootcamp.' },
                        { sender: 'bot', text: "It's a 12-week intensive course. Next batch starts next week." },
                        { sender: 'user', text: 'What is the fee structure?' },
                        { sender: 'bot', text: 'The fee is $999. You can pay in 3 installments too. Register now?' }
                    ]),
                },
            ],
        });
        console.log('✅ Industry Chatbots seeded successfully');

        // ─── Blogs ─────────────────────────────────────────────────────────────
        console.log('📝 Seeding Blogs...');
        await prisma.blog.deleteMany();
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
