type Props = {
  children: string;
  align?: "left" | "center";
  tone?: "amber" | "muted";
  className?: string;
};

export function SectionLabel({
  children,
  align = "left",
  tone = "amber",
  className = "",
}: Props) {
  const colorClass =
    tone === "amber"
      ? "text-[var(--color-amber)]"
      : "text-[var(--color-text-muted-light)]";

  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <span
      className={`block text-[0.75rem] font-medium uppercase tracking-[0.25em] ${alignClass} ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
}
