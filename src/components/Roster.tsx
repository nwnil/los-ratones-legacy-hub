import { PlayerCard } from "./PlayerCard";
import { motion } from "framer-motion";
import { loadTeamData } from "@/utils/dataLoader";

export const Roster = () => {
  const teamData = loadTeamData();
  const players = teamData.players;

  return (
    <section id="roster" className="py-32 bg-rat-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
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
            Meet the Squad
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            The talented individuals behind Los Ratones' success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {players.map((player, index) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PlayerCard {...player} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
