
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui-custom/button";
import { ArrowUp } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      setIsScrolled(window.scrollY > 20);
      
      // Handle scroll to top button visibility
      setShowScrollTop(window.scrollY > 500);
      
      // Handle active section
      const sections = ["hero", "about", "projects", "videos", "contact"];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Map display names to section IDs
  const sectionNames = {
    "hero": "Karan",
    "about": "About",
    "projects": "Projects",
    "videos": "Videos",
    "contact": "Contact"
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "dark:bg-background/80 bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <nav className="container mx-auto flex items-center justify-center">
          <ul className="flex items-center space-x-1 sm:space-x-2">
            {Object.entries(sectionNames).map(([id, name]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    activeSection === id 
                      ? "text-primary" 
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {name}
                  {activeSection === id && (
                    <span 
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full transform -translate-x-1/2 transition-all duration-300"
                      style={{ opacity: 1 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed right-6 bottom-6 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default Navigation;
