"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 h-16 overflow-hidden transition-[background-color,backdrop-filter,border-color] duration-300 ease-out md:h-20",
        scrolled
          ? "bg-[color-mix(in_oklab,var(--color-ink)_90%,transparent)] backdrop-blur-[12px] border-b border-[color-mix(in_oklab,var(--color-paper)_8%,transparent)]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-full items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="Fundação Abrinq, início"
        >
          <Image
            src="/logos/logo-abrinq.webp"
            alt="Fundação Abrinq"
            width={120}
            height={36}
            priority
            className="h-8 w-auto object-contain md:h-9"
          />
        </Link>

        <nav aria-label="Navegação principal">
          <Link
            href="#participe"
            className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--color-paper)_30%,transparent)] px-4 py-2 text-sm font-medium text-[var(--color-paper)] transition-all duration-300 hover:border-[var(--color-paper)] hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)] md:px-5 md:py-2.5 md:text-[0.9375rem] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-amber)]"
          >
            Participe
          </Link>
        </nav>
      </div>
    </header>
  );
}
