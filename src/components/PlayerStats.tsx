import { motion } from "framer-motion";
import { Trophy, Star, Award, ChartBar } from "lucide-react";

const stats = [
  {
    player: "LIDER",
    role: "Mid Laner",
    kda: "4.2",
    winRate: "68%",
    achievements: ["LEC Rookie of the Split", "5 Pentakills"],
    signature: ["Yasuo", "Zed", "Akali"]
  },
  {
    player: "Patrik",
    role: "Bot Laner",
    kda: "5.1",
    winRate: "71%",
    achievements: ["Most kills in a game", "MVP Week 3"],
    signature: ["Kai'Sa", "Xayah", "Jinx"]
  },
  {
    player: "113",
    role: "Top Laner",
    kda: "3.8",
    winRate: "65%",
    achievements: ["Best Top Gap 2024", "Solo Bolo King"],
    signature: ["Jax", "K'Sante", "Aatrox"]
  }
];

export const PlayerStats = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-rat-dark to-rat-light relative overflow-hidden">
      {/* Background pattern */}
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
            Individual achievements and performance metrics of our star players
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((player, index) => (
            <motion.div
              key={player.player}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-b from-rat-light/50 to-rat-dark/50 rounded-xl p-6 backdrop-blur-sm border border-white/5 hover:border-rat/20 transition-all duration-300"
            >
              {/* Player name and role */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-rat">
                    {player.player}
                  </h3>
                  <p className="text-white/60">{player.role}</p>
                </div>
                <Star className="w-8 h-8 text-rat opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-rat-dark/50 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-1">KDA Ratio</p>
                  <p className="text-2xl font-bold text-rat">{player.kda}</p>
                </div>
                <div className="bg-rat-dark/50 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-1">Win Rate</p>
                  <p className="text-2xl font-bold text-rat">{player.winRate}</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-white mb-3">
                  <Trophy className="w-4 h-4 text-rat" />
                  Achievements
                </h4>
                <ul className="space-y-2">
                  {player.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-white/80"
                    >
                      <Award className="w-4 h-4 text-rat" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signature Champions */}
              <div>
                <h4 className="flex items-center gap-2 text-white mb-3">
                  <ChartBar className="w-4 h-4 text-rat" />
                  Signature Champions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {player.signature.map((champion, i) => (
                    <span
                      key={i}
                      className="bg-rat-dark/50 text-white/80 px-3 py-1 rounded-full text-sm"
                    >
                      {champion}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-rat opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};