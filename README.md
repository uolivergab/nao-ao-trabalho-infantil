# Não ao Trabalho Infantil — Fundação Abrinq

Landing page institucional cinematográfica para a campanha **Não ao Trabalho Infantil**, marcada pelo **Dia Mundial Contra o Trabalho Infantil (12 de junho)**.

Construída em Next.js 16 (App Router) com TypeScript, Tailwind CSS v4 e Framer Motion. Sem bibliotecas de componentes — toda a interface é autoral, com tokens de design em três camadas e tipografia editorial (Fraunces + Inter).

## Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS v4 (tokens via `@theme` em `globals.css`)
- Framer Motion (animações com `prefers-reduced-motion`)
- next/font (Fraunces + Inter self-hosted)
- next/image (AVIF/WebP automático)

## Estrutura

```
app/                 layout, page, globals.css, not-found, ícones
components/
  sections/          8 seções narrativas (Hero → Closing)
  ui/                7 componentes reutilizáveis
  layout/            Header e Footer
lib/                 fonts, metadata, motion variants
public/              vídeo, imagens, logos, OG image
```

## Rodando localmente

Requisitos: Node.js 18+ e npm.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Build de produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Suba o projeto para o GitHub:

```bash
git init
git add .
git commit -m "feat: campanha não ao trabalho infantil"
git branch -M main
git remote add origin <URL-DO-SEU-REPO>
git push -u origin main
```

2. Entre em [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. A Vercel detecta Next.js automaticamente. Clique em **Deploy**.
4. Em poucos minutos a página estará no ar em um subdomínio `*.vercel.app`.

Para domínio próprio, configure DNS em **Project Settings → Domains**.

## Conteúdo a validar

Trechos marcados no código com `/* [conteúdo a validar] */` precisam de confirmação com a Fundação Abrinq antes de ir ao ar:

- Endereço, e-mail e telefone institucional (Footer)
- URLs reais das redes sociais (Footer e JSON-LD)
- URLs dos links do Footer (Sobre, ECA, Imprensa)
- URLs dos CTAs dos pilares (apoio empresarial, ECA, kit de campanha)
- Ano da PNAD Contínua usada como fonte estatística
- Números regionais aproximados (apenas Norte = 248.364 está confirmado)

## Acessibilidade e performance

- WCAG AA: contraste validado em todas as combinações dark/light.
- `prefers-reduced-motion` respeitado em todas as animações.
- Vídeo da hero com poster fallback se WebM não for suportado.
- Targets de toque ≥ 44px; skip link para conteúdo principal.
- Schema.org NGO em JSON-LD.
- Open Graph e Twitter Card configurados.

Meta Lighthouse: Performance 95+, Accessibility 100, Best Practices 100, SEO 95+.
