import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { getAchievements } from "@/utils/dataLoader";

export const Achievements = () => {
  const achievements = getAchievements();

  return (
    <section className="py-32 bg-gradient-to-b from-rat-dark to-rat-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading font-bold text-rat mb-4">
            Team Achievements
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our journey since November 15, 2024
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-white/60 font-medium">Date</th>
                <th className="text-left py-4 px-4 text-white/60 font-medium">Place</th>
                <th className="text-left py-4 px-4 text-white/60 font-medium">Tier</th>
                <th className="text-left py-4 px-4 text-white/60 font-medium">Tournament</th>
                <th className="text-right py-4 px-4 text-white/60 font-medium">Result</th>
                <th className="text-right py-4 px-4 text-white/60 font-medium">Prize</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((achievement, index) => (
                <motion.tr
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/5"
                >
                  <td className="py-4 px-4 text-white">{achievement.date}</td>
                  <td className="py-4 px-4">
                    <span className="bg-rat text-black px-3 py-1 rounded font-medium">
                      1st
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white">{achievement.tier}</td>
                  <td className="py-4 px-4 text-rat flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    {achievement.title}
                  </td>
                  <td className="py-4 px-4 text-right text-white">3 : 1</td>
                  <td className="py-4 px-4 text-right text-white">{achievement.prize}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};