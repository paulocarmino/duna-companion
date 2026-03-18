import { useEffect } from "react";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DiamondDivider } from "@/components/ui/DiamondDivider";
import { Accordion } from "@/components/ui/Accordion";
import { WarningBox } from "@/components/content/WarningBox";
import { ImageCard } from "@/components/content/ImageCard";
import { images } from "@/data/images";

const craftingStations = [
  {
    name: "Fabricator",
    tier: "Essencial",
    badge: "neutral" as const,
    description:
      "A estação principal de crafting e a primeira que você desbloqueia. Aqui você produz itens gerais: armas, armaduras, ferramentas e equipamentos variados. É o coração da sua produção — quase tudo passa pelo Fabricator em algum momento.",
    keyRecipes: [
      "Makeshift Armor set (proteção inicial completa)",
      "Cut Array (ferramenta essencial de coleta)",
      "Armas básicas de combate corpo a corpo e à distância",
      "Power Packs (células de energia para equipamentos)",
      "Ferramentas de mineração e coleta",
    ],
  },
  {
    name: "Ore Refinery",
    tier: "Essencial",
    badge: "blue" as const,
    description:
      "Estação de processamento de minérios brutos em barras utilizáveis. Converte copper ore em copper bars, iron ore em iron bars, e assim por diante. Sem essa estação, você não consegue transformar o que minera em materiais úteis — essencial para todo crafting que envolve metal.",
    keyRecipes: [
      "Copper Bars (de Copper Ore)",
      "Iron Bars (de Iron Ore)",
      "Barras de metais avançados",
      "Processamento em lote de minérios",
    ],
  },
  {
    name: "Chemical Refinery",
    tier: "Intermediário",
    badge: "purple" as const,
    description:
      "Responsável pela criação de materiais químicos avançados. Produz lubrificante, silício, cobalt paste e fuel cells — componentes necessários para veículos, equipamentos avançados e receitas de tier superior. Sem ela, você não avança além do básico.",
    keyRecipes: [
      "Lubrificante (para veículos e máquinas)",
      "Silício (componentes eletrônicos)",
      "Cobalt Paste (materiais avançados)",
      "Fuel Cells (combustível para veículos)",
    ],
  },
  {
    name: "Recycler",
    tier: "Intermediário",
    badge: "orange" as const,
    description:
      "Decompõe gear excedente em materiais reutilizáveis. Ao invés de vender equipamentos que não precisa mais, recicle-os para recuperar materiais valiosos. Produz spice infused iron dust a partir de gear reciclado — um material importante. Essencial para economia eficiente de recursos.",
    keyRecipes: [
      "Spice Infused Iron Dust (de gear reciclado)",
      "Materiais básicos recuperados de armas",
      "Componentes recuperados de armaduras",
      "Fibras e tecidos de equipamentos descartados",
    ],
  },
  {
    name: "Repair Station",
    tier: "Intermediário",
    badge: "blue" as const,
    description:
      "Estação dedicada ao reparo de equipamentos danificados. O sistema de durabilidade funciona com três barras: amarela (durabilidade restante), cinza (parte reparável) e vermelha (dano irreparável, que cresce com o tempo). Reparar cedo é fundamental — quanto mais você espera, mais dano irreparável se acumula.",
    keyRecipes: [
      "Reparo de armas (restaura barra cinza para amarela)",
      "Reparo de armaduras e proteções",
      "Reparo de ferramentas de coleta",
      "Manutenção preventiva de equipamentos",
    ],
  },
  {
    name: "Blood Purifier",
    tier: "Avançado",
    badge: "danger" as const,
    description:
      "Converte Blood Bags em água limpa, completando um ciclo vital de produção de água. O fluxo completo é: Blood Extractor → Blood Bags → Blood Purifier → água utilizável. Parte essencial do sistema de gerenciamento de água no late game.",
    keyRecipes: [
      "Água Limpa (de Blood Bags purificados)",
      "Parte do ciclo: Blood Extractor → Blood Bags → Blood Purifier",
      "Processamento em lote de Blood Bags",
    ],
  },
];

