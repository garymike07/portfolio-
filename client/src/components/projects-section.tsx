import { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import saasLabImage from "@assets/generated_images/Mike_SaaS_Lab_platform_screenshot_6af720a2.png";
import netdevImage from "@assets/generated_images/netdev_site_screenshot.png";
import legalOchreImage from "@assets/legal_ochre_screenshot.webp";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Mike SaaS Lab",
      description: "Comprehensive web development platform featuring 13+ programming languages learning hub, premium template marketplace, and professional development services.",
      technologies: ["React", "Next.js", "TypeScript"],
      category: "web",
      icon: Code,
      gradient: "from-cyan-400/20 to-purple-600/20",
      isExternal: true,
      liveUrl: "https://lab-sage-zeta.vercel.app",
      image: saasLabImage
    },
    {
      id: 2,
      title: "NetDev",
      description: "Modern network engineering resources, tools, and labs for NetOps.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      category: "web",
      icon: Code,
      gradient: "from-cyan-400/20 to-emerald-600/20",
      isExternal: true,
      liveUrl: "https://netdev-nine.vercel.app/",
      image: netdevImage
    },
    {
      id: 3,
      title: "Legal Ochre",
      description: "Personal site and portfolio hosted on Vercel.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      category: "web",
      icon: Code,
      gradient: "from-emerald-400/20 to-cyan-600/20",
      isExternal: true,
      liveUrl: "https://legal-ochre.vercel.app/",
      image: legalOchreImage
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Apps" },
    { key: "mobile", label: "Mobile" },
    { key: "systems", label: "Systems" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="projects-title">
          Featured Projects
        </h2>
        
        {/* Project Filter */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="glass-card p-2 rounded-2xl w-full max-w-md sm:max-w-none">
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeFilter === filter.key
                      ? "neuro-box text-cyan-400"
                      : "hover:bg-glass"
                  }`}
                  data-testid={`filter-${filter.key}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.id} 
                className="neuro-box hover-lift p-6 project-card transition-all duration-300"
                data-testid={`project-${project.id}`}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <IconComponent className="text-4xl text-cyan-400 relative z-10" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        index === 0 ? "bg-cyan-400/20 text-cyan-400" :
                        index === 1 ? "bg-purple-400/20 text-purple-400" :
                        "bg-green-400/20 text-green-400"
                      }`}
                      data-testid={`project-tech-${project.id}-${index}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.isExternal && project.liveUrl ? (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-card px-4 py-2 rounded-lg hover:bg-glass-border transition-all duration-300 flex items-center gap-2" 
                      data-testid={`project-demo-${project.id}`}
                    >
                      <ExternalLink className="text-sm" />
                      Visit Site
                    </a>
                  ) : (
                    <button className="glass-card px-4 py-2 rounded-lg hover:bg-glass-border transition-all duration-300 flex items-center gap-2" data-testid={`project-demo-${project.id}`}>
                      <ExternalLink className="text-sm" />
                      Live Demo
                    </button>
                  )}
                  <button className="text-slate-400 hover:text-cyan-400 transition-colors duration-300" data-testid={`project-github-${project.id}`}>
                    <Github className="text-xl" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* GitHub Portfolio Link */}
        <div className="text-center mt-12">
          <a 
            href="https://garymike07.github.io/myk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neuro-box hover-lift inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300"
            data-testid="link-full-portfolio"
          >
            <Github className="mr-3 text-2xl" />
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
