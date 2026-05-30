"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const ROOTS = [
  { index: "01", label: "Renda familiar insuficiente" },
  { index: "02", label: "Acesso desigual à educação" },
  { index: "03", label: "Falhas na rede de proteção" },
];

export function Causes() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      className="bg-[var(--color-paper)] section-spacing"
      aria-labelledby="causes-heading"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center md:gap-12 lg:gap-20">
          <div className="md:col-span-6 order-2 md:order-1">
            <RevealOnScroll>
              <SectionLabel>A raiz</SectionLabel>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2
                id="causes-heading"
                className="text-h2 mt-6 font-display text-[var(--color-text-dark)] max-w-[16ch]"
              >
                Onde falta direito, sobra trabalho.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="mt-8 space-y-6 text-body-large text-[var(--color-text-muted-dark)] max-w-[52ch]">
                <p>
                  O trabalho infantil é sintoma de desigualdade. Onde não há
                  renda, educação, moradia e proteção social, crianças trabalham
                  para sustentar o que o Estado e a sociedade deveriam garantir.
                </p>
                <p className="text-[var(--color-text-dark)] font-display text-h3 leading-snug">
                  Combater o trabalho infantil é, antes de tudo, garantir
                  direitos.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <ul
                className="mt-10 flex flex-col gap-5 border-t border-[color-mix(in_oklab,var(--color-text-dark)_15%,transparent)] pt-8 md:flex-row md:gap-10"
                role="list"
              >
                {ROOTS.map((root) => (
                  <li
                    key={root.index}
                    className="flex items-baseline gap-3 md:flex-col md:gap-2"
                  >
                    <span className="font-display text-2xl font-light text-[var(--color-amber)]">
                      {root.index}
                    </span>
                    <span className="text-[0.9375rem] text-[var(--color-text-dark)] leading-snug max-w-[20ch]">
                      {root.label}
                    </span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          <div className="md:col-span-6 order-1 md:order-2">
            <div
              ref={ref}
              className="relative aspect-[4/5] w-full overflow-hidden"
            >
              <motion.div
                className="absolute inset-x-0 -top-[10%] -bottom-[10%]"
                style={prefersReducedMotion ? undefined : { y }}
              >
                <Image
                  src="/images/causas-caderno.webp"
                  alt="Caderno escolar em uma mesa, simbolizando o direito à educação interrompido pelo trabalho infantil."
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                  style={{ filter: "saturate(0.85)" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