const resourceTiers = [
  { name: "Cobre", tier: 1, color: "text-orange-400", uses: "Componentes básicos, fiação, eletrônicos iniciais" },
  { name: "Ferro", tier: 2, color: "text-gray-400", uses: "Ferramentas, armas básicas, estruturas simples" },
  { name: "Aço", tier: 3, color: "text-blue-300", uses: "Armas intermediárias, armaduras, construção avançada" },
  { name: "Alumínio", tier: 4, color: "text-cyan-300", uses: "Componentes de veículo, equipamentos leves de alta qualidade" },
  { name: "Duralumínio", tier: 5, color: "text-purple-300", uses: "Armaduras de elite, componentes de ornithopter, blindagem" },
  { name: "Plastanium", tier: 6, color: "text-dune-gold", uses: "Equipamentos endgame, armas de cristal, estruturas imperiais" },
];

const spiceRefineries = [
  {
    name: "Small Spice Refinery",
    ratio: "100:1",
    description: "Converte 100 unidades de Spice Bruto em 1 unidade de Spice Refinado. Processo lento, mas acessível cedo no jogo. Suficiente para necessidades pessoais básicas.",
    badge: "neutral" as const,
  },
  {
    name: "Medium Spice Refinery",
    ratio: "75:1",
    description: "Eficiência 25% melhor que a Small. Requer materiais intermediários para construir. Ideal para mid-game quando você começa a precisar de Spice Refinado regularmente para crafting e trade.",
    badge: "blue" as const,
  },
  {
    name: "Large Spice Refinery",
    ratio: "50:1",
    description: "A melhor eficiência possível. Converte 50 unidades brutas em 1 refinada. Requer materiais avançados e espaço considerável na base. Essencial para guilds que operam em escala de produção.",
    badge: "gold" as const,
  },
];

