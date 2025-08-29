import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useViewport } from "@/hooks/useViewport";
import { Logo } from "@/assets/logo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile, isTablet } = useViewport();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-primary transition-colors duration-300 text-sm xl:text-base"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-xl sm:text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile/Tablet Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 sm:space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-secondary"
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
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
