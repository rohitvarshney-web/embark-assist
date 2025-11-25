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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/landing/Footer";
import { StatsSection } from "@/components/landing/StatsSection";

const Consideration = () => {
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
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-100/30 to-background" />
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              <span className="text-foreground">Quit juggling </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">spreadsheets & emails</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 rounded" />
              </span>
              <br />
              <span className="text-foreground">when you could be </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">closing deals</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-400/30 -z-10 rounded" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Everything your travel agency needs to process visas faster, safer, and more profitably.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2" onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}>
                Request Demo <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}>
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Trusted Partners */}
      <StatsSection />

      {/* Dashboard Metrics Section - High Dashboard UI Weight */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Data-Driven Visa Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analytics and real-time insights to manage your visa operations efficiently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Metric Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-primary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Applications This Month</CardTitle>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-foreground mb-2">247</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
                      +18% from last month
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Metric Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-primary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Approval Rate</CardTitle>
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-foreground mb-2">98.5%</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Industry leading
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Metric Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-primary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Avg Processing Time</CardTitle>
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-foreground mb-2">4.2 days</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      30% faster
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Dashboard Preview UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="shadow-2xl border-primary/20">
              <CardHeader className="border-b border-border bg-muted/30">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Application Dashboard</CardTitle>
                    <CardDescription>Live view of all visa applications</CardDescription>
                  </div>
                  <Badge>Real-time</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {[
                    { id: "SMV-45892", client: "Sharma Family", country: "Schengen", status: "QA Complete", color: "green" },
                    { id: "SMV-45891", client: "Patel Tours", country: "UK", status: "Documents Pending", color: "amber" },
                    { id: "SMV-45890", client: "Kumar Group", country: "Dubai", status: "Submitted", color: "blue" },
                    { id: "SMV-45889", client: "Reddy Family", country: "USA", status: "Approved", color: "green" }
                  ].map((app, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div>
                          <p className="font-medium text-foreground">{app.client}</p>
                          <p className="text-sm text-muted-foreground">{app.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{app.country}</p>
                          <p className="text-xs text-muted-foreground">Tourist visa</p>
                        </div>
                        <Badge className={`${app.color === 'green' ? 'bg-green-500/10 text-green-600' : app.color === 'amber' ? 'bg-amber-500/10 text-amber-600' : 'bg-blue-500/10 text-blue-600'}`}>
                          {app.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Deep Feature/Benefit Breakdown */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Every Feature Built for Your Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not just tools. Complete solutions to the problems that slow you down.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Feature 1: Instant Pricing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Instant Pricing</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Stop keeping clients waiting while you calculate fees. Quote any visa instantly.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Real-time pricing for 180+ countries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Automatically includes embassy fees, service charges, and taxes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Custom pricing tiers for your agency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Generate professional quotes in seconds</span>
                  </li>
                </ul>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-2">Result:</p>
                    <p className="font-semibold text-foreground">
                      Close deals faster. No more "let me get back to you" delays.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <span className="text-sm font-medium">Country: Schengen (France)</span>
                        <Search className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <span className="text-sm font-medium">Visa Type: Tourist</span>
                      </div>
                      <div className="border-t border-border pt-4 space-y-2">
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
                        <div className="flex justify-between text-base font-bold pt-2 border-t border-border">
                          <span>Total</span>
                          <span className="text-primary">₹12,200</span>
                        </div>
                      </div>
                      <Button className="w-full">Send Quote to Client</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Feature 2: Guided Uploads */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle>Document Upload Portal</CardTitle>
                    <CardDescription>Client view - always knows what's needed</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium">Passport (colored scan)</span>
                      </div>
                      <span className="text-xs text-green-500">Uploaded</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium">Photo (35x45mm, white)</span>
                      </div>
                      <span className="text-xs text-green-500">Uploaded</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Upload className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-medium">Bank statement (6 months)</span>
                      </div>
                      <Button size="sm" variant="outline">Upload</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3 opacity-50">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                        <span className="text-sm font-medium">Flight booking</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Guided Document Uploads</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  No more missing documents. Clients see exactly what to upload, with format guidelines.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Country-specific checklists automatically generated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Format guidelines (size, color, specs) shown for each doc</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Clients upload directly — no email back-and-forth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Automatic reminders for pending documents</span>
                  </li>
                </ul>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-2">Result:</p>
                    <p className="font-semibold text-foreground">
                      Save 10+ hours per week on document collection.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Feature 3: Expert QA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Expert Quality Assurance</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Every application reviewed by trained visa specialists before submission.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Document format verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Completeness check against latest requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Common error detection (photo specs, dates, signatures)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Catch issues before embassy does</span>
                  </li>
                </ul>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-2">Result:</p>
                    <p className="font-semibold text-foreground">
                      85% reduction in rejections due to document errors.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="shadow-xl border-green-500/20">
                  <CardHeader className="bg-green-500/5">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-green-600 dark:text-green-400">QA Complete</CardTitle>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <CardDescription>Application #SMV-45892</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">All documents present</p>
                        <p className="text-xs text-muted-foreground">12/12 items verified</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Format compliance</p>
                        <p className="text-xs text-muted-foreground">Photo specs, file sizes OK</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
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
                    <Button className="w-full" variant="outline">Ready for Submission</Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Feature 4: Dedicated RM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <Card className="shadow-xl">
                  <CardContent className="p-8 text-center">
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
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        "Our RM helped us process 50 group visas during Diwali season without a single issue."
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">— Travel agency, Mumbai</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Dedicated Relationship Manager</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Not just software support. A real visa expert who knows your agency.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Personal point of contact for urgent cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>WhatsApp support during business hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Help with complex or unusual visa situations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Monthly check-ins and performance reviews</span>
                  </li>
                </ul>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-2">Result:</p>
                    <p className="font-semibold text-foreground">
                      Human backup when you need it most.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Complete Workflow, Simplified
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From client inquiry to visa approval — see exactly how it works
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
              <p className="text-sm text-muted-foreground">Client asks about visa</p>
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
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">2. Quote</h4>
              <p className="text-sm text-muted-foreground">Instant pricing shown</p>
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
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">3. Upload</h4>
              <p className="text-sm text-muted-foreground">Client submits docs</p>
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">4. QA</h4>
              <p className="text-sm text-muted-foreground">Expert review</p>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div>

            {/* Step 5 */}
            <motion.div
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
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div>

            {/* Step 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">6. Track</h4>
              <p className="text-sm text-muted-foreground">Real-time updates</p>
            </motion.div>

            {/* Placeholder for symmetry */}
            <div className="hidden md:block"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <Card className="inline-block max-w-2xl">
              <CardContent className="pt-6">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Average time from inquiry to submission:
                </p>
                <p className="text-4xl font-bold text-primary">2 hours</p>
                <p className="text-sm text-muted-foreground mt-2">vs. 2-3 days manually</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Questions, Answered
            </h2>
          </motion.div>

          <div className="space-y-6">
            {/* Objection 1 */}
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
                        "What happens when visa rules change suddenly?"
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Our team monitors embassy updates daily. When rules change, your portal updates automatically — and we notify you immediately. You'll never submit outdated applications again.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Objection 2 */}
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
                        "Can it handle big group visas (20-30 people)?"
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Yes. Bulk upload features let clients submit multiple applications at once. Your team reviews in batch. Perfect for corporate groups, wedding parties, or tour groups.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Objection 3 */}
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
                        "What if a visa still gets rejected?"
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Our expert QA catches 85% of issues before submission. For the rest, we offer optional Visa Rejection Insurance — clients get full refunds if rejected. Zero risk for you or them.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Top Travel Agencies
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from agencies like yours
            </p>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
                  "Before StampMyVisa, December meant chaos. Staff working 12-hour days, clients calling constantly, errors everywhere. This year? Smooth sailing. The guided upload portal meant clients knew exactly what to do. Expert QA caught every issue. We actually closed more deals because we weren't buried in paperwork."
                </p>
                <p className="font-semibold text-foreground">— Neha Singh, Wanderlust Travel</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Visa Service?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See StampMyVisa in action. Book a personalized demo or start your free trial today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button size="lg" className="gap-2" onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}>
                Request Demo <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}>
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
