import { motion } from "framer-motion";
import { Zap, Lock, Smartphone, MessageCircle, BarChart3, DollarSign } from "lucide-react";

const features = [
  { 
    icon: Zap, 
    title: "Fast Processing", 
    desc: "Priority handling for urgent applications",
    color: "text-yellow-500"
  },
  { 
    icon: Lock, 
    title: "Secure Platform", 
    desc: "Bank-grade encryption for your documents",
    color: "text-green-500"
  },
  { 
    icon: Smartphone, 
    title: "Mobile Friendly", 
    desc: "Manage applications on the go",
    color: "text-blue-500"
  },
  { 
    icon: MessageCircle, 
    title: "24/7 Support", 
    desc: "Expert assistance whenever you need",
    color: "text-purple-500"
  },
  { 
    icon: BarChart3, 
    title: "Real-time Tracking", 
    desc: "Monitor your application status live",
    color: "text-orange-500"
  },
  { 
    icon: DollarSign, 
    title: "Transparent Pricing", 
    desc: "No hidden fees, clear pricing structure",
    color: "text-emerald-500"
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 px-8 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive visa services for travel professionals
          </p>
        </motion.div>

        {/* Inverted Triangle Layout */}
        <div className="flex flex-col gap-6">
          {/* Top Row - 3 items */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.2 } 
                  }}
                  className="group"
                >
                  <div className="relative bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                    {/* Gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-2 text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Middle Row - 2 items */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
            {features.slice(3, 5).map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 3) * 0.08, duration: 0.5 }}
                  whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.2 } 
                  }}
                  className="group"
                >
                  <div className="relative bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                    {/* Gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-2 text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Row - 1 item */}
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto w-full">
            {features.slice(5, 6).map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx + 5}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 5) * 0.08, duration: 0.5 }}
                  whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.2 } 
                  }}
                  className="group"
                >
                  <div className="relative bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                    {/* Gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-2 text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.desc}
                      </p>
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
