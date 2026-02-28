"use client";

import { motion } from "framer-motion";

const elements = [
  { emoji: "⭐", top: "10%", left: "5%", size: "text-2xl", delay: 0 },
  { emoji: "☁️", top: "15%", left: "85%", size: "text-4xl", delay: 0.5 },
  { emoji: "🌈", top: "60%", left: "90%", size: "text-3xl", delay: 1 },
  { emoji: "✨", top: "75%", left: "8%", size: "text-xl", delay: 1.5 },
  { emoji: "🦋", top: "40%", left: "3%", size: "text-2xl", delay: 2 },
  { emoji: "🌸", top: "85%", left: "80%", size: "text-2xl", delay: 0.8 },
];

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.size} opacity-15 select-none`}
          style={{ top: el.top, left: el.left }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  );
}
