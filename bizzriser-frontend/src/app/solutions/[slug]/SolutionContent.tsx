"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, ShoppingBag, GraduationCap, Building2, Stethoscope, TrendingUp, Plane, ShoppingCart, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { fetchApi } from "@/lib/api";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const ICON_MAP: Record<string, React.ReactNode> = {
    ShoppingCart: <ShoppingCart className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    Building2: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    Stethoscope: <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    GraduationCap: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    Plane: <Plane className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    TrendingUp: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    ShoppingBag: <ShoppingBag className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    Bot: <Bot className="w-8 h-8 md:w-10 md:h-10 text-white" />,
};

interface IndustryData {
    title: string;
    icon: string;
    content: {
        hero: { headline: string; subheadline: string; shortDescription: string };
        problem: { title: string; points: string[] };
        solution: { title: string; description: string; points: string[] };
        useCases: { title: string; description: string }[];
        flow: string[];
        benefits: string[];
        audiences: string[];
        cta: { headline: string; subheadline: string };
    };
}

export default function IndustrySolutionPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const [data, setData] = useState<IndustryData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
        fetchApi("/solution-industries/slug/" + slug)
            .then((res: any) => {
                let parsedContent = res.content;
                if (typeof res.content === "string") {
                    try { parsedContent = JSON.parse(res.content); } catch (e) { }
                }
                setData({ ...res, content: parsedContent });
                setLoading(false);
            })
            .catch(() => {
                router.push("/solutions");
            });
    }, [slug, router]);

    if (loading) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
                <div className="w-12 h-12 border-4 border-bizz-primary/30 border-t-bizz-primary rounded-full animate-spin mb-4" />
                <p className="text-muted-foreground font-medium animate-pulse">Loading Industry Solution...</p>
            </div>
        );
    }

    if (!data || !data.content) return null;

    const { content } = data;
    const hero = content.hero || {};
    const problem = content.problem || { points: [] };
    const solution = content.solution || { points: [] };
    const useCases = content.useCases || [];
    const flow = content.flow || [];
    const benefits = content.benefits || [];
    const cta = content.cta || {};

    return (
        <div className="bg-background flex flex-col flex-1 pb-10">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border bg-card/20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bizz-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
                        <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-bizz-primary/20 rotate-3">
                            <div className="-rotate-3">{ICON_MAP[data.icon] || ICON_MAP.Bot}</div>
                        </div>
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-foreground/80 text-xs md:text-sm font-semibold mb-6 uppercase tracking-wider">
                            {data.title} Solutions
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            {hero.headline}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
                            {hero.subheadline}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo">
                                <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-brand hover:opacity-90 shadow-[0_0_20px_rgba(45,198,83,0.4)] hover:shadow-[0_0_30px_rgba(45,198,83,0.6)] text-white transition-all text-base md:text-lg">
                                    See How it Works
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Short Description / Hook */}
            {hero.shortDescription && (
                <section className="py-16 md:py-20 bg-background border-b border-border relative">
                    <div className="container px-4 mx-auto max-w-4xl text-center">
                        <p className="text-xl md:text-2xl font-serif text-foreground/90 italic leading-relaxed">
                            "{hero.shortDescription}"
                        </p>
                    </div>
                </section>
            )}

            {/* 3. Problem vs Solution */}
            <section className="py-24 bg-card/30">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Problem Column */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <Card className="h-full bg-red-500/5 border-red-500/20 pt-8 px-6 pb-10">
                                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                        <XCircle className="w-5 h-5" />
                                    </div>
                                    The Challenge
                                </h3>
                                <ul className="space-y-4">
                                    {(problem.points || []).map((pt: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                            <span className="text-foreground/80 leading-relaxed">{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>

                        {/* Solution Column */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <Card className="h-full bg-bizz-primary/5 border-bizz-primary/20 pt-8 px-6 pb-10 shadow-[0_0_40px_rgba(45,198,83,0.05)] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-bizz-primary/10 rounded-full blur-3xl" />
                                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-bizz-primary/20 flex items-center justify-center text-bizz-primary">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    The Solution
                                </h3>
                                <p className="text-bizz-accent font-medium mb-6 relative z-10">{solution.description}</p>
                                <ul className="space-y-4 relative z-10">
                                    {(solution.points || []).map((pt: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-bizz-primary mt-0.5 shrink-0" />
                                            <span className="text-foreground/90 font-medium leading-relaxed">{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Use Cases Grid */}
            {useCases.length > 0 && (
                <section className="py-24 bg-background border-t border-border">
                    <div className="container px-4 mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Use Cases for {data.title}</h2>
                            <p className="text-muted-foreground mx-auto max-w-2xl">Discover how automation perfectly maps to your daily operations.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {useCases.map((uc: any, i: number) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <Card className="h-full bg-card hover:border-bizz-primary/40 hover:shadow-lg transition-all border-border overflow-hidden group">
                                        <div className="h-2 w-full bg-white/5 group-hover:bg-gradient-brand transition-all" />
                                        <CardContent className="p-6">
                                            <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-bizz-primary transition-colors">{uc.title}</h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{uc.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 5. Automation Flow */}
            {flow.length > 0 && (
                <section className="py-24 bg-card/50 border-t border-border overflow-hidden">
                    <div className="container px-4 mx-auto max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16">Example Automation Flow</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                            {flow.map((step: string, i: number) => (
                                <div key={i} className="flex flex-col md:flex-row items-center group">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                                        className="bg-background border border-border p-4 rounded-xl text-center min-w-[140px] shadow-sm relative group-hover:border-bizz-primary group-hover:shadow-[0_0_15px_rgba(45,198,83,0.2)] transition-all z-10"
                                    >
                                        <span className="text-xs font-bold text-bizz-primary mb-1 block">STEP {i + 1}</span>
                                        <p className="text-sm font-medium text-foreground">{step}</p>
                                    </motion.div>
                                    {i < flow.length - 1 && (
                                        <div className="my-2 md:my-0 md:mx-2 text-muted-foreground/50">
                                            <ArrowRight className="w-5 h-5 hidden md:block" />
                                            {/* Mobile downward arrow */}
                                            <ArrowRight className="w-5 h-5 rotate-90 block md:hidden" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 6. Call to Action */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-bizz-dark/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,198,83,0.15)_0,transparent_100%)]" />
                <div className="container px-4 mx-auto relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{cta.headline}</h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10">{cta.subheadline}</p>
                    <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo">
                        <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-brand text-white shadow-[0_0_20px_rgba(45,198,83,0.4)] hover:shadow-[0_0_30px_rgba(45,198,83,0.5)] font-bold transition-all hover:scale-105">
                            Automate Your Business
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
