import { useState, useCallback, useEffect } from "react";
import type { ReferenceCard } from "@/contexts/ReferenceContext";

function getStorageKey(pageKey: string) {
  return `dune-companion-card-order-${pageKey}`;
}

export function useCardOrder(pageKey: string, cards: ReferenceCard[]) {
  const [orderedCards, setOrderedCards] = useState<ReferenceCard[]>(cards);

  useEffect(() => {
    if (cards.length === 0) {
      setOrderedCards([]);
      return;
    }

    const stored = localStorage.getItem(getStorageKey(pageKey));
    if (!stored) {
      setOrderedCards(cards);
      return;
    }

    try {
      const savedIds: string[] = JSON.parse(stored);
      const cardMap = new Map(cards.map((c) => [c.id, c]));

      // Reorder known cards, append new ones at the end
      const ordered: ReferenceCard[] = [];
      for (const id of savedIds) {
        const card = cardMap.get(id);
        if (card) {
          ordered.push(card);
          cardMap.delete(id);
        }
      }
      // Append any new cards not in saved order
      for (const card of cardMap.values()) {
        ordered.push(card);
      }
      setOrderedCards(ordered);
    } catch {
      setOrderedCards(cards);
    }
  }, [pageKey, cards]);

  const reorder = useCallback(
    (fromIndex: number, toIndex: number) => {
      setOrderedCards((prev) => {
        const next = [...prev];
        const [moved] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, moved);

        // Persist order
        localStorage.setItem(
          getStorageKey(pageKey),
          JSON.stringify(next.map((c) => c.id))
        );

        return next;
      });
    },
    [pageKey]
  );

  return { orderedCards, reorder };
}
