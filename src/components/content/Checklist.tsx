import { useState } from "react";
import { ClipboardList, Check } from "lucide-react";
import { clsx } from "clsx";

interface ChecklistProps {
  title?: string;
  items: string[];
}

export function Checklist({ title, items }: ChecklistProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggleItem(index: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  const progress = items.length > 0 ? (checked.size / items.length) * 100 : 0;

  return (
    <div className="my-5 rounded-lg border border-dune-gold/10 bg-dune-brown/30 overflow-hidden noise-overlay">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-dune-gold/8">
        <ClipboardList size={14} className="text-dune-gold" />
        <span className="flex-1 text-xs font-medium text-dune-cream-muted">
          {title || "Checklist"}
        </span>
        <span className="text-[10px] text-dune-cream-muted/50">
          {checked.size}/{items.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 bg-dune-brown-light">
        <div
          className="h-full bg-dune-gold/50 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Items */}
      <div className="px-2 py-2">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => toggleItem(i)}
            className={clsx(
              "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm lg:text-base transition-all duration-200",
              checked.has(i)
                ? "text-dune-cream-muted/50 line-through"
                : "text-dune-cream/80 hover:bg-dune-brown-light/30"
            )}
          >
            <div
              className={clsx(
                "flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all duration-200",
                checked.has(i)
                  ? "border-dune-gold/40 bg-dune-gold/15"
                  : "border-dune-cream-muted/30"
              )}
            >
              {checked.has(i) && <Check size={10} className="text-dune-gold" />}
            </div>
            <span>{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
