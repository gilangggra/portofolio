import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  const { author, projects, skills, focusAreas, journey } = PORTFOLIO_DATA;

  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Top Fixed Navbar */}
      <Navbar githubUrl={author.github} />

      {/* Main Landmark */}
      <main id="main-content">
        <Hero name={author.name} />

        <About
          name={author.name}
          bio={author.bio}
          skills={skills}
          focusAreas={focusAreas}
        />

        <Projects projects={projects} />

        <Journey milestones={journey} />

        <Contact
          email={author.email}
          githubUrl={author.github}
          linkedinUrl={author.linkedin}
        />
      </main>

      {/* Footer Landmark */}
      <Footer githubUrl={author.github} linkedinUrl={author.linkedin} />

      {/* Floating Back To Top */}
      <BackToTop />
    </div>
  );
}
