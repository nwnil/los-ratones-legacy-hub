import { PlayerCard } from "./PlayerCard";
import { motion } from "framer-motion";

const players = [
  {
    name: "Andrei Dragomir",
    ign: "113",
    role: "Top Laner",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&auto=format&fit=crop",
    twitter: "https://twitter.com/113_lol",
    twitch: "https://twitch.tv/113_lol"
  },
  {
    name: "Lucjan Krezel",
    ign: "Lucker",
    role: "Jungler",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop",
    twitter: "https://twitter.com/Lucker_lol",
    twitch: "https://twitch.tv/lucker_lol"
  },
  {
    name: "Adam Maanane",
    ign: "LIDER",
    role: "Mid Laner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    twitter: "https://twitter.com/LIDER_lol",
    twitch: "https://twitch.tv/lider_lol"
  },
  {
    name: "Patrick Hájek",
    ign: "Patrik",
    role: "Bot Laner",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop",
    twitter: "https://twitter.com/Patrik_lol",
    twitch: "https://twitch.tv/patrik_lol"
  },
  {
    name: "Mads Brock-Pedersen",
    ign: "Doss",
    role: "Support",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=800&auto=format&fit=crop",
    twitter: "https://twitter.com/Doss_lol",
    twitch: "https://twitch.tv/doss_lol"
  },
];

export const Roster = () => {
  return (
    <section className="py-32 bg-rat-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
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
              key={player.ign}
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