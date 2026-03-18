import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface QuickRefProps {
  label: string;
  target: string;
}

export function QuickRef({ label, target }: QuickRefProps) {
  return (
    <div className="my-4">
      <Link
        to={target}
        className="group inline-flex items-center gap-2 rounded-md border border-dune-gold/10 bg-dune-gold/[0.03] px-4 py-2.5 text-sm font-medium text-dune-gold/80 transition-all duration-200 hover:border-dune-gold/25 hover:bg-dune-gold/[0.06] hover:text-dune-gold"
      >
        <span>{label}</span>
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
