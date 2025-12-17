import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, DollarSign, Zap, Shield, Users } from "lucide-react";
import { Section } from "@/components/layout/Section";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TrustBuildingSectionProps {
  items?: TrustItem[];
}

const defaultItems: TrustItem[] = [
  {
    icon: DollarSign,
    title: "Best Prices",
    description: "Competitive rates for travel agents",
  },
  {
    icon: Zap,
    title: "Quick & Easy",
    description: "Applications done in minutes",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-level data protection",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team always ready",
  },
];

export function TrustBuildingSection({ items = defaultItems }: TrustBuildingSectionProps) {
  return (
    <Section className="py-12 md:py-16 bg-muted/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
