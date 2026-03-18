import { clsx } from "clsx";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "strong" | "outlined";
  hover?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  hover = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg noise-overlay overflow-hidden",
        variant === "default" && "glass",
        variant === "strong" && "glass-strong",
        variant === "outlined" &&
          "border border-dune-gold/10 bg-dune-dark-lighter/50",
        hover &&
          "cursor-pointer transition-all duration-300 hover:border-dune-gold/25 hover:shadow-[0_0_24px_rgba(244,207,139,0.08)] hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}
