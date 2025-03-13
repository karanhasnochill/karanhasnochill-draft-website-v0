
import React, { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import VideosSection from "@/components/videos-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const Index = () => {
  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add('dark');
    
    // For demonstrating animation on page load
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.classList.add("opacity-100");
    }

    // Intersection Observer for element animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll("section > div").forEach((section) => {
      section.classList.add("opacity-0");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="main-content"
      className="min-h-screen bg-background text-foreground opacity-0 transition-opacity duration-500 dark"
    >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <VideosSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
