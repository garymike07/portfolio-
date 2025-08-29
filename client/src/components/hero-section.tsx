import { Download, Eye, Linkedin, Github, Mail, Code, Database } from "lucide-react";
import profileImage from "@assets/Snapchat-1045028183_1755951044522.jpg";
import { useViewport } from "@/hooks/useViewport";

export default function HeroSection() {
  const { isMobile, isTablet } = useViewport();
  
  const handleDownloadResume = () => {
    window.open('/api/resume', '_blank');
  };

  const handleViewProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
                <span className="gradient-text" data-testid="hero-name">Mike Kagera</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 text-slate-300" data-testid="hero-title">
                ICT Professional & Software Developer
              </h2>
              <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0" data-testid="hero-description">
                Passionate about using ICT to improve public service delivery, drive organizational efficiency, and empower users through smart, sustainable tech solutions. I am a dedicated and results-oriented ICT professional with a proven track record of success in managing and implementing innovative technology solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-8">
              <button
                onClick={handleDownloadResume}
                className="neuro-box hover-lift px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 animate-fade-in-stagger"
                style={{ animationDelay: '0.6s' }}
                data-testid="button-download-resume"
              >
                <Download className="text-lg sm:text-xl" />
                Download Resume
              </button>
              <button 
                onClick={handleViewProjects}
                className="glass-card hover-lift px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold border border-glass-border rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 animate-fade-in-stagger"
                style={{ animationDelay: '0.7s' }}
                data-testid="button-view-projects"
              >
                <Eye className="text-lg sm:text-xl" />
                View Projects
              </button>
            </div>
            
            <div className="flex gap-4 sm:gap-6 mt-8 sm:mt-12 justify-center lg:justify-start">
              <a 
                href="https://linkedin.com/in/mr-mike-654bb2344" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neuro-inset p-3 sm:p-4 text-xl sm:text-2xl hover:text-cyan-400 transition-colors duration-300 animate-fade-in-stagger"
                style={{ animationDelay: '0.8s' }}
                data-testid="link-linkedin"
              >
                <Linkedin />
              </a>
              <a 
                href="https://github.com/garymike07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neuro-inset p-3 sm:p-4 text-xl sm:text-2xl hover:text-cyan-400 transition-colors duration-300 animate-fade-in-stagger"
                style={{ animationDelay: '0.9s' }}
                data-testid="link-github"
              >
                <Github />
              </a>
              <a 
                href="mailto:wrootmike@gmail.com"
                className="neuro-inset p-3 sm:p-4 text-xl sm:text-2xl hover:text-cyan-400 transition-colors duration-300 animate-fade-in-stagger"
                style={{ animationDelay: '1s' }}
                data-testid="link-email"
              >
                <Mail />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center animate-float order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="neuro-box p-4 sm:p-6 md:p-8 animate-glow">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-2">
                  <img 
                    src={profileImage} 
                    alt="Mike Kagera" 
                    className="w-full h-full rounded-full object-cover"
                    data-testid="hero-profile-image"
                  />
                </div>
              </div>
              {/* Floating tech icons - hidden on very small screens */}
              {!isMobile && (
                <>
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 glass-card rounded-full p-2 sm:p-4 animate-float" style={{animationDelay: '0.5s'}}>
                    <Code className="text-cyan-400 text-lg sm:text-2xl" />
                  </div>
                  <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 glass-card rounded-full p-2 sm:p-4 animate-float" style={{animationDelay: '1s'}}>
                    <Database className="text-purple-400 text-lg sm:text-2xl" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
