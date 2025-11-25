import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  Upload,
  User,
  Bell,
  CheckCircle,
  Star,
  Clock,
  Shield,
  TrendingUp,
  Gift,
  Calendar,
  ArrowRight,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/landing/Footer";
import { StatsSection } from "@/components/landing/StatsSection";

const Conversion = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://ik.imagekit.io/9pjdbdyeq/StampMyVisa%20Brand%20Assets/Logo/Logo-Dark/Logo-Dark.svg?updatedAt=1754036741863"
                alt="StampMyVisa Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-foreground">StampMyVisa</span>
            </Link>
          </motion.div>
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

      {/* Hero Section - Sparse & Action-First */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Stop leaving </span>
              <span className="bg-gradient-to-r from-amber-600 via-primary to-purple-600 bg-clip-text text-transparent">
                money on the table
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Your competitors are booking. Don't let outdated workflows hold you back.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form-First Action Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-primary/30">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl mb-2">Reactivate Your Account</CardTitle>
                <CardDescription className="text-base">Get back to processing in under 15 minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Simplified Form UI */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Agency Name</label>
                    <div className="p-3 border border-border rounded-lg bg-muted/30">
                      <p className="text-muted-foreground text-sm">Your agency name</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <div className="p-3 border border-border rounded-lg bg-muted/30">
                      <p className="text-muted-foreground text-sm">yourname@agency.com</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone (Optional)</label>
                    <div className="p-3 border border-border rounded-lg bg-muted/30">
                      <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                </div>

                {/* Benefits Checkmarks */}
                <div className="bg-muted/50 rounded-xl p-6 space-y-3">
                  {[
                    "Access all your existing data",
                    "10-minute onboarding call included",
                    "No credit card required to start"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Primary CTA */}
                <Button 
                  size="lg" 
                  className="w-full gap-2 text-lg" 
                  onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
                >
                  Get Started Now <ArrowRight className="w-5 h-5" />
                </Button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Already have an account?{" "}
                    <a href="https://stampmyvisa.com/auth/sign-in" className="text-primary hover:underline font-medium">
                      Login here
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Problem/Solution - Shorter Copy */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Why Return Now?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <h3 className="font-bold">Before</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Holiday chaos. 12-hour days.</p>
                </CardHeader>
                <CardContent className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-bold">Now</h3>
                  </div>
                  <p className="text-sm text-foreground font-medium">Predictable processing</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <h3 className="font-bold">Before</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Manual errors. Rejections.</p>
                </CardHeader>
                <CardContent className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-bold">Now</h3>
                  </div>
                  <p className="text-sm text-foreground font-medium">99% approval rate</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <h3 className="font-bold">Before</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Outdated info. Anxiety.</p>
                </CardHeader>
                <CardContent className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-bold">Now</h3>
                  </div>
                  <p className="text-sm text-foreground font-medium">Always-updated portal</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Flow - Simplified */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              3 Steps to Start
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Log In</h3>
              <p className="text-muted-foreground">Use existing credentials</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Call</h3>
              <p className="text-muted-foreground">10-minute walkthrough</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Start Processing</h3>
              <p className="text-muted-foreground">Create first application</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights - Ultra Short */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Instant Pricing</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Guided Uploads</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Dedicated RM</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Updated Rules</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Social Proof - Minimal */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div>
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">4.9/5 rating</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Active agencies</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">98.5%</p>
              <p className="text-sm text-muted-foreground">Approval rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Offer - High Urgency */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary shadow-2xl">
              <CardHeader className="text-center pb-8">
                <Badge className="mx-auto mb-4 text-base px-4 py-2 bg-amber-500 text-white">
                  <Gift className="w-4 h-4 mr-2" />
                  Winter Visa Starter Kit - Limited Time
                </Badge>
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  Everything You Need to Handle the Holiday Rush
                </CardTitle>
                <CardDescription className="text-lg">
                  Reactivate today and get instant access to our complete visa processing system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* What's Included */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-foreground text-lg mb-4">Included in Your Kit:</h4>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Complete Country Requirements</p>
                        <p className="text-sm text-muted-foreground">180+ countries, always updated</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Priority Onboarding Support</p>
                        <p className="text-sm text-muted-foreground">Get started in 15 minutes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Peak Season Webinar Access</p>
                        <p className="text-sm text-muted-foreground">Learn best practices (₹2,999 value)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">WhatsApp RM Support</p>
                        <p className="text-sm text-muted-foreground">Business hours, real humans</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-foreground text-lg mb-4">Bonus Resources:</h4>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Holiday Rush Checklist</p>
                        <p className="text-sm text-muted-foreground">Proven workflow templates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Client Communication Scripts</p>
                        <p className="text-sm text-muted-foreground">Professional email templates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Embassy Update Alerts</p>
                        <p className="text-sm text-muted-foreground">WhatsApp notifications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">VRI Discount Codes</p>
                        <p className="text-sm text-muted-foreground">For your first 10 applications</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="bg-background rounded-xl p-8 border border-border">
                  <div className="text-center mb-6">
                    <p className="text-2xl font-bold text-foreground mb-2">Ready to Transform Your Visa Service?</p>
                    <p className="text-muted-foreground mb-6">
                      See StampMyVisa in action. Book a personalized demo or start your free trial today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button
                        size="lg"
                        className="gap-2 text-lg px-8"
                        onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
                      >
                        Request Demo <ArrowRight className="w-5 h-5" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8"
                        onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
                      >
                        Get Started
                      </Button>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
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
                  </div>
                </div>

                {/* Urgency Indicators */}
                <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <span className="text-sm">Limited to 50 agencies</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <span className="text-sm">Offer ends Dec 31</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm">23 agencies reactivated this week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ - Friction Removal */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Questions About Reactivation?</h2>
          </motion.div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-xl mb-2">How do visa rules stay updated?</CardTitle>
                      <p className="text-muted-foreground">
                        Our team monitors embassy websites daily. When requirements change, your portal updates
                        automatically within 24 hours. You'll also get WhatsApp notifications for major changes.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-xl mb-2">Can it handle group bookings (20-30 people)?</CardTitle>
                      <p className="text-muted-foreground">
                        Absolutely. Our bulk upload feature handles groups of any size. Upload all passports at once,
                        and we'll process them together. Perfect for corporate groups, weddings, and tours.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-xl mb-2">Will my old account data still be there?</CardTitle>
                      <p className="text-muted-foreground">
                        Yes! All your previous clients, applications, and settings are preserved. Just log in and pick
                        up where you left off. Nothing lost.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-xl mb-2">What if I need help getting started again?</CardTitle>
                      <p className="text-muted-foreground">
                        Your dedicated RM will reach out within 1 hour of reactivation. They'll help you refresh on new
                        features and answer any questions. Plus, you get access to our priority onboarding webinar.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Push CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Visa Service?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See StampMyVisa in action. Book a personalized demo or start your free trial today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 text-lg px-8"
                onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
              >
                Request Demo <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
              >
                Get Started
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
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

export default Conversion;
