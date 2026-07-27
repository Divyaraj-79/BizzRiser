"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, Users, Heart, Zap, Globe, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Counter } from "@/components/ui/counter";
import Image from "next/image";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

const numbers = [
    { label: "Active Customers", value: "10,000+" },
    { label: "Team Members", value: "50+" },
    { label: "Countries Served", value: "30+" },
    { label: "Messages Processed", value: "500M+" },
];

const values = [
    { title: "Customer Obsession", icon: <Heart className="w-8 h-8 text-rose-500" />, desc: "We prioritize our customers' success above everything else." },
    { title: "Innovation Always", icon: <Lightbulb className="w-8 h-8 text-yellow-500" />, desc: "We constantly build the future of conversation automation." },
    { title: "Integrity & Trust", icon: <Shield className="w-8 h-8 text-blue-500" />, desc: "We operate transparently and keep your data secure." },
    { title: "Speed & Execution", icon: <Zap className="w-8 h-8 text-orange-500" />, desc: "We move fast to deliver features that matter to you." },
];

export default function AboutPage() {
    const [section, setSection] = useState({ title: "Powered by Selten Infotech", description: "BizzRiser is proudly developed and maintained by Selten Infotech..." });
    const [stats, setStats] = useState<any[]>([]);

    useEffect(() => {
        const load = async () => {
            try {
                const [secData, statsData] = await Promise.all([
                    fetchApi("/partner-info/section"),
                    fetchApi("/partner-info/stats"),
                ]);
                if (secData) setSection(secData);
                if (statsData && statsData.length > 0) setStats(statsData);
            } catch (e) {
                console.error("Failed to load about data:", e);
            }
        };
        load();
    }, []);

    return (
        <div className="bg-background flex flex-col flex-1">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-card/30 border-b border-border">
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-bizz-primary/30 bg-bizz-primary/10 text-bizz-primary text-sm font-semibold mb-6">
                            Our Story
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                            Enabling Businesses to <span className="text-gradient">Connect Better.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                            BizzRiser was born from a simple observation: businesses were losing millions by failing to engage with customers where they already spend their time—on WhatsApp.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Mission & Vision */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <Card className="h-full border-border bg-gradient-to-br from-card to-bizz-primary/5 hover:border-bizz-primary/50 transition-colors">
                                <CardContent className="p-10">
                                    <div className="w-16 h-16 rounded-2xl bg-bizz-primary/20 flex items-center justify-center mb-6">
                                        <Target className="w-8 h-8 text-bizz-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        To democratize enterprise-grade WhatsApp automation, making it accessible, practical, and highly profitable for businesses of all sizes without requiring technical expertise.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <Card className="h-full border-border bg-gradient-to-br from-card to-bizz-accent/5 hover:border-bizz-accent/50 transition-colors">
                                <CardContent className="p-10">
                                    <div className="w-16 h-16 rounded-2xl bg-bizz-accent/20 flex items-center justify-center mb-6">
                                        <Globe className="w-8 h-8 text-bizz-accent" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        To become the global standard for conversational commerce, where every business interaction feels personal, immediate, and utterly frictionless.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. By Selten Infotech Highlights */}
            <section className="py-24 md:py-24 bg-card/50 border-y border-border relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bizz-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
                        <p className="text-lg text-muted-foreground mb-12">
                            {section.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {(stats.length > 0 ? stats : [
                            { label: "Years Experience", value: "5+" },
                            { label: "Brands Served", value: "500+" },
                            { label: "Technical Experts", value: "10+" },
                            { label: "Support Uptime", value: "99.9%" },
                        ]).map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="card-stat p-6 text-center h-full hover:shadow-[0_0_30px_rgba(45,198,83,0.12)] transition-all">
                                    <CardContent className="p-0">
                                        <Counter value={stat.value} label={stat.label} duration={2000} />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Core Values */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground">The principles that guide every feature we build and every customer we support.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-none mx-auto">
                        {values.map((val, i) => (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card p-5 md:p-8 rounded-2xl md:rounded-3xl border border-border hover:border-bizz-primary/30 transition-all flex flex-col"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center mb-4 md:mb-6 shrink-0">
                                    <div className="scale-75 md:scale-100">
                                        {val.icon}
                                    </div>
                                </div>
                                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 leading-tight">{val.title}</h3>
                                <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Proud Numbers / Impact */}
            {/* <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-brand/20" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-bizz-primary/10 blur-[150px] rounded-full pointer-events-none" />

                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">The Impact So Far</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Driving real results for businesses worldwide with our automation platform.</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {numbers.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <Card className="card-stat h-full hover:shadow-[0_0_40px_rgba(45,198,83,0.2)] transition-all group">
                                    <CardContent className="p-8">
                                        <Counter value={stat.value} label={stat.label} duration={2500} />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    );
}
