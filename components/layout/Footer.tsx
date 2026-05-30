import Image from "next/image";
import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/FundacaoAbrinq"; /* [conteúdo a validar] */
const INSTAGRAM_URL = "https://www.instagram.com/fundacaoabrinq"; /* [conteúdo a validar] */
const YOUTUBE_URL = "https://www.youtube.com/@FundacaoAbrinq"; /* [conteúdo a validar] */
const LINKEDIN_URL = "https://www.linkedin.com/company/fundacao-abrinq"; /* [conteúdo a validar] */

const FOOTER_LINKS = [
  { label: "Sobre a Fundação", href: "#" /* [conteúdo a validar] */ },
  { label: "Estatuto da Criança e do Adolescente", href: "#" /* [conteúdo a validar] */ },
  { label: "Disque 100", href: "tel:100" },
  { label: "Imprensa", href: "#" /* [conteúdo a validar] */ },
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center border border-[color-mix(in_oklab,var(--color-paper)_18%,transparent)] text-[var(--color-text-muted-light)] transition-colors duration-300 hover:border-[var(--color-amber)] hover:text-[var(--color-amber)]"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink-soft)] text-[var(--color-text-light)]">
      {/* Bloco 1 — institucional e links (fundo escuro) */}
      <div className="bg-[var(--color-ink-soft)]">
        <div className="container-page py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
            <div>
              <Image
                src="/logos/logo-abrinq.webp"
                alt="Fundação Abrinq"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
              <address className="not-italic mt-6 text-[0.9375rem] leading-relaxed text-[var(--color-text-muted-light)]">
                {/* [conteúdo a validar — endereço institucional] */}
                Avenida Santo Amaro, 1386
                <br />
                Vila Nova Conceição · São Paulo / SP
                <br />
                CEP 04506-001
              </address>
              <div className="mt-4 text-[0.9375rem] text-[var(--color-text-muted-light)]">
                {/* [conteúdo a validar — contatos] */}
                <p>
                  <a
                    href="mailto:abrinq@fundabrinq.org.br"
                    className="hover:text-[var(--color-amber)] transition-colors"
                  >
                    abrinq@fundabrinq.org.br
                  </a>
                </p>
                <p className="mt-1">+55 (11) 3848-8799</p>
              </div>
            </div>

            <div className="justify-self-start md:justify-self-end">
              <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.25em] text-[var(--color-amber)]">
                Links
              </h2>
              <ul className="mt-6 space-y-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.9375rem] text-[var(--color-text-light)] hover:text-[var(--color-amber)] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bloco 2 — faixa institucional do selo 12 de Junho (fundo claro) */}
      <div className="bg-[var(--color-paper)]">
        <div className="container-page py-10 md:py-14">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
            <Image
              src="/logos/logo-12junho.webp"
              alt="12 de Junho, Dia Mundial Contra o Trabalho Infantil"
              width={180}
              height={64}
              className="h-14 w-auto shrink-0 object-contain md:h-16"
            />
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-dark)] md:text-base">
              Símbolo mundial do combate ao trabalho infantil, adotado pela
              Organização Internacional do Trabalho (OIT) e reconhecido
              internacionalmente.
            </p>
          </div>
        </div>
      </div>

      {/* Bloco 3 — copyright e redes sociais (fundo escuro) */}
      <div className="bg-[var(--color-ink-soft)]">
        <div className="container-page border-t border-[color-mix(in_oklab,var(--color-paper)_10%,transparent)] py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[60ch] text-xs leading-relaxed text-[var(--color-text-muted-light)]">
              © 2025 Fundação Abrinq pelos Direitos da Criança e do Adolescente.
              Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-3">
              <SocialIcon href={FACEBOOK_URL} label="Facebook da Fundação Abrinq">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 9V7.5c0-.6.4-1 1-1H16V4h-2c-2 0-3 1.4-3 3v2H9v2.5h2V20h2.5v-8.5H15.7L16 9h-2.5Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={INSTAGRAM_URL} label="Instagram da Fundação Abrinq">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="3.7" />
                  <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon href={YOUTUBE_URL} label="YouTube da Fundação Abrinq">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.6 7.4a2.5 2.5 0 0 0-1.8-1.8C18 5.2 12 5.2 12 5.2s-6 0-7.8.4A2.5 2.5 0 0 0 2.4 7.4 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.6 2.5 2.5 0 0 0 1.8 1.8c1.8.4 7.8.4 7.8.4s6 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-4.6 26 26 0 0 0-.4-4.6ZM10.2 15V9l5.2 3-5.2 3Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={LINKEDIN_URL} label="LinkedIn da Fundação Abrinq">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M5 4.5A1.6 1.6 0 1 1 5 7.7a1.6 1.6 0 0 1 0-3.2ZM3.7 9h2.6v10.4H3.7V9Zm5 0h2.5v1.4h.1c.4-.7 1.3-1.6 2.8-1.6 3 0 3.5 2 3.5 4.5v6.1h-2.6v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5H8.7V9Z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
