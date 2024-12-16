import { motion } from "framer-motion";

interface PlayerCardProps {
  name: string;
  role: string;
  image: string;
  ign: string;
}

export const PlayerCard = ({ name, role, image, ign }: PlayerCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-rat-light rounded-lg overflow-hidden"
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rat-dark/80 to-transparent"></div>
      </div>
      <div className="p-4">
        <h3 className="text-rat text-xl font-heading font-bold">{ign}</h3>
        <p className="text-white">{name}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </motion.div>
  );
};