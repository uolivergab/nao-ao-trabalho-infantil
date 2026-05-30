"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/* Perceived luminance (ITU-R BT.601). Returns true for light backgrounds. */
function isLightColor(color: string): boolean {
  const match = color.match(/rgba?\(([^)]+)\)/);
  if (!match) return false;
  const [r, g, b, a = 1] = match[1].split(",").map((v) => parseFloat(v.trim()));
  if (a === 0) return false; // transparent → treat as dark canvas
  return 0.299 * r + 0.587 * g + 0.114 * b > 140;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
    restDelta: 0.001,
  });
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section, footer")
    );
    if (sections.length === 0) return;

    const headerOffset = 80;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setOnLight(
              isLightColor(getComputedStyle(entry.target).backgroundColor)
            );
          }
        }
      },
      {
        // a 1px detection line just below the fixed header
        rootMargin: `-${headerOffset}px 0px -${Math.max(
          0,
          window.innerHeight - headerOffset - 1
        )}px 0px`,
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left transition-colors duration-500"
      style={{
        scaleX,
        backgroundColor: onLight
          ? "var(--color-amber)"
          : "var(--color-green)",
      }}
    />
  );
}
