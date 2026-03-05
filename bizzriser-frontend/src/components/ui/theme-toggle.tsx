"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;

    if (newIsDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setIsDark(newIsDark);
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="fixed bottom-6 left-6 z-40 rounded-full bg-card border border-border hover:bg-background transition-all group"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
      ) : (
        <Moon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
      )}
    </Button>
  );
}
