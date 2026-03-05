"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, ShoppingBag, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const filters = {
    industry: ["All Industries", "E-Commerce", "Real Estate", "Education", "Healthcare"],
    goal: ["All Goals", "Lead Gen", "Support", "Marketing", "Retention"]
};

const caseStudies = [
    {
        id: "fashion-brand-x",
        company: "FashionBrand X",
        industry: "E-Commerce",
        goal: "Marketing",
        metric: "+340%",
        metricLabel: "ROI on Black Friday",
        title: "How FashionBrand X generated $1.2M during Black Friday via WhatsApp",
        excerpt: "By switching from email blasts to personalized WhatsApp broadcasts, this leading fashion retailer saw unprecedented engagement rates.",
        logo: <ShoppingBag className="w-8 h-8 text-bizz-primary" />
    },
    {
        id: "metro-real-estate",
        company: "Metro Real Estate",
        industry: "Real Estate",
        goal: "Lead Gen",
        metric: "45%",
        metricLabel: "Increase in Qualified Leads",
        title: "Qualifying high-intent property buyers automatically 24/7",
        excerpt: "Metro deployed a pre-qualification bot that captures requirements before handing off to human agents, saving 20 hours a week.",
        logo: <Building2 className="w-8 h-8 text-blue-500" />
    },
    {
        id: "global-edtech",
        company: "Global EdTech",
        industry: "Education",
        goal: "Support",
        metric: "-60%",
        metricLabel: "Reduction in Ticket Resolution Time",
        title: "Scaling student support across 15 countries with AI routing",
        excerpt: "Handling thousands of enrollment queries simply wasn't scaling via email. BizzRiser's automated FAQ bot solved 70% of questions instantly.",
        logo: <Users className="w-8 h-8 text-orange-500" />
    },
    {
        id: "health-plus-clinic",
        company: "HealthPlus Clinics",
        industry: "Healthcare",
        goal: "Retention",
        metric: "28%",
        metricLabel: "Fewer No-Show Appointments",
        title: "Automating appointment reminders and follow-ups securely",
        excerpt: "Implementing a strict, compliant automated reminder system via WhatsApp significantly improved clinic efficiency and patient care.",
        logo: <Target className="w-8 h-8 text-rose-500" />
    },
    {
        id: "fresh-grocer",
        company: "Fresh Grocer",
        industry: "Retail",
        goal: "Support",
        metric: "1.2M",
        metricLabel: "Queries Handled Automatically",
        title: "Managing explosive delivery query volume during holidays",
        excerpt: "How a local grocery chain scaled their delivery update system using BizzRiser's Shopify integration and automated tracking flows.",
        logo: <ShoppingBag className="w-8 h-8 text-cyan-500" />
    },
    {
        id: "finance-now",
        company: "FinanceNow",
        industry: "Fintech",
        goal: "Lead Gen",
        metric: "3x",
        metricLabel: "Faster Application Processing",
        title: "Creating a frictionless loan application process via chat",
        excerpt: "Replacing cumbersome web forms with an interactive conversational flow increased loan application completion rates dramatically.",
        logo: <TrendingUp className="w-8 h-8 text-emerald-500" />
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="pt-20 min-h-screen bg-background">
            {/* 1. Hero Section */}
            <section className="relative py-24 overflow-hidden border-b border-border bg-card/30">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,198,83,0.1),transparent_50%)] pointer-events-none" />

                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-bizz-primary/30 bg-bizz-primary/10 text-bizz-primary text-sm font-semibold mb-6">
                            Success Stories
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Real businesses. <span className="text-gradient">Real revenue.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10">
                            Discover how forward-thinking companies are using BizzRiser to transform their customer engagement and bottom line.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Filters & Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
                        <h2 className="text-2xl font-bold hidden md:block">All Customer Stories</h2>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <select className="h-10 w-full sm:w-auto rounded-full border border-input bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                                {filters.industry.map(opt => <option key={opt}>{opt}</option>)}
                            </select>
                            <select className="h-10 w-full sm:w-auto rounded-full border border-input bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                                {filters.goal.map(opt => <option key={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, i) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <Link href={`/case-studies/${study.id}`} className="block h-full cursor-pointer">
                                    <Card className="h-full flex flex-col bg-gradient-to-br from-accent/10 to-bizz-primary/10 border-accent/20 hover:border-accent/40 hover:shadow-xl transition-all overflow-hidden">
                                        {/* Top Metric Header */}
                                        <div className="p-6 border-b border-accent/30 bg-accent/5 flex flex-col justify-center items-center text-center relative overflow-hidden h-40">
                                            <div className="absolute inset-0 bg-bizz-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="text-4xl font-extrabold text-foreground mb-2 group-hover:scale-105 transition-transform">{study.metric}</div>
                                            <div className="text-sm font-medium text-muted-foreground">{study.metricLabel}</div>
                                        </div>

                                        <CardContent className="p-6 flex-1 flex flex-col relative z-10">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center p-2 shadow-sm">
                                                    {study.logo}
                                                </div>
                                                <div className="flex flex-col items-end gap-2">
                                                    <Badge variant="outline" className="text-xs">{study.industry}</Badge>
                                                    <Badge className="bg-bizz-primary/10 text-bizz-primary hover:bg-bizz-primary/20 hover:text-bizz-primary border-0 text-xs">{study.goal}</Badge>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors line-clamp-2">
                                                {study.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                                {study.excerpt}
                                            </p>

                                            <div className="flex items-center text-sm font-bold text-foreground group-hover:text-bizz-primary transition-colors mt-auto">
                                                Read full story <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" className="rounded-full h-12 px-8">Load More Stories</Button>
                    </div>

                </div>
            </section>

            {/* 3. CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-bizz-dark/10" />
                <div className="absolute inset-0 bg-gradient-brand opacity-90 mix-blend-multiply" />

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to be our next success story?</h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                        Book a demo today to see exactly how BizzRiser can drive ROI for your specific use case.
                    </p>
                    <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo" target="_blank">
                        <Button size="lg" className="h-14 px-8 rounded-full bg-white text-bizz-dark hover:bg-zinc-100 font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1">
                            Book a Demo
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
