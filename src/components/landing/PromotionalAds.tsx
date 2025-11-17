import React from "react";
import { motion } from "framer-motion";
import { Clock, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PromotionalAds = () => {
  const ads = [
    {
      id: "usa-early",
      icon: Clock,
      image: "", // Add your image URL here (1200x628px or any size)
      country: "USA",
      title: "Early Appointment Available",
      description: "Skip the wait! Get your USA visa appointment date moved up",
      highlight: "Limited Slots",
      color: "from-blue-600 to-indigo-600",
      action: "Book Now",
    },
    {
      id: "vietnam-express",
      icon: Zap,
      image: "", // Add your image URL here (1200x628px or any size)
      country: "Vietnam",
      title: "1-Day Express Service",
      description: "Get your Vietnam visa approved in just 24 hours",
      highlight: "Express Processing",
      color: "from-emerald-600 to-teal-600",
      action: "Apply Now",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Special Offers
          </h2>
          <p className="text-muted-foreground">
            Premium services to fast-track your visa application
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {ads.map((ad, index) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              {/* Image Section - Fixed aspect ratio container */}
              {ad.image ? (
                <div className="relative w-full aspect-[1200/628] overflow-hidden">
                  <img
                    src={ad.image}
                    alt={ad.title}
                    width={1200}
                    height={628}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${ad.color} opacity-10`} />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${ad.color} text-white text-xs font-semibold animate-pulse`}>
                    {ad.highlight}
                  </div>
                </div>
              ) : (
                <>
                  {/* Gradient overlay for non-image cards */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${ad.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <div className="absolute top-8 right-8">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${ad.color} text-white text-xs font-semibold animate-pulse`}>
                      {ad.highlight}
                    </div>
                  </div>
                </>
              )}
              
              {/* Content */}
              <div className="relative p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  {!ad.image && (
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${ad.color} text-white flex-shrink-0`}>
                      <ad.icon className="w-6 h-6" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-muted-foreground">
                      {ad.country}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {ad.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 flex-1">
                  {ad.description}
                </p>

                {/* CTA */}
                <Button 
                  className={`w-full bg-gradient-to-r ${ad.color} hover:opacity-90 text-white group/btn`}
                  size="lg"
                >
                  {ad.action}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>

                {/* Decorative element */}
                {!ad.image && (
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
