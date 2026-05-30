import { PillarCard } from "@/components/ui/PillarCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const PILLARS = [
  {
    title: "Empresas",
    description:
      "Sua empresa pode garantir cadeias produtivas livres de trabalho infantil, criar políticas de aprendizagem responsável e apoiar institucionalmente a causa.",
    ctaLabel: "Apoie como empresa",
    ctaHref: "#participe" /* [conteúdo a validar — URL real de adesão empresarial] */,
  },
  {
    title: "Instituições",
    description:
      "Escolas, conselhos tutelares e órgãos públicos são linha de frente na identificação, encaminhamento e proteção de crianças em situação de risco.",
    ctaLabel: "Conheça o ECA",
    ctaHref: "#" /* [conteúdo a validar — link do Estatuto da Criança e do Adolescente] */,
  },
  {
    title: "Sociedade",
    description:
      "Denunciar é proteger. O Disque 100 é anônimo, gratuito e funciona 24 horas por dia, todos os dias do ano.",
    ctaLabel: "Como denunciar",
    ctaHref: "tel:100",
  },
];

export function SharedResponsibility() {
  return (
    <section
      className="relative bg-[var(--color-paper-soft)] section-spacing"
      aria-labelledby="responsibility-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-[720px] text-center">
          <RevealOnScroll>
            <div className="flex justify-center">
              <SectionLabel align="center">Quem pode mudar</SectionLabel>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2
              id="responsibility-heading"
              className="text-h2 mt-6 font-display text-[var(--color-text-dark)]"
            >
              Proteger infâncias é responsabilidade de todos.
            </h2>
          </RevealOnScroll>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-3 md:gap-8 lg:gap-12">
          {PILLARS.map((pillar, i) => (
            <PillarCard
              key={pillar.title}
              index={i + 1}
              title={pillar.title}
              description={pillar.description}
              ctaLabel={pillar.ctaLabel}
              ctaHref={pillar.ctaHref}
            />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--color-ink)]"
      />
    </section>
  );
}
