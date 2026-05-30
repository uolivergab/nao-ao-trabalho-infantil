"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pillarReveal, pillarLine } from "@/lib/motion";

type Props = {
  index: number;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function PillarCard({
  index,
  title,
  description,
  ctaLabel,
  ctaHref,
}: Props) {
  const i = index - 1;

  return (
    <motion.article
      className="relative flex flex-col gap-6 pt-8"
      variants={pillarReveal}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 block h-px w-full origin-left bg-[color-mix(in_oklab,var(--color-text-dark)_15%,transparent)]"
        variants={pillarLine}
        custom={i}
      />

      <span
        aria-hidden="true"
        className="font-display text-[clamp(3rem,5vw,4rem)] font-light leading-none text-[var(--color-amber)]"
      >
        {pad(index)}
      </span>

      <h3 className="text-h3 text-[var(--color-text-dark)]">{title}</h3>

      <p className="text-body text-[var(--color-text-muted-dark)] flex-1">
        {description}
      </p>

      <Link
        href={ctaHref}
        className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium tracking-[0.01em] text-[var(--color-text-dark)] hover:text-[var(--color-green-hover)] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-amber)]"
      >
        <span>{ctaLabel}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="transition-transform duration-250 ease-out group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </motion.article>
  );
}
