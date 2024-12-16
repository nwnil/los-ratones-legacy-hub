import { motion } from "framer-motion";
import { Trophy, Gamepad2, Sword, Target } from "lucide-react";

const stats = [
  {
    player: "Irrelevant",
    role: "Top Laner",
    kda: "3.8",
    mainChampions: ["K'Sante", "Gnar", "Renekton"],
    highlight: "Former LEC player with Team Vitality",
    winRate: 65,
    gamesPlayed: 38,
    soloKills: 12,
    csPerMin: 8.5
  },
  {
    player: "Shlatan",
    role: "Jungler",
    kda: "4.2",
    mainChampions: ["Vi", "Maokai", "Sejuani"],
    highlight: "Former LEC player with Misfits Gaming",
    winRate: 62,
    gamesPlayed: 38,
    objectives: 68,
    ganksPreTen: 4.0
  },
  {
    player: "Zwyroo",
    role: "Mid Laner",
    kda: "4.5",
    mainChampions: ["Azir", "Orianna", "Syndra"],
    highlight: "Rising star from Polish scene",
    winRate: 65,
    gamesPlayed: 38,
    soloKills: 15,
    csPerMin: 9.1
  },
  {
    player: "Keduii",
    role: "Bot Laner",
    kda: "5.1",
    mainChampions: ["Zeri", "Xayah", "Kai'Sa"],
    highlight: "Known for aggressive playstyle",
    winRate: 68,
    gamesPlayed: 38,
    pentaKills: 1,
    csPerMin: 9.8
  },
  {
    player: "Stend",
    role: "Support",
    kda: "4.3",
    mainChampions: ["Nautilus", "Thresh", "Rakan"],
    highlight: "Former ERL veteran",
    winRate: 65,
    gamesPlayed: 38,
    visionScore: 85.5,
    roamingScore: 8.5
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
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Games Played</span>
                  <span className="text-rat font-bold">{player.gamesPlayed}</span>
                </div>
                {player.soloKills && (
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Solo Kills</span>
                    <span className="text-rat font-bold">{player.soloKills}</span>
                  </div>
                )}
                {player.csPerMin && (
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">CS Per Min</span>
                    <span className="text-rat font-bold">{player.csPerMin}</span>
                  </div>
                )}
                {player.pentaKills && (
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Penta Kills</span>
                    <span className="text-rat font-bold">{player.pentaKills}</span>
                  </div>
                )}
                {player.visionScore && (
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Vision Score</span>
                    <span className="text-rat font-bold">{player.visionScore}</span>
                  </div>
                )}
                {player.roamingScore && (
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Roaming Score</span>
                    <span className="text-rat font-bold">{player.roamingScore}</span>
                  </div>
                )}
                {player.objectives && (
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Objectives</span>
                    <span className="text-rat font-bold">{player.objectives}</span>
                  </div>
                )}
                {player.ganksPreTen && (
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Ganks Before 10 Min</span>
                    <span className="text-rat font-bold">{player.ganksPreTen}</span>
                  </div>
                )}
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
