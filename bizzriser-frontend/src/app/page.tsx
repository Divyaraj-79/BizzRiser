"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Bot, CheckCircle2, MessageSquare, Shield, TrendingUp, Users, Play, Star,
  ChevronLeft, ChevronRight, Plane, Video, Phone, MoreVertical, Search, Mic, Camera, Paperclip, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Counter } from "@/components/ui/counter";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

// Dummy data for sections
const partners = [
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
];

// Dynamic API states for Chatbots and Industries will replace these placeholders.

function SwipeTestimonials({ testimonials }: { testimonials: any[] }) {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [])

  return (

    <div className="flex flex-col items-center">

      <div className="relative w-full max-w-3xl h-[340px]">

        <AnimatePresence>

          {[0, 1, 2].map((offset) => {

            const i = (index + offset) % testimonials.length
            const t = testimonials[i]

            const isFront = offset === 0

            return (

              <motion.div
                key={i}

                drag={isFront ? "y" : false}

                dragConstraints={{ top: -120, bottom: 0 }}

                onDragEnd={(e, info) => {
                  if (info.offset.y < -80) next()
                }}

                initial={{ y: 50, opacity: 0 }}

                animate={{
                  y: offset * 16,
                  scale: 1 - (offset * 0.05),
                  opacity: 1 - (offset * 0.2),
                  zIndex: 10 - offset
                }}

                exit={{ opacity: 0, y: -120 }}

                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25
                }}

                className="absolute w-full bg-card border border-border rounded-2xl shadow-xl p-6 md:p-8"
              >

                {/* Card content */}

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                    {t.author.charAt(0)}
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                      "{t.content}"
                    </p>

                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {t.author}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {t.role}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            )

          })}

        </AnimatePresence>

      </div>

      {/* progress dots */}

      <div className="flex gap-2 mt-8">

        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-bizz-primary" : "w-2 bg-muted"
              }`}
          />
        ))}

      </div>

    </div>

  )
}

function HorizontalTestimonials({ testimonials }: { testimonials: any[] }) {

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Increased slightly for better reading experience on mobile
    return () => clearInterval(interval);
  }, [index, testimonials.length]);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -40) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else if (info.offset.x > 40) {
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getOffset = (i: number) => {
    const diff = i - index;
    const half = Math.floor(testimonials.length / 2);
    if (diff > half) return diff - testimonials.length;
    if (diff < -half) return diff + testimonials.length;
    return diff;
  };

  return (
    <div className="relative w-full max-w-[1240px] mx-auto h-[350px] flex items-center justify-center overflow-hidden">

      <Button
        variant="outline"
        size="icon"
        className="absolute left-1 sm:left-4 md:left-8 z-20 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm border-border w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex"
        onClick={handlePrev}
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-1 sm:right-4 md:right-8 z-20 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm border-border w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex"
        onClick={handleNext}
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
      </Button>

      <AnimatePresence>
        {testimonials.map((t, i) => {
          const offset = getOffset(i);
          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 1;

          if (Math.abs(offset) > 2) return null;

          return (
            <motion.div
              key={i}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              animate={{
                opacity: isCenter ? 1 : isVisible ? 0.4 : 0,
                scale: isCenter ? (isMobile ? 1 : 1.05) : 0.85,
                x: isMobile ? `${offset * 86}%` : `${offset * 105}%`,
                y: isCenter ? -15 : 0,
                zIndex: isCenter ? 10 : isVisible ? 5 : 0,
                boxShadow: isCenter ? "0 10px 40px rgba(59, 130, 246, 0.15)" : "none",
              }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-[75vw] sm:w-[65vw] md:w-[380px] bg-background border border-border rounded-xl p-6 cursor-grab active:cursor-grabbing hover:cursor-grab"
              style={{
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating || 5 }).map((_, star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground italic mb-6 text-sm md:text-base">"{t.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold shadow-lg shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm truncate">{t.author}</h4>
                  <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [brandName, setBrandName] = useState("Travel X");
  const [activeDemo, setActiveDemo] = useState({ industry: "", brand: "Travel X", key: 0 });
  const [stats, setStats] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [apiIndustries, setApiIndustries] = useState<any[]>([]);
  const [apiChatbots, setApiChatbots] = useState<Record<string, { sender: 'bot' | 'user', text: string }[]>>({});

  useEffect(() => {
    fetchApi("/testimonials/published")
      .then((data: any[]) => {
        if (data) setTestimonials(data);
      })
      .catch((err) => console.error("Testimonials fetch failed:", err));

    fetchApi("/home-stats")
      .then((data: any[]) => {
        if (data) setStats(data.map((s: any) => ({ label: s.label, value: s.value })));
      })
      .catch(() => { });

    fetchApi("/solution-industries")
      .then((data: any[]) => {
        if (data && data.length > 0) {
          setApiIndustries(data);
          setSelectedIndustry(data[0].id);
          setActiveDemo({ industry: data[0].id, brand: "Travel X", key: 0 });
        }
      })
      .catch(() => { });

    fetchApi("/industry-chatbots")
      .then((data: any[]) => {
        if (data && data.length > 0) {
          const map: Record<string, any[]> = {};
          data.forEach((bot: any) => {
            map[bot.industry] = typeof bot.flowSteps === "string" ? JSON.parse(bot.flowSteps) : bot.flowSteps;
          });
          setApiChatbots(map);
        }
      })
      .catch(() => { });
  }, []);

  function handleExampleInteractions() {
    setActiveDemo({ industry: selectedIndustry, brand: brandName || "Your Brand", key: activeDemo.key + 1 });
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bizz-primary/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-bizz-accent/10 blur-[100px] rounded-full mix-blend-screen" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-bizz-lightgrey px-4 py-2 rounded-full text-sm font-medium mb-8 text-bizz-accent border-bizz-accent/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bizz-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-bizz-accent"></span>
              </span>
              Meta Business Partner
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Automate. Convert.{" "}
              <span className="text-gradient">Scale.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto dark:text-gray-300">
              Practical WhatsApp Business Automation with Real Support. Stop dropping leads and start closing more deals automatically.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20Free%20demo" target="_blank">
                <Button size="lg" className="h-14 px-8 w-full sm:w-auto text-lg rounded-full bg-gradient-brand hover:opacity-90 shadow-[0_0_20px_rgba(45,198,83,0.4)] hover:shadow-[0_0_30px_rgba(45,198,83,0.6)] text-white transition-all hover:-translate-y-1">
                  Schedule a Free Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Floating UI Elements Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="rounded-2xl border border-border overflow-hidden shadow-2xl relative">
              {/* Light Mode Laptop */}
              <Image
                src="/laptopatday.jpeg"
                alt="BizzRiser Dashboard on Laptop (Day)"
                width={1200}
                height={600}
                className="w-full h-auto object-cover dark:hidden"
                priority
              />
              {/* Dark Mode Laptop */}
              <Image
                src="/laptopatnight.jpeg"
                alt="BizzRiser Dashboard on Laptop (Night)"
                width={1200}
                height={600}
                className="w-full h-auto object-cover hidden dark:block"
                priority
              />
            </div>

            {/* Floating Chat Bubble */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 md:-right-12 top-1/4 glass bg-background p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-border z-20"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-foreground">Payment Received</span>
                <span className="text-xs text-muted-foreground">Automated message sent</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Partner Badges */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container px-4 mx-auto overflow-hidden">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Replace with actual image tags when logos are available */}
            {partners.map(p => (
              <span key={p.name} className="text-2xl font-bold font-mono">{p.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Results Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container px-4 mx-auto">

          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 max-w-2xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Numbers That Speak For Themselves
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base">
                We deliver measurable impact for businesses that demand high conversion rates.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-lg sm:max-w-2xl md:max-w-5xl mx-auto">

            {stats.map((stat: any, i: number) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >

                <Card className="card-stat text-center h-full hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all group">

                  <CardContent className="flex flex-col items-center justify-center p-5 sm:p-6 md:p-8">

                    {/* Animated Counter */}
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap">
                      <Counter
                        value={stat.value}
                        label=""
                        duration={2500}
                      />
                    </div>

                    {/* Label */}
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-snug text-center">
                      {stat.label}
                    </p>

                  </CardContent>

                </Card>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* 4. Industry Automation Preview */}
      <section className="py-24 bg-card/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Automation Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Tailored chatbot flows and templates designed for your specific vertical.</p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">Select Your Industry</label>
                <select
                  id="industry"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                >
                  {apiIndustries.map(ind => (
                    <option key={ind.id} value={ind.id}>{ind.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-foreground mb-2">Your Brand Name</label>
                <input
                  id="brand"
                  type="text"
                  placeholder="Enter your brand name"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>
            </div>
            <Button className="w-full py-3 bg-bizz-primary text-white rounded-lg hover:opacity-90" onClick={handleExampleInteractions}>See Example Interactions</Button>
          </div>

          <div className="mt-12">
            <div className="bg-[#efeae2] dark:bg-[#0b141a] rounded-[2.5rem] border-[10px] border-zinc-900 dark:border-zinc-800 shadow-2xl relative w-full max-w-[340px] mx-auto overflow-hidden h-[700px] flex flex-col">

              {/* Notched / Top header of phone */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 dark:bg-zinc-800 rounded-b-3xl z-30" />

              {/* WhatsApp Header */}
              <div className="bg-[#008069] dark:bg-[#202c33] text-white p-3 pt-9 flex items-center justify-between relative z-20 shadow-md shrink-0">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <div className="relative">
                    <div className="w-9 h-9 bg-[#d1d7db] dark:bg-[#667781] rounded-full flex items-center justify-center overflow-hidden">
                      <div className="text-sm font-bold text-white uppercase">{activeDemo.brand.substring(0, 2)}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold leading-tight">{activeDemo.brand}</h3>
                    <p className="text-[11px] text-white/90 dark:text-[#8696a0]">online</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/90 mr-1">
                  <Video className="w-5 h-5 opacity-90" />
                  <Phone className="w-4.5 h-4.5 opacity-90" />
                  <MoreVertical className="w-5 h-5 opacity-90" />
                </div>
              </div>

              {/* Scrollable Chat Area */}
              <div className="flex-1 overflow-y-auto w-full relative z-10 bg-[#efeae2] dark:bg-[#0b141a]" id="chat-box" key={activeDemo.key}>
                {/* Wallpaper Overlay - Fainter in dark mode */}
                <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")`, backgroundSize: '400px' }} />

                <div className="relative z-10 p-3 space-y-3">
                  <div className="text-center mb-4 mt-2">
                    <span className="bg-[#d1f4ff] dark:bg-[#182229] px-2.5 py-1 rounded-[7px] text-[11px] text-[#54656f] dark:text-[#8696a0] font-medium shadow-sm uppercase tracking-wide">Today</span>
                  </div>

                  {apiChatbots[activeDemo.industry]?.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 1.5 + 0.5, duration: 0.4, ease: "easeOut" }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} w-full mb-1`}
                    >
                      <div className="relative group max-w-[85%] filter drop-shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]">
                        <div
                          className={`relative px-2.5 py-1.5 text-[14.2px] min-w-[100px] flex flex-col ${msg.sender === 'user'
                            ? 'bg-[#d9fdd3] dark:bg-[#005c4b] text-[#111b21] dark:text-[#e9edef]'
                            : 'bg-white dark:bg-[#202c33] text-[#111b21] dark:text-[#e9edef]'
                            }`}
                          style={{
                            borderRadius: '8px',
                            borderTopLeftRadius: msg.sender === 'bot' ? 0 : '8px',
                            borderTopRightRadius: msg.sender === 'user' ? 0 : '8px'
                          }}
                        >
                          {/* Tail for bot */}
                          {msg.sender === 'bot' && (
                            <div className="absolute top-0 -left-[8px] w-[10px] h-3 text-white dark:text-[#202c33]">
                              <svg viewBox="0 0 8 13" className="w-full h-full" fill="currentColor">
                                <path d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z" />
                              </svg>
                            </div>
                          )}

                          {/* Tail for user */}
                          {msg.sender === 'user' && (
                            <div className="absolute top-0 -right-[8px] w-[10px] h-3 text-[#d9fdd3] dark:text-[#005c4b] scale-x-[-1]">
                              <svg viewBox="0 0 8 13" className="w-full h-full" fill="currentColor">
                                <path d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z" />
                              </svg>
                            </div>
                          )}

                          <div className="leading-[1.4] break-words pr-12 pb-2 mt-0.5">
                            {(msg?.text || "").replace('{brand}', activeDemo?.brand || "BizzRiser")}
                          </div>

                          <div className="absolute bottom-1 right-1.5 flex items-center gap-1">
                            <span className="text-[10px] text-[#667781] dark:text-[#8696a0] font-normal leading-none mb-0.5">
                              11:34 pm
                            </span>
                            {msg?.sender === 'user' && (
                              <div className="flex -space-x-1.5 leading-none">
                                <svg className="w-[15.5px] h-[10.5px] text-[#53bdeb]" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.4582 1.25L4.85408 7.85417L2.04158 5.04167L1.10408 5.97917L4.85408 9.72917L12.3957 2.1875L11.4582 1.25Z" fill="currentColor" />
                                  <path d="M15.0423 1.25L8.43815 7.85417L7.00065 6.41667L6.06315 7.35417L8.43815 9.72917L15.9798 2.1875L15.0423 1.25Z" fill="currentColor" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Chat Input Mockup */}
              <div className="bg-[#f0f2f5] dark:bg-[#0b141a] p-2 flex items-center gap-2 z-20 shrink-0">
                <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-[24px] h-[44px] px-3.5 flex items-center justify-between text-[#8696a0] shadow-sm">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5.5 h-5.5 opacity-50" />
                    <span className="text-[15.5px] opacity-70">Type a message</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Paperclip className="w-5 h-5 opacity-50 rotate-[225deg]" />
                    <Camera className="w-5.5 h-5.5 opacity-50" />
                  </div>
                </div>
                <div className="w-[45px] h-[45px] rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Mic className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-continuous-scroll {
          position: relative;
          display: flex;
          flex-direction: column;
          animation: continuous-scroll 15s linear infinite;
        }
        .animate-continuous-scroll[data-scroll-direction="up"] {
          animation-name: continuous-scroll-up;
        }
        .animate-continuous-scroll[data-scroll-direction="down"] {
          animation-name: continuous-scroll-down;
        }
        @keyframes continuous-scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes continuous-scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>

      {/* 5. Why BizzRiser (USP) */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Choose BizzRiser</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We don't just give you a tool; we give you a revenue-generating partner.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Practical Implementation",
                desc: "Forget abstract software. We provide plug-and-play templates that actually convert in the real world.",
                icon: <Bot className="w-8 h-8 text-bizz-primary" />
              },
              {
                title: "Dedicated Human Support",
                desc: "While we automate your business, our own support is strictly human. Get real answers from real experts.",
                icon: <Users className="w-8 h-8 text-bizz-accent" />
              },
              {
                title: "Ban-Safe Infrastructure",
                desc: "Built strictly on official Meta APIs with built-in safeguards to ensure your number never gets blocked.",
                icon: <Shield className="w-8 h-8 text-bizz-primary" />
              }
            ].map((usp, i) => (
              <motion.div
                key={usp.title}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-bizz-primary/10 border border-accent/20 hover:shadow-2xl hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 mb-6 flex items-center justify-center">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{usp.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Mockup */}
      <section className="py-24 bg-card/50 overflow-hidden relative">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by 10,000+ Growth Teams</h2>
          </div>

          <HorizontalTestimonials testimonials={testimonials} />
        </div>
      </section>

      {/* 7. Review Section */}
      {/* 7. Review Section */}
      {/* <section className="relative py-24 bg-background overflow-hidden">

        <div className="container mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Our Clients Say
          </h2>

          <p className="text-center text-sm text-muted-foreground mb-10">
            Swipe Up ↑
          </p>

          <SwipeTestimonials testimonials={testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS.map(t => ({ author: t.name, role: t.role, content: t.text, rating: 5 }))} />

        </div>

      </section> */}

      {/* 8. Final Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-bizz-dark/10" />
        <div className="absolute inset-0 bg-gradient-brand opacity-90 mix-blend-multiply" />

        <div className="container px-4 mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to scale your business?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Join thousands of businesses that use BizzRiser to automate support, boost sales, and delight customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://wa.me/919879966997?text=Hii,%20I%20want%20to%20schedule%20a%20demo" target="_blank">
              <Button size="lg" className="h-14 px-8 bg-white text-bizz-dark hover:bg-zinc-100 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all hover:scale-105">
                Schedule a Free Demo
              </Button>
            </Link>
            {/* <p className="text-white/60 text-sm mt-4 sm:mt-0 sm:absolute sm:-bottom-8">No credit card required • 14-day free trial</p> */}
          </div>
        </div>
      </section>
    </div>
  );
}
