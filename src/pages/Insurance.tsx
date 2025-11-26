import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Heart, Plane, Clock, FileText, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsSection } from "@/components/landing/StatsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import { FloatingCTA } from "@/components/landing/FloatingCTA";
import { NavLink } from "@/components/NavLink";
import { DestinationsShowcase } from "@/components/landing/DestinationsShowcase";
import destinationsBg from "@/assets/backgrounds/destinations-insurance.jpg";

export default function Insurance() {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      desc: "Medical emergencies, trip cancellations, lost baggage & more",
      color: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Medical Protection",
      desc: "Up to $500K medical coverage for overseas emergencies",
      color: "text-red-500",
    },
    {
      icon: Plane,
      title: "Trip Coverage",
      desc: "Protection against flight delays, cancellations & interruptions",
      color: "text-purple-500",
    },
    {
      icon: Clock,
      title: "Instant Issuance",
      desc: "Get your policy certificate within minutes of purchase",
      color: "text-green-500",
    },
    {
      icon: FileText,
      title: "Easy Claims",
      desc: "Simplified claim process with dedicated support team",
      color: "text-orange-500",
    },
    {
      icon: Headphones,
      title: "24/7 Assistance",
      desc: "Round-the-clock emergency assistance wherever you are",
      color: "text-cyan-500",
    },
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
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://ik.imagekit.io/9pjdbdyeq/StampMyVisa%20Brand%20Assets/Logo/Logo-Dark/Logo-Dark.svg?updatedAt=1754036741863"
              alt="StampMyVisa Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-foreground">StampMyVisa</span>
          </Link>

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
                Travel with Peace of Mind
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Comprehensive Protection
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                for Every Journey
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Travel confidently with comprehensive insurance coverage. From medical emergencies to trip cancellations,
              we've got you covered.
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Complete Travel Protection</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to travel worry-free, all in one comprehensive policy
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
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} from-primary/10 to-primary/5 flex items-center justify-center mb-4`}
                  >
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

      {/* Coverage Details */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What's Covered?</h2>
            <p className="text-muted-foreground text-lg">Comprehensive protection for all aspects of your travel</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Medical Emergencies",
                items: ["Emergency medical treatment", "Hospital stays", "Emergency dental care", "Medical evacuation"],
              },
              {
                title: "Trip Disruptions",
                items: ["Trip cancellations", "Flight delays", "Missed connections", "Trip interruptions"],
              },
              {
                title: "Personal Belongings",
                items: ["Lost baggage", "Stolen items", "Damaged luggage", "Travel documents"],
              },
              {
                title: "Additional Benefits",
                items: ["Personal liability", "Legal assistance", "Emergency cash", "Concierge services"],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Scenarios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real Situations, Real Protection</h2>
            <p className="text-muted-foreground text-lg">See how our insurance helps travelers like you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                scenario: "Medical Emergency in Bali",
                coverage: "Hospital stay + evacuation",
                amount: "$45,000 covered",
                icon: Heart,
              },
              {
                scenario: "Flight Cancelled in London",
                coverage: "Hotel + rebooking costs",
                amount: "$2,500 covered",
                icon: Plane,
              },
              {
                scenario: "Lost Luggage in Paris",
                coverage: "Essential items + reimbursement",
                amount: "$3,000 covered",
                icon: Shield,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{item.scenario}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.coverage}</p>
                  <p className="text-primary font-semibold">{item.amount}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple Claims Process</h2>
            <p className="text-muted-foreground text-lg">
              Get your claims processed quickly with our dedicated support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Report Incident", desc: "Contact us 24/7 via app or phone" },
              { step: "2", title: "Submit Documents", desc: "Upload required documentation online" },
              { step: "3", title: "Quick Review", desc: "Expert team reviews within 48 hours" },
              { step: "4", title: "Get Reimbursed", desc: "Receive payment directly to your account" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <DestinationsShowcase backgroundImage={destinationsBg} />

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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Protect Your Journey Today</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Don't leave your travel plans to chance. Get comprehensive coverage in minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://stampmyvisa.com/home/insure">Get Insurance Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://stampmyvisa.com/home/insure/countries">Compare Plans</a>
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
