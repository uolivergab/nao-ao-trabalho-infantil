"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { easeOutExpo } from "@/lib/motion";

type Region = {
  name: string;
  /* null = dado regional ainda não confirmado pelo IBGE/PNAD */
  value: number | null;
  /* largura visual da barra, de 0 a 1 */
  share: number;
};

/* [conteúdo a validar - aguardando IBGE PNAD] */
const REGIONS: Region[] = [
  { name: "Norte", value: 248364, share: 1 }, // dado oficial confirmado
  { name: "Nordeste", value: null, share: 0.3 },
  { name: "Sudeste", value: null, share: 0.3 },
  { name: "Sul", value: null, share: 0.3 },
  { name: "Centro-Oeste", value: null, share: 0.3 },
];

function formatBR(n: number) {
  return new Intl.NumberFormat("pt-BR").format(n);
}

export function Statistics() {
  return (
    <section
      className="relative bg-[var(--color-ink)] section-spacing"
      aria-labelledby="statistics-heading"
    >
      <div className="container-page">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 flex min-w-0 flex-col lg:col-span-7 lg:pr-12">
            <RevealOnScroll>
              <SectionLabel>O retrato do Brasil</SectionLabel>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2
                id="statistics-heading"
                className="text-h2 mt-6 text-[var(--color-text-light)] font-display max-w-[14ch]"
              >
                O número que não pode ser ignorado.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="mt-10 max-w-full overflow-hidden md:mt-14">
                <AnimatedNumber
                  value={1649843}
                  duration={2.2}
                  className="block font-display text-[clamp(3.5rem,9vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.02em] tabular-nums text-[var(--color-text-light)]"
                  ariaLabel="1 milhão 649 mil 843"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="text-body-large mt-8 max-w-[42ch] text-[var(--color-text-muted-light)]">
                crianças e adolescentes de 5 a 17 anos trabalham todos os dias
                no Brasil. A maior concentração está no Norte, Nordeste e
                Sudeste. Mas o trabalho infantil acontece perto de você, mesmo
                quando você não vê.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <p className="text-caption mt-6 italic text-[var(--color-text-muted-light)] normal-case tracking-normal text-[0.8125rem]">
                {/* [conteúdo a validar — confirmar ano da PNAD Contínua] */}
                Fonte: IBGE, Pesquisa Nacional por Amostra de Domicílios
                Contínua (PNAD Contínua).
              </p>
            </RevealOnScroll>
          </div>

          <div className="col-span-12 min-w-0 lg:col-span-5">
            <RevealOnScroll delay={0.2}>
              <p className="text-caption text-[var(--color-text-muted-light)]">
                Distribuição por região
              </p>
            </RevealOnScroll>

            <ul className="mt-8 flex flex-col gap-8" role="list">
              {REGIONS.map((region, i) => (
                <motion.li
                  key={region.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: easeOutExpo, delay: i * 0.1 }}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-lg font-medium text-[var(--color-text-light)] md:text-xl">
                      {region.name}
                    </span>
                    {region.value !== null ? (
                      <span className="text-[0.8125rem] tabular-nums text-[var(--color-text-light)]">
                        {formatBR(region.value)}
                      </span>
                    ) : (
                      <span className="text-[0.8125rem] italic text-[var(--color-text-muted-light)]">
                        {/* [conteúdo a validar - aguardando IBGE PNAD] */}
                        a confirmar
                      </span>
                    )}
                  </div>
                  <div
                    aria-hidden="true"
                    className="relative mt-3 h-[2px] w-full overflow-hidden bg-[color-mix(in_oklab,var(--color-paper)_18%,transparent)]"
                  >
                    <motion.span
                      className="absolute left-0 top-0 h-full origin-left bg-[var(--color-amber)]"
                      style={{ width: "100%" }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{
                        scaleX: region.share,
                        opacity: region.value !== null ? 1 : 0.4,
                      }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 1.1,
                        ease: easeOutExpo,
                        delay: 0.4 + i * 0.1,
                      }}
                    />
                  </div>
                </motion.li>
              ))}
            </ul>

            <p className="mt-6 text-xs italic text-[var(--color-text-muted-light)]">
              Dados regionais em validação. Fonte: IBGE / PNAD Contínua.
            </p>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--color-paper)]"
      />
    </section>
  );
}
