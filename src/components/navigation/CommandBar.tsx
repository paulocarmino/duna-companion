import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, BookOpen } from "lucide-react";
import { clsx } from "clsx";
import { getIcon } from "@/lib/icons";
import { navigation } from "@/data/navigation";
import { useReference } from "@/contexts/ReferenceContext";
import type { NavItem } from "@/data/types";

function CommandBarSection({
  item,
  location,
  onSelect,
}: {
  item: NavItem;
  location: ReturnType<typeof useLocation>;
  onSelect: (path: string) => void;
}) {
  const isChildActive = item.children?.some(
    (child) => location.pathname === child.path
  );
  const [isExpanded, setIsExpanded] = useState(true);
  const IconComponent = getIcon(item.icon);

  if (!item.children) {
    const isActive = location.pathname === item.path;
    return (
      <button
        onClick={() => onSelect(item.path)}
        className={clsx(
          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
          isActive
            ? "bg-dune-gold/10 text-dune-gold"
            : "text-dune-cream-muted hover:bg-dune-brown-light/40 hover:text-dune-cream"
        )}
      >
        {IconComponent && <IconComponent size={16} />}
        <span>{item.label}</span>
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className={clsx(
          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
          isChildActive || location.pathname === item.path
            ? "text-dune-gold"
            : "text-dune-cream-muted hover:bg-dune-brown-light/40 hover:text-dune-cream"
        )}
      >
        {IconComponent && <IconComponent size={16} />}
        <span className="flex-1 truncate">{item.label}</span>
        <ChevronDown
          size={14}
          className={clsx(
            "shrink-0 transition-transform duration-300",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      <div
        className={clsx(
          "grid transition-all duration-300 ease-in-out",
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="mt-0.5 flex flex-col gap-0.5">
            {item.children.map((child) => {
              const ChildIcon = getIcon(child.icon);
              const isActive = location.pathname === child.path;
              return (
                <button
                  key={child.path}
                  onClick={() => onSelect(child.path)}
                  className={clsx(
                    "ml-5 flex w-[calc(100%-1.25rem)] items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    isActive
                      ? "bg-dune-gold/10 text-dune-gold"
                      : "text-dune-cream-muted hover:bg-dune-brown-light/40 hover:text-dune-cream"
                  )}
                >
                  {ChildIcon && <ChildIcon size={14} />}
                  <span>{child.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CommandBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { cards, isOpen: isRefOpen, setIsOpen: setRefOpen, setPanelPosition } = useReference();

  useEffect(() => {
    function handleScroll() {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setIsAtTop(scrollPercent < 0.05);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset to top on route change
  useEffect(() => {
    setIsAtTop(true);
    setIsExpanded(false);
  }, [location.pathname]);

  function handleSelect(path: string) {
    navigate(path);
    setIsExpanded(false);
  }

  useEffect(() => {
    setPanelPosition(isAtTop ? "top" : "bottom");
  }, [isAtTop, setPanelPosition]);

  const atTop = isAtTop;

  return (
    <div
      className={clsx(
        "fixed left-0 right-0 z-50 lg:hidden transition-all duration-300 ease-in-out",
        atTop ? "top-0" : "bottom-0"
      )}
    >
      {/* Expanded panel — always opens upward from the bar */}
      {!atTop && (
        <div
          className={clsx(
            "transition-all duration-300 ease-in-out overflow-hidden",
            isExpanded ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="glass-strong mx-3 mb-2 rounded-xl border border-dune-gold/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-dune-gold/8 px-4 py-3">
              <span className="text-sm font-medium text-dune-cream-muted">
                Navegação
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="rounded-md p-1 text-dune-cream-muted hover:text-dune-cream"
              >
                <X size={16} />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              <div className="flex flex-col gap-0.5">
                {navigation.map((item) => (
                  <CommandBarSection
                    key={item.path}
                    item={item}
                    location={location}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating bar */}
      <div
        className={clsx(
          "px-4 transition-all duration-300",
          atTop
            ? "bg-gradient-to-b from-dune-dark via-dune-dark/95 to-transparent pt-4 pb-2"
            : "bg-gradient-to-t from-dune-dark via-dune-dark/95 to-transparent pb-4 pt-2"
        )}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={clsx(
            "glass-strong flex w-full items-center gap-3 rounded-2xl border px-5 py-3.5 shadow-lg transition-all duration-200",
            isExpanded
              ? "border-dune-gold/20"
              : "border-dune-gold/8 hover:border-dune-gold/15"
          )}
        >
          <Menu size={18} className="text-dune-cream-muted" />
          <span className="flex-1 text-left text-sm text-dune-cream-muted/60">
            Navegar no companion...
          </span>
          {cards.length > 0 ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setRefOpen(!isRefOpen);
              }}
              className={clsx(
                "relative flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-200",
                isRefOpen
                  ? "border-dune-gold/40 bg-dune-gold/15"
                  : "border-dune-gold/20 bg-dune-gold/5 hover:border-dune-gold/40 hover:bg-dune-gold/10"
              )}
              aria-label={isRefOpen ? "Fechar codex" : "Abrir codex"}
            >
              {isRefOpen ? (
                <X size={14} className="text-dune-gold" />
              ) : (
                <>
                  <BookOpen size={14} className="text-dune-gold" />
                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-dune-gold text-[8px] font-bold text-dune-dark">
                    {cards.length}
                  </span>
                </>
              )}
            </button>
          ) : (
            <div className="h-4 w-4 rotate-45 border border-dune-gold/30 bg-dune-gold/10" />
          )}
        </button>
      </div>

      {/* Expanded panel — opens downward when at top */}
      {atTop && (
        <div
          className={clsx(
            "transition-all duration-300 ease-in-out overflow-hidden",
            isExpanded ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="glass-strong mx-3 mt-2 rounded-xl border border-dune-gold/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-dune-gold/8 px-4 py-3">
              <span className="text-sm font-medium text-dune-cream-muted">
                Navegação
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="rounded-md p-1 text-dune-cream-muted hover:text-dune-cream"
              >
                <X size={16} />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              <div className="flex flex-col gap-0.5">
                {navigation.map((item) => (
                  <CommandBarSection
                    key={item.path}
                    item={item}
                    location={location}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
