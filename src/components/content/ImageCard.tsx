import { useState } from "react";

interface ImageCardProps {
  src: string;
  caption?: string;
  attribution?: string;
}

export function ImageCard({ src, caption, attribution }: ImageCardProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="my-5 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-dune-purple/20 to-dune-brown/40">
        <div className="text-center">
          <div className="mx-auto mb-2 h-4 w-4 rotate-45 border border-dune-gold/20 bg-dune-gold/10" />
          <p className="text-xs text-dune-cream-muted/40">
            {caption || "Imagem indisponivel"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <figure className="mx-auto my-10 max-w-2xl overflow-hidden rounded-lg">
      <div className="relative">
        <img
          src={src}
          alt={caption || ""}
          className="w-full object-cover"
          onError={() => setHasError(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dune-dark/40 via-transparent to-transparent" />
      </div>
      {(caption || attribution) && (
        <figcaption className="bg-dune-brown/40 px-4 py-2.5">
          {caption && (
            <p className="text-xs leading-relaxed text-dune-cream-muted lg:text-sm">
              {caption}
            </p>
          )}
          {attribution && (
            <p className="mt-0.5 text-[10px] text-dune-cream-muted/40">
              {attribution}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
