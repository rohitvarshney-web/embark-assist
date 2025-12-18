import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, AlertTriangle, FileQuestion, CheckCircle, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLayout, Section, Container } from "@/components/layout";
import { HeroSection, TrustBuildingSection, CTASection, SectionHeader } from "@/components/common";
import { StatsSection } from "@/components/landing/StatsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { DestinationsShowcase } from "@/components/landing/DestinationsShowcase";
import destinationsBg from "@/assets/backgrounds/destinations-awareness.jpg";

const problems = [
  {
    icon: Clock,
    title: "Holiday Chaos",
    description: "December-January rush overwhelms your team. 50+ visa applications pile up. Clients get anxious. Your staff works overtime.",
    stat: "40+ hours",
    statLabel: "wasted per week during peak season",
    color: "destructive",
  },
  {
    icon: AlertTriangle,
    title: "Ever-Changing Rules",
    description: "Visa requirements change without warning. Your team scrambles through government websites. One missed update = rejected application.",
    stat: "15%",
    statLabel: "rejection rate from outdated information",
    color: "amber-500",
  },
  {
    icon: FileQuestion,
    title: "Rejection Fears",
    description: "Missing documents. Incorrect formats. Booking confirmations incomplete. Each rejection damages client trust and your reputation.",
    stat: "₹25,000+",
    statLabel: "average loss per rejected group visa",
    color: "red-500",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Clarity in One Click",
    description: "No more hunting through government websites. See exactly what each client needs — instantly updated, clearly organized.",
  },
  {
    icon: Clock,
    title: "2-Minute Booking",
    description: "Stop the endless back-and-forth. Clients upload documents directly. Your team reviews once. Done.",
  },
  {
    icon: Shield,
    title: "Expert QA",
    description: "Sleep better knowing trained visa experts double-check every application before submission.",
  },
];

const oldWayItems = [
  "Manual document collection",
  "Hunting for requirement updates",
  "Back-and-forth with clients",
  "Praying nothing goes wrong",
  "Stressful submission process",
];

const newWayItems = [
  "Automated document checklists",
  "Always-updated requirements",
  "Guided client upload portal",
  "Expert QA before submission",
  "Real-time tracking & updates",
];

const Awareness = () => {
  return (
    <PageLayout showFloatingCTA={false} showNavigation={false}>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
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
          </>
        }
        subtitle={
          <>
            Travel agencies lose <span className="font-semibold text-foreground">thousands in revenue</span> every
            holiday season juggling visa applications.{" "}
            <span className="text-primary font-medium">There's a better way.</span>
          </>
        }
      />

      {/* Trust Building Section */}
      <TrustBuildingSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Problem Deep Dive */}
      <Section className="bg-gradient-to-b from-muted/30 to-background">
        <SectionHeader
          title={
            <>
              The Hidden Cost of <span className="text-destructive">Manual Visa Processing</span>
            </>
          }
          subtitle="Every holiday season brings the same nightmare for travel agencies"
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            const colorClass = problem.color === "destructive" ? "destructive" : problem.color;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className={`h-full border-${colorClass}/30 bg-gradient-to-br from-${colorClass}/5 to-${colorClass}/10 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-${colorClass}/10 flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 md:w-9 md:h-9 text-${colorClass}`} />
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{problem.description}</p>
                    <div className={`mt-4 md:mt-6 p-4 md:p-5 bg-background/80 backdrop-blur rounded-xl border border-${colorClass}/20`}>
                      <div className={`text-3xl md:text-4xl font-bold text-${colorClass} mb-1`}>{problem.stat}</div>
                      <div className="text-xs md:text-sm text-muted-foreground font-medium">{problem.statLabel}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-6 md:p-8 text-center"
        >
          <p className="text-base md:text-lg text-muted-foreground mb-2">During peak season, this chaos means:</p>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">Lost tours. Frustrated clients. Burned-out staff.</p>
          <p className="text-muted-foreground text-sm md:text-base">And while you're drowning in paperwork, your competitors are closing deals.</p>
        </motion.div>
      </Section>

      {/* Soft Introduction to StampMyVisa */}
      <Section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <SectionHeader
          badge="✨ There's a Better Way"
          title={
            <>
              Introducing Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Visa Desk in a Box
              </span>
            </>
          }
          subtitle={
            <>
              Imagine having an expert visa team working <span className="text-foreground font-semibold">24/7</span> for
              your agency — without the overhead, training headaches, or peak-season chaos.
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="h-full border-muted">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-muted-foreground">The Old Way</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {oldWayItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                    <span className="text-muted-foreground text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="h-full border-primary/50 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-foreground">The StampMyVisa Way</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {newWayItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Benefits Snapshot */}
      <Section className="bg-muted/30">
        <SectionHeader title="What This Means for Your Agency" />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full text-center shadow-lg hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 md:mb-6 shadow-md">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold mb-2">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Destinations Showcase */}
      <DestinationsShowcase backgroundImage={destinationsBg} />

      {/* FAQs Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <CTASection
        title="Ready to Transform Your Visa Business?"
        subtitle="Join thousands of travel agencies who've streamlined their visa processing with StampMyVisa."
        buttons={[
          { label: "Request Demo", href: "https://calendly.com/b2b-support-stampmyvisa/demo" },
          { label: "Get Started", href: "https://stampmyvisa.com/auth/sign-up", variant: "outline" },
        ]}
        className="py-20 md:py-24"
        backgroundClassName="bg-gradient-to-b from-background to-muted/30"
      />
    </PageLayout>
  );
};

export default Awareness;
