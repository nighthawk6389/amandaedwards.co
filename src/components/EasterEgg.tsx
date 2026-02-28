"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Konami code: up up down down left right left right b a
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

// Hidden clickable characters scattered throughout the site
interface HiddenCharacterProps {
  emoji: string;
  message: string;
  position: string; // tailwind classes like "bottom-4 right-4"
  delay?: number;
}

export function HiddenCharacter({
  emoji,
  message,
  position,
  delay = 0,
}: HiddenCharacterProps) {
  const [found, setFound] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (!found) {
      setFound(true);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <div className={`absolute ${position} z-20`} data-cursor="easter-egg">
      <motion.button
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: found ? 0.9 : 0.15 }}
        whileHover={{ opacity: 0.8, scale: 1.3 }}
        transition={{ delay, duration: 0.3 }}
        className="text-lg sm:text-xl select-none"
        aria-label="Hidden character"
      >
        {emoji}
      </motion.button>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-charcoal text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-lg"
          >
            {message}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-charcoal rotate-45 -translate-y-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Konami code easter egg that triggers a celebration
export function KonamiEasterEgg() {
  const [activated, setActivated] = useState(false);
  const [codeProgress, setCodeProgress] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activated) return;

      if (e.code === KONAMI_CODE[codeProgress]) {
        const next = codeProgress + 1;
        setCodeProgress(next);
        if (next === KONAMI_CODE.length) {
          setActivated(true);
          setTimeout(() => setActivated(false), 5000);
          setCodeProgress(0);
        }
      } else {
        setCodeProgress(0);
      }
    },
    [codeProgress, activated]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] pointer-events-none flex items-center justify-center"
        >
          {/* Confetti burst */}
          {Array.from({ length: 40 }).map((_, i) => {
            const emojis = [
              "⭐",
              "🌟",
              "✨",
              "🎉",
              "🦋",
              "🌈",
              "💫",
              "🎊",
              "📚",
              "🐉",
              "🌙",
              "☁️",
              "🌵",
            ];
            const randomEmoji =
              emojis[Math.floor(Math.random() * emojis.length)];
            const randomX = Math.random() * 100;
            const randomDelay = Math.random() * 0.5;
            const randomDuration = 2 + Math.random() * 2;

            return (
              <motion.span
                key={i}
                className="absolute text-2xl select-none"
                initial={{
                  x: "50vw",
                  y: "50vh",
                  scale: 0,
                  rotate: 0,
                }}
                animate={{
                  x: `${randomX}vw`,
                  y: "-20vh",
                  scale: [0, 1.5, 1],
                  rotate: Math.random() * 720 - 360,
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: randomDuration,
                  delay: randomDelay,
                  ease: "easeOut",
                }}
              >
                {randomEmoji}
              </motion.span>
            );
          })}

          {/* Secret message */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-2xl text-center max-w-sm mx-4"
          >
            <span className="text-5xl block mb-3">🎉</span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal mb-2">
              You found a secret!
            </h3>
            <p className="text-charcoal-light text-sm">
              You&apos;re a true explorer — just like the characters in
              Amanda&apos;s books!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Click-to-reveal secret on the book emoji in the header
export function HeaderBookSecret() {
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const handleClick = () => {
    const next = clickCount + 1;
    setClickCount(next);
    if (next >= 5) {
      setShowSecret(true);
      setClickCount(0);
      setTimeout(() => setShowSecret(false), 3000);
    }
  };

  return (
    <>
      <motion.span
        className="text-3xl cursor-pointer select-none"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        whileTap={{ scale: 1.3 }}
        transition={{ duration: 0.5 }}
        onClick={handleClick}
        role="img"
        aria-label="Books"
      >
        📚
      </motion.span>

      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 px-4 py-2 bg-sunny text-charcoal text-xs font-bold rounded-xl whitespace-nowrap shadow-lg z-50"
          >
            Psst... you found a secret! You&apos;re awesome! 🌟
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
