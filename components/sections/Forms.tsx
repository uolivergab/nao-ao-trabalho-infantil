import { FormCard } from "@/components/ui/FormCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type Form = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  variant?: "regular" | "highlight";
};

const FORMS: Form[] = [
  {
    title: "Trabalho doméstico",
    description:
      "Tarefas exaustivas de cuidado da casa e de irmãos que substituem tempo de escola e brincadeira. Atinge majoritariamente meninas, dentro do próprio lar.",
    imageSrc: "/images/forms/forma-01-domestico.webp",
    imageAlt:
      "Mãos infantis lavando louça em uma pia doméstica, simbolizando o trabalho de cuidado invisível dentro de casa.",
  },
  {
    title: "Trabalho agrícola",
    description:
      "Atividades no campo, em colheitas e plantios, com exposição a sol, agrotóxicos e ferramentas pesadas demais para o corpo em formação.",
    imageSrc: "/images/forms/forma-02-agricola.webp",
    imageAlt:
      "Criança carregando ferramenta agrícola entre plantações sob o sol forte.",
  },
  {
    title: "Trabalho em vias públicas",
    description:
      "Venda de produtos, pedidos em sinais e atividades nas ruas, com riscos de violência, acidentes e exploração.",
    imageSrc: "/images/forms/forma-03-vias-publicas.webp",
    imageAlt:
      "Criança trabalhando em uma via pública urbana, exposta ao tráfego e à insegurança.",
    variant: "highlight",
  },
  {
    title: "Comércio informal",
    description:
      "Trabalho em feiras, mercados e pequenos negócios familiares, frequentemente invisibilizado por ser tratado como ajuda.",
    imageSrc: "/images/forms/forma-04-comercio.webp",
    imageAlt:
      "Criança auxiliando em uma banca de comércio informal entre adultos.",
  },
  {
    title: "Atividades insalubres",
    description:
      "Exposição a ambientes industriais, materiais tóxicos, ruído, calor e cargas que comprometem saúde e desenvolvimento.",
    imageSrc: "/images/forms/forma-05-insalubre.webp",
    imageAlt:
      "Adolescente em ambiente industrial com risco químico e mecânico aparente.",
  },
  {
    title: "Piores formas",
    description:
      "Exploração severa, incluindo trabalho análogo à escravidão e situações de exploração sexual. Violações graves dos direitos da criança e do adolescente.",
    imageSrc: "/images/forms/forma-06-exploracao.webp",
    imageAlt:
      "Silhueta de criança em ambiente de exploração, representando as piores formas de trabalho infantil.",
    variant: "highlight",
  },
];

export function Forms() {
  return (
    <section
      className="bg-[var(--color-paper)] section-spacing"
      aria-labelledby="forms-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-[720px] text-center">
          <RevealOnScroll>
            <div className="flex justify-center">
              <SectionLabel align="center">As formas do problema</SectionLabel>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2
              id="forms-heading"
              className="text-h2 mt-6 font-display text-[var(--color-text-dark)]"
            >
              O trabalho infantil tem muitos rostos.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-body-large mt-6 text-[var(--color-text-muted-dark)] max-w-[58ch] mx-auto">
              Nem sempre é visível. Acontece em casa, na rua, no campo, no
              comércio. Algumas formas são socialmente toleradas, e é
              justamente isso que as torna mais perigosas.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <div className="mx-auto md:max-w-[1280px] md:px-[clamp(1.5rem,5vw,4rem)]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-12">
            {FORMS.map((form, i) => (
              <FormCard
                key={form.title}
                index={i + 1}
                total={FORMS.length}
                title={form.title}
                description={form.description}
                imageSrc={form.imageSrc}
                imageAlt={form.imageAlt}
                variant={form.variant}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
