"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2, MessageSquare, Shield, TrendingUp, Users, Play, Star, ChevronLeft, ChevronRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Counter } from "@/components/ui/counter";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Dummy data for sections
const partners = [
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
];

const results = [
  { label: "Clients Served", value: "10,000+" },
  { label: "Messages Delivered", value: "500M+" },
  { label: "Campaigns Automated", value: "25M+" },
  { label: "Revenue Generated", value: "$2B+" },
];

const industries = [
  { id: "travel", label: "Travel & Hospitality", icon: <Plane className="w-5 h-5" /> },
  { id: "ecommerce", label: "E-Commerce", icon: <TrendingUp className="w-5 h-5" /> },
  { id: "realestate", label: "Real Estate", icon: <Users className="w-5 h-5" /> },
  { id: "education", label: "Education", icon: <Bot className="w-5 h-5" /> },
  { id: "healthcare", label: "Healthcare", icon: <Shield className="w-5 h-5" /> },
];

const DEMO_CONVERSATIONS: Record<string, { sender: 'bot' | 'user', text: string }[]> = {
  travel: [
    { sender: 'bot', text: 'Hi! Planning your next getaway with {brand}?' },
    { sender: 'user', text: 'Yes, looking for a beach resort.' },
    { sender: 'bot', text: 'Great choice! Checkout our top 3 Maldives packages \uD83C\uDFDD️' },
    { sender: 'user', text: 'Can I see the itinerary for the first one?' },
    { sender: 'bot', text: 'Sure! Here is the detailed 5-day itinerary...' },
  ],
  ecommerce: [
    { sender: 'bot', text: 'Hey there! Your cart at {brand} is waiting for you.' },
    { sender: 'user', text: 'I forgot to apply the discount code.' },
    { sender: 'bot', text: 'No worries! Use code SAVE20 for 20% off. Checkout now?' },
    { sender: 'user', text: 'Yes, applied it. Processing payment now.' },
    { sender: 'bot', text: 'Awesome! We\'ve received your order. Tracking link sent! \uD83D\uDE80' },
  ],
  realestate: [
    { sender: 'bot', text: 'Welcome to {brand} Real Estate! Looking to buy or rent?' },
    { sender: 'user', text: 'Buy a 2 BHK apartment.' },
    { sender: 'bot', text: 'Got it. Here are 3 premium 2 BHKs in your preferred location.' },
    { sender: 'user', text: 'The second one looks good. Can I schedule a visit?' },
    { sender: 'bot', text: 'Absolutely! I have scheduled a visit for tomorrow at 10 AM. See you!' },
  ],
  education: [
    { sender: 'bot', text: 'Hello from {brand}! Interested in our new courses?' },
    { sender: 'user', text: 'Yes, details about the Data Science bootcamp.' },
    { sender: 'bot', text: 'It\'s a 12-week intensive course. Next batch starts next week.' },
    { sender: 'user', text: 'What is the fee structure?' },
    { sender: 'bot', text: 'The fee is $999. You can pay in 3 installments too. Register now?' },
  ],
  healthcare: [
    { sender: 'bot', text: 'Hi! How can {brand} assist you with your health today?' },
    { sender: 'user', text: 'I need to book a consultation with Dr. Smith.' },
    { sender: 'bot', text: 'Dr. Smith is available tomorrow at 4 PM. Should I book?' },
    { sender: 'user', text: 'Yes, please.' },
    { sender: 'bot', text: 'Consultation booked successfully. Your token number is 42.' },
  ],
};

