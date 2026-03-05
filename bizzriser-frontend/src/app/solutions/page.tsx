"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Target, Headphones, Megaphone, ShoppingBag, GraduationCap, Building2, Stethoscope, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const goalSolutions = [
    {
        id: "lead-gen",
        title: "Lead Generation",
        desc: "Capture and qualify leads 24/7. Turn website visitors into WhatsApp conversations.",
        icon: <Target className="w-8 h-8 text-emerald-500" />,
        features: ["Chatbot Qualification", "Click-to-WhatsApp Ads", "CRM Integration"],
        gradient: "card-lead-gen",
        iconGradient: "icon-bg-lead"
    },
    {
        id: "support",
        title: "Customer Support",
        desc: "Resolve queries faster. Deflect repetitive questions with intelligent bots and route complex issues to agents.",
        icon: <Headphones className="w-8 h-8 text-blue-500" />,
        features: ["Automated FAQs", "Agent Handover", "Ticket Management"],
        gradient: "card-support",
        iconGradient: "icon-bg-support"
    },
    {
        id: "marketing",
        title: "Broadcast Marketing",
        desc: "Send personalized offers and updates at scale with 98% open rates.",
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

const industrySolutions = [
    { id: "retail", name: "Retail & E-commerce", icon: <ShoppingBag className="w-6 h-6" />, link: "#" },
    { id: "realestate", name: "Real Estate", icon: <Building2 className="w-6 h-6" />, link: "#" },
    { id: "edtech", name: "Education", icon: <GraduationCap className="w-6 h-6" />, link: "#" },
    { id: "health", name: "Healthcare", icon: <Stethoscope className="w-6 h-6" />, link: "#" },
];

export default function SolutionsPage() {
    return (
        <div className="pt-20 min-h-screen bg-background">
            {/* 1. Hero Section */}
            <section className="relative py-24 overflow-hidden bg-card/30 border-b border-border">
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
                            Automate the <span className="text-gradient">entire customer journey</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            From the first click to lifetime loyalty. See how BizzRiser solves your specific business challenges.
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                    <CardHeader>
                                        <div className={`w-16 h-16 rounded-2xl ${solution.iconGradient} flex items-center justify-center mb-4 border border-white/10`}>
                                            {solution.icon}
                                        </div>
                                        <CardTitle className="text-2xl font-bold group-hover:text-gradient transition-all">{solution.title}</CardTitle>
                                        <CardDescription className="text-base mt-2">{solution.desc}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-3">
                                            {solution.features.map(feature => (
                                                <li key={feature} className="flex items-center gap-2 text-foreground font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <div className="p-6 pt-0 mt-auto">
                                        <Button variant="ghost" className="p-0 hover:bg-transparent text-bizz-primary hover:opacity-80 transition-opacity font-semibold">
                                            Learn more <ArrowRight className="w-4 h-4 ml-2" />
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

            {/* 4. CTA Section */}
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
        </div>
    );
}
