
import React from "react";
import { Button } from "@/components/ui-custom/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-foreground/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          icon={<Home size={18} />} 
          onClick={() => window.location.href = "/"}>
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
