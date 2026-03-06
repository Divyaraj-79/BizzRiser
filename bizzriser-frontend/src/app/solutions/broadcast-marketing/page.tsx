"use client";

import { motion } from "framer-motion";
import { ArrowRight, Megaphone, CheckSquare, Zap, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BroadcastMarketingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/2 -translateX-1/2 w-[600px] h-[300px] bg-bizz-accent/15 blur-[120px] rounded-full mix-blend-screen" />
                </div>

                <div className="container relative z-10 px-4 mx-auto text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-bizz-lightgrey px-4 py-2 rounded-full text-sm font-medium mb-8 text-bizz-accent border-bizz-accent/30">
                            Retargeting & Campaigns
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            High-Converting <span className="text-gradient">WhatsApp Broadcasts</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Email marketing is dead. Achieve 98% open rates and 45% click-through rates by broadcasting directly to your customers' most used app.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo%20for%20Broadcasts">
                                <Button size="lg" className="h-14 px-8 w-full sm:w-auto text-lg rounded-full bg-gradient-brand text-white shadow-[0_0_20px_rgba(45,198,83,0.3)] hover:scale-105 transition-transform">
                                    Start Your Campaign
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-card/30 border-y border-border">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Broadcast Capabilities</h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: <Megaphone className="w-5 h-5 md:w-8 md:h-8 text-bizz-primary" />, title: "Bulk Sending", desc: "Send thousands of personalized messages simultaneously without rate-limit fears." },
                            { icon: <CheckSquare className="w-5 h-5 md:w-8 md:h-8 text-bizz-accent" />, title: "Template Approvals", desc: "Easily submit and manage Meta-approved message templates directly from our dashboard." },
                            { icon: <Zap className="w-5 h-5 md:w-8 md:h-8 text-bizz-primary" />, title: "Interactive Messages", desc: "Include rich media, quick reply buttons, and list menus to drive instant action." },
                            { icon: <PieChart className="w-5 h-5 md:w-8 md:h-8 text-bizz-accent" />, title: "Campaign Analytics", desc: "Track delivered, read, and replied statuses in real-time to measure ROI." },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card border border-border p-4 md:p-6 rounded-2xl flex flex-col h-full hover:border-bizz-primary/50 transition-colors"
                            >
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-secondary flex items-center justify-center mb-3 md:mb-4 shrink-0">
                                    {feature.icon}
                                </div>
                                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 leading-tight">{feature.title}</h3>
                                <p className="text-muted-foreground text-xs md:text-sm flex-1">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-bizz-dark/10" />
                <div className="absolute inset-0 bg-gradient-brand opacity-90 mix-blend-multiply" />
                <div className="container px-4 relative z-10 mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Want 10x ROI on your next promo?</h2>
                    <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">Send your first WhatsApp broadcast campaign today and watch the sales roll in.</p>
                    <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo">
                        <Button size="lg" className="bg-white text-black hover:bg-zinc-100 rounded-full px-8 h-14 font-bold">
                            Try Broadcasting
                        </Button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
