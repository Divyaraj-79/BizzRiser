"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface MobileCarouselProps {
    children: ReactNode[];
    className?: string;
}

export function MobileCarousel({ children, className }: MobileCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Update active index based on scroll position
    useEffect(() => {
        if (!isMobile || !containerRef.current) return;

        const container = containerRef.current;
        const handleScroll = () => {
            const scrollPosition = container.scrollLeft;
            const itemWidth = container.clientWidth * 0.85; // matches 85vw
            const newIndex = Math.round(scrollPosition / itemWidth);
            setActiveIndex(Math.min(newIndex, children.length - 1));
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, [isMobile, children.length]);

    // Auto scroll
    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            if (containerRef.current) {
                const container = containerRef.current;
                const itemWidth = container.clientWidth * 0.85;

                let nextIndex = activeIndex + 1;
                if (nextIndex >= children.length) {
                    nextIndex = 0;
                }

                container.scrollTo({
                    left: nextIndex * itemWidth,
                    behavior: "smooth"
                });
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [isMobile, activeIndex, children.length]);

    if (!isMobile) {
        return (
            <div className={className || "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto border-transparent"}>
                {children}
            </div>
        );
    }

    return (
        <div className="relative w-full max-w-[100vw] overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
            <style dangerouslySetInnerHTML={{
                __html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 pt-4 hide-scroll"
            >
                {children.map((child, i) => (
                    <div key={i} className="min-w-[85vw] snap-center shrink-0 flex flex-col">
                        {child}
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-[-10px] mb-4">
                {children.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-bizz-primary" : "w-2 bg-muted"}`}
                    />
                ))}
            </div>
        </div>
    );
}
