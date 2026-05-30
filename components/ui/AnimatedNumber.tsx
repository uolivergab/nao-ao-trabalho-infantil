"use client";
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { easeOutQuint } from "@/lib/motion";

type Props = {
  value: number;
  duration?: number;
  className?: string;
  ariaLabel?: string;
};

const nf = new Intl.NumberFormat("pt-BR");

export function AnimatedNumber({
  value,
  duration = 2,
  className = "",
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
  });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(prefersReducedMotion ? value : 0);
  const formatted = useTransform(motionValue, (latest) =>
    nf.format(Math.round(latest))
  );

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      motionValue.set(value);
      return;
    }

    motionValue.set(0);

    let controls: ReturnType<typeof animate> | null = null;
    const frameId = requestAnimationFrame(() => {
      controls = animate(motionValue, value, {
        duration,
        ease: easeOutQuint,
      });
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (controls) controls.stop();
    };
  }, [inView, value, duration, motionValue, prefersReducedMotion]);

  return (
    <motion.span
      ref={ref}
      className={className}
      aria-label={ariaLabel ?? nf.format(value)}
    >
      {formatted}
    </motion.span>
  );
}