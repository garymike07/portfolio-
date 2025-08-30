import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - About */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Mike Kagera</h3>
            <p className="text-muted-foreground mb-4">Full-Stack Developer & IT Specialist</p>
            <p className="text-sm text-muted-foreground">
              Building modern web applications and providing robust IT solutions.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Column 3 - Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a 
                href="mailto:wrootmike@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/garymike07" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mike-kagera-a265b318a" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Nairobi, Kenya
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Mike Kagera. All Rights Reserved.
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="flex items-center">
                Built with <Heart className="w-4 h-4 mx-1 text-red-400" /> and <Code className="w-4 h-4 mx-1 text-cyan-400" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}