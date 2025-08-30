import { Download, Eye, Linkedin, Github, Mail, Sparkles } from "lucide-react";
import profileImage from "@assets/Snapchat-1045028183_1755951044522.jpg";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 20
    }));
    setParticles(newParticles);
  }, []);

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
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Animated Particles Background */}
      <div className="particles-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 card-glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Available for new opportunities</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text floating" data-testid="hero-name">Mike Kagera</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-muted-foreground animate-fade-in-up animate-delay-200" data-testid="hero-title">
              Full-Stack Developer & IT Specialist
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animate-delay-300" data-testid="hero-description">
              Crafting modern web applications with React, Next.js, and Node.js while providing robust IT infrastructure solutions. Passionate about creating seamless user experiences and solving complex technical challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-400">
              <button
                onClick={handleDownloadResume}
                className="btn-neu text-foreground pulse-glow morphing-border"
                data-testid="button-download-resume"
              >
                <Download className="inline-block w-5 h-5 mr-2" />
                Download Resume
              </button>
              <button 
                onClick={handleViewProjects}
                className="btn-neu text-foreground"
                data-testid="button-view-projects"
              >
                <Eye className="inline-block w-5 h-5 mr-2" />
                View Projects
              </button>
            </div>
            
            <div className="flex gap-6 mt-8 justify-center lg:justify-start animate-fade-in-up animate-delay-500">
              <a 
                href="https://www.linkedin.com/in/mike-kagera-a265b318a"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 card-glass rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                data-testid="link-linkedin"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/garymike07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 card-glass rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                data-testid="link-github"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="mailto:wrootmike@gmail.com"
                className="p-3 card-glass rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                data-testid="link-email"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2 animate-slide-in-right">
            <div className="relative">
              {/* Floating Orbs */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/30 rounded-full blur-sm floating" style={{ animationDelay: '0s' }} />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary/30 rounded-full blur-sm floating" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent/30 rounded-full blur-sm floating" style={{ animationDelay: '4s' }} />
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 card-glass rounded-full p-2 pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src={profileImage}
                    alt="Mike Kagera"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    data-testid="hero-profile-image"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/20 rounded-full" />
                </div>
              </div>
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}