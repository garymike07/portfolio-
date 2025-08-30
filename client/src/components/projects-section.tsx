import { ExternalLink, Github, Code, Server, Layout, Users } from "lucide-react";
import saasLabImage from "@assets/generated_images/Mike_SaaS_Lab_platform_screenshot_6af720a2.png";
import netdevImage from "@assets/generated_images/netdev_site_screenshot.png";
import legalOchreImage from "@assets/legal_ochre_screenshot.webp";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Mike SaaS Lab",
      description: "A comprehensive web development platform offering templates, tools, and learning resources for developers.",
      role: "Lead Developer",
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma ORM"],
      features: [
        "User authentication system with role-based access control",
        "Template marketplace with preview functionality",
        "Interactive learning modules with code sandboxes",
        "Payment processing integration with Stripe",
        "Real-time collaboration features using WebSockets"
      ],
      challenges: "Implementing a scalable architecture that could handle multiple concurrent users while maintaining performance. Designing a flexible template system that could be easily customized by users.",
      results: "Launched a platform that serves as a learning hub and template marketplace for developers, with 500+ monthly active users and 20+ premium templates.",
      liveUrl: "https://lab-sage-zeta.vercel.app",
      image: saasLabImage,
      githubUrl: "https://github.com/garymike07/Mike-SaaS-Lab",
      icons: {
        frontend: Code,
        backend: Server,
        design: Layout
      }
    },
    {
      id: 2,
      title: "NetDev",
      description: "A comprehensive resource hub for network engineers featuring documentation, tools, and interactive labs.",
      role: "Frontend Developer",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "Framer Motion", "MDX"],
      features: [
        "Responsive design optimized for both desktop and mobile devices",
        "Dark/light mode with system preference detection",
        "Interactive network topology visualization tools",
        "Searchable documentation with syntax highlighting",
        "Offline capability using service workers"
      ],
      challenges: "Creating intuitive visualizations for complex network topologies. Optimizing performance for large documentation pages with interactive elements.",
      results: "Created a modern, responsive interface for accessing network engineering tools and labs, improving learning efficiency for networking students by 40%.",
      liveUrl: "https://netdev-nine.vercel.app/",
      image: netdevImage,
      githubUrl: "https://github.com/garymike07/NetDev",
      icons: {
        frontend: Code,
        design: Layout
      }
    },
    {
      id: 3,
      title: "Legal Ochre",
      description: "A professional portfolio website for a legal professional showcasing services, expertise, and client testimonials.",
      role: "Full-Stack Developer",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Framer Motion"],
      features: [
        "Content management system for easy updates",
        "Case study showcase with filterable categories",
        "Client testimonial carousel",
        "Contact form with email integration",
        "SEO optimization for legal search terms"
      ],
      challenges: "Balancing professional aesthetics with modern web design principles. Implementing a user-friendly CMS for non-technical content updates.",
      results: "Designed and deployed a professional portfolio that increased client inquiries by 35% and improved online visibility in search results.",
      liveUrl: "https://legal-ochre.vercel.app/",
      image: legalOchreImage,
      githubUrl: "https://github.com/garymike07/Legal-Ochre",
      icons: {
        frontend: Code,
        backend: Server,
        design: Layout,
        users: Users
      }
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="projects-title">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              data-testid={`project-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.icons.frontend && <project.icons.frontend className="w-4 h-4 text-cyan-400" title="Frontend Development" />}
                    {project.icons.backend && <project.icons.backend className="w-4 h-4 text-purple-400" title="Backend Development" />}
                    {project.icons.design && <project.icons.design className="w-4 h-4 text-green-400" title="UI/UX Design" />}
                    {project.icons.users && <project.icons.users className="w-4 h-4 text-yellow-400" title="User Research" />}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1">My Role:</h4>
                  <p className="text-muted-foreground text-sm">{project.role}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1">Tech Stack:</h4>
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                        data-testid={`project-tech-${project.id}-${index}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1">Key Features:</h4>
                  <ul className="text-muted-foreground text-xs space-y-1 list-disc pl-4">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-1">Results:</h4>
                  <p className="text-muted-foreground text-sm">{project.results}</p>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4"
                    data-testid={`project-demo-${project.id}`}
                  >
                    <ExternalLink className="inline-block w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`project-github-${project.id}`}>
                    <Github className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/garymike07"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
            data-testid="link-full-portfolio"
          >
            <Github className="inline-block w-5 h-5 mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}