import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: string;
  className?: string;
  titleClassName?: string;
  centered?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  badge,
  className,
  titleClassName,
  centered = true 
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(centered && "text-center", "mb-12 md:mb-16", className)}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4"
        >
          <span className="text-sm font-semibold text-primary">{badge}</span>
        </motion.div>
      )}
      <h2 className={cn(
        "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
