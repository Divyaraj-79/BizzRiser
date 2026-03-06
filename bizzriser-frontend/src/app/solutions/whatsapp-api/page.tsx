"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Zap, RefreshCw, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhatsAppAPIPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">

            {/* 1. Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-bizz-primary/10 blur-[100px] rounded-full mix-blend-screen" />
                </div>

                <div className="container relative z-10 px-4 mx-auto text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-bizz-lightgrey px-4 py-2 rounded-full text-sm font-medium mb-8 text-bizz-accent border-bizz-accent/30">
                            Official Meta Cloud API
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            Scale Your Messaging with the <span className="text-gradient">WhatsApp API</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Connect your software directly to the world's most popular messaging app. High deliverability, rich media, and absolute reliability.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20know%20more%20about%20WhatsApp%20API">
                                <Button size="lg" className="h-14 px-8 w-full sm:w-auto text-lg rounded-full bg-gradient-brand text-white shadow-[0_0_20px_rgba(45,198,83,0.3)] hover:scale-105 transition-transform">
                                    Get API Access
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Features Grid */}
            <section className="py-20 bg-card/30">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BizzRiser API?</h2>
                        <p className="text-muted-foreground">Built for developers and businesses that demand stability.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: <Shield className="w-5 h-5 md:w-8 md:h-8 text-bizz-primary" />, title: "Ban-Safe Platform", desc: "100% compliant with Meta policies. Don't risk your business line getting blocked." },
                            { icon: <Zap className="w-5 h-5 md:w-8 md:h-8 text-bizz-accent" />, title: "High Throughput", desc: "Send thousands of messages per second with minimal latency." },
                            { icon: <RefreshCw className="w-5 h-5 md:w-8 md:h-8 text-bizz-primary" />, title: "Webhooks Integration", desc: "Real-time read receipts, delivery reports, and inbound message syncing." },
                            { icon: <BarChart3 className="w-5 h-5 md:w-8 md:h-8 text-bizz-accent" />, title: "Detailed Analytics", desc: "Track every API call, message status, and conversion metric." },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card border border-border p-4 md:p-6 rounded-2xl flex flex-col h-full hover:border-bizz-primary/50 transition-colors"
                            >
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-secondary flex items-center justify-center mb-3 md:mb-4 shrink-0">
                                    {feature.icon}
                                </div>
                                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 leading-tight">{feature.title}</h3>
                                <p className="text-muted-foreground text-xs md:text-sm flex-1">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Integration Example */}
            <section className="py-20 border-y border-border">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6">Developer-friendly REST API</h2>
                            <p className="text-muted-foreground mb-6">Integration takes minutes, not weeks. Use our comprehensive documentation and SDKs for Node.js, Python, and PHP to get started immediately.</p>
                            <ul className="space-y-3">
                                {['Send text, media, and interactive templates', 'Manage contacts and opt-ins programmatically', 'Secure Authentication using Bearer Tokens'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-bizz-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-bizz-primary/20 to-bizz-accent/20 blur-2xl rounded-3xl" />
                            <div className="bg-[#1e1e1e] border border-white/10 rounded-xl p-6 text-sm font-mono text-zinc-300 relative shadow-2xl overflow-x-auto">
                                {`POST /v1/messages
Authorization: Bearer YOUR_TOKEN_HERE

{
  "to": "+1234567890",
  "type": "template",
  "template": {
    "name": "shipping_update",
    "language": { "code": "en" },
    "components": [
      {
        "type": "body",
        "parameters": [
          { "type": "text", "text": "12345" }
        ]
      }
    ]
  }
}`}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-24 relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-gradient-brand opacity-90 mix-blend-multiply" />
                <div className="container px-4 relative z-10 mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Ready to start building?</h2>
                    <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">Talk to our technical experts today and get your sandbox credentials.</p>
                    <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo">
                        <Button size="lg" className="bg-white text-black hover:bg-zinc-100 rounded-full px-8 h-14 font-bold">
                            Talk to an Expert
                        </Button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
