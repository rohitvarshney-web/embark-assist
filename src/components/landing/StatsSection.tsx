import { motion } from "framer-motion";

const stats = [
  { label: "Visa Applications", value: "50,000+", trend: "+23% this month" },
  { label: "Travel Partners", value: "10,000+", trend: "Growing daily" },
  { label: "Approval Rate", value: "99.3%", trend: "Industry leading" },
  { label: "Countries Covered", value: "45+", trend: "Expanding" },
];

export function StatsSection() {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Trusted by Leading Travel Partners</h2>
          <p className="text-muted-foreground text-lg">Join thousands of travel agents and planners who rely on us</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.trend}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-30 grayscale hover:opacity-50 transition-opacity duration-300">
          {["MakeMyTrip", "Yatra", "TravClan", "pickyourtrail", "EaseMyTrip"].map((brand) => (
            <div key={brand} className="text-xl md:text-2xl font-bold text-muted-foreground">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
