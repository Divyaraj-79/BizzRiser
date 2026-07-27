// ──────────────────────────────────────────────────────────── 
// STATIC DATA SOURCE FOR FRONTEND
// ──────────────────────────────────────────────────────────── 

export const blogs = [
    {
        id: "b1",
        title: "The Ultimate Guide to WhatsApp Marketing in 2026",
        slug: "whatsapp-marketing-guide",
        excerpt: "Discover how top brands are leveraging WhatsApp to achieve 98% open rates and skyrocket their direct sales.",
        content: `WhatsApp has become the undisputed king of direct consumer communication. With over 2 billion active users globally, it's no longer just a messaging app—it's a critical sales channel.

## Why WhatsApp?
Traditional email marketing struggles to break a 20% open rate. WhatsApp messages? They sit comfortably at 98%. When a customer receives a WhatsApp ping, they check it. This immediacy makes it the perfect channel for:
- Time-sensitive offers
- Abandoned cart recovery
- Personalized customer support

### Automation is Key
You don't need a team of 100 agents to handle incoming queries. By utilizing AI-powered chatbots, you can automate up to 80% of routine interactions. 

> "We moved our cart-recovery sequence from Email to WhatsApp and saw a 300% increase in recovered revenue within the first week."

Implementing a WhatsApp strategy requires thoughtful planning to avoid being marked as spam. Always prioritize opt-ins and deliver genuine value in every message.`,
        category: "Marketing",
        author: "Sarah Jenkins",
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        tags: '["WhatsApp", "Marketing", "Automation"]',
        readTime: 5,
        featured: true,
        published: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "b2",
        title: "5 Customer Support Automation Workflows You Need",
        slug: "customer-support-automation",
        excerpt: "Stop making your customers wait. Here are five automated flows that will drastically reduce your resolution times.",
        content: `Customer expectations have never been higher. If you aren't resolving issues within minutes, you're losing loyalty. Here are the top 5 workflows every modern business needs:

1. **The Instant Order Tracker**: Allow customers to simply type "Where is my order?" and instantly receive a live tracking link securely pulled from your logistics backend.
2. **The Smart FAQ Protocol**: Analyze your 10 most common questions and map them to quick-reply buttons.
3. **The Refund/Return Initiator**: An automated step-by-step guide to generating return labels without ever speaking to an agent.
4. **The Out-of-Hours Scheduler**: When agents are offline, seamlessly transition the user to a calendar booking system for a callback.
5. **The Escalation Trigger**: AI sentiment analysis that immediately flags angry customers and bypasses the bot to connect them to a human priority lane.`,
        category: "Support",
        author: "Marcus Wei",
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
        tags: '["Support", "Automation", "Workflows"]',
        readTime: 4,
        featured: false,
        published: true,
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
    },
    {
        id: "b3",
        title: "How to Build High-Converting Lead Generation Bots",
        slug: "lead-generation-tips",
        excerpt: "Learn the conversational design secrets that turn casual website browsers into qualified sales leads.",
        content: `Say goodbye to boring forms. Conversational interfaces capture leads at a much higher rate because they mimic human interaction. A static form demands effort; a chatbot guides the user conversationally.

### Best Practices for Lead Capture
- **Start with a Hook, not a Form**: Don't ask for an email right away. Ask a qualifying question first. E.g., "Are you looking to buy or rent?"
- **Keep it Short**: If your flow has more than 5 questions, your drop-off rate will spike.
- **Offer Immediate Value**: "Answer these 3 questions, and I'll generate a custom report for you instantly."

The modern lead gen funnel isn't a landing page; it's a conversation.`,
        category: "Growth",
        author: "Emily Chen",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        tags: '["Growth", "Lead Gen", "Conversational AI"]',
        readTime: 6,
        featured: true,
        published: true,
        createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
    }
];

export const featuredBlogs = blogs.filter(b => b.featured);

export const caseStudies = [
    {
        id: "cs1",
        company: "Luxe Retail Co",
        industry: "Retail",
        slug: "retail",
        goal: "Increase Sales",
        metric: "150%",
        metricLabel: "Increase in Cart Recovery",
        title: "How Luxe Retail Co recovered $100k in abandoned carts using BizzRiser",
        excerpt: "By implementing a smart WhatsApp re-engagement campaign, Luxe Retail Co turned lost browsers into paying loyalists.",
        content: "Detailed case study content goes here. The brand saw a massive uptick in cart recovery by sending personalized WhatsApp messages offering a 10% discount exactly 1 hour after cart abandonment.",
        logoUrl: "",
        bannerUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        published: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "cs2",
        company: "MedCare Health",
        industry: "Healthcare",
        slug: "health",
        goal: "Patient Support",
        metric: "80%",
        metricLabel: "Reduction in Call Volume",
        title: "Automating 80% of patient inquiries for MedCare Health",
        excerpt: "MedCare automated appointment scheduling and FAQ handling, freeing up their staff to handle critical patient care.",
        content: "Detailed health case study content. Patients were able to book, reschedule, and cancel appointments directly via WhatsApp without waiting on hold.",
        logoUrl: "",
        bannerUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
        published: true,
        createdAt: new Date(Date.now() - 86400000 * 10).toISOString()
    }
];

export const testimonials = [
    {
        id: "t1",
        author: "Radiant Automotive",
        role: "Founder, Radiant Automotive",
        content: "BizzRiser completely transformed how we interact with our customers. Our engagement rates have never been higher.",
        rating: 5,
        published: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "t2",
        author: "Fit2Fly Holidays",
        role: "Founder, Fit2Fly Holidays",
        content: "The WhatsApp automation tools saved us hundreds of hours in customer support. Highly recommended!",
        rating: 5,
        published: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "t2",
        author: "Babu Lime",
        role: "Founder, Babu Lime",
        content: "The WhatsApp automation tools saved us hundreds of hours in customer support. Highly recommended!",
        rating: 5,
        published: true,
        createdAt: new Date().toISOString()
    }
];

