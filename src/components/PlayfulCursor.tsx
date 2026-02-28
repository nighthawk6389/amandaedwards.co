"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function PlayfulCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverEmoji, setHoverEmoji] = useState("✨");
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    },
    [cursorX, cursorY, visible]
  );

  useEffect(() => {
    // Only show custom cursor on devices with fine pointer (no touch)
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", () => setIsClicking(true));
    window.addEventListener("mouseup", () => setIsClicking(false));

    // Detect what the user is hovering over
    const handleHoverDetection = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestLink = target.closest("a, button, [role='button']");
      const closestBook = target.closest("[data-cursor='book']");
      const closestEasterEgg = target.closest("[data-cursor='easter-egg']");

      if (closestEasterEgg) {
        setIsHovering(true);
        setHoverEmoji("🎉");
      } else if (closestBook) {
        setIsHovering(true);
        setHoverEmoji("📖");
      } else if (closestLink) {
        setIsHovering(true);
        setHoverEmoji("👆");
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleHoverDetection);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHoverDetection);
    };
  }, [handleMouseMove]);

  // Respect prefers-reduced-motion
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  if (reducedMotion) return null;

  return (
    <>
      {/* Trail dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          className="relative flex items-center justify-center"
        >
          {/* Outer ring */}
          <motion.div
            className="absolute w-10 h-10 rounded-full border-2 border-coral/40"
            animate={{
              scale: isHovering ? 1.4 : 1,
              borderColor: isHovering
                ? "rgba(255, 107, 107, 0.6)"
                : "rgba(255, 107, 107, 0.3)",
            }}
            transition={{ duration: 0.2 }}
          />
          {/* Inner dot / emoji */}
          {isHovering ? (
            <motion.span
              key={hoverEmoji}
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              className="text-lg select-none"
            >
              {hoverEmoji}
            </motion.span>
          ) : (
            <motion.div
              className="w-2 h-2 rounded-full bg-coral"
              animate={{ scale: isClicking ? 0.5 : 1 }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Hide default cursor on desktop via style tag */}
      <style jsx global>{`
        @media (pointer: fine) and (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
