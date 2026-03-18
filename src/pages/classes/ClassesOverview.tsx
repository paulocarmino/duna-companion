import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sword, Brain, Eye, Crosshair, Leaf, ArrowRight } from "lucide-react";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { images } from "@/data/images";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";

const classImages: Record<string, string> = {
  swordmaster: images.classes.swordmaster,
  mentat: images.classes.mentat,
  "bene-gesserit": images.classes.beneGesserit,
  trooper: images.classes.trooper,
  planetologist: images.classes.planetologist,
};

const classes = [
  {
    id: "swordmaster",
    name: "Swordmaster",
    icon: Sword,
    role: "DPS / Tank",
    roleBadge: "danger" as const,
    difficulty: 2,
    description:
      "O Swordmaster é o especialista em combate corpo a corpo de Arrakis. Treinado nas artes marciais mais letais do universo conhecido, ele domina lâminas de todos os tipos e usa sua resistência física superior para se manter de pé onde outros cairiam. É a classe ideal para quem está começando, com mecânicas intuitivas e alto poder de sobrevivência.",
    pros: [
      "Alta sobrevivência em combate direto",
      "Dano consistente e confiável",
      "Fácil de aprender, curva de aprendizado suave",
      "Excelente em combate 1v1",
      "Pode funcionar como tank em grupos",
    ],
    cons: [
      "Alcance limitado, precisa estar próximo do alvo",
      "Vulnerável contra inimigos que fazem kiting",
      "Pouca utilidade em combate a distância",
      "Dificuldade contra múltiplos inimigos a range",
    ],
  },
  {
    id: "mentat",
    name: "Mentat",
    icon: Brain,
    role: "Suporte / Controle",
    roleBadge: "blue" as const,
    difficulty: 3,
    description:
      "Mentats são computadores humanos, treinados para substituir as máquinas pensantes proibidas pela Jihad Butleriana. No campo de batalha, eles analisam padrões, preveem movimentos inimigos e fornecem buffs críticos para seus aliados. Sua capacidade de processar informações em velocidade sobre-humana os torna indispensáveis em combate em grupo.",
    pros: [
      "Buffs de grupo extremamente poderosos",
      "Habilidades de previsão únicas",
      "Versatilidade tática incomparável",
      "Essencial em conteúdo de grupo",
      "Bom controle de multidões",
    ],
    cons: [
      "Dano solo abaixo da média",
      "Rotação de habilidades complexa",
      "Depende de aliados para maximizar potencial",
      "Curva de aprendizado moderada",
    ],
  },
  {
    id: "bene-gesserit",
    name: "Bene Gesserit",
    icon: Eye,
    role: "Controle / Debuff",
    roleBadge: "purple" as const,
    difficulty: 5,
    description:
      "As adeptas da Bene Gesserit dominam o controle do corpo e da mente através de séculos de treinamento. Sua arma mais temida é A Voz -- a capacidade de controlar outros através de comandos vocais irresistíveis. Em Dune Awakening, essa é a classe mais difícil de dominar, mas nas mãos certas, é absolutamente devastadora. Um stun AoE bem posicionado pode virar batalhas inteiras.",
    pros: [
      "A Voz: stun em área, a habilidade mais forte do jogo",
      "Debuffs mais poderosos entre todas as classes",
      "Potencial de virar batalhas em grupo incomparável",
      "Controle de combate único",
      "Manipulação tática avançada",
    ],
    cons: [
      "Classe mais difícil do jogo, exige maestria",
      "Baixa resistência (squishy), morre rápido se focada",
      "Depende fortemente de posicionamento",
      "Precisa de uma equipe para brilhar de verdade",
    ],
  },
  {
    id: "trooper",
    name: "Trooper",
    icon: Crosshair,
    role: "DPS a Distância",
    roleBadge: "orange" as const,
    difficulty: 2,
    description:
      "O Trooper é o soldado versátil de Arrakis, combinando armas de fogo, explosivos e táticas militares. Eficiente a distância e capaz de lidar dano em área com granadas e dispositivos explosivos. É uma classe acessível e eficiente, especialmente em combate PvE e em grupos onde pode manter distância segura dos inimigos.",
    pros: [
      "Excelente dano a distância",
      "Explosivos eficazes contra grupos de inimigos",
      "Fácil de jogar em conteúdo de grupo",
      "Boa mobilidade em combate",
      "Versatilidade entre armas de fogo e explosivos",
    ],
    cons: [
      "Escudos pessoais bloqueiam ataques a distância (mecânica central do jogo)",
      "Desempenho mediano em combate corpo a corpo",
      "Granadas têm cooldown longo",
      "Menos eficaz em PvP 1v1 contra classes melee",
    ],
  },
  {
    id: "planetologist",
    name: "Planetologist",
    icon: Leaf,
    role: "Explorador / Sobrevivência",
    roleBadge: "gold" as const,
    difficulty: 3,
    description:
      "O Planetologist é o ecologista do deserto, um estudioso de Arrakis que entende a terra como ninguém. Esta classe não está disponível na criação de personagem -- ela é desbloqueada durante a progressão do jogo. Especialista em sobrevivência, rastreamento e interação com o ambiente, o Planetologist prospera onde outros morrem de sede ou são devorados por sandworms.",
    pros: [
      "Melhores habilidades de sobrevivência do jogo",
      "Rastreamento de recursos e inimigos",
      "Interação única com o ambiente de Arrakis",
      "Autonomia incomparável no deserto",
      "Excelente para farming e exploração solo",
    ],
    cons: [
      "Potencial de combate direto inferior",
      "Requer conhecimento profundo do jogo para aproveitar",
      "Não disponível na criação de personagem",
      "Menos impactante em combate PvP puro",
    ],
  },
];

