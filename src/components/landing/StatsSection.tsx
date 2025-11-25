import { motion } from "framer-motion";
import makemytripLogo from "@/assets/brands/makemytrip.svg";
import travclanLogo from "@/assets/brands/travclan.svg";
import easemytripLogo from "@/assets/brands/easemytrip.svg";
import pickyourtrailLogo from "@/assets/brands/pickyourtrail.svg";

const stats = [
  { label: "Visas Processed Successfully", value: "500K+", trend: "+23% this month" },
  { label: "Travel Partners", value: "5000+", trend: "Growing daily" },
  { label: "Visa Approval Rate", value: "99.3%", trend: "Industry leading" },
  { label: "Countries Covered", value: "80+", trend: "Expanding" },
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

        {/* Horizontal scrolling logos */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex items-center gap-12 md:gap-16"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-12 md:gap-16 shrink-0">
                <img src={makemytripLogo} alt="MakeMyTrip" className="h-8 md:h-10 opacity-40 grayscale" />
                <img src={travclanLogo} alt="TravClan" className="h-8 md:h-10 opacity-40 grayscale" />
                <img src={easemytripLogo} alt="EaseMyTrip" className="h-8 md:h-10 opacity-40 grayscale" />
                <img src={pickyourtrailLogo} alt="pickyourtrail" className="h-8 md:h-10 opacity-40 grayscale" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
