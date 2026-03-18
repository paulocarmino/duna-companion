import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface LoreNoteProps {
  text: string;
  source?: string;
}

export function LoreNote({ text, source }: LoreNoteProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const isLong = text.length > 200;
  const displayText = isLong && !isExpanded ? text.slice(0, 200) + "..." : text;

  return (
    <div className="my-5 rounded-lg border-l-2 border-dune-purple bg-dune-purple/[0.08] px-4 py-3.5 noise-overlay">
      <div className="flex gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-dune-purple/20">
          <BookOpen size={14} className="text-dune-cream-muted" />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-dune-cream-muted/50 lg:text-xs">
            LORE
          </span>
          <p className="mt-1 text-sm italic leading-relaxed text-dune-cream/70 lg:text-base">
            {displayText}
          </p>
          {source && (
            <p className="mt-2 text-[10px] tracking-wider text-dune-cream-muted/40">
              {source}
            </p>
          )}
          {isLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 flex items-center gap-1 text-xs text-dune-cream-muted/60 transition-colors hover:text-dune-cream-muted"
            >
              {isExpanded ? "Menos" : "Ler mais"}
              <ChevronDown
                size={12}
                className={clsx("transition-transform", isExpanded && "rotate-180")}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
