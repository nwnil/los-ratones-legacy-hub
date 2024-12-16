import { motion } from "framer-motion";
import { Twitter, Twitch } from "lucide-react";

interface PlayerCardProps {
  name: string;
  fullName: string;
  role: string;
  image: string;
  twitter?: string;
  twitch?: string;
}

export const PlayerCard = ({ name, fullName, role, image, twitter, twitch }: PlayerCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-gradient-to-b from-rat-light to-rat-dark rounded-xl overflow-hidden"
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rat-dark via-rat-dark/50 to-transparent" />
        
        {/* Social Media Icons */}
        <div className="absolute bottom-4 right-4 flex gap-2 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-rat-dark/80 rounded-full hover:bg-rat text-white hover:text-rat-dark transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {twitch && (
            <a href={twitch} target="_blank" rel="noopener noreferrer" className="p-2 bg-rat-dark/80 rounded-full hover:bg-rat text-white hover:text-rat-dark transition-colors">
              <Twitch className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-rat text-2xl font-heading font-bold mb-1">{name}</h3>
        <p className="text-white text-lg mb-1">{fullName}</p>
        <p className="text-gray-400 text-sm uppercase tracking-wider">{role}</p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rat to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};