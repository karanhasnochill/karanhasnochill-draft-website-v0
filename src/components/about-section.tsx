
import React from "react";

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
            Passionate Creator & Gamer
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-foreground/80 text-lg">
            I combine creativity with technical expertise to build engaging digital experiences, while capturing and sharing my gaming adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Designer",
              description: "I create visually stunning and intuitive interfaces that delight users and achieve business goals."
            },
            {
              title: "Developer",
              description: "I build robust applications using modern technologies, ensuring optimal performance and reliability."
            },
            {
              title: "Content Creator",
              description: "I capture and share gaming highlights, creating entertaining and engaging video content."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="glass-panel p-6 rounded-2xl transform transition-all duration-300 hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
