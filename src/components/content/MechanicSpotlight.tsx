import { useState } from "react";
import { Cog, ChevronDown, ExternalLink } from "lucide-react";
import { clsx } from "clsx";
import { useSlideOver } from "@/contexts/SlideOverContext";
import { mechanics } from "@/data/mechanics";

interface MechanicSpotlightProps {
  mechanicId: string;
  contextNote?: string;
}

export function MechanicSpotlight({
  mechanicId,
  contextNote,
}: MechanicSpotlightProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const slideOver = useSlideOver();

  const mechanic = mechanics[mechanicId];
  if (!mechanic) return null;

  function openFullReference() {
    slideOver.open(mechanic.title, (
      <div className="space-y-4">
        <p className="text-dune-cream-muted italic">{mechanic.summary}</p>
        {mechanic.details.map((detail, i) => (
          <p key={i} className="text-sm leading-relaxed text-dune-cream/90">{detail}</p>
        ))}
        {mechanic.tips.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-3 font-heading text-xs tracking-[0.15em] text-dune-gold">
              DICAS
            </h4>
            <ul className="space-y-2">
              {mechanic.tips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-sm text-dune-cream/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-dune-gold/60" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
        {mechanic.warningText && (
          <div className="mt-4 rounded-lg border border-dune-danger/20 bg-dune-danger/5 px-4 py-3">
            <p className="text-sm text-dune-danger">{mechanic.warningText}</p>
          </div>
        )}
      </div>
    ));
  }

  return (
    <div className="my-6 rounded-lg border-l-2 border-dune-blue bg-dune-brown/40 noise-overlay overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-dune-brown-light/20"
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-dune-blue/15">
          <Cog size={14} className="text-dune-blue" />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-dune-blue/70 lg:text-xs">
            MECANICA
          </span>
          <h4 className="text-sm font-semibold text-dune-cream normal-case tracking-normal lg:text-base">
            {mechanic.title}
          </h4>
        </div>
        <ChevronDown
          size={14}
          className={clsx(
            "text-dune-cream-muted transition-transform duration-300",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      {/* Context note (always visible) */}
      {contextNote && (
        <div className="border-t border-dune-blue/10 px-4 py-2.5">
          <p className="text-sm italic leading-relaxed text-dune-blue/80 lg:text-base">
            {contextNote}
          </p>
        </div>
      )}

      {/* Expanded content */}
      <div
        className={clsx(
          "grid transition-all duration-300",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-dune-blue/10 px-4 py-4">
            <p className="mb-3 text-sm leading-relaxed text-dune-cream/80 lg:text-base">
              {mechanic.summary}
            </p>

            {mechanic.tips.length > 0 && (
              <ul className="mb-3 space-y-1.5">
                {mechanic.tips.slice(0, 3).map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm text-dune-cream-muted lg:text-base">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-dune-blue/50" />
                    {tip}
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={openFullReference}
              className="flex items-center gap-1.5 text-sm font-medium text-dune-blue transition-colors hover:text-dune-gold"
            >
              <ExternalLink size={12} />
              Ver referencia completa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
