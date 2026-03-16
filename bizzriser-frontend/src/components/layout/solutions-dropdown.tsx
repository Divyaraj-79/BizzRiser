"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingBag,
    Building2,
    GraduationCap,
    Stethoscope,
    Plane,
    TrendingUp,
    Bot,
    ShoppingCart,
    ChevronRight
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
    ShoppingCart: <ShoppingCart className="w-5 h-5 text-emerald-500" />,
    Building2: <Building2 className="w-5 h-5 text-blue-500" />,
    Stethoscope: <Stethoscope className="w-5 h-5 text-red-500" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-purple-500" />,
    Plane: <Plane className="w-5 h-5 text-cyan-500" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-orange-500" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-pink-500" />,
    Bot: <Bot className="w-5 h-5 text-bizz-primary" />,
};

interface IndustrySolution {
    id: string;
    name: string;
    icon: string;
    link: string;
}

interface SolutionsDropdownProps {
    isOpen: boolean;
    industries: IndustrySolution[];
    onClose: () => void;
}

export function SolutionsDropdown({ isOpen, industries, onClose }: SolutionsDropdownProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-background/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 z-[60] overflow-hidden"
                    onMouseLeave={onClose}
                >
                    {/* Subtle Background Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-bizz-primary/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-bizz-accent/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6 px-2">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                Solutions by Industry
                            </h3>
                            <Link
                                href="/solutions"
                                onClick={onClose}
                                className="text-xs font-bold text-bizz-primary hover:opacity-80 transition-opacity flex items-center gap-1"
                            >
                                View All <ChevronRight className="w-3 h-3" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            {industries.map((ind) => (
                                <Link
                                    key={ind.id}
                                    href={ind.link}
                                    onClick={onClose}
                                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-bizz-primary/10 transition-colors">
                                        {ICON_MAP[ind.icon] || ICON_MAP.Bot}
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-foreground group-hover:text-bizz-primary transition-colors">
                                            {ind.name}
                                        </span>
                                        <span className="block text-[10px] text-muted-foreground mt-0.5">
                                            Tailored WhatsApp automation
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between px-2">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center">
                                    <Bot className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-foreground">Custom Solution?</p>
                                    <p className="text-[9px] text-muted-foreground">Talk to our experts today</p>
                                </div>
                            </div>
                            <Link href="/contact" onClick={onClose}>
                                <button className="text-xs font-bold px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
