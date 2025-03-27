
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui-custom/button";
import { ExternalLink, Github } from "lucide-react";

// Updated project data
const projectsData = [
  {
    title: "InterioXr Labs",
    description: "A responsive portfolio website built with React and TailwindCSS, featuring smooth animations and modern design.",
    tags: ["Interior Design", "Virtual Reality", "Mixed Reality", "UI/UX"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "eBuildBazaar Platforms",
    description: "A companion application for gamers to track stats, share highlights, and connect with fellow players.",
    tags: ["Turnkey Construction", "Project Management", "Home Improvement", "Labour Hire"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Booze Wayne",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    tags: ["Cocktail Kits", "Cocktail Parties", "Food Catering", "Packaged Food"],
    image: "https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Virtual Utility",
    description: "A real-time weather dashboard with location tracking, forecasts, and severe weather alerts.",
    tags: ["Startup Consulting", "Admin & Legal Support", "Territory Maps", "AI Tools"],
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
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
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
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
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
                      className="inline-block px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                <p className="text-black mb-4">{project.description}</p>
                <div className="flex justify-center">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink size={16} />}
                    iconPosition="right"
                    onClick={() => window.open(project.links.live, "_blank")}
                    className="w-full max-w-xs"
                  >
                    Visit Website
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
