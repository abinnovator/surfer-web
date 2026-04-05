"use client";
import React from "react";
import { motion } from "motion/react";

interface AnimatedTextProps {
  /** The text to animate */
  text: string;
  /** Additional class names for styling the container */
  className?: string;
}

/**
 * AnimatedText splits the provided string into individual characters and animates them
 * sequentially using a simple fade‑in and upward motion.
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const letters = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};
