"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NewsletterSignupProps {
  variant?: "hero" | "footer" | "standalone";
}

const leadMagnets = [
  { emoji: "🎨", label: "Free coloring pages from every book" },
  { emoji: "📖", label: "Bonus short story — exclusive to subscribers" },
  { emoji: "🔔", label: "Early access to new book announcements" },
  { emoji: "✂️", label: "Printable bookmarks & activity sheets" },
];

export function NewsletterSignup({ variant = "standalone" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
    }
  };

  if (variant === "footer") {
    return (
      <div className="text-center max-w-lg mx-auto">
        <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-2">
          Join the Story Club! ✉️
        </h3>
        <p className="text-white/60 mb-4 text-sm">
          Subscribe and get a <span className="text-sunny font-bold">free activity pack</span> with
          coloring pages, bookmarks, and a bonus short story!
        </p>
        {status === "success" ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-sunny text-lg font-bold"
          >
            🎉 You&apos;re in! Check your inbox for your free activity pack!
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              aria-label="Email address for newsletter"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-coral hover:bg-coral-dark text-white font-bold rounded-full transition-all hover:shadow-lg hover:shadow-coral/25 text-sm whitespace-nowrap"
            >
              Get My Free Pack
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-3xl p-8 sm:p-10 text-center ${
        variant === "hero"
          ? "bg-white/80 backdrop-blur-sm shadow-xl shadow-coral/5"
          : "bg-gradient-to-br from-coral/5 to-purple/5 border border-coral/10"
      }`}
    >
      <div className="text-4xl mb-4">🎁</div>
      <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-2">
        Get Your Free Story Club Pack!
      </h3>
      <p className="text-charcoal-light mb-6 max-w-md mx-auto text-sm">
        Join 5,000+ parents and teachers and get an instant free activity pack delivered to your inbox.
      </p>

      {/* Lead magnet previews */}
      <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto mb-6">
        {leadMagnets.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 text-left px-3 py-2 bg-white/80 rounded-xl"
          >
            <span className="text-lg flex-shrink-0">{item.emoji}</span>
            <span className="text-xs text-charcoal-light font-medium leading-tight">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-coral text-lg font-bold"
          >
            <span className="block text-3xl mb-2">🎉</span>
            You&apos;re in! Check your inbox for your free activity pack!
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              aria-label="Email address for newsletter"
              className="flex-1 px-5 py-3.5 rounded-full border-2 border-coral/20 focus:border-coral focus:outline-none focus:ring-4 focus:ring-coral/10 text-charcoal text-sm"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-coral hover:bg-coral-dark text-white font-bold rounded-full transition-all hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-0.5 active:translate-y-0 text-sm whitespace-nowrap"
            >
              Send My Free Pack
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <p className="text-xs text-charcoal-light/60 mt-4">
        No spam — pinky promise! Unsubscribe anytime.
      </p>
    </div>
  );
}
