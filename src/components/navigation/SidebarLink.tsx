import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import { getIcon } from "@/lib/icons";
import type { NavItem } from "@/data/types";

interface SidebarLinkProps {
  item: NavItem;
  depth?: number;
  onClick?: () => void;
}

export function SidebarLink({ item, depth = 0, onClick }: SidebarLinkProps) {
  const IconComponent = getIcon(item.icon);

  return (
    <NavLink
      to={item.path}
      end
      onClick={onClick}
      className={({ isActive }) =>
        clsx(
          "group flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-all duration-200",
          depth > 0 && "ml-6 text-sm",
          isActive
            ? "bg-dune-gold/10 text-dune-gold"
            : "text-dune-cream-muted hover:bg-dune-brown-light/40 hover:text-dune-cream"
        )
      }
    >
      {IconComponent && <IconComponent size={depth > 0 ? 14 : 16} />}
      <span className="flex-1 truncate">{item.label}</span>
    </NavLink>
  );
}
