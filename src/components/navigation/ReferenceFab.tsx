import { BookOpen } from "lucide-react";
import { useReference } from "@/contexts/ReferenceContext";

export function ReferenceFab() {
  const { cards, isOpen, setIsOpen } = useReference();

  if (cards.length === 0) return null;

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="fixed bottom-20 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full glass-strong border border-dune-gold/20 shadow-lg transition-all duration-200 hover:border-dune-gold/40 hover:shadow-[0_0_20px_rgba(244,207,139,0.1)] xl:hidden"
      aria-label="Abrir referencias"
    >
      <BookOpen size={18} className="text-dune-gold" />
      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-dune-gold text-[9px] font-bold text-dune-dark">
        {cards.length}
      </span>
    </button>
  );
}