export function CraftingPage() {
  const { setCards } = useReference();

  useEffect(() => {
    const cards: ReferenceCard[] = [
      {
        id: "crafting-tip-refine",
        type: "tip",
        title: "Refine em lotes grandes",
        content: "O refinamento tem um tempo fixo por lote. Refinar 1 ou 50 unidades leva quase o mesmo tempo. Acumule materiais brutos e refine tudo de uma vez para maximizar eficiência. Isso é especialmente importante com Spice.",
      },
      {
        id: "crafting-tip-refinery",
        type: "tip",
        title: "Priorize a Large Refinery",
        content: "A diferença entre 100:1 e 50:1 é enorme a longo prazo. Com a Large Refinery, você obtém o dobro de Spice Refinado do mesmo volume de Spice Bruto. Se você planeja fazer Spice trading, construir uma Large Refinery o mais rápido possível deve ser sua prioridade número 1 de base building.",
      },
      {
        id: "crafting-tip-cutarray",
        type: "tip",
        title: "Cut Array é prioridade absoluta",
        content: "O Cut Array é a ferramenta de coleta mais importante do early game. Sem ela, você não consegue coletar recursos de forma eficiente. Craftar um Cut Array deve ser uma das suas primeiras ações no Fabricator assim que possível.",
      },
      {
        id: "crafting-tip-recycling",
        type: "mechanic",
        title: "Nunca venda gear — recicle",
        content: "O Recycler transforma equipamentos excedentes em materiais reutilizáveis, incluindo spice infused iron dust. Vender gear no vendor é desperdício — sempre recicle. Os materiais recuperados valem muito mais do que os créditos que você receberia vendendo.",
      },
      {
        id: "crafting-tip-schematics",
        type: "mechanic",
        title: "Schematics Únicos",
        content: "Encontrados em baús de laboratório (lab chests) espalhados pelo mapa, cada schematic dá direito a apenas 1 craft. Os lab chests respawnam aproximadamente a cada 45 minutos, então vale a pena revisitar locais conhecidos. São uma mecânica importante do endgame.",
      },
      {
        id: "crafting-tip-intel",
        type: "mechanic",
        title: "Sistema de Intel e Pesquisa",
        content: "Intel é encontrada em acampamentos espalhados pelo mapa e desbloqueia novas receitas no menu de crafting. O menu é organizado por abas para facilitar a busca. Não é obrigatório coletar toda a intel, mas é importante para progressão — priorize as que desbloqueiam receitas que você precisa.",
      },
      {
        id: "crafting-tip-chemical",
        type: "reference",
        title: "Chemical Refinery é o gargalo",
        content: "A Chemical Refinery produz lubrificante, silício, cobalt paste e fuel cells. Esses materiais são necessários para veículos e equipamentos avançados. Construa essa estação assim que possível no mid-game — sem ela, sua progressão trava.",
      },
      {
        id: "crafting-tip-durability",
        type: "mechanic",
        title: "Sistema de Durabilidade",
        content: "Equipamentos têm três barras de durabilidade: amarela (restante), cinza (reparável na Repair Station) e vermelha (irreparável, cresce a cada reparo). Quanto mais você demora para reparar, mais dano irreparável se acumula. Repare cedo e frequentemente — não espere o item quebrar.",
      },
      {
        id: "crafting-tip-flow",
        type: "reference",
        title: "Fluxo de Produção Otimizado",
        content: "O ciclo ideal é: minerar → refinar na Ore Refinery → craftar no Fabricator. Para itens avançados, adicione a Chemical Refinery no meio. Mantenha sempre estoque de barras de cobre e ferro refinadas — são usadas em quase tudo. Planeje suas sessões para processar materiais em lote.",
      },
      {
        id: "crafting-lore-jihad",
        type: "lore",
        title: "Jihad Butleriana e o Crafting Manual",
        content: "No universo de Dune, a Jihad Butleriana proibiu computadores e máquinas pensantes. É por isso que todo crafting em Dune Awakening é manual e mecânico — não existem fabricantes automáticos ou IA controlando produção. Cada item é forjado pelas mãos do jogador, refletindo a filosofia do universo onde 'Não farás uma máquina à semelhança da mente humana'.",
      },
    ];
    setCards(cards);
    return () => setCards([]);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="CRAFTING & RECURSOS"
        subtitle="O sistema de crafting é a espinha dorsal da progressão em Dune Awakening. Desde uma armadura improvisada até equipamentos avançados, tudo que você usa é craftado. Dominar a cadeia de produção — coletar, refinar, montar — é tão importante quanto dominar o combate."
        heroImage={images.crafting.craftingStation}
      />

      {/* Crafting Flow */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">FLUXO DE PRODUÇÃO</h2>
        </div>

        <Card variant="strong" className="p-5">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <div className="rounded-lg bg-dune-brown-light/30 px-4 py-3 text-center">
              <p className="text-xs font-semibold tracking-wider text-dune-gold">ETAPA 1</p>
              <p className="mt-1 text-sm lg:text-base text-dune-cream">Coletar</p>
              <p className="text-sm lg:text-base text-dune-cream-muted">Mineração, coleta, caça</p>
            </div>
            <div className="h-6 w-px bg-dune-gold/30 sm:h-px sm:w-8" />
            <div className="rounded-lg bg-dune-brown-light/30 px-4 py-3 text-center">
              <p className="text-xs font-semibold tracking-wider text-dune-gold">ETAPA 2</p>
              <p className="mt-1 text-sm lg:text-base text-dune-cream">Refinar</p>
              <p className="text-sm lg:text-base text-dune-cream-muted">Processar materiais brutos</p>
            </div>
            <div className="h-6 w-px bg-dune-gold/30 sm:h-px sm:w-8" />
            <div className="rounded-lg bg-dune-brown-light/30 px-4 py-3 text-center">
              <p className="text-xs font-semibold tracking-wider text-dune-gold">ETAPA 3</p>
              <p className="mt-1 text-sm lg:text-base text-dune-cream">Montar</p>
              <p className="text-sm lg:text-base text-dune-cream-muted">Criar itens finais</p>
            </div>
          </div>
          <p className="mt-4 text-center text-sm lg:text-base leading-relaxed text-dune-cream-muted">
            Cada item segue essa cadeia. Materiais brutos (minério, fibras, couro cru) são refinados em componentes (barras de metal, fibras processadas, couro tratado) que então são combinados nas estações de crafting para criar itens finais.
          </p>
        </Card>
      </section>

      <DiamondDivider />

      {/* Crafting Stations */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">ESTAÇÕES DE CRAFTING</h2>
        </div>

        <div className="space-y-3">
          {craftingStations.map((station) => (
            <Card key={station.name} variant="outlined" className="overflow-hidden">
              <Accordion
                title={
                  <div className="flex items-center gap-3">
                    <Badge variant={station.badge}>{station.tier}</Badge>
                    <h3 className="text-sm lg:text-base font-bold text-dune-cream">
                      {station.name}
                    </h3>
                  </div>
                }
              >
                <p className="mb-3 text-sm lg:text-base leading-relaxed text-dune-cream/70">
                  {station.description}
                </p>
                <div>
                  <h4 className="mb-2 text-xs font-semibold tracking-wider text-dune-gold/80">
                    RECEITAS PRINCIPAIS
                  </h4>
                  <ul className="space-y-1">
                    {station.keyRecipes.map((recipe, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm lg:text-base text-dune-cream/60"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rotate-45 bg-dune-gold/40" />
                        {recipe}
                      </li>
                    ))}
                  </ul>
                </div>
              </Accordion>
            </Card>
          ))}
        </div>

        <ImageCard src={images.crafting.buildingMenu} caption="Interface de construção e crafting" />
      </section>

      <DiamondDivider />

      {/* Sistema de Intel e Pesquisa */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SISTEMA DE INTEL E PESQUISA</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            A progressão de receitas em Dune Awakening funciona através do sistema de Intel. Ao explorar acampamentos espalhados pelo mapa, você encontra documentos de intel que desbloqueiam novas receitas no seu menu de crafting.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 px-4 py-3">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="blue">Coleta</Badge>
              </div>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Intel é encontrada em acampamentos e pontos de interesse. Explore cada local cuidadosamente — documentos podem estar em mesas, prateleiras e containers.
              </p>
            </div>
            <div className="rounded-lg bg-dune-brown-light/20 px-4 py-3">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="purple">Organização</Badge>
              </div>
              <p className="text-sm lg:text-base text-dune-cream/70">
                O menu de receitas é organizado por abas, facilitando a busca pelo que você precisa. Cada intel coletada aparece na aba correspondente à sua categoria.
              </p>
            </div>
            <div className="rounded-lg bg-dune-brown-light/20 px-4 py-3">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="neutral">Priorização</Badge>
              </div>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Não é obrigatório coletar toda a intel disponível. Foque nas receitas que são importantes para o seu estilo de jogo e progressão atual. A intel é fundamental para desbloquear receitas mais avançadas.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <DiamondDivider />

      {/* Schematics Únicos */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SCHEMATICS ÚNICOS</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Schematics são receitas especiais encontradas em baús de laboratório (lab chests) espalhados pelo mapa. Diferente das receitas normais, cada schematic é de uso único — 1 permit = 1 craft.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-dune-brown-light/20 px-4 py-3">
              <p className="text-xs font-semibold tracking-wider text-dune-gold mb-1">LOCALIZAÇÃO</p>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Encontrados exclusivamente em lab chests (baús de laboratório) em pontos específicos do mapa.
              </p>
            </div>
            <div className="rounded-lg bg-dune-brown-light/20 px-4 py-3">
              <p className="text-xs font-semibold tracking-wider text-dune-gold mb-1">USO ÚNICO</p>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Cada schematic permite apenas 1 craft. Para craftar novamente, você precisa encontrar outro schematic igual.
              </p>
            </div>
            <div className="rounded-lg bg-dune-brown-light/20 px-4 py-3">
              <p className="text-xs font-semibold tracking-wider text-dune-gold mb-1">RESPAWN</p>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Lab chests respawnam aproximadamente a cada 45 minutos. Vale a pena revisitar locais conhecidos com frequência.
              </p>
            </div>
            <div className="rounded-lg bg-dune-brown-light/20 px-4 py-3">
              <p className="text-xs font-semibold tracking-wider text-dune-gold mb-1">ENDGAME</p>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Mecânica importante do endgame. Os melhores equipamentos do jogo vêm de schematics encontrados em áreas perigosas.
              </p>
            </div>
          </div>
        </Card>

        <WarningBox text="Lab chests em áreas do Deep Desert contêm os melhores schematics, mas estão em zona PvPvE. Leve proteção adequada e esteja preparado para combate ao buscar esses itens." />
      </section>

      <DiamondDivider />

      {/* Reciclagem */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">RECICLAGEM</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O Recycler é uma das estações mais subestimadas do jogo. Ao invés de vender equipamentos excedentes por créditos miseráveis, recicle-os para recuperar materiais valiosos.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg bg-dune-brown-light/20 px-4 py-3">
              <Badge variant="orange">Materiais</Badge>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Gear reciclado produz spice infused iron dust — um material valioso usado em receitas avançadas que você não consegue obter de outra forma facilmente.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-dune-brown-light/20 px-4 py-3">
              <Badge variant="gold">Regra de Ouro</Badge>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Nunca venda gear quando você pode reciclar. Os materiais recuperados valem significativamente mais do que os créditos de venda. Mesmo gear de baixo nível tem valor no Recycler.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-dune-brown-light/20 px-4 py-3">
              <Badge variant="blue">Economia</Badge>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Jogadores eficientes reciclam tudo que não usam. Isso cria um ciclo sustentável onde gear antigo alimenta a produção de gear novo, reduzindo drasticamente o tempo de farm.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <DiamondDivider />

      {/* Resource Tiers */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">TIERS DE RECURSOS METÁLICOS</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Os metais em Dune Awakening seguem uma progressão clara de raridade e utilidade. Cada tier desbloqueia receitas mais poderosas e é encontrado em áreas progressivamente mais perigosas.
          </p>

          <div className="space-y-2">
            {resourceTiers.map((resource) => (
              <div
                key={resource.name}
                className="flex items-center gap-3 rounded-lg bg-dune-brown-light/20 px-3 py-2.5"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded bg-dune-brown-light/40">
                  <span className="text-xs font-bold text-dune-gold">
                    T{resource.tier}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm lg:text-base font-semibold ${resource.color}`}>
                      {resource.name}
                    </span>
                  </div>
                  <p className="text-sm lg:text-base text-dune-cream-muted truncate">
                    {resource.uses}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <WarningBox text="Recursos de Tier 5 (Duralumínio) e Tier 6 (Plastanium) são encontrados quase exclusivamente no Deep Desert, que é zona PvPvE. Você PODE morrer carregando esses materiais e perder tudo. Sempre leve o mínimo necessário e retorne à base frequentemente." />
      </section>

      <DiamondDivider />

      {/* Spice Refineries */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">REFINARIAS DE SPICE</h2>
        </div>

        <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream-muted">
          A Spice Melange bruta precisa ser refinada antes de ser usada em crafting ou comercializada. A eficiência da refinaria determina quanto Spice Refinado você obtém de cada lote de Spice Bruto.
        </p>

        <div className="space-y-3">
          {spiceRefineries.map((refinery) => (
            <Card key={refinery.name} variant="outlined" className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant={refinery.badge}>{refinery.name}</Badge>
                </div>
                <span className="text-lg font-bold text-dune-gold">
                  {refinery.ratio}
                </span>
              </div>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                {refinery.description}
              </p>
            </Card>
          ))}
        </div>

        <ImageCard src={images.crafting.baseRefinery} caption="Refinaria de spice em uma base de jogador" />
      </section>

      <DiamondDivider />

      {/* Key Recipes by Phase */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">RECEITAS ESSENCIAIS POR FASE</h2>
        </div>

        <div className="space-y-4">
          <Card variant="outlined" className="p-4">
            <Badge variant="neutral" size="md">Early Game (Nível 1-10)</Badge>
            <ul className="mt-3 space-y-1.5">
              {[
                "Cut Array — ferramenta de coleta essencial, prioridade absoluta",
                "Improvised Power Pack — energia para equipamentos e ferramentas",
                "Survey Probe — exploração e localização de recursos",
                "Makeshift Armor set — proteção inicial completa, não saia sem",
                "Bandagens (de Plant Fiber) — cura principal pelas primeiras 30 horas de jogo",
                "Armas básicas de combate corpo a corpo",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm lg:text-base text-dune-cream/70">
                  <span className="mt-1 h-1 w-1 shrink-0 rotate-45 bg-dune-gold/40" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="outlined" className="p-4">
            <Badge variant="blue" size="md">Mid Game (Nível 10-25)</Badge>
            <ul className="mt-3 space-y-1.5">
              {[
                "Stillsuit intermediário — regeneração de água muito melhor",
                "Escudo Pessoal Mk1 — essencial para combate PvP",
                "Armas avançadas do Fabricator — upgrade significativo de dano",
                "Chemical Refinery — desbloqueia materiais avançados",
                "Recycler — comece a reciclar gear excedente",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm lg:text-base text-dune-cream/70">
                  <span className="mt-1 h-1 w-1 shrink-0 rotate-45 bg-dune-gold/40" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="outlined" className="p-4">
            <Badge variant="gold" size="md">Late/End Game (Nível 25+)</Badge>
            <ul className="mt-3 space-y-1.5">
              {[
                "Equipamentos de schematics únicos — os melhores itens do jogo",
                "Escudo Pessoal Mk3 — proteção de escudo máxima",
                "Ornithopter — mobilidade suprema para exploração",
                "Large Spice Refinery — produção de Spice otimizada",
                "Blood Purifier — ciclo avançado de produção de água",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm lg:text-base text-dune-cream/70">
                  <span className="mt-1 h-1 w-1 shrink-0 rotate-45 bg-dune-gold/40" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </MainContent>
  );
}
