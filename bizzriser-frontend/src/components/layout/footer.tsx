"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchApi } from "@/lib/api";

const footerLinks = {
  solutions: [
    { name: "Solutions", href: "/solutions" },
    { name: "WhatsApp API", href: "/solutions/whatsapp-api" },
    { name: "Lead Generation", href: "/solutions/lead-generation" },
    { name: "Customer Support", href: "/solutions/customer-support" },
    { name: "Broadcast Marketing", href: "/solutions/broadcast-marketing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (pathname?.startsWith("/admin")) return null;

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await fetchApi("/newsletters", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      const { toast } = await import("sonner");
      toast.success("Thanks for subscribing! Check your email soon.");
      setEmail("");
    } catch (err: any) {
      const { toast } = await import("sonner");
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
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
    <footer className="bg-card border-t border-border pt-20 pb-20 relative overflow-hidden shrink-0">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-bizz-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
              <img
                src={isDark ? "/logolight.png" : "/logo.png"}
                alt="BizzRiser Logo"
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-foreground/70 text-base leading-relaxed max-w-sm">
              Practical WhatsApp Business Automation with Real Support.
              Built strictly on official Meta APIs to ensure your scale is safe, reliable, and frictionless.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook className="w-4.5 h-4.5" />, href: "https://facebook.com/bizzriser.wp" },
                { icon: <Twitter className="w-4.5 h-4.5" />, href: "#" },
                { icon: <Instagram className="w-4.5 h-4.5" />, href: "https://instagram.com/bizzriser" },
                { icon: <Linkedin className="w-4.5 h-4.5" />, href: "https://linkedin.com/company/bizzriser" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-bizz-primary hover:text-white hover:border-bizz-primary hover:-translate-y-1 shadow-sm transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-bizz-primary hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-bizz-primary hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Stay in the Loop</h4>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Join 5,000+ businesses receiving our weekly insights on WhatsApp automation and growth strategies.
            </p>

            <form onSubmit={handleSubscribe} className="relative group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full h-14 bg-background border border-border rounded-full pl-6 pr-32 text-sm focus:ring-2 focus:ring-bizz-primary/20 focus:border-bizz-primary transition-all shadow-sm"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-1.5 top-1.5 h-11 px-6 bg-gradient-brand text-white rounded-full font-bold shadow-lg shadow-bizz-primary/10 hover:shadow-bizz-primary/30 transition-all active:scale-95"
              >
                {isSubmitting ? "..." : "Join Now"}
              </Button>
            </form>
            <p className="text-[11px] text-foreground/60 px-6">
              *By subscribing, you agree to our privacy terms.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm text-foreground/50">
              &copy; {new Date().getFullYear()} BizzRiser. Crafted by Selten Infotech.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-foreground/60 hover:text-bizz-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary/30 border border-border/50">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bizz-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-bizz-primary"></span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/60">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}  