"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface NewsletterSignupProps {
  variant?: "hero" | "footer" | "standalone";
}

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
        <p className="text-white/60 mb-6 text-sm">
          Free coloring pages, sneak peeks at new books, and reading tips delivered
          to your inbox. No spam — pinky promise!
        </p>
        {status === "success" ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-sunny text-lg font-bold"
          >
            🎉 You&apos;re in! Welcome to the Story Club!
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-coral hover:bg-coral-dark text-white font-bold rounded-full transition-all hover:shadow-lg hover:shadow-coral/25 text-sm whitespace-nowrap"
            >
              Subscribe
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
      <div className="text-4xl mb-4">✉️</div>
      <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-2">
        Join the Story Club!
      </h3>
      <p className="text-charcoal-light mb-6 max-w-md mx-auto text-sm">
        Get free coloring pages, sneak peeks at new books, reading tips, and a
        sprinkle of magic delivered right to your inbox.
      </p>
      {status === "success" ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-coral text-lg font-bold"
        >
          🎉 You&apos;re in! Welcome to the Story Club!
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-5 py-3 rounded-full border-2 border-coral/20 focus:border-coral focus:outline-none focus:ring-4 focus:ring-coral/10 text-charcoal text-sm"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-coral hover:bg-coral-dark text-white font-bold rounded-full transition-all hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            Subscribe ✨
          </button>
        </form>
      )}
    </div>
  );
}
