import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { name: "Schengen Visa", href: "#" },
    { name: "USA Visa", href: "#" },
    { name: "Malaysia eVisa", href: "#" },
    { name: "All Countries", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Partner Program", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-border relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-48 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-48 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-2 mb-6"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </motion.div>
              <span className="text-xl font-bold text-foreground">StampMyVisa</span>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              India's most trusted visa partner for travel professionals. Simplifying visa processing since 2020.
            </p>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((social, idx) => (
                <motion.button
                  key={social}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }}
                  whileHover={{ 
                    y: -4,
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center group"
                  aria-label={social}
                >
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {social[0]}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-semibold text-foreground mb-6 text-lg"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Services
            </motion.h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: idx * 0.05,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-semibold text-foreground mb-6 text-lg"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Company
            </motion.h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: idx * 0.05,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-semibold text-foreground mb-6 text-lg"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Legal
            </motion.h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: idx * 0.05,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              © 2024 StampMyVisa. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href="#" 
                className="hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Sitemap
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Accessibility
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
