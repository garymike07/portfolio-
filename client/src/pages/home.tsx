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
import { useViewport } from "@/hooks/useViewport";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isMobile } = useViewport();

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
      <ScrollProgressBar />
      <Navigation />
      <AuroraBackground>
        <HeroSection />
      </AuroraBackground>
      <AnimatedSection className="container-responsive py-16">
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection className="container-responsive py-16" staggerChildren>
        <SkillsSection />
      </AnimatedSection>
      <AnimatedSection className="container-responsive py-16" staggerChildren>
        <ExperienceSection />
      </AnimatedSection>
      <AnimatedSection className="container-responsive py-16">
        <EducationSection />
      </AnimatedSection>
      <AnimatedSection className="container-responsive py-16" staggerChildren>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection className="container-responsive py-16">
        <DocumentsSection />
      </AnimatedSection>
      <AnimatedSection className="container-responsive py-16">
        <ContactSection />
      </AnimatedSection>
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 neuro-box p-3 sm:p-4 rounded-full text-cyan-400 z-50 transition-all duration-300 ${
          showScrollTop ? "opacity-100" : "opacity-0"
        }`}
        data-testid="scroll-to-top"
      >
        <ArrowUp className="text-lg sm:text-xl" />
      </button>
    </div>
  );
}
