import { motion } from "framer-motion";
import { ArrowRight, Calendar, Trophy, Users, Video } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-rat-dark overflow-hidden">
      {/* Enhanced background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rat-dark via-rat-dark to-rat-light/5" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main title and description */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left relative z-20" // Added z-20 to ensure text stays on top
            >
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-7xl md:text-9xl font-heading font-bold text-rat mb-6 tracking-tighter"
              >
                LOS RATONES
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 mb-12"
              >
                The Rising Stars of European League of Legends
              </motion.p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-rat hover:bg-rat/90 text-rat-dark font-bold py-4 px-8 rounded-lg flex items-center gap-2 transition-colors"
              >
                Watch Latest Matches
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right side - Quick links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 relative z-10" // Added z-10 to ensure proper stacking
            >
              {[
                { icon: Users, label: "Team Roster", link: "#roster" },
                { icon: Trophy, label: "Achievements", link: "#achievements" },
                { icon: Calendar, label: "Upcoming Matches", link: "#matches" },
                { icon: Video, label: "Recent Highlights", link: "#media" },
              ].map((item, index) => (
                <Link
                  key={item.label}
                  to={item.link}
                  className="group relative overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-rat-light/10 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:border-rat/20 transition-all duration-300"
                  >
                    <item.icon className="w-8 h-8 text-rat mb-4" />
                    <h3 className="text-white font-heading font-semibold">
                      {item.label}
                    </h3>
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-rat/0 via-rat/10 to-rat/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-rat-dark to-transparent" />
    </section>
  );
};