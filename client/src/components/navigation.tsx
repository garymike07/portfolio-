import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useViewport } from "@/hooks/useViewport";
import { Logo } from "@/assets/logo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMobile, isTablet } = useViewport();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#documents", label: "Documents" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && !isTablet) {
      setIsOpen(false);
    }
  }, [isMobile, isTablet]);

  // Add scroll effect to navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "card-glass shadow-lg" : "card-glass"
    } border-b border-border/50`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="animate-slide-in-left">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 animate-fade-in-up animate-delay-200">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-primary transition-all duration-300 text-sm xl:text-base relative group px-3 py-2 rounded-lg hover:card-glass"
                data-testid={`nav-${item.label.toLowerCase()}`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-xl sm:text-2xl p-2 rounded-lg card-glass hover:scale-110 transition-all duration-300 animate-slide-in-right"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile/Tablet Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 sm:space-y-4 max-h-[70vh] overflow-y-auto animate-slide-in-bottom">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left hover:text-primary transition-all duration-300 py-3 px-4 rounded-xl card-glass hover:scale-105 animate-fade-in-up"
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}