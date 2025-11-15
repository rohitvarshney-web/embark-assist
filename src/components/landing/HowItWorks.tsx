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

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <video 
            className="h-auto w-full origin-center rounded-2xl object-cover transition-transform scale-100 shadow-xl" 
            src="https://stampmyvisa-public.s3.ap-south-1.amazonaws.com/important-docs/vid+1.mp4" 
            playsInline 
            loop 
            autoPlay
            muted
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                    {item.step}
                  </div>
                  
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Hover arrow */}
                  <div className="mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
