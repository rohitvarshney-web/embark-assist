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
    <section className="py-20 px-8 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple, fast, and hassle-free visa processing
          </p>
        </motion.div>

        {/* Video and Steps Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <video 
              className="h-auto w-full origin-center rounded-2xl object-cover shadow-xl" 
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
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                >
                  <div className="relative bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex gap-4 items-start">
                      {/* Icon with step number */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                          {item.step}
                        </div>
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
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
