import { useEffect } from "react";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DiamondDivider } from "@/components/ui/DiamondDivider";
import { ProTipBox } from "@/components/content/ProTipBox";
import { WarningBox } from "@/components/content/WarningBox";
import { ImageCard } from "@/components/content/ImageCard";
import { images } from "@/data/images";

const topMistakes = [
  {
    mistake: "Usar escudo no deserto aberto",
    consequence: "Sandworm aparece em segundos e te devora. Morte instantânea, perda de todo o loot.",
    solution: "Só use escudos dentro de edifícios, bases ou zonas seguras (Arrakeen, Harko Village). No deserto, dependa de esquiva e posicionamento.",
  },
  {
    mistake: "Ignorar a Stillsuit nas primeiras horas",
    consequence: "Você morre de sede em 10-15 minutos no deserto. Perde tempo, recursos e progresso.",
    solution: "Craftar o Stillsuit Básico é sua PRIMEIRA prioridade absoluta. Antes de armas, antes de armadura, antes de tudo. Colete Plant Fiber imediatamente.",
  },
  {
    mistake: "Escolher Trooper na criação de personagem",
    consequence: "Você desperdiça um slot de classe que poderia ser Swordmaster, Mentat ou Bene Gesserit.",
    solution: "Trooper é desbloqueado gratuitamente na campanha principal. Escolha outra classe na criação e ganhe Trooper de graça depois.",
  },
  {
    mistake: "Não comprar itens de NPCs quando pode",
    consequence: "Solari é ABUNDANTE no jogo. Jogadores acumulam Solari sem necessidade enquanto perdem receitas, materiais e upgrades essenciais vendidos por NPCs.",
    solution: "Gaste Solari livremente com NPCs — compre receitas, materiais e itens que encontrar. Solari é fácil de recuperar, itens de NPC nem sempre estão disponíveis.",
  },
  {
    mistake: "Ignorar a coleta de Plant Fiber",
    consequence: "Falta de material para Stillsuit, bandagens e crafting básico. Atrasa toda a progressão.",
    solution: "Colete TODOS os arbustos e plantas que encontrar. Plant Fiber é o recurso mais valioso do early game e você nunca tem o suficiente.",
  },
  {
    mistake: "Correr direto para o Deep Desert",
    consequence: "Você chega sem equipamento, sem experiência e morre para o primeiro jogador hostil ou criatura forte.",
    solution: "Complete a campanha principal no Hagga Basin primeiro. Desbloqueie estações de crafting, habilidades e equipamentos antes de se aventurar no Deep Desert.",
  },
  {
    mistake: "Não distinguir tipos de morte",
    consequence: "Morrer em sandstorm é recuperável (você pode voltar e pegar seu loot). Mas morrer para Coriolis Storm ou sandworm significa perda TOTAL — sem recuperação possível.",
    solution: "Entenda a diferença: sandstorm comum = corra de volta ao corpo. Coriolis Storm ou worm = perda total. Fuja de Coriolis a qualquer custo e nunca ative escudo no deserto.",
  },
  {
    mistake: "Não usar Survey Probe em zonas novas",
    consequence: "Você perde recursos, pontos de interesse e intel valiosa escondidos no fog of war.",
    solution: "Survey Probe é barato de craftar e revela toda a área ao redor. Use em TODA zona nova que visitar — é a maneira mais eficiente de descobrir o que há por perto.",
  },
  {
    mistake: "Ignorar o Recycler",
    consequence: "Vender gear para vendors rende quase nada. Você joga fora materiais valiosos que poderiam ser reutilizados.",
    solution: "O Recycler decompõe gear em materiais reutilizáveis. Sempre recicle equipamento antigo em vez de vender — os materiais valem muito mais que o Solari de venda.",
  },
  {
    mistake: "Não aprender o Slow Blade",
    consequence: "Você não consegue causar dano real a qualquer jogador ou NPC com escudo ativo.",
    solution: "Pratique o timing do Slow Blade contra NPCs em Arrakeen. Essa mecânica é fundamental para TODO o combate do jogo.",
  },
  {
    mistake: "Construir base em local exposto",
    consequence: "No Deep Desert, base visível é base raidada. No Hagga Basin, localização ruim significa longos deslocamentos.",
    solution: "Escolha locais próximos a recursos e protegidos por formações rochosas. No Deep Desert, priorize locais discretos sobre locais bonitos.",
  },
  {
    mistake: "Jogar solo no conteúdo de grupo",
    consequence: "Muitas mecânicas do jogo (especialmente no Deep Desert) são projetadas para grupos. Solo, você é presa fácil.",
    solution: "Entre numa guild mesmo que casual. Até uma dupla já muda drasticamente sua taxa de sobrevivência. Coordenação mínima vence poder individual.",
  },
];

const firstHourPriorities = [
  {
    step: 1,
    action: "Complete o tutorial + crafte makeshift armor",
    detail: "Siga as instruções iniciais até o fim. Crafte hood, luvas, calça, sapatos e jaqueta makeshift — é sua primeira proteção contra o deserto.",
  },
  {
    step: 2,
    action: "Crafte o Cut Array",
    detail: "Sua ferramenta de coleta principal. Corta granito, cobre, metal e até portas. É a ferramenta mais versátil do early game e a primeira que você deve fazer.",
  },
  {
    step: 3,
    action: "Crafte o Improvised Power Pack",
    detail: "Ferramentas NÃO funcionam sem energia! O Power Pack alimenta o Cut Array e outras ferramentas. Sem ele, suas ferramentas são inúteis.",
  },
  {
    step: 4,
    action: "Colete Plant Fiber e crafte bandagens",
    detail: "Bandagens são sua cura principal pelas próximas ~30 horas de jogo. Colete todo arbusto que encontrar e mantenha sempre um estoque de bandagens no inventário.",
  },
  {
    step: 5,
    action: "Siga a quest roxa (top-left do HUD)",
    detail: "A quest roxa no canto superior esquerdo é a campanha principal. Ela desbloqueia estações de crafting, habilidades, a classe Trooper e acesso a novas áreas.",
  },
  {
    step: 6,
    action: "Construa Sub-Fief perto de Griffin Reach + flores",
    detail: "Sua primeira base é TEMPORÁRIA — não invista demais nela. Posicione perto de Griffin Reach para acesso fácil e próximo a flores para água básica no início.",
  },
  {
    step: 7,
    action: "Crafte Survey Probe e revele a área",
    detail: "O Survey Probe é barato e revela o fog of war ao redor, mostrando recursos, pontos de interesse e locais importantes. Use assim que chegar a uma zona nova.",
  },
  {
    step: 8,
    action: "Comece a coleta de intel",
    detail: "Intel é coletada em acampamentos e locais espalhados pelo mapa. Ela alimenta o sistema de pesquisa que desbloqueia novas receitas e tecnologias. Comece cedo!",
  },
];

const essentialTools = [
  {
    name: "Cut Array",
    badge: "Coleta" as const,
    badgeVariant: "gold" as const,
    description: "Ferramenta de coleta principal. Corta granito, cobre, metal e portas. Upgrade prioritário — versões melhores coletam mais rápido e desbloqueiam materiais superiores.",
  },
  {
    name: "Improvised Power Pack",
    badge: "Energia" as const,
    badgeVariant: "danger" as const,
    description: "Ferramentas precisam de energia para funcionar. Sem Power Pack equipado, suas ferramentas simplesmente NÃO funcionam. Crafte assim que possível.",
  },
  {
    name: "Survey Probe",
    badge: "Exploração" as const,
    badgeVariant: "blue" as const,
    description: "Revela o fog of war e mostra locais de interesse na área. Barato de craftar, leve e essencial. Use em toda zona nova que visitar.",
  },
  {
    name: "Respawn Beacon",
    badge: "Sobrevivência" as const,
    badgeVariant: "danger" as const,
    description: "Ponto de respawn portátil. Apenas 1 pode ficar ativo por vez. Posicione estrategicamente antes de explorar áreas perigosas — economiza tempo e frustração.",
  },
  {
    name: "Dew Reaper",
    badge: "Água" as const,
    badgeVariant: "blue" as const,
    description: "Coleta orvalho de plantas azuis durante a NOITE, enchendo o Leader John (recipiente de água). Método principal de obter água além de flores.",
  },
  {
    name: "Leader John",
    badge: "Água" as const,
    badgeVariant: "blue" as const,
    description: "Recipiente de água avançado. Flores só enchem a primeira barra de água — o Leader John vai além, permitindo expedições mais longas no deserto.",
  },
];

export function BeginnerPage() {
  const { setCards } = useReference();

  useEffect(() => {
    const cards: ReferenceCard[] = [
      {
        id: "beginner-tip-cut-array",
        type: "tip",
        title: "Cut Array",
        content: "Primeira ferramenta a craftar. Funciona em múltiplos materiais — granito, cobre, metal e até portas trancadas. Priorize upgrades do Cut Array sempre que possível.",
      },
      {
        id: "beginner-tip-power-pack",
        type: "tip",
        title: "Power Pack",
        content: "Sem energy pack equipado, suas ferramentas são completamente inúteis. É fácil esquecer de craftar, mas sem ele nada funciona. Sempre tenha um reserva.",
      },
      {
        id: "beginner-tip-base-temporaria",
        type: "tip",
        title: "Primeira Base é Temporária",
        content: "Não invista demais na primeira base. Posicione perto de Griffin Reach e próximo a flores para água. Você vai relocar conforme progride — mantenha simples.",
      },
      {
        id: "beginner-tip-survey-probe",
        type: "tip",
        title: "Survey Probe",
        content: "Barato, leve e essencial para toda zona nova. Revela fog of war, recursos escondidos e pontos de interesse. Nunca explore uma área nova sem usar um antes.",
      },
      {
        id: "beginner-ref-flores-agua",
        type: "reference",
        title: "Flores = Água Básica",
        content: "Flores só enchem a primeira barra de água. Para ir além, você precisa do Leader John — um recipiente avançado que permite carregar muito mais água para expedições longas.",
      },
      {
        id: "beginner-tip-intel",
        type: "tip",
        title: "Sistema de Intel",
        content: "Colete intel em acampamentos abandonados e locais espalhados pelo mapa. Intel alimenta o sistema de pesquisa que desbloqueia novas receitas e tecnologias essenciais.",
      },
      {
        id: "beginner-tip-respawn-beacon",
        type: "tip",
        title: "Respawn Beacon",
        content: "Apenas 1 Respawn Beacon pode ficar ativo por vez. Posicione estrategicamente antes de explorar áreas perigosas — é a diferença entre perder 2 minutos e perder 20.",
      },
      {
        id: "beginner-lore-arrakis",
        type: "lore",
        title: "Arrakis",
        content: "\"O deserto não se importa com suas ambições, sua linhagem ou suas alianças. Ele testa todos igualmente — e só os dignos sobrevivem para contar a história.\"",
      },
    ];

    setCards(cards);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="GUIA DO INICIANTE"
        subtitle="Arrakis não é gentil com os desinformados. Este guia cobre os erros mais comuns que jogadores novos cometem e como evitá-los. Leia antes de começar — será o melhor investimento de tempo que você fará no jogo."
        heroImage={images.hero.characterBackpack}
      />

      {/* Top Mistakes */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">TOP {topMistakes.length} ERROS QUE TODO INICIANTE COMETE</h2>
        </div>

        <div className="space-y-4">
          {topMistakes.map((item, i) => (
            <Card key={i} variant="outlined" className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-dune-danger/15 font-heading text-xs font-bold text-dune-danger">
                  {i + 1}
                </span>
                <h3 className="text-sm lg:text-base font-bold text-dune-cream">
                  {item.mistake}
                </h3>
              </div>

              <WarningBox
                title="O que acontece"
                text={item.consequence}
              />

              <ProTipBox
                title="A solução"
                text={item.solution}
              />
            </Card>
          ))}
        </div>

        <ImageCard src={images.sandworms.encounter} caption="Sandworm — a razão #1 de morte de jogadores novos" />
      </section>

      <DiamondDivider />

      {/* First Hour Priorities */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">PRIORIDADES DA PRIMEIRA HORA</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Sua primeira hora em Dune Awakening define o ritmo do resto do jogo. Siga esta ordem de prioridades para maximizar sua eficiência e evitar mortes desnecessárias.
          </p>

          <div className="space-y-3">
            {firstHourPriorities.map((item) => (
              <div key={item.step} className="flex gap-3 rounded-lg bg-dune-brown-light/20 p-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-dune-gold/15 font-heading text-xs font-bold text-dune-gold">
                  {item.step}
                </span>
                <div>
                  <h4 className="text-sm lg:text-base font-semibold text-dune-cream">{item.action}</h4>
                  <p className="mt-0.5 text-sm lg:text-base leading-relaxed text-dune-cream/70">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <DiamondDivider />

      {/* Essential Early Game Tools */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">FERRAMENTAS ESSENCIAIS DO EARLY GAME</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {essentialTools.map((tool) => (
            <Card key={tool.name} variant="strong" className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <Badge variant={tool.badgeVariant} size="md">{tool.badge}</Badge>
              </div>
              <h3 className="mb-1.5 text-sm lg:text-base font-bold text-dune-cream">{tool.name}</h3>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">{tool.description}</p>
            </Card>
          ))}
        </div>

        <ProTipBox
          title="Dica importante"
          text="Todas as ferramentas precisam de um Power Pack para funcionar. Não adianta craftar Cut Array ou Dew Reaper se você não tiver energia. Sempre mantenha um Improvised Power Pack equipado!"
        />
      </section>

      <DiamondDivider />

      {/* What NOT to Do */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">O QUE NÃO FAZER (DE JEITO NENHUM)</h2>
        </div>

        <div className="space-y-2">
          <WarningBox
            title="NÃO use escudo no deserto"
            text="Já dissemos e vamos repetir: escudos no deserto aberto atraem sandworms. Não importa se você está em combate com outro jogador — o worm mata os dois. Só use escudo dentro de estruturas ou zonas seguras."
          />
          <WarningBox
            title="NÃO confunda tipos de morte"
            text="Sandstorm comum: você pode voltar e recuperar seu loot. Coriolis Storm ou sandworm: perda TOTAL, sem recuperação possível. Aprenda a distinguir — fuja de Coriolis a qualquer custo."
          />
          <WarningBox
            title="NÃO ignore água"
            text="Água não é secundária. Água é o recurso número 1 do jogo. Monitore constantemente. Tenha SEMPRE reserva. Volte para base quando chegar a 30%. Morrer de sede é a forma mais frustrante de perder progresso."
          />
          <WarningBox
            title="NÃO venda gear — use o Recycler"
            text="Vender gear para vendors rende quase nada. O Recycler decompõe equipamento em materiais reutilizáveis que valem muito mais. Sempre recicle em vez de vender."
          />
          <WarningBox
            title="NÃO explore sem Survey Probe"
            text="Entrar em uma zona nova sem usar Survey Probe é desperdiçar oportunidades. O probe é barato, revela recursos e POIs escondidos. Use em toda zona nova."
          />
          <WarningBox
            title="NÃO entre no Deep Desert antes da hora"
            text="O Deep Desert tem PvP habilitado e criaturas de nível alto. Sem equipamento e experiência adequados, você vai morrer repetidamente e perder recursos. Complete a campanha no Hagga Basin primeiro."
          />
        </div>

        <ImageCard src={images.vehicles.sandbikeLandscape} caption="Sandbike: seu primeiro grande objetivo" />
      </section>

      <DiamondDivider />

      {/* Quick Reference Cards */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">CARTÕES DE REFERÊNCIA RÁPIDA</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card variant="strong" className="p-4">
            <Badge variant="blue" size="md">Sobrevivência</Badge>
            <ul className="mt-3 space-y-1.5 text-sm lg:text-base text-dune-cream/70">
              <li className="flex gap-2"><span className="text-dune-gold">1.</span> Stillsuit SEMPRE equipada</li>
              <li className="flex gap-2"><span className="text-dune-gold">2.</span> Água acima de 30% sempre</li>
              <li className="flex gap-2"><span className="text-dune-gold">3.</span> 2+ Thumpers no inventário</li>
              <li className="flex gap-2"><span className="text-dune-gold">4.</span> Escudo DESLIGADO no deserto</li>
              <li className="flex gap-2"><span className="text-dune-gold">5.</span> Desert Walk para evitar worms</li>
              <li className="flex gap-2"><span className="text-dune-gold">6.</span> Rocha = segurança contra worms</li>
            </ul>
          </Card>

          <Card variant="strong" className="p-4">
            <Badge variant="danger" size="md">Combate</Badge>
            <ul className="mt-3 space-y-1.5 text-sm lg:text-base text-dune-cream/70">
              <li className="flex gap-2"><span className="text-dune-gold">1.</span> Disruptor antes de Slow Blade</li>
              <li className="flex gap-2"><span className="text-dune-gold">2.</span> Nunca gaste toda stamina</li>
              <li className="flex gap-2"><span className="text-dune-gold">3.</span> Mobilidade &gt; dano puro</li>
              <li className="flex gap-2"><span className="text-dune-gold">4.</span> Foque 1 alvo por vez em grupo</li>
              <li className="flex gap-2"><span className="text-dune-gold">5.</span> Carregue bandagens sempre</li>
              <li className="flex gap-2"><span className="text-dune-gold">6.</span> Pratique Slow Blade em NPCs</li>
            </ul>
          </Card>

          <Card variant="strong" className="p-4">
            <Badge variant="gold" size="md">Economia</Badge>
            <ul className="mt-3 space-y-1.5 text-sm lg:text-base text-dune-cream/70">
              <li className="flex gap-2"><span className="text-dune-gold">1.</span> Solari é abundante — gaste com NPCs</li>
              <li className="flex gap-2"><span className="text-dune-gold">2.</span> Recicle gear no Recycler, não venda</li>
              <li className="flex gap-2"><span className="text-dune-gold">3.</span> Guarde Plant Fiber, não venda</li>
              <li className="flex gap-2"><span className="text-dune-gold">4.</span> Colete intel para desbloquear receitas</li>
              <li className="flex gap-2"><span className="text-dune-gold">5.</span> Diversifique fontes de renda</li>
              <li className="flex gap-2"><span className="text-dune-gold">6.</span> Large Refinery = prioridade</li>
            </ul>
          </Card>

          <Card variant="strong" className="p-4">
            <Badge variant="purple" size="md">Exploração</Badge>
            <ul className="mt-3 space-y-1.5 text-sm lg:text-base text-dune-cream/70">
              <li className="flex gap-2"><span className="text-dune-gold">1.</span> Survey Probe em toda zona nova</li>
              <li className="flex gap-2"><span className="text-dune-gold">2.</span> Explore ao amanhecer/entardecer</li>
              <li className="flex gap-2"><span className="text-dune-gold">3.</span> Leve 50% mais água que o planejado</li>
              <li className="flex gap-2"><span className="text-dune-gold">4.</span> Posicione Respawn Beacon antes</li>
              <li className="flex gap-2"><span className="text-dune-gold">5.</span> Verifique Intel Nodes para receitas</li>
              <li className="flex gap-2"><span className="text-dune-gold">6.</span> Deep Desert só após campanha completa</li>
            </ul>
          </Card>
        </div>
      </section>

      <DiamondDivider />

      {/* Final Encouragement */}
      <section className="mt-8">
        <Card variant="strong" className="p-5 text-center">
          <h3 className="mb-3 text-base font-bold text-dune-gold">
            ARRAKIS É DURO, MAS VALE A PENA
          </h3>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Todo veterano de Dune Awakening já morreu de sede, foi devorado por um sandworm e perdeu todo seu Solari por esquecimento. Esses erros fazem parte da jornada. O importante é aprender com cada morte e voltar mais preparado. As areias de Arrakis recompensam a persistência e a sabedoria. Boa sorte, e que a Spice flua.
          </p>
        </Card>
      </section>
    </MainContent>
  );
}
