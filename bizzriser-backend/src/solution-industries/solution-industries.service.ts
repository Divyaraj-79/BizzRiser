import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SolutionIndustriesService implements OnModuleInit {
    constructor(private prisma: PrismaService) { }

    async onModuleInit() {
        const count = await this.prisma.solutionIndustry.count();
        if (count === 0) {
            await this.prisma.solutionIndustry.createMany({
                data: DEFAULT_INDUSTRIES
            });
            console.log('Seeded 6 default solution industries');
        }
    }

    async create(data: Prisma.SolutionIndustryCreateInput) {
        return this.prisma.solutionIndustry.create({ data });
    }

    async findAll() {
        return this.prisma.solutionIndustry.findMany({
            orderBy: { order: 'asc' },
        });
    }

    async findOne(id: string) {
        const industry = await this.prisma.solutionIndustry.findUnique({ where: { id } });
        if (!industry) throw new NotFoundException(`SolutionIndustry with ID ${id} not found`);
        return industry;
    }

    async findBySlug(slug: string) {
        const industry = await this.prisma.solutionIndustry.findUnique({ where: { slug } });
        if (!industry) throw new NotFoundException(`SolutionIndustry with slug ${slug} not found`);
        return industry;
    }

    async update(id: string, data: Prisma.SolutionIndustryUpdateInput) {
        await this.findOne(id);
        return this.prisma.solutionIndustry.update({ where: { id }, data });
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.solutionIndustry.delete({ where: { id } });
    }
}

const DEFAULT_INDUSTRIES = [
    {
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
                { title: 'Follow-Up Automation', description: 'Remind potential travelers who haven\'t confirmed their bookings.' }
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
