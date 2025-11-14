import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What documents do I need for a visa application?",
    a: "Required documents vary by country, but typically include passport copies, photos, travel itinerary, and proof of accommodation. Our system provides a customized checklist for each visa type to ensure you have everything needed.",
  },
  {
    q: "How long does visa processing take?",
    a: "Processing time varies by country: Schengen (10-15 days), USA (3-5 weeks), Malaysia (1 day). We offer expedited services for urgent applications with priority processing available.",
  },
  {
    q: "What is your visa approval rate?",
    a: "We maintain a 99.3% approval rate across all visa types, thanks to our expert document review process, pre-submission checks, and experienced team that ensures your application meets all requirements.",
  },
  {
    q: "Do you offer refunds if visa is rejected?",
    a: "Government fees are non-refundable as they're paid directly to embassies. However, we got you covered with our Visa Rejection Insurance you get 100% of visa fee refunded if your application is rejected*.",
  },
  {
    q: "Can I track my application status?",
    a: "Yes! You'll receive a unique order ID and can track your application in real-time through our portal. You'll get notifications at every stage - from document review to visa approval.",
  },
  {
    q: "Do you provide visa appointment booking?",
    a: "Absolutely! We handle the entire process including visa appointment booking at embassies. We'll secure the earliest available slot and send you all the details.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about our services</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="px-6 py-5 flex items-center justify-between gap-4">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
