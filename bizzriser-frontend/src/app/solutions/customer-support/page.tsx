"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquareText, Timer, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomerSupportPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-bizz-primary/10 blur-[100px] rounded-full mix-blend-screen" />
                </div>

                <div className="container relative z-10 px-4 mx-auto text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-bizz-lightgrey px-4 py-2 rounded-full text-sm font-medium mb-8 text-bizz-accent border-bizz-accent/30">
                            Shared Teams Inbox
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            Deliver Exceptional <span className="text-gradient">Customer Support</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Resolve tickets faster. Combine AI automation with a multi-agent shared inbox to give your customers the rapid support they expect.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo%20for%20Support">
                                <Button size="lg" className="h-14 px-8 w-full sm:w-auto text-lg rounded-full bg-gradient-brand text-white shadow-[0_0_20px_rgba(45,198,83,0.3)] hover:scale-105 transition-transform">
                                    Transform Your Support
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-card/50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Features</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: <Users className="w-5 h-5 md:w-8 md:h-8 text-bizz-primary" />, title: "Multi-Agent Inbox", desc: "One number, unlimited agents. Route chats to specific departments silently and oversee all interactions from a single dashboard." },
                            { icon: <Timer className="w-5 h-5 md:w-8 md:h-8 text-bizz-accent" />, title: "Instant FAQ Resolution", desc: "Let AI handle the \"Where is my order?\" queries instantly, freeing your team for complex issues." },
                            { icon: <MessageSquareText className="w-5 h-5 md:w-8 md:h-8 text-bizz-primary" />, title: "Canned Responses", desc: "Save hours of typing with templated quick replies for your most common customer inquiries." },
                            { icon: <HeartHandshake className="w-5 h-5 md:w-8 md:h-8 text-bizz-accent" />, title: "Seamless Human Handoff", desc: "Bots know when they're stuck. They seamlessly transfer frustrated customers to a live agent with full chat history." },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background border border-border p-4 md:p-8 rounded-2xl md:rounded-3xl flex flex-col h-full shrink-0 hover:border-bizz-primary/50 transition-colors"
                            >
                                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center mb-3 md:mb-6 shrink-0">
                                    {feature.icon}
                                </div>
                                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 leading-tight">{feature.title}</h3>
                                <p className="text-muted-foreground text-xs md:text-base leading-relaxed flex-1">{feature.desc}</p>
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
                    <h2 className="text-4xl font-bold mb-6">Happy customers buy again.</h2>
                    <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">Reduce response times to seconds and build ultimate brand loyalty.</p>
                    <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo">
                        <Button size="lg" className="bg-white text-black hover:bg-zinc-100 rounded-full px-8 h-14 font-bold">
                            See It In Action
                        </Button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
