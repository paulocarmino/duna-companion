import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { getIcon } from "@/lib/icons";
import { SidebarLink } from "./SidebarLink";
import type { NavItem } from "@/data/types";

interface SidebarSectionProps {
  item: NavItem;
  onLinkClick?: () => void;
}

export function SidebarSection({ item, onLinkClick }: SidebarSectionProps) {
  const location = useLocation();
  const isChildActive = item.children?.some(
    (child) => location.pathname === child.path
  );
  const [isExpanded, setIsExpanded] = useState(true);

  const IconComponent = getIcon(item.icon);

  if (!item.children) {
    return <SidebarLink item={item} onClick={onLinkClick} />;
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className={clsx(
          "flex w-full items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-all duration-200",
          isChildActive || location.pathname === item.path
            ? "text-dune-gold"
            : "text-dune-cream-muted hover:bg-dune-brown-light/40 hover:text-dune-cream"
        )}
      >
        {IconComponent && <IconComponent size={16} />}
        <span className="flex-1 truncate text-left">{item.label}</span>
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
          <div className="mt-1 flex flex-col gap-0.5">
            {item.children.map((child) => (
              <SidebarLink
                key={child.path}
                item={child}
                depth={1}
                onClick={onLinkClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
