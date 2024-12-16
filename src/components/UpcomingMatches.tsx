import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

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
            Stay tuned for our upcoming matches
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-rat-dark/80 to-rat-dark/60 backdrop-blur-lg p-12 rounded-2xl border border-white/5">
            <Calendar className="w-16 h-16 text-rat mx-auto mb-6" />
            <h3 className="text-2xl font-heading text-white mb-4">No Upcoming Matches</h3>
            <p className="text-white/60">
              Our match schedule hasn't been announced yet. Check back soon for updates on our upcoming games!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};