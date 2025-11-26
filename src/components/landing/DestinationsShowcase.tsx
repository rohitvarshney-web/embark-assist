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
];

export const DestinationsShowcase: React.FC<DestinationsShowcaseProps> = ({
  backgroundImage,
}) => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {DESTINATIONS.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -12, 
                rotate: 2,
                transition: { duration: 0.3 } 
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-foreground font-bold text-lg">{destination.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
