import { AlertTriangle } from "lucide-react";

interface WarningBoxProps {
  title?: string;
  text: string;
}

export function WarningBox({ title, text }: WarningBoxProps) {
  return (
    <div className="my-5 rounded-lg border-l-2 border-dune-danger bg-dune-danger/[0.04] px-4 py-3.5 noise-overlay">
      <div className="flex gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-dune-danger/10">
          <AlertTriangle size={14} className="text-dune-danger" />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-dune-danger/60 lg:text-xs">
            AVISO
          </span>
          {title && (
            <h4 className="mb-1 text-sm font-semibold text-dune-danger normal-case tracking-normal lg:text-base">
              {title}
            </h4>
          )}
          <p className="text-sm leading-relaxed text-dune-cream/85 lg:text-base">{text}</p>
        </div>
      </div>
    </div>
  );
}