export const solutionIndustries = [
    {
        id: "s1",
        title: "E-Commerce & Retail",
        slug: "retail",
        description: "Recover carts, send shipping updates, and handle returns automagically.",
        icon: "ShoppingBag",
        content: {
            hero: { headline: "Automate Your E-Commerce Growth", subheadline: "Turn WhatsApp into your most profitable sales channel by recovering carts and automating support.", shortDescription: "Retailers using BizzRiser see a 40% reduction in support tickets." },
            problem: { title: "The E-Commerce Challenge", points: ["High cart abandonment rates on web", "Customers demanding instant updates", "Agents overwhelmed by 'Where is my order?' queries"] },
            solution: { title: "The WhatsApp Solution", description: "BizzRiser automates the entire post-purchase journey and retargeting funnel.", points: ["Automated Cart Recovery campaigns", "Instant tracking links via WhatsApp", "Quick-reply FAQs for size guides & returns"] },
            useCases: [
                { title: "Cart Recovery", description: "Send automated reminders with dynamic checkout links 1 hour after abandonment." },
                { title: "Order Tracking", description: "Customers type ' ट्रैक' or 'Track' and instantly get their live shipment status." },
                { title: "Restock Alerts", description: "Notify interested buyers the second their favorite item is back in stock." }
            ],
            flow: ["Customer Abandons Cart", "1 Hour Delay", "Automated WhatsApp Reminder Sent", "Customer Clicks & Completes Purchase"],
            benefits: ["Increase Revenue", "Reduce Ticket Volume", "Build Brand Loyalty"],
            audiences: [],
            cta: { headline: "Ready to scale your retail brand?", subheadline: "Start automating your cart recovery today." }
        },
        order: 1
    },
    {
        id: "s2",
        title: "Real Estate",
        slug: "realestate",
        description: "Qualify leads and schedule property viewings 24/7 without a human agent.",
        icon: "Building2",
        content: {
            hero: { headline: "Sell Properties Faster with AI", subheadline: "Never miss a lead again. Automatically qualify prospects and book viewings instantly.", shortDescription: "Real Estate firms capture 3x more leads using interactive WhatsApp bots." },
            problem: { title: "The Real Estate Challenge", points: ["Leads going cold because agents are busy", "Wasting time on unqualified prospects", "Cumbersome booking processes"] },
            solution: { title: "The WhatsApp Solution", description: "BizzRiser acts as your 24/7 virtual real estate agent.", points: ["Instant lead qualification via interactive menus", "Automated viewing scheduling", "Sending property brochures on demand"] },
            useCases: [
                { title: "Lead Qualification", description: "Bot asks for budget, location preference, and timeline before handing off to an agent." },
                { title: "Property Brochures", description: "Users text a property code to instantly receive PDF brochures and video tours." },
                { title: "Viewing Scheduler", description: "Connect your calendar so leads can book a viewing time directly in chat." }
            ],
            flow: ["Lead Clicks Facebook Ad", "WhatsApp Chat Opens", "Bot Qualifies Budget", "Bot Schedules Viewing"],
            benefits: ["Zero Response Delay", "Higher Quality Leads", "Save Agent Time"],
            audiences: [],
            cta: { headline: "Close more deals this month", subheadline: "Let automation handle your lead qualification." }
        },
        order: 2
    },
    {
        id: "s3",
        title: "Education",
        slug: "edtech",
        description: "Automate admissions inquiries, fee reminders, and student updates.",
        icon: "BookOpen",
        content: {
            hero: { headline: "Streamline Student Communication", subheadline: "From admissions to alumni, handle thousands of student queries instantly on WhatsApp.", shortDescription: "Institutions using BizzRiser increased admission inquiry conversions by 60%." },
            problem: { title: "The Education Challenge", points: ["Admissions team overwhelmed during intake season", "Students missing critical fee deadlines", "Poor engagement with campus announcements"] },
            solution: { title: "The WhatsApp Solution", description: "Deploy a campus-wide intelligent assistant.", points: ["Automate the entire admissions FAQ", "Send personalized fee payment links", "Broadcast emergency campus alerts instantly"] },
            useCases: [
                { title: "Admissions Bot", description: "Answer queries about courses, eligibility, and deadlines 24/7." },
                { title: "Fee Reminders", description: "Send automated tuition fee reminders with secure payment links." },
                { title: "Campus Updates", description: "Broadcast schedule changes or event notifications to all students." }
            ],
            flow: ["Student Asks About Course", "Bot Sends Course Details & Fees", "Bot Shares Application Link", "Student Applies"],
            benefits: ["Reduce Admin Overhead", "Increase Enrollments", "Improve Student Experience"],
            audiences: [],
            cta: { headline: "Enhance your campus experience", subheadline: "Deploy your student success bot today." }
        },
        order: 3
    }
];

