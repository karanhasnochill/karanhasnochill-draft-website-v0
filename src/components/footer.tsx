
import React from "react";
import { Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="container max-w-5xl mx-auto flex flex-col items-center">
        <p className="text-center text-sm text-foreground/60 inline-flex items-center gap-2">
          <Rocket size={14} />
          Personal portfolio website for Karan Sethi designed by Karan Sethi for Karan Sethi's audience.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
