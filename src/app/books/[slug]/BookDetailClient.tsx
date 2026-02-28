"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BookPeekInside } from "@/components/BookPeekInside";
import type { Book } from "@/data/books";

interface BookDetailClientProps {
  book: Book;
}

export function BookDetailClient({ book }: BookDetailClientProps) {
  const [showBundle, setShowBundle] = useState(false);

  const averageStars =
    book.reviews.reduce((acc, r) => acc + r.stars, 0) / book.reviews.length;

  return (
    <>
      <section className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-sm text-charcoal-light"
          >
            <Link href="/books" className="hover:text-coral transition-colors">
              Books
            </Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{book.title}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              data-cursor="book"
            >
              <div
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto flex items-center justify-center"
                style={{ backgroundColor: book.coverColor }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white" />
                  <div className="absolute bottom-12 left-10 w-20 h-20 rounded-full bg-white" />
                </div>
                <div className="relative text-center p-8">
                  <span className="text-[120px] block mb-4">{book.emoji}</span>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white drop-shadow-lg mb-2">
                    {book.title}
                  </h2>
                  {book.subtitle && (
                    <p className="text-white/70 font-semibold">{book.subtitle}</p>
                  )}
                </div>

                {/* Awards badge overlay */}
                {book.awards && book.awards.length > 0 && (
                  <div className="absolute top-3 right-3">
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                      className="bg-sunny text-charcoal px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                    >
                      <span>🏆</span> Award Winner
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Book Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
                style={{ backgroundColor: book.accentColor }}
              >
                Ages {book.ageRange}
              </div>

              <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-2">
                {book.title}
              </h1>

              {book.subtitle && (
                <p className="text-xl text-charcoal-light mb-4 font-[family-name:var(--font-display)]">
                  {book.subtitle}
                </p>
              )}

              {/* Stars + social proof */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 text-sunny-dark text-lg">
                    {"★".repeat(Math.round(averageStars))}
                  </div>
                  <span className="text-sm text-charcoal-light">
                    ({book.reviews.length} reviews)
                  </span>
                </div>
                {book.copiesSold && (
                  <span className="px-3 py-1 bg-teal/10 text-teal-dark rounded-full text-xs font-bold">
                    {book.copiesSold} copies sold
                  </span>
                )}
              </div>

              {/* Awards */}
              {book.awards && book.awards.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {book.awards.map((award) => (
                    <div
                      key={award}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-sunny/20 rounded-full text-xs font-bold text-charcoal"
                    >
                      <span>🏆</span> {award}
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-charcoal-light leading-relaxed text-lg mb-8">
                {book.longDescription}
              </p>

              {/* Book Details */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-cream-dark rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-charcoal font-[family-name:var(--font-display)]">
                    {book.pages}
                  </p>
                  <p className="text-xs text-charcoal-light font-semibold">Pages</p>
                </div>
                <div className="bg-cream-dark rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-charcoal font-[family-name:var(--font-display)]">
                    {book.ageRange}
                  </p>
                  <p className="text-xs text-charcoal-light font-semibold">Ages</p>
                </div>
                <div className="bg-cream-dark rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-charcoal font-[family-name:var(--font-display)]">
                    {new Date(book.publishDate).getFullYear()}
                  </p>
                  <p className="text-xs text-charcoal-light font-semibold">Published</p>
                </div>
              </div>

              {/* Themes */}
              <div className="flex flex-wrap gap-2 mb-8">
                {book.themes.map((theme) => (
                  <span
                    key={theme}
                    className="px-4 py-1.5 bg-purple/10 text-purple-dark rounded-full text-sm font-semibold capitalize"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              {/* Social proof snippet near buy buttons */}
              <div className="bg-cream-dark/60 rounded-2xl p-4 mb-6 flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">💬</span>
                <div>
                  <p className="text-charcoal italic text-sm leading-relaxed">
                    &ldquo;{book.reviews[0].text}&rdquo;
                  </p>
                  <p className="text-xs text-charcoal-light font-semibold mt-1">
                    — {book.reviews[0].author}
                    {book.reviews[0].source && `, ${book.reviews[0].source}`}
                  </p>
                </div>
              </div>

              {/* Buy Buttons */}
              <div className="space-y-3">
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-8 py-4 bg-coral text-white font-bold rounded-full text-lg hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25"
                >
                  Buy on Amazon 📦
                </a>
                <div className="grid grid-cols-2 gap-3">
                  {book.barnesNobleLink && (
                    <a
                      href={book.barnesNobleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-4 py-3 bg-white text-charcoal font-bold rounded-full border-2 border-charcoal/10 hover:border-coral/30 hover:text-coral transition-all text-sm"
                    >
                      Barnes &amp; Noble
                    </a>
                  )}
                  {book.bookshopLink && (
                    <a
                      href={book.bookshopLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-4 py-3 bg-white text-charcoal font-bold rounded-full border-2 border-charcoal/10 hover:border-coral/30 hover:text-coral transition-all text-sm"
                    >
                      Bookshop.org
                    </a>
                  )}
                </div>

                {/* Signed Copy Option */}
                {book.signedCopyAvailable && (
                  <a
                    href="/contact"
                    className="block w-full text-center px-8 py-3.5 bg-gradient-to-r from-purple to-purple-dark text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple/25 transition-all text-sm"
                  >
                    Get a Signed Copy — {book.signedCopyPrice} ✍️
                  </a>
                )}

                {/* Bundle Option */}
                {book.bundleAvailable && (
                  <div className="relative">
                    <button
                      onClick={() => setShowBundle(!showBundle)}
                      className="block w-full text-center px-8 py-3.5 bg-gradient-to-r from-teal to-teal-dark text-white font-bold rounded-full hover:shadow-lg hover:shadow-teal/25 transition-all text-sm"
                    >
                      Special Bundle — {book.bundlePrice} 🎁
                    </button>
                    {showBundle && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 p-4 bg-teal/5 border border-teal/20 rounded-2xl"
                      >
                        <p className="text-sm text-charcoal-light font-medium mb-2">
                          {book.bundleDescription}
                        </p>
                        <a
                          href="/contact"
                          className="text-sm font-bold text-teal-dark hover:text-teal transition-colors"
                        >
                          Order this bundle →
                        </a>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Peek Inside Section — Interactive Book Preview */}
      {book.sampleExcerpt && (
        <section className="py-20 bg-gradient-to-br from-purple/5 to-coral/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-10">
              <span className="inline-block text-4xl mb-3">📖</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-charcoal mb-2">
                Peek Inside
              </h2>
              <p className="text-charcoal-light">
                Open the book and read a little taste of the story...
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <BookPeekInside
                excerpt={book.sampleExcerpt}
                bookTitle={book.title}
                coverColor={book.coverColor}
                emoji={book.emoji}
                accentColor={book.accentColor}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="text-center mt-8">
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-white font-bold rounded-full text-lg hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-1"
              >
                Read the Full Story
                <span aria-hidden="true">→</span>
              </a>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-cream-dark to-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-charcoal mb-2">
              What Readers Say
            </h2>
            {book.copiesSold && (
              <p className="text-charcoal-light text-sm">
                Loved by {book.copiesSold} readers and counting
              </p>
            )}
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {book.reviews.map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-6 shadow-lg shadow-black/5 h-full">
                  <div className="flex gap-0.5 text-sunny-dark mb-3">
                    {"★".repeat(review.stars)}
                  </div>
                  <p className="text-charcoal-light italic leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-charcoal text-sm">
                      {review.author}
                    </p>
                    {review.source && (
                      <p className="text-xs text-charcoal-light">{review.source}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 sm:h-24 bg-cream" />
    </>
  );
}