export const pricingPlans = [
    {
        id: "p1",
        name: "Advanced",
        price: "3500₹",
        description: "Perfect for small businesses just getting started with WhatsApp automation.",
        features: '["3,00,000 Monthly API Credits", "Upto 7 Agents", "Maximum Contacts 1,00,000", "Upto 3 Third Party Integration", "Unlimited ChatBOTs"]',
        recommended: false,
        billingCycle: "monthly",
        order: 1
    },
    {
        id: "p2",
        name: "Growth",
        price: "4500₹",
        description: "For growing businesses that need advanced automation and CRM integrations.",
        features: '["5,00,000 Monthly API Credits", "Upto 10 Agents", "Maximum Contacts 3,00,000", "Upto 10 Third Party Integrations", "Unlimited ChatBOTs"]',
        recommended: true,
        billingCycle: "monthly",
        order: 2
    },
    {
        id: "p3",
        name: "Enterprise",
        price: "Custom",
        description: "Tailored solutions for large-scale operations and high-volume messaging.",
        features: '["Unlimited Monthly API Credits", "Custom Agents", "Unlimited Contacts", "Custom Integrations", "Dedicated Support"]',
        recommended: false,
        billingCycle: "monthly",
        order: 3
    },
    {
        id: "p4",
        name: "Advanced",
        price: "3000₹",
        description: "Perfect for small businesses just getting started with WhatsApp automation.",
        features: '["3,00,000 Monthly API Credits", "Upto 7 Agents", "Maximum Contacts 1,00,000", "Upto 3 Third Party Integration", "Unlimited ChatBOTs"]',
        recommended: false,
        billingCycle: "yearly",
        order: 4
    },
    {
        id: "p5",
        name: "Growth",
        price: "4000₹",
        description: "For growing businesses that need advanced automation and CRM integrations.",
        features: '["5,00,000 Monthly API Credits", "Upto 10 Agents", "Maximum Contacts 3,00,000", "Upto 10 Third Party Integrations", "Unlimited ChatBOTs"]',
        recommended: true,
        billingCycle: "yearly",
        order: 5
    },
    {
        id: "p6",
        name: "Enterprise",
        price: "Custom",
        description: "Tailored solutions for large-scale operations and high-volume messaging.",
        features: '["Unlimited Monthly API Credits", "Custom Agents", "Unlimited Contacts", "Custom Integrations", "Dedicated Support"]',
        recommended: false,
        billingCycle: "yearly",
        order: 6
    }
];

export const brands = [
    { id: "brand1", name: "Brand 1", imageUrl: "https://via.placeholder.com/150", order: 1 },
    { id: "brand2", name: "Brand 2", imageUrl: "https://via.placeholder.com/150", order: 2 },
    { id: "brand3", name: "Brand 3", imageUrl: "https://via.placeholder.com/150", order: 3 },
];

export const homeStats = [
    { id: "stat1", value: "98%", label: "Open Rate", order: 1 },
    { id: "stat2", value: "3x", label: "Sales Conversion", order: 2 },
    { id: "stat3", value: "24/7", label: "Support Automation", order: 3 },
    { id: "stat4", value: "500+", label: "Brands Served", order: 4 }
];

export const industryChatbots = [
    {
        id: "ic1",
        industry: "s1",
        brand: "Luxe Retail",
        flowSteps: [
            { sender: "user", text: "Where is my order #12345?" },
            { sender: "bot", text: "Hi! Your order #12345 from {brand} is currently out for delivery." },
            { sender: "bot", text: "You can track it live here: https://track.example.com" },
            { sender: "user", text: "Thanks!" },
            { sender: "bot", text: "You're welcome! Let us know if you need anything else." }
        ]
    },
    {
        id: "ic2",
        industry: "s2",
        brand: "Skyline Realty",
        flowSteps: [
            { sender: "user", text: "I'm looking for a 3BHK apartment in downtown." },
            { sender: "bot", text: "Welcome to {brand}! I can help you with that. What is your budget?" },
            { sender: "user", text: "Under $500k" },
            { sender: "bot", text: "Perfect. I have 3 properties matching your criteria. Here is the brochure: [PDF]" },
            { sender: "bot", text: "Would you like to schedule a viewing for any of these?" }
        ]
    },
    {
        id: "ic3",
        industry: "s3",
        brand: "City University",
        flowSteps: [
            { sender: "user", text: "When is the deadline for Fall admissions?" },
            { sender: "bot", text: "The Fall admissions deadline for {brand} is August 15th." },
            { sender: "bot", text: "Would you like a link to the application form?" },
            { sender: "user", text: "Yes please" },
            { sender: "bot", text: "Here you go: https://apply.university.edu" }
        ]
    }
];