function SwipeTestimonials() {

  const testimonials = [
    {
      text: "BizzRiser completely transformed how we handle customer conversations. Our response time dropped from hours to seconds.",
      name: "Emily Clark",
      role: "Founder, StartUpHub",
      avatar: "/avatars/1.jpg"
    },
    {
      text: "Automation flows helped us recover abandoned leads we never knew existed.",
      name: "Sarah Jenkins",
      role: "CMO, TechGrowth",
      avatar: "/avatars/2.jpg"
    },
    {
      text: "Customer engagement increased dramatically after integrating BizzRiser.",
      name: "John Doe",
      role: "CEO, InnovateX",
      avatar: "/avatars/3.jpg"
    },
    {
      text: "The support team is incredibly responsive and understands real business needs.",
      name: "Michael Lee",
      role: "Head of Growth, SaaSly",
      avatar: "/avatars/4.jpg"
    }
  ]

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

                  <img
                    src={t.avatar}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                  />

                  <div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                      "{t.text}"
                    </p>

                    <div>

                      <p className="font-semibold text-foreground text-sm">
                        {t.name}
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

function HorizontalTestimonials() {
  const testimonials = [
    {
      text: "BizzRiser completely transformed how we handle customer support. We recovered 30% more abandoned carts within the first week.",
      name: "Sarah Jenkins",
      role: "CMO, TechGrowth",
    },
    {
      text: "BizzRiser completely transformed how we handle customer support. We recovered 30% more abandoned carts within the first week.",
      name: "Sarah Jenkins",
      role: "CMO, TechGrowth",
    },
    {
      text: "BizzRiser completely transformed how we handle customer support. We recovered 30% more abandoned carts within the first week.",
      name: "Sarah Jenkins",
      role: "CMO, TechGrowth",
    },
    {
      text: "BizzRiser completely transformed how we handle customer support. We recovered 30% more abandoned carts within the first week.",
      name: "Sarah Jenkins",
      role: "CMO, TechGrowth",
    },
    {
      text: "BizzRiser completely transformed how we handle customer support. We recovered 30% more abandoned carts within the first week.",
      name: "Sarah Jenkins",
      role: "CMO, TechGrowth",
    }
  ];

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
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-foreground italic mb-6 text-sm md:text-base">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm truncate">{t.name}</h4>
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
  const [selectedIndustry, setSelectedIndustry] = useState("travel");
  const [brandName, setBrandName] = useState("Travel X");
  const [activeDemo, setActiveDemo] = useState({ industry: "travel", brand: "Travel X", key: 0 });

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
            <div className="aspect-[21/9] rounded-2xl glass-dark border border-white/10 overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <div className="w-full h-full bg-black/20 flex items-center justify-center text-muted-foreground">
                [Dashboard Interface Mockup]
              </div>
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

            {results.map((stat, i) => (
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
                  {industries.map(ind => (
                    <option key={ind.id} value={ind.id}>{ind.label}</option>
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
            <div className="bg-[#efeae2] dark:bg-[#0b141a] rounded-[2rem] border-[8px] border-zinc-900 dark:border-zinc-800 shadow-2xl relative w-full sm:w-[380px] mx-auto overflow-hidden h-[600px] flex flex-col">

              {/* Notched / Top header of phone */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 dark:bg-zinc-800 rounded-b-3xl z-30" />

              {/* WhatsApp Header */}
              <div className="bg-[#008069] dark:bg-[#202c33] text-white p-4 pt-8 flex items-center gap-3 relative z-20 shadow-sm">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="text-sm font-bold">{activeDemo.brand.substring(0, 2).toUpperCase()}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-tight">{activeDemo.brand}</h3>
                    <p className="text-xs text-white/80">Active now</p>
                  </div>
                </div>
              </div>

              {/* Scrollable Chat Area */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto w-full relative z-10" id="chat-box" key={activeDemo.key}>
                <div className="text-center my-4">
                  <span className="bg-white/90 dark:bg-[#182229] px-3 py-1 rounded-lg text-xs text-muted-foreground shadow-sm inline-block">Today</span>
                </div>

                {DEMO_CONVERSATIONS[activeDemo.industry || 'travel']?.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 1.5 + 0.5, duration: 0.3 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2 w-full`}
                  >
                    <div
                      className={`relative px-3 py-2 text-[14.5px] shadow-sm max-w-[85%] ${msg.sender === 'user'
                          ? 'bg-[#d9fdd3] dark:bg-[#005c4b] text-zinc-900 dark:text-zinc-100 rounded-lg rounded-tr-none ml-auto'
                          : 'bg-white dark:bg-[#202c33] text-zinc-900 dark:text-zinc-100 rounded-lg rounded-tl-none mr-auto'
                        }`}
                      style={{ borderTopLeftRadius: msg.sender === 'bot' ? 0 : '0.5rem', borderTopRightRadius: msg.sender === 'user' ? 0 : '0.5rem' }}
                    >
                      {/* Tail for bot */}
                      {msg.sender === 'bot' && (
                        <div className="absolute top-0 -left-2 w-4 h-4 text-white dark:text-[#202c33]">
                          <svg viewBox="0 0 8 13" fill="currentColor"><path d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z" /></svg>
                        </div>
                      )}
                      {/* Tail for user */}
                      {msg.sender === 'user' && (
                        <div className="absolute top-0 -right-2 w-4 h-4 text-[#d9fdd3] dark:text-[#005c4b]">
                          <svg viewBox="0 0 8 13" fill="currentColor"><path d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z" /></svg>
                        </div>
                      )}

                      <span className="inline-block break-words pe-10">{msg.text.replace('{brand}', activeDemo.brand)}</span>

                      <span className="float-right text-[11px] text-zinc-500 dark:text-zinc-400 mt-2 ml-2 -mb-1 flex items-center gap-1 absolute bottom-1.5 right-2">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        {msg.sender === 'user' && (
                          <svg className="w-[16px] h-[11px] text-[#53bdeb]" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4582 1.25L4.85408 7.85417L2.04158 5.04167L1.10408 5.97917L4.85408 9.72917L12.3957 2.1875L11.4582 1.25Z" fill="currentColor" />
                            <path d="M15.0423 1.25L8.43815 7.85417L7.00065 6.41667L6.06315 7.35417L8.43815 9.72917L15.9798 2.1875L15.0423 1.25Z" fill="currentColor" />
                          </svg>
                        )}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chat Input Mockup */}
              <div className="bg-[#f0f2f5] dark:bg-[#202c33] p-3 flex items-center gap-2 z-20">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500">
                  {/* Simulating attachment icon */}
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.816 16.945c-2.348 2.352-6.16 2.352-8.508 0-2.348-2.349-2.348-6.164 0-8.513l8.69-8.707c1.789-1.792 4.694-1.792 6.483 0 1.788 1.792 1.788 4.697 0 6.488l-9.141 9.158c-1.102 1.104-2.89 1.104-3.992 0-1.102-1.105-1.102-2.895 0-4.001l6.784-6.797 1.391 1.393-6.784 6.798c-.334.335-.334.877 0 1.212.333.334.873.334 1.207 0l9.14-9.158c1.02-1.022 1.02-2.68 0-3.701-1.019-1.022-2.673-1.022-3.693 0l-8.692 8.707c-1.583 1.586-1.583 4.155 0 5.742 1.583 1.585 4.148 1.585 5.731 0l7.592-7.608 1.391 1.393-7.59 7.605z"></path></svg>
                </div>
                <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-full h-10 px-4 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                  Type a message
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2.001z"></path></svg>
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

          <HorizontalTestimonials />
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

          <SwipeTestimonials />

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
