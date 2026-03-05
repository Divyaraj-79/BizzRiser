"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2, MessageSquare, Shield, TrendingUp, Users, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Counter } from "@/components/ui/counter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  { id: "ecommerce", label: "E-Commerce", icon: <TrendingUp className="w-5 h-5" /> },
  { id: "realadmin", label: "Real Estate", icon: <Users className="w-5 h-5" /> },
  { id: "education", label: "Education", icon: <Bot className="w-5 h-5" /> },
  { id: "healthcare", label: "Healthcare", icon: <Shield className="w-5 h-5" /> },
];

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState("ecommerce");
  const [brandName, setBrandName] = useState("");

  function handleExampleInteractions() {
    // Logic to update messages dynamically based on selected industry and brand name
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
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Numbers That Speak For Themselves</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We deliver measurable impact for businesses that demand high conversion rates.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {results.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="card-stat hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all text-center h-full group">
                  <CardContent className="p-8">
                    <Counter value={stat.value} label={stat.label} duration={2500} />
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
                  className="w-full p-3 border border-border rounded-lg"
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
                  className="w-full p-3 border border-border rounded-lg"
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>
            </div>
            <Button className="w-full py-3 bg-bizz-primary text-white rounded-lg" onClick={handleExampleInteractions}>See Example Interactions</Button>
          </div>

          <div className="mt-12">
            <div className="bg-[#ECE5DD] dark:bg-[#1E1E1E] rounded-lg border border-[#E5DDD5] dark:border-[#3A3A3A] p-4 shadow-xl relative w-[360px] mx-auto">
              <div className="bg-[#075E54] dark:bg-[#2A2F32] text-white p-3 rounded-t-lg flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full" />
                <h3 className="text-lg font-bold">{brandName || "Your Brand"}</h3>
              </div>
              <div className="p-4 space-y-4" id="chat-box">
                {[
                  { sender: 'bot', text: `Hey! Planning your next ${selectedIndustry} project with ${brandName || "Your Brand"}?` },
                  { sender: 'user', text: 'Yes! Tell me more about your services.' },
                  { sender: 'bot', text: `We offer tailored solutions for ${selectedIndustry} to help you grow your business.` },
                  { sender: 'user', text: 'That sounds great! How do I get started?' },
                  { sender: 'bot', text: 'You can book a free demo with us today!' },
                ].map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 1 }}
                    className={`flex items-start gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-[#DCF8C6] dark:bg-[#3A3A3A] shrink-0" />
                    )}
                    <div
                      className={`p-3 rounded-lg max-w-[75%] ${
                        message.sender === 'bot' ? 'bg-white dark:bg-[#3A3A3A] text-black dark:text-white' : 'bg-[#DCF8C6] dark:bg-[#056162] text-black dark:text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <script>
        const [selectedIndustry, setSelectedIndustry] = React.useState("ecommerce");
        const [brandName, setBrandName] = React.useState("");

        function handleExampleInteractions() {
          // Logic to update messages dynamically based on selected industry and brand name
        }
      </script>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <Card key={i} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-foreground italic mb-6">"BizzRiser completely transformed how we handle customer support. We recovered 30% more abandoned carts within the first week."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary" />
                    <div>
                      <h4 className="font-semibold text-sm">Sarah Jenkins</h4>
                      <p className="text-xs text-muted-foreground">CMO, TechGrowth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Review Section */}
      <section className="relative py-16 bg-background overflow-hidden">
        {/* Fading effect at the top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
        {/* Fading effect at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-3 gap-6 relative h-[400px] overflow-hidden">
            {/* Column 1 */}
            <div className="space-y-8 animate-continuous-scroll" data-scroll-direction="up">
              {[...Array(5), ...Array(5)].map((_, i) => (
                <div key={`col1-card-${i}`} className="p-8 bg-card rounded-lg shadow-lg flex flex-col items-center text-center">
                  <div className="flex items-center mb-4">
                    {Array(5).fill(0).map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">"Amazing service! Highly recommend."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                    <div className="text-left">
                      <span className="block text-sm font-semibold text-foreground">Sarah Jenkins</span>
                      <span className="block text-xs text-muted-foreground">CMO, TechGrowth</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Column 2 */}
            <div className="space-y-8 animate-continuous-scroll" data-scroll-direction="down">
              {[...Array(5), ...Array(5)].map((_, i) => (
                <div key={`col2-card-${i}`} className="p-8 bg-card rounded-lg shadow-lg flex flex-col items-center text-center">
                  <div className="flex items-center mb-4">
                    {Array(5).fill(0).map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">"Exceptional quality and support."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                    <div className="text-left">
                      <span className="block text-sm font-semibold text-foreground">John Doe</span>
                      <span className="block text-xs text-muted-foreground">CEO, InnovateX</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Column 3 */}
            <div className="space-y-8 animate-continuous-scroll" data-scroll-direction="up">
              {[...Array(5), ...Array(5)].map((_, i) => (
                <div key={`col3-card-${i}`} className="p-8 bg-card rounded-lg shadow-lg flex flex-col items-center text-center">
                  <div className="flex items-center mb-4">
                    {Array(5).fill(0).map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">"Transformed our business!"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                    <div className="text-left">
                      <span className="block text-sm font-semibold text-foreground">Emily Clark</span>
                      <span className="block text-xs text-muted-foreground">Founder, StartUpHub</span>
                    </div>
                  </div>
                </div>
              ))}
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
