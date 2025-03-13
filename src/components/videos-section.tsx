
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui-custom/button";
import { Play, Maximize, Volume2, VolumeX } from "lucide-react";

// Sample video data
const videosData = [
  {
    title: "Epic Boss Fight - Final Fantasy XVI",
    description: "Taking down the toughest boss in Final Fantasy XVI with perfect timing and strategy.",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    duration: "3:45",
    tags: ["Final Fantasy", "Boss Fight", "PlayStation 5"]
  },
  {
    title: "Insane Clutch Play - Valorant",
    description: "A 1v5 clutch situation turned into a victory with precise aim and smart positioning.",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    duration: "2:18",
    tags: ["Valorant", "Clutch", "FPS"]
  },
  {
    title: "Perfect Speedrun - Celeste",
    description: "A flawless speedrun of Celeste with zero deaths and all collectibles.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    duration: "8:56",
    tags: ["Celeste", "Speedrun", "Indie"]
  }
];

const VideosSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeVideo !== null && 
          videoRefs.current[activeVideo] && 
          !videoRefs.current[activeVideo]?.contains(event.target as Node)) {
        setActiveVideo(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeVideo]);

  return (
    <section id="videos" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Game Clips
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gaming Highlights
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-foreground/80 text-lg">
            Watch some of my most exciting gaming moments and epic plays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videosData.map((video, index) => (
            <div
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              className={cn(
                "relative rounded-2xl overflow-hidden shadow-md transition-all duration-500",
                activeVideo === index ? "md:col-span-2 scale-100" : "scale-100 hover:scale-[1.02]"
              )}
            >
              {activeVideo === index ? (
                <div className="relative aspect-video w-full">
                  <iframe
                    src={`${video.videoUrl}?autoplay=1&mute=${isMuted ? 1 : 0}`}
                    className="absolute inset-0 w-full h-full"
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button 
                      className="p-2 bg-black/70 text-white rounded-full hover:bg-black/90 transition-colors"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    <button 
                      className="p-2 bg-black/70 text-white rounded-full hover:bg-black/90 transition-colors"
                      onClick={() => setActiveVideo(null)}
                    >
                      <Maximize size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="aspect-video relative overflow-hidden group cursor-pointer" onClick={() => setActiveVideo(index)}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="rounded-full bg-white/80 p-4">
                        <Play className="text-foreground fill-foreground w-8 h-8" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {video.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block px-2 py-1 text-xs font-medium bg-secondary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                    <p className="text-sm text-foreground/70">{video.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            onClick={() => window.open("https://www.youtube.com", "_blank")}
            className="min-w-[200px]"
          >
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
