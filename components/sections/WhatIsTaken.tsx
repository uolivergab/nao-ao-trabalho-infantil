"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { manifestoLine, easeCinematic } from "@/lib/motion";

type Line = { text: string; emphasis: boolean };

const LINES: Line[] = [
  { text: "Quando o trabalho entra cedo, a infância sai antes.", emphasis: true },
  { text: "Sai a escola.", emphasis: false },
  { text: "Sai a brincadeira.", emphasis: false },
  { text: "Sai o tempo de ser criança.", emphasis: false },
  { text: "Fica o cansaço, fica a vulnerabilidade,", emphasis: false },
  { text: "fica uma vida adulta que começou cedo demais.", emphasis: true },
];

const EMPHASIS =
  "text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium text-[var(--color-paper)]";
const INTERMEDIATE =
  "text-[clamp(1.5rem,2.75vw,2.25rem)] font-normal text-[var(--color-paper)]/75";

export function WhatIsTaken() {
  return (
    <section
      id="manifesto"
      className="bg-[var(--color-ink)] section-spacing"
      aria-labelledby="what-is-taken-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-[900px]">
          <motion.div
            variants={manifestoLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="flex justify-center"
          >
            <SectionLabel align="center">O que se perde</SectionLabel>
          </motion.div>

          <h2 id="what-is-taken-heading" className="sr-only">
            O que o trabalho infantil tira
          </h2>

          <div className="mt-14 flex flex-col items-center space-y-[clamp(2rem,4vw,3rem)] text-center md:mt-20">
            {LINES.map((line) => (
              <motion.p
                key={line.text}
                variants={manifestoLine}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                className={`max-w-[22ch] font-display leading-[1.25] md:max-w-[32ch] ${
                  line.emphasis ? EMPHASIS : INTERMEDIATE
                }`}
              >
                {line.text}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-16 flex justify-center md:mt-24"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: easeCinematic }}
            style={{ originX: 0.5 }}
          >
            <span
              className="block h-px w-10 bg-[var(--color-amber)]"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
