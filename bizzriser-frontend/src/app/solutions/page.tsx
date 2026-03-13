"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Bot, Target, Headphones, Megaphone, ShoppingBag, GraduationCap, Building2, Stethoscope, ChevronRight, TrendingUp, Plane, ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { fetchApi } from "@/lib/api";

const goalSolutions = [
    {
        id: "lead-gen",
        title: "Lead Generation",
        desc: "Capture and qualify leads 24/7 using WhatsApp chatbots and click-to-WhatsApp ads.",
        icon: <Target className="w-8 h-8 text-emerald-500" />,
        features: ["Chatbot Qualification", "Click-to-WhatsApp Ads", "CRM Integration"],
        gradient: "card-lead-gen",
        iconGradient: "icon-bg-lead"
    },
    {
        id: "support",
        title: "Customer Support",
        desc: "Provide instant customer support using WhatsApp automation and AI chatbots.",
        icon: <Headphones className="w-8 h-8 text-blue-500" />,
        features: ["Automated FAQs", "Agent Handover", "Ticket Management"],
        gradient: "card-support",
        iconGradient: "icon-bg-support"
    },
    {
        id: "marketing",
        title: "Broadcast Marketing",
        desc: "Send personalized offers and updates at scale on WhatsApp with 98% open rates.",
        icon: <Megaphone className="w-8 h-8 text-orange-500" />,
        features: ["Personalized Campaigns", "Analytics Dashboard", "Opt-in Management"],
        gradient: "card-marketing",
        iconGradient: "icon-bg-marketing"
    },
    {
        id: "retention",
        title: "Customer Retention",
        desc: "Keep customers coming back with automated post-purchase flows and re-engagement campaigns.",
        icon: <Bot className="w-8 h-8 text-blue-500" />,
        features: ["Order Updates", "Feedback Collection", "Loyalty Programs"],
        gradient: "card-retention",
        iconGradient: "icon-bg-retention"
    }
];

const FALLBACK_INDUSTRIES = [
    { id: "retail", name: "Retail & E-commerce", icon: <ShoppingBag className="w-6 h-6" />, link: "#" },
    { id: "realestate", name: "Real Estate", icon: <Building2 className="w-6 h-6" />, link: "#" },
    { id: "edtech", name: "Education", icon: <GraduationCap className="w-6 h-6" />, link: "#" },
    { id: "health", name: "Healthcare", icon: <Stethoscope className="w-6 h-6" />, link: "#" },
];

const ICON_MAP: Record<string, React.ReactNode> = {
    ShoppingCart: <ShoppingCart className="w-6 h-6" />,
    Building2: <Building2 className="w-6 h-6" />,
    Stethoscope: <Stethoscope className="w-6 h-6" />,
    GraduationCap: <GraduationCap className="w-6 h-6" />,
    Plane: <Plane className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6" />,
    Bot: <Bot className="w-6 h-6" />,
};

