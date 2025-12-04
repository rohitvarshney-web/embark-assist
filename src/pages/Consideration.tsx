import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  DollarSign,
  Upload,
  CheckCircle,
  User,
  BarChart,
  Bell,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  HelpCircle,
} from "lucide-react";
import { FAQSection } from "@/components/landing/FAQSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/landing/Footer";
import { StatsSection } from "@/components/landing/StatsSection";
import { DestinationsShowcase } from "@/components/landing/DestinationsShowcase";
import destinationsBg from "@/assets/backgrounds/destinations-consideration.jpg";

const Consideration = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://ik.imagekit.io/9pjdbdyeq/StampMyVisa%20Brand%20Assets/Logo/Logo-Dark/Logo-Dark.svg?updatedAt=1754036741863"
              alt="StampMyVisa Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-foreground">StampMyVisa</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-in")}
            >
              Login
            </Button>
            <Button size="sm" onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-100/30 to-background" />
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              <span className="text-foreground">Quit juggling </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                  spreadsheets & emails
                </span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 rounded" />
              </span>
              <br />
              <span className="text-foreground">when you could be </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                  closing deals
                </span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-400/30 -z-10 rounded" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Everything your travel agency needs to process visas faster, safer, and more profitably.
            </p>

            {/* Hero CTA */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="gap-2 text-lg px-8"
                  onClick={() => (window.location.href = "https://calendly.com/b2b-support-stampmyvisa/demo")}
                >
                  Book a Demo <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
                >
                  Sign Up Free
                </Button>
              </div>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Set up in 15 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Best Prices</h3>
              <p className="text-sm text-muted-foreground">Competitive rates for travel agents</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Bell className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Quick & Easy</h3>
              <p className="text-sm text-muted-foreground">Applications done in minutes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">100% Secure</h3>
              <p className="text-sm text-muted-foreground">Bank-level data protection</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Expert Support</h3>
              <p className="text-sm text-muted-foreground">Dedicated team always ready</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Trusted Partners */}
      <StatsSection />

      {/* The Smarter Way to Run Your Visa Desk */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">The Smarter Way to Run Your Visa Desk</h2>
          </motion.div>

          <div className="space-y-24">
            {/* Feature 1: Get Accurate Visa Quotes in Seconds */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">Instant Pricing</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Get Accurate Visa Quotes in Seconds</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stop losing clients to competitors who respond faster. Quote any visa instantly with real-time pricing
                  for 180+ countries.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Real-time embassy fees and service charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Custom pricing tiers for your agency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Professional quotes generated in seconds</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    backgroundImage: `url(${destinationsBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Destination: France (Schengen)</span>
                      <Search className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Visa Type: Tourist</span>
                    </div>
                    <div className="border-t border-border pt-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Embassy Fee</span>
                        <span className="font-medium">₹7,500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Service Charge</span>
                        <span className="font-medium">₹2,500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">VFS Fee</span>
                        <span className="font-medium">₹2,200</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold pt-3 border-t border-border">
                        <span>Total</span>
                        <span className="text-primary">₹12,200</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Send Quote to Client</Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Upload Documents with Zero Confusion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative order-2 md:order-1">
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    backgroundImage: `url(${destinationsBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                  <h4 className="font-bold text-lg mb-4">Document Checklist</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium">Passport (colored scan)</span>
                      </div>
                      <span className="text-xs text-green-600 font-medium">Uploaded</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium">Photo (35x45mm, white bg)</span>
                      </div>
                      <span className="text-xs text-green-600 font-medium">Uploaded</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Upload className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-medium">Bank statement (6 months)</span>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        Upload
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg opacity-50">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                        <span className="text-sm font-medium">Flight booking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">Guided Uploads</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Upload Documents with Zero Confusion</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No more missing documents or format errors. Clients see exactly what to upload with clear guidelines.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Country-specific checklists auto-generated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Format specs shown for every document</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Direct upload portal - no email chaos</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Feature 3: Reduce Rejection Risk With Pro-standard Review */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">Expert QA</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Reduce Rejection Risk With Pro-standard Review
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every application reviewed by trained visa specialists before submission. Catch errors before
                  embassies do.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Document format & completeness verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Common error detection (dates, signatures, specs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">85% reduction in document-related rejections</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    backgroundImage: `url(${destinationsBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-green-200 dark:border-green-800">
                  <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-t-2xl border-b border-green-200 dark:border-green-800">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-green-700 dark:text-green-400">QA Complete</h4>
                      <CheckCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Application #SMV-45892</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">All documents present</p>
                        <p className="text-xs text-muted-foreground">12/12 items verified</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Format compliance</p>
                        <p className="text-xs text-muted-foreground">Photo specs, file sizes OK</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Information accuracy</p>
                        <p className="text-xs text-muted-foreground">Dates, names match passport</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-2">Reviewed by:</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Priya Sharma</p>
                          <p className="text-xs text-muted-foreground">Schengen Specialist</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Ready for Submission
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 4: Human Support Whenever Your Team Needs It */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative order-2 md:order-1">
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    backgroundImage: `url(${destinationsBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Your Dedicated Manager</h4>
                  <p className="text-muted-foreground mb-6">Always one call away</p>
                  <div className="space-y-3">
                    <Button className="w-full gap-2">
                      <Users className="w-4 h-4" />
                      Schedule Call
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Bell className="w-4 h-4" />
                      WhatsApp Support
                    </Button>
                  </div>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground italic">
                      "Our RM helped us process 50 group visas during peak season without issues."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Travel agency, Mumbai</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">Dedicated Support</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Human Support Whenever Your Team Needs It
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Not just software support. A real visa expert who knows your agency and helps when it matters most.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Personal point of contact for urgent cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">WhatsApp support during business hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Help with complex visa situations</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* How StampMyVisa Streamlines Your Entire Visa Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
              How StampMyVisa Streamlines
              <br />
              Your Entire Visa Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Instant Quotes</h4>
                  <p className="text-muted-foreground">
                    Real-time pricing for 180+ countries. No more "let me get back to you" delays.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Guided Document Collection</h4>
                  <p className="text-muted-foreground">
                    Country-specific checklists. Clients upload directly - no email chaos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Expert Quality Assurance</h4>
                  <p className="text-muted-foreground">
                    Every application reviewed by visa specialists before submission.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Real-Time Tracking</h4>
                  <p className="text-muted-foreground">
                    Live updates from submission to approval. Keep clients informed automatically.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Dedicated Support</h4>
                  <p className="text-muted-foreground">
                    Personal relationship manager for your agency. Human backup when needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Latest Requirements</h4>
                  <p className="text-muted-foreground">
                    Embassy updates monitored daily. Always submit with current rules.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* We've Solved the Concerns Most Agencies Struggle With */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
              We've Solved the Concerns<br />Most Agencies Struggle With
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">"What if visa rules change suddenly?"</h4>
                      <p className="text-muted-foreground">
                        Our team monitors embassy updates daily. When rules change, your portal updates automatically — and we notify you immediately. You'll never submit outdated applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">"Can it handle group visas (20-30 people)?"</h4>
                      <p className="text-muted-foreground">
                        Yes. Bulk upload features let clients submit multiple applications at once. Your team reviews in batch. Perfect for corporate groups, tours, or wedding parties.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">"What if a visa still gets rejected?"</h4>
                      <p className="text-muted-foreground">
                        Our expert QA catches 85% of issues before submission. For the rest, we offer optional Visa Rejection Insurance — clients get full refunds if rejected. Zero risk for you or them.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Complete Workflow, Simplified</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From order creation to visa approval — see exactly how it works
            </p>
          </motion.div>

          <div className="grid md:grid-cols-6 gap-6">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">1. Search</h4>
              <p className="text-sm text-muted-foreground">Search the country you want to apply visa for</p>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">2. Upload</h4>
              <p className="text-sm text-muted-foreground">Upload all the required documents</p>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">3. Payment</h4>
              <p className="text-sm text-muted-foreground">
                Make the payment using credit/debit card, UPI or Net Banking
              </p>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>

          <div className="grid md:grid-cols-6 gap-6 mt-6">
            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-primary" />
                {/* <Shield className="w-8 h-8 text-primary" /> */}
              </div>
              <h4 className="font-bold text-foreground mb-2">4. Track</h4>
              <p className="text-sm text-muted-foreground">Real-time updates</p>
            </motion.div>

            {/* Arrow */}
            {/* <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div> */}

            {/* Step 5 */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">5. Submit</h4>
              <p className="text-sm text-muted-foreground">Sent to embassy</p>
            </motion.div> */}

            {/* Arrow */}
            {/* <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div> */}

            {/* Step 6 */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">4. Track</h4>
              <p className="text-sm text-muted-foreground">Real-time updates</p>
            </motion.div> */}

            {/* Placeholder for symmetry */}
            <div className="hidden md:block"></div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <Card className="inline-block max-w-2xl">
              <CardContent className="pt-6">
                <p className="text-lg font-semibold text-foreground mb-2">Average time from inquiry to submission:</p>
                <p className="text-4xl font-bold text-primary">2 hours</p>
                <p className="text-sm text-muted-foreground mt-2">vs. 2-3 days manually</p>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </section>

      {/* Social Proof & Case Studies */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Top Travel Agencies</h2>
            <p className="text-lg text-muted-foreground">Real results from agencies like yours</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base">
                    "Processed 180 visas during Diwali season without a single rejection. StampMyVisa saved us."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">Rajesh Kumar</p>
                  <p className="text-sm text-muted-foreground">Travel World, Delhi</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base">
                    "Cut our visa processing time by 70%. Clients love how professional it looks."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">Priya Mehta</p>
                  <p className="text-sm text-muted-foreground">Dream Holidays, Mumbai</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base">
                    "The RM support is incredible. Always there when we have urgent cases."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">Amit Patel</p>
                  <p className="text-sm text-muted-foreground">Globe Trotters, Bangalore</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Case Study Highlight */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">Peak Season Success Story</CardTitle>
                </div>
                <CardDescription className="text-base">
                  How a Mumbai agency handled their busiest December ever
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">250+</div>
                    <div className="text-sm text-muted-foreground">Visas processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.6%</div>
                    <div className="text-sm text-muted-foreground">Approval rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                    <div className="text-sm text-muted-foreground">Overtime hours</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Before StampMyVisa, December meant chaos. Staff working 12-hour days, clients calling constantly,
                  errors everywhere. This year? Smooth sailing. The guided upload portal meant clients knew exactly what
                  to do. Expert QA caught every issue. We actually closed more deals because we weren't buried in
                  paperwork."
                </p>
                <p className="font-semibold text-foreground">— Neha Singh, Wanderlust Travel</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <DestinationsShowcase backgroundImage={destinationsBg} />

      {/* FAQs Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Visa Service?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See StampMyVisa in action. Book a personalized demo or start your free trial today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => (window.location.href = "https://calendly.com/b2b-support-stampmyvisa/demo")}
              >
                Request Demo <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
              >
                Get Started
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Setup in 15 minutes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Consideration;
