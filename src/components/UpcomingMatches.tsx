import { motion } from "framer-motion";
import { Trophy, Calendar, Users, History } from "lucide-react";

const previousMatches = [
  {
    date: "Sun 2024-12-15",
    event: "Red Bull League of Its Own 2024",
    round: "Showmatches",
    opponent: "T1",
    result: "Win",
    score: "1 - 0"
  },
  {
    date: "Sun 2024-12-08",
    event: "NNO Cup Season 2",
    round: "Finals",
    opponent: "5 Pigs 1 Team",
    result: "Win",
    score: "3 - 1"
  },
  {
    date: "Tue 2024-12-03",
    event: "NNO Cup Season 2",
    round: "Round 4",
    opponent: "French Flair",
    result: "Win",
    score: "3 - 0"
  },
  {
    date: "Fri 2024-11-29",
    event: "NNO Cup Season 2",
    round: "Round 2",
    opponent: "No Need Orga",
    result: "Win",
    score: "1 - 3"
  },
  {
    date: "Wed 2024-11-27",
    event: "NNO Cup Season 2",
    round: "Round 1",
    opponent: "Kiedyś Miałem Fun",
    result: "Win",
    score: "3 - 0"
  }
];

export const UpcomingMatches = () => {
  return (
    <section id="matches" className="py-32 bg-rat-dark relative overflow-hidden">
      {/* Background pattern */}
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
            Match History
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Check out our recent performance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-rat-dark/80 to-rat-dark/60 backdrop-blur-lg p-8 rounded-2xl border border-white/5">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-4 text-white/60 font-medium border-b border-white/10">Date</th>
                    <th className="text-left py-4 px-4 text-white/60 font-medium border-b border-white/10">Event</th>
                    <th className="text-left py-4 px-4 text-white/60 font-medium border-b border-white/10">Round</th>
                    <th className="text-left py-4 px-4 text-white/60 font-medium border-b border-white/10">Opponent</th>
                    <th className="text-center py-4 px-4 text-white/60 font-medium border-b border-white/10">Result</th>
                    <th className="text-center py-4 px-4 text-white/60 font-medium border-b border-white/10">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {previousMatches.map((match, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-b-0">
                      <td className="py-4 px-4 text-white">{match.date}</td>
                      <td className="py-4 px-4 text-rat">{match.event}</td>
                      <td className="py-4 px-4 text-white">{match.round}</td>
                      <td className="py-4 px-4 text-white">{match.opponent}</td>
                      <td className="py-4 px-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full ${
                          match.result === 'Win' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {match.result}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center text-white">{match.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};