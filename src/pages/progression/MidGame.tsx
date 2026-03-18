import { useEffect, useMemo } from "react";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProgressionRenderer } from "@/components/content/ProgressionRenderer";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";
import { midGame } from "@/data/progression/midGame";

export function MidGame() {
  const { setCards } = useReference();

  const { cards, filteredBlocks } = useMemo(() => {
    const cards: ReferenceCard[] = [];
    const filteredBlocks = midGame.blocks.filter((block, i) => {
      if (block.type === "pro-tip") {
        cards.push({
          id: `mid-tip-${i}`,
          type: "tip",
          title: block.title || "",
          content: block.text || "",
        });
        return false;
      }
      if (block.type === "lore-note") {
        cards.push({
          id: `mid-lore-${i}`,
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
        title={midGame.title}
        subtitle={midGame.subtitle}
        heroImage={midGame.heroImage}
      />
      <ProgressionRenderer blocks={filteredBlocks} />
    </MainContent>
  );
}
