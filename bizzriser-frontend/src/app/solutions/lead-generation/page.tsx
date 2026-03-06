"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Target, Magnet, MessageCircle, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LeadGenerationPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">

            {/* 1. Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-bizz-accent/10 blur-[100px] rounded-full mix-blend-screen" />
                </div>

                <div className="container relative z-10 px-4 mx-auto text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-bizz-lightgrey px-4 py-2 rounded-full text-sm font-medium mb-8 text-bizz-accent border-bizz-accent/30">
                            B2B & B2C Solutions
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            Capture & Qualify <span className="text-gradient">Leads Automatically</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Turn your WhatsApp number into a 24/7 lead generation machine. Capture details, qualify prospects instantly, and sync them to your CRM.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo%20for%20Lead%20Generation">
                                <Button size="lg" className="h-14 px-8 w-full sm:w-auto text-lg rounded-full bg-gradient-brand text-white shadow-[0_0_20px_rgba(45,198,83,0.3)] hover:scale-105 transition-transform">
                                    Start Generating Leads
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Features Grid */}
            <section className="py-20 bg-card/30 border-y border-border">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                        <p className="text-muted-foreground">Four steps to a highly converting pipeline.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: <Target className="w-5 h-5 md:w-8 md:h-8 text-bizz-primary" />, title: "1. Traffic to WhatsApp", desc: "Use Click-to-WhatsApp ads or website QR codes to drive immediate conversations." },
                            { icon: <Bot className="w-5 h-5 md:w-8 md:h-8 text-bizz-accent" />, title: "2. Auto-Qualification", desc: "Our intelligent bots ask the right questions to qualify leads, day or night." },
                            { icon: <Magnet className="w-5 h-5 md:w-8 md:h-8 text-bizz-primary" />, title: "3. Smart Routing", desc: "Instantly route hot leads to human agents while nurturing cold ones." },
                            { icon: <BarChart className="w-5 h-5 md:w-8 md:h-8 text-bizz-accent" />, title: "4. CRM Sync", desc: "Automatically push collected details into Hubspot, Salesforce, or Google Sheets." },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background border border-border p-4 md:p-6 rounded-2xl relative overflow-hidden group flex flex-col h-full"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-bizz-primary/5 rounded-bl-[2rem] md:rounded-bl-full -mr-6 -mt-6 md:-mr-10 md:-mt-10 transition-transform group-hover:scale-110" />
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-secondary flex items-center justify-center mb-3 md:mb-6 relative z-10 shrink-0">
                                    {feature.icon}
                                </div>
                                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 relative z-10 leading-tight">{feature.title}</h3>
                                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed relative z-10 flex-1">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-24 relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-bizz-dark/10" />
                <div className="absolute inset-0 bg-gradient-brand opacity-90 mix-blend-multiply" />
                <div className="container px-4 relative z-10 mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Stop losing late-night leads.</h2>
                    <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">Set up your automated lead generation flow today and watch your database grow.</p>
                    <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo">
                        <Button size="lg" className="bg-white text-black hover:bg-zinc-100 rounded-full px-8 h-14 font-bold">
                            Book a Free Demo
                        </Button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
