import { useState } from "react";
import { motion } from "framer-motion";
import { MediaFilterButton } from "./MediaFilterButton";
import { MediaItem, MediaItemType } from "./MediaItem";

const mediaItems: MediaItemType[] = [
  {
    type: "video",
    thumbnail: "https://img.youtube.com/vi/q0MVTV0fpO8/maxresdefault.jpg",
    title: "Los Ratones vs T1 - Red Bull League of Its Own",
    category: "matches",
    videoUrl: "https://www.youtube.com/watch?v=q0MVTV0fpO8"
  },
  {
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Team Photo - LEC Week 5",
    category: "photos",
  },
  {
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Match Highlights vs G2",
    category: "clips",
  },
  {
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Victory Celebration",
    category: "matches",
  },
  {
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "LIDER's Pentakill",
    category: "clips",
  },
  {
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Behind the Scenes",
    category: "photos",
  },
  {
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Team Practice",
    category: "photos",
  },
];

type CategoryType = "all" | "photos" | "matches" | "clips";

export const MediaGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");

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
          <MediaFilterButton
            active={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
          >
            All Media
          </MediaFilterButton>
          <MediaFilterButton
            active={selectedCategory === "photos"}
            onClick={() => setSelectedCategory("photos")}
          >
            Photos
          </MediaFilterButton>
          <MediaFilterButton
            active={selectedCategory === "matches"}
            onClick={() => setSelectedCategory("matches")}
          >
            Matches
          </MediaFilterButton>
          <MediaFilterButton
            active={selectedCategory === "clips"}
            onClick={() => setSelectedCategory("clips")}
          >
            Clips
          </MediaFilterButton>
        </div>

        {/* Media grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <MediaItem
              key={index}
              item={item}
              index={index}
              onVideoClick={handleVideoClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};