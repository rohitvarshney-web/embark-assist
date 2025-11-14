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

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">StampMyVisa</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              India's most trusted visa partner for travel professionals. Simplifying visa processing since 2020.
            </p>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((social) => (
                <motion.button
                  key={social}
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center"
                  aria-label={social}
                >
                  <span className="text-xs font-medium text-muted-foreground">
                    {social[0]}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 StampMyVisa. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
