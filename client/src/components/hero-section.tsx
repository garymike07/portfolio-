import { Download, Eye, Linkedin, Github, Mail } from "lucide-react";
import profileImage from "@assets/Snapchat-1045028183_1755951044522.jpg";

export default function HeroSection() {
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
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text" data-testid="hero-name">Mike Kagera</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-muted-foreground" data-testid="hero-title">
              Full-Stack Developer & IT Specialist
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0" data-testid="hero-description">
              Crafting modern web applications with React, Next.js, and Node.js while providing robust IT infrastructure solutions. Passionate about creating seamless user experiences and solving complex technical challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownloadResume}
                className="btn-primary"
                data-testid="button-download-resume"
              >
                <Download className="inline-block w-5 h-5 mr-2" />
                Download Resume
              </button>
              <button 
                onClick={handleViewProjects}
                className="btn-secondary"
                data-testid="button-view-projects"
              >
                <Eye className="inline-block w-5 h-5 mr-2" />
                View Projects
              </button>
            </div>
            <div className="flex gap-6 mt-8 justify-center lg:justify-start">
              <a 
                href="https://www.linkedin.com/in/mike-kagera-a265b318a"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/garymike07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-github"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="mailto:wrootmike@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-2 shadow-lg">
                <img
                  src={profileImage}
                  alt="Mike Kagera"
                  className="w-full h-full rounded-full object-cover"
                  data-testid="hero-profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}