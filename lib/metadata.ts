import type { Metadata } from "next";

const SITE_URL = "https://nao-ao-trabalho-infantil.vercel.app";
const SITE_NAME = "Não ao Trabalho Infantil";
const SITE_TITLE = "Não ao Trabalho Infantil — Fundação Abrinq";
const SITE_DESCRIPTION =
  "Mais de 1,6 milhão de crianças e adolescentes trabalham no Brasil. Conheça a campanha da Fundação Abrinq pelo Dia Mundial Contra o Trabalho Infantil e participe da resposta.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Fundação Abrinq",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Fundação Abrinq" }],
  keywords: [
    "trabalho infantil",
    "Fundação Abrinq",
    "12 de junho",
    "Dia Mundial Contra o Trabalho Infantil",
    "direitos da criança",
    "Estatuto da Criança e do Adolescente",
    "ECA",
    "Disque 100",
    "proteção infantil",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og/og-share.webp",
        width: 1200,
        height: 630,
        alt: "Não ao Trabalho Infantil — Campanha da Fundação Abrinq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og/og-share.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "social cause",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Fundação Abrinq pelos Direitos da Criança e do Adolescente",
  alternateName: "Fundação Abrinq",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo-abrinq.webp`,
  description:
    "Organização da sociedade civil que promove os direitos da infância e da adolescência no Brasil, articulando ações de combate ao trabalho infantil e proteção integral.",
  sameAs: [
    /* [conteúdo a validar — URLs reais das redes sociais Abrinq] */
    "https://www.facebook.com/FundacaoAbrinq",
    "https://www.instagram.com/fundacaoabrinq",
  ],
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
};
