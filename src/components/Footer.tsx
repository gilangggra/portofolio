import { ArrowUp } from "lucide-react";

interface FooterProps {
  githubUrl: string;
  linkedinUrl?: string;
}

export function Footer({ githubUrl, linkedinUrl }: FooterProps) {
  return (
    <footer className="w-full bg-white dark:bg-black text-black dark:text-white py-8 sm:py-12 font-mono border-t-2 border-black dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-bold uppercase tracking-wider text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <p>© 2026 Gilang Ramadan. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-neutral-500 transition-colors min-h-[44px] flex items-center"
            aria-label="Profil GitHub Gilang Ramadan (buka tab baru)"
          >
            GitHub
          </a>

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-neutral-500 transition-colors min-h-[44px] flex items-center"
              aria-label="Profil LinkedIn Gilang Ramadan (buka tab baru)"
            >
              LinkedIn
            </a>
          )}

          <a
            href="#home"
            className="p-2 inline-flex items-center gap-1.5 hover:text-neutral-500 transition-colors min-h-[44px]"
            aria-label="Kembali ke atas halaman"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
