import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export interface ReferenceCard {
  id: string;
  type: "tip" | "lore" | "mechanic" | "reference";
  title: string;
  content: ReactNode;
  mechanicId?: string;
}

type PanelPosition = "top" | "bottom";

interface ReferenceContextValue {
  cards: ReferenceCard[];
  setCards: (cards: ReferenceCard[]) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  panelPosition: PanelPosition;
  setPanelPosition: (position: PanelPosition) => void;
}

const ReferenceContext = createContext<ReferenceContextValue | null>(null);

export function ReferenceProvider({ children }: { children: ReactNode }) {
  const [cards, setCardsState] = useState<ReferenceCard[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [panelPosition, setPanelPosition] = useState<PanelPosition>("bottom");

  const setCards = useCallback((newCards: ReferenceCard[]) => {
    setCardsState(newCards);
  }, []);

  return (
    <ReferenceContext.Provider value={{ cards, setCards, isOpen, setIsOpen, panelPosition, setPanelPosition }}>
      {children}
    </ReferenceContext.Provider>
  );
}

export function useReference() {
  const context = useContext(ReferenceContext);
  if (!context) {
    throw new Error("useReference must be used within a ReferenceProvider");
  }
  return context;
}
