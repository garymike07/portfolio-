import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Mike Kagera</h3>
          <p className="text-muted-foreground">ICT Professional</p>
        </div>
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a href="mailto:wrootmike@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail />
          </a>
          <a href="https://github.com/garymike07" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/mike-kagera-a265b318a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin />
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mike Kagera. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
