import { Wifi, Globe, CreditCard, Clock, Shield, Smartphone } from "lucide-react";

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
import destinationsBg from "@/assets/backgrounds/destinations-esim.jpg";
import { motion } from "framer-motion";

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Stay connected in 150+ countries with reliable data plans",
    color: "text-blue-500",
  },
  {
    icon: Clock,
    title: "Instant Activation",
    description: "Get your eSIM activated within minutes of purchase",
    color: "text-green-500",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden fees, no bill shocks - pay only for what you use",
    color: "text-purple-500",
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description: "Bank-grade encryption keeps your data safe while traveling",
    color: "text-orange-500",
  },
  {
    icon: Smartphone,
    title: "Easy Setup",
    description: "Simple QR code installation - no physical SIM card needed",
    color: "text-pink-500",
  },
  {
    icon: Wifi,
    title: "High-Speed Data",
    description: "Access 4G/5G networks for fast, reliable internet everywhere",
    color: "text-cyan-500",
  },
];

const steps = [
  { step: "1", title: "Choose Your Plan", description: "Select a data plan for your destination country" },
  { step: "2", title: "Scan QR Code", description: "Install your eSIM by scanning the QR code" },
  { step: "3", title: "Stay Connected", description: "Activate and enjoy high-speed data anywhere" },
];

const devices = [
  { name: "iPhone", models: "iPhone XS and newer" },
  { name: "Samsung", models: "Galaxy S20 and newer" },
  { name: "Google Pixel", models: "Pixel 3 and newer" },
  { name: "Other Brands", models: "Most eSIM-capable devices" },
];

const destinations = [
  { region: "Europe", countries: "40+ countries", speed: "4G/5G" },
  { region: "Asia Pacific", countries: "35+ countries", speed: "4G/5G" },
  { region: "Americas", countries: "25+ countries", speed: "4G/5G" },
  { region: "Middle East & Africa", countries: "50+ countries", speed: "4G/5G" },
];

export default function Esim() {
  return (
    <PageLayout showNavigation={false}>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Stay Connected Anywhere
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              with Travel eSIM
            </span>
          </>
        }
        subtitle="Ditch expensive roaming charges. Get instant data plans for 150+ countries with our travel eSIM solutions."
        ctaButtons={[
          { label: "Buy eSIM Now", href: "https://stampmyvisa.com/home/travel-esim", variant: "default" },
          { label: "View Plans", href: "https://stampmyvisa.com/home/travel-esim/countries", variant: "outline" },
        ]}
        trustMarkers={[]}
        backgroundClassName="bg-gradient-to-br from-primary/5 via-purple-500/5 to-background"
      />

      {/* Features Grid */}
      <FeatureGrid
        title="Why Choose Our eSIM?"
        subtitle="Experience seamless connectivity with features designed for modern travelers"
        features={features}
      />

      {/* How It Works */}
      <StepsProcess
        title="Get Connected in 3 Simple Steps"
        subtitle="Start using your eSIM in minutes"
        steps={steps}
        className="bg-accent/5"
      />

      {/* Device Compatibility */}
      <Section>
        <SectionHeader 
          title="Compatible with All Major Devices" 
          subtitle="Works seamlessly with iPhone, Samsung, Google Pixel, and more" 
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {devices.map((device, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6 text-center"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2">{device.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{device.models}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Popular Destinations */}
      <Section className="bg-accent/5">
        <SectionHeader 
          title="Popular Travel Destinations" 
          subtitle="Trusted coverage in the world's most visited locations" 
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((destination, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6"
            >
              <Globe className="w-7 h-7 md:w-8 md:h-8 text-primary mb-3" />
              <h3 className="font-semibold text-base md:text-lg mb-2">{destination.region}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-1">{destination.countries}</p>
              <p className="text-xs text-primary font-medium">{destination.speed} Available</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Destinations Showcase */}
      <DestinationsShowcase backgroundImage={destinationsBg} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection
        title="Ready to Travel Smart?"
        subtitle="Get your eSIM today and stay connected wherever your journey takes you"
        buttons={[
          { label: "Buy eSIM Now", href: "https://stampmyvisa.com/home/travel-esim" },
          { label: "View Plans", href: "https://stampmyvisa.com/home/travel-esim/countries", variant: "outline" },
        ]}
      />
    </PageLayout>
  );
}
