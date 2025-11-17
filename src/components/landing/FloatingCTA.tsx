import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 800; // Show after scrolling 800px
      
      if (scrolled > threshold && !isDismissed) {
        setIsVisible(true);
      } else if (scrolled <= threshold) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
        >
          <div className="bg-card/95 backdrop-blur-xl border-2 border-primary/20 rounded-2xl shadow-2xl p-4 flex items-center gap-4">
            <div className="flex-1">
              <div className="font-semibold text-foreground mb-1">
                Ready to get started?
              </div>
              <div className="text-sm text-muted-foreground">
                Apply for your visa in minutes
              </div>
            </div>
            
            <Button 
              size="sm"
              className="gap-2 whitespace-nowrap shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => (window.location.href = "https://stampmyvisa.com/auth/sign-up")}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <button
              onClick={handleDismiss}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
