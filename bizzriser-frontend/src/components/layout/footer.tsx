"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
    solutions: [
        { name: "WhatsApp API", href: "/solutions/whatsapp-api" },
        { name: "Lead Generation", href: "/solutions/lead-generation" },
        { name: "Customer Support", href: "/solutions/customer-support" },
        { name: "Broadcast Marketing", href: "/solutions/broadcast-marketing" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Contact", href: "/contact" },
    ],
    resources: [
        { name: "Blog", href: "/blogs" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Help Center", href: "/help" },
        { name: "API Documentation", href: "/docs" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
};

export function Footer() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial theme
        setIsDark(document.documentElement.classList.contains("dark"));

        // Listen for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsDark(document.documentElement.classList.contains("dark"));
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <footer className="bg-card border-t border-border mt-auto pt-16 pb-8 relative overflow-hidden">
            {/* Decorative gradient blur background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-bizz-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="w-50 h-8 rounded-lg flex items-center justify-left font-bold text-xl">
                                <img src={isDark ? "/logolight.png" : "/logo.png"} alt="BizzRiser Logo" className="w-35 h-8" />
                            </div>
                            {/* <span className="text-2xl font-bold tracking-tight bg-clip-text">
                                BizzRiser
                            </span> */}
                        </Link>

                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            Practical WhatsApp Business Automation with Real Support. Connect with your customers, automate responses, and scale your business effortlessly.
                        </p>

                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-foreground">Subscribe to our newsletter</h4>
                            <form className="flex gap-2 max-w-sm">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    required
                                />
                                <Button type="submit" className="bg-gradient-brand text-white hover:opacity-90">
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
                        <ul className="space-y-3">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-bizz-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-bizz-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-5 h-5 shrink-0 text-bizz-accent" />
                                <span>720, RK Empire, Nr. Mavdi Chowkdi, 150 Ft. Ring Road, Rajkot - 360004</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 shrink-0 text-bizz-accent" />
                                <span>+91 98799 66997</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 shrink-0 text-bizz-accent" />
                                <span>hello@bizzriser.com</span>
                            </li>
                        </ul>

                        <div className="flex items-center gap-4 mt-6">
                            <Link href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-bizz-primary hover:text-white transition-all">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-bizz-primary hover:text-white transition-all">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-bizz-primary hover:text-white transition-all">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-bizz-primary hover:text-white transition-all">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} BizzRiser. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
