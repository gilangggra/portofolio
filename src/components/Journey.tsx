import Image from "next/image";
import { JourneyMilestone } from "@/data/portfolio";
import { CheckCircle2, Calendar } from "lucide-react";

interface JourneyProps {
  milestones: JourneyMilestone[];
}

export function Journey({ milestones }: JourneyProps) {
  return (
    <section
      id="journey"
      className="scroll-mt-20 relative w-full bg-white dark:bg-black text-black dark:text-white py-16 md:py-32 font-mono overflow-hidden transition-colors duration-300 border-b-2 border-black dark:border-neutral-800"
    >
      {/* Background Subtle Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-24 text-center px-2 sm:px-4">
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-3 sm:mb-4">
            My Journey
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm md:text-lg max-w-xl mx-auto font-medium">
            Milestones of growth: From foundational labs to professional production environments.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative">
          {/* Vertical Center Track Line */}
          <div className="absolute left-[16px] sm:left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800 transform md:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-[9px] sm:left-[13px] md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-20 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black shadow-md" />

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 pl-9 sm:pl-12 md:pl-0 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="relative p-4 sm:p-6 md:p-8 border-2 border-black dark:border-neutral-700 rounded-2xl sm:rounded-3xl bg-white dark:bg-neutral-900 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] transition-shadow duration-300">
                      {/* Top Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-full text-black dark:text-white">
                          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{item.year}</span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                          {item.type}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-black dark:text-white mb-1">
                        {item.role}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                        {item.organization}
                      </p>

                      <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Image Preview if available */}
                      {item.image && (
                        <div className="relative mt-4 rounded-xl overflow-hidden border border-neutral-300 dark:border-neutral-800 aspect-[16/9] w-full">
                          <Image
                            src={item.image}
                            alt={item.role}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 30vw"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
