"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas halaman"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-black/90 dark:bg-white/90 text-white dark:text-black shadow-2xl border border-neutral-700 dark:border-neutral-300 backdrop-blur-md hover:scale-110 active:scale-95 transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 animate-in fade-in slide-in-from-bottom-4"
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}
