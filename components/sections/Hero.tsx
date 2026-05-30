"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { easeCinematic, heroHeadline, revealUp, ctaReveal } from "@/lib/motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const videoSrc = isMobile
    ? "/video/hero-video-mobile.webm"
    : "/video/hero-video.webm";
  const posterSrc = isMobile
    ? "/video/hero-poster-mobile.webp"
    : "/video/hero-poster.webp";

  return (
    <section
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-[var(--color-ink)]"
      style={{ minHeight: "max(700px, 100svh)" }}
      aria-label="Apresentação da campanha Não ao Trabalho Infantil"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${posterSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.video
          key={videoSrc}
          src={videoSrc}
          poster={posterSrc}
          initial={{ opacity: 0, scale: 1 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 1, scale: 1.04 }
          }
          transition={
            prefersReducedMotion
              ? { opacity: { duration: 0.6 } }
              : {
                  opacity: { duration: 1.2, ease: easeCinematic },
                  scale: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }
          }
          className="absolute inset-0 h-full w-full object-cover object-[center_35%] md:object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,14,15,0.80) 0%, rgba(14,14,15,0.30) 25%, rgba(14,14,15,0.45) 55%, rgba(14,14,15,0.85) 80%, rgba(14,14,15,0.95) 100%)",
        }}
      />

      <div className="container-page relative z-10 w-full pb-[clamp(5rem,14vh,9rem)] pt-32">
        <div className="max-w-[880px] text-center md:text-left">
          <motion.div
            className="flex flex-col items-center gap-1.5 md:flex-row md:items-baseline md:gap-3"
            variants={revealUp}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <span
              className="text-[clamp(0.875rem,1.1vw,1rem)] font-medium uppercase tracking-[0.25em] text-[var(--color-amber-soft)]"
              style={{ textShadow: "0 2px 12px rgba(14, 14, 15, 0.6)" }}
            >
              12 de junho
            </span>
            <span
              aria-hidden="true"
              className="hidden select-none text-[var(--color-amber-soft)]/40 md:inline"
            >
              /
            </span>
            <span
              className="max-w-[280px] text-center text-[clamp(0.6875rem,0.85vw,0.8125rem)] font-medium uppercase tracking-[0.25em] text-[var(--color-amber-soft)]/80 md:max-w-none md:text-left"
              style={{ textShadow: "0 1px 8px rgba(14, 14, 15, 0.7)" }}
            >
              Dia Mundial Contra o Trabalho Infantil
            </span>
          </motion.div>

          <h1
            className="mt-6 max-w-[680px] text-balance font-display text-[clamp(2rem,5.5vw,4.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-[var(--color-text-light)] lg:max-w-[880px]"
            style={{ textShadow: "0 2px 20px rgba(14, 14, 15, 0.4)" }}
          >
            <motion.span
              className="md:block"
              variants={heroHeadline}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              O trabalho infantil tira
            </motion.span>{" "}
            <motion.span
              className="md:block"
              variants={heroHeadline}
              custom={1}
              initial="hidden"
              animate="visible"
            >
              mais do que a{" "}
              <span className="font-semibold text-[var(--color-amber)]">
                infância
              </span>
              .
            </motion.span>
          </h1>

          <motion.p
            className="text-body-large mt-7 max-w-[36rem] text-[var(--color-text-muted-light)] mx-auto md:mx-0"
            variants={revealUp}
            custom={3}
            initial="hidden"
            animate="visible"
          >
            Tira escola, descanso, futuro. Atinge 1,6 milhão de crianças no
            Brasil hoje.
          </motion.p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 sm:justify-center md:justify-start">
            <motion.div
              variants={ctaReveal}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              <Button
                href="#participe"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Participe da campanha
              </Button>
            </motion.div>
            <motion.div
              variants={ctaReveal}
              custom={1}
              initial="hidden"
              animate="visible"
            >
              <Button
                href="#manifesto"
                variant="ghost"
                className="w-full whitespace-nowrap sm:w-auto"
                icon={
                  <svg
                    className="arrow"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14" />
                    <path d="m5 12 7 7 7-7" />
                  </svg>
                }
              >
                Entenda o problema
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="relative h-12 w-px overflow-hidden bg-[var(--color-paper)]/15">
          <motion.span
            className="absolute inset-x-0 top-0 block h-3 bg-[var(--color-amber)]"
            animate={{ y: [0, 48, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
