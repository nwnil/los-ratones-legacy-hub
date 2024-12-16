import { motion } from "framer-motion";
import { ArrowRight, Calendar, Trophy, Users, Video, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-rat-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-rat-dark via-rat-dark to-rat-light/5" />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,215,0,0.1) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Social Media Links */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-6 right-6 z-20"
      >
        <a
          href="https://x.com/LosRatoneslol"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-rat-dark/80 hover:bg-rat border border-rat/20 rounded-full px-6 py-3 transition-all duration-300"
        >
          <Twitter className="w-5 h-5 text-rat group-hover:text-rat-dark transition-colors" />
          <span className="text-white group-hover:text-rat-dark font-medium transition-colors">Follow the Team</span>
        </a>
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Logo and content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left relative z-20 space-y-8"
            >
              {/* Enhanced Logo Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative group w-48"
              >
                {/* Animated glow effect - only behind the logo */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-rat to-rat/50 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                
                {/* Logo container with reflection effect */}
                <div className="relative">
                  <img 
                    src="https://i.ibb.co/XVvZjrz/Los-Ratoneslogo-square.webp" 
                    alt="Los Ratones Logo" 
                    className="w-48 h-48 object-cover rounded-xl shadow-2xl transform transition-transform duration-500"
                  />
                  {/* Reflection effect */}
                  <div className="absolute -bottom-8 left-0 right-0 h-8 bg-gradient-to-b from-rat/30 to-transparent blur-sm transform scale-y-[-1] opacity-50" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h1 className="text-7xl md:text-8xl font-heading font-bold text-rat mb-6 tracking-tighter">
                  LOS RATONES
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-xl">
                  The Rising Stars of European League of Legends
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-rat hover:bg-rat/90 text-rat-dark font-bold py-4 px-8 rounded-lg flex items-center gap-2 transition-colors"
              >
                <span className="relative z-10">Watch Latest Matches</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </motion.button>
            </motion.div>

            {/* Right side - Quick links with dark background */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6 relative z-10"
            >
              {[
                { icon: Users, label: "Team Roster", id: "roster" },
                { icon: Trophy, label: "Achievements", id: "achievements" },
                { icon: Calendar, label: "Upcoming Matches", id: "matches" },
                { icon: Video, label: "Recent Highlights", id: "media" },
              ].map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative bg-rat-dark/80 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-rat hover:bg-rat-dark transition-all duration-300"
                  >
                    <item.icon className="w-8 h-8 text-white group-hover:text-rat transition-colors" />
                    <h3 className="text-white font-heading font-semibold group-hover:text-rat transition-colors">
                      {item.label}
                    </h3>
                  </motion.div>
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};