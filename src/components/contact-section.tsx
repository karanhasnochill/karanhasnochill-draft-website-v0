
import React from "react";
import { Button } from "@/components/ui-custom/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full mb-12">
            <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transform transition-all duration-300 hover:translate-y-[-5px]">
              <Mail className="text-primary mb-4 w-10 h-10" />
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-foreground/80 mb-4">I'll respond as quickly as possible</p>
              <Button 
                onClick={() => window.location.href = "mailto:your.email@example.com"}
                className="mt-auto"
              >
                Send Email
              </Button>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transform transition-all duration-300 hover:translate-y-[-5px]">
              <div className="mb-4 flex space-x-4">
                <Github className="text-foreground w-8 h-8" />
                <Linkedin className="text-foreground w-8 h-8" />
                <Twitter className="text-foreground w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-foreground/80 mb-4">Follow me on social media for updates</p>
              <Button 
                variant="outline"
                onClick={() => window.open("https://github.com", "_blank")}
                className="mt-auto"
              >
                Follow Me
              </Button>
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
