import { Link } from "react-router-dom";
import {
  TrendingUp,
  Users,
  Shield,
  Hammer,
  Droplets,
  Building2,
  Plane,
  Map,
  BookOpen,
  Landmark,
  Zap,
  HelpCircle,
  Sprout,
  Swords,
  Crown,
} from "lucide-react";
import { MainContent } from "@/components/layout/MainContent";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DiamondDivider } from "@/components/ui/DiamondDivider";
import { images } from "@/data/images";

const phases = [
  {
    title: "Início do Jogo",
    path: "/progressao/inicio",
    icon: Sprout,
    levels: "1 - 50",
    description:
      "Sobreviva, aprenda as mecânicas básicas, escolha sua classe, e estabeleça uma base. Foco em água, stillsuit, e crafting fundamental.",
    highlights: [
      "Escolha de classe (não escolha Trooper!)",
      "Sobrevivência: água e calor",
      "Primeiro crafting e Stillsuit",
      "Base inicial e Sandbike",
    ],
    variant: "gold" as const,
  },
  {
    title: "Meio do Jogo",
    path: "/progressao/meio",
    icon: Swords,
    levels: "50 - 100",
    description:
      "Ornithopters, spice farming, e combate avançado. Expanda sua base, junte-se a uma guild, e prepare-se para o Deep Desert.",
    highlights: [
      "Ornithopter: voar muda tudo",
      "Spice: a nova moeda",
      "PvP e cross-class builds",
      "Economia e trade",
    ],
    variant: "orange" as const,
  },
  {
    title: "Final do Jogo",
    path: "/progressao/final",
    icon: Crown,
    levels: "100 - 200",
    description:
      "Deep Desert (PvPvE), política do Landsraad, War of Assassins, e a luta pelo controle de Arrakis. O verdadeiro Dune Awakening.",
    highlights: [
      "Deep Desert: 500km2 de PvPvE",
      "Tempestade semanal: reset total",
      "Landsraad: política entre guilds",
      "Materiais Plastanium (tier 5)",
    ],
    variant: "danger" as const,
  },
];

const sections = [
  {
    title: "Guia de Progressão",
    description: "Walkthrough completo do early ao endgame",
    icon: TrendingUp,
    path: "/progressao",
    accent: "dune-gold",
  },
  {
    title: "Classes & Builds",
    description: "5 classes, skill trees, builds recomendados",
    icon: Users,
    path: "/classes",
    accent: "dune-blue",
  },
  {
    title: "Combate",
    description: "Escudos, Slow Blade, PvP, táticas",
    icon: Shield,
    path: "/combate",
    accent: "dune-danger",
  },
  {
    title: "Crafting & Recursos",
    description: "Estações, receitas, tiers de material",
    icon: Hammer,
    path: "/crafting",
    accent: "dune-orange",
  },
  {
    title: "Sobrevivência",
    description: "Água, calor, sandworms, stillsuits",
    icon: Droplets,
    path: "/sobrevivencia",
    accent: "dune-blue",
  },
  {
    title: "Base Building",
    description: "Construção, Sub-Fief, defesa",
    icon: Building2,
    path: "/base",
    accent: "dune-gold",
  },
  {
    title: "Veículos",
    description: "Sandbike ao Ornithopter, Mk1-Mk6",
    icon: Plane,
    path: "/veiculos",
    accent: "dune-orange",
  },
  {
    title: "Mapa & Locais",
    description: "Hagga Basin, Deep Desert, POIs",
    icon: Map,
    path: "/mapa",
    accent: "dune-gold",
  },
  {
    title: "Lore & Facções",
    description: "Atreides, Harkonnen, Fremen, história",
    icon: BookOpen,
    path: "/lore",
    accent: "dune-purple",
  },
  {
    title: "Landsraad",
    description: "Política, guilds, votação semanal",
    icon: Landmark,
    path: "/landsraad",
    accent: "dune-gold",
  },
  {
    title: "Pro Tips",
    description: "Estratégias avançadas, meta, economia",
    icon: Zap,
    path: "/pro-tips",
    accent: "dune-orange",
  },
  {
    title: "Dicas de Iniciante",
    description: "Erros comuns e como evitá-los",
    icon: HelpCircle,
    path: "/iniciante",
    accent: "dune-blue",
  },
];

export function HomePage() {
  return (
    <MainContent>
      {/* Hero */}
      <div className="relative mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0">
          <img
            src={images.hero.desertPanorama}
            alt=""
            className="h-full w-full object-cover object-top"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dune-dark via-dune-dark/70 to-dune-dark/30" />
        <div className="relative px-8 py-10 text-center lg:py-14">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-dune-gold/50" />
            <div className="h-3 w-3 rotate-45 bg-dune-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-dune-gold/50" />
          </div>

          <h1 className="mb-2 text-4xl font-bold lg:text-6xl">
            DUNE AWAKENING
          </h1>
          <p className="font-heading text-sm tracking-[0.3em] text-dune-cream-muted lg:text-base">
            COMPANION
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dune-cream-muted lg:text-lg">
            Seu guia completo para sobreviver e dominar Arrakis.
            Progressão, mecânicas, lore, dicas, e tudo mais que você
            precisa saber.
          </p>

          <Link
            to="/progressao/inicio"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-dune-gold/20 bg-dune-gold/10 px-6 py-3 font-heading text-sm font-bold tracking-[0.1em] text-dune-gold lg:text-base transition-all duration-200 hover:border-dune-gold/40 hover:bg-dune-gold/15 hover:shadow-[0_0_20px_rgba(244,207,139,0.1)]"
          >
            COMEÇAR JORNADA
            <TrendingUp size={16} />
          </Link>
        </div>
      </div>

      {/* Progression Guide */}
      <section className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">GUIA DE PROGRESSÃO</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {phases.map((phase) => (
            <Link key={phase.path} to={phase.path} className="block h-full">
              <Card hover className="group flex h-full flex-col p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dune-brown-light/50">
                    <phase.icon size={20} className="text-dune-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-dune-cream transition-colors group-hover:text-dune-gold lg:text-base">
                      {phase.title}
                    </h3>
                    <Badge variant={phase.variant} size="sm">
                      Level {phase.levels}
                    </Badge>
                  </div>
                </div>

                <p className="mb-2 min-h-[3.5rem] text-sm lg:text-base leading-relaxed text-dune-cream-muted">
                  {phase.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {phase.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded border border-dune-gold/10 bg-dune-brown-light/50 px-2 py-0.5 text-sm lg:text-base text-dune-cream-muted/80"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <DiamondDivider />

      {/* Section Grid */}
      <section>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">EXPLORAR GUIA</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link key={section.path} to={section.path}>
              <Card hover className="group p-4 h-full">
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded bg-${section.accent}/10`}
                  >
                    <section.icon
                      size={16}
                      className={`text-${section.accent}`}
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold normal-case tracking-[0.1em] text-dune-cream transition-colors group-hover:text-dune-gold">
                    {section.title}
                  </h3>
                </div>
                <p className="text-sm lg:text-base leading-relaxed text-dune-cream-muted">
                  {section.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </MainContent>
  );
}
