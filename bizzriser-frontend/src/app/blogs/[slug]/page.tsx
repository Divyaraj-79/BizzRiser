"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    Calendar,
    User,
    Clock,
    Tag,
    ChevronLeft,
    Share2,
    Twitter,
    Linkedin,
    Facebook,
    Mail,
    ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { fetchApi } from "@/lib/api";

// ──────────────────── HELPERS ────────────────────
function formatDate(dateStr: string) {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}

export default function BlogContentPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

    useEffect(() => {
        if (!slug) return;

        setLoading(true);
        fetchApi(`/blogs/${slug}`)
            .then((data) => {
                setBlog(data);
            })
            .catch((err) => {
                console.error("Failed to fetch blog:", err);
                // In a real app, you might redirect to 404
            })
            .finally(() => setLoading(false));
    }, [slug]);

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

    const shareOnTwitter = () => {
        const url = window.location.href;
        const text = `Check out this article: ${blog?.title}`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
    };

    const shareOnLinkedIn = () => {
        const url = window.location.href;
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    };

    if (loading) {
        return (
            <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-bizz-primary border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-muted-foreground animate-pulse">Loading content...</p>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="pt-32 pb-20 min-h-screen container px-4 mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <p className="text-muted-foreground mb-8">The article you're looking for might have been moved or deleted.</p>
                <Button onClick={() => router.push("/blogs")} variant="outline" className="rounded-full">
                    <ChevronLeft className="mr-2 w-4 h-4" /> Back to Blogs
                </Button>
            </div>
        );
    }

    const tags = Array.isArray(blog.tags) ? blog.tags : [];

    return (
        <div className="pt-20 min-h-screen bg-background text-foreground overflow-hidden">
            {/* 1. Header & Hero */}
            <section className="relative py-12 md:py-24 border-b border-border bg-card/30">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bizz-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bizz-accent/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Navigation Back */}
                        <Link
                            href="/blogs"
                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-bizz-primary transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Badge className="bg-bizz-primary/10 text-bizz-primary border-bizz-primary/20 hover:bg-bizz-primary/20 transition-colors">
                                {blog.category}
                            </Badge>
                            {blog.readTime && (
                                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4" /> {blog.readTime} min read
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                            {blog.title}
                        </h1>

                        {/* Author & Date */}
                        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-border/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {blog.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">{blog.author}</div>
                                    <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" /> {formatDate(blog.createdAt)}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2">Share</span>
                                <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover:border-bizz-primary/50 hover:text-bizz-primary transition-all" onClick={shareOnTwitter}>
                                    <Twitter className="w-4 h-4" />
                                </Button>
                                <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover:border-bizz-primary/50 hover:text-bizz-primary transition-all" onClick={shareOnLinkedIn}>
                                    <Linkedin className="w-4 h-4" />
                                </Button>
                                <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover:border-bizz-primary/50 hover:text-bizz-primary transition-all">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Content Section */}
            <section className="py-16 md:py-24">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                        {/* Main Content */}
                        <motion.article
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex-1 max-w-3xl"
                        >
                            {/* Feature Image */}
                            {blog.imageUrl && (
                                <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-border">
                                    <img
                                        src={blog.imageUrl}
                                        alt={blog.title}
                                        className="w-full aspect-video object-cover"
                                    />
                                </div>
                            )}

                            {/* Blog Body - Using prose for better typography */}
                            <div
                                className="blog-content prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-bizz-primary hover:prose-a:underline prose-img:rounded-2xl max-w-none"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />

                            {/* Tags Footer */}
                            {tags.length > 0 && (
                                <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-2">
                                    {tags.map((t: string) => (
                                        <Badge key={t} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-muted-foreground transition-colors px-3 py-1">
                                            <Tag className="w-3 h-3 mr-1.5" /> {t}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </motion.article>

                        {/* Sidebar */}
                        <aside className="lg:w-80 shrink-0">
                            <div className="sticky top-32 space-y-8">
                                {/* TOC / Summary Card */}
                                <Card className="p-6 glass-dark border-border/50">
                                    <h3 className="font-bold mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-bizz-primary rounded-full" />
                                        Summary
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                                        "{blog.excerpt}"
                                    </p>
                                </Card>

                                {/* Mini Newsletter */}
                                <Card className="p-6 bg-gradient-brand text-white border-none shadow-xl overflow-hidden relative">
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                                    <Mail className="w-10 h-10 mb-4 opacity-80" />
                                    <h3 className="font-bold text-xl mb-2 leading-tight">Join our newsletter</h3>
                                    <p className="text-sm text-white/80 mb-6">Get weekly insights on WhatsApp marketing and automation.</p>
                                    <form onSubmit={handleSubscribe} className="space-y-3">
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Your email"
                                            required
                                            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-10 focus:bg-white/30"
                                        />
                                        <Button type="submit" variant="secondary" className="w-full bg-white text-bizz-primary font-bold hover:bg-white/90" disabled={isSubscribing}>
                                            {isSubscribing ? "Joining..." : "Subscribe"}
                                        </Button>
                                    </form>
                                </Card>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* 3. Footer Newsletter (Matching main blog page) */}
            <section className="py-24 bg-card/50 border-t border-border mt-12">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto glass-dark rounded-[2.5rem] p-8 md:p-16 border border-white/5 relative overflow-hidden text-center shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-bizz-accent/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-bizz-primary/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Stay ahead of the <span className="text-gradient">Curve</span>.</h2>
                            <p className="text-muted-foreground mb-10 text-lg md:text-xl max-w-2xl mx-auto font-medium">Join 10,000+ industry leaders receiving our exclusive WhatsApp growth strategies.</p>

                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="h-14 rounded-2xl px-6 bg-background/50 border-border flex-1 text-lg"
                                />
                                <Button type="submit" disabled={isSubscribing} className="h-14 px-10 rounded-2xl bg-foreground text-background font-bold hover:opacity-90 transition-opacity text-lg shrink-0">
                                    {isSubscribing ? "Wait..." : "Subscribe Now"}
                                </Button>
                            </form>

                            {statusMessage.text && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-6 text-sm font-semibold ${statusMessage.type === "success" ? "text-green-500" : "text-red-500"}`}
                                >
                                    {statusMessage.text}
                                </motion.p>
                            )}

                            <p className="text-sm text-muted-foreground mt-8">We respect your privacy. No spam, ever.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Styles for blog content */}
            <style jsx global>{`
                .blog-content h2 { font-size: 1.875rem; margin-top: 2.5rem; margin-bottom: 1.25rem; }
                .blog-content h3 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; }
                .blog-content p { margin-bottom: 1.5rem; line-height: 1.8; }
                .blog-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
                .blog-content li { margin-bottom: 0.5rem; }
                .blog-content strong { color: var(--foreground); }
                .blog-content blockquote { 
                    border-left-width: 4px; 
                    border-color: var(--color-bizz-primary); 
                    padding-left: 1.5rem; 
                    font-style: italic; 
                    margin: 2.5rem 0;
                    color: var(--muted-foreground);
                }
            `}</style>
        </div>
    );
}
