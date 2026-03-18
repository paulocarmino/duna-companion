import { useEffect, useMemo } from "react";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProgressionRenderer } from "@/components/content/ProgressionRenderer";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";
import { lateGame } from "@/data/progression/lateGame";

export function LateGame() {
  const { setCards } = useReference();

  const { cards, filteredBlocks } = useMemo(() => {
    const cards: ReferenceCard[] = [];
    const filteredBlocks = lateGame.blocks.filter((block, i) => {
      if (block.type === "pro-tip") {
        cards.push({
          id: `late-tip-${i}`,
          type: "tip",
          title: block.title || "",
          content: block.text || "",
        });
        return false;
      }
      if (block.type === "lore-note") {
        cards.push({
          id: `late-lore-${i}`,
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
        title={lateGame.title}
        subtitle={lateGame.subtitle}
        heroImage={lateGame.heroImage}
      />
      <ProgressionRenderer blocks={filteredBlocks} />
    </MainContent>
  );
}
