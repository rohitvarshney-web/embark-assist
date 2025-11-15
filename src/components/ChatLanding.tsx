import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Send, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsSection } from "./landing/StatsSection";
import { HowItWorks } from "./landing/HowItWorks";
import { FeaturesGrid } from "./landing/FeaturesGrid";
import { TestimonialsSection } from "./landing/TestimonialsSection";
import { FAQSection } from "./landing/FAQSection";
import { Footer } from "./landing/Footer";
import { FloatingCTA } from "./landing/FloatingCTA";
import { PromotionalAds } from "./landing/PromotionalAds";

type Reply = { id: string; text: string; next?: string };
type Node = { id: string; from: "bot" | "user"; text?: string; replies?: Reply[] };

const FLOW: Record<string, Node> = {
  start: {
    id: "start",
    from: "bot",
    text: "Hi — I'm Stamp, your visa assistant. How can I help today?",
    replies: [
      { id: "apply", text: "Apply for a visa", next: "redirect_visa_apply" },
      { id: "esim", text: "Buy eSIM", next: "esim_info" },
      { id: "travel_insurance", text: "Travel Insurance", next: "travel_insurance_info" },
      { id: "visa_rejection", text: "Visa Rejection Insurance", next: "visa_rejection_info" },
    ],
  },
  redirect_visa_apply: {
    id: "redirect_visa_apply",
    from: "bot",
    text: "Redirecting you to start your visa application...",
  },
  esim_info: {
    id: "esim_info",
    from: "bot",
    text: "Get connected instantly with our international eSIM plans:\n\n• 160+ countries coverage\n• Instant activation\n• Data plans from $4.99\n• No physical SIM needed\n• Works in 160+ destinations worldwide\n\nReady to purchase your eSIM?",
    replies: [
      { id: "esim_buy", text: "Buy eSIM now", next: "redirect_esim" },
      { id: "back", text: "Back to main menu", next: "start" },
    ],
  },
  redirect_esim: {
    id: "redirect_esim",
    from: "bot",
    text: "Redirecting you to browse our eSIM plans...",
  },
  travel_insurance_info: {
    id: "travel_insurance_info",
    from: "bot",
    text: "Protect your trip with comprehensive travel insurance:\n\n• Medical emergencies coverage up to $500,000\n• Trip cancellation/interruption protection\n• Lost baggage coverage\n• Emergency evacuation\n• Travel delays\n• 24/7 global assistance\n\nStarting from ₹53/day\n\nReady to get your travel insurance?",
    replies: [
      { id: "insurance_buy", text: "Get insurance now", next: "redirect_insurance" },
      { id: "back", text: "Back to main menu", next: "start" },
    ],
  },
  redirect_insurance: {
    id: "redirect_insurance",
    from: "bot",
    text: "Redirecting you to our travel insurance page...",
  },
  visa_rejection_info: {
    id: "visa_rejection_info",
    from: "bot",
    text: "Visa Rejection Insurance protects your investment:\n\n• Full refund of visa fees if rejected\n• Available for Schengen, USA, UK, Canada and other country visas\n• Instant claim processing\n• Quick refund within 5-7 business days\n\nStarting from only ₹299 per application\n\nProtect your visa application today!",
    replies: [
      { id: "rejection_buy", text: "Get VRI now", next: "redirect_vri" },
      { id: "back", text: "Back to main menu", next: "start" },
    ],
  },
  redirect_vri: {
    id: "redirect_vri",
    from: "bot",
    text: "Redirecting you to protect your visa application...",
  },
};

const AD_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
    title: "Apply Faster, Travel Smarter",
    subtitle: "Your hassle-free visa journey starts here with StampMyVisa.",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    title: "Seamless Visa Experience",
    subtitle: "Get end-to-end support for Schengen, USA, and Malaysia visas.",
  },
  {
    src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
    title: "Partner with Us",
    subtitle: "Empower your travel business with automated visa tools.",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1400&q=80",
    title: "Trusted by 10,000+ Agents",
    subtitle: "Experience reliability and transparency with every application.",
  },
];

export default function ChatLanding() {
  const [history, setHistory] = useState<Node[]>([FLOW.start]);
  const [input, setInput] = useState("");
  const [showForm, setShowForm] = useState(false);

  function pushNode(nodeId: string) {
    const node = FLOW[nodeId];
    if (!node) return;
    setHistory((h) => [...h, node]);
  }

  function handleReplyClick(reply: Reply) {
    const userNode: Node = { id: `u_${Date.now()}`, from: "user", text: reply.text };
    setHistory((h) => [...h, userNode]);
    
    // Handle redirects
    if (reply.next === "redirect_visa_apply" || reply.next === "redirect_vri") {
      setTimeout(() => {
        pushNode(reply.next!);
        setTimeout(() => window.open("https://stampmyvisa.com/home/create-visa", "_blank"), 500);
      }, 300);
    } else if (reply.next === "redirect_esim") {
      setTimeout(() => {
        pushNode(reply.next!);
        setTimeout(() => window.open("https://stampmyvisa.com/home/travel-esim", "_blank"), 500);
      }, 300);
    } else if (reply.next === "redirect_insurance") {
      setTimeout(() => {
        pushNode(reply.next!);
        setTimeout(() => window.open("https://stampmyvisa.com/home/insure", "_blank"), 500);
      }, 300);
    } else if (reply.next) {
      setTimeout(() => pushNode(reply.next!), 300);
    }
  }

  function handleSendFreeText() {
    if (!input.trim()) return;
    const userNode: Node = { id: `u_${Date.now()}`, from: "user", text: input.trim() };
    setHistory((h) => [...h, userNode]);
    const lastBot = [...history].reverse().find((x) => x.from === "bot");
    if (lastBot?.id === "track_order") {
      setTimeout(
        () =>
          setHistory((h) => [
            ...h,
            {
              id: `bot_track_${Date.now()}`,
              from: "bot",
              text: `Order ${input.trim()}: Status — Processing\nExpected completion: 5-7 business days`,
            },
          ]),
        400,
      );
    } else {
      setTimeout(
        () =>
          setHistory((h) => [
            ...h,
            {
              id: `bot_ack_${Date.now()}`,
              from: "bot",
              text: `Thanks for your message. A specialist will respond shortly.`,
            },
          ]),
        300,
      );
    }
    setInput("");
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-12 py-5 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <img 
            width={207} 
            height={32} 
            className="cursor-pointer h-8 w-auto" 
            src="https://stampmyvisa.com/assets/images/logo-with-name.svg" 
            alt="SMV logo"
          />
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 text-sm"
        >
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden sm:flex"
            onClick={() => window.location.href = 'https://stampmyvisa.com/home/login'}
          >
            Login
          </Button>
          <Button 
            size="sm" 
            className="font-medium"
            onClick={() => window.location.href = 'https://stampmyvisa.com/home/login'}
          >
            Get Started
          </Button>
        </motion.nav>
      </header>

      {/* Ads carousel */}
      <AdCarousel images={AD_IMAGES} />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 lg:px-12 py-16 lg:py-24">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: One Portal - Visual & Concise */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="text-foreground">One Portal for</span>
                <br />
                <motion.span 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
                >
                  All Travel Needs
                </motion.span>
              </motion.h2>
              
              {/* Service Cards */}
              <div className="grid grid-cols-2 gap-5">
                {/* Visa */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-6 hover:shadow-xl transition-all group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4"
                  >
                    <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-1 text-lg">Visa</h3>
                  <p className="text-sm text-muted-foreground">40+ countries</p>
                </motion.div>

                {/* Insurance */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:shadow-xl transition-all group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-4"
                  >
                    <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-1 text-lg">Insurance</h3>
                  <p className="text-sm text-muted-foreground">Full coverage</p>
                </motion.div>

                {/* eSIM */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-2xl p-6 hover:shadow-xl transition-all group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4"
                  >
                    <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-1 text-lg">eSIM</h3>
                  <p className="text-sm text-muted-foreground">160+ countries</p>
                </motion.div>

                {/* VRI */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-2xl p-6 hover:shadow-xl transition-all group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4"
                  >
                    <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-1 text-lg">VRI</h3>
                  <p className="text-sm text-muted-foreground">Refund guarantee</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: chat widget */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md bg-chat-bg border border-chat-border rounded-2xl shadow-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-chat-border bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-foreground">StampMyVisa Assistant</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Quick actions to get started</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-badge-text animate-pulse"></span>
                    <span className="text-xs font-medium text-badge-text">Live</span>
                  </div>
                </div>
              </div>

              <div className="p-5 h-80 overflow-y-auto bg-secondary/30">
                <ChatWindow history={history} onReplyClick={handleReplyClick} />
              </div>

              <div className="px-5 py-4 border-t border-chat-border bg-chat-bg">
                <div className="flex gap-2 mb-3">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendFreeText()}
                    placeholder="Type order ID or message..."
                    className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                  <Button onClick={handleSendFreeText} size="sm" className="px-3">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {(() => {
                    const lastBot = [...history].reverse().find((x) => x.from === "bot");
                    if (!lastBot?.replies) return null;
                    return lastBot.replies.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => handleReplyClick(r)}
                        className="px-3 py-1.5 rounded-full border border-border bg-background text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        {r.text}
                      </button>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Modular sections */}
      <StatsSection />
      <PromotionalAds />
      <HowItWorks />
      <FeaturesGrid />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <FloatingCTA />

      <AnimatePresence>
        {showForm && (
          <PassportModal
            onClose={() => setShowForm(false)}
            onSubmit={(vals) => {
              setShowForm(false);
              setHistory((h) => [
                ...h,
                {
                  id: `bot_submit_${Date.now()}`,
                  from: "bot",
                  text: `Application created for ${vals.fullName}.\n\nOrder ID: ORD${
                    Math.floor(Math.random() * 90000) + 10000
                  }\n\nWe'll email you the next steps shortly.`,
                },
              ]);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function AdCarousel({ images }: { images: { src: string; title?: string; subtitle?: string }[] }) {
  const [idx, setIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 6000);
    return () => clearInterval(t);
  }, [images.length, isPaused]);

  if (!images || images.length === 0) return null;

  return (
    <section className="relative bg-gradient-to-br from-secondary/20 via-background to-secondary/10 border-b border-border py-12 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          {/* Left: Image carousel with modern cards */}
          <div
            className="lg:col-span-3 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="relative aspect-[16/10] w-full"
                >
                  <img src={images[idx].src} alt={images[idx].title} className="w-full h-full object-cover" />

                  {/* Gradient overlay for better visual hierarchy */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-semibold text-foreground">Live Demo</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation controls */}
              <button
                onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/95 backdrop-blur-md shadow-lg border border-border hover:bg-background hover:scale-110 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/95 backdrop-blur-md shadow-lg border border-border hover:bg-background hover:scale-110 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Progress indicators - moved from content section */}
            <div className="flex gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="group relative h-1.5 flex-1 rounded-full bg-secondary overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: i === idx ? 1 : 0 }}
                    transition={{ duration: i === idx && !isPaused ? 6 : 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Hero content */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-badge-bg text-badge-text text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-badge-text animate-pulse"></span>
              Trusted by 10,000+ travel agents
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              India's #1 Visa Partner for Travel Planners
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by thousands of travel planners — we handle visa applications, document checklists, and
              appointment bookings so you can focus on your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="font-medium shadow-lg hover:shadow-xl transition-shadow">
                Get Started for Free
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                Contact Us
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-1">
                <span className="text-lg">⭐</span>
                <span className="font-semibold text-foreground">4.8</span>
                <span>/5 rating</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div>
                <span className="font-semibold text-foreground">99.3%</span> visa approval rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatWindow({ history, onReplyClick }: { history: Node[]; onReplyClick: (r: Reply) => void }) {
  return (
    <div className="flex flex-col gap-4">
      {history.map((m, i) => (
        <motion.div
          key={m.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className={`flex ${m.from === "bot" ? "items-start" : "justify-end"}`}
        >
          {m.from === "bot" ? (
            <div className="max-w-[85%]">
              <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{m.text}</p>
              </div>
              {m.replies && (
                <div className="mt-3 flex gap-2 flex-wrap">
                  {m.replies.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => onReplyClick(r)}
                      className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium hover:bg-primary/20 transition-colors"
                    >
                      {r.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-[85%] bg-gradient-to-br from-primary to-primary-hover text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 shadow-md">
              <div className="flex items-center gap-2">
                <p className="text-sm leading-relaxed">{m.text}</p>
                <Check className="w-3.5 h-3.5 flex-shrink-0" />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function PassportModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (vals: { fullName: string; passport: string }) => void;
}) {
  const [fullName, setFullName] = useState("");
  const [passport, setPassport] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-background rounded-2xl shadow-2xl w-full max-w-md p-6 border border-border"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Start Application</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">Close</span>✕
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="As per passport"
              className="w-full border border-input bg-background rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Passport Number</label>
            <input
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
              placeholder="Enter passport number"
              className="w-full border border-input bg-background rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => onSubmit({ fullName, passport })}
            disabled={!fullName.trim() || !passport.trim()}
            className="flex-1 font-medium"
          >
            Create Application
          </Button>
          <Button onClick={onClose} variant="outline" className="flex-1">
            Cancel
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
