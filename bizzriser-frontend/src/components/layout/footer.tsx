"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
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
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  const [isDark, setIsDark] = useState(false);

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
    <footer className="bg-card border-t border-border mt-auto pt-16 pb-8 relative overflow-hidden">

      {/* Background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-bizz-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">

        {/* ================= DESKTOP FOOTER ================= */}

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <img
                src={isDark ? "/logolight.png" : "/logo.png"}
                alt="BizzRiser"
                className="w-36 h-8"
              />
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Practical WhatsApp Business Automation with Real Support.
              Connect with your customers, automate responses, and scale
              your business effortlessly.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">
                Subscribe to our newsletter
              </h4>

              <form className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-input bg-background/50 px-3 py-2 text-sm"
                />

                <Button className="bg-gradient-brand text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>

            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-bizz-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-bizz-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>

            <ul className="space-y-4 text-sm text-muted-foreground">

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bizz-accent shrink-0" />
                <span>
                  720, RK Empire, Nr. Mavdi Chowkdi,
                  150 Ft Ring Road, Rajkot - 360004
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-bizz-accent" />
                +91 98799 66997
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-bizz-accent" />
                hello@bizzriser.com
              </li>

            </ul>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">

              <Link href="#"><Facebook className="w-4 h-4"/></Link>
              <Link href="#"><Twitter className="w-4 h-4"/></Link>
              <Link href="#"><Instagram className="w-4 h-4"/></Link>
              <Link href="#"><Linkedin className="w-4 h-4"/></Link>

            </div>
          </div>
        </div>


        {/* ================= MOBILE FOOTER ================= */}

        <div className="md:hidden text-center space-y-8 mb-10">

          {/* Logo */}
          <img
            src={isDark ? "/logolight.png" : "/logo.png"}
            className="w-36 h-8 mx-auto"
          />

          <p className="text-muted-foreground text-sm">
            Automate customer conversations on WhatsApp with practical
            tools and real support.
          </p>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-3">
              Subscribe to our newsletter
            </h4>

            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border border-input px-3 py-2 text-sm"
              />

              <Button className="bg-gradient-brand text-white">
                Subscribe
              </Button>
            </form>
          </div>

          {/* 3 Column Links */}
          <div className="grid grid-cols-3 gap-6">

            <div>
              <h3 className="font-semibold text-sm mb-3">Solutions</h3>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-3">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-3">Contact</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>+91 98799 66997</li>
                <li>hello@bizzriser.com</li>
              </ul>
            </div>

          </div>

          {/* Social */}
          <div className="flex justify-center gap-5">

            <Link href="#"><Facebook size={18}/></Link>
            <Link href="#"><Twitter size={18}/></Link>
            <Link href="#"><Instagram size={18}/></Link>
            <Link href="#"><Linkedin size={18}/></Link>

          </div>

        </div>


        {/* ================= BOTTOM BAR ================= */}

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BizzRiser. All rights reserved.
          </p>

          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}