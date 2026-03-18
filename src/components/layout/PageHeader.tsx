import { clsx } from "clsx";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  heroImage?: string;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  heroImage,
  className,
}: PageHeaderProps) {
  return (
    <header className={clsx(
      "relative mb-10 overflow-hidden",
      heroImage ? "-mx-5 lg:-mx-16" : "rounded-xl",
      className
    )}>
      {/* Background image with overlay */}
      {heroImage && (
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dune-dark via-dune-dark/80 to-dune-dark/40" />
        </div>
      )}

      {/* Atmospheric gradient (always) */}
      {!heroImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-dune-purple/30 via-transparent to-dune-brown/20" />
      )}

      {/* Content */}
      <div className={clsx("relative px-8 py-12", heroImage && "px-10 pt-24 lg:px-20")}>
        {/* Diamond accent */}
        <div className="mb-5 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <div className="h-px w-16 bg-gradient-to-r from-dune-gold/60 to-transparent" />
        </div>

        <h1 className="mb-3 text-3xl font-bold lg:text-5xl">{title}</h1>

        {subtitle && (
          <p className="max-w-2xl text-base leading-relaxed text-dune-cream-muted lg:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
