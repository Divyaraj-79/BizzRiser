"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Coffee, Heart, Laptop, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const perks = [
    { title: "Remote First", icon: <Laptop className="w-6 h-6 text-bizz-primary" />, desc: "Work from anywhere in the world. We care about output, not hours spent at a desk." },
    { title: "Health & Wellness", icon: <Heart className="w-6 h-6 text-rose-500" />, desc: "Comprehensive health coverage and monthly wellness stipends for all employees." },
    { title: "Continuous Learning", icon: <Zap className="w-6 h-6 text-yellow-500" />, desc: "Annual budget for courses, conferences, and books to fuel your growth." },
    { title: "Flexible Time Off", icon: <Clock className="w-6 h-6 text-blue-500" />, desc: "Take the time you need to recharge. Mandatory minimum of 20 days off per year." },
];

const openRoles = [
    {
        title: "Senior Full Stack Engineer",
        department: "Engineering",
        location: "Remote (Global)",
        type: "Full-time",
        desc: "Help us build the next generation of our conversational automation engine using Next.js and NestJS.",
    },
    {
        title: "Product Marketing Manager",
        department: "Marketing",
        location: "New York, NY or Remote (US)",
        type: "Full-time",
        desc: "Lead the go-to-market strategy for new features and help craft the BizzRiser narrative.",
    },
    {
        title: "Customer Success Specialist",
        department: "Support",
        location: "Remote (EMEA)",
        type: "Full-time",
        desc: "Guide our enterprise clients to success by helping them design high-converting WhatsApp flows.",
    },
    {
        title: "Account Executive",
        department: "Sales",
        location: "London, UK or Remote (Europe)",
        type: "Full-time",
        desc: "Drive new business acquisition and close deals with mid-market and enterprise clients.",
    }
];

export default function CareersPage() {
    return (
        <div className="pt-20 min-h-screen bg-background">
            {/* 1. Hero Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-bizz-primary/10 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-bizz-accent/10 blur-[100px] rounded-full mix-blend-screen" />
                </div>

                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full glass-dark text-foreground text-sm font-semibold mb-6 border border-border">
                            Join Our Team
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Build the future of <span className="text-gradient">conversation.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            We're a team of builders, creators, and problem solvers on a mission to democratize enterprise-grade automation.
                        </p>
                        <Button onClick={() => document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" })} size="lg" className="h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all font-bold">
                            View Open Roles
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 2. Work Life / Culture (Image Grid Mockup) */}
            <section className="py-24 bg-card/30 border-y border-border" id="work">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Life at BizzRiser</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
                        We work hard, but we also know how to have fun. Here's a glimpse into our culture, team retreats, and day-to-day life.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        <div className="col-span-2 row-span-2 h-[400px] rounded-3xl bg-secondary overflow-hidden relative group">
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-lg">Annual Team Retreat</span>
                            </div>
                        </div>
                        <div className="h-[192px] rounded-3xl bg-secondary overflow-hidden relative group">
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold">Hackathon</span>
                            </div>
                        </div>
                        <div className="h-[192px] rounded-3xl bg-secondary overflow-hidden relative group">
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold">Office Life</span>
                            </div>
                        </div>
                        <div className="col-span-2 h-[192px] rounded-3xl bg-secondary overflow-hidden relative group">
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold">Collaboration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Perks & Benefits */}
            <section className="py-24">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Perks & Benefits</h2>
                        <p className="text-muted-foreground">We invest in our team so they can do their best work.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {perks.map((perk, i) => (
                            <motion.div
                                key={perk.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 p-6 rounded-3xl bg-gradient-to-br from-accent/10 to-bizz-primary/10 border border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 shrink-0 flex items-center justify-center">
                                    {perk.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{perk.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Open Roles API Stub (Job Cards) */}
            <section className="py-24 bg-card/50 border-t border-border" id="open-roles">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <h2 className="text-3xl font-bold mb-4">Open Roles</h2>
                        <p className="text-muted-foreground mb-8">Don't see a perfect fit? Send your resume to <a href="mailto:careers@bizzriser.com" className="text-bizz-primary hover:underline">careers@bizzriser.com</a></p>

                        <div className="flex flex-wrap gap-2 justify-center">
                            <Badge variant="secondary" className="px-4 py-2 hover:bg-secondary cursor-pointer">All</Badge>
                            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-secondary">Engineering</Badge>
                            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-secondary">Marketing</Badge>
                            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-secondary">Sales</Badge>
                            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-secondary">Support</Badge>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {openRoles.map((role, i) => (
                            <motion.div
                                key={role.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="bg-gradient-to-br from-accent/10 to-bizz-primary/10 border border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg group cursor-pointer">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 gap-6">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                                                <span className="text-accent bg-accent/10 px-2 py-1 rounded-sm">{role.department}</span>
                                                <div className="flex items-center gap-1"><MapPin className="w-3 h-3" />{role.location}</div>
                                                <div className="flex items-center gap-1"><Clock className="w-3 h-3" />{role.type}</div>
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{role.title}</h3>
                                            <p className="text-muted-foreground text-sm max-w-xl">{role.desc}</p>
                                        </div>
                                        <Button variant="outline" className="rounded-full group-hover:bg-foreground group-hover:text-background transition-all shrink-0">
                                            Apply Now
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
