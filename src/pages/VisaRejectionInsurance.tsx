import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, FileText, Clock, CheckCircle, AlertCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import { FloatingCTA } from "@/components/landing/FloatingCTA";
import { NavLink } from "@/components/NavLink";
import { DestinationsShowcase } from "@/components/landing/DestinationsShowcase";
import destinationsBg from "@/assets/backgrounds/destinations-insurance.jpg";

export default function VisaRejectionInsurance() {
  const features = [
    {
      icon: Shield,
      title: "Financial Protection",
      desc: "Cover visa fees up to USD 6,250 if your visa is denied through no fault of yours",
      color: "text-blue-500",
    },
    {
      icon: FileText,
      title: "Simple Documentation",
      desc: "Easy claim submission process with clear document requirements",
      color: "text-purple-500",
    },
    {
      icon: Clock,
      title: "Quick Processing",
      desc: "Claims settled within 15 working days of complete document submission",
      color: "text-green-500",
    },
    {
      icon: CheckCircle,
      title: "Wide Coverage",
      desc: "Protection against legitimate visa denials including unclear intent, unconvincing itinerary",
      color: "text-orange-500",
    },
    {
      icon: AlertCircle,
      title: "Transparent Terms",
      desc: "Clear coverage terms - know exactly what's covered and what's not",
      color: "text-red-500",
    },
    {
      icon: Phone,
      title: "Dedicated Support",
      desc: "Expert claim assistance via phone, email, and WhatsApp",
      color: "text-cyan-500",
    },
  ];

  const pricingOptions = [
    {
      name: "Option 1",
      emergency: "USD 1,000",
      tripCancellation: "USD 250",
      priceExcl: "₹450",
      priceIncl: "₹531",
      popular: false,
    },
    {
      name: "Option 2",
      emergency: "USD 1,000",
      tripCancellation: "USD 100",
      priceExcl: "₹212",
      priceIncl: "₹250",
      popular: true,
    },
  ];

  const comprehensivePlan = {
    emergency: "USD 1,000",
    tripCancellation: "USD 6,250",
    tripCancellationInr: "₹5,50,000",
    priceExcl: "₹2,250",
    priceIncl: "₹2,655",
  };

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
            <NavLink to="/visa-rejection-insurance">Visa Rejection</NavLink>
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
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
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
              className="inline-block mb-4 md:mb-6"
            >
              <div className="bg-primary/10 text-primary px-4 md:px-6 py-2 rounded-full text-sm font-medium">
                Protect Your Visa Application
              </div>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent px-4">
              Visa Rejection Insurance
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Peace of Mind for Your Journey
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Get financial protection if your visa is denied. Cover visa fees up to USD 6,250 and trip cancellation
              costs with our comprehensive insurance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Why Choose Our Visa Rejection Insurance?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              Comprehensive coverage designed to protect your investment in your travel dreams
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
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4`}
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

      {/* Pricing Options */}
      <section className="py-12 md:py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Flexible Pricing Options</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              Choose the coverage that fits your needs and budget
            </p>
          </motion.div>

          {/* Standard Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {pricingOptions.map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-card/50 backdrop-blur-sm border ${
                  option.popular ? "border-primary" : "border-border/50"
                } rounded-2xl p-6 md:p-8 relative`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="font-bold text-xl md:text-2xl mb-6 text-center">{option.name}</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">Emergency Hospitalization</span>
                    <span className="font-semibold">{option.emergency}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">Trip Cancellation (Visa Denial)</span>
                    <span className="font-semibold">{option.tripCancellation}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">Price (Excl GST)</span>
                    <span className="font-semibold">{option.priceExcl}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Price (Incl GST)</span>
                    <span className="font-bold text-lg text-primary">{option.priceIncl}</span>
                  </div>
                </div>
                <Button className="w-full" size="lg" variant={option.popular ? "default" : "outline"} asChild>
                  <a href="https://stampmyvisa.com/home/insure">Get {option.name}</a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Comprehensive Plan */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-background border-2 border-primary/50 rounded-2xl p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-3">
                  Premium Coverage
                </div>
                <h3 className="font-bold text-2xl md:text-3xl mb-2">Comprehensive Protection Plan</h3>
                <p className="text-muted-foreground">Maximum coverage for complete peace of mind</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div className="bg-background/50 rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">Emergency Hospitalization</div>
                  <div className="font-bold text-lg">{comprehensivePlan.emergency}</div>
                </div>
                <div className="bg-background/50 rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">Trip Cancellation (Visa Denial)</div>
                  <div className="font-bold text-lg">{comprehensivePlan.tripCancellation}</div>
                  <div className="text-xs text-muted-foreground">({comprehensivePlan.tripCancellationInr})</div>
                </div>
                <div className="bg-background/50 rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">Price (Excl GST)</div>
                  <div className="font-semibold text-lg">{comprehensivePlan.priceExcl}</div>
                </div>
                <div className="bg-background/50 rounded-xl p-4">
                  <div className="text-sm font-medium mb-1">Price (Incl GST)</div>
                  <div className="font-bold text-2xl text-primary">{comprehensivePlan.priceIncl}</div>
                </div>
              </div>
              <Button className="w-full" size="lg" asChild>
                <a href="https://stampmyvisa.com/home/insure">Get Comprehensive Coverage</a>
              </Button>
            </div>
          </motion.div>

          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>Age Band: 1 Day – 80 years</p>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Coverage Details</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              Understanding what's covered and what's not
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <h3 className="font-bold text-xl md:text-2xl">What's Covered</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Unclear intention to return to India (subject to documentation review)",
                  "Unconvincing travel itinerary (case-by-case basis)",
                  "Intent of stay not convincing (subject to review)",
                  "Legitimate visa denials with proper documentation",
                  "Emergency accidental hospitalization during travel",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-red-500" />
                <h3 className="font-bold text-xl md:text-2xl">What's Not Covered</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "False, misleading, or insufficient documentation",
                  "Lack of proof of sufficient means of subsistence",
                  "Inadequate travel insurance",
                  "Previous Schengen visa misuse or overstay",
                  "Inconsistent explanation during visa interview",
                  "Criminal record or security concerns",
                  "Incomplete or incorrect documentation",
                  "Delays in application submission",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-12 md:py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Simple Claims Process</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              File your claim easily and get settled within 15 working days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                step: "1",
                title: "Submit Claim",
                desc: "Contact via email, WhatsApp, or phone to initiate your claim",
              },
              {
                step: "2",
                title: "Provide Documents",
                desc: "Submit visa rejection letter, passport, and payment proofs",
              },
              {
                step: "3",
                title: "Review Process",
                desc: "Insurer reviews your documentation within working days",
              },
              {
                step: "4",
                title: "Get Settlement",
                desc: "Receive claim amount within 15 working days of approval",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-white font-bold text-lg md:text-xl">
                  {item.step}
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
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
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Protect Your Visa Application Today
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 px-4">
              Don't let visa rejection risks stop your travel dreams. Get comprehensive coverage in minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://stampmyvisa.com/home/insure">Get Insurance Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:support.myavio@bimaplan.co">Contact Support</a>
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
