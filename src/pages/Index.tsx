import { Hero } from "@/components/Hero";
import { Roster } from "@/components/Roster";
import { PlayerStats } from "@/components/PlayerStats";
import { UpcomingMatches } from "@/components/UpcomingMatches";
import { TeamNews } from "@/components/TeamNews";
import { Achievements } from "@/components/Achievements";
import { motion } from "framer-motion";
import { loadTeamData } from "@/utils/dataLoader";

const Index = () => {
  // Load all team data at once
  const teamData = loadTeamData();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-rat-dark text-white"
    >
      <Hero />
      <Roster />
      <PlayerStats />
      <UpcomingMatches />
      <Achievements />
      <TeamNews />
    </motion.div>
  );
};

export default Index;