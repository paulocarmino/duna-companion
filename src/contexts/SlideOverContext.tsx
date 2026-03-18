import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface SlideOverState {
  isOpen: boolean;
  title: string;
  content: ReactNode | null;
  open: (title: string, content: ReactNode) => void;
  close: () => void;
}

const SlideOverContext = createContext<SlideOverState | null>(null);

export function SlideOverProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<ReactNode | null>(null);

  const open = useCallback((newTitle: string, newContent: ReactNode) => {
    setTitle(newTitle);
    setContent(newContent);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <SlideOverContext.Provider value={{ isOpen, title, content, open, close }}>
      {children}
    </SlideOverContext.Provider>
  );
}

export function useSlideOver() {
  const context = useContext(SlideOverContext);
  if (!context) {
    throw new Error("useSlideOver must be used within a SlideOverProvider");
  }
  return context;
}
