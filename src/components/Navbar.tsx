"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  githubUrl: string;
}

export function Navbar({ githubUrl }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "journey", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800 font-mono transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between relative">
        {/* Brand / Logo */}
        <div className="flex-shrink-0 z-20 flex items-center gap-3">
          <a
            href="#home"
            className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1"
            aria-label="Kembali ke atas"
          >
            <div className="w-7 h-7 text-black dark:text-white transition-all flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-black dark:text-white"
                aria-hidden="true"
              >
                <path
                  d="M 360 104 L 256 44 L 88 140 L 88 372 L 256 468 L 424 372 L 424 256 L 220 256"
                  stroke="currentColor"
                  strokeWidth="36"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 205 135 L 140 172 L 140 342 L 256 408 L 372 342 L 372 290"
                  stroke="currentColor"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-black tracking-widest text-black dark:text-white uppercase hidden sm:inline">
              GILANG
            </span>
          </a>
        </div>

        {/* Center Desktop Links with Scrollspy Indicator */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1 relative ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-black dark:bg-white rounded-full animate-in fade-in duration-200" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3 z-20">
          <ThemeToggle />

          <a
            href="/cv-gilang-ramadan.pdf"
            download="CV_Gilang_Ramadan.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity min-h-[44px] focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Unduh Resume Gilang Ramadan (PDF)"
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-black/95 backdrop-blur-md px-4 py-4 flex flex-col gap-1 shadow-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold uppercase tracking-wider px-3 py-2.5 rounded-lg transition-colors min-h-[44px] flex items-center justify-between ${
                  isActive
                    ? "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white font-black"
                    : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                )}
              </a>
            );
          })}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 mt-1 flex flex-col gap-2">
            <a
              href="/cv-gilang-ramadan.pdf"
              download="CV_Gilang_Ramadan.pdf"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider py-3 rounded-xl border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black min-h-[44px]"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>Unduh Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
