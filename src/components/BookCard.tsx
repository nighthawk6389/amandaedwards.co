"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  index?: number;
}

export function BookCard({ book, index = 0 }: BookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/books/${book.slug}`} className="block group">
        <div className="book-card-hover rounded-3xl overflow-hidden bg-white shadow-lg shadow-black/5">
          {/* Book Cover Placeholder */}
          <div
            className="relative h-64 sm:h-72 flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: book.coverColor }}
          >
            {/* Decorative background shapes */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white" />
              <div className="absolute bottom-8 left-6 w-14 h-14 rounded-full bg-white" />
              <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-white" />
            </div>

            {/* Large Emoji as cover art placeholder */}
            <div className="relative text-center">
              <span className="text-7xl sm:text-8xl block mb-2 group-hover:scale-110 transition-transform duration-300">
                {book.emoji}
              </span>
              <div className="px-4">
                <h3
                  className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-white drop-shadow-lg"
                >
                  {book.title}
                </h3>
              </div>
            </div>

            {/* Age badge */}
            <div
              className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: book.accentColor }}
            >
              Ages {book.ageRange}
            </div>
          </div>

          {/* Book Info */}
          <div className="p-5 sm:p-6">
            <p className="text-charcoal-light text-sm leading-relaxed line-clamp-2 mb-4">
              {book.description}
            </p>

            {/* Themes */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {book.themes.slice(0, 3).map((theme) => (
                <span
                  key={theme}
                  className="px-2.5 py-0.5 bg-cream-dark rounded-full text-xs font-semibold text-charcoal-light capitalize"
                >
                  {theme}
                </span>
              ))}
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-sunny-dark text-sm" aria-label="5 out of 5 stars" role="img">
                {"★".repeat(5)}
              </div>
              <span className="text-xs text-charcoal-light">
                ({book.reviews.length} reviews)
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
