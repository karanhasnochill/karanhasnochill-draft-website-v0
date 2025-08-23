import React, { useEffect, useState } from "react";

interface SpaceObject {
  id: number;
  type: 'star' | 'spaceship' | 'planet';
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDuration: number;
  delay: number;
}

const AnimatedSpaceBackground = () => {
  const [spaceObjects, setSpaceObjects] = useState<SpaceObject[]>([]);

  useEffect(() => {
    const generateSpaceObjects = () => {
      const objects: SpaceObject[] = [];
      
      // Generate stars
      for (let i = 0; i < 80; i++) {
        objects.push({
          id: i,
          type: 'star',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.1,
          animationDuration: Math.random() * 4 + 3,
          delay: Math.random() * 5
        });
      }
      
      // Generate spaceships
      for (let i = 80; i < 88; i++) {
        objects.push({
          id: i,
          type: 'spaceship',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          opacity: Math.random() * 0.25 + 0.05,
          animationDuration: Math.random() * 8 + 6,
          delay: Math.random() * 10
        });
      }
      
      // Generate planets
      for (let i = 88; i < 96; i++) {
        objects.push({
          id: i,
          type: 'planet',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 15 + 8,
          opacity: Math.random() * 0.2 + 0.05,
          animationDuration: Math.random() * 12 + 8,
          delay: Math.random() * 15
        });
      }
      
      setSpaceObjects(objects);
    };

    generateSpaceObjects();
  }, []);

  const renderSpaceObject = (obj: SpaceObject) => {
    const baseStyles = {
      left: `${obj.x}%`,
      top: `${obj.y}%`,
      width: `${obj.size}px`,
      height: `${obj.size}px`,
      opacity: obj.opacity,
      animationDuration: `${obj.animationDuration}s`,
      animationDelay: `${obj.delay}s`,
    };

    switch (obj.type) {
      case 'star':
        return (
          <div
            key={obj.id}
            className="absolute rounded-full bg-foreground/20 animate-pulse"
            style={baseStyles}
          />
        );
      
      case 'spaceship':
        return (
          <div
            key={obj.id}
            className="absolute animate-pulse"
            style={baseStyles}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              className="text-foreground/15"
            >
              <path
                d="M12 2L22 22H2L12 2Z"
                fill="currentColor"
                opacity="0.6"
              />
              <circle cx="12" cy="16" r="2" fill="currentColor" opacity="0.8" />
            </svg>
          </div>
        );
      
      case 'planet':
        return (
          <div
            key={obj.id}
            className="absolute rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 animate-pulse"
            style={baseStyles}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-transparent to-foreground/5" />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {spaceObjects.map(renderSpaceObject)}
    </div>
  );
};

export default AnimatedSpaceBackground;