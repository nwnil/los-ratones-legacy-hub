import { motion } from "framer-motion";
import { Trophy, Calendar, Users, History } from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "Team Formation",
    description: "Los Ratones was founded by Caedrel with a vision to compete in the Spanish Superliga.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Superliga Debut",
    description: "The team made its competitive debut in the Spanish Superliga.",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "Spring Split",
    description: "Competing in Superliga 2024 Spring Split with a strong roster.",
    icon: Trophy,
  },
];

export const TeamHistory = () => {
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
            Our Journey
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From humble beginnings to LEC contenders - the story of Los Ratones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rat/20" />

          {/* Timeline items */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12" : "pl-12"
                    } flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                  >
                    <div className="bg-gradient-to-b from-rat-dark/80 to-rat-dark/60 backdrop-blur-lg p-6 rounded-xl border border-white/5 hover:border-rat/20 transition-colors max-w-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <Icon className="w-6 h-6 text-rat" />
                        <span className="text-rat font-heading text-xl">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-white/80">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rat rounded-full border-4 border-rat-dark" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};