"use client";

import { motion } from "framer-motion";
import { BookCard } from "@/components/BookCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import type { Book } from "@/data/books";

interface BooksPageClientProps {
  books: Book[];
}

export function BooksPageClient({ books }: BooksPageClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-6xl mb-4"
          >
            📚
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-4"
          >
            My Books
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-charcoal-light max-w-2xl mx-auto"
          >
            Every book is a little world waiting to be explored. Find your next
            favorite bedtime story, classroom read-aloud, or rainy-day adventure.
          </motion.p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, i) => (
              <BookCard key={book.slug} book={book} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-16 bg-gradient-to-br from-teal/5 to-purple/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
              Schools, Libraries &amp; Bookshops
            </h2>
            <p className="text-charcoal-light mb-6 max-w-xl mx-auto">
              Looking for bulk orders, signed copies, or a school visit? I&apos;d love
              to bring stories to your community!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-bold rounded-full hover:bg-teal-dark transition-all hover:-translate-y-0.5"
            >
              Get in Touch
              <span>→</span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-cream-dark/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <NewsletterSignup />
          </AnimatedSection>
        </div>
      </section>

      <div className="h-16 sm:h-24 bg-cream" />
    </>
  );
}
