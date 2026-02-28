"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const contactReasons = [
  { emoji: "📚", label: "School Visit", value: "school-visit" },
  { emoji: "📦", label: "Bulk Order", value: "bulk-order" },
  { emoji: "📰", label: "Press / Media", value: "press" },
  { emoji: "💌", label: "Fan Mail", value: "fan-mail" },
  { emoji: "🤝", label: "Collaboration", value: "collaboration" },
  { emoji: "💬", label: "Other", value: "other" },
];

const socialLinks = [
  {
    name: "Instagram",
    emoji: "📸",
    handle: "@amandaedwardsbooks",
    url: "https://instagram.com/amandaedwardsbooks",
    color: "bg-pink-light",
  },
  {
    name: "Facebook",
    emoji: "👍",
    handle: "Amanda Edwards Books",
    url: "https://facebook.com/amandaedwardsbooks",
    color: "bg-sky-light/30",
  },
  {
    name: "TikTok",
    emoji: "🎵",
    handle: "@amandaedwardsbooks",
    url: "https://tiktok.com/@amandaedwardsbooks",
    color: "bg-purple/10",
  },
];

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-6xl mb-4"
          >
            💌
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-4"
          >
            Let&apos;s Chat!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-charcoal-light max-w-2xl mx-auto"
          >
            Whether you&apos;re a teacher, parent, fellow book lover, or small human
            who wants to share your drawing of Patches — I&apos;d love to hear from
            you!
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <AnimatedSection>
                  <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg shadow-black/5 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-6xl mb-4"
                    >
                      🎉
                    </motion.div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                      Message Sent!
                    </h2>
                    <p className="text-charcoal-light text-lg">
                      Thanks for reaching out! I&apos;ll get back to you as soon as I
                      can — usually within a few days. In the meantime, check
                      out the latest on the{" "}
                      <a href="/blog" className="text-coral font-bold hover:underline">
                        blog
                      </a>
                      !
                    </p>
                  </div>
                </AnimatedSection>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-black/5 space-y-6"
                >
                  {/* Reason Selection */}
                  <div>
                    <label className="block font-[family-name:var(--font-display)] font-bold text-charcoal mb-3">
                      I&apos;m reaching out about...
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {contactReasons.map((reason) => (
                        <button
                          type="button"
                          key={reason.value}
                          onClick={() =>
                            setFormData({ ...formData, reason: reason.value })
                          }
                          className={`px-3 py-2.5 rounded-2xl text-sm font-semibold transition-all border-2 ${
                            formData.reason === reason.value
                              ? "border-coral bg-coral/5 text-coral"
                              : "border-charcoal/10 text-charcoal-light hover:border-coral/30"
                          }`}
                        >
                          <span className="mr-1.5">{reason.emoji}</span>
                          {reason.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-[family-name:var(--font-display)] font-bold text-charcoal mb-2 text-sm"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl border-2 border-charcoal/10 focus:border-coral focus:outline-none focus:ring-4 focus:ring-coral/10 text-charcoal"
                        placeholder="e.g., Captain Tumbleweed"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-[family-name:var(--font-display)] font-bold text-charcoal mb-2 text-sm"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl border-2 border-charcoal/10 focus:border-coral focus:outline-none focus:ring-4 focus:ring-coral/10 text-charcoal"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-[family-name:var(--font-display)] font-bold text-charcoal mb-2 text-sm"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border-2 border-charcoal/10 focus:border-coral focus:outline-none focus:ring-4 focus:ring-coral/10 text-charcoal resize-none"
                      placeholder="Tell me everything! ✨"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-coral text-white font-bold rounded-full text-lg hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Send Message 💌
                  </button>
                </motion.form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Social Links */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-3xl p-6 shadow-lg shadow-black/5">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal mb-4">
                    Find Me Online
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-4 py-3 ${social.color} rounded-2xl hover:scale-[1.02] transition-transform`}
                      >
                        <span className="text-2xl">{social.emoji}</span>
                        <div>
                          <p className="font-bold text-charcoal text-sm">
                            {social.name}
                          </p>
                          <p className="text-xs text-charcoal-light">
                            {social.handle}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* School Visits */}
              <AnimatedSection delay={0.2}>
                <div className="bg-gradient-to-br from-teal/10 to-teal/5 rounded-3xl p-6 border-2 border-teal/20">
                  <span className="text-4xl block mb-3">🏫</span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal mb-2">
                    School Visits
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    I love visiting schools and libraries! I offer interactive
                    read-alouds, writing workshops, and Q&amp;A sessions for grades
                    Pre-K through 3rd.
                  </p>
                </div>
              </AnimatedSection>

              {/* FAQ */}
              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-3xl p-6 shadow-lg shadow-black/5">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal mb-4">
                    Quick Answers
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-charcoal text-sm mb-1">
                        Response time?
                      </p>
                      <p className="text-charcoal-light text-sm">
                        Usually within 2-3 business days!
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-charcoal text-sm mb-1">
                        Signed copies?
                      </p>
                      <p className="text-charcoal-light text-sm">
                        Yes! Just mention it in your message.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-charcoal text-sm mb-1">
                        Virtual visits?
                      </p>
                      <p className="text-charcoal-light text-sm">
                        Absolutely! I do Zoom visits for schools anywhere.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 sm:h-24 bg-cream" />
    </>
  );
}
