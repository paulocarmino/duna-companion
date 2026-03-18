import { useEffect, useMemo } from "react";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { ProgressionRenderer } from "@/components/content/ProgressionRenderer";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";
import { earlyGame } from "@/data/progression/earlyGame";

const quickStart = [
  "Não escolha Trooper na criação de personagem — você ganha de graça na campanha",
  "Cut Array + Power Pack são prioridade #1 de crafting. Ferramentas não funcionam sem energia!",
  "NUNCA use escudo no deserto aberto. Atrai sandworms. Morte instantânea.",
  "Construa sua primeira base perto de Griffin Reach + flores. Ela é TEMPORÁRIA, não invista demais.",
  "Use Survey Probe em toda zona nova. Barato e revela recursos + locais de interesse.",
];

export function EarlyGame() {
  const { setCards } = useReference();

  const { cards, filteredBlocks } = useMemo(() => {
    const cards: ReferenceCard[] = [];
    const filteredBlocks = earlyGame.blocks.filter((block, i) => {
      if (block.type === "pro-tip") {
        cards.push({
          id: `early-tip-${i}`,
          type: "tip",
          title: block.title || "",
          content: block.text || "",
        });
        return false;
      }
      if (block.type === "lore-note") {
        cards.push({
          id: `early-lore-${i}`,
          type: "lore",
          title: "",
          content: block.loreText || "",
        });
        return false;
      }
      return true;
    });
    return { cards, filteredBlocks };
  }, []);

  useEffect(() => {
    setCards(cards);
    return () => setCards([]);
  }, [cards, setCards]);

  return (
    <MainContent>
      <PageHeader
        title={earlyGame.title}
        subtitle={earlyGame.subtitle}
        heroImage={earlyGame.heroImage}
      />

      {/* Quick Start */}
      <section className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">INÍCIO RÁPIDO</h2>
        </div>
        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base text-dune-cream-muted">
            5 coisas que todo jogador novo PRECISA saber antes de começar:
          </p>
          <ul className="space-y-3">
            {quickStart.map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm lg:text-base">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-dune-gold/10 font-heading text-[10px] font-bold text-dune-gold">
                  {i + 1}
                </span>
                <span className="text-dune-cream/85">{tip}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <ProgressionRenderer blocks={filteredBlocks} />
    </MainContent>
  );
}
