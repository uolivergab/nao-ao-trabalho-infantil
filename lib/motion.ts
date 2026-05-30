import type { Variants, Transition } from "framer-motion";

/* Cinematic easing curves shared across the whole site. */
export const easeCinematic: Transition["ease"] = [0.22, 1, 0.36, 1];
export const easeEditorial: Transition["ease"] = [0.16, 1, 0.3, 1];
export const easeSoft: Transition["ease"] = [0.65, 0, 0.35, 1];

/* Backwards-compatible aliases (identical curves) used by the generic
   RevealOnScroll / AnimatedNumber utilities. */
export const easeOutQuint = easeCinematic;
export const easeOutExpo = easeEditorial;

export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, delay: 0.4 + i * 0.18, ease: easeCinematic },
  }),
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, delay: i * 0.08, ease: easeEditorial },
  }),
};

export const manifestoLine: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: easeCinematic },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: easeEditorial },
  }),
};

export const regionBar: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (i: number = 0) => ({
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.4, delay: 0.3 + i * 0.15, ease: easeCinematic },
  }),
};

export const pillarReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: i * 0.18, ease: easeEditorial },
  }),
};

export const pillarLine: Variants = {
  hidden: { scaleX: 0 },
  visible: (i: number = 0) => ({
    scaleX: 1,
    transition: { duration: 1.2, delay: 0.4 + i * 0.18, ease: easeCinematic },
  }),
};

export const closingReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.8, ease: easeCinematic },
  },
};

export const ctaReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, delay: 1.6 + i * 0.12, ease: easeCinematic },
  }),
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
