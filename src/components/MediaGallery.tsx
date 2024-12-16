import { motion } from "framer-motion";
import { Image, Play, Filter } from "lucide-react";
import { useState } from "react";

type MediaItem = {
  type: "image" | "video";
  thumbnail: string;
  title: string;
  category: "match" | "team" | "highlights";
  videoUrl?: string;
};

const mediaItems: MediaItem[] = [
  {
    type: "video",
    thumbnail: "https://img.youtube.com/vi/q0MVTV0fpO8/maxresdefault.jpg",
    title: "Los Ratones vs T1 - Red Bull League of Its Own",
    category: "match",
    videoUrl: "https://www.youtube.com/watch?v=q0MVTV0fpO8"
  },
  {
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Team Photo - LEC Week 5",
    category: "team",
  },
  {
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Match Highlights vs G2",
    category: "highlights",
  },
  {
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Victory Celebration",
    category: "match",
  },
  {
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "LIDER's Pentakill",
    category: "highlights",
  },
  {
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Behind the Scenes",
    category: "team",
  },
  {
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Team Practice",
    category: "team",
  },
];

export const MediaGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems = selectedCategory === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const handleVideoClick = (videoUrl?: string) => {
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <section id="media" className="py-32 bg-gradient-to-b from-rat-dark to-rat-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading font-bold text-rat mb-4">
            Media Gallery
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Explore our latest photos, videos, and highlights
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FilterButton
            active={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
          >
            All Media
          </FilterButton>
          <FilterButton
            active={selectedCategory === "team"}
            onClick={() => setSelectedCategory("team")}
          >
            Photos
          </FilterButton>
          <FilterButton
            active={selectedCategory === "match"}
            onClick={() => setSelectedCategory("match")}
          >
            Matches
          </FilterButton>
          <FilterButton
            active={selectedCategory === "highlights"}
            onClick={() => setSelectedCategory("highlights")}
          >
            Clips
          </FilterButton>
        </div>

        {/* Media grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video bg-rat-dark rounded-xl overflow-hidden cursor-pointer"
              onClick={() => item.type === "video" && handleVideoClick(item.videoUrl)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rat-dark via-rat-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Play button for videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-rat/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-rat-dark" />
                  </div>
                </div>
              )}

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-heading font-bold text-rat mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2">
                  {item.type === "video" ? (
                    <Play className="w-4 h-4 text-rat" />
                  ) : (
                    <Image className="w-4 h-4 text-rat" />
                  )}
                  <span className="text-white/80 text-sm capitalize">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-rat opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FilterButton = ({ 
  children, 
  active, 
  onClick 
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 rounded-lg font-medium transition-all duration-300
      ${active 
        ? "bg-rat text-rat-dark" 
        : "bg-rat-light text-white hover:bg-rat-light/80"
      }
    `}
  >
    <div className="flex items-center gap-2">
      <Filter className="w-4 h-4" />
      {children}
    </div>
  </button>
);