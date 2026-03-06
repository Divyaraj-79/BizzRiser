import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BizzRiser | Practical WhatsApp Business Automation",
  description: "Automate, Convert, and Scale with BizzRiser WhatsApp Business API. The modern SaaS platform for streamlined customer support and sales automation.",
  keywords: ["WhatsApp Business API", "SaaS", "Automation", "Marketing", "Customer Support", "BizzRiser"],
  openGraph: {
    title: "BizzRiser | Practical WhatsApp Business Automation",
    description: "Automate, Convert, and Scale with BizzRiser WhatsApp Business API.",
    url: "https://bizzriser.com",
    siteName: "BizzRiser",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BizzRiser | Practical WhatsApp Business Automation",
    description: "Automate, Convert, and Scale with BizzRiser WhatsApp Business API.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans selection:bg-bizz-primary/30 selection:text-bizz-primary`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <ThemeToggle />
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
