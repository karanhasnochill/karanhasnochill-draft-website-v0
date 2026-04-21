import React from "react";
import { Palette, Briefcase, Eye, Leaf, FlaskConical, Paintbrush, Plane, Trophy, Building2, Sparkles } from "lucide-react";
import designerBg from "@/assets/designer-bg.jpg";
import developerBg from "@/assets/developer-bg.jpg";
import natureBg from "@/assets/nature-bg.jpg";

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-24 px-6"
    >
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate Designer & Creator
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-foreground/80 text-lg">
            I combine creativity with technical expertise to build engaging digital experiences, while capturing and sharing my gaming adventures.
          </p>
        </div>

        <p className="text-sm text-foreground/60 text-center max-w-3xl mx-auto mb-8">
          I get a little creative here and there when I'm not playing video games.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Designer",
              description: "I create visually stunning and intuitive interfaces that delight users and achieve business goals.",
              icon: <Palette size={32} className="text-primary" />,
              backgroundImage: designerBg
            },
            {
              title: "Businessman",
              description: "I build, promote, and invest in businesses that stem from social and environmental needs.",
              icon: <Briefcase size={32} className="text-primary" />,
              backgroundImage: developerBg
            },
            {
              title: "Observationist",
              description: "I see the world through unbridled filters limiting prior judgments to enable room for magic.",
              icon: <Eye size={32} className="text-primary" />,
              backgroundImage: natureBg
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="glass-panel p-6 rounded-2xl transform transition-all duration-300 hover:translate-y-[-5px] relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${item.backgroundImage})`,
                  opacity: 0.1
                }}
              />
              <div className="relative z-10 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="relative z-10 text-xl font-semibold mb-3 text-center">{item.title}</h3>
              <p className="relative z-10 text-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-foreground/60 mb-4 max-w-3xl mx-auto">Although our understanding of the world around us is severely limited, it is through combined dialogue and cooperative action that humanity has started making a little sense of it. I'd like to speak about these topics -</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: "Sustainability", icon: <Leaf size={14} />, color: "text-emerald-400" },
              { name: "Science", icon: <FlaskConical size={14} />, color: "text-cyan-400" },
              { name: "Art", icon: <Paintbrush size={14} />, color: "text-pink-400" },
              { name: "Travel", icon: <Plane size={14} />, color: "text-sky-400" },
              { name: "Sports", icon: <Trophy size={14} />, color: "text-amber-400" },
              { name: "Infrastructure", icon: <Building2 size={14} />, color: "text-stone-400" },
              { name: "Cosmos", icon: <Sparkles size={14} />, color: "text-violet-400" }
            ].map((tag) => (
              <div
                key={tag.name}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary/50 rounded-full border border-border/50 ${tag.color}`}
              >
                {tag.icon}
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
