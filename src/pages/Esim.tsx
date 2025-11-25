import { motion } from "framer-motion";
import { Wifi, Globe, CreditCard, Clock, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsSection } from "@/components/landing/StatsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import { FloatingCTA } from "@/components/landing/FloatingCTA";
import { NavLink } from "@/components/NavLink";

export default function Esim() {
  const features = [
    {
      icon: Globe,
      title: "Global Coverage",
      desc: "Stay connected in 150+ countries with reliable data plans",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Instant Activation",
      desc: "Get your eSIM activated within minutes of purchase",
      color: "text-green-500"
    },
    {
      icon: CreditCard,
      title: "Transparent Pricing",
      desc: "No hidden fees, no bill shocks - pay only for what you use",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Secure Connection",
      desc: "Bank-grade encryption keeps your data safe while traveling",
      color: "text-orange-500"
    },
    {
      icon: Smartphone,
      title: "Easy Setup",
      desc: "Simple QR code installation - no physical SIM card needed",
      color: "text-pink-500"
    },
    {
      icon: Wifi,
      title: "High-Speed Data",
      desc: "Access 4G/5G networks for fast, reliable internet everywhere",
      color: "text-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">S</span>
            </motion.div>
            <span className="font-bold text-lg">StampMyVisa</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/awareness">Awareness</NavLink>
            <NavLink to="/consideration">Consideration</NavLink>
            <NavLink to="/conversion">Conversion</NavLink>
            <NavLink to="/esim">eSIM</NavLink>
            <NavLink to="/insurance">Insurance</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://stampmyvisa.com/auth/login">Login</a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://stampmyvisa.com/auth/sign-up">Sign Up</a>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
                Global Connectivity Made Simple
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Stay Connected Anywhere
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                with Travel eSIM
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Ditch expensive roaming charges. Get instant data plans for 150+ countries with our travel eSIM solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Our eSIM?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience seamless connectivity with features designed for modern travelers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} from-primary/10 to-primary/5 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Connected in 3 Simple Steps
            </h2>
            <p className="text-muted-foreground text-lg">
              Start using your eSIM in minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Choose Your Plan", desc: "Select a data plan for your destination country" },
              { step: "2", title: "Scan QR Code", desc: "Install your eSIM by scanning the QR code" },
              { step: "3", title: "Stay Connected", desc: "Activate and enjoy high-speed data anywhere" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Compatible with All Major Devices
            </h2>
            <p className="text-muted-foreground text-lg">
              Works seamlessly with iPhone, Samsung, Google Pixel, and more
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "iPhone", models: "iPhone XS and newer", compatible: true },
              { name: "Samsung", models: "Galaxy S20 and newer", compatible: true },
              { name: "Google Pixel", models: "Pixel 3 and newer", compatible: true },
              { name: "Other Brands", models: "Most eSIM-capable devices", compatible: true }
            ].map((device, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{device.name}</h3>
                <p className="text-sm text-muted-foreground">{device.models}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Popular Travel Destinations
            </h2>
            <p className="text-muted-foreground text-lg">
              Trusted coverage in the world's most visited locations
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { region: "Europe", countries: "40+ countries", speed: "4G/5G" },
              { region: "Asia Pacific", countries: "35+ countries", speed: "4G/5G" },
              { region: "Americas", countries: "25+ countries", speed: "4G/5G" },
              { region: "Middle East & Africa", countries: "50+ countries", speed: "4G/5G" }
            ].map((destination, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6"
              >
                <Globe className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">{destination.region}</h3>
                <p className="text-sm text-muted-foreground mb-1">{destination.countries}</p>
                <p className="text-xs text-primary font-medium">{destination.speed} Available</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Travel Smart?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get your eSIM today and stay connected wherever your journey takes you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://stampmyvisa.com/auth/sign-up">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://calendly.com/b2b-support-stampmyvisa/demo">Request Demo</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}
