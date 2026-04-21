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
    <>
      {/* Pinstripe icon pattern layer */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'>
              <g fill='none' stroke='hsl(217 91% 60%)' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round' opacity='0.18'>
                <!-- music note -->
                <g transform='translate(10,16)'>
                  <path d='M2 18V4l10-2v12'/>
                  <circle cx='2' cy='18' r='2.2'/>
                  <circle cx='12' cy='14' r='2.2'/>
                </g>
                <!-- lightbulb (creativity) -->
                <g transform='translate(70,14)'>
                  <path d='M9 18h6M10 21h4M6 10a6 6 0 1 1 12 0c0 3-2 4-3 6H9c-1-2-3-3-3-6Z'/>
                </g>
                <!-- briefcase (business) -->
                <g transform='translate(130,14)'>
                  <rect x='2' y='6' width='20' height='14' rx='2'/>
                  <path d='M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20'/>
                </g>
                <!-- trending up (investments) -->
                <g transform='translate(190,16)'>
                  <path d='M2 18l7-7 4 4 7-9'/>
                  <path d='M14 6h6v6'/>
                </g>
                <!-- gamepad (video games) -->
                <g transform='translate(40,90)'>
                  <path d='M6 12h4M8 10v4M15 12h.01M18 10h.01'/>
                  <rect x='2' y='6' width='22' height='14' rx='5'/>
                </g>
                <!-- book -->
                <g transform='translate(110,90)'>
                  <path d='M3 4a2 2 0 0 1 2-2h13v18H5a2 2 0 0 1-2-2Z'/>
                  <path d='M18 2v18'/>
                </g>
                <!-- rocket (space) -->
                <g transform='translate(170,90)'>
                  <path d='M12 2c4 3 6 7 6 11l-3 3-3-2-3 2-3-3c0-4 2-8 6-11Z'/>
                  <circle cx='12' cy='10' r='1.5'/>
                  <path d='M9 18l-2 4 4-2M15 18l2 4-4-2'/>
                </g>
                <!-- planet -->
                <g transform='translate(10,160)'>
                  <circle cx='10' cy='10' r='6'/>
                  <ellipse cx='10' cy='10' rx='11' ry='3.5' transform='rotate(-20 10 10)'/>
                </g>
                <!-- headphones (music) -->
                <g transform='translate(75,160)'>
                  <path d='M3 14v-2a9 9 0 0 1 18 0v2'/>
                  <path d='M3 14h4v6H5a2 2 0 0 1-2-2ZM21 14h-4v6h2a2 2 0 0 0 2-2Z'/>
                </g>
                <!-- coin (investments) -->
                <g transform='translate(140,160)'>
                  <circle cx='10' cy='10' r='8'/>
                  <path d='M10 5v10M7 8h5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 0 0 0 3h5'/>
                </g>
                <!-- star -->
                <g transform='translate(195,162)'>
                  <path d='M9 1l2.4 5.4L17 7l-4 4 1 6-5-3-5 3 1-6L1 7l5.6-.6Z'/>
                </g>
              </g>
            </svg>`
          )}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '220px 220px',
        }}
      />
      {/* Animated space objects layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {spaceObjects.map(renderSpaceObject)}
      </div>
    </>
  );
};

export default AnimatedSpaceBackground;