import { useState } from "react";
import { Package, ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import type { ResourceRequirement } from "@/data/types";

interface ResourceTableProps {
  title?: string;
  resources: ResourceRequirement[];
}

export function ResourceTable({ title, resources }: ResourceTableProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="my-5 rounded-lg border border-dune-gold/10 bg-dune-brown/30 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-dune-brown-light/20"
      >
        <Package size={14} className="text-dune-orange" />
        <span className="flex-1 text-xs font-medium text-dune-cream-muted">
          {title || "Recursos Necessarios"}
        </span>
        <span className="text-[10px] text-dune-cream-muted/50">
          {resources.length} itens
        </span>
        <ChevronDown
          size={14}
          className={clsx(
            "text-dune-cream-muted transition-transform duration-300",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      <div
        className={clsx(
          "grid transition-all duration-300",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-dune-gold/8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dune-gold/5">
                  <th className="px-4 py-2 text-left text-[10px] font-semibold tracking-[0.15em] text-dune-cream-muted/50 lg:text-xs">
                    RECURSO
                  </th>
                  <th className="px-4 py-2 text-right text-[10px] font-semibold tracking-[0.15em] text-dune-cream-muted/50 lg:text-xs">
                    QTD
                  </th>
                </tr>
              </thead>
              <tbody>
                {resources.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-dune-gold/5 last:border-0"
                  >
                    <td className="px-4 py-2 text-sm lg:text-base text-dune-cream/80">
                      {r.name}
                    </td>
                    <td className="px-4 py-2 text-right text-sm lg:text-base font-medium text-dune-orange">
                      {r.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
