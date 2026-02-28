"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BookCard } from "@/components/BookCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { FloatingElements } from "@/components/FloatingElements";
import type { Book } from "@/data/books";
import type { BlogPost } from "@/data/blogPosts";

interface HomePageClientProps {
  books: Book[];
  blogPosts: BlogPost[];
}

const reviews = [
  {
    text: "Amanda's books have become the highlight of our bedtime routine. Pure magic!",
    author: "Jessica T.",
    role: "Parent of two",
  },
  {
    text: "My students beg me to read these books every single day. They're classroom favorites!",
    author: "Ms. Rodriguez",
    role: "Kindergarten Teacher",
  },
  {
    text: "Stories that make kids feel seen and celebrated — exactly what children's lit should be.",
    author: "BookBug Reviews",
    role: "Children's Book Reviewer",
  },
];

const activityCategories = [
  { emoji: "🎨", label: "Coloring Pages", description: "Beautiful scenes to color from every book" },
  { emoji: "✏️", label: "Drawing Tutorials", description: "Learn to draw your favorite characters" },
  { emoji: "✂️", label: "Craft Activities", description: "Hands-on projects for creative kids" },
  { emoji: "📝", label: "Writing Prompts", description: "Story starters to spark imagination" },
];

export function HomePageClient({ books, blogPosts }: HomePageClientProps) {
  return (
    <>
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral/5 via-transparent to-purple/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-6xl sm:text-7xl mb-6">📚</span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal mb-6 leading-tight">
              Magical Stories for{" "}
              <span className="gradient-text">Little Dreamers</span>
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Hi! I&apos;m Amanda Edwards, and I write children&apos;s books that spark
              imagination, celebrate uniqueness, and make bedtime the best time of day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/books"
                className="px-8 py-4 bg-coral text-white font-bold rounded-full text-lg hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-1"
              >
                Explore My Books
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white text-charcoal font-bold rounded-full text-lg border-2 border-charcoal/10 hover:border-coral/30 hover:text-coral transition-all hover:-translate-y-1"
              >
                Meet Amanda
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Counters */}
      <section className="py-16 bg-white/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter
              target={10000}
              suffix="+"
              label="Books Sold"
              emoji="📚"
            />
            <AnimatedCounter
              target={50}
              suffix="+"
              label="School Visits"
              emoji="🏫"
            />
            <AnimatedCounter
              target={5000}
              suffix="+"
              label="Happy Readers"
              emoji="😊"
            />
            <AnimatedCounter
              target={4}
              suffix=""
              label="Books Published"
              emoji="✨"
            />
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-cream-dark/50 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-4xl mb-4">✨</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Featured Books
            </h2>
            <p className="text-charcoal-light max-w-xl mx-auto">
              Each story is a little world of wonder, waiting to be explored at bedtime,
              story time, or any time!
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {books.map((book, i) => (
              <BookCard key={book.slug} book={book} index={i} />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple text-white font-bold rounded-full text-lg hover:bg-purple-dark transition-all hover:-translate-y-1"
            >
              View All Books <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative max-w-md mx-auto">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-coral/20 via-purple/15 to-teal/20 flex items-center justify-center shadow-2xl shadow-coral/10">
                  <div className="text-center p-8">
                    <span className="text-[100px] block mb-4">👩‍💻</span>
                    <p className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal">
                      Amanda Edwards
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-1.5 bg-coral/10 text-coral-dark rounded-full text-sm font-bold mb-6">
                About the Author
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Stories Born from Imagination &amp; Love
              </h2>
              <p className="text-charcoal-light leading-relaxed text-lg mb-6">
                I&apos;m an independent children&apos;s book author who believes that the best
                stories make kids feel something — whether it&apos;s a belly laugh, a warm hug,
                or the quiet realization that they&apos;re exactly who they&apos;re meant to be.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-coral font-bold text-lg hover:text-coral-dark transition-colors"
              >
                Read My Story <span>→</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-purple/5 to-teal/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-4xl mb-4">💬</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              What Readers Say
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-black/5 h-full">
                  <div className="flex gap-0.5 text-sunny-dark text-lg mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-charcoal-light italic leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-charcoal">{review.author}</p>
                    <p className="text-sm text-charcoal-light">{review.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Teaser Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-4xl mb-4">🎨</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Free Fun for Kids!
            </h2>
            <p className="text-charcoal-light max-w-xl mx-auto">
              Download free coloring pages, crafts, and activities inspired by the books!
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityCategories.map((category, i) => (
              <AnimatedSection key={category.label} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-6 text-center shadow-lg shadow-black/5 hover:shadow-xl transition-shadow h-full">
                  <span className="text-5xl block mb-4">{category.emoji}</span>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-charcoal mb-2">
                    {category.label}
                  </h3>
                  <p className="text-charcoal-light text-sm">
                    {category.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sunny text-charcoal font-bold rounded-full text-lg hover:bg-sunny-dark transition-all hover:-translate-y-1"
            >
              See All Activities <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-cream-dark/50 to-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-4xl mb-4">📝</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              From the Blog
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-coral/10 transition-all hover:-translate-y-1"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-32 sm:h-auto bg-gradient-to-br from-coral/10 to-purple/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-5xl group-hover:scale-110 transition-transform">
                        {post.emoji}
                      </span>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-0.5 bg-coral/10 text-coral-dark rounded-full text-xs font-bold">
                          {post.category}
                        </span>
                        <span className="text-xs text-charcoal-light">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-charcoal mb-2 group-hover:text-coral transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-charcoal-light text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-coral font-bold text-lg hover:text-coral-dark transition-colors"
            >
              Read More Posts <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 sm:py-28">
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
