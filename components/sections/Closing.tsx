"use client";

import { motion } from "framer-motion";
import { revealUp, closingReveal } from "@/lib/motion";

export function Closing() {
  return (
    <section
      className="flex min-h-[70vh] items-center justify-center bg-[var(--color-ink)]"
      aria-labelledby="closing-heading"
    >
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            id="closing-heading"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--color-text-light)]"
            variants={closingReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            A infância não pode{" "}
            <span className="font-medium text-[var(--color-amber)]">
              esperar
            </span>
            .
          </motion.h2>

          <motion.p
            className="text-caption mt-12 text-[var(--color-text-muted-light)]"
            variants={revealUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Campanha Não ao Trabalho Infantil
            <span aria-hidden="true" className="mx-3">
              ·
            </span>
            12 de junho
            <span aria-hidden="true" className="mx-3">
              ·
            </span>
            Fundação Abrinq
          </motion.p>
        </div>
      </div>
    </section>
  );
}
