import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface DestinationsShowcaseProps {
  backgroundImage: string;
}

const DESTINATIONS = [
  {
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500&h=600&fit=crop",
    name: "Sydney",
  },
  {
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&h=600&fit=crop",
    name: "Japan",
  },
  {
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&h=600&fit=crop",
    name: "Santorini",
  },
  {
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=600&fit=crop",
    name: "Paris",
  },
  {
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=500&h=600&fit=crop",
    name: "Dubai",
  },
  {
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=500&h=600&fit=crop",
    name: "London",
  },
  {
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=500&h=600&fit=crop",
    name: "Thailand",
  },
  {
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&h=600&fit=crop",
    name: "Switzerland",
  },
  {
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=500&h=600&fit=crop",
    name: "Bali",
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=600&fit=crop",
    name: "Singapore",
  },
];

export const DestinationsShowcase: React.FC<DestinationsShowcaseProps> = ({
  backgroundImage,
}) => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/80" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            We provide Visas to{" "}
            <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
              80+ Countries
            </span>
          </h2>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-xl shadow-xl"
            onClick={() => window.location.href = "https://stampmyvisa.com/home/create-visa"}
          >
            Explore Our Products
          </Button>
        </motion.div>

        {/* Destination Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden py-8"
        >
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -2160],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* Render destinations twice for seamless loop */}
            {[...DESTINATIONS, ...DESTINATIONS].map((destination, index) => (
              <motion.div
                key={`${destination.name}-${index}`}
                whileHover={{ 
                  y: -12, 
                  rotate: 2,
                  transition: { duration: 0.3 } 
                }}
                className="group cursor-pointer flex-shrink-0 w-48"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-bold text-base">{destination.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
