import { Calendar, Clock, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { matches } from "@/utils/matchData";
import { format } from "date-fns";

export const UpcomingMatches = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-rat-light to-rat-dark relative overflow-hidden">
      {/* Background pattern */}
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
            Upcoming Matches
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Don't miss our next battles in the Superliga Spring Split 2024
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {matches.map((match, index) => {
            const matchDate = new Date(match.begin_at);
            return (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gradient-to-r from-rat-dark/80 to-rat-dark/60 backdrop-blur-lg p-6 rounded-2xl border border-white/5 hover:border-rat/20 transition-colors"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <Trophy className="w-5 h-5 text-rat" />
                      <span className="text-white/60">{match.serie.full_name}</span>
                    </div>
                    <h3 className="text-rat text-2xl font-heading mb-3">
                      vs {match.opponents[0].opponent.name}
                    </h3>
                    <div className="flex items-center gap-6">
                      <p className="text-white flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-rat" />
                        {format(matchDate, 'MMMM dd, yyyy')}
                      </p>
                      <p className="text-white flex items-center gap-2">
                        <Clock className="w-4 h-4 text-rat" />
                        {format(matchDate, 'HH:mm')} CET
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-6">
                    <button className="bg-rat hover:bg-rat/90 text-rat-dark font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                      Add to Calendar
                      <Calendar className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-rat opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};