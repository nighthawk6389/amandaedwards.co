"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookPeekInsideProps {
  excerpt: string;
  bookTitle: string;
  coverColor: string;
  emoji: string;
  accentColor: string;
}

export function BookPeekInside({
  excerpt,
  bookTitle,
  coverColor,
  emoji,
  accentColor,
}: BookPeekInsideProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Split excerpt into "pages" (by double newline or every ~120 chars)
  const lines = excerpt.split("\n").filter((l) => l.trim() !== "");
  const pages: string[][] = [];
  let currentPageLines: string[] = [];
  let charCount = 0;

  for (const line of lines) {
    if (charCount + line.length > 150 && currentPageLines.length > 0) {
      pages.push(currentPageLines);
      currentPageLines = [line];
      charCount = line.length;
    } else {
      currentPageLines.push(line);
      charCount += line.length;
    }
  }
  if (currentPageLines.length > 0) pages.push(currentPageLines);

  // Ensure at least 2 pages for flipping
  if (pages.length < 2) {
    const half = Math.ceil(pages[0]?.length / 2 || 1);
    const allLines = pages[0] || [];
    pages.length = 0;
    pages.push(allLines.slice(0, half));
    pages.push(allLines.slice(half));
  }

  const totalPages = pages.length;

  return (
    <div className="text-center">
      {/* Closed book / toggle button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="group relative mx-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative">
            {/* Book spine shadow */}
            <div
              className="absolute left-0 top-2 bottom-2 w-4 rounded-l-md opacity-30"
              style={{ backgroundColor: coverColor }}
            />
            {/* Book cover */}
            <div
              className="relative w-72 h-80 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center overflow-hidden transition-shadow group-hover:shadow-3xl"
              style={{ backgroundColor: coverColor }}
            >
              {/* Decorative circles */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white" />
                <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-white" />
              </div>
              <span className="text-7xl mb-3 group-hover:scale-110 transition-transform">
                {emoji}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white drop-shadow-lg px-6 text-center">
                {bookTitle}
              </h3>
              {/* "Open me" hint */}
              <motion.div
                className="absolute bottom-4 left-0 right-0 text-center"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white/90"
                  style={{ backgroundColor: accentColor }}
                >
                  Tap to peek inside
                </span>
              </motion.div>
            </div>
          </div>
        </motion.button>
      )}

      {/* Open book */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1000 }}
            className="relative max-w-2xl mx-auto"
          >
            {/* Open book spread */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Book binding */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-charcoal/10 -translate-x-1/2 z-10" />
              <div className="absolute left-1/2 top-0 bottom-0 w-6 -translate-x-1/2 bg-gradient-to-r from-transparent via-charcoal/5 to-transparent z-10 pointer-events-none" />

              {/* Page content */}
              <div className="relative p-8 sm:p-12 min-h-[280px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, rotateY: -15, x: 30 }}
                    animate={{ opacity: 1, rotateY: 0, x: 0 }}
                    exit={{ opacity: 0, rotateY: 15, x: -30 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    {/* Page lines */}
                    {pages[currentPage]?.map((line, i) => (
                      <p
                        key={i}
                        className="font-[family-name:var(--font-display)] text-lg sm:text-xl text-charcoal leading-relaxed mb-2 text-center"
                      >
                        {line}
                      </p>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Page corner fold */}
                <div
                  className="absolute bottom-0 right-0 w-8 h-8"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${coverColor}15 50%)`,
                  }}
                />
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-charcoal/5 bg-cream/50">
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.max(0, p - 1))
                  }
                  disabled={currentPage === 0}
                  className="px-4 py-2 rounded-full text-sm font-bold text-charcoal-light hover:text-coral disabled:opacity-30 disabled:hover:text-charcoal-light transition-colors"
                >
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentPage
                          ? "bg-coral w-4"
                          : "bg-charcoal/20 hover:bg-charcoal/40"
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
                  }
                  disabled={currentPage === totalPages - 1}
                  className="px-4 py-2 rounded-full text-sm font-bold text-charcoal-light hover:text-coral disabled:opacity-30 disabled:hover:text-charcoal-light transition-colors"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Close button */}
            <motion.button
              onClick={() => {
                setIsOpen(false);
                setCurrentPage(0);
              }}
              className="mt-4 text-sm font-bold text-charcoal-light hover:text-coral transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Close Book
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
