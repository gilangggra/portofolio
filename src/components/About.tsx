import { FileText, ArrowUpRight, Sparkles, Terminal, Code2, Server } from "lucide-react";

interface AboutProps {
  name: string;
  bio: string;
  skills: {
    coreLanguages: string[];
    frameworks: string[];
    tools: string[];
  };
  focusAreas: { title: string; description: string }[];
}

export function About({ name, bio, skills, focusAreas }: AboutProps) {
  return (
    <section
      id="about"
      className="scroll-mt-20 w-full px-4 sm:px-6 pt-12 pb-16 md:pt-20 md:pb-32 bg-white dark:bg-black text-black dark:text-white font-mono transition-colors duration-300 border-b-2 border-black dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-12 text-center md:text-left">
          About Me
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Main Bio Card (Span 2) */}
          <div className="md:col-span-2 relative border-2 border-black dark:border-neutral-700 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 flex flex-col justify-between hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] transition-shadow duration-300 bg-white dark:bg-neutral-900">
            <div className="space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xl sm:text-2xl">
                👋
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight uppercase">
                Hi, I&apos;m {name}.
              </h3>
              <p className="text-neutral-700 dark:text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed">
                {bio}
              </p>
              <p className="text-neutral-700 dark:text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed">
                Berpengalaman dalam siklus pengembangan end-to-end, mulai dari analisis kebutuhan, perancangan skema data relasional, hingga deployment aplikasi dengan performa terukur dan kode yang mudah dirawat.
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="/cv-gilang-ramadan.pdf"
                download="CV_Gilang_Ramadan.pdf"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 min-h-[44px]"
                aria-label="Unduh Resume Gilang Ramadan"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors min-h-[44px]"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* My Focus Card (Span 1) */}
          <div className="md:col-span-1 relative border-2 border-black dark:border-neutral-700 rounded-2xl sm:rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] transition-shadow duration-300 bg-white dark:bg-neutral-900">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-500" aria-hidden="true" />
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                  My Focus
                </h3>
              </div>
              <div className="space-y-4">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="pb-3 border-b border-neutral-200 dark:border-neutral-800 last:border-0 last:pb-0">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-1">
                      {area.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Bento Card (Span 3) */}
          <div className="md:col-span-3 border-2 border-black dark:border-neutral-700 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] transition-shadow duration-300 bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-5 h-5 text-blue-500" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider">
                Tech Stack
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Group 1 */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
                  <Code2 className="w-4 h-4 text-blue-500" aria-hidden="true" />
                  <h4>Core Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.coreLanguages.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Group 2 */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
                  <Server className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                  <h4>Frameworks & UI</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Group 3 */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
                  <Terminal className="w-4 h-4 text-purple-500" aria-hidden="true" />
                  <h4>Tools & Ecosystem</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
