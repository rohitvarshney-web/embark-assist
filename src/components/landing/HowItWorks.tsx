import { motion } from "framer-motion";
import { Globe, FileText, Plane } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Choose Your Visa",
    desc: "Select from Schengen, USA, Malaysia, and 40+ more countries",
    icon: Globe,
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    step: "02",
    title: "Submit Documents",
    desc: "Upload required documents through our guided checklist",
    icon: FileText,
    color: "from-purple-500/10 to-purple-500/5",
  },
  {
    step: "03",
    title: "Track & Receive",
    desc: "Real-time tracking and doorstep delivery of your visa",
    icon: Plane,
    color: "from-green-500/10 to-green-500/5",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-8 bg-background relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-3"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Simple, fast, and hassle-free visa processing
          </motion.p>
        </motion.div>

        {/* Video and Steps Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <video 
              className="relative h-auto w-full origin-center rounded-2xl object-cover shadow-2xl" 
              src="https://stampmyvisa-public.s3.ap-south-1.amazonaws.com/important-docs/vid+1.mp4" 
              playsInline 
              loop 
              autoPlay
              muted
            />
          </motion.div>

          {/* Steps - Vertical Layout */}
          <div className="space-y-6">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <motion.div 
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="relative bg-card border border-border rounded-xl p-6 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex gap-4 items-start">
                      {/* Icon with step number */}
                      <div className="relative flex-shrink-0">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                        >
                          <Icon className="w-7 h-7 text-primary" />
                        </motion.div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.15 + 0.3, type: "spring", stiffness: 500, damping: 15 }}
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-lg"
                        >
                          {item.step}
                        </motion.div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
