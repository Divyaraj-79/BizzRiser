"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Building2,
    Calendar,
    ChevronLeft,
    Share2,
    Twitter,
    Linkedin,
    Target,
    TrendingUp,
    ShoppingBag,
    Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { fetchApi } from "@/lib/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CaseStudyDetailPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [study, setStudy] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        setLoading(true);
        fetchApi(`/case-studies/${id}`)
            .then((data) => {
                setStudy(data);
            })
            .catch((err) => {
                console.error("Failed to fetch case study:", err);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center bg-background">
                <div className="w-12 h-12 border-4 border-bizz-primary border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-muted-foreground animate-pulse">Loading success story...</p>
            </div>
        );
    }

    if (!study) {
        return (
            <div className="pt-32 pb-20 min-h-screen container px-4 mx-auto text-center bg-background">
                <h1 className="text-4xl font-bold mb-4">Story Not Found</h1>
                <p className="text-muted-foreground mb-8">The success story you're looking for might have been moved or deleted.</p>
                <Button onClick={() => router.push("/case-studies")} variant="outline" className="rounded-full">
                    <ChevronLeft className="mr-2 w-4 h-4" /> Back to Case Studies
                </Button>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen bg-background text-foreground overflow-hidden">
            {/* 1. Header & Hero */}
            <section className="relative py-12 md:py-24 border-b border-border bg-card/30 overflow-hidden">
                {study.bannerUrl && (
                    <div className="absolute inset-0 z-0">
                        <img
                            src={study.bannerUrl}
                            alt=""
                            className="w-full h-full object-cover opacity-20 blur-sm h-[120%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
                    </div>
                )}

                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bizz-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4 z-0" />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-bizz-primary transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Success Stories
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Badge className="bg-bizz-primary/10 text-bizz-primary border-bizz-primary/20">
                                {study.industry}
                            </Badge>
                            <Badge variant="outline">
                                {study.goal}
                            </Badge>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                            {study.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-border/50">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-accent/10 rounded-2xl border border-accent/20">
                                    <div className="text-3xl font-bold text-foreground">{study.metric}</div>
                                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{study.metricLabel}</div>
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">{study.company}</div>
                                    <div className="text-sm text-muted-foreground">Customer Success Story</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover:text-bizz-primary transition-colors">
                                    <Twitter className="w-4 h-4" />
                                </Button>
                                <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover:text-bizz-primary transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </Button>
                                <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover:text-bizz-primary transition-colors">
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

                        <motion.article
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex-1 max-w-3xl"
                        >
                            {study.logoUrl && (
                                <div className="mb-12 rounded-3xl overflow-hidden shadow-xl border border-border bg-white p-8 flex items-center justify-center h-64">
                                    <img
                                        src={study.logoUrl}
                                        alt={study.company}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            )}

                            <div className="case-study-content prose prose-lg dark:prose-invert prose-headings:font-bold prose-p:leading-relaxed prose-a:text-bizz-primary max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {study.content}
                                </ReactMarkdown>
                            </div>
                        </motion.article>

                        <aside className="lg:w-80 shrink-0">
                            <div className="sticky top-32 space-y-8">
                                <Card className="p-6 bg-card border-border/50">
                                    <h3 className="font-bold mb-4 flex items-center gap-2 text-foreground">
                                        <div className="w-1.5 h-6 bg-bizz-primary rounded-full" />
                                        Key Results
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                                            <div className="text-2xl font-bold text-bizz-primary">{study.metric}</div>
                                            <div className="text-sm text-muted-foreground">{study.metricLabel}</div>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                                            "{study.excerpt}"
                                        </p>
                                    </div>
                                </Card>

                                <Card className="p-8 bg-gradient-brand text-white border-none shadow-2xl relative overflow-hidden">
                                    <div className="relative z-10 text-center">
                                        <h3 className="font-bold text-2xl mb-4">Ready for results like these?</h3>
                                        <p className="text-white/80 mb-8">Join {study.company} and 500+ other brands growing with BizzRiser.</p>
                                        <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo" target="_blank">
                                            <Button className="w-full bg-white text-bizz-dark hover:bg-zinc-100 font-bold h-12 rounded-full">
                                                Book a Demo
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .case-study-content h2 { font-size: 1.875rem; margin-top: 2.5rem; margin-bottom: 1.25rem; font-weight: 800; color: var(--foreground); }
                .case-study-content h3 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; font-weight: 700; color: var(--foreground); }
                .case-study-content p { margin-bottom: 1.5rem; line-height: 1.8; color: var(--muted-foreground); }
                .case-study-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
                .case-study-content li { margin-bottom: 0.5rem; color: var(--muted-foreground); }
            `}</style>
        </div>
    );
}
