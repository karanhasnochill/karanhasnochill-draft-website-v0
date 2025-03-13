
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui-custom/button";
import { ExternalLink, Github } from "lucide-react";

// Sample project data
const projectsData = [
  {
    title: "Modern Portfolio Website",
    description: "A responsive portfolio website built with React and TailwindCSS, featuring smooth animations and modern design.",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Game Companion App",
    description: "A companion application for gamers to track stats, share highlights, and connect with fellow players.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    tags: ["NextJS", "Stripe", "MongoDB"],
    image: "https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather dashboard with location tracking, forecasts, and severe weather alerts.",
    tags: ["Vue", "OpenWeather API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/50">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Work
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-foreground/80 text-lg">
            Explore my latest projects showcasing my skills in design, development, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-500",
                    hoveredProject === index ? "scale-110" : "scale-100"
                  )}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-2 py-1 text-xs font-medium bg-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<ExternalLink size={16} />}
                    iconPosition="right"
                    onClick={() => window.open(project.links.live, "_blank")}
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<Github size={16} />}
                    iconPosition="right"
                    onClick={() => window.open(project.links.github, "_blank")}
                  >
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
