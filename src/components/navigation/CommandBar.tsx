import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, X } from "lucide-react";
import { clsx } from "clsx";
import { getIcon } from "@/lib/icons";
import { navigation } from "@/data/navigation";
import type { NavItem } from "@/data/types";

function flattenNav(items: NavItem[]): NavItem[] {
  const result: NavItem[] = [];
  for (const item of items) {
    result.push(item);
    if (item.children) {
      result.push(...item.children);
    }
  }
  return result;
}

export function CommandBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const allItems = useMemo(() => flattenNav(navigation), []);
  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 8);
    const q = query.toLowerCase();
    return allItems.filter((item) => item.label.toLowerCase().includes(q));
  }, [query, allItems]);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  useEffect(() => {
    setIsExpanded(false);
    setQuery("");
  }, [location.pathname]);

  function handleSelect(path: string) {
    navigate(path);
    setIsExpanded(false);
    setQuery("");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Expanded panel */}
      <div
        className={clsx(
          "transition-all duration-300 ease-in-out overflow-hidden",
          isExpanded ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass-strong mx-3 mb-2 rounded-xl border border-dune-gold/10 shadow-2xl">
          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-dune-gold/8 px-4 py-3">
            <Search size={16} className="shrink-0 text-dune-cream-muted" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar secao..."
              className="flex-1 bg-transparent text-sm text-dune-cream placeholder:text-dune-cream-muted/50 focus:outline-none"
            />
            <button
              onClick={() => {
                setIsExpanded(false);
                setQuery("");
              }}
              className="rounded-md p-1 text-dune-cream-muted hover:text-dune-cream"
            >
              <X size={16} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredItems.map((item) => {
              const IconComponent = getIcon(item.icon);
              const isActive = location.pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => handleSelect(item.path)}
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
            })}
            {filteredItems.length === 0 && (
              <p className="px-3 py-4 text-center text-sm text-dune-cream-muted/50">
                Nenhum resultado
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Floating bar */}
      <div className="bg-gradient-to-t from-dune-dark via-dune-dark/95 to-transparent px-4 pb-4 pt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={clsx(
            "glass-strong flex w-full items-center gap-3 rounded-2xl border px-5 py-3.5 shadow-lg transition-all duration-200",
            isExpanded
              ? "border-dune-gold/20"
              : "border-dune-gold/8 hover:border-dune-gold/15"
          )}
        >
          <Search size={16} className="text-dune-cream-muted" />
          <span className="flex-1 text-left text-sm text-dune-cream-muted/60">
            Navegar no companion...
          </span>
          <div className="h-4 w-4 rotate-45 border border-dune-gold/30 bg-dune-gold/10" />
        </button>
      </div>
    </div>
  );
}
