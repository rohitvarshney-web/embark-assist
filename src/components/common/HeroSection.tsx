import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface TrustMarker {
  text: string;
}

interface CTAButton {
  label: string;
  href: string;
  variant?: "default" | "outline";
  icon?: React.ReactNode;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  trustMarkers?: TrustMarker[];
  ctaButtons?: CTAButton[];
  className?: string;
  backgroundClassName?: string;
}

const defaultTrustMarkers: TrustMarker[] = [
  { text: "No credit card required" },
  { text: "Set up in 15 minutes" },
  { text: "Cancel anytime" },
];

const defaultCTAButtons: CTAButton[] = [
  {
    label: "Book a Demo",
    href: "https://calendly.com/b2b-support-stampmyvisa/demo",
    variant: "default",
    icon: <ArrowRight className="w-5 h-5" />,
  },
  {
    label: "Sign Up Free",
    href: "https://stampmyvisa.com/auth/sign-up",
    variant: "outline",
  },
];

export function HeroSection({
  title,
  subtitle,
  trustMarkers = defaultTrustMarkers,
  ctaButtons = defaultCTAButtons,
  className,
  backgroundClassName = "bg-gradient-to-br from-primary/10 via-accent/5 to-background",
}: HeroSectionProps) {
  return (
    <section className={cn("pt-16 md:pt-24 pb-16 md:pb-24 relative overflow-hidden", className)}>
      <div className={cn("absolute inset-0", backgroundClassName)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight">
            {title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-8 md:mb-12">
            {subtitle}
          </p>

          {ctaButtons.length > 0 && (
            <div className="max-w-xl mx-auto mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {ctaButtons.map((button, idx) => (
                  <Button
                    key={idx}
                    size="lg"
                    variant={button.variant}
                    className={cn("gap-2 text-base md:text-lg px-6 md:px-8")}
                    onClick={() => (window.location.href = button.href)}
                  >
                    {button.label}
                    {button.icon}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {trustMarkers.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
              {trustMarkers.map((marker, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{marker.text}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
