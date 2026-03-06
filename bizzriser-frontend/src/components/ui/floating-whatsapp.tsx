"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after a small delay
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 z-50 group"
                >
                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-card text-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg border border-border opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none duration-300">
                        Chat with us
                        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-border" />
                        <div className="absolute top-1/2 -right-[7px] -translate-y-1/2 border-8 border-transparent border-l-card" />
                    </div>

                    <a
                        href="https://wa.me/919879966997"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 relative z-30"
                    >
                        {/* Pulsing ring */}
                        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping" />

                        <MessageCircle className="w-7 h-7 relative z-10" />
                        <span className="sr-only">Contact us on WhatsApp</span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
