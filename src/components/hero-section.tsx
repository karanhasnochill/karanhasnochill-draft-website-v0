
import React from "react";
import { Button } from "@/components/ui-custom/button";
import { Briefcase, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
    >
      
      <div className="relative z-10 container max-w-5xl mx-auto text-center flex flex-col items-center animate-fade-in">
        {/* Profile photo */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary mb-8 animate-scale-in">
          <Avatar className="w-full h-full">
            <AvatarImage 
              src="/lovable-uploads/f4a3bc47-45e7-44dd-ac29-6791e541cd76.png" 
              alt="Karan's profile picture" 
              className="w-full h-full object-cover"
            />
            <AvatarFallback className="text-lg font-medium">Karan</AvatarFallback>
          </Avatar>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 animate-slide-up">
          Karan Sethi
        </h2>

        <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full animate-slide-up">
          Science Entrepreneur
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance text-center">
          Regenerating Scattered Realities for the world inside my head
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-10 text-balance text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Tech, Design, Business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="min-w-[160px] gap-2"
          >
            <Briefcase size={18} />
            View Projects
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="min-w-[160px] gap-2"
          >
            <Mail size={18} />
            Contact Me
          </Button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
