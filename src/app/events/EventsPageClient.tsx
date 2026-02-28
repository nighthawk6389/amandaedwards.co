"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const eventTypes = [
  {
    title: "School Read-Alouds",
    description:
      "An interactive, high-energy reading session featuring one of Amanda's books. Includes character voices, audience participation, and a Q&A with the students.",
    emoji: "📚",
    grades: "Pre-K - 3rd Grade",
    duration: "45 minutes",
    color: "bg-coral/5",
    borderColor: "border-coral/20",
  },
  {
    title: "Writing Workshops",
    description:
      "Students learn the basics of storytelling: characters, settings, problems, and solutions. Every child leaves with the start of their very own story!",
    emoji: "✍️",
    grades: "1st - 3rd Grade",
    duration: "60 minutes",
    color: "bg-purple/5",
    borderColor: "border-purple/20",
  },
  {
    title: "Library Storytime",
    description:
      "A cozy, engaging storytime session perfect for public libraries and community centers. Includes a read-aloud, sing-along, and a fun craft activity.",
    emoji: "📖",
    grades: "Ages 2-7",
    duration: "30-45 minutes",
    color: "bg-teal/5",
    borderColor: "border-teal/20",
  },
  {
    title: "Virtual Author Visit",
    description:
      "Can't travel? No problem! Amanda brings the same energy and fun to virtual visits via Zoom. Perfect for schools anywhere in the world.",
    emoji: "💻",
    grades: "Pre-K - 3rd Grade",
    duration: "30-45 minutes",
    color: "bg-sky/10",
    borderColor: "border-sky/20",
  },
  {
    title: "Book Festival Appearances",
    description:
      "Meet Amanda in person at book festivals and fairs. Book signings, readings, and plenty of fun for the whole family.",
    emoji: "🎪",
    grades: "All ages",
    duration: "Varies",
    color: "bg-sunny/10",
    borderColor: "border-sunny/20",
  },
  {
    title: "Family & Community Events",
    description:
      "Bring the magic to your community event, birthday party, or homeschool group. Custom programming available for any occasion.",
    emoji: "👨‍👩‍👧‍👦",
    grades: "All ages",
    duration: "Custom",
    color: "bg-mint",
    borderColor: "border-teal/20",
  },
];

const testimonials = [
  {
    quote:
      "Amanda's school visit was the highlight of our literacy week! The kids were engaged from start to finish, and they're STILL talking about it weeks later.",
    author: "Ms. Rodriguez",
    role: "2nd Grade Teacher, Sunnyvale Elementary",
  },
  {
    quote:
      "We booked Amanda for our library's summer reading kickoff and she was absolutely wonderful. The children were captivated and the parents loved it too.",
    author: "Jennifer Walsh",
    role: "Children's Librarian, Oakwood Public Library",
  },
  {
    quote:
      "The virtual visit was seamless and so much fun! Amanda kept 25 kindergartners engaged for 45 minutes — that's basically a superpower.",
    author: "Mrs. Chen",
    role: "Kindergarten Teacher",
  },
];

const steps = [
  {
    step: "1",
    title: "Reach Out",
    description:
      "Fill out the booking form below or send me an email with your preferred date, event type, and audience size.",
    emoji: "💌",
  },
  {
    step: "2",
    title: "Plan Together",
    description:
      "We'll chat about your goals for the event and customize the program to fit your students or audience perfectly.",
    emoji: "🗓️",
  },
  {
    step: "3",
    title: "Event Day!",
    description:
      "I arrive (or log in!) ready to share stories, inspire young minds, and make it a day they won't forget.",
    emoji: "🎉",
  },
];

export function EventsPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-6xl mb-4"
          >
            🏫
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-4"
          >
            Events &amp; School Visits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-charcoal-light max-w-2xl mx-auto mb-8"
          >
            Bring the magic of storytelling to your classroom, library, or
            community event! I offer interactive programs that inspire a love of
            reading and spark creativity in young minds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-white font-bold rounded-full text-lg hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-1"
            >
              Book a Visit
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Programs I Offer
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Every program is tailored to your audience and goals. Here are some
              of my most popular offerings:
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.05}>
                <div
                  className={`${event.color} border-2 ${event.borderColor} rounded-3xl p-6 sm:p-8 h-full flex flex-col`}
                >
                  <span className="text-4xl block mb-4">{event.emoji}</span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal mb-2">
                    {event.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed mb-4 flex-1">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-bold text-charcoal-light">
                      {event.grades}
                    </span>
                    <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-bold text-charcoal-light">
                      {event.duration}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-coral/5 to-purple/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-coral text-white rounded-full flex items-center justify-center text-2xl font-bold font-[family-name:var(--font-display)] mx-auto mb-4 shadow-lg shadow-coral/20">
                    {step.step}
                  </div>
                  <span className="text-3xl block mb-3">{step.emoji}</span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              What Educators Say
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-black/5 h-full flex flex-col">
                  <div className="flex gap-0.5 text-sunny-dark mb-4">
                    {"★★★★★"}
                  </div>
                  <p className="text-charcoal-light italic leading-relaxed mb-4 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-charcoal text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-charcoal-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-20 bg-gradient-to-br from-teal/5 to-teal/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-5xl block mb-4">📅</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Ready to Book?
            </h2>
            <p className="text-charcoal-light text-lg mb-8 max-w-2xl mx-auto">
              I&apos;d love to bring stories and creativity to your school,
              library, or event. Reach out and let&apos;s plan something
              magical together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-coral text-white font-bold rounded-full text-lg hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-1"
              >
                Send a Booking Request
              </Link>
              <a
                href="mailto:hello@amandaedwards.co?subject=Event%20Booking%20Inquiry"
                className="px-8 py-4 bg-white text-charcoal font-bold rounded-full text-lg border-2 border-charcoal/10 hover:border-coral/30 hover:text-coral transition-all hover:-translate-y-1"
              >
                Email Directly
              </a>
            </div>
            <p className="text-sm text-charcoal-light mt-6">
              Available for in-person visits within the tri-state area and
              virtual visits worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="h-16 sm:h-24 bg-cream" />
    </>
  );
}
