import { Lightbulb } from "lucide-react";

interface ProTipBoxProps {
  title?: string;
  text: string;
}

export function ProTipBox({ title, text }: ProTipBoxProps) {
  return (
    <div className="my-5 rounded-lg border-l-2 border-dune-gold bg-dune-gold/[0.04] px-4 py-3.5 noise-overlay">
      <div className="flex gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-dune-gold/10">
          <Lightbulb size={14} className="text-dune-gold" />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-dune-gold/60 lg:text-xs">
            PRO TIP
          </span>
          {title && (
            <h4 className="mb-1 text-sm font-semibold text-dune-gold normal-case tracking-normal lg:text-base">
              {title}
            </h4>
          )}
          <p className="text-sm leading-relaxed text-dune-cream/85 lg:text-base">{text}</p>
        </div>
      </div>
    </div>
  );
}
