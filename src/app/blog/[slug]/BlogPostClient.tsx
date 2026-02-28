"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import type { BlogPost } from "@/data/blogPosts";

interface BlogPostClientProps {
  post: BlogPost;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <>
      <article className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-sm text-charcoal-light"
          >
            <Link href="/blog" className="hover:text-coral transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{post.title}</span>
          </motion.nav>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-coral/10 text-coral-dark rounded-full text-sm font-bold">
                {post.category}
              </span>
              <span className="text-sm text-charcoal-light">
                {post.readTime}
              </span>
              <span className="text-sm text-charcoal-light">
                •{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed">
              {post.excerpt}
            </p>
          </motion.header>

          {/* Featured image area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="h-64 sm:h-80 bg-gradient-to-br from-coral/10 to-purple/10 rounded-3xl flex items-center justify-center mb-12"
          >
            <span className="text-8xl">{post.emoji}</span>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose-custom"
          >
            {post.content.split("\n\n").map((paragraph, i) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mt-12 mb-4"
                  >
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("- **")) {
                const items = trimmed.split("\n").filter((l) => l.trim());
                return (
                  <ul key={i} className="space-y-3 my-6">
                    {items.map((item, j) => {
                      const clean = item.replace(/^- /, "");
                      return (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-charcoal-light leading-relaxed"
                        >
                          <span className="text-coral mt-1 flex-shrink-0">•</span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: clean
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-charcoal">$1</strong>')
                                .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                            }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              if (trimmed.match(/^\d+\./)) {
                const items = trimmed.split("\n").filter((l) => l.trim());
                return (
                  <ol key={i} className="space-y-3 my-6 list-none">
                    {items.map((item, j) => {
                      const clean = item.replace(/^\d+\.\s*/, "");
                      return (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-charcoal-light leading-relaxed"
                        >
                          <span className="bg-coral text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {j + 1}
                          </span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: clean
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-charcoal">$1</strong>')
                                .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                            }}
                          />
                        </li>
                      );
                    })}
                  </ol>
                );
              }

              return (
                <p
                  key={i}
                  className="text-charcoal-light leading-relaxed text-lg my-4"
                  dangerouslySetInnerHTML={{
                    __html: trimmed
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-charcoal">$1</strong>')
                      .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                  }}
                />
              );
            })}
          </motion.div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-charcoal/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cream-dark rounded-full text-sm font-semibold text-charcoal-light"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Card */}
          <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-black/5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral/20 to-purple/20 flex items-center justify-center text-3xl flex-shrink-0">
                👩‍💻
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-charcoal">
                  Amanda Edwards
                </h3>
                <p className="text-sm text-charcoal-light">
                  Children&apos;s book author, storyteller, and professional daydreamer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter */}
      <section className="py-16 bg-cream-dark/50">
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
