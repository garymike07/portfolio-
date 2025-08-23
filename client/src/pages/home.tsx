import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import ProjectsSection from "@/components/projects-section";
import DocumentsSection from "@/components/documents-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <DocumentsSection />
      <ContactSection />
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 neuro-box p-4 rounded-full text-cyan-400 z-50 transition-all duration-300 ${
          showScrollTop ? "opacity-100" : "opacity-0"
        }`}
        data-testid="scroll-to-top"
      >
        <ArrowUp className="text-xl" />
      </button>
    </div>
  );
}
