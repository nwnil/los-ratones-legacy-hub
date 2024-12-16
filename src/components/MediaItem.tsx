import { Play } from "lucide-react";
import { motion } from "framer-motion";

export type MediaItemType = {
  type: "video";
  thumbnail: string;
  title: string;
  category: "matches";
  videoUrl: string;
};

type MediaItemProps = {
  item: MediaItemType;
  index: number;
  onVideoClick: () => void;
};

export const MediaItem = ({ item, index, onVideoClick }: MediaItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative aspect-video bg-rat-dark rounded-xl overflow-hidden cursor-pointer"
    onClick={onVideoClick}
  >
    <img
      src={item.thumbnail}
      alt={item.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-rat-dark via-rat-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="w-16 h-16 rounded-full bg-rat/90 flex items-center justify-center">
        <Play className="w-8 h-8 text-rat-dark" />
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
      <h3 className="text-xl font-heading font-bold text-rat mb-2">
        {item.title}
      </h3>
      <div className="flex items-center gap-2">
        <Play className="w-4 h-4 text-rat" />
        <span className="text-white/80 text-sm capitalize">
          Full Match
        </span>
      </div>
    </div>

    <div className="absolute inset-0 border-2 border-rat opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
  </motion.div>
);