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
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 text-sm"
          >
            <Link 
              to="/awareness"
              className="hidden lg:flex text-muted-foreground hover:text-foreground transition-colors font-medium px-3 py-2 rounded-md hover:bg-accent"
            >
              Getting Started
            </Link>
            <Link 
              to="/consideration"
              className="hidden lg:flex text-muted-foreground hover:text-foreground transition-colors font-medium px-3 py-2 rounded-md hover:bg-accent"
            >
              Features
            </Link>
            <Link 
              to="/conversion"
              className="hidden lg:flex text-muted-foreground hover:text-foreground transition-colors font-medium px-3 py-2 rounded-md hover:bg-accent"
            >
              For Agencies
            </Link>
            <Button
              variant="outline" 
              size="sm"
              className="hidden md:flex"
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
          </motion.nav>
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
                <span className="bg-gradient-to-r from-amber-600 via-primary to-purple-600 bg-clip-text text-transparent">money on the table</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-amber-400/30 -z-10 rounded" />
              </span>
              <br />
              <span className="text-foreground">this </span>
              <span className="relative inline-block">
                <span className="text-foreground">holiday season</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-400/30 -z-10 rounded" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Your competitors are already booking. Don't let outdated workflows hold you back. <span className="font-semibold text-foreground">There's a better way.</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2 text-lg px-8 py-6" 
                onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
              >
                Reactivate Now & Start Booking <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ✓ No credit card required ✓ Instant access ✓ Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Snapshot */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Agencies Are Returning Now
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've solved the problems that made visa processing painful
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Before/After 1 */}
            <motion.div
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
                      <span className="font-semibold text-foreground">Predictable processing.</span> Automated workflows. Clients self-serve.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Before/After 2 */}
            <motion.div
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
                      <span className="font-semibold text-foreground">Expert QA every time.</span> Zero format errors. 99% approval rate.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Before/After 3 */}
            <motion.div
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
                      <span className="font-semibold text-foreground">Always-updated portal.</span> Daily embassy monitoring. Total confidence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights - Short & Punchy */}
      <section className="py-20 px-4">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <motion.div
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
                  <CardDescription>
                    Quote any visa in seconds. Real-time rates for 180+ countries.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
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
                  <CardDescription>
                    Clients see exactly what docs to upload. Zero back-and-forth.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
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
                  <CardDescription>
                    Human backup for urgent cases. WhatsApp support included.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
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
                  <CardDescription>
                    Never miss rule changes. Daily embassy monitoring.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agencies Are Coming Back
            </h2>
            <p className="text-lg text-muted-foreground">
              And they're thriving this season
            </p>
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
                    "Came back after 8 months. The improvements are amazing. Processed 40 visas in 2 weeks without stress."
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Active Agencies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
              <div className="text-sm text-muted-foreground">Approval Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Visas Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conversion Offer - High Urgency */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
                    <p className="text-2xl font-bold text-foreground mb-2">
                      Reactivate Your Account Now
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Get instant access. Start processing visas in minutes.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center max-w-md mx-auto">
                      <Button 
                        size="lg" 
                        className="gap-2 text-lg flex-1"
                        onClick={() => window.location.href = "https://stampmyvisa.com/auth/sign-up"}
                      >
                        Reactivate Now & Start Booking <ArrowRight className="w-5 h-5" />
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        onClick={() => window.location.href = "https://stampmyvisa.com/auth/sign-in"}
                      >
                        Login
                      </Button>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      No credit card required • Instant access • Cancel anytime
                    </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions About Reactivation?
            </h2>
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
                      <CardTitle className="text-xl mb-2">
                        How do visa rules stay updated?
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Our team monitors embassy websites daily. When requirements change, your portal updates automatically within 24 hours. You'll also get WhatsApp notifications for major changes.
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
                      <CardTitle className="text-xl mb-2">
                        Can it handle group bookings (20-30 people)?
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Absolutely. Our bulk upload feature handles groups of any size. Upload all passports at once, and we'll process them together. Perfect for corporate groups, weddings, and tours.
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
                      <CardTitle className="text-xl mb-2">
                        Will my old account data still be there?
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Yes! All your previous clients, applications, and settings are preserved. Just log in and pick up where you left off. Nothing lost.
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
                      <CardTitle className="text-xl mb-2">
                        What if I need help getting started again?
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Your dedicated RM will reach out within 1 hour of reactivation. They'll help you refresh on new features and answer any questions. Plus, you get access to our priority onboarding webinar.
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
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Don't Miss the Holiday Rush
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agencies processing with StampMyVisa are already booking tours. Join them today.
            </p>
            <Button 
              size="lg" 
              className="gap-2 text-lg px-8 py-6 shadow-xl" 
              onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
            >
              Reactivate Your Account Now <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              Start processing visas in 15 minutes • No credit card • No commitment
            </p>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>99.2% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span>500+ Active Agencies</span>
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
