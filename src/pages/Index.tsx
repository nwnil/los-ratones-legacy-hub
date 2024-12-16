import { Hero } from "@/components/Hero";
import { Roster } from "@/components/Roster";
import { UpcomingMatches } from "@/components/UpcomingMatches";
import { TeamNews } from "@/components/TeamNews";

const Index = () => {
  return (
    <div className="min-h-screen bg-rat-dark text-white">
      <Hero />
      <Roster />
      <UpcomingMatches />
      <TeamNews />
    </div>
  );
};

export default Index;