import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const achievements = [
  {
    title: "Los Ratones: Caedrel vs 5 Pigs, 1 Team",
    description: "Caedrel's new team is ready to take over the LEC",
    date: "Dec 07, 2024",
    type: "news",
    link: "https://open.substack.com/pub/rigas/p/los-ratones-caedrel-vs-5-pigs-1-team?utm_campaign=post&utm_medium=web"
  }
];

export const TeamNews = () => {
  return (
    <section id="news" className="py-32 bg-gradient-to-b from-rat-dark to-rat-light relative overflow-hidden">
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
          <h2 className="text-5xl font-heading font-bold text-emerald-500 mb-4">
            Latest News & Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-b from-rat-light to-rat-dark rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Newspaper className="w-5 h-5 text-emerald-500" />
                  <span className="text-white/60 text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-emerald-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 mb-4">{item.description}</p>
                <span className="inline-block text-emerald-500 hover:text-white transition-colors">
                  Read Article
                </span>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-emerald-500 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};