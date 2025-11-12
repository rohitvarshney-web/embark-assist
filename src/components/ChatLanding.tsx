import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <section className="bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to border-b border-border py-8 px-4">
      <div className="max-w-6xl mx-auto relative rounded-2xl overflow-hidden shadow-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx].src}
            alt={images[idx].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full h-64 md:h-80 object-cover"
          />
        </AnimatePresence>

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 lg:p-12">
          <motion.h2
            key={`title-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold mb-3 text-white drop-shadow-lg"
          >
            {images[idx].title}
          </motion.h2>
          <motion.p
            key={`subtitle-${idx}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm md:text-lg max-w-2xl text-white/95 drop-shadow-md mb-4"
          >
            {images[idx].subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="shadow-lg">
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Controls */}
        <button
          onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => setIdx((i) => (i + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "bg-white w-8" : "bg-white/50 w-1.5 hover:bg-white/70"
              }`}
            />
          ))}
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
