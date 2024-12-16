import { motion } from "framer-motion";
import { MediaItem } from "./MediaItem";

type MatchItemType = {
  thumbnail: string;
  title: string;
  videoUrl: string;
};

const matches: MatchItemType[] = [
  {
    thumbnail: "https://img.youtube.com/vi/q0MVTV0fpO8/maxresdefault.jpg",
    title: "Los Ratones vs T1 - Red Bull League of Its Own",
    videoUrl: "https://www.youtube.com/watch?v=q0MVTV0fpO8"
  }
];

export const MediaGallery = () => {
  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
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
            Full Matches
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Watch our latest competitive matches
          </p>
        </motion.div>

        {/* Matches grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match, index) => (
            <MediaItem
              key={index}
              item={{
                type: "video",
                thumbnail: match.thumbnail,
                title: match.title,
                videoUrl: match.videoUrl,
                category: "matches"
              }}
              index={index}
              onVideoClick={() => handleVideoClick(match.videoUrl)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};