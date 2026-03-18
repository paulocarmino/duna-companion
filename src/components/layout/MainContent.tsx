import { clsx } from "clsx";
import type { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
  className?: string;
}

export function MainContent({ children, className }: MainContentProps) {
  return (
    <main
      className={clsx(
        "mx-auto w-full max-w-5xl px-5 pb-28 lg:px-16 lg:pb-12 xl:mx-0 xl:max-w-none",
        "animate-fade-in",
        className
      )}
    >
      {children}
    </main>
  );
}
