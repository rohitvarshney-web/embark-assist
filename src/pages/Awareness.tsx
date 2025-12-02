import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Clock,
  AlertTriangle,
  FileQuestion,
  CheckCircle,
  Download,
  Calendar,
  ArrowRight,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/landing/Footer";
import { StatsSection } from "@/components/landing/StatsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { DestinationsShowcase } from "@/components/landing/DestinationsShowcase";
import destinationsBg from "@/assets/backgrounds/destinations-awareness.jpg";

const Awareness = () => {
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
              onClick={() => window.location.href = "https://stampmyvisa.com/auth/sign-in"}
            >
              Login
            </Button>
            <Button 
              size="sm"
              onClick={() => window.location.href = "https://stampmyvisa.com/auth/sign-up"}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.1),transparent_50%)]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
              Still wasting hours on{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  visa paperwork
                </span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 rounded" />
              </span>
              <br />
              when you could be{" "}
              <span className="relative inline-block">
                <span className="relative z-10">selling more tours?</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-400/30 -z-10 rounded" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Travel agencies lose <span className="font-semibold text-foreground">thousands in revenue</span> every holiday season juggling visa applications.{" "}
              <span className="text-primary font-medium">There's a better way.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Trusted Partners */}
      <StatsSection />

      {/* Problem Deep Dive */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              The Hidden Cost of{" "}
              <span className="text-destructive">Manual Visa Processing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every holiday season brings the same nightmare for travel agencies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Problem 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-destructive/30 bg-gradient-to-br from-destructive/5 to-destructive/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-4">
                    <Clock className="w-9 h-9 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Holiday Chaos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    December-January rush overwhelms your team. 50+ visa applications pile up. Clients get anxious. Your staff works overtime.
                  </p>
                  <div className="mt-6 p-5 bg-background/80 backdrop-blur rounded-xl border border-destructive/20">
                    <div className="text-4xl font-bold text-destructive mb-1">40+ hours</div>
                    <div className="text-sm text-muted-foreground font-medium">wasted per week during peak season</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Problem 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-amber-500/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-9 h-9 text-amber-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Ever-Changing Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Visa requirements change without warning. Your team scrambles through government websites. One missed update = rejected application.
                  </p>
                  <div className="mt-6 p-5 bg-background/80 backdrop-blur rounded-xl border border-amber-500/20">
                    <div className="text-4xl font-bold text-amber-500 mb-1">15%</div>
                    <div className="text-sm text-muted-foreground font-medium">rejection rate from outdated information</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Problem 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-500/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-4">
                    <FileQuestion className="w-9 h-9 text-red-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Rejection Fears</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Missing documents. Incorrect formats. Booking confirmations incomplete. Each rejection damages client trust and your reputation.
                  </p>
                  <div className="mt-6 p-5 bg-background/80 backdrop-blur rounded-xl border border-red-500/20">
                    <div className="text-4xl font-bold text-red-500 mb-1">₹25,000+</div>
                    <div className="text-sm text-muted-foreground font-medium">average loss per rejected group visa</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Real Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8 text-center"
          >
            <p className="text-lg text-muted-foreground mb-2">During peak season, this chaos means:</p>
            <p className="text-3xl font-bold text-foreground mb-4">
              Lost tours. Frustrated clients. Burned-out staff.
            </p>
            <p className="text-muted-foreground">
              And while you're drowning in paperwork, your competitors are closing deals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Soft Introduction to StampMyVisa */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary font-semibold mb-8 text-sm tracking-wide"
            >
              ✨ There's a Better Way
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-tight">
              Introducing Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Visa Desk in a Box
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed font-light">
              Imagine having an expert visa team working <span className="text-foreground font-semibold">24/7</span> for your agency — without the overhead, training headaches, or peak-season chaos.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              That's <span className="text-primary font-semibold">StampMyVisa</span>. Not just software.{" "}
              <span className="text-foreground font-medium">A complete visa processing system built specifically for travel agencies.</span>
            </p>
          </motion.div>

          {/* Visual Transformation */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-muted">
                <CardHeader>
                  <CardTitle className="text-xl text-muted-foreground">The Old Way</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                    <span className="text-muted-foreground">Manual document collection</span>
                  </div>
                  <div className="flex items-start gap-3 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                    <span className="text-muted-foreground">Hunting for requirement updates</span>
                  </div>
                  <div className="flex items-start gap-3 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                    <span className="text-muted-foreground">Back-and-forth with clients</span>
                  </div>
                  <div className="flex items-start gap-3 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                    <span className="text-muted-foreground">Praying nothing goes wrong</span>
                  </div>
                  <div className="flex items-start gap-3 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                    <span className="text-muted-foreground">Stressful submission process</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/50 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">The StampMyVisa Way</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-foreground">Automated document checklists</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-foreground">Always-updated requirements</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-foreground">Guided client upload portal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-foreground">Expert QA before submission</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-foreground">Real-time tracking & updates</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Snapshot */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What This Means for Your Agency
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 shadow-md">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">Clarity in One Click</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    No more hunting through government websites. See exactly what each client needs — <span className="text-foreground font-medium">instantly updated, clearly organized.</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-accent/5 to-background">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 shadow-md">
                    <Clock className="w-10 h-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">2-Minute Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Stop the endless back-and-forth. Clients upload documents directly. Your team reviews once. <span className="text-foreground font-medium">Done.</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 shadow-md">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">Expert QA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Sleep better knowing <span className="text-foreground font-medium">trained visa experts</span> double-check every application before submission.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft CTA - Lead Capture */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 border-2 border-primary/30 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Want to see how agencies are handling peak season better?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Download our free "Holiday Visa Rush Survival Checklist" — proven strategies from agencies processing 500+ visas monthly.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">5 document collection mistakes that cause rejections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Peak season workflow template</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Country-specific requirement updates</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ready to Transform Your Visa Process?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of agencies already handling peak season stress-free
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="gap-2"
                    onClick={() => window.location.href = "https://stampmyvisa.com/auth/sign-up"}
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => window.location.href = "https://stampmyvisa.com/auth/sign-in"}
                  >
                    Login to Your Account
                  </Button>
                </div>
              </div>
            </div>
            </div>
          </motion.div>

          {/* Alternative CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">Or join our next free webinar:</p>
            <Card className="inline-block">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <CardTitle className="text-lg">Surviving the Holiday Visa Rush</CardTitle>
                    <CardDescription>Next session: Dec 18, 3 PM IST</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="gap-2">
                  Reserve My Spot <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </section>

      {/* Destinations Showcase */}
      <DestinationsShowcase backgroundImage={destinationsBg} />

      {/* FAQs Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Visa Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of travel agencies who've streamlined their visa processing with StampMyVisa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2 text-lg px-8" 
                onClick={() => (window.location.href = "https://calendly.com/b2b-support-stampmyvisa/demo")}
              >
                Request Demo <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
              >
                Get Started
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              ✓ No credit card required ✓ Setup in 15 minutes ✓ Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Awareness;
