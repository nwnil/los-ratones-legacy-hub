import { Hero } from "@/components/Hero";
import { Roster } from "@/components/Roster";
import { FounderCard } from "@/components/FounderCard";
import { UpcomingMatches } from "@/components/UpcomingMatches";
import { TeamNews } from "@/components/TeamNews";
import { Achievements } from "@/components/Achievements";
import { MediaGallery } from "@/components/MediaGallery";
import { Footer } from "@/components/Footer";
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
      <FounderCard />
      <UpcomingMatches />
      <Achievements />
      <MediaGallery />
      <TeamNews />
      <Footer />
    </motion.div>
  );
};

export default Index;