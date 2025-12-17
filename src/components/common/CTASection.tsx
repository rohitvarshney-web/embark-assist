import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

interface CTAButton {
  label: string;
  href: string;
  variant?: "default" | "outline";
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttons: CTAButton[];
  className?: string;
  backgroundClassName?: string;
}

export function CTASection({
  title,
  subtitle,
  buttons,
  className,
  backgroundClassName = "bg-gradient-to-br from-primary/10 via-purple-500/10 to-background",
}: CTASectionProps) {
  return (
    <section className={cn("py-16 md:py-20 relative overflow-hidden", className)}>
      <div className={cn("absolute inset-0", backgroundClassName)} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8">{subtitle}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, idx) => (
              <Button key={idx} size="lg" variant={button.variant || "default"} asChild>
                <a href={button.href}>{button.label}</a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
