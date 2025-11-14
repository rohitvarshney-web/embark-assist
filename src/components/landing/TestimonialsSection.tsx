import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Travel Agent",
    location: "Mumbai",
    text: "StampMyVisa has transformed how we handle visa applications. The approval rate is incredible and the support team is always there when we need them!",
    rating: 5,
    image: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Tour Operator",
    location: "Delhi",
    text: "The automated tracking and document checklist saves us hours every week. Our clients love the transparency and real-time updates.",
    rating: 5,
    image: "RK",
  },
  {
    name: "Anita Desai",
    role: "Travel Consultant",
    location: "Bangalore",
    text: "Best visa partner we've worked with. Professional, fast, and reliable service every time. The platform is intuitive and easy to use.",
    rating: 5,
    image: "AD",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-8 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Partners Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by travel professionals across India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 h-full hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
