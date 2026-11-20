"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface ContactProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export function Contact({ email, githubUrl, linkedinUrl }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Collaboration",
    message: "",
  });

  const [lastMailtoUrl, setLastMailtoUrl] = useState<string>("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("submitting");

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Halo Gilang,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nSubjek: ${formData.subject}\n\nPesan:\n${formData.message}\n`
    )}`;

    setLastMailtoUrl(mailtoUrl);

    // Trigger user mail client
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback handled by UI link
    }

    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "Project Collaboration", message: "" });
    }, 600);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 w-full bg-black dark:bg-white text-white dark:text-black py-16 sm:py-20 md:py-32 font-mono relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          {/* Left Column: Direct Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 sm:mb-6">
              Let&apos;s Start
              <br />
              A Project
            </h2>

            <p className="text-neutral-400 dark:text-neutral-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-md leading-relaxed">
              Interested in working together? Fill out the form or drop me a direct email. I&apos;m available for freelance &amp; full-time roles.
            </p>

            {/* Direct Email Card with 1-Click Copy */}
            <div className="mb-8 sm:mb-10">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">
                Direct Email
              </p>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 border border-neutral-800 dark:border-neutral-300 rounded-xl sm:rounded-2xl bg-neutral-900/60 dark:bg-neutral-100 hover:border-white dark:hover:border-black transition-all group w-full text-left min-h-[56px] focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Salin alamat email ke clipboard"
              >
                <div className="p-2.5 sm:p-3 bg-black dark:bg-white rounded-full border border-neutral-800 dark:border-neutral-300 text-white dark:text-black shrink-0">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-bold tracking-tight flex-1 truncate">
                  {email}
                </span>
                {copied ? (
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 shrink-0">
                    <Check className="w-4 h-4" aria-hidden="true" />
                    <span>COPIED</span>
                  </span>
                ) : (
                  <Copy className="w-4 h-4 text-neutral-500 group-hover:text-white dark:group-hover:text-black transition-colors shrink-0" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Social Presence */}
            <div>
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">
                Social Presence
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-neutral-800 dark:border-neutral-300 bg-neutral-900/60 dark:bg-neutral-100 text-white dark:text-black hover:border-white dark:hover:border-black transition-colors text-xs font-bold uppercase tracking-wider min-h-[44px]"
                  aria-label="Profil GitHub Gilang Ramadan (buka tab baru)"
                >
                  <GithubIcon className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-neutral-800 dark:border-neutral-300 bg-neutral-900/60 dark:bg-neutral-100 text-white dark:text-black hover:border-white dark:hover:border-black transition-colors text-xs font-bold uppercase tracking-wider min-h-[44px]"
                  aria-label="Profil LinkedIn Gilang Ramadan (buka tab baru)"
                >
                  <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="border border-neutral-800 dark:border-neutral-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 bg-neutral-950 dark:bg-neutral-50 shadow-2xl">
            {formStatus === "success" ? (
              <div className="p-6 sm:p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                  <Check className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white dark:text-black">
                  Inquiry Prepared!
                </h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-600 leading-relaxed max-w-sm mx-auto">
                  Aplikasi email Anda telah dibuka dengan draf pesan otomatis. Jika belum terbuka, silakan gunakan tautan di bawah ini:
                </p>

                {lastMailtoUrl && (
                  <div className="pt-2">
                    <a
                      href={lastMailtoUrl}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-black text-black dark:text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                      <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Buka Email Client Manual</span>
                    </a>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setFormStatus("idle")}
                    className="text-xs font-bold uppercase tracking-wider underline text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 dark:bg-white border border-neutral-800 dark:border-neutral-300 text-white dark:text-black text-base sm:text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white dark:focus:border-black min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 dark:bg-white border border-neutral-800 dark:border-neutral-300 text-white dark:text-black text-base sm:text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white dark:focus:border-black min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 dark:bg-white border border-neutral-800 dark:border-neutral-300 text-white dark:text-black text-base sm:text-sm focus:outline-none focus:border-white dark:focus:border-black min-h-[44px]"
                  >
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 dark:bg-white border border-neutral-800 dark:border-neutral-300 text-white dark:text-black text-base sm:text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white dark:focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white dark:bg-black text-black dark:text-white font-black text-xs uppercase tracking-[0.2em] hover:opacity-90 disabled:opacity-50 transition-opacity min-h-[48px]"
                >
                  {formStatus === "submitting" ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
