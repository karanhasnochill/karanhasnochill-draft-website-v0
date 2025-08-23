
import React from "react";
import { Button } from "@/components/ui-custom/button";
import { Mail, Github, Linkedin, Youtube, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/50">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-foreground/80 text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex justify-center max-w-2xl w-full mb-12">
            <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center transform transition-all duration-300 hover:translate-y-[-5px] max-w-md">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <p className="text-foreground/80 mb-6">Please don't expect a timely response from me - I may be occupied somewhere, playing video games, or just feeding stray cats.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button 
                  size="sm"
                  onClick={() => window.location.href = "mailto:your.email@example.com"}
                  icon={<Mail size={16} />}
                >
                  Email
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => window.open("https://instagram.com", "_blank")}
                  icon={<Instagram size={16} />}
                >
                  Instagram
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => window.open("https://linkedin.com", "_blank")}
                  icon={<Linkedin size={16} />}
                >
                  LinkedIn
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => window.open("https://youtube.com", "_blank")}
                  icon={<Youtube size={16} />}
                >
                  YouTube
                </Button>
              </div>
            </div>
          </div>
          
          <p className="text-foreground/60 text-sm mt-8">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
