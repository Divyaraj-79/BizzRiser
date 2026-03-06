"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fetchApi } from "@/lib/api";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            company: formData.get('company'),
            phone: formData.get('phone'),
            industry: formData.get('industry'),
            message: formData.get('message'),
        };

        try {
            await fetchApi('/contacts', {
                method: 'POST',
                body: JSON.stringify(data),
            });
            const { toast } = await import("sonner");
            toast.success("Message sent successfully! We will be in touch.");
            (e.target as HTMLFormElement).reset();
        } catch (error: any) {
            const { toast } = await import("sonner");
            toast.error(error.message || "Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-background flex flex-col">
            {/* 1. Hero Section */}
            <section className="relative py-24 overflow-hidden bg-card/30 border-b border-border">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bizz-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bizz-accent/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Get in <span className="text-gradient">Touch</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Our automation experts are here to help you scale your business. Reach out to us for sales, support, or general inquiries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Main Content (Contact Details & Form) */}
            <section className="py-24 flex-1">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column: Contact Info & Map */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                                <div className="flex flex-col gap-6">
                                    <Card className="bg-accent/5 border-accent/20 hover:border-accent/40 transition-colors">
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                                <MapPin className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">Our Office</h3>
                                                <p className="text-muted-foreground">720, RK Empire, Nr. Mavdi Chowkdi,<br />150 Ft. Ring Road, Rajkot - 360004</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-accent/5 border-accent/20 hover:border-accent/40 transition-colors">
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                                <Phone className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">Phone Number</h3>
                                                <p className="text-muted-foreground">+91 98799 66997<br />Mon-Sat 10am-7pm EST</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-accent/5 border-accent/20 hover:border-accent/40 transition-colors">
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                                <Mail className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">Email Address</h3>
                                                <p className="text-muted-foreground">hello@bizzriser.com<br />support@bizzriser.com</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Live Google Map Embed */}
                            <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[300px] w-full relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4020770203847!2d70.78399467615054!3d22.262754044253654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca5dbe7afda3%3A0x6d8e1af5be0f4126!2sRK%20Empire!5e0!3m2!1sen!2sin!4v1772696062532!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Card className="border-border shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
                                <CardContent className="p-8 md:p-10 relative z-10">
                                    <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                                    <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                                                <Input id="firstName" name="firstName" placeholder="Dakshraj" required className="bg-background/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                                                <Input id="lastName" name="lastName" placeholder="Chauhan" required className="bg-background/50" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-foreground">Work Email</label>
                                            <Input id="email" name="email" type="email" placeholder="daksraj@company.com" required className="bg-background/50" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="company" className="text-sm font-medium text-foreground">Company Name</label>
                                                <Input id="company" name="company" placeholder="Company" className="bg-background/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                                                <Input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" className="bg-background/50" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="industry" className="text-sm font-medium text-foreground">Industry</label>
                                            <select id="industry" name="industry" defaultValue="" className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                                                <option value="" disabled>Select Industry</option>
                                                <option value="ecommerce">E-Commerce</option>
                                                <option value="realestate">Real Estate</option>
                                                <option value="education">Education</option>
                                                <option value="healthcare">Healthcare</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="How can we help you?"
                                                rows={5}
                                                required
                                                className="resize-none bg-background/50"
                                            />
                                        </div>


                                        <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-bold bg-gradient-brand text-white shadow-lg hover:shadow-xl hover:opacity-90 transition-all gap-2">
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            {!isSubmitting && <Send className="w-5 h-5" />}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Direct WhatsApp CTA */}
                            <div className="mt-8 text-center p-6 border border-bizz-primary/20 rounded-2xl bg-bizz-primary/5">
                                <p className="text-foreground font-medium mb-3">Need an immediate response?</p>
                                <a href="https://wa.me/919879966997?text=Hii,%20Please%20Tell%20me%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="rounded-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all group">
                                        <MessageSquare className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                        Chat on WhatsApp Now
                                    </Button>
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
