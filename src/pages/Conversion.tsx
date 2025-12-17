import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeroSection, TrustBuildingSection, CTASection, SectionHeader } from "@/components/common";
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
// import { DestinationsShowcase } from "@/components/landing/DestinationsShowcase";
// import destinationsBg from "@/assets/backgrounds/destinations-conversion.jpg";

const Conversion = () => {
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

      {/* Hero Section - High Urgency */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-purple-100/30 to-background" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              <span className="text-foreground">Stop leaving </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-600 via-primary to-purple-600 bg-clip-text text-transparent">
                  money on the table
                </span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-amber-400/30 -z-10 rounded" />
              </span>
              <br />
              <span className="text-foreground">this </span>
              <span className="relative inline-block">
                <span className="text-foreground">holiday season</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-400/30 -z-10 rounded" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Your competitors are already booking. Don't let outdated workflows hold you back.{" "}
              <span className="font-semibold text-foreground">There's a better way.</span>
            </p>

            {/* Hero CTA */}
            <div className="max-w-xl mx-auto mb-8">
              <Button
                size="lg"
                className="gap-2 text-lg px-12"
                onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-in")}
              >
                Login to Your Account <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Your data is safe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Reactivate in minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Support available 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Building Section */}
      <TrustBuildingSection />
      {/* <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
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
                <Zap className="w-7 h-7 text-primary" />
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
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Proven Track Record</h3>
              <p className="text-sm text-muted-foreground">99% approval rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <User className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Expert Support</h3>
              <p className="text-sm text-muted-foreground">Dedicated team always ready</p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Stats Section - Trusted Partners */}
      <StatsSection />

      {/* Problem/Solution Snapshot */}
      {/* <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Agencies Are Returning Now</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've solved the problems that made visa processing painful
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6"> */}
      {/* Before/After 1 */}
      {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                    <h3 className="font-bold text-lg">Before</h3>
                  </div>
                  <p className="text-muted-foreground">Holiday chaos. 12-hour days. Clients calling constantly.</p>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-lg">Now</h3>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Predictable processing.</span> Automated
                      workflows. Clients self-serve.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}

      {/* Before/After 2 */}
      {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                    <h3 className="font-bold text-lg">Before</h3>
                  </div>
                  <p className="text-muted-foreground">Manual errors. Missing docs. Embarrassing rejections.</p>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-lg">Now</h3>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Expert QA every time.</span> Zero format errors.
                      99% approval rate.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}

      {/* Before/After 3 */}
      {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                    <h3 className="font-bold text-lg">Before</h3>
                  </div>
                  <p className="text-muted-foreground">Rule confusion. Outdated info. Submission anxiety.</p>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-lg">Now</h3>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Always-updated portal.</span> Daily embassy
                      monitoring. Total confidence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Process Flow Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Back to Processing in 3 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reactivate your account and start processing visas in under 15 minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative">
                  <span className="text-3xl font-bold text-primary">1</span>
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-border transform -translate-y-1/2" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Log Back In</h3>
                <p className="text-muted-foreground">
                  Use your existing credentials or reset your password. All your data is still there.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative">
                  <span className="text-3xl font-bold text-primary">2</span>
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-border transform -translate-y-1/2" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Quick Refresh</h3>
                <p className="text-muted-foreground">
                  Your RM will walk you through new features in a 10-minute call. Schedule at your convenience.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Start Processing</h3>
                <p className="text-muted-foreground">
                  Create your first visa application. Your clients get instant quotes and guided uploads.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Average setup time: 12 minutes</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights - Short & Punchy */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need, Nothing You Don't
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
      {/* Feature 1 */}
      {/* <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Instant Pricing</CardTitle>
                  <CardDescription>Quote any visa in seconds. Real-time rates for 180+ countries.</CardDescription>
                </CardHeader>
              </Card>
            </motion.div> */}

      {/* Feature 2 */}
      {/* <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Upload className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Guided Uploads</CardTitle>
                  <CardDescription>Clients see exactly what docs to upload. Zero back-and-forth.</CardDescription>
                </CardHeader>
              </Card>
            </motion.div> */}

      {/* Feature 3 */}
      {/* <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Dedicated RM</CardTitle>
                  <CardDescription>Human backup for urgent cases. WhatsApp support included.</CardDescription>
                </CardHeader>
              </Card>
            </motion.div> */}

      {/* Feature 4 */}
      {/* <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Bell className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Updated Advisories</CardTitle>
                  <CardDescription>Never miss rule changes. Daily embassy monitoring.</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Social Proof */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Agencies Are Coming Back</h2>
            <p className="text-lg text-muted-foreground">And they're thriving this season</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Quote 1 */}
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
                  <CardDescription className="text-base italic">
                    "Came back after 8 months. The improvements are amazing. Processed 40 visas in 2 weeks without
                    stress."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">Anjali Verma</p>
                  <p className="text-sm text-muted-foreground">Sky Tours, Pune</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quote 2 */}
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
                  <CardDescription className="text-base italic">
                    "Reactivated for the holiday rush. Best decision ever. Clients love the professional portal."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">Vikram Singh</p>
                  <p className="text-sm text-muted-foreground">Travel Connect, Jaipur</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quote 3 */}
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
                  <CardDescription className="text-base italic">
                    "The RM helped us get back up in 15 minutes. Smooth transition. Already booking Europe tours."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">Meera Nair</p>
                  <p className="text-sm text-muted-foreground">Horizon Travel, Kochi</p>
                </CardContent>
              </Card>
            </motion.div>
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
                        <p className="text-sm text-muted-foreground">80+ countries, always updated</p>
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
                        <p className="font-semibold text-foreground">WhatsApp Support</p>
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
                        <p className="font-semibold text-foreground">Order Update Alerts</p>
                        <p className="text-sm text-muted-foreground">WhatsApp notifications</p>
                      </div>
                    </div>
                    {/* <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">VRI Discount Codes</p>
                        <p className="text-sm text-muted-foreground">For your first 10 applications</p>
                      </div>
                    </div> */}
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
                        onClick={() => (window.location.href = "https://calendly.com/b2b-support-stampmyvisa/demo")}
                      >
                        Request Demo <ArrowRight className="w-5 h-5" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8"
                        onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-in")}
                      >
                        Login
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

      {/* Destinations Showcase */}
      {/* <DestinationsShowcase backgroundImage={destinationsBg} /> */}

      {/* Final Push CTA */}
      {/* <section className="py-20 px-4">
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
                onClick={() => (window.location.href = "https://calendly.com/b2b-support-stampmyvisa/demo")}
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
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Conversion;
