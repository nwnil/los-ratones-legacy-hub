import { Hero } from "@/components/Hero";
import { Roster } from "@/components/Roster";
import { UpcomingMatches } from "@/components/UpcomingMatches";
import { TeamNews } from "@/components/TeamNews";
import { MediaGallery } from "@/components/MediaGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-rat-dark text-white">
      <Hero />
      <Roster />
      <UpcomingMatches />
      <TeamNews />
      <MediaGallery />
    </div>
  );
};

export default Index;