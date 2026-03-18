import { clsx } from "clsx";
import { X } from "lucide-react";
import { useSidebar } from "@/contexts/SidebarContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SidebarSection } from "./SidebarSection";
import { navigation } from "@/data/navigation";

export function Sidebar() {
  const { isOpen, close } = useSidebar();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return (
      <aside className="fixed left-0 top-0 z-30 flex h-screen w-72 flex-col border-r border-dune-gold/8 bg-dune-dark">
        <SidebarContent />
      </aside>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={close}
        aria-hidden
      />

      {/* Mobile drawer */}
      <aside
        className={clsx(
          "fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-dune-dark shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-end p-3">
          <button
            onClick={close}
            className="rounded-md p-2 text-dune-cream-muted transition-colors hover:bg-dune-brown-light/40 hover:text-dune-cream"
            aria-label="Fechar menu"
          >
            <X size={18} />
          </button>
        </div>
        <SidebarContent onLinkClick={close} />
      </aside>
    </>
  );
}

function SidebarContent({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <>
      {/* Logo / Title */}
      <div className="px-5 pb-2 pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-dune-gold/10">
            <div className="h-3 w-3 rotate-45 bg-dune-gold" />
          </div>
          <div>
            <h1 className="font-heading text-base font-bold tracking-[0.2em] text-dune-gold">
              DUNE
            </h1>
            <p className="font-body text-xs tracking-[0.15em] text-dune-cream-muted">
              AWAKENING COMPANION
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 my-4 h-px bg-gradient-to-r from-dune-gold/15 via-dune-gold/8 to-transparent" />

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        <div className="flex flex-col gap-0.5">
          {navigation.map((item) => (
            <SidebarSection
              key={item.path}
              item={item}
              onLinkClick={onLinkClick}
            />
          ))}
        </div>
      </nav>

    </>
  );
}
