import { Hero } from "@/components/Hero";
import { Roster } from "@/components/Roster";
import { UpcomingMatches } from "@/components/UpcomingMatches";

const Index = () => {
  return (
    <div className="min-h-screen bg-rat-dark text-white">
      <Hero />
      <Roster />
      <UpcomingMatches />
    </div>
  );
};

export default Index;