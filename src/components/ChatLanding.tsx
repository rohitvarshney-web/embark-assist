import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      { id: "apply", text: "Apply for a visa", next: "apply_which" },
      { id: "track", text: "Track order", next: "track_order" },
      { id: "checklist", text: "Document checklist", next: "show_checklist" },
      { id: "services", text: "Travel services", next: "travel_services" },
    ],
  },
  travel_services: {
    id: "travel_services",
    from: "bot",
    text: "Select the service you need:",
    replies: [
      { id: "esim", text: "eSIM", next: "esim_info" },
      { id: "travel_insurance", text: "Travel Insurance", next: "travel_insurance_info" },
      { id: "visa_rejection", text: "Visa Rejection Insurance", next: "visa_rejection_info" },
      { id: "back", text: "Back to main menu", next: "start" },
    ],
  },
  esim_info: {
    id: "esim_info",
    from: "bot",
    text: "Get connected instantly with our international eSIM plans:\n\n• 160+ countries coverage\n• Instant activation\n• Data plans from $4.99\n• No physical SIM needed\n\nWhich destination do you need eSIM for?",
    replies: [
      { id: "esim_europe", text: "Europe", next: "esim_purchase" },
      { id: "esim_asia", text: "Asia", next: "esim_purchase" },
      { id: "esim_americas", text: "Americas", next: "esim_purchase" },
      { id: "esim_global", text: "Global", next: "esim_purchase" },
    ],
  },
  esim_purchase: {
    id: "esim_purchase",
    from: "bot",
    text: "Great choice! I'll help you set up your eSIM. Please provide your email to receive the QR code and activation instructions.",
  },
  travel_insurance_info: {
    id: "travel_insurance_info",
    from: "bot",
    text: "Protect your trip with comprehensive travel insurance:\n\n• Medical emergencies coverage\n• Trip cancellation protection\n• Lost baggage coverage\n• 24/7 assistance\n\nStarting from $15/trip\n\nWould you like to get a quote?",
    replies: [
      { id: "insurance_yes", text: "Yes, get quote", next: "insurance_quote" },
      { id: "insurance_info", text: "More information", next: "insurance_details" },
      { id: "back_services", text: "Back to services", next: "travel_services" },
    ],
  },
  insurance_quote: {
    id: "insurance_quote",
    from: "bot",
    text: "I'll need some details for your travel insurance quote:\n• Destination country\n• Travel dates\n• Number of travelers\n• Age of travelers\n\nPlease provide these details to continue.",
  },
  insurance_details: {
    id: "insurance_details",
    from: "bot",
    text: "Our travel insurance covers:\n\n✓ Medical expenses up to $500,000\n✓ Emergency evacuation\n✓ Trip cancellation/interruption\n✓ Baggage loss/delay\n✓ Travel delays\n✓ 24/7 global assistance\n\nPolicies are underwritten by leading insurance providers.",
    replies: [
      { id: "get_quote", text: "Get a quote", next: "insurance_quote" },
      { id: "back_services", text: "Back to services", next: "travel_services" },
    ],
  },
  visa_rejection_info: {
    id: "visa_rejection_info",
    from: "bot",
    text: "Visa Rejection Insurance protects your investment:\n\n• Full refund of visa fees if rejected\n• Covers application & service fees\n• Available for Schengen, USA, UK visas\n• Instant claim processing\n\nOnly $29 per application\n\nWould you like to add this to your visa application?",
    replies: [
      { id: "rejection_yes", text: "Yes, add insurance", next: "rejection_purchase" },
      { id: "rejection_terms", text: "View terms", next: "rejection_terms" },
      { id: "back_services", text: "Back to services", next: "travel_services" },
    ],
  },
  rejection_purchase: {
    id: "rejection_purchase",
    from: "bot",
    text: "Excellent choice! Visa Rejection Insurance will be added to your application for $29.\n\nYou'll receive:\n• Full policy document via email\n• Claim process instructions\n• 24/7 support access\n\nContinue with your visa application to complete the purchase.",
  },
  rejection_terms: {
    id: "rejection_terms",
    from: "bot",
    text: "Visa Rejection Insurance Terms:\n\n• Valid for first-time applications\n• Refunds processed within 7 days of rejection\n• Must provide official rejection letter\n• Covers visa fees + service charges\n• Available at time of application only\n\nFull terms will be emailed after purchase.",
    replies: [
      { id: "add_insurance", text: "Add to application", next: "rejection_purchase" },
      { id: "back_services", text: "Back to services", next: "travel_services" },
    ],
  },
  apply_which: {
    id: "apply_which",
    from: "bot",
    text: "Which visa would you like to apply for?",
    replies: [
      { id: "schengen", text: "Schengen", next: "form_passport" },
      { id: "malaysia", text: "Malaysia eVisa", next: "form_passport" },
      { id: "usa", text: "USA", next: "form_passport" },
    ],
  },
  show_checklist: {
    id: "show_checklist",
    from: "bot",
    text: "Select country checklist",
    replies: [
      { id: "sc", text: "Schengen", next: "show_checklist_schengen" },
      { id: "ml", text: "Malaysia", next: "show_checklist_malaysia" },
    ],
  },
  show_checklist_schengen: {
    id: "show_checklist_schengen",
    from: "bot",
    text: `Schengen checklist:
• Passport (6+ months validity)
• Recent photos (2)
• Travel itinerary
• Travel insurance`,
  },
  show_checklist_malaysia: {
    id: "show_checklist_malaysia",
    from: "bot",
    text: `Malaysia checklist:
• Passport copy
• Passport photo
• Return ticket`,
  },
  track_order: { 
    id: "track_order", 
    from: "bot", 
    text: "Please enter your order ID to track your application." 
  },
  form_passport: { 
    id: "form_passport", 
    from: "bot", 
    text: "Great! Let me collect some basic information to start your application." 
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
    if (reply.next) setTimeout(() => pushNode(reply.next!), 300);
    if (reply.next === "form_passport") setShowForm(true);
  }

  function handleSendFreeText() {
    if (!input.trim()) return;
    const userNode: Node = { id: `u_${Date.now()}`, from: "user", text: input.trim() };
    setHistory((h) => [...h, userNode]);
    const lastBot = [...history].reverse().find((x) => x.from === "bot");
    if (lastBot?.id === "track_order") {
      setTimeout(() => 
        setHistory((h) => [...h, { 
          id: `bot_track_${Date.now()}`, 
          from: "bot", 
          text: `Order ${input.trim()}: Status — Processing\nExpected completion: 5-7 business days` 
        }]), 
        400
      );
    } else {
      setTimeout(() => 
        setHistory((h) => [...h, { 
          id: `bot_ack_${Date.now()}`, 
          from: "bot", 
          text: `Thanks for your message. A specialist will respond shortly.` 
        }]), 
        300
      );
    }
    setInput("");
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-8 py-4 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">StampMyVisa</span>
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            Login
          </Button>
          <Button size="sm" className="font-medium">
            Get Started
          </Button>
        </nav>
      </header>

      {/* Ads carousel */}
      <AdCarousel images={AD_IMAGES} />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 lg:py-16">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 lg:px-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-badge-bg text-badge-text text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-badge-text animate-pulse"></span>
              Trusted by 10,000+ travel agents
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              India's #1 Visa Partner for Travel Planners
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Trusted by thousands of travel planners — we handle visa applications, 
              document checklists, and appointment bookings so you can focus on your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button size="lg" className="font-medium shadow-lg hover:shadow-xl transition-shadow">
                Get Started for Free
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                Contact Us
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
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
          </motion.div>

          {/* Right: chat widget */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  <Button 
                    onClick={handleSendFreeText} 
                    size="sm"
                    className="px-3"
                  >
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
                  text: `Application created for ${vals.fullName}.\n\nOrder ID: ORD${Math.floor(
                    Math.random() * 90000
                  ) + 10000}\n\nWe'll email you the next steps shortly.`,
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
          {/* Left: Featured content card */}
          <div 
            className="lg:col-span-2 space-y-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Featured</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="space-y-4"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  {images[idx].title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {images[idx].subtitle}
                </p>
                <div className="flex gap-3 pt-2">
                  <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Contact Sales
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="flex gap-2 pt-4">
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
                    style={{ transformOrigin: 'left' }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Image carousel with modern cards */}
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
                  <img
                    src={images[idx].src}
                    alt={images[idx].title}
                    className="w-full h-full object-cover"
                  />
                  
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

            {/* Thumbnail preview */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    i === idx 
                      ? 'border-primary shadow-lg scale-105' 
                      : 'border-border/50 opacity-60 hover:opacity-100 hover:border-border'
                  }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                  {i === idx && (
                    <div className="absolute inset-0 bg-primary/20" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatWindow({
  history,
  onReplyClick,
}: {
  history: Node[];
  onReplyClick: (r: Reply) => void;
}) {
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
                <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                  {m.text}
                </p>
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
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">Close</span>
            ✕
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Full Name
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="As per passport"
              className="w-full border border-input bg-background rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Passport Number
            </label>
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
