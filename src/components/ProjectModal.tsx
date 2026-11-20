"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import { X, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  allProjects?: Project[];
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
}

export function ProjectModal({
  project,
  allProjects = [],
  onClose,
  onSelectProject,
}: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentIndex = project && allProjects.length > 0
    ? allProjects.findIndex((p) => p.id === project.id)
    : -1;

  const prevProject = currentIndex > 0
    ? allProjects[currentIndex - 1]
    : allProjects[allProjects.length - 1];

  const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1
    ? allProjects[currentIndex + 1]
    : allProjects[0];

  useEffect(() => {
    if (!project) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && onSelectProject && prevProject) {
        onSelectProject(prevProject);
      } else if (e.key === "ArrowRight" && onSelectProject && nextProject) {
        onSelectProject(nextProject);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose, onSelectProject, prevProject, nextProject]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 pt-4 sm:pt-16 md:pt-24 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="bg-neutral-900 dark:bg-neutral-100 border border-neutral-800 dark:border-neutral-200 rounded-xl sm:rounded-2xl w-full max-w-4xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto relative shadow-2xl font-mono text-neutral-300 dark:text-neutral-700"
      >
        {/* Floating Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup Case Study"
          className="absolute top-3 right-3 sm:top-6 sm:right-6 p-2 sm:p-2.5 bg-black/50 dark:bg-white/50 backdrop-blur-md border border-white/20 dark:border-black/20 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white hover:scale-110 rounded-full text-white dark:text-black transition-all duration-300 z-50 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-white dark:focus-visible:ring-black"
        >
          <X className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
        </button>

        {/* Hero Header Banner */}
        <div className="relative w-full h-44 sm:h-56 md:h-72 bg-black border-b border-neutral-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 100vw, 896px"
            quality={80}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:left-10 pr-14 sm:pr-16 md:pr-24">
            <span className="text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 bg-white text-black rounded-full uppercase tracking-widest mb-2 sm:mb-3 inline-block">
              Case Study
            </span>
            <h3
              id="case-study-title"
              className="text-lg sm:text-2xl md:text-5xl font-black uppercase text-white leading-tight"
            >
              {project.title}
            </h3>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8">
          {/* Problem vs Solution (2-Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2.5 sm:space-y-3 p-4 sm:p-5 rounded-xl bg-black/40 dark:bg-white/40 border border-neutral-800 dark:border-neutral-200">
              <h4 className="text-xs sm:text-sm md:text-base font-bold text-white dark:text-black uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full shrink-0" aria-hidden="true" />
                <span>Problem Statement</span>
              </h4>
              <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-neutral-300 dark:text-neutral-700 font-sans">
                {project.problem}
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3 p-4 sm:p-5 rounded-xl bg-black/40 dark:bg-white/40 border border-neutral-800 dark:border-neutral-200">
              <h4 className="text-xs sm:text-sm md:text-base font-bold text-white dark:text-black uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shrink-0" aria-hidden="true" />
                <span>Proposed Solution</span>
              </h4>
              <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-neutral-300 dark:text-neutral-700 font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-neutral-800 dark:bg-neutral-200" />

          {/* Architecture & Key Technical Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-white dark:text-black uppercase tracking-wider">
                System Architecture & Approach
              </h4>
              <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-neutral-300 dark:text-neutral-700 font-sans">
                {project.background}
              </p>

              {/* Performance & Reliability Metric Box */}
              <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-neutral-950 dark:bg-neutral-50 border border-neutral-800 dark:border-neutral-200">
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                  Performance & Reliability Metric
                </span>
                <p className="text-xs md:text-sm font-semibold text-neutral-200 dark:text-neutral-800">
                  {project.metrics}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-base md:text-lg font-bold text-white dark:text-black uppercase tracking-wider">
                Key Technical Features
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-neutral-300 dark:text-neutral-700">
                    <span className="text-emerald-400 dark:text-emerald-600 font-bold mt-0.5 shrink-0" aria-hidden="true">
                      ▹
                    </span>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3-Column Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {project.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/40 dark:bg-white/40 border border-neutral-800 dark:border-neutral-200"
              >
                <p className="text-xl md:text-2xl font-black text-white dark:text-black">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies & Frameworks */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-600">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-bold px-3 py-1.5 bg-neutral-800 dark:bg-neutral-200 border border-neutral-700 dark:border-neutral-300 rounded text-neutral-200 dark:text-neutral-800 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-neutral-800 dark:border-neutral-200">
            <div className="text-xs text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
              Review code repository & architectural implementation.
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-3 bg-white dark:bg-black text-black dark:text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-3 border border-neutral-700 dark:border-neutral-300 hover:border-white dark:hover:border-black text-white dark:text-black text-xs font-bold uppercase tracking-widest rounded-md hover:bg-white/10 dark:hover:bg-black/10 transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <span>GitHub Repo</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Prev / Next Project Navigation */}
          {allProjects.length > 1 && onSelectProject && (
            <div className="pt-4 border-t border-neutral-800 dark:border-neutral-200 flex items-center justify-between gap-3 text-xs">
              <button
                type="button"
                onClick={() => prevProject && onSelectProject(prevProject)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-neutral-800 dark:border-neutral-300 hover:border-white dark:hover:border-black text-neutral-300 dark:text-neutral-700 hover:text-white dark:hover:text-black transition-colors min-h-[44px] cursor-pointer"
                aria-label={`Lihat proyek sebelumnya: ${prevProject?.title}`}
              >
                <ChevronLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
                <div className="text-left hidden sm:block">
                  <span className="text-[10px] uppercase text-neutral-500 block">Prev</span>
                  <span className="font-bold truncate max-w-[150px] block">{prevProject?.title}</span>
                </div>
                <span className="sm:hidden font-bold">Prev</span>
              </button>

              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider">
                {currentIndex + 1} / {allProjects.length}
              </span>

              <button
                type="button"
                onClick={() => nextProject && onSelectProject(nextProject)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-neutral-800 dark:border-neutral-300 hover:border-white dark:hover:border-black text-neutral-300 dark:text-neutral-700 hover:text-white dark:hover:text-black transition-colors min-h-[44px] cursor-pointer"
                aria-label={`Lihat proyek berikutnya: ${nextProject?.title}`}
              >
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] uppercase text-neutral-500 block">Next</span>
                  <span className="font-bold truncate max-w-[150px] block">{nextProject?.title}</span>
                </div>
                <span className="sm:hidden font-bold">Next</span>
                <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
