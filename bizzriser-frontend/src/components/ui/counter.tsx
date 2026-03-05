"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: string;
  label: string;
  duration?: number;
}

export function Counter({ value, label, duration = 2500 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract numeric value and suffix
  const numMatch = value.match(/^([\d.]+)/);
  const numValue = numMatch ? parseFloat(numMatch[1].replace(/,/g, "")) : 0;
  const suffix = value.replace(/^[\d.]+/, "");

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(numValue * easeOut);

      setDisplayValue(current.toLocaleString());

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(numValue.toLocaleString());
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numValue, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-sm font-medium text-white/80">{label}</div>
    </div>
  );
}
