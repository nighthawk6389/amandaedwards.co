"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import type { BlogPost } from "@/data/blogPosts";

interface BlogPageClientProps {
  posts: BlogPost[];
}

export function BlogPageClient({ posts }: BlogPageClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-6xl mb-4"
          >
            📝
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-4"
          >
            The Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-charcoal-light max-w-2xl mx-auto"
          >
            Stories behind the stories, reading tips for parents, creative
            inspiration, and dispatches from the wonderful world of children&apos;s
            books.
          </motion.p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-coral/10 transition-all hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-coral/10 to-purple/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-6xl group-hover:scale-110 transition-transform">
                        {post.emoji}
                      </span>
                    </div>
                    <div className="p-6 sm:p-8 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-0.5 bg-coral/10 text-coral-dark rounded-full text-xs font-bold">
                          {post.category}
                        </span>
                        <span className="text-xs text-charcoal-light">
                          {post.readTime}
                        </span>
                        <span className="text-xs text-charcoal-light">
                          •{" "}
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-charcoal mb-3 group-hover:text-coral transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-charcoal-light leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 bg-cream-dark rounded-full text-xs font-semibold text-charcoal-light"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
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
