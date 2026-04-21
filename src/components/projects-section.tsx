
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui-custom/button";
import { Globe, LayoutGrid, List, Mail } from "lucide-react";

// Updated project data
const projectsData = [
  {
    title: "InterioXr Labs",
    description: "Regenerating Scattered Realities",
    tags: ["Interior Design", "Virtual Reality", "Mixed Reality", "UI/UX"],
    status: "Active Consultancy",
    accent: "blue",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "eBuildBazaar Platforms",
    description: "Regenerating Smart Spaces",
    tags: ["Turnkey Construction", "Project Management", "Home Improvement", "Labour Hire"],
    status: "In-Development",
    accent: "yellow",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Booze Wayne",
    description: "Regenerating Party Cultures",
    tags: ["Cocktail Kits", "Cocktail Parties", "Food Catering", "Packaged Food"],
    status: "Coming Soon",
    accent: "red",
    image: "https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "RapiDash",
    description: "Regenerating Smart Tools",
    tags: ["Startup Consulting", "Admin & Legal Support", "Territory Maps", "AI Tools"],
    status: "In-Research",
    accent: "purple",
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    links: {
      live: "#",
      github: "#"
    }
  }
];

const accentStyles: Record<string, { tag: string; status: string; title: string }> = {
  blue: {
    tag: "bg-blue-500/15 text-blue-300 border border-blue-400/30",
    status: "bg-blue-500/20 text-blue-200 border border-blue-400/40",
    title: "text-blue-300",
  },
  yellow: {
    tag: "bg-yellow-500/15 text-yellow-300 border border-yellow-400/30",
    status: "bg-yellow-500/20 text-yellow-200 border border-yellow-400/40",
    title: "text-yellow-300",
  },
  red: {
    tag: "bg-red-500/15 text-red-300 border border-red-400/30",
    status: "bg-red-500/20 text-red-200 border border-red-400/40",
    title: "text-red-300",
  },
  purple: {
    tag: "bg-purple-500/15 text-purple-300 border border-purple-400/30",
    status: "bg-purple-500/20 text-purple-200 border border-purple-400/40",
    title: "text-purple-300",
  },
};

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/50">
      <div className="container max-w-5xl mx-auto">
        <div className="relative flex flex-col items-center text-center mb-16 animate-fade-in">
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

          <div className="mt-6 md:mt-0 md:absolute md:right-0 md:top-0 inline-flex items-center gap-1 p-1 rounded-full border border-border/50 bg-background/40 backdrop-blur-sm">
            <button
              type="button"
              aria-label="Grid view"
              aria-pressed={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-1.5 rounded-full transition-colors",
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              type="button"
              aria-label="List view"
              aria-pressed={viewMode === "list"}
              onClick={() => setViewMode("list")}
              className={cn(
                "p-1.5 rounded-full transition-colors",
                viewMode === "list"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        <div
          className={cn(
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 gap-8"
              : "flex flex-col gap-6"
          )}
        >
          {projectsData.map((project, index) => {
            const styles = accentStyles[project.accent];
            const isList = viewMode === "list";
            return (
              <div
                key={index}
                className={cn(
                  "group relative bg-card rounded-2xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl animate-fade-in",
                  isList ? "flex flex-col sm:flex-row" : "flex flex-col"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={cn(
                    "overflow-hidden flex-shrink-0",
                    isList ? "h-48 sm:h-auto sm:w-56" : "h-56"
                  )}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-500",
                      hoveredProject === index ? "scale-110" : "scale-100"
                    )}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className={cn("text-xl font-bold mb-1", styles.title)}>
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">{project.description}</p>

                  <div className={cn("flex flex-wrap gap-1.5 mb-4 min-h-[3.5rem] content-start", isList ? "justify-start" : "justify-center")}>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={cn(
                          "inline-block px-2 py-0.5 text-[10px] font-medium rounded-full whitespace-nowrap h-fit",
                          styles.tag
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className={cn("mb-4 text-center", isList ? "sm:text-left" : "")}>
                    <span className="text-foreground/80">{project.status}</span>
                  </p>


                  <div className={cn("flex flex-wrap gap-2 mt-auto", isList ? "justify-start" : "justify-center")}>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Mail size={16} />}
                      iconPosition="left"
                      onClick={() => {
                        const contact = document.getElementById("contact");
                        contact?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Enquire
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<Globe size={16} />}
                      iconPosition="left"
                      onClick={() => window.open(project.links.live, "_blank")}
                    >
                      Visit Website
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
