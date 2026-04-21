import React from "react";
import { Button } from "@/components/ui-custom/button";
import { BookOpen, ExternalLink } from "lucide-react";

// Sample thoughts/blog data
const thoughtsData = [
  {
    title: "Why I Stopped Optimizing My Mornings",
    description: "A reflection on productivity culture and the quiet joy of doing nothing before 10 AM.",
    blogUrl: "https://example.com/blog/mornings",
    readTime: "4 min read",
    tags: ["Lifestyle", "Productivity", "Reflection"],
  },
  {
    title: "Stray Cats and the Economics of Kindness",
    description: "What feeding strays around the neighborhood taught me about reciprocity and small acts.",
    blogUrl: "https://example.com/blog/stray-cats",
    readTime: "6 min read",
    tags: ["Essay", "Community", "Ethics"],
  },
  {
    title: "Notes from a Side Quest Brain",
    description: "On context-switching, hyperfocus, and building a life that doesn't fit neatly on a resume.",
    blogUrl: "https://example.com/blog/side-quest",
    readTime: "5 min read",
    tags: ["Career", "Creativity", "Personal"],
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Writing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thoughts
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-foreground/80 text-lg">
            A collection of essays and notes on the things I've been thinking about lately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {thoughtsData.map((thought, index) => (
            <a
              key={index}
              href={thought.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group block"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <BookOpen size={20} />
                  </div>
                  <span className="text-xs text-foreground/60">{thought.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {thought.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-2 py-1 text-xs font-medium bg-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-left group-hover:text-primary transition-colors">
                  {thought.title}
                </h3>
                <p className="text-sm text-foreground/70 text-left">{thought.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => window.open("https://example.com/blog", "_blank")}
            className="min-w-[200px]"
          >
            Read All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
