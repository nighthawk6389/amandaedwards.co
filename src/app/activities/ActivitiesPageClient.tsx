"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const activities = [
  {
    title: "Whiskers Coloring Pages",
    description: "Color in Whiskers the kitten and the glowing Moonlight Garden. 4 pages of nighttime magic!",
    emoji: "🎨",
    book: "Whiskers and the Moonlight Garden",
    color: "bg-[#1a1a4e]/5",
    borderColor: "border-[#1a1a4e]/20",
    type: "Coloring Pages",
  },
  {
    title: "Draw Your Own Cloud Character",
    description: "Follow step-by-step instructions to draw Cumulus and friends. Each cloud shows a different emotion!",
    emoji: "✏️",
    book: "The Big Feelings Cloud",
    color: "bg-sky/5",
    borderColor: "border-sky/20",
    type: "Drawing Tutorial",
  },
  {
    title: "Patchwork Dragon Craft",
    description: "Cut, color, and create your very own patchwork dragon using fabric scraps or colored paper!",
    emoji: "✂️",
    book: "Penelope and the Patchwork Dragon",
    color: "bg-purple/5",
    borderColor: "border-purple/20",
    type: "Craft Activity",
  },
  {
    title: "Desert Adventure Maze",
    description: "Help Captain Tumbleweed roll through the desert maze to find the lost baby roadrunner!",
    emoji: "🌵",
    book: "Captain Tumbleweed Saves the Day",
    color: "bg-sunny/10",
    borderColor: "border-sunny/20",
    type: "Puzzle",
  },
  {
    title: "My Feelings Weather Report",
    description: "A printable feelings chart where kids track their 'emotional weather' every day of the week.",
    emoji: "🌤️",
    book: "The Big Feelings Cloud",
    color: "bg-teal/5",
    borderColor: "border-teal/20",
    type: "Social-Emotional",
  },
  {
    title: "Story Starter Cards",
    description: "20 creative writing prompt cards to spark imagination. Mix and match characters, settings, and adventures!",
    emoji: "📝",
    book: "All Books",
    color: "bg-coral/5",
    borderColor: "border-coral/20",
    type: "Writing Prompts",
  },
];

const categories = [
  { label: "All", emoji: "✨" },
  { label: "Coloring Pages", emoji: "🎨" },
  { label: "Drawing Tutorial", emoji: "✏️" },
  { label: "Craft Activity", emoji: "✂️" },
  { label: "Puzzle", emoji: "🌵" },
  { label: "Writing Prompts", emoji: "📝" },
];

export function ActivitiesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sunny/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-6xl mb-4"
          >
            🎨
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-4"
          >
            Fun Stuff!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-charcoal-light max-w-2xl mx-auto"
          >
            Free printable activities, coloring pages, crafts, and creative
            prompts — all inspired by Amanda&apos;s books. Perfect for kids,
            classrooms, and family fun time!
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-white border-2 border-charcoal/10 text-charcoal-light hover:border-coral/30 hover:text-coral transition-all first:bg-coral first:text-white first:border-coral"
              >
                <span className="mr-1.5">{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, i) => (
              <AnimatedSection key={activity.title} delay={i * 0.05}>
                <motion.div
                  className={`${activity.color} border-2 ${activity.borderColor} rounded-3xl p-6 sm:p-8 h-full flex flex-col cursor-pointer`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{activity.emoji}</span>
                    <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-bold text-charcoal-light">
                      {activity.type}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed mb-4 flex-1">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-charcoal-light/60 font-semibold">
                      From: {activity.book}
                    </span>
                    <span className="px-4 py-2 bg-coral text-white text-sm font-bold rounded-full hover:bg-coral-dark transition-colors">
                      Download Free
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher/Parent Section */}
      <section className="py-20 bg-gradient-to-br from-teal/5 to-purple/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-black/5 h-full">
                <span className="text-4xl block mb-4">👩‍🏫</span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal mb-3">
                  For Teachers
                </h3>
                <p className="text-charcoal-light leading-relaxed mb-6">
                  All activities are aligned with early learning standards and
                  designed to complement classroom reading. Feel free to print as
                  many copies as you need!
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-teal-dark font-bold hover:text-teal transition-colors"
                >
                  Request a classroom kit <span>→</span>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-black/5 h-full">
                <span className="text-4xl block mb-4">👨‍👩‍👧‍👦</span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal mb-3">
                  For Parents
                </h3>
                <p className="text-charcoal-light leading-relaxed mb-6">
                  These activities are perfect for rainy days, road trips, quiet
                  time, or as a fun companion to reading the books together.
                  No supplies needed beyond paper and crayons!
                </p>
                <Link
                  href="/blog/5-ways-to-spark-imagination"
                  className="inline-flex items-center gap-2 text-coral font-bold hover:text-coral-dark transition-colors"
                >
                  More activity ideas <span>→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
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
