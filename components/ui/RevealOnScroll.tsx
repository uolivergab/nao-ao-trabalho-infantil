"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutQuint } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  amount?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

function getOffset(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

export function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 24,
  amount = 0.2,
  className = "",
  as = "div",
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  const offset = prefersReducedMotion
    ? { x: 0, y: 0 }
    : getOffset(direction, distance);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: prefersReducedMotion ? 0.001 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: easeOutQuint,
      }}
    >
      {children}
    </MotionTag>
  );
}
