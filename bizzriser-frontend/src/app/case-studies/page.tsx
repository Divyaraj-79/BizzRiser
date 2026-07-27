"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, ShoppingBag, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

const filters = {
    industry: ["All Industries", "E-Commerce", "Real Estate", "Education", "Healthcare", "Retail", "Fintech"],
    goal: ["All Goals", "Lead Gen", "Support", "Marketing", "Retention"]
};

export default function CaseStudiesPage() {
    const [caseStudies, setCaseStudies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
    const [selectedGoal, setSelectedGoal] = useState("All Goals");

    useEffect(() => {
        fetchApi("/case-studies")
            .then(data => {
                setCaseStudies(data.filter((cs: any) => cs.published !== false));
            })
            .catch(err => console.error("Failed to fetch case studies:", err))
            .finally(() => setLoading(false));
    }, []);

    const filteredCaseStudies = caseStudies.filter(study => {
        const industryMatch = selectedIndustry === "All Industries" || study.industry === selectedIndustry;
        const goalMatch = selectedGoal === "All Goals" || study.goal === selectedGoal;
        return industryMatch && goalMatch;
    });

    return (
        <div className="bg-background flex flex-col flex-1">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-card/30">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,198,83,0.1),transparent_50%)] pointer-events-none" />

                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-bizz-primary/30 bg-bizz-primary/10 text-bizz-primary text-sm font-semibold mb-6">
                            Success Stories
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Real businesses. <span className="text-gradient">Real revenue.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10">
                            Discover how forward-thinking companies are using BizzRiser to transform their customer engagement and bottom line.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Filters & Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
                        <h2 className="text-2xl font-bold hidden md:block">All Customer Stories</h2>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <select
                                value={selectedIndustry}
                                onChange={(e) => setSelectedIndustry(e.target.value)}
                                className="h-10 w-full sm:w-auto rounded-full border border-input bg-background/50 px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all cursor-pointer"
                            >
                                {filters.industry.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                            <select
                                value={selectedGoal}
                                onChange={(e) => setSelectedGoal(e.target.value)}
                                className="h-10 w-full sm:w-auto rounded-full border border-input bg-background/50 px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all cursor-pointer"
                            >
                                {filters.goal.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* Grid */}
                    {loading ? (
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="h-[300px] md:h-[400px] rounded-2xl bg-white/5 animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                            {filteredCaseStudies.map((study, i) => (
                                <motion.div
                                    key={study.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <Link href={`/case-studies/${study.slug || study.id}`} className="block h-full cursor-pointer">
                                        <Card className="h-full flex flex-col bg-gradient-to-br from-accent/10 to-bizz-primary/10 border-accent/20 hover:border-accent/40 hover:shadow-xl transition-all overflow-hidden rounded-xl md:rounded-2xl">
                                            {/* Top Banner / Metric Header */}
                                            <div className="relative h-32 md:h-48 overflow-hidden group/banner border-b border-accent/20">
                                                {study.bannerUrl ? (
                                                    <>
                                                        <img
                                                            src={study.bannerUrl}
                                                            alt={study.company}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                                                    </>
                                                ) : (
                                                    <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-bizz-primary/5" />
                                                    </div>
                                                )}

                                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-3 md:p-6 z-10">
                                                    <div className={`text-xl md:text-4xl font-extrabold mb-0.5 md:mb-1 drop-shadow-lg transition-transform duration-500 group-hover:scale-110 ${study.bannerUrl ? 'text-white' : 'text-foreground'}`}>
                                                        {study.metric}
                                                    </div>
                                                    <div className={`text-[8px] md:text-sm font-semibold uppercase tracking-wider ${study.bannerUrl ? 'text-white/90' : 'text-muted-foreground'}`}>
                                                        {study.metricLabel}
                                                    </div>
                                                </div>
                                            </div>

                                            <CardContent className="p-3 md:p-6 flex-1 flex flex-col relative z-10">
                                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 md:mb-6">
                                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-white border border-accent/20 flex items-center justify-center p-1.5 shadow-sm overflow-hidden shrink-0">
                                                        {study.logoUrl ? (
                                                            <img src={study.logoUrl} alt={study.company} className="w-full h-full object-contain" />
                                                        ) : (
                                                            <Building2 className="w-5 h-5 md:w-8 md:h-8 text-accent" />
                                                        )}
                                                    </div>
                                                    <div className="flex flex-wrap md:flex-col items-start md:items-end gap-1.5 md:gap-2">
                                                        <Badge variant="outline" className="text-[10px] md:text-xs px-2 py-0 h-5 md:h-auto">{study.industry}</Badge>
                                                        <Badge className="bg-bizz-primary/10 text-bizz-primary hover:bg-bizz-primary/20 hover:text-bizz-primary border-0 text-[10px] md:text-xs px-2 py-0 h-5 md:h-auto">{study.goal}</Badge>
                                                    </div>
                                                </div>

                                                <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                                                    {study.title}
                                                </h3>
                                                <p className="text-muted-foreground text-[10px] md:text-sm line-clamp-2 md:line-clamp-3 mb-4 md:mb-6 flex-1 leading-normal">
                                                    {study.excerpt}
                                                </p>

                                                <div className="flex items-center text-[10px] md:text-sm font-bold text-foreground group-hover:text-bizz-primary transition-colors mt-auto">
                                                    Read full story <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    <div className="mt-16 text-center">
                        <Button variant="outline" className="rounded-full h-12 px-8">Load More Stories</Button>
                    </div>

                </div>
            </section>

            {/* 3. CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-bizz-dark/10" />
                <div className="absolute inset-0 bg-gradient-brand opacity-90 mix-blend-multiply" />

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to be our next success story?</h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                        Book a demo today to see exactly how BizzRiser can drive ROI for your specific use case.
                    </p>
                    <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo" target="_blank">
                        <Button size="lg" className="h-14 px-8 rounded-full bg-white text-bizz-dark hover:bg-zinc-100 font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1">
                            Book a Demo
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
