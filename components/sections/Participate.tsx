"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { heroHeadline, revealUp, pillarReveal, easeCinematic } from "@/lib/motion";

const ACTIONS = [
  {
    eyebrow: "Denuncie",
    title: "Disque 100",
    description:
      "Anônimo, gratuito e disponível 24 horas. Sua ligação pode mudar uma história.",
    cta: { label: "Ligar agora", href: "tel:100", variant: "primary" as const },
  },
  {
    eyebrow: "Compartilhe",
    title: "Materiais da campanha",
    description:
      "Kit gráfico e textual para escolas, empresas e coletivos que queiram divulgar a causa.",
    cta: {
      label: "Baixar materiais",
      href: "#" /* [conteúdo a validar — URL real do kit] */,
      variant: "secondary" as const,
    },
  },
  {
    eyebrow: "Mobilize",
    title: "Leve para suas redes",
    description:
      "Compartilhe a campanha com sua rede. Quanto mais gente fala, mais gente protege.",
    cta: {
      label: "Compartilhar",
      href: "#" /* [conteúdo a validar — URL canônica para share] */,
      variant: "secondary" as const,
    },
  },
];

export function Participate() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="participe"
      ref={ref}
      className="relative isolate overflow-hidden bg-[var(--color-ink)] section-spacing"
      aria-labelledby="participate-heading"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[12%] -bottom-[12%] -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/participacao-sala.webp)",
          ...(prefersReducedMotion ? {} : { y }),
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[color-mix(in_oklab,var(--color-ink)_82%,transparent)]"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-[800px] text-center">
          <motion.div
            variants={revealUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="flex justify-center"
          >
            <SectionLabel align="center">Participe</SectionLabel>
          </motion.div>

          <motion.h2
            id="participate-heading"
            className="text-h2 mt-6 font-display text-[var(--color-text-light)]"
            variants={heroHeadline}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Diga não. E faça parte da resposta.
          </motion.h2>

          <motion.p
            className="text-body-large mt-7 text-[var(--color-text-muted-light)] max-w-[60ch] mx-auto"
            variants={revealUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Pequenas atitudes constroem proteção. Denuncie quando suspeitar.
            Divulgue a campanha. Leve a conversa para sua escola, sua empresa,
            suas redes.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-3 md:gap-7">
          {ACTIONS.map((action, i) => (
            <motion.article
              key={action.title}
              variants={pillarReveal}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-5 border border-[color-mix(in_oklab,var(--color-paper)_16%,transparent)] bg-[color-mix(in_oklab,var(--color-ink)_60%,transparent)] p-8 backdrop-blur-md transition-colors duration-300 hover:border-[color-mix(in_oklab,var(--color-amber)_60%,transparent)]"
            >
              <p className="text-caption text-[var(--color-amber)]">
                {action.eyebrow}
              </p>
              <h3 className="text-h3 font-display text-[var(--color-text-light)]">
                {action.title}
              </h3>
              <p className="text-body text-[var(--color-text-muted-light)] flex-1">
                {action.description}
              </p>
              <div className="pt-2">
                <Button
                  href={action.cta.href}
                  variant={action.cta.variant}
                  size="md"
                >
                  {action.cta.label}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          className="mt-12 text-center text-caption text-[var(--color-text-muted-light)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: easeCinematic }}
        >
          Denúncia também pelo Conselho Tutelar mais próximo
        </motion.p>
      </div>
    </section>
  );
}