export default function SolutionsPage() {
    type IndustrySolution = { id: string; name: string; icon: React.ReactNode; link: string; };
    const [industrySolutions, setIndustrySolutions] = useState<IndustrySolution[]>(FALLBACK_INDUSTRIES);

    useEffect(() => {
        fetchApi("/solution-industries")
            .then((data: any[]) => {
                if (data?.length) {
                    setIndustrySolutions(data.map((ind: any) => ({
                        id: ind.id,
                        name: ind.title,
                        icon: ICON_MAP[ind.icon] ?? <Bot className="w-6 h-6" />,
                        link: `/solutions/${ind.slug}`,
                    })));
                }
            })
            .catch(() => { });
    }, []);

    return (
        <div className="bg-background flex flex-col flex-1">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-card/30 border-b border-border">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bizz-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,198,83,0.05)_0,transparent_100%)] pointer-events-none" />

                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-bizz-primary/30 bg-bizz-primary/10 text-bizz-primary text-sm font-semibold mb-6">
                            Solutions that scale
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Automate Your Entire Customer Journey with<span className="text-gradient"> WhatsApp Business API</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            From lead capture to customer retention, BizzRiser helps businesses automate conversations using the official WhatsApp Business API. Manage support, run marketing campaigns, and convert more leads directly on WhatsApp.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. General / Goal-Wise Solutions */}
            <section className="py-24">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Solutions by Goal</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Whatever your objective, we have the tools to make it happen via WhatsApp.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
                        {goalSolutions.map((solution, i) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className={`h-full ${solution.gradient} hover:shadow-[0_0_30px_rgba(45,198,83,0.1)] transition-all flex flex-col group relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    <CardHeader className="p-3 md:p-6">
                                        <div className={`w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-2xl ${solution.iconGradient} flex items-center justify-center mb-2 md:mb-4 border border-white/10 shadow-inner shrink-0`}>
                                            <div className="scale-65 md:scale-100">
                                                {solution.icon}
                                            </div>
                                        </div>
                                        <CardTitle className="text-sm md:text-2xl font-bold group-hover:text-bizz-primary transition-all duration-300 leading-tight">
                                            {solution.title}
                                        </CardTitle>
                                        <CardDescription className="text-[10px] md:text-base mt-1 md:mt-2 text-foreground/70 leading-relaxed font-medium">
                                            {solution.desc}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 p-3 pt-0 md:p-6 md:pt-0">
                                        <ul className="space-y-1.5 md:space-y-3">
                                            {solution.features.map(feature => (
                                                <li key={feature} className="flex items-start gap-1.5 text-foreground font-medium text-[9px] md:text-sm leading-tight">
                                                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shrink-0 mt-1" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <div className="p-3 pt-0 md:p-6 md:pt-0 mt-auto">
                                        <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-bizz-primary hover:opacity-80 transition-opacity font-bold text-[10px] md:text-base">
                                            Learn more <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Industry-Wise Solutions */}
            <section className="py-24 bg-card/50 border-y border-border">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Solutions tailored to your industry</h2>
                        <p className="text-muted-foreground mx-auto">Pre-built templates and flows for specific verticals.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {industrySolutions.map((ind, i) => (
                            <motion.div
                                key={ind.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href={ind.link} className="block group">
                                    <div className="flex items-center justify-between p-6 bg-background rounded-2xl border border-border hover:border-bizz-primary/50 hover:shadow-lg transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground group-hover:text-bizz-primary group-hover:bg-bizz-primary/10 transition-colors">
                                                {ind.icon}
                                            </div>
                                            <span className="text-lg font-bold text-foreground">{ind.name}</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-bizz-primary group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Businesses Are Switching Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-bizz-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                                Why Businesses Are Switching to <span className="text-gradient">WhatsApp Automation</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Today’s customers expect instant communication. Traditional channels like email often fail to meet these expectations.
                                WhatsApp is now the most powerful channel, enabling businesses to respond instantly and convert more leads.
                            </p>
                        </motion.div>
                    </div>

                    <div className="hidden md:grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                title: "Higher Open Rates",
                                desc: "98% open rates ensure your promotions, order confirmations, and reminders are seen within minutes, unlike email.",
                                icon: <TrendingUp className="w-8 h-8" />,
                                color: "text-emerald-500",
                                bg: "bg-emerald-500/10"
                            },
                            {
                                title: "Instant Customer Support",
                                desc: "Intelligent chatbots handle FAQs 24/7, routing complex issues to agents without long waiting times.",
                                icon: <Headphones className="w-8 h-8" />,
                                color: "text-blue-500",
                                bg: "bg-blue-500/10"
                            },
                            {
                                title: "Automatic Lead Capture",
                                desc: "Capture and qualify leads through structured conversations instantly, ensuring no inquiry is missed.",
                                icon: <Target className="w-8 h-8" />,
                                color: "text-purple-500",
                                bg: "bg-purple-500/10"
                            },
                            {
                                title: "Personalized Marketing",
                                desc: "Send targeted broadcast campaigns at scale while maintaining the feel of a personal one-on-one conversation.",
                                icon: <Megaphone className="w-8 h-8" />,
                                color: "text-orange-500",
                                bg: "bg-orange-500/10"
                            },
                            {
                                title: "Long-Term Relationships",
                                desc: "Build loyalty with automated post-purchase flows, delivery updates, and re-engagement campaigns.",
                                icon: <Users className="w-8 h-8" />,
                                color: "text-pink-500",
                                bg: "bg-pink-500/10"
                            },
                            {
                                title: "Business Growth Engine",
                                desc: "Turn WhatsApp into a complete sales and support platform that scales with your business workload.",
                                icon: <Bot className="w-8 h-8" />,
                                color: "text-bizz-primary",
                                bg: "bg-bizz-primary/10"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-3xl bg-card border border-border hover:border-bizz-primary/40 hover:shadow-2xl hover:shadow-bizz-primary/10 transition-all duration-500"
                            >
                                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Continuous Horizontal Scroll */}
                    <div className="md:hidden overflow-hidden py-4 -mx-4 px-4 relative mb-20">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10" />

                        <motion.div
                            className="flex gap-4 w-max"
                            animate={{
                                x: [0, "-50%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-4">
                                    {[
                                        {
                                            title: "Higher Open Rates",
                                            desc: "98% open rates ensure your promotions, order confirmations, and reminders are seen within minutes, unlike email.",
                                            icon: <TrendingUp className="w-6 h-6" />,
                                            color: "text-emerald-500",
                                            bg: "bg-emerald-500/10"
                                        },
                                        {
                                            title: "Instant Customer Support",
                                            desc: "Intelligent chatbots handle FAQs 24/7, routing complex issues to agents without long waiting times.",
                                            icon: <Headphones className="w-6 h-6" />,
                                            color: "text-blue-500",
                                            bg: "bg-blue-500/10"
                                        },
                                        {
                                            title: "Automatic Lead Capture",
                                            desc: "Capture and qualify leads through structured conversations instantly, ensuring no inquiry is missed.",
                                            icon: <Target className="w-6 h-6" />,
                                            color: "text-purple-500",
                                            bg: "bg-purple-500/10"
                                        },
                                        {
                                            title: "Personalized Marketing",
                                            desc: "Send targeted broadcast campaigns at scale while maintaining the feel of a personal one-on-one conversation.",
                                            icon: <Megaphone className="w-6 h-6" />,
                                            color: "text-orange-500",
                                            bg: "bg-orange-500/10"
                                        },
                                        {
                                            title: "Long-Term Relationships",
                                            desc: "Build loyalty with automated post-purchase flows, delivery updates, and re-engagement campaigns.",
                                            icon: <Users className="w-6 h-6" />,
                                            color: "text-pink-500",
                                            bg: "bg-pink-500/10"
                                        },
                                        {
                                            title: "Business Growth Engine",
                                            desc: "Turn WhatsApp into a complete sales and support platform that scales with your business workload.",
                                            icon: <Bot className="w-6 h-6" />,
                                            color: "text-bizz-primary",
                                            bg: "bg-bizz-primary/10"
                                        }
                                    ].map((item, j) => (
                                        <div
                                            key={`${i}-${j}`}
                                            className="w-[280px] p-6 rounded-3xl bg-card border border-border shadow-[0_4px_20px_rgba(0,0,0,0.05)] shrink-0 flex flex-col group hover:border-bizz-primary/30 transition-all"
                                        >
                                            <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-4 shrink-0 transition-transform group-hover:scale-110`}>
                                                {item.icon}
                                            </div>
                                            <h3 className="text-base font-bold mb-2 leading-tight group-hover:text-bizz-primary transition-colors">{item.title}</h3>
                                            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="p-10 rounded-[2.5rem] bg-gradient-brand text-white text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Turn WhatsApp Into a Complete Growth Channel</h3>
                        <p className="text-white/80 max-w-3xl mx-auto mb-0 relative z-10">
                            With BizzRiser, leverage the official WhatsApp Business API to automate conversations, manage interactions, and scale without increasing operational workload.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-bizz-dark/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(45,198,83,0.15)_0,transparent_100%)]" />

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">See how perfectly it fits your business</h2>
                    <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20talk%20to%20an%20Expert%20about%20WhatsApp%20Business%20API.">
                        <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-brand text-white shadow-[0_0_20px_rgba(45,198,83,0.3)] hover:shadow-[0_0_30px_rgba(45,198,83,0.5)] font-bold transition-all hover:-translate-y-1">
                            Talk to an Expert
                        </Button>
                    </Link>
                </div>
            </section>
        </div >
    );
}
