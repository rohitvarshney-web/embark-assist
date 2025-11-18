import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/landing/Footer";

const Awareness = () => {
  const [email, setEmail] = useState("");

  const handleChecklistDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checklist download
    console.log("Download checklist for:", email);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src="https://ik.imagekit.io/9pjdbdyeq/StampMyVisa%20Brand%20Assets/Logo/Logo-Dark/Logo-Dark.svg?updatedAt=1754036741863"
              alt="StampMyVisa Logo"
              className="h-10 w-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <span className="font-bold text-xl text-foreground">StampMyVisa</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/awareness" className="text-sm text-foreground font-medium">
              Getting Started
            </Link>
            <Link to="/consideration" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/conversion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              For Agencies
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Still wasting hours on{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                visa paperwork
              </span>
              <br />
              when you could be selling more tours?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Travel agencies lose thousands in revenue every holiday season juggling visa applications. There's a better way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Deep Dive */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Hidden Cost of Manual Visa Processing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <Card className="h-full border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <Clock className="w-12 h-12 text-destructive mb-4" />
                  <CardTitle className="text-xl">Holiday Chaos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    December-January rush overwhelms your team. 50+ visa applications pile up. Clients get anxious. Your staff works overtime.
                  </p>
                  <div className="mt-4 p-3 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-destructive">40+ hours</div>
                    <div className="text-sm text-muted-foreground">wasted per week during peak season</div>
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
              <Card className="h-full border-amber-500/20 bg-amber-500/5">
                <CardHeader>
                  <AlertTriangle className="w-12 h-12 text-amber-500 mb-4" />
                  <CardTitle className="text-xl">Ever-Changing Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Visa requirements change without warning. Your team scrambles through government websites. One missed update = rejected application.
                  </p>
                  <div className="mt-4 p-3 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-amber-500">15%</div>
                    <div className="text-sm text-muted-foreground">rejection rate from outdated information</div>
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
              <Card className="h-full border-red-500/20 bg-red-500/5">
                <CardHeader>
                  <FileQuestion className="w-12 h-12 text-red-500 mb-4" />
                  <CardTitle className="text-xl">Rejection Fears</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Missing documents. Incorrect formats. Booking confirmations incomplete. Each rejection damages client trust and your reputation.
                  </p>
                  <div className="mt-4 p-3 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-500">₹25,000+</div>
                    <div className="text-sm text-muted-foreground">average loss per rejected group visa</div>
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              There's a Better Way
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Introducing Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Visa Desk in a Box
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Imagine having an expert visa team working 24/7 for your agency — without the overhead, training headaches, or peak-season chaos.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              That's StampMyVisa. Not just software. A complete visa processing system built specifically for travel agencies.
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
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Clarity in One Click</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No more hunting through government websites. See exactly what each client needs — instantly updated, clearly organized.
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
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">2-Minute Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stop the endless back-and-forth. Clients upload documents directly. Your team reviews once. Done.
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
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Expert QA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sleep better knowing trained visa experts double-check every application before submission.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft CTA - Lead Capture */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12"
          >
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

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="w-5 h-5 text-primary" />
                      Download Free Checklist
                    </CardTitle>
                    <CardDescription>No credit card required. Instant access.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleChecklistDownload} className="space-y-4">
                      <div>
                        <Input
                          type="email"
                          placeholder="Enter your work email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full"
                        />
                      </div>
                      <Button type="submit" className="w-full gap-2">
                        Get My Free Checklist
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Plus: Get invited to our monthly visa updates webinar
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Alternative CTA */}
          <motion.div
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
          </motion.div>
        </div>
      </section>

      {/* Social Proof Light */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by travel agencies across India</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
              <Users className="w-12 h-12" />
              <Users className="w-12 h-12" />
              <Users className="w-12 h-12" />
              <Users className="w-12 h-12" />
            </div>
            <p className="text-muted-foreground mt-8">
              Join 500+ agencies who've simplified their visa processing
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
