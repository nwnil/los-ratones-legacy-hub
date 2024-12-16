import { motion } from "framer-motion";
import { Twitter, Twitch } from "lucide-react";

export const FounderCard = () => {
  return (
    <section className="py-24 bg-rat-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading font-bold text-rat mb-4">
            Founder & Coach
          </h2>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto group relative bg-gradient-to-b from-rat-light to-rat-dark rounded-xl overflow-hidden"
        >
          <div className="aspect-[16/9] relative overflow-hidden">
            <img 
              src="https://i.ibb.co/Qv6PbtT/Caedrel-Worlds-2024.jpg"
              alt="Caedrel"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rat-dark via-rat-dark/50 to-transparent" />
            
            <div className="absolute bottom-4 right-4 flex gap-2 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <a href="https://twitter.com/Caedrel" target="_blank" rel="noopener noreferrer" className="p-2 bg-rat-dark/80 rounded-full hover:bg-rat text-white hover:text-rat-dark transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.twitch.tv/caedrel" target="_blank" rel="noopener noreferrer" className="p-2 bg-rat-dark/80 rounded-full hover:bg-rat text-white hover:text-rat-dark transition-colors">
                <Twitch className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="p-6 text-center">
            <h3 className="text-rat text-3xl font-heading font-bold mb-2">CAEDREL</h3>
            <p className="text-white text-xl mb-4">Marc Robert Lamont</p>
            <p className="text-gray-400 text-lg uppercase tracking-wider">Founder & Coach</p>
          </div>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rat to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </section>
  );
};