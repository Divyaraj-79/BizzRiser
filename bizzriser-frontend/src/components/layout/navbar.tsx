"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={isDark ? "/logolight.png" : "/logo.png"}
            alt="BizzRiser Logo"
            className="h-8 w-auto"
          />
        </button>

        {/* Desktop Navigation (UNCHANGED) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-bizz-primary ${
                pathname === link.href
                  ? "text-bizz-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions (UNCHANGED) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-bizz-primary transition-colors"
          >
            Contact
          </Link>

          <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo">
            <Button className="bg-gradient-brand hover:opacity-90 text-white shadow-[0_0_15px_rgba(45,198,83,0.3)] hover:shadow-[0_0_25px_rgba(45,198,83,0.5)] transition-all rounded-full px-6">
              Book Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85%] bg-background/95 backdrop-blur-xl border-l border-white/10"
            >
              <SheetTitle className="sr-only">
                Navigation Menu
              </SheetTitle>

              <div className="flex flex-col h-full pt-10 px-6">
                {/* Nav Links */}
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        pathname === link.href
                          ? "text-bizz-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border my-8" />

                {/* Actions */}
                <div className="flex flex-col gap-4 mt-auto pb-6">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-bizz-primary"
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo"
                    onClick={() => setOpen(false)}
                  >
                    <Button className="w-full bg-gradient-brand text-white rounded-full h-12 text-base">
                      Book Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}