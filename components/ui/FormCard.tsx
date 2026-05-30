"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardReveal } from "@/lib/motion";

type Props = {
  index: number;
  total: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function FormCard({
  index,
  total,
  title,
  description,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <motion.article
      className="group flex flex-col gap-5"
      variants={cardReveal}
      custom={index - 1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-paper-soft)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover saturate-[0.85] contrast-[1.05] brightness-[0.95] transition-transform duration-[800ms] ease-out will-change-transform group-hover:scale-[1.05]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[var(--color-ink)] opacity-0 transition-opacity duration-[800ms] ease-out group-hover:opacity-20"
        />
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-caption text-[var(--color-amber)]/60 transition-colors duration-300 group-hover:text-[var(--color-amber)]">
          {pad(index)} / {pad(total)}
        </span>
      </div>
      <h3 className="text-h3 text-[var(--color-text-dark)]">{title}</h3>
      <p className="text-body text-[var(--color-text-muted-dark)] max-w-[36ch]">
        {description}
      </p>
    </motion.article>
  );
}
