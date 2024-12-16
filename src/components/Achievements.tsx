import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal } from "lucide-react";

const achievements = [
  {
    title: "Superliga 2024 Spring",
    description: "Currently competing",
    icon: Trophy,
    date: "March 2024"
  },
  {
    title: "Iberian Cup 2023",
    description: "Top 4",
    icon: Medal,
    date: "December 2023"
  },
  {
    title: "Spanish Regional League",
    description: "Qualified",
    icon: Star,
    date: "October 2023"
  },
  {
    title: "Team Formation",
    description: "Founded by Caedrel",
    icon: Award,
    date: "October 2023"
  }
];

export const Achievements = () => {
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
            Our journey in competitive League of Legends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-b from-rat-light/50 to-rat-dark/50 rounded-xl p-6 backdrop-blur-sm border border-white/5 hover:border-rat/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <achievement.icon className="w-12 h-12 text-rat" />
              </div>
              <h3 className="text-xl font-heading font-bold text-rat mb-2 text-center">
                {achievement.title}
              </h3>
              <p className="text-white/80 text-center mb-2">
                {achievement.description}
              </p>
              <p className="text-white/60 text-sm text-center">
                {achievement.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};