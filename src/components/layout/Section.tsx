import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: "default" | "sm" | "lg" | "full";
  containerClassName?: string;
  id?: string;
}

export function Section({ 
  children, 
  className, 
  containerSize = "default",
  containerClassName,
  id 
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20 px-4", className)}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
