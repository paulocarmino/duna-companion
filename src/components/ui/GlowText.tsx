import { clsx } from "clsx";
import type { ReactNode } from "react";

interface GlowTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
}

export function GlowText({ children, as: Tag = "h2", className }: GlowTextProps) {
  return (
    <Tag
      className={clsx(
        "text-dune-gold drop-shadow-[0_0_12px_rgba(244,207,139,0.15)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
