import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "full";
}

const sizeClasses = {
  sm: "max-w-4xl",
  default: "max-w-6xl",
  lg: "max-w-7xl",
  full: "max-w-full",
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
