import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const QUOTES = [
  "Não devo temer. O medo é o assassino da mente.",
  "A Spice deve fluir.",
  "O mistério da vida não é um problema a ser resolvido, mas uma realidade a ser experimentada.",
  "Deus criou Arrakis para treinar os fiéis.",
  "O poder de destruir uma coisa é o controle absoluto sobre ela.",
  "Sem os rituais do deserto, não haveria Fremen.",
  "O sono é a pequena morte que traz a obliteração total.",
  "Quem controla a Spice, controla o universo.",
  "A visão do futuro é como olhar para um mar tempestuoso.",
  "Os Fremen não choram por seus mortos. A água é preciosa demais para ser desperdiçada.",
  "Um grande homem não busca ser líder. Ele é chamado para isso.",
  "A natureza é um recurso a ser compreendido, não dominado.",
  "O segredo da sobrevivência é nunca travar uma batalha justa.",
  "Arrakis ensina a atitude da faca — cortar o que está incompleto.",
  "O deserto testa a todos. Só os dignos sobrevivem.",
];

const SHORT_QUOTES = QUOTES.filter((q) => q.length <= 80);

const QUICK_LINKS = [
  { label: "Guia Iniciante", to: "/iniciante" },
  { label: "Progressão", to: "/progressao" },
  { label: "Pro Tips", to: "/pro-tips" },
  { label: "Combate", to: "/combate" },
] as const;

const STATS = [
  "24 mecânicas documentadas",
  "5 classes detalhadas",
  "4 facções exploradas",
  "∞ mortes por sandworm",
] as const;

const SPICE_PARTICLES = [
  { top: "20%", left: "15%" },
  { top: "35%", left: "45%" },
  { top: "10%", left: "70%" },
  { top: "50%", left: "30%" },
  { top: "25%", left: "85%" },
  { top: "40%", left: "55%" },
  { top: "15%", left: "40%" },
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function Footer() {
  const location = useLocation();

  const quote = useMemo(() => {
    const seed = hashString(location.pathname);
    return QUOTES[seed % QUOTES.length];
  }, [location.pathname]);

  const mobileQuote = useMemo(() => {
    const seed = hashString(location.pathname);
    return SHORT_QUOTES[seed % SHORT_QUOTES.length];
  }, [location.pathname]);

  return (
    <footer className="relative mt-16">
      {/* ── Dune Silhouette SVG ── */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 120"
          className="block w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="dune-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="40%" stopColor="#2e2a26" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#24201d" />
            </linearGradient>
          </defs>
          <rect width="1440" height="120" fill="url(#dune-fade)" />
          <path
            d="M0,90 C120,70 240,55 360,60 C480,65 540,80 660,75 C780,70 840,50 960,55 C1080,60 1200,78 1320,72 C1380,69 1420,74 1440,76 L1440,120 L0,120 Z"
            fill="#2e2a26"
            opacity="0.5"
          />
          <path
            d="M0,100 C160,85 280,70 420,78 C560,86 640,92 780,82 C920,72 1020,65 1140,75 C1260,85 1360,90 1440,88 L1440,120 L0,120 Z"
            fill="#2e2a26"
            opacity="0.7"
          />
          <path
            d="M0,110 C200,95 350,88 500,94 C650,100 750,105 900,96 C1050,87 1150,82 1300,92 C1380,97 1420,100 1440,98 L1440,120 L0,120 Z"
            fill="#24201d"
          />
        </svg>

        {/* Spice particles floating over dunes */}
        {SPICE_PARTICLES.map((pos, i) => (
          <div
            key={i}
            className="spice-particle"
            style={{ top: pos.top, left: pos.left }}
          />
        ))}
      </div>

      {/* ── Spice Flow Border ── */}
      <div className="spice-flow-border" />

      {/* ── Main Footer Content ── */}
      <div className="noise-overlay bg-dune-brown">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-16 lg:py-16">
          {/* ── Desktop Layout (3 columns) ── */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Left: Sabedoria de Arrakis */}
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-xs tracking-[0.2em] text-dune-gold-dim">
                SABEDORIA DE ARRAKIS
              </h3>
              <div className="relative">
                {/* Decorative quote mark */}
                <svg
                  className="absolute -left-2 -top-3 h-6 w-6 text-dune-gold/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="font-heading text-base italic leading-relaxed text-dune-gold-dim">
                  {quote}
                </p>
              </div>
            </div>

            {/* Center: Branding + Quick Links */}
            <div className="flex flex-col items-center text-center">
              <p className="font-heading text-lg tracking-[0.2em] text-dune-gold">
                DUNE COMPANION
              </p>
              <p className="mt-1 text-sm text-dune-cream-muted">
                Guia não-oficial de Dune Awakening
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {QUICK_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="rounded-full border border-dune-gold/30 px-4 py-1.5 text-xs text-dune-cream-muted transition-colors hover:border-dune-gold/60 hover:text-dune-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <p className="mt-6 text-xs text-dune-cream-muted/40">
                v2.0 — Atualizado com conteúdo Lucky Ghost
              </p>
            </div>

            {/* Right: Stats & Flavor */}
            <div className="flex flex-col items-end justify-center text-right">
              <ul className="space-y-2">
                {STATS.map((stat) => (
                  <li
                    key={stat}
                    className="text-sm text-dune-cream-muted/70"
                  >
                    {stat}
                  </li>
                ))}
              </ul>

              <div className="my-3 flex justify-center">
                <div className="h-1.5 w-1.5 rotate-45 bg-dune-gold/30" />
              </div>

              <p className="text-xs text-dune-cream-muted/50">
                Feito com ☕ e Spice Melange
              </p>
            </div>
          </div>

          {/* ── Mobile Layout (stacked) ── */}
          <div className="flex flex-col items-center text-center lg:hidden">
            {/* Rotating quote (short only) */}
            <div className="relative mb-8">
              <svg
                className="absolute -left-2 -top-3 h-5 w-5 text-dune-gold/20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="font-heading text-sm italic leading-relaxed text-dune-gold-dim">
                {mobileQuote}
              </p>
            </div>

            {/* Branding */}
            <p className="font-heading text-lg tracking-[0.2em] text-dune-gold">
              DUNE COMPANION
            </p>
            <p className="mt-1 text-sm text-dune-cream-muted">
              Guia não-oficial de Dune Awakening
            </p>

            {/* Quick Links 2x2 grid */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-full border border-dune-gold/30 px-4 py-1.5 text-xs text-dune-cream-muted transition-colors hover:border-dune-gold/60 hover:text-dune-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-dune-gold/10 px-6 py-4 pb-20 lg:pb-4">
          <p className="text-center text-xs text-dune-cream-muted/40">
            A Spice deve fluir. Sempre. — {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
