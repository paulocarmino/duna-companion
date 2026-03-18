import { useEffect } from "react";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { useSlideOver } from "@/contexts/SlideOverContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function SlideOverPanel() {
  const { isOpen, title, content, close } = useSlideOver();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen && !isDesktop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isDesktop]);

  return (
    <>
      {/* Backdrop (mobile: fullscreen, desktop: just dim) */}
      <div
        className={clsx(
          "fixed inset-0 z-40 transition-opacity duration-300",
          isDesktop ? "bg-black/20" : "bg-black/60 backdrop-blur-sm",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={close}
        aria-hidden
      />

      {/* Panel */}
      <div
        className={clsx(
          "fixed z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out",
          isDesktop
            ? "right-0 top-0 h-screen w-[420px] border-l border-dune-gold/10 bg-dune-dark"
            : "inset-0 bg-dune-dark",
          isOpen
            ? "translate-x-0"
            : isDesktop
              ? "translate-x-full"
              : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-dune-gold/10 px-5 py-4">
          <h3 className="font-heading text-sm font-bold tracking-[0.15em] text-dune-gold">
            {title}
          </h3>
          <button
            onClick={close}
            className="rounded-md p-2 text-dune-cream-muted transition-colors hover:bg-dune-brown-light/40 hover:text-dune-cream"
            aria-label="Fechar painel"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {content}
        </div>
      </div>
    </>
  );
}
