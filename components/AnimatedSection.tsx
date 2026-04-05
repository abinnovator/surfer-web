"use client";
import { Variants } from "motion";
import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  /**
   * Optional delay in seconds before the animation starts.
   */
  delay?: number;
  /**
   * Optional direction for the entrance animation: "up", "down", "left", "right".
   */
  direction?: "up" | "down" | "left" | "right";
  /**
   * Optional additional class names to apply to the wrapper element.
   */
  className?: string;
}

const getVariant = (direction: string): Variants => {
  const distance = 30;
  switch (direction) {
    case "up":
      return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
    case "down":
      return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
    case "left":
      return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
    default:
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  }
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const variants = getVariant(direction);
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
