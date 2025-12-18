import { motion } from "framer-motion";
import { Shield, FileText, Clock, CheckCircle, AlertCircle, Phone, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { DestinationsShowcase } from "@/components/landing/DestinationsShowcase";
import { PageLayout } from "@/components/layout";
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
    <PageLayout showNavigation={false}>

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

      {/* How to Opt for VRI */}
      <section className="py-12 md:py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              How to Add Visa Rejection Insurance
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              Simply toggle the option during your visa application to get instant protection
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 mb-8"
            >
              <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <ToggleRight className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl">Easy Opt-In Process</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">1</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Start Your Visa Application</p>
                        <p className="text-sm text-muted-foreground">Begin your visa application on StampMyVisa</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">2</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Toggle VRI During Application</p>
                        <p className="text-sm text-muted-foreground">Enable the Visa Rejection Insurance option in the application form</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">3</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Instant Protection</p>
                        <p className="text-sm text-muted-foreground">Coverage is added automatically to your visa application</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="order-first md:order-last overflow-hidden">
                  <video
                    src="https://ik.imagekit.io/9pjdbdyeq/Website%20Images/27.11.2025_16.37.58_REC.mp4"
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full rounded-xl shadow-2xl border border-border/50"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20 rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-bold text-xl md:text-2xl mb-4 text-center">What You Get When You Opt In</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold mb-1">Fast Claim Approval</p>
                  <p className="text-xs text-muted-foreground">Quick processing and settlement</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="font-semibold mb-1">Covers Visa Fee</p>
                  <p className="text-xs text-muted-foreground">Get refunded for legitimate rejections</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Phone className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="font-semibold mb-1">Dedicated Support</p>
                  <p className="text-xs text-muted-foreground">WhatsApp support at 9004702232</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <DestinationsShowcase backgroundImage={destinationsBg} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />
    </PageLayout>
  );
}
