import { Shield, Heart, Plane, Clock, FileText, Headphones, Globe } from "lucide-react";
import { motion } from "framer-motion";

import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { HeroSection } from "@/components/common/HeroSection";
import { FeatureGrid } from "@/components/common/FeatureGrid";
import { StepsProcess } from "@/components/common/StepsProcess";
import { CTASection } from "@/components/common/CTASection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { DestinationsShowcase } from "@/components/landing/DestinationsShowcase";
import destinationsBg from "@/assets/backgrounds/destinations-insurance.jpg";

const features = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description: "Medical emergencies, trip cancellations, lost baggage & more",
    color: "text-blue-500",
  },
  {
    icon: Heart,
    title: "Medical Protection",
    description: "Up to $500K medical coverage for overseas emergencies",
    color: "text-red-500",
  },
  {
    icon: Plane,
    title: "Trip Coverage",
    description: "Protection against flight delays, cancellations & interruptions",
    color: "text-purple-500",
  },
  {
    icon: Clock,
    title: "Instant Issuance",
    description: "Get your policy certificate within minutes of purchase",
    color: "text-green-500",
  },
  {
    icon: FileText,
    title: "Easy Claims",
    description: "Simplified claim process with dedicated support team",
    color: "text-orange-500",
  },
  {
    icon: Headphones,
    title: "24/7 Assistance",
    description: "Round-the-clock emergency assistance wherever you are",
    color: "text-cyan-500",
  },
];

const claimsSteps = [
  { step: "1", title: "Report Incident", description: "Contact us 24/7 via app or phone" },
  { step: "2", title: "Submit Documents", description: "Upload required documentation online" },
  { step: "3", title: "Quick Review", description: "Expert team reviews within 48 hours" },
  { step: "4", title: "Get Reimbursed", description: "Receive payment directly to your account" },
];

const coverageDetails = [
  {
    title: "Medical Emergencies",
    items: ["Emergency medical treatment", "Hospital stays", "Emergency dental care", "Medical evacuation"],
  },
  {
    title: "Trip Disruptions",
    items: ["Trip cancellations", "Flight delays", "Missed connections", "Trip interruptions"],
  },
  {
    title: "Personal Belongings",
    items: ["Lost baggage", "Stolen items", "Damaged luggage", "Travel documents"],
  },
  {
    title: "Additional Benefits",
    items: ["Personal liability", "Legal assistance", "Emergency cash", "Concierge services"],
  },
];

const scenarios = [
  {
    scenario: "Medical Emergency in Bali",
    coverage: "Hospital stay + evacuation",
    amount: "$45,000 covered",
    icon: Heart,
  },
  {
    scenario: "Flight Cancelled in London",
    coverage: "Hotel + rebooking costs",
    amount: "$2,500 covered",
    icon: Plane,
  },
  {
    scenario: "Lost Luggage in Paris",
    coverage: "Essential items + reimbursement",
    amount: "$3,000 covered",
    icon: Shield,
  },
];

export default function Insurance() {
  return (
    <PageLayout showNavigation={false}>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Comprehensive Protection
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              for Every Journey
            </span>
          </>
        }
        subtitle="Travel confidently with comprehensive insurance coverage. From medical emergencies to trip cancellations, we've got you covered."
        ctaButtons={[
          { label: "Get Insurance Now", href: "https://stampmyvisa.com/home/insure", variant: "default" },
          { label: "Compare Plans", href: "https://stampmyvisa.com/home/insure/countries", variant: "outline" },
        ]}
        trustMarkers={[]}
        backgroundClassName="bg-gradient-to-br from-primary/5 via-purple-500/5 to-background"
      />

      {/* Features Grid */}
      <FeatureGrid
        title="Complete Travel Protection"
        subtitle="Everything you need to travel worry-free, all in one comprehensive policy"
        features={features}
      />

      {/* Coverage Details */}
      <Section className="bg-accent/5">
        <SectionHeader title="What's Covered?" subtitle="Comprehensive protection for all aspects of your travel" />
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {coverageDetails.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5 md:p-6"
            >
              <h3 className="font-semibold text-lg md:text-xl mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Real Scenarios */}
      <Section>
        <SectionHeader title="Real Situations, Real Protection" subtitle="See how our insurance helps travelers like you" />
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {scenarios.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5 md:p-6"
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
                <h3 className="font-semibold text-base md:text-lg mb-2">{item.scenario}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2">{item.coverage}</p>
                <p className="text-primary font-semibold text-sm md:text-base">{item.amount}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Claims Process */}
      <StepsProcess
        title="Simple Claims Process"
        subtitle="Get your claims processed quickly with our dedicated support"
        steps={claimsSteps}
        className="bg-accent/5"
      />

      {/* Destinations Showcase */}
      <DestinationsShowcase backgroundImage={destinationsBg} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection
        title="Protect Your Journey Today"
        subtitle="Don't leave your travel plans to chance. Get comprehensive coverage in minutes"
        buttons={[
          { label: "Get Insurance Now", href: "https://stampmyvisa.com/home/insure" },
          { label: "Compare Plans", href: "https://stampmyvisa.com/home/insure/countries", variant: "outline" },
        ]}
      />
    </PageLayout>
  );
}
