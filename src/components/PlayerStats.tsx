import { motion } from "framer-motion";
import { Trophy, Gamepad2, Sword, Target } from "lucide-react";

const stats = [
  {
    player: "113",
    role: "Top Laner",
    kda: "3.8",
    mainChampions: ["Jax", "K'Sante", "Aatrox"],
    highlight: "Best Top Gap 2024",
    winRate: 65
  },
  {
    player: "Lucker",
    role: "Jungler",
    kda: "4.5",
    mainChampions: ["Lee Sin", "Graves", "Viego"],
    highlight: "Most First Bloods 2024",
    winRate: 62
  },
  {
    player: "LIDER",
    role: "Mid Laner",
    kda: "4.2",
    mainChampions: ["Yasuo", "Zed", "Akali"],
    highlight: "LEC Rookie of the Split",
    winRate: 68
  },
  {
    player: "Patrik",
    role: "Bot Laner",
    kda: "5.1",
    mainChampions: ["Kai'Sa", "Xayah", "Jinx"],
    highlight: "Most kills in a game",
    winRate: 71
  },
  {
    player: "Doss",
    role: "Support",
    kda: "3.9",
    mainChampions: ["Thresh", "Nautilus", "Leona"],
    highlight: "Best Vision Score 2024",
    winRate: 64
  }
];

export const PlayerStats = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-rat-dark to-rat-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading font-bold text-rat mb-4">
            Player Statistics
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Meet our roster and their achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((player, index) => (
            <motion.div
              key={player.player}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-b from-rat-light/50 to-rat-dark/50 rounded-xl p-6 backdrop-blur-sm border border-white/5 hover:border-rat/20 transition-all duration-300"
            >
              {/* Player name and role */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-rat">
                  {player.player}
                </h3>
                <p className="text-white/60">{player.role}</p>
              </div>

              {/* Main Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Win Rate</span>
                  <span className="text-rat font-bold">{player.winRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">KDA</span>
                  <span className="text-rat font-bold">{player.kda}</span>
                </div>
              </div>

              {/* Highlight Achievement */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-white mb-2">
                  <Trophy className="w-4 h-4 text-rat" />
                  Achievement
                </div>
                <p className="text-white/80 text-sm">{player.highlight}</p>
              </div>

              {/* Main Champions */}
              <div>
                <div className="flex items-center gap-2 text-white mb-2">
                  <Sword className="w-4 h-4 text-rat" />
                  Main Champions
                </div>
                <div className="flex flex-wrap gap-2">
                  {player.mainChampions.map((champion) => (
                    <span
                      key={champion}
                      className="bg-rat-dark/50 text-white/80 px-3 py-1 rounded-full text-sm"
                    >
                      {champion}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};