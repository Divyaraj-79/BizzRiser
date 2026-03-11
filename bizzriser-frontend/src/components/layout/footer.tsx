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
    <footer className="bg-card border-t border-border pt-20 pb-32 md:pb-20 relative overflow-hidden shrink-0">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-bizz-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-20">

          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-6 mb-8 lg:mb-0">
              <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
                <img
                  src={isDark ? "/logolight.png" : "/logo.png"}
                  alt="BizzRiser Logo"
                  className="h-9 w-auto"
                />
              </Link>
              <p className="text-foreground/70 text-sm leading-relaxed max-w-sm">
                Practical WhatsApp Business Automation with Real Support. Connect with your customers, automate responses, and scale your business effortlessly.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-sm font-bold text-foreground">Subscribe to our newsletter</h4>
              <form onSubmit={handleSubscribe} className="relative flex max-w-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 h-10 bg-transparent border border-border rounded-l-lg px-4 text-sm focus:outline-none focus:ring-1 focus:ring-bizz-primary/50 transition-all font-sans"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-10 px-6 bg-bizz-primary hover:bg-bizz-primary/90 text-white rounded-r-lg rounded-l-none font-medium shadow-none text-sm transition-all"
                >
                  {isSubmitting ? "..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>

          {/* Column 2 & 3: Solutions & Company (Stacked side-by-side on mobile natively via grid-cols-2) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pl-8">
            {/* Solutions */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-6">Solutions</h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-bizz-primary hover:translate-x-1 inline-block transition-all text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-bizz-primary hover:translate-x-1 inline-block transition-all text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="lg:col-span-3 lg:pl-8 space-y-6">
            <h4 className="text-sm font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-foreground/70 group">
                <MapPin className="w-5 h-5 shrink-0 text-bizz-primary/70 group-hover:text-bizz-primary transition-colors mt-0.5" />
                <span className="leading-relaxed">
                  720, RK Empire, Nr. Mavdi Chowkdi,<br />
                  150 Ft. Ring Road, Rajkot - 360004
                </span>
              </li>
              <li className="flex gap-3 text-sm text-foreground/70 group">
                <Phone className="w-5 h-5 shrink-0 text-bizz-primary/70 group-hover:text-bizz-primary transition-colors mt-0.5" />
                <span className="leading-relaxed">+91 98799 66997</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground/70 group">
                <Mail className="w-5 h-5 shrink-0 text-bizz-primary/70 group-hover:text-bizz-primary transition-colors mt-0.5" />
                <span className="leading-relaxed">hello@bizzriser.com</span>
              </li>
            </ul>

            {/* Social Links Moved Here */}
            <div className="flex items-center gap-3 pt-4">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://facebook.com/bizzriser.wp" },
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/bizzriser" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/company/bizzriser" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-bizz-primary hover:text-white hover:border-bizz-primary shadow-sm transition-all duration-300 bg-background"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
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
        </div>
      </div>
    </footer>
  );
}  