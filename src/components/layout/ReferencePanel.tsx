import { useLocation } from "react-router-dom";
import { ChevronUp, ChevronDown, X } from "lucide-react";
import { clsx } from "clsx";
import { useReference } from "@/contexts/ReferenceContext";
import { useCardOrder } from "@/hooks/useCardOrder";

const typeBadge = {
  tip: {
    label: "TIP",
    border: "border-dune-gold/20",
    bg: "bg-dune-gold/8",
    text: "text-dune-gold/80",
    accent: "bg-dune-gold",
  },
  lore: {
    label: "LORE",
    border: "border-dune-purple/30",
    bg: "bg-dune-purple/10",
    text: "text-dune-cream-muted/70",
    accent: "bg-dune-purple",
  },
  mechanic: {
    label: "MECÂNICA",
    border: "border-dune-blue/20",
    bg: "bg-dune-blue/8",
    text: "text-dune-blue/80",
    accent: "bg-dune-blue",
  },
  reference: {
    label: "REF",
    border: "border-dune-orange/20",
    bg: "bg-dune-orange/8",
    text: "text-dune-orange/80",
    accent: "bg-dune-orange",
  },
};

export function ReferencePanel() {
  const { cards } = useReference();
  const { pathname } = useLocation();
  const { orderedCards, reorder } = useCardOrder(pathname, cards);

  if (orderedCards.length === 0) return null;

  return (
    <aside className="hidden xl:block w-72 shrink-0">
      <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin pr-1">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rotate-45 bg-dune-gold/60" />
          <span className="text-xs font-semibold tracking-[0.15em] text-dune-cream-muted/50">
            CÓDEX DE ARRAKIS
          </span>
          <span className="text-xs text-dune-cream-muted/30">
            {orderedCards.length}
          </span>
        </div>

        <div className="space-y-2.5">
          {orderedCards.map((card, index) => {
            const badge = typeBadge[card.type];
            return (
              <div
                key={card.id}
                className={clsx(
                  "rounded-lg border glass noise-overlay overflow-hidden",
                  badge.border
                )}
              >
                {/* Card header */}
                <div className="flex items-center gap-2 px-3 py-2">
                  <div
                    className={clsx(
                      "h-1.5 w-1.5 rounded-full shrink-0",
                      badge.accent
                    )}
                  />
                  <span
                    className={clsx(
                      "flex-1 text-[10px] font-semibold tracking-[0.15em]",
                      badge.text
                    )}
                  >
                    {badge.label}
                  </span>
                  <div className="flex gap-0.5">
                    {index > 0 && (
                      <button
                        onClick={() => reorder(index, index - 1)}
                        className="rounded p-0.5 text-dune-cream-muted/30 transition-colors hover:text-dune-cream-muted/60"
                        aria-label="Mover para cima"
                      >
                        <ChevronUp size={10} />
                      </button>
                    )}
                    {index < orderedCards.length - 1 && (
                      <button
                        onClick={() => reorder(index, index + 1)}
                        className="rounded p-0.5 text-dune-cream-muted/30 transition-colors hover:text-dune-cream-muted/60"
                        aria-label="Mover para baixo"
                      >
                        <ChevronDown size={10} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Card content */}
                <div className="border-t border-white/5 px-3 py-2.5">
                  {card.title && (
                    <p className="mb-1 text-sm font-semibold text-dune-cream/90">
                      {card.title}
                    </p>
                  )}
                  <div className="text-sm leading-relaxed text-dune-cream/70">
                    {card.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

/** Mobile Reference Panel - bottom sheet */
export function ReferencePanelMobile() {
  const { cards, isOpen, setIsOpen } = useReference();
  const { pathname } = useLocation();
  const { orderedCards, reorder } = useCardOrder(pathname, cards);

  if (!isOpen || orderedCards.length === 0) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-dune-dark/60 backdrop-blur-sm xl:hidden"
        onClick={() => setIsOpen(false)}
      />

      {/* Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-50 max-h-[75vh] overflow-y-auto rounded-t-2xl glass-strong border-t border-dune-gold/10 animate-slide-in-up xl:hidden">
        {/* Handle */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-dune-brown/90 backdrop-blur-md px-5 py-3 border-b border-dune-gold/8">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rotate-45 bg-dune-gold/60" />
            <span className="text-xs font-semibold tracking-[0.1em] text-dune-cream-muted">
              CÓDEX DE ARRAKIS
            </span>
            <span className="text-[10px] text-dune-cream-muted/40">
              {orderedCards.length}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-1.5 text-dune-cream-muted/60 transition-colors hover:text-dune-cream"
          >
            <X size={16} />
          </button>
        </div>

        {/* Cards */}
        <div className="space-y-2.5 p-4 pb-8">
          {orderedCards.map((card, index) => {
            const badge = typeBadge[card.type];
            return (
              <div
                key={card.id}
                className={clsx(
                  "rounded-lg border glass noise-overlay overflow-hidden",
                  badge.border
                )}
              >
                <div className="flex items-center gap-2 px-3 py-2">
                  <div
                    className={clsx(
                      "h-1.5 w-1.5 rounded-full shrink-0",
                      badge.accent
                    )}
                  />
                  <span
                    className={clsx(
                      "flex-1 text-[9px] font-semibold tracking-[0.15em]",
                      badge.text
                    )}
                  >
                    {badge.label}
                  </span>
                  <div className="flex gap-0.5">
                    {index > 0 && (
                      <button
                        onClick={() => reorder(index, index - 1)}
                        className="rounded p-0.5 text-dune-cream-muted/30 transition-colors hover:text-dune-cream-muted/60"
                      >
                        <ChevronUp size={10} />
                      </button>
                    )}
                    {index < orderedCards.length - 1 && (
                      <button
                        onClick={() => reorder(index, index + 1)}
                        className="rounded p-0.5 text-dune-cream-muted/30 transition-colors hover:text-dune-cream-muted/60"
                      >
                        <ChevronDown size={10} />
                      </button>
                    )}
                  </div>
                </div>
                <div className="border-t border-white/5 px-3 py-2.5">
                  {card.title && (
                    <p className="mb-1 text-sm font-semibold text-dune-cream/90">
                      {card.title}
                    </p>
                  )}
                  <div className="text-sm leading-relaxed text-dune-cream/70">
                    {card.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
