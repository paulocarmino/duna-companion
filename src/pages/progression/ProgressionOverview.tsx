import { Link } from "react-router-dom";
import { Sprout, Swords, Crown, ArrowRight } from "lucide-react";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

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

export function ProgressionOverview() {
  return (
    <MainContent>
      <PageHeader
        title="Guia de Progressão"
        subtitle="Walkthrough completo do nível 1 ao 200. Cada fase com mecânicas explicadas, dicas, e checklists no momento certo."
      />

      <div className="space-y-4">
        {phases.map((phase) => (
          <Link key={phase.path} to={phase.path}>
            <Card hover className="group p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-dune-brown-light/50">
                  <phase.icon size={24} className="text-dune-gold" />
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <h3 className="text-base font-bold text-dune-cream transition-colors group-hover:text-dune-gold">
                      {phase.title}
                    </h3>
                    <Badge variant={phase.variant} size="sm">
                      Level {phase.levels}
                    </Badge>
                  </div>

                  <p className="mb-3 text-sm lg:text-base leading-relaxed text-dune-cream-muted">
                    {phase.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {phase.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded bg-dune-brown-light/40 px-2 py-0.5 text-xs lg:text-sm text-dune-cream-muted"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowRight
                  size={18}
                  className="hidden shrink-0 text-dune-cream-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-dune-gold sm:block"
                />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </MainContent>
  );
}
