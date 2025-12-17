import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Container } from "./Container";

const LOGO_URL = "https://ik.imagekit.io/9pjdbdyeq/StampMyVisa%20Brand%20Assets/Logo/Logo-Dark/Logo-Dark.svg?updatedAt=1754036741863";

interface PageHeaderProps {
  showNavigation?: boolean;
  variant?: "default" | "simple";
}

const navigationItems = [
  { label: "Getting Started", href: "/awareness" },
  { label: "Features", href: "/consideration" },
  { label: "For Agencies", href: "/conversion" },
  { label: "eSIM", href: "/esim" },
  { label: "Travel Insurance", href: "/insurance" },
  { label: "Visa Rejection Insurance", href: "/visa-rejection-insurance" },
];

export function PageHeader({ showNavigation = true, variant = "default" }: PageHeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <Container className="h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="StampMyVisa Logo"
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl text-foreground">StampMyVisa</span>
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          {showNavigation && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex gap-2">
                  <Menu className="w-4 h-4" />
                  <span className="hidden sm:inline">Explore</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background border border-border shadow-lg z-50">
                {navigationItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex"
            onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-in")}
          >
            Login
          </Button>
          <Button
            size="sm"
            className="font-medium"
            onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
          >
            Get Started
          </Button>
        </nav>
      </Container>
    </motion.header>
  );
}