function DifficultyDots({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rotate-45 ${
            i < level
              ? "bg-dune-gold"
              : "border border-dune-gold/20 bg-transparent"
          }`}
        />
      ))}
    </div>
  );
}

export function ClassesOverview() {
  const { setCards } = useReference();

  useEffect(() => {
    const cards: ReferenceCard[] = [
      {
        id: "classes-tip-trooper",
        type: "tip",
        title: "Não escolha Trooper na criação de personagem",
        content: "O Trooper é desbloqueado gratuitamente durante a campanha principal. Se você selecionar Trooper na criação, vai desperdiçar um slot que poderia usar para Swordmaster, Mentat ou Bene Gesserit. Escolha uma dessas três e ganhe o Trooper de graça depois.",
      },
      {
        id: "classes-tip-trainer",
        type: "tip",
        title: "Class Trainers e Respec",
        content: "Existem NPCs chamados Class Trainers espalhados pelo mundo que podem ensinar habilidades de outras classes (cross-class skills). Além disso, você pode fazer respec das suas habilidades grátis a cada 48 horas, então não tenha medo de experimentar builds diferentes.",
      },
    ];
    setCards(cards);
    return () => setCards([]);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="CLASSES & BUILDS"
        subtitle="Dune Awakening possui 5 classes jogáveis, cada uma com estilo de combate, árvores de habilidade e papel em grupo distintos. Escolha com sabedoria -- sua classe define como você sobrevive em Arrakis."
      />

      <div className="mt-8 space-y-6">
        {classes.map((cls) => (
          <Link key={cls.id} to={`/classes/${cls.id}`}>
            <Card hover className="group mb-4 overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {/* Portrait image */}
                {classImages[cls.id] && (
                  <div className="relative sm:w-44 sm:shrink-0 lg:w-52">
                    <img
                      src={classImages[cls.id]}
                      alt={cls.name}
                      className="h-48 w-full object-cover object-top sm:h-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).parentElement!.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dune-dark/60 via-transparent to-transparent sm:bg-gradient-to-l sm:from-dune-dark/40 sm:via-transparent sm:to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 p-5 lg:p-6">
                  {/* Header */}
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dune-gold/10 border border-dune-gold/20">
                      <cls.icon size={20} className="text-dune-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dune-cream transition-colors group-hover:text-dune-gold">
                        {cls.name}
                      </h3>
                      <Badge variant={cls.roleBadge}>{cls.role}</Badge>
                    </div>
                  </div>

                  <p className="mb-4 text-base leading-relaxed text-dune-cream/85 lg:text-lg">
                    {cls.description}
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-base font-semibold tracking-wider text-green-400/80">
                        VANTAGENS
                      </h4>
                      <ul className="space-y-1.5">
                        {cls.pros.map((pro, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-base text-dune-cream/70"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-green-400/60" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-base font-semibold tracking-wider text-dune-danger/80">
                        DESVANTAGENS
                      </h4>
                      <ul className="space-y-1.5">
                        {cls.cons.map((con, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-base text-dune-cream/70"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dune-danger/60" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-dune-gold/10 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-dune-cream-muted">Dificuldade:</span>
                      <DifficultyDots level={cls.difficulty} />
                      <span className="text-sm text-dune-gold/60">{cls.difficulty}/5</span>
                    </div>
                    <div className="flex items-center gap-2 text-base font-semibold text-dune-gold/70 transition-colors group-hover:text-dune-gold">
                      Ver builds e skill trees
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dune-gold/10 transition-all group-hover:bg-dune-gold/20">
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </MainContent>
  );
}
