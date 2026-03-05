"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Building2, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pricingPlans = [
    {
        name: "Starter",
        description: "Perfect for small businesses getting started with WhatsApp automation.",
        price: { monthly: 49, yearly: 39 },
        icon: <Zap className="w-6 h-6 text-bizz-primary" />,
        features: [
            "1,000 Free Tier Conversations",
            "Basic Chatbot Builder",
            "Shared Inbox for 3 Agents",
            "Standard Analytics",
            "Email Support",
        ],
        notIncluded: [
            "Advanced API Access",
            "Dedicated Account Manager",
            "Custom Integrations",
        ],
    },
    {
        name: "Growth",
        description: "Our most popular plan for scaling businesses that need advanced automation.",
        price: { monthly: 99, yearly: 79 },
        isPopular: true,
        icon: <Rocket className="w-6 h-6 text-bizz-white" />,
        features: [
            "5,000 Free Tier Conversations",
            "Advanced Chatbot Builder",
            "Shared Inbox for 10 Agents",
            "Advanced Analytics & Flow Builder",
            "Priority Support 24/7",
            "Basic API Access",
        ],
        notIncluded: [
            "Dedicated Account Manager",
            "Custom Integrations",
        ],
    },
    {
        name: "Enterprise",
        description: "Custom solutions for large organizations with complex communication needs.",
        price: { monthly: 299, yearly: 249 },
        icon: <Building2 className="w-6 h-6 text-bizz-primary" />,
        features: [
            "Unlimited Conversations",
            "Custom Chatbot Development",
            "Unlimited Agents",
            "Custom Reporting",
            "Dedicated Account Manager",
            "Full API Access & Webhooks",
            "Custom System Integrations",
        ],
        notIncluded: [],
    },
];

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

    return (
        <div className="pt-20 min-h-screen bg-background">
            {/* 1. Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-bizz-primary/5 to-transparent pointer-events-none" />
                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Simple, transparent <span className="text-gradient">pricing</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Choose the perfect plan for your business. No hidden fees. Upgrade or downgrade at any time.
                        </p>

                        <Tabs defaultValue="yearly" className="w-full max-w-xs mx-auto mb-16 relative" onValueChange={(v) => setBillingCycle(v as "monthly" | "yearly")}>
                            {/* Fake 'Save 20%' Badge */}
                            <div className="absolute -top-4 -right-8 bg-bizz-white text-bizz-dark text-xs font-bold px-3 py-1 rounded-full animate-bounce shadow-lg z-20">
                                Save 20%
                            </div>
                            <TabsList className="grid w-full grid-cols-2 p-0.5 bg-card border border-border rounded-full h-12">
                                <TabsTrigger value="monthly" className="rounded-full text-sm font-medium transition-all data-[state=active]:bg-bizz-primary data-[state=active]:text-white">Monthly</TabsTrigger>
                                <TabsTrigger value="yearly" className="rounded-full text-sm font-medium transition-all data-[state=active]:bg-bizz-primary data-[state=active]:text-white">Yearly</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </motion.div>

                    {/* 2. Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={plan.isPopular ? "relative -mt-4 mb-4 md:-mt-8 md:mb-8" : "relative"}
                            >
                                <Card className={`h-full flex flex-col ${plan.isPopular ? 'bg-accent/5 border-accent shadow-[0_0_40px_rgba(37,99,235,0.15)] ring-2 ring-accent' : 'bg-card border-border hover:border-bizz-primary/50 transition-colors'}`}>
                                    {plan.isPopular && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-brand text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                            Most Popular
                                        </div>
                                    )}
                                    <CardHeader className="text-left pt-8">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.isPopular ? 'bg-gradient-brand shadow-lg' : 'bg-secondary'}`}>
                                            {plan.icon}
                                        </div>
                                        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                        <CardDescription className="min-h-[48px]">{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 text-left">
                                        <div className="mb-8 flex items-baseline text-5xl font-extrabold">
                                            ${plan.price[billingCycle]}
                                            <span className="text-xl text-muted-foreground font-medium ml-2">/mo</span>
                                        </div>

                                        <div className="space-y-4">
                                            {plan.features.map(feature => (
                                                <div key={feature} className="flex items-start gap-3">
                                                    <Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? 'text-bizz-primary' : 'text-foreground'}`} />
                                                    <span className={plan.isPopular ? 'text-foreground font-medium' : 'text-muted-foreground'}>{feature}</span>
                                                </div>
                                            ))}
                                            {plan.notIncluded.map(feature => (
                                                <div key={feature} className="flex items-start gap-3 opacity-50">
                                                    <X className="w-5 h-5 shrink-0 text-muted-foreground" />
                                                    <span className="text-muted-foreground line-through">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            className={`w-full h-12 rounded-full text-base font-bold transition-all hover:scale-[1.02] ${plan.isPopular
                                                    ? 'bg-gradient-brand text-white hover:opacity-90 shadow-lg'
                                                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                                                }`}
                                        >
                                            {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why Only BizzRiser (Comparison) */}
            <section className="py-24 bg-card/30">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Businesses Switch to BizzRiser</h2>
                        <p className="text-muted-foreground">See how we stack up against traditional customer support tools.</p>
                    </div>

                    <div className="bg-background rounded-3xl border border-border overflow-hidden shadow-xl">
                        <div className="grid grid-cols-3 border-b border-border bg-card/50">
                            <div className="p-6 font-bold text-lg">Features</div>
                            <div className="p-6 font-bold text-lg text-center text-bizz-primary">BizzRiser</div>
                            <div className="p-6 font-bold text-lg text-center text-muted-foreground">Traditional Tools</div>
                        </div>
                        {[
                            "Official Meta API Access",
                            "Ban-Safe Infrastructure",
                            "Dedicated Human Support",
                            "Advanced Flow Builder",
                            "Multi-Agent Shared Inbox",
                        ].map((feature, i) => (
                            <div key={i} className="grid grid-cols-3 border-b border-border last:border-0 hover:bg-card/50 transition-colors">
                                <div className="p-6 text-foreground font-medium">{feature}</div>
                                <div className="p-6 flex justify-center"><Check className="w-6 h-6 text-bizz-primary" /></div>
                                <div className="p-6 flex justify-center"><X className="w-6 h-6 text-muted-foreground/50" /></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Premium Clients / Custom Badges */}
            <section className="py-24 border-t border-border bg-background">
                <div className="container px-4 mx-auto text-center">
                    <p className="text-sm font-bold text-muted-foreground mb-12 tracking-widest uppercase">
                        POWERING AUTOMATION FOR PREMIUM BRANDS
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-60">
                        {/* Replace with actual image tags when logos are available */}
                        <span className="text-2xl font-bold font-mono">BrandA</span>
                        <span className="text-2xl font-bold font-mono">BrandB</span>
                        <span className="text-2xl font-bold font-mono">BrandC</span>
                        <span className="text-2xl font-bold font-mono">BrandD</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
