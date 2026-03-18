import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "blue" | "orange" | "purple" | "danger" | "neutral";
  size?: "sm" | "md";
}

const variantStyles = {
  gold: "bg-dune-gold/15 text-dune-gold border-dune-gold/20",
  blue: "bg-dune-blue/15 text-dune-blue border-dune-blue/30",
  orange: "bg-dune-orange/15 text-dune-orange border-dune-orange/20",
  purple: "bg-dune-purple/30 text-dune-cream border-dune-purple/40",
  danger: "bg-dune-danger/15 text-dune-danger border-dune-danger/20",
  neutral: "bg-dune-brown-light/50 text-dune-cream-muted border-dune-brown-light/60",
};

export function Badge({ children, variant = "gold", size = "sm" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded border font-body font-medium tracking-wide",
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        variantStyles[variant]
      )}
    >
      {children}
    </span>
  );
}
