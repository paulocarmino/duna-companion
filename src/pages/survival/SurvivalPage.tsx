import { useEffect } from "react";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DiamondDivider } from "@/components/ui/DiamondDivider";
import { WarningBox } from "@/components/content/WarningBox";
import { ImageCard } from "@/components/content/ImageCard";
import { images } from "@/data/images";

export function SurvivalPage() {
  const { setCards } = useReference();

  useEffect(() => {
    const cards: ReferenceCard[] = [
      {
        id: "survival-tip-water",
        type: "tip",
        title: "Carregue sempre mais água do que acha necessário",
        content: "A regra de ouro dos Fremen: sempre leve mais água do que o planejado. Combates inesperados, desvios de rota e mudanças climáticas podem dobrar seu consumo. Sair com água justa é o erro número 1 de jogadores que morrem no deserto.",
      },
      {
        id: "survival-tip-expeditions",
        type: "tip",
        title: "Planeje expedições pelo horário",
        content: "Planeje expedições longas para o amanhecer ou entardecer. Você tem temperaturas moderadas e visibilidade razoável. Explorar ao meio-dia queima sua água rapidamente, e explorar à noite traz criaturas perigosas e baixa visibilidade.",
      },
      {
        id: "survival-tip-thumpers",
        type: "tip",
        title: "Sempre carregue Thumpers",
        content: "Thumpers são baratos de craftar e pesam quase nada. Sempre carregue pelo menos 2 thumpers quando explorar o deserto. Eles podem salvar sua vida e todo o seu loot.",
      },
      {
        id: "survival-tip-spice",
        type: "tip",
        title: "Aproveite os ciclos do dia",
        content: "Use o meio-dia para coletar Spice (Spice Blows são mais frequentes) e a noite para operações PvP ou exploração furtiva no Deep Desert. O consumo extra de água durante o dia é compensado pela maior frequência de Spice Blows.",
      },
      {
        id: "survival-lore-arrakis",
        type: "lore",
        title: "Arrakis",
        content: "Arrakis é o planeta mais hostil do Imperium. Com temperaturas que excedem 70°C durante o dia, nenhuma água superficial e predadores subterrâneos do tamanho de naves espaciais, cada momento de sobrevivência é uma vitória contra o deserto.",
      },
      {
        id: "survival-lore-stillsuit",
        type: "lore",
        title: "O Stillsuit",
        content: "O stillsuit é uma maravilha da engenharia Fremen. Recicla a umidade do corpo — suor, respiração, urina — e a converte em água potável. Um Fremen equipado com um stillsuit de qualidade perde menos de um dedal de água por dia, mesmo sob o sol escaldante de Arrakis.",
      },
      {
        id: "survival-lore-shaihulud",
        type: "lore",
        title: "Shai-Hulud",
        content: "Shai-Hulud, o Grande Fabricante, o Velho do Deserto. Os sandworms de Arrakis são criaturas de proporções inimagináveis — os maiores podem ter mais de 400 metros de comprimento. Eles são atraídos por vibrações rítmicas na areia e pelo campo elétrico dos escudos Holtzman.",
      },
      {
        id: "survival-tip-powerpacks",
        type: "tip",
        title: "Sempre tenha Power Packs carregados",
        content: "Suas ferramentas de sobrevivência — Cut Array, Dew Reaper e outras — dependem de Power Packs para funcionar. Sair sem energia significa não conseguir coletar recursos nem água. Sempre carregue Power Packs extras e faça upgrade para MK2+ assim que possível, pois duram muito mais.",
      },
      {
        id: "survival-tip-leaderjohn",
        type: "tip",
        title: "Leader John: recipiente de água essencial",
        content: "O Leader John é o recipiente que permite carregar água além da primeira barra de sede. Sem ele, você fica limitado ao mínimo. Craftar e equipar o Leader John cedo é tão importante quanto o próprio Stillsuit. Encha-o na base antes de sair para expedições.",
      },
      {
        id: "survival-tip-dewreaper",
        type: "tip",
        title: "Dew Reaper: coleta noturna de água",
        content: "O Dew Reaper só funciona à noite! Procure plantas azuis brilhantes no deserto durante a noite e use o Dew Reaper para coletar orvalho delas. Esse orvalho enche diretamente o seu Leader John. É uma das formas mais eficientes de reabastecer água no deserto sem voltar à base.",
      },
      {
        id: "survival-ref-coriolis",
        type: "reference",
        title: "Coriolis vs Sandstorm: diferença CRÍTICA",
        content: "Sandstorm (tempestade de areia normal): perigosa, mas se você morrer, pode recuperar o corpo e seus itens. Tempestade Coriolis: MUITO mais perigosa — morte durante Coriolis significa perda TOTAL de itens, igual a morte por sandworm. Sem recuperação de corpo. Sempre busque abrigo ao ver aviso de Coriolis!",
      },
      {
        id: "survival-tip-bloodextractor",
        type: "tip",
        title: "Cadeia de Blood Extractor para água limpa",
        content: "Blood Extractor → Blood Bags → Blood Purifier → água limpa. Essa cadeia permite converter sangue de criaturas em água potável. É uma fonte alternativa valiosa, especialmente quando você está longe de bases ou plantas com orvalho. Sempre carregue Blood Bags extras para armazenar mais sangue.",
      },
    ];
    setCards(cards);
    return () => setCards([]);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="SOBREVIVÊNCIA"
        subtitle="Arrakis não perdoa. Antes de se preocupar com combate, loot ou política, você precisa aprender a sobreviver. Água, calor, sandworms e o próprio deserto são seus maiores inimigos."
        heroImage={images.hero.characterOverlook}
      />

      {/* Water Management */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">GERENCIAMENTO DE ÁGUA</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Água é o recurso mais precioso de Arrakis — mais valioso que Spice em muitas situações. Seu personagem tem barras de sede que precisam ser preenchidas, e o sistema de hidratação tem várias camadas que você precisa entender para sobreviver.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm lg:text-base font-semibold text-dune-blue">
                Flores no chão (fonte básica)
              </h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Flores espalhadas pelo chão podem ser coletadas e consumidas para recuperar sede. Porém, elas <span className="text-dune-gold font-semibold">só enchem a primeira barra de sede</span> — a barra básica e limitada. Para ir além disso, você precisa de um recipiente de água.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm lg:text-base font-semibold text-dune-blue">
                Leader John (recipiente de água)
              </h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                O Leader John é o recipiente de água do jogo e o <span className="text-dune-gold font-semibold">único jeito de ir além da primeira barra de sede</span>. Sem ele, você fica limitado ao mínimo. Craftar e equipar o Leader John é tão essencial quanto o próprio Stillsuit. Encha-o na base com Windtraps antes de sair para expedições.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm lg:text-base font-semibold text-dune-blue">
                Dew Reaper (coleta noturna de orvalho)
              </h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                O Dew Reaper é uma ferramenta <span className="text-dune-gold font-semibold">exclusivamente noturna</span>. Durante a noite, plantas azuis brilhantes aparecem no deserto. Use o Dew Reaper nessas plantas para coletar orvalho, que enche diretamente o seu Leader John. É uma das melhores fontes de água no campo.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm lg:text-base font-semibold text-dune-blue">
                Blood Extractor → Blood Bags → Blood Purifier
              </h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Cadeia alternativa de produção de água: use o <span className="text-dune-gold font-semibold">Blood Extractor</span> em criaturas mortas para extrair sangue e armazená-lo em <span className="text-dune-gold font-semibold">Blood Bags</span>. Depois, processe as Blood Bags no <span className="text-dune-gold font-semibold">Blood Purifier</span> na sua base para obter água limpa. Muito útil quando está longe de plantas ou fontes de orvalho.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm lg:text-base font-semibold text-dune-blue">
                Windtraps na base (produção passiva)
              </h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Windtraps produzem água passivamente na sua base. Use essa água para encher o Leader John antes de expedições e para processos de crafting.
              </p>
            </div>
          </div>
        </Card>

        <WarningBox
          title="Guarde água da base para crafting!"
          text="Ferro e aço precisam de água para serem processados nas estações de crafting. Não gaste toda a água da base bebendo — reserve uma parte para produção de materiais. Gerenciar o estoque de água da base é tão importante quanto gerenciar sua sede pessoal."
        />
      </section>

      <DiamondDivider />

      {/* Survival Tools */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">FERRAMENTAS DE SOBREVIVÊNCIA</h2>
        </div>

        <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/70">
          Suas ferramentas são essenciais para sobreviver no deserto. Todas consomem energia de Power Packs, então sempre tenha baterias carregadas antes de sair da base.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card variant="outlined" className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="gold" size="md">Cut Array</Badge>
            </div>
            <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
              Ferramenta principal de coleta de recursos. Usada para minerar pedras, cortar plantas, extrair materiais e muito mais. É <span className="text-dune-gold font-semibold">upgradável</span> — versões melhores coletam mais rápido e desbloqueiam materiais de tier superior. Priorize upgrades do Cut Array para acelerar toda sua progressão.
            </p>
          </Card>

          <Card variant="outlined" className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="orange" size="md">Power Packs</Badge>
            </div>
            <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
              Todas as ferramentas precisam de energia para funcionar. Power Packs são as baterias do jogo. O <span className="text-dune-gold font-semibold">Improvised Power Pack</span> é o básico e dura pouco. Faça upgrade para <span className="text-dune-gold font-semibold">MK2+</span> o mais rápido possível — duram significativamente mais e evitam que você fique sem energia no meio de uma expedição.
            </p>
          </Card>

          <Card variant="outlined" className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="blue" size="md">Dew Reaper</Badge>
            </div>
            <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
              Ferramenta de coleta de orvalho que <span className="text-dune-gold font-semibold">só funciona à noite</span>. Procure plantas azuis brilhantes no deserto noturno e use o Dew Reaper para extrair orvalho delas. O orvalho coletado enche diretamente o Leader John. Essencial para expedições longas sem voltar à base.
            </p>
          </Card>

          <Card variant="outlined" className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="danger" size="md">Respawn Beacon</Badge>
            </div>
            <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
              Ponto de respawn portátil que você pode colocar no deserto. Se morrer, renasce nele ao invés de voltar para a base. <span className="text-dune-gold font-semibold">Apenas 1 pode estar ativo por vez</span> — colocar outro desativa o anterior. Use estrategicamente em expedições longas para não perder todo o progresso de caminhada.
            </p>
          </Card>

          <Card variant="outlined" className="p-4 sm:col-span-2">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="purple" size="md">Survey Probe</Badge>
            </div>
            <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
              Ferramenta de exploração que <span className="text-dune-gold font-semibold">revela o fog of war</span> ao redor e marca locais de interesse no mapa. Extremamente útil para descobrir pontos de recurso, entradas de cavernas e localizações importantes sem precisar explorá-las a pé. Use em pontos altos para maximizar a área revelada.
            </p>
          </Card>
        </div>
      </section>

      <DiamondDivider />

      {/* Durability System */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SISTEMA DE DURABILIDADE</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Todos os equipamentos e ferramentas degradam com o uso. Entender o sistema de durabilidade é crucial para não ficar sem equipamento no meio de uma expedição.
          </p>

          <div className="rounded-lg bg-dune-brown-light/20 p-4 mb-4">
            <h4 className="mb-3 text-sm lg:text-base font-semibold text-dune-gold">
              Barra de durabilidade — 3 cores
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-sm bg-yellow-400" />
                <p className="text-sm lg:text-base text-dune-cream/70">
                  <span className="font-semibold text-yellow-400">Amarelo</span> — Durabilidade restante. Enquanto tiver amarelo, o item funciona normalmente.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-sm bg-gray-400" />
                <p className="text-sm lg:text-base text-dune-cream/70">
                  <span className="font-semibold text-gray-400">Cinza</span> — Porção reparável. Essa parte pode ser restaurada usando a <span className="text-dune-gold font-semibold">Repair Station</span> na sua base.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-sm bg-red-500" />
                <p className="text-sm lg:text-base text-dune-cream/70">
                  <span className="font-semibold text-red-500">Vermelho</span> — Porção irreparável. Essa parte está perdida para sempre. <span className="text-dune-gold font-semibold">Cresce a cada reparo</span> — quanto mais você repara um item, maior fica a barra vermelha, até que eventualmente o item precisa ser substituído.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-dune-brown-light/20 p-3">
            <h4 className="mb-1 text-sm lg:text-base font-semibold text-dune-blue">
              Repair Station
            </h4>
            <p className="text-sm lg:text-base text-dune-cream/70">
              Construa uma Repair Station na sua base para reparar equipamentos. O reparo converte a porção cinza de volta para amarelo, mas a porção vermelha permanece e cresce ligeiramente. Planeje substituir itens periodicamente ao invés de reparar indefinidamente.
            </p>
          </div>
        </Card>

        <WarningBox text="Cada reparo aumenta a porção vermelha (irreparável) da barra. Itens reparados muitas vezes eventualmente perdem tanta durabilidade máxima que se tornam inviáveis. Planeje craftar substituições antes que isso aconteça." />
      </section>

      <DiamondDivider />

      {/* Heat/Temperature System */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SISTEMA DE CALOR E TEMPERATURA</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            A temperatura em Arrakis varia dramaticamente entre dia e noite, e afeta diretamente sua sobrevivência. O sistema de calor não é apenas estético — ele impacta mecanicamente o consumo de água, regeneração de stamina e até a eficiência de equipamentos.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <Badge variant="orange" size="sm">Dia</Badge>
              <ul className="mt-2 space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li>Temperaturas entre 45-75°C</li>
                <li>Consumo de água acelerado (+30-50%)</li>
                <li>Regeneração de stamina reduzida</li>
                <li>Visibilidade máxima (mas você também é mais visível)</li>
                <li>Spice Blows mais frequentes ao meio-dia</li>
              </ul>
            </div>
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <Badge variant="blue" size="sm">Noite</Badge>
              <ul className="mt-2 space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li>Temperaturas entre 5-20°C</li>
                <li>Consumo de água normal ou reduzido</li>
                <li>Regeneração de stamina normal</li>
                <li>Visibilidade reduzida (predadores mais agressivos)</li>
                <li>Criaturas noturnas mais perigosas aparecem</li>
              </ul>
            </div>
          </div>
        </Card>

      </section>

      <DiamondDivider />

      {/* Stillsuit */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">STILLSUITS: TIERS E UPGRADES</h2>
        </div>

        <Card variant="outlined" className="p-4 mb-4">
          <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
            Trade-off do Stillsuit: proteção térmica vs. armadura
          </h3>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
            Stillsuits oferecem <span className="text-dune-gold font-semibold">excelente proteção térmica</span> (heat protection), essencial no deserto. Porém, seus <span className="text-dune-danger font-semibold">stats de armadura são baixos</span> — pouca proteção contra dano físico. O jogo tem <span className="text-dune-blue font-semibold">6 stats de armadura</span>: light dart, blade, concussive, heavy dart, heat protection e stamina cost. O Stillsuit foca quase exclusivamente em heat protection e stamina cost, deixando você vulnerável em combate. Considere trocar para armadura de combate quando for enfrentar inimigos e voltar ao Stillsuit para exploração.
          </p>
        </Card>

        <div className="mt-4 space-y-3">
          {[
            {
              tier: "Stillsuit Básico",
              badge: "neutral" as const,
              recovery: "20% de recuperação de água",
              materials: "Plant Fiber + Couro Processado",
              description:
                "Sua primeira linha de defesa contra a sede. Recupera uma porção pequena da água perdida por transpiração. Não é muito eficiente, mas é infinitamente melhor do que nada. Deve ser craftado nas primeiras 30 minutos de jogo.",
            },
            {
              tier: "Stillsuit Intermediário",
              badge: "blue" as const,
              recovery: "45% de recuperação de água",
              materials: "Tecido Sintético + Componentes de Filtração + Couro Tratado",
              description:
                "Upgrade significativo que mais do que dobra a eficiência. Com este stillsuit, expedições ao deserto se tornam viáveis por períodos muito maiores. Priorize este upgrade assim que tiver acesso aos materiais.",
            },
            {
              tier: "Stillsuit Avançado",
              badge: "purple" as const,
              recovery: "65% de recuperação de água",
              materials: "Polímero Avançado + Microfiltros + Tecido Nanotech",
              description:
                "Quase nível Fremen de eficiência. Com este stillsuit, você pode sobreviver no deserto profundo por longos períodos com abastecimento mínimo de água. Materiais raros necessários, encontrados no Deep Desert.",
            },
            {
              tier: "Stillsuit de Mestre (Fremen)",
              badge: "gold" as const,
              recovery: "85% de recuperação de água",
              materials: "Componentes Fremen + Materiais Raros + Blueprint Especial",
              description:
                "O auge da tecnologia de sobrevivência. Quase toda água perdida é recuperada. Requer blueprint especial obtido através de reputação com facção Fremen ou descoberta em cavernas secretas. Extremamente raro.",
            },
          ].map((suit) => (
            <Card key={suit.tier} variant="outlined" className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant={suit.badge} size="md">{suit.tier}</Badge>
                <span className="text-sm lg:text-base font-bold text-dune-gold">{suit.recovery}</span>
              </div>
              <p className="mb-2 text-sm lg:text-base leading-relaxed text-dune-cream/70">
                {suit.description}
              </p>
              <p className="text-sm lg:text-base text-dune-cream-muted">
                Materiais: {suit.materials}
              </p>
            </Card>
          ))}
        </div>

        <WarningBox text="NUNCA saia da cidade sem stillsuit. Mesmo o básico. Sem stillsuit, você perde água na taxa máxima e não consegue sobreviver mais do que 10-15 minutos no deserto. Craftar o Stillsuit Básico é literalmente a primeira coisa que você deve fazer no jogo." />

        <ImageCard src={images.classes.stillsuit} caption="Stillsuit: equipamento essencial de sobrevivência — ótima proteção térmica, mas pouca armadura de combate" />
      </section>

      <DiamondDivider />

      {/* Storms */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">TEMPESTADES</h2>
        </div>

        <div className="space-y-4">
          <Card variant="outlined" className="p-5">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="orange" size="md">Sandstorm (Tempestade de Areia)</Badge>
            </div>
            <p className="mb-3 text-sm lg:text-base leading-relaxed text-dune-cream/85">
              Tempestades de areia normais são perigosas, mas gerenciáveis. Reduzem a visibilidade drasticamente, aumentam o consumo de água e dificultam a navegação. Quando uma sandstorm se aproxima (você verá no horizonte), busque abrigo imediatamente — cavernas, ruínas ou o lado protegido de formações rochosas.
            </p>
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-orange">--</span> Visibilidade reduzida a quase zero</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-orange">--</span> Consumo de água aumentado significativamente</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-orange">--</span> Dano gradual se ficar exposto</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Se morrer durante sandstorm, <span className="text-dune-gold font-semibold">PODE recuperar o corpo</span> e seus itens</li>
              </ul>
            </div>
          </Card>

          <Card variant="strong" className="p-5 border border-dune-danger/30">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="danger" size="md">Tempestade Coriolis</Badge>
            </div>
            <p className="mb-3 text-sm lg:text-base leading-relaxed text-dune-cream/85">
              A Tempestade Coriolis é <span className="text-dune-danger font-bold">MUITO mais perigosa</span> que uma sandstorm normal. É uma tempestade massiva e devastadora que aniquila tudo em seu caminho. Diferente da sandstorm, a Coriolis tem uma consequência fatal:
            </p>
            <div className="rounded-lg bg-dune-danger/10 border border-dune-danger/20 p-3">
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-danger">--</span> Dano massivo e rápido — morte quase garantida se pego exposto</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-danger">--</span> <span className="text-dune-danger font-bold">Morte = perde TUDO</span> — igual morte por sandworm</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-danger">--</span> <span className="text-dune-danger font-bold">SEM recuperação de corpo</span> — seus itens somem permanentemente</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-danger">--</span> Busque abrigo IMEDIATAMENTE ao ver o aviso no HUD</li>
              </ul>
            </div>
          </Card>
        </div>

        <WarningBox
          title="Tempestade Coriolis = perda total"
          text="Diferente da sandstorm normal onde você pode recuperar o corpo, morrer em uma Tempestade Coriolis significa perder TODOS os seus itens permanentemente — igual a ser engolido por um sandworm. Ao ver o aviso de Coriolis, abandone TUDO que está fazendo e busque abrigo. Nenhum loot vale o risco."
        />
      </section>

      <DiamondDivider />

      {/* Sandworm Survival */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SOBREVIVENDO A SANDWORMS</h2>
        </div>

        <Card variant="strong" className="mt-4 p-5">
          <h3 className="mb-3 text-sm lg:text-base font-bold text-dune-danger">
            REGRAS DE SOBREVIVÊNCIA CONTRA SANDWORMS
          </h3>

          <div className="space-y-3">
            {[
              {
                rule: "NUNCA use escudo no deserto aberto",
                explanation:
                  "O campo Holtzman atrai sandworms de quilômetros de distância. Um worm pode chegar em 15-30 segundos após a ativação do escudo. Morte quase garantida.",
              },
              {
                rule: "Caminhe sem ritmo (Desert Walk)",
                explanation:
                  "Vibrações rítmicas na areia (como passos regulares) atraem worms. Use a mecânica de Desert Walk para variar seu padrão de movimento e reduzir drasticamente a chance de atrair atenção.",
              },
              {
                rule: "Fuja para terreno rochoso",
                explanation:
                  "Sandworms não conseguem penetrar rocha sólida. Se você detectar um worm se aproximando (tremores no chão, ícone de alerta), corra imediatamente para a formação rochosa mais próxima.",
              },
              {
                rule: "Use Thumpers como distração",
                explanation:
                  "Thumpers são dispositivos que criam vibrações rítmicas no chão, atraindo sandworms para longe de você. Plante um thumper e se afaste na direção oposta. O worm irá para o thumper ao invés de você.",
              },
              {
                rule: "Preste atenção nos sinais",
                explanation:
                  "Antes de um worm aparecer, o chão treme, a areia começa a se mover e um ícone de alerta surge na HUD. Você tem aproximadamente 20 segundos entre o primeiro sinal e a chegada do worm. Use esse tempo sabiamente.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg bg-dune-danger/5 border border-dune-danger/15 p-3">
                <h4 className="mb-1 text-sm lg:text-base font-semibold text-dune-danger">
                  {i + 1}. {item.rule}
                </h4>
                <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <ImageCard src={images.sandworms.deepDesert} caption="Sandworm no Deep Desert — invencível e letal" />
      </section>

      <DiamondDivider />

      {/* Desert Navigation */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">NAVEGAÇÃO NO DESERTO</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
                Orientação básica
              </h3>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                O deserto de Arrakis pode parecer idêntico em todas as direções. Use formações rochosas como pontos de referência, marque locais importantes no mapa e sempre saiba a direção da base mais próxima. A bússola na HUD é sua melhor amiga.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
                Marcadores e waypoints
              </h3>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Use o sistema de marcadores do mapa extensivamente. Marque depósitos de recursos, entradas de cavernas, locais de Spice Blow e pontos de interesse. No Deep Desert, onde o mapa reseta semanalmente, seus marcadores pessoais são cruciais para reencontrar locais importantes.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
                Survey Probe para exploração
              </h3>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Use Survey Probes em pontos elevados para revelar o fog of war e descobrir locais de interesse sem precisar caminhar até lá. Economiza tempo, água e reduz o risco de encontros perigosos.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <DiamondDivider />

      {/* Day/Night Cycle */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">CICLO DIA E NOITE</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O ciclo dia-noite em Dune Awakening dura aproximadamente 2 horas em tempo real (1 hora de dia, 1 hora de noite). Cada período traz vantagens e desvantagens distintas que afetam diretamente sua estratégia de jogo.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-dune-gold/5 border border-dune-gold/15 p-3">
              <h4 className="mb-2 text-sm lg:text-base font-semibold tracking-wider text-dune-gold">
                AMANHECER / ENTARDECER
              </h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li>Temperatura moderada</li>
                <li>Consumo de água normal</li>
                <li>Boa visibilidade</li>
                <li>Melhor hora para explorar</li>
                <li>Criaturas em transição</li>
              </ul>
            </div>
            <div className="rounded-lg bg-dune-orange/5 border border-dune-orange/15 p-3">
              <h4 className="mb-2 text-sm lg:text-base font-semibold tracking-wider text-dune-orange">
                MEIO-DIA
              </h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li>Temperatura extrema (70°C+)</li>
                <li>Consumo de água +50%</li>
                <li>Stamina regenera mais devagar</li>
                <li>Spice Blows mais frequentes</li>
                <li>Ideal para coletar Spice</li>
              </ul>
            </div>
            <div className="rounded-lg bg-dune-blue/5 border border-dune-blue/15 p-3">
              <h4 className="mb-2 text-sm lg:text-base font-semibold tracking-wider text-dune-blue">
                MEIA-NOITE
              </h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li>Temperatura baixa (5-10°C)</li>
                <li>Consumo de água reduzido</li>
                <li>Visibilidade muito baixa</li>
                <li>Predadores noturnos ativos</li>
                <li>Ideal para PvP furtivo</li>
                <li>Dew Reaper funciona (plantas azuis brilham)</li>
              </ul>
            </div>
          </div>
        </Card>

      </section>
    </MainContent>
  );
}
