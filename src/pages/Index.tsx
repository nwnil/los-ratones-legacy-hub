import { Hero } from "@/components/Hero";
import { Roster } from "@/components/Roster";
import { UpcomingMatches } from "@/components/UpcomingMatches";
import { TeamNews } from "@/components/TeamNews";
import { MediaGallery } from "@/components/MediaGallery";
import { PlayerStats } from "@/components/PlayerStats";
import { TeamHistory } from "@/components/TeamHistory";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-rat-dark text-white"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Hero />
      </motion.section>

      {/* Roster Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Roster />
      </motion.section>

      {/* Player Stats with Performance Metrics */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <PlayerStats />
      </motion.section>

      {/* Team History Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <TeamHistory />
      </motion.section>

      {/* Upcoming Matches Schedule */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <UpcomingMatches />
      </motion.section>

      {/* Latest Team News */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <TeamNews />
      </motion.section>

      {/* Media Gallery */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <MediaGallery />
      </motion.section>

      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rat-dark/20" />
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,215,0,0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Index;