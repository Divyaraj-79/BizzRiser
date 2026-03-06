"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Calendar, User, Mail, ChevronLeft, ChevronRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

// ──────────────────── FALLBACK DATA ────────────────────
const FALLBACK_FEATURED = [
    { id: "whatsapp-marketing-2024", slug: "whatsapp-marketing-2024", title: "The Ultimate Guide to WhatsApp Marketing in 2024", excerpt: "Discover the latest trends, strategies, and templates for driving revenue through WhatsApp Business API this year.", category: "Marketing", createdAt: "2024-10-24", author: "Sarah Jenks", imageUrl: null, tags: ["WhatsApp", "Marketing"], readTime: 7 },
    { id: "sales-funnel-whatsapp", slug: "sales-funnel-whatsapp", title: "Building an Automated WhatsApp Sales Funnel", excerpt: "Learn how to capture leads, nurture them with automated sequences, and close deals directly in WhatsApp.", category: "Sales", createdAt: "2024-11-02", author: "Mike Ross", imageUrl: null, tags: ["Sales", "Automation"], readTime: 9 },
    { id: "customer-retention-strategies", slug: "customer-retention-strategies", title: "Mastering Customer Retention with Automated Support", excerpt: "Stop losing customers to slow support times. Implement AI-driven ticketing systems within WhatsApp.", category: "Support", createdAt: "2024-11-15", author: "Elena Davis", imageUrl: null, tags: ["Support", "Retention"], readTime: 6 },
];

const GRADIENT_VARIANTS = [
    "bg-gradient-to-tr from-bizz-primary/20 to-bizz-accent/20",
    "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    "bg-gradient-to-bl from-rose-500/20 to-orange-500/20",
];

const FALLBACK_BLOGS = [
    { id: "1", slug: "reduce-cart-abandonment", title: "How to Reduce Cart Abandonment by 40% with WhatsApp", excerpt: "Learn the exact automated flow that top e-commerce brands use to recover lost sales instantly.", category: "E-Commerce", createdAt: "2024-10-15", author: "Mike Ross", tags: [], readTime: 5, imageUrl: null },
    { id: "2", slug: "whatsapp-api-vs-business-app", title: "WhatsApp API vs. Business App: Which is Right for You?", excerpt: "A comprehensive breakdown of the features, limits, and pricing to help you choose the right solution.", category: "Product", createdAt: "2024-10-10", author: "Elena Davis", tags: [], readTime: 8, imageUrl: null },
    { id: "3", slug: "customer-support-automation", title: "Streamlining Customer Support: AI Chatbots & Human Handoff", excerpt: "How to balance automation and human empathy to improve CSAT scores and reduce resolution times.", category: "Support", createdAt: "2024-10-02", author: "David Kim", tags: [], readTime: 6, imageUrl: null },
    { id: "4", slug: "lead-qualification-templates", title: "5 WhatsApp Templates for Instant Lead Qualification", excerpt: "Stop wasting time on bad leads. Use these plug-and-play templates to qualify prospects automatically.", category: "Sales", createdAt: "2024-09-28", author: "Sarah Jenks", tags: [], readTime: 4, imageUrl: null },
];

