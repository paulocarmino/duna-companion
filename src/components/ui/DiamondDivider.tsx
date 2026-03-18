import { clsx } from "clsx";

interface DiamondDividerProps {
  className?: string;
}

export function DiamondDivider({ className }: DiamondDividerProps) {
  return (
    <div className={clsx("flex items-center gap-3 py-4", className)}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dune-gold/20" />
      <div className="h-2 w-2 rotate-45 bg-dune-gold/40" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dune-gold/20" />
    </div>
  );
}
