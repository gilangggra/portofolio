"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";

interface HeroProps {
  name: string;
}

export function Hero({ name }: HeroProps) {
  const floatingSkills = [
    "NEXT.JS 16",
    "TYPESCRIPT",
    "REACT 19",
    "FLUTTER",
    "TAILWIND CSS",
    "POSTGRESQL",
  ];

  return (
    <div
      id="home"
      className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] bg-white dark:bg-black text-black dark:text-white font-mono overflow-x-hidden transition-colors duration-300 pt-20 md:pt-32 flex flex-col justify-between"
    >
      {/* Background Big Headline */}
      <div className="absolute top-[18svh] md:top-[18dvh] left-0 w-full flex flex-col items-center pointer-events-none z-0 select-none opacity-90 dark:opacity-95 overflow-hidden">
        <h1 className="w-full text-[11vw] sm:text-[13vw] md:text-[14vw] leading-[0.75] font-black tracking-tighter text-neutral-200/90 dark:text-neutral-900/90 text-center whitespace-nowrap uppercase transition-colors duration-300">
          {name}
        </h1>
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-20 flex flex-col items-center text-center my-auto">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-6 sm:mb-8 shadow-sm max-w-full">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="truncate">Available for Freelance &amp; Full-Time</span>
        </div>

        {/* Foreground Title & Role */}
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-black dark:text-white">
            {name}
          </h2>
          <p className="text-base sm:text-xl md:text-2xl font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Web &amp; Mobile Developer
          </p>
        </div>

        {/* Subtitle Bio */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
          Membangun aplikasi web dan mobile end-to-end dengan penekanan pada stabilitas arsitektur, clean code, performa tinggi, dan antarmuka yang intuitif.
        </p>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 active:scale-95 transition-all min-h-[44px]"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-black dark:border-white text-black dark:text-white text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors min-h-[44px]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Floating Skill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl">
          {floatingSkills.map((skill) => (
            <span
              key={skill}
              className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-100/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-300 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Status Ticker Bar */}
      <div className="relative z-30 w-full border-t-2 border-b-2 border-black dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white font-mono text-xs md:text-sm uppercase tracking-wider transition-colors duration-300">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black dark:divide-neutral-700">
          {/* Cell 1: Status */}
          <div className="p-3 sm:p-4 flex items-center justify-center md:justify-start gap-2.5 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-bold text-[11px] sm:text-xs md:text-sm">Open to Work</span>
          </div>

          {/* Cell 2: Location */}
          <div className="p-3 sm:p-4 flex items-center justify-center md:justify-start hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
            <span className="text-[11px] sm:text-xs md:text-sm">Indonesia</span>
          </div>

          {/* Cell 3: Today */}
          <div className="p-3 sm:p-4 flex items-center justify-center md:justify-start hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default border-t md:border-t-0">
            <span className="flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm truncate">
              <span className="font-bold">TODAY:</span>
              <span className="truncate">Available</span>
            </span>
          </div>

          {/* Cell 4: Scroll Down */}
          <a
            href="#about"
            className="p-3 sm:p-4 flex items-center justify-center gap-1.5 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-pointer animate-pulse text-[11px] sm:text-xs md:text-sm border-t md:border-t-0"
            aria-label="Gulir ke bagian Tentang Saya"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