// ──────────────────── HELPERS ────────────────────
function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ──────────────────── FEATURED CAROUSEL ────────────────────
function FeaturedBlogsCarousel({ blogs }: { blogs: any[] }) {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (blogs.length === 0) return;
        const interval = setInterval(() => setIndex(prev => (prev + 1) % blogs.length), 4000);
        return () => clearInterval(interval);
    }, [blogs.length]);

    const handleDragEnd = (_: any, info: any) => {
        if (info.offset.x < -40) setIndex(prev => (prev + 1) % blogs.length);
        else if (info.offset.x > 40) setIndex(prev => (prev - 1 + blogs.length) % blogs.length);
    };

    const getOffset = (i: number) => {
        const diff = i - index;
        const half = Math.floor(blogs.length / 2);
        if (diff > half) return diff - blogs.length;
        if (diff < -half) return diff + blogs.length;
        return diff;
    };

    if (blogs.length === 0) return null;

    return (
        <div className="relative w-full max-w-6xl mx-auto h-[450px] md:h-[400px] flex items-center justify-center overflow-hidden">
            <Button variant="outline" size="icon" className="absolute left-1 sm:left-4 z-20 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm border-border" onClick={() => setIndex(p => (p - 1 + blogs.length) % blogs.length)}>
                <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="absolute right-1 sm:right-4 z-20 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm border-border" onClick={() => setIndex(p => (p + 1) % blogs.length)}>
                <ChevronRight className="w-5 h-5" />
            </Button>

            <AnimatePresence>
                {blogs.map((post, i) => {
                    const offset = getOffset(i);
                    const isCenter = offset === 0;
                    const isVisible = Math.abs(offset) <= 1;
                    if (Math.abs(offset) > 2) return null;
                    const tags = typeof post.tags === "string" ? JSON.parse(post.tags) : (post.tags ?? []);

                    return (
                        <motion.div
                            key={post.id}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleDragEnd}
                            animate={{ opacity: isCenter ? 1 : isVisible ? 0.4 : 0, scale: isCenter ? (isMobile ? 1 : 1.05) : 0.85, x: isMobile ? `${offset * 90}%` : `${offset * 70}%`, zIndex: isCenter ? 10 : isVisible ? 5 : 0, boxShadow: isCenter ? "0 20px 40px -15px rgba(45,198,83,0.2)" : "none" }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
                            className={`absolute w-[80vw] sm:w-[50vw] md:w-[600px] lg:w-[800px] bg-background border border-border rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing flex flex-col md:flex-row shadow-xl`}
                            style={{ pointerEvents: isVisible ? "auto" : "none" }}
                        >
                            {/* Image / gradient */}
                            <div className={`w-full md:w-2/5 h-[150px] md:h-full ${post.imageUrl ? "" : GRADIENT_VARIANTS[i % GRADIENT_VARIANTS.length]} relative flex items-center justify-center shrink-0`}>
                                {post.imageUrl ? (
                                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-muted-foreground/40 font-mono text-sm">No Image</span>
                                )}
                            </div>
                            {/* Content */}
                            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center pointer-events-none select-none">
                                <div className="flex items-center gap-2 mb-3">
                                    <Badge className="bg-bizz-primary text-white pointer-events-auto">Featured • {post.category}</Badge>
                                    {post.readTime && <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} min</span>}
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mb-3 leading-tight pointer-events-auto">
                                    <Link href={`/blogs/${post.slug}`} className="hover:text-bizz-primary transition-colors">{post.title}</Link>
                                </h2>
                                <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-2 md:line-clamp-3 pointer-events-auto">{post.excerpt}</p>
                                {tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mb-4 pointer-events-auto">
                                        {tags.slice(0, 3).map((t: string) => (
                                            <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/50">{t}</span>
                                        ))}
                                    </div>
                                )}
                                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mt-auto pointer-events-auto">
                                    <div className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-bizz-primary" />{post.author}</div>
                                    <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(post.createdAt)}</div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}

// ──────────────────── MAIN PAGE ────────────────────
export default function BlogsPage() {
    const [featuredBlogs, setFeaturedBlogs] = useState<any[]>(FALLBACK_FEATURED);
    const [allBlogs, setAllBlogs] = useState<any[]>(FALLBACK_BLOGS);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

    useEffect(() => {
        // Fetch featured blogs
        fetchApi("/blogs/featured").then((data: any[]) => { if (data?.length) setFeaturedBlogs(data); }).catch(() => { });
        // Fetch all published blogs
        fetchApi("/blogs").then((data: any[]) => { if (data?.length) setAllBlogs(data); }).catch(() => { });
    }, []);

    // Build categories from actual data
    const categories = ["All", ...Array.from(new Set(allBlogs.map(b => b.category))).sort()];

    const filteredBlogs = allBlogs.filter(b => {
        const tags = typeof b.tags === "string" ? JSON.parse(b.tags) : (b.tags ?? []);
        const matchCategory = activeCategory === "All" || b.category === activeCategory;
        const matchSearch = searchQuery === "" ||
            b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tags.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchCategory && matchSearch;
    });

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubscribing(true);
        setStatusMessage({ type: "", text: "" });
        const email = new FormData(e.currentTarget).get("email");
        try {
            await fetchApi("/newsletters", { method: "POST", body: JSON.stringify({ email }) });
            setStatusMessage({ type: "success", text: "Successfully subscribed!" });
            (e.target as HTMLFormElement).reset();
        } catch (error: any) {
            setStatusMessage({ type: "error", text: error.message || "Failed to subscribe." });
        } finally {
            setIsSubscribing(false);
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-background">
            {/* 1. Hero & Featured Carousel */}
            <section className="relative py-20 border-b border-border bg-card/30">
                <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-bizz-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            Insights & <span className="text-gradient">Resources</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">Expert advice, industry trends, and product updates on conversational automation.</p>
                    </div>
                    <FeaturedBlogsCarousel blogs={featuredBlogs} />
                </div>
            </section>

            {/* 2. Blog Grid & Filter */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    {/* Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <div className="flex gap-2 py-2 overflow-x-auto w-full md:w-auto no-scrollbar">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${activeCategory === cat ? "bg-bizz-primary text-white shadow-[0_0_15px_rgba(45,198,83,0.3)]" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-bizz-primary/30"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64 shrink-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search articles..."
                                className="pl-9 rounded-full bg-card/50"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Grid */}
                    {filteredBlogs.length === 0 ? (
                        <div className="text-center py-20 text-muted-foreground">No articles found{activeCategory !== "All" ? ` in "${activeCategory}"` : ""}.</div>
                    ) : (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                            {filteredBlogs.map((post, i) => {
                                const tags: string[] = typeof post.tags === "string" ? JSON.parse(post.tags) : (post.tags ?? []);
                                return (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: Math.min(i * 0.05, 0.3) }}
                                    >
                                        <Link href={`/blogs/${post.slug}`} className="block h-full cursor-pointer">
                                            <Card className="h-full flex flex-col glass-dark border-border hover:border-bizz-primary/40 hover:shadow-xl transition-all group overflow-hidden">
                                                {/* Cover image or gradient */}
                                                <div className="h-24 md:h-48 relative flex items-center justify-center border-b border-border/50 shrink-0 overflow-hidden bg-secondary">
                                                    {post.imageUrl ? (
                                                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                                    ) : (
                                                        <div className={`absolute inset-0 ${GRADIENT_VARIANTS[i % GRADIENT_VARIANTS.length]} group-hover:scale-105 transition-transform`} />
                                                    )}
                                                </div>
                                                <CardContent className="p-3 md:p-6 flex-1 flex flex-col">
                                                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                                                        <Badge variant="outline" className="text-[10px] md:text-xs px-2 py-0 md:py-1">{post.category}</Badge>
                                                        {post.readTime && <span className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}m</span>}
                                                    </div>
                                                    <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 group-hover:text-bizz-primary transition-colors line-clamp-2 leading-tight">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-muted-foreground text-[11px] md:text-sm line-clamp-2 md:line-clamp-3 mb-3 md:mb-4 flex-1 leading-relaxed">{post.excerpt}</p>
                                                    {/* Tags */}
                                                    {tags.length > 0 && (
                                                        <div className="hidden md:flex flex-wrap gap-1 mb-3">
                                                            {tags.slice(0, 3).map(t => (
                                                                <span key={t} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-bizz-primary/5 border border-bizz-primary/20 text-bizz-primary/70">
                                                                    <Tag className="w-2.5 h-2.5" />{t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                    <div className="flex flex-wrap items-center justify-between gap-1 text-[9px] sm:text-[10px] md:text-xs font-semibold text-muted-foreground pt-3 md:pt-4 border-t border-border/50">
                                                        <span className="truncate max-w-[60%] flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                                                        <span className="shrink-0 flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(post.createdAt)}</span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
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
                            <Button type="submit" disabled={isSubscribing} className="h-12 px-8 rounded-full bg-foreground text-background font-bold hover:bg-foreground/90 shrink-0">
                                {isSubscribing ? "Wait..." : "Subscribe"}
                            </Button>
                        </form>
                        {statusMessage.text && (
                            <p className={`mt-4 text-sm font-medium ${statusMessage.type === "success" ? "text-green-500" : "text-red-500"}`}>{statusMessage.text}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-4 relative z-10">We respect your inbox. Unsubscribe at any time.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
