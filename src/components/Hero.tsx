import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-rat-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rat-dark"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center z-10"
      >
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-rat mb-6">
          LOS RATONES
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          The Rising Stars of European League of Legends
        </p>
        <div className="bg-rat-light/80 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-rat text-2xl font-heading mb-2">Latest Match</h2>
          <p className="text-white text-lg">LOS RATONES vs G2 Esports</p>
          <p className="text-rat text-xl font-bold">VICTORY</p>
        </div>
      </motion.div>
    </section>
  );
};