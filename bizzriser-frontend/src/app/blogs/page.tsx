"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight, Calendar, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Dummy blog data
const featuredBlog = {
    id: "whatsapp-marketing-2024",
    title: "The Ultimate Guide to WhatsApp Marketing in 2024",
    excerpt: "Discover the latest trends, strategies, and templates for driving revenue through WhatsApp Business API this year.",
    category: "Marketing",
    date: "Oct 24, 2024",
    author: "Sarah Jenks",
    image: "bg-gradient-to-tr from-bizz-primary/20 to-bizz-accent/20"
};

const blogs = [
    {
        id: "reduce-cart-abandonment",
        title: "How to Reduce Cart Abandonment by 40% with WhatsApp",
        excerpt: "Learn the exact automated flow that top e-commerce brands use to recover lost sales instantly.",
        category: "E-Commerce",
        date: "Oct 15, 2024",
        author: "Mike Ross"
    },
    {
        id: "whatsapp-api-vs-business-app",
        title: "WhatsApp API vs. Business App: Which is Right for You?",
        excerpt: "A comprehensive breakdown of the features, limits, and pricing to help you choose the right solution.",
        category: "Product",
        date: "Oct 10, 2024",
        author: "Elena Davis"
    },
    {
        id: "customer-support-automation",
        title: "Streamlining Customer Support: AI Chatbots & Human Handoff",
        excerpt: "How to balance automation and human empathy to improve CSAT scores and reduce resolution times.",
        category: "Support",
        date: "Oct 02, 2024",
        author: "David Kim"
    },
    {
        id: "lead-qualification-templates",
        title: "5 WhatsApp Templates for Instant Lead Qualification",
        excerpt: "Stop wasting time on bad leads. Use these plug-and-play templates to qualify prospects automatically.",
        category: "Sales",
        date: "Sep 28, 2024",
        author: "Sarah Jenks"
    },
    {
        id: "bizzriser-update-v2",
        title: "Product Update: Advanced Flow Builder & Analytics",
        excerpt: "We're excited to announce the launch of our new visual drag-and-drop builder and real-time dashboard.",
        category: "News",
        date: "Sep 15, 2024",
        author: "Alex Chen"
    },
    {
        id: "real-estate-automation",
        title: "Automating Property Viewings & Lead Nurturing via WhatsApp",
        excerpt: "A deep dive into how real estate agencies are using conversational AI to close deals faster.",
        category: "Real Estate",
        date: "Sep 05, 2024",
        author: "Mike Ross"
    }
];

const categories = ["All", "Marketing", "E-Commerce", "Support", "Sales", "Product", "News"];

import { useState } from "react";
import { fetchApi } from "@/lib/api";

export default function BlogsPage() {
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubscribing(true);
        setStatusMessage({ type: '', text: '' });

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');

        try {
            await fetchApi('/newsletters', {
                method: 'POST',
                body: JSON.stringify({ email }),
            });
            setStatusMessage({ type: 'success', text: 'Successfully subscribed to the newsletter!' });
            (e.target as HTMLFormElement).reset();
        } catch (error: any) {
            setStatusMessage({ type: 'error', text: error.message || 'Failed to subscribe.' });
        } finally {
            setIsSubscribing(false);
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-background">
            {/* 1. Hero & Featured Blog */}
            <section className="relative py-20 border-b border-border bg-card/30">
                <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-bizz-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            Insights & <span className="text-gradient">Resources</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">Expert advice, industry trends, and product updates on conversational automation.</p>
                    </div>

                    {/* Featured Blog Card */}
                    <Link href={`/blogs/${featuredBlog.id}`} className="block group">
                        <div className="relative rounded-3xl overflow-hidden border border-border bg-background shadow-xl flex flex-col md:flex-row">
                            <div className={`w-full md:w-1/2 h-[300px] md:h-auto ${featuredBlog.image} relative flex items-center justify-center`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                <span className="text-muted-foreground font-mono">[Featured Image Placeholder]</span>
                            </div>
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <Badge className="w-fit mb-4 bg-bizz-primary text-white hover:bg-bizz-primary">Featured • {featuredBlog.category}</Badge>
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-bizz-primary transition-colors leading-tight">
                                    {featuredBlog.title}
                                </h2>
                                <p className="text-muted-foreground text-lg mb-6 line-clamp-2">{featuredBlog.excerpt}</p>
                                <div className="flex items-center gap-4 text-sm font-medium text-foreground">
                                    <div className="flex items-center gap-1"><User className="w-4 h-4 text-bizz-primary" /> {featuredBlog.author}</div>
                                    <div className="flex items-center gap-1 text-muted-foreground"><Calendar className="w-4 h-4" /> {featuredBlog.date}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* 2. Blog Grid & Filter */}
            <section className="py-24">
                <div className="container px-4 mx-auto">

                    {/* Controls: Filter & Search */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <div className="flex gap-2 py-2 overflow-x-auto w-full md:w-auto scrollbar-hide no-scrollbar">
                            {categories.map(cat => (
                                <Badge key={cat} variant={cat === "All" ? "default" : "secondary"} className={`px-4 py-2 cursor-pointer text-sm font-medium whitespace-nowrap ${cat === "All" ? "bg-foreground text-background" : "hover:bg-bizz-primary/10 hover:text-bizz-primary"}`}>
                                    {cat}
                                </Badge>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64 shrink-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Search articles..." className="pl-9 rounded-full bg-card/50" />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((post, i) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href={`/blogs/${post.id}`} className="block h-full cursor-pointer">
                                    <Card className="h-full flex flex-col glass-dark border-border hover:border-bizz-primary/40 hover:shadow-xl transition-all group overflow-hidden">
                                        <div className="h-48 bg-secondary flex items-center justify-center border-b border-border/50 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/5 group-hover:scale-105 transition-transform" />
                                            <span className="text-muted-foreground/50 text-sm">[Image]</span>
                                        </div>
                                        <CardContent className="p-6 flex-1 flex flex-col">
                                            <Badge variant="outline" className="w-fit mb-4 text-xs">{post.category}</Badge>
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-bizz-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground pt-4 border-t border-border/50">
                                                <span>{post.author}</span>
                                                <span>{post.date}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" className="rounded-full">Load More Articles</Button>
                    </div>
                </div>
            </section>

            {/* 3. Newsletter Signup */}
            <section className="py-24 bg-card/50 border-t border-border">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto glass-dark rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden text-center shadow-xl hover:shadow-[0_0_40px_rgba(45,198,83,0.1)] transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-bizz-accent/10 rounded-full blur-[40px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-bizz-primary/10 rounded-full blur-[40px] pointer-events-none" />

                        <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Get the latest insights delivered weekly.</h2>
                        <p className="text-muted-foreground mb-8 text-lg relative z-10 max-w-xl mx-auto">Join 10,000+ founders and marketers learning how to grow with WhatsApp automation.</p>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
                            <Input name="email" type="email" placeholder="Enter your email" required className="h-12 rounded-full px-6 bg-background border-border flex-1" />
                            <Button type="submit" disabled={isSubscribing} className="h-12 px-8 rounded-full bg-foreground text-background font-bold hover:bg-foreground/90 shrink-0 shadow-lg">
                                {isSubscribing ? 'Wait...' : 'Subscribe'}
                            </Button>
                        </form>
                        {statusMessage.text && (
                            <div className={`mt-4 text-sm font-medium ${statusMessage.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                {statusMessage.text}
                            </div>
                        )}
                        <p className="text-xs text-muted-foreground mt-4 relative z-10">We respect your inbox. Unsubscribe at any time.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
