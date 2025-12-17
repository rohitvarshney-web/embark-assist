import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
  return (
    <Section className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      
      <div className={cn("grid gap-6", columnClasses[columns])}>
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4",
                  feature.color
                )}
              >
                <Icon className={cn("w-6 h-6", feature.color || "text-primary")} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
