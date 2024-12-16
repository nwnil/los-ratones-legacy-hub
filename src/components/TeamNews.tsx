import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const achievements = [
  {
    title: "Los Ratones: The Rat King's Gambit",
    description: "Caedrel's new team is ready to take over the LEC",
    date: "March 26, 2024",
    type: "news",
    link: "https://substack.com/@rigas/p-152752289"
  }
];

export const TeamNews = () => {
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
            Latest News & Achievements
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Stay updated with Los Ratones' journey through the LEC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-b from-rat-light to-rat-dark rounded-xl overflow-hidden border border-white/5 hover:border-rat/20 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Newspaper className="w-5 h-5 text-rat" />
                  <span className="text-white/60 text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-rat mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 mb-4">{item.description}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-rat hover:text-white transition-colors"
                >
                  Read Article
                </a>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-rat opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};