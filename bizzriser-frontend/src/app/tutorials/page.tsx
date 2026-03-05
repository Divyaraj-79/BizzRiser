"use client";

import { motion } from "framer-motion";
import { Play, FileText, Search, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Getting Started", "Flow Builder", "Integrations", "Analytics", "API Guidelines"];

const tutorials = [
    {
        id: "getting-started",
        title: "How to Connect Your Meta Business Account",
        duration: "5:30",
        category: "Getting Started",
        thumbnail: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
    },
    {
        id: "first-flow",
        title: "Building Your First Welcome Message Flow",
        duration: "12:45",
        category: "Flow Builder",
        thumbnail: "bg-gradient-to-br from-bizz-primary/20 to-bizz-accent/20"
    },
    {
        id: "shopify-integration",
        title: "Syncing Shopify Orders to WhatsApp Automatically",
        duration: "8:15",
        category: "Integrations",
        thumbnail: "bg-gradient-to-br from-orange-500/20 to-rose-500/20"
    },
    {
        id: "analytics-dashboard",
        title: "Understanding Your Conversation Analytics",
        duration: "6:20",
        category: "Analytics",
        thumbnail: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
    },
    {
        id: "abandoned-cart",
        title: "Creating an Abandoned Cart Recovery Sequence",
        duration: "15:00",
        category: "Flow Builder",
        thumbnail: "bg-gradient-to-br from-rose-500/20 to-pink-500/20"
    },
    {
        id: "webhooks",
        title: "Setting Up Custom Webhooks for Data Sync",
        duration: "10:40",
        category: "API Guidelines",
        thumbnail: "bg-gradient-to-br from-slate-500/20 to-zinc-500/20"
    }
];

const writtenGuides = [
    "How to get verified for WhatsApp Business API",
    "Best practices for avoiding number bans",
    "The anatomy of a high-converting message template",
    "Understanding pricing tiers and conversation categories"
];

export default function TutorialsPage() {
    return (
        <div className="pt-20 min-h-screen bg-background">
            {/* 1. Hero Section */}
            <section className="relative py-24 overflow-hidden border-b border-border bg-card/30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-bizz-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Learn how to master <span className="text-gradient">BizzRiser</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10">
                            Video tutorials, step-by-step guides, and best practices to help you automate like a pro.
                        </p>

                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                placeholder="Search for tutorials, topics, or features..."
                                className="pl-12 h-14 rounded-full bg-background border-border shadow-md"
                            />
                            <Button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-foreground text-background hover:bg-foreground/90 h-10 px-6">
                                Search
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Video Tutorials Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <h2 className="text-2xl font-bold">Video Tutorials</h2>
                        <div className="flex gap-2 py-2 overflow-x-auto w-full md:w-auto scrollbar-hide no-scrollbar">
                            {categories.map(cat => (
                                <Badge key={cat} variant={cat === "All" ? "default" : "secondary"} className={`px-4 py-2 cursor-pointer text-sm font-medium whitespace-nowrap ${cat === "All" ? "bg-foreground text-background" : "hover:bg-bizz-primary/10 hover:text-bizz-primary"}`}>
                                    {cat}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tutorials.map((video, i) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="glass-dark border-border hover:border-bizz-primary/50 transition-all group overflow-hidden cursor-pointer h-full flex flex-col">
                                    <div className={`h-48 ${video.thumbnail} relative flex items-center justify-center p-4`}>
                                        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-bizz-primary transition-colors z-10">
                                            <Play className="w-6 h-6 text-white ml-1" />
                                        </div>
                                        <Badge className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/60 text-white border-0">
                                            <Clock className="w-3 h-3 mr-1" /> {video.duration}
                                        </Badge>
                                    </div>
                                    <CardContent className="p-6 flex-1 flex flex-col">
                                        <Badge variant="outline" className="w-fit mb-3 text-xs">{video.category}</Badge>
                                        <h3 className="text-xl font-bold group-hover:text-bizz-primary transition-colors line-clamp-2">
                                            {video.title}
                                        </h3>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="outline" className="rounded-full">Load More Videos</Button>
                    </div>
                </div>
            </section>

            {/* 3. Written Guides & Support CTA */}
            <section className="py-24 bg-card/30 border-t border-border">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Written Guides */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-foreground" />
                                </div>
                                <h2 className="text-2xl font-bold">Popular Written Guides</h2>
                            </div>

                            <div className="space-y-4">
                                {writtenGuides.map((guide, i) => (
                                    <div key={i} className="group p-5 rounded-2xl border border-border bg-background hover:border-bizz-primary/40 transition-all cursor-pointer flex items-center justify-between">
                                        <span className="font-medium text-foreground group-hover:text-bizz-primary transition-colors">{guide}</span>
                                        <Button variant="ghost" size="icon" className="shrink-0 group-hover:bg-bizz-primary/10 group-hover:text-bizz-primary">
                                            <Play className="w-4 h-4" /> {/* Icon just to show action */}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="link" className="mt-6 text-bizz-primary p-0">Browse all documentation &rarr;</Button>
                        </div>

                        {/* Support CTA */}
                        <div className="glass-dark p-10 rounded-3xl border border-border relative overflow-hidden flex flex-col justify-center text-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-bizz-accent/10 rounded-bl-full pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-bizz-primary/10 rounded-tr-full pointer-events-none" />

                            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 relative z-10">
                                <HelpCircle className="w-8 h-8 text-foreground" />
                            </div>

                            <h2 className="text-2xl font-bold mb-4 relative z-10">Still need help?</h2>
                            <p className="text-muted-foreground mb-8 relative z-10">
                                Can't find what you're looking for? Our support team is ready to help you build the perfect automation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <Button className="rounded-full bg-gradient-brand hover:opacity-90 font-bold">Contact Support</Button>
                                <Button variant="outline" className="rounded-full">Join Community Forums</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
