"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-[10%] text-6xl opacity-10 select-none"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        📖
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[15%] text-5xl opacity-10 select-none"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🦋
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-[20%] text-4xl opacity-10 select-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        ✨
      </motion.div>

      <div className="text-center max-w-lg relative z-10">
        {/* Lost character illustration */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-6"
        >
          <span className="text-[120px] sm:text-[150px] block leading-none">🐉</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-8xl font-bold text-coral mb-4">
            404
          </h1>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
            Patches took a wrong turn!
          </h2>
          <p className="text-charcoal-light text-lg leading-relaxed mb-8 max-w-md mx-auto">
            Even the most adventurous patchwork dragon gets lost sometimes.
            This page must have flown away on a gust of imagination!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="px-8 py-4 bg-coral text-white font-bold rounded-full text-lg hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-1"
          >
            Fly Home
          </Link>
          <Link
            href="/books"
            className="px-8 py-4 bg-white text-charcoal font-bold rounded-full text-lg border-2 border-charcoal/10 hover:border-coral/30 hover:text-coral transition-all hover:-translate-y-1"
          >
            Explore Books
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-sm text-charcoal-light/60"
        >
          Lost? Try searching for{" "}
          <Link href="/books" className="text-coral hover:underline font-semibold">
            books
          </Link>
          ,{" "}
          <Link href="/activities" className="text-teal hover:underline font-semibold">
            activities
          </Link>
          , or{" "}
          <Link href="/blog" className="text-purple hover:underline font-semibold">
            blog posts
          </Link>
          .
        </motion.p>
      </div>
    </div>
  );
}
