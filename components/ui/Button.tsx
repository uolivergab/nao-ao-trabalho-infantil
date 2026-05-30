import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<Variant, string> = {
  primary:
    "cta-sheen bg-[var(--color-green)] text-[var(--color-paper)] hover:bg-[var(--color-green-hover)]",
  secondary:
    "border border-[var(--color-paper)] text-[var(--color-paper)] hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]",
  ghost:
    "text-[var(--color-paper)] hover:text-[var(--color-amber)] group [&_svg.arrow]:transition-transform [&_svg.arrow]:duration-300 hover:[&_svg.arrow]:translate-y-1",
};

const sizeStyles: Record<Size, string> = {
  md: "px-6 py-3 text-[0.9375rem]",
  lg: "px-7 md:px-8 py-3.5 md:py-4 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.01em] whitespace-nowrap transition-colors duration-300 ease-out min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-amber)]";

const ghostBaseOverride = "rounded-none px-2 py-3.5 md:py-4 text-base";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    icon,
    className = "",
  } = props;

  const isGhost = variant === "ghost";
  const styles = [
    baseStyles,
    isGhost ? ghostBaseOverride : sizeStyles[size],
    variantStyles[variant],
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {icon && <span aria-hidden="true">{icon}</span>}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = props as ButtonAsLink;
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorRest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} {...anchorRest}>
        {content}
      </Link>
    );
  }

  const { ...buttonRest } = props as ButtonAsButton;
  return (
    <button className={styles} {...buttonRest}>
      {content}
    </button>
  );
}
