import React from "react";
import { PageHeader } from "./PageHeader";
import { Footer } from "@/components/landing/Footer";
import { FloatingCTA } from "@/components/landing/FloatingCTA";

interface PageLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  showFloatingCTA?: boolean;
  headerVariant?: "default" | "simple";
}

export function PageLayout({ 
  children, 
  showHeader = true, 
  showFooter = true, 
  showFloatingCTA = true,
  headerVariant = "default"
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showHeader && <PageHeader variant={headerVariant} />}
      <main className="flex-1 pt-16">
        {children}
      </main>
      {showFooter && <Footer />}
      {showFloatingCTA && <FloatingCTA />}
    </div>
  );
}
