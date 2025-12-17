import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "./SectionHeader";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface StepsProcessProps {
  title: string;
  subtitle?: string;
  steps: Step[];
  className?: string;
}

export function StepsProcess({ title, subtitle, steps, className }: StepsProcessProps) {
  return (
    <Section className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
        {steps.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="text-center"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-white font-bold text-xl md:text-2xl">
              {item.step}
            </div>
            <h3 className="font-semibold text-lg md:text-xl mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
