"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight, ArrowUpRight, BookOpen, ExternalLink, Layers } from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "web" | "mobile">("all");

  const filterTabs = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "web",
      label: "Full-Stack Web",
      count: projects.filter((p) => p.category.includes("Web")).length,
    },
    {
      id: "mobile",
      label: "Mobile & PWA",
      count: projects.filter((p) => p.category.includes("Mobile") || p.category.includes("PWA")).length,
    },
  ] as const;

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "web") return project.category.includes("Web");
    if (selectedFilter === "mobile") return project.category.includes("Mobile") || project.category.includes("PWA");
    return true;
  });

  return (
    <section
      id="projects"
      className="scroll-mt-16 sm:scroll-mt-20 w-full bg-black dark:bg-white text-white dark:text-black py-16 md:py-32 font-mono overflow-hidden relative transition-colors duration-300 border-b-2 border-black dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600 mb-2">
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Selected
              <br />
              Works
            </h2>
          </div>
          <p className="text-neutral-400 dark:text-neutral-600 text-sm md:text-base max-w-md text-left md:text-right leading-relaxed">
            A showcase of functional web solutions focused on data accuracy, automation, and user experience.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 md:mb-14">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all min-h-[44px] cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-black text-black dark:text-white shadow-md border border-white dark:border-black"
                    : "bg-neutral-900 dark:bg-neutral-100 text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black border border-neutral-800 dark:border-neutral-300"
                }`}
                aria-pressed={isActive}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isActive
                      ? "bg-black/15 dark:bg-white/15 text-black dark:text-white"
                      : "bg-neutral-800 dark:bg-neutral-200 text-neutral-400 dark:text-neutral-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 border-t border-neutral-800 dark:border-neutral-200 pt-6 sm:pt-8 md:pt-12 items-center"
            >
              {/* Left Column: Details */}
              <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6 order-2 md:order-1">
                <div>
                  <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
                    <span className="text-[10px] font-bold px-3 py-1 border border-neutral-700 dark:border-neutral-300 rounded-full text-neutral-400 dark:text-neutral-600 uppercase tracking-widest bg-neutral-900/50 dark:bg-neutral-100/50">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase leading-tight text-white dark:text-black group-hover:text-neutral-300 dark:group-hover:text-neutral-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-neutral-400 dark:text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {project.summary}
                </p>

                {/* 3-Column Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 border-l-2 border-neutral-800 dark:border-neutral-200 pl-3 sm:pl-4">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="min-w-0">
                      <p className="text-sm sm:text-base md:text-lg font-black text-white dark:text-black leading-tight truncate">
                        {stat.value}
                      </p>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-0.5 truncate">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold px-2.5 py-1 bg-neutral-900 dark:bg-neutral-100 border border-neutral-800 dark:border-neutral-300 rounded text-neutral-300 dark:text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="relative overflow-hidden group/btn flex items-center gap-2 text-xs sm:text-sm font-bold pb-1 text-white dark:text-black cursor-pointer min-h-[44px]"
                  >
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white dark:bg-black transition-all duration-300 group-hover/btn:w-full" />
                    <BookOpen className="w-4 h-4" aria-hidden="true" />
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>

                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 sm:px-4 py-2 bg-white dark:bg-black text-black dark:text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors flex items-center gap-1.5 min-h-[44px]"
                        aria-label={`Kunjungi demo langsung ${project.title}`}
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 sm:px-4 py-2 bg-neutral-900 dark:bg-neutral-100 border border-neutral-800 dark:border-neutral-200 text-neutral-300 dark:text-neutral-700 hover:text-white dark:hover:text-black hover:border-neutral-500 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 min-h-[44px]"
                      aria-label={`Lihat repositori ${project.title} di GitHub`}
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Screenshot Mockup with Tap & Hover Feedback */}
              <div className="md:col-span-7 order-1 md:order-2">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveModalProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalProject(project);
                    }
                  }}
                  className="relative block w-full aspect-[16/10] bg-neutral-900 dark:bg-neutral-100 rounded-xl sm:rounded-2xl border-2 border-neutral-800 dark:border-neutral-200 group-hover:border-neutral-500 cursor-pointer shadow-xl sm:shadow-2xl overflow-hidden transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white dark:focus-visible:ring-black"
                  aria-label={`Buka Case Study ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 rounded-xl sm:rounded-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 sm:opacity-0 bg-white/95 backdrop-blur-sm text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 scale-95 group-hover:scale-100 flex items-center gap-2 shadow-2xl">
                      <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                      <span>View Case Study</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Case Study Inspection */}
        <ProjectModal
          project={activeModalProject}
          allProjects={projects}
          onClose={() => setActiveModalProject(null)}
          onSelectProject={(p) => setActiveModalProject(p)}
        />
      </div>
    </section>
  );
}
