"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NewsletterSignup } from "./NewsletterSignup";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Books", href: "/books" },
      { label: "About Amanda", href: "/about" },
      { label: "Fun Stuff", href: "/activities" },
      { label: "Events", href: "/events" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Instagram", href: "https://instagram.com/amandaedwardsbooks" },
      { label: "Facebook", href: "https://facebook.com/amandaedwardsbooks" },
      { label: "TikTok", href: "https://tiktok.com/@amandaedwardsbooks" },
    ],
  },
  {
    title: "For Parents",
    links: [
      { label: "Reading Tips", href: "/blog/why-reading-aloud-matters" },
      { label: "Activity Downloads", href: "/activities" },
      { label: "School Visits", href: "/events" },
      { label: "Bulk Orders", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-white overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-16 sm:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C320,100 420,0 720,50 C1020,100 1200,20 1440,40 L1440,100 L0,100 Z"
            fill="#2D3436"
          />
        </svg>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-12 left-10 text-4xl opacity-10 animate-float">
        ⭐
      </div>
      <div className="absolute top-20 right-16 text-3xl opacity-10 animate-float-slow">
        🌙
      </div>
      <div className="absolute bottom-32 left-1/4 text-2xl opacity-10 animate-float">
        ✨
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Newsletter Section */}
        <div className="mb-16">
          <NewsletterSignup variant="footer" />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📚</span>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold">
                Amanda Edwards
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Creating magical stories that spark imagination and celebrate what
              makes every child unique.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wider text-coral mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-coral transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Amanda Edwards. Made with{" "}
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              ❤️
            </motion.span>{" "}
            and a lot of imagination.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
