"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const milestones = [
  {
    year: "2022",
    title: "The Dream Begins",
    description: "Started writing my first children's book after years of telling bedtime stories.",
    emoji: "💭",
  },
  {
    year: "2023",
    title: "First Draft Done!",
    description: "Finished the first manuscript for Whiskers and the Moonlight Garden.",
    emoji: "✍️",
  },
  {
    year: "2024",
    title: "Published!",
    description: "Self-published my first two books and started visiting schools.",
    emoji: "🎉",
  },
  {
    year: "2025",
    title: "Growing the Dream",
    description: "Four books published, thousands of copies sold, and many more stories to tell.",
    emoji: "🚀",
  },
];

const funFacts = [
  { emoji: "☕", fact: "Coffee consumed while writing: approximately a million cups" },
  { emoji: "📚", fact: "Childhood books I still own: 200+" },
  { emoji: "🐱", fact: "Cat named after a literary character: Yes (Fitzgerald)" },
  { emoji: "🌲", fact: "Favorite writing spot: a bench in the woods near my house" },
  { emoji: "📝", fact: "Drafts before a book is 'done': at least 15" },
  { emoji: "🍫", fact: "Snack of choice while writing: dark chocolate" },
];

export function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative max-w-md mx-auto">
                <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-coral/20 via-purple/15 to-teal/20 overflow-hidden shadow-2xl shadow-coral/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <span className="text-[100px] block mb-4">👩‍💻</span>
                      <p className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal">
                        Amanda Edwards
                      </p>
                      <p className="text-charcoal-light">
                        Author, Dreamer, Professional Coffee Drinker
                      </p>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute -top-3 -right-3 bg-sunny px-4 py-2 rounded-full font-bold text-sm text-charcoal shadow-lg"
                  animate={{ rotate: [5, 5, 5] }}
                >
                  ✨ Storyteller
                </motion.div>
                <motion.div
                  className="absolute -bottom-3 -left-3 bg-teal px-4 py-2 rounded-full font-bold text-sm text-white shadow-lg"
                  animate={{ rotate: [-3, -3, -3] }}
                >
                  📚 Book Lover
                </motion.div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 bg-coral/10 text-coral-dark rounded-full text-sm font-bold mb-6">
                👋 Hello There!
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-6 leading-tight">
                I&apos;m Amanda, and I write books for little dreamers.
              </h1>
              <div className="space-y-4 text-charcoal-light leading-relaxed text-lg">
                <p>
                  I&apos;m an independent children&apos;s book author who believes that
                  the best stories are the ones that make kids feel something —
                  whether it&apos;s a belly laugh, a warm hug, or the quiet
                  realization that they&apos;re exactly who they&apos;re meant to be.
                </p>
                <p>
                  My journey into children&apos;s books started the way most good
                  things do: by accident. I was reading to my niece one evening,
                  making up silly voices and adding extra plot twists that
                  weren&apos;t in the book, when she looked up at me and said,
                  &ldquo;You should write a book, Auntie.&rdquo;
                </p>
                <p>
                  So I did. And then I wrote another one. And another. And now
                  here we are!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Mission */}
      <section className="py-20 bg-gradient-to-br from-purple/5 to-teal/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-5xl mb-4">💜</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              My Mission
            </h2>
            <p className="text-xl text-charcoal-light leading-relaxed max-w-3xl mx-auto">
              I write books that help children see themselves in stories — books
              that celebrate being different, feeling big feelings, and finding
              courage in the smallest of moments. Every child deserves a story
              that whispers, <em className="text-coral font-semibold">&ldquo;You belong here, just as you are.&rdquo;</em>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              The Story So Far
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-coral/20 hidden sm:block" />

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, i) => (
                <AnimatedSection
                  key={milestone.year}
                  delay={i * 0.1}
                  direction="left"
                >
                  <div className="flex gap-6 items-start">
                    <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-lg shadow-coral/10 items-center justify-center text-2xl border-2 border-coral/20 z-10">
                      {milestone.emoji}
                    </div>
                    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-black/5 flex-1">
                      <span className="inline-block px-3 py-1 bg-coral/10 text-coral-dark rounded-full text-sm font-bold mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal mb-2">
                        <span className="sm:hidden mr-2">{milestone.emoji}</span>
                        {milestone.title}
                      </h3>
                      <p className="text-charcoal-light">{milestone.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-gradient-to-br from-sunny/10 to-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Fun Facts About Me
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  className="bg-white rounded-2xl p-5 shadow-md shadow-black/5 flex items-start gap-4"
                  whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                >
                  <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {item.fact}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Want to bring stories to your school or event?
            </h2>
            <p className="text-charcoal-light text-lg mb-8 max-w-2xl mx-auto">
              I love visiting classrooms, libraries, and book festivals! Let&apos;s
              chat about bringing a little magic to your community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-coral text-white font-bold rounded-full text-lg hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-1"
              >
                Book a Visit
              </Link>
              <Link
                href="/books"
                className="px-8 py-4 bg-white text-charcoal font-bold rounded-full text-lg border-2 border-charcoal/10 hover:border-coral/30 hover:text-coral transition-all hover:-translate-y-1"
              >
                See My Books
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="h-16 sm:h-24 bg-cream" />
    </>
  );
}
