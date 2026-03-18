import { useEffect } from "react";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DiamondDivider } from "@/components/ui/DiamondDivider";
import { ProTipBox } from "@/components/content/ProTipBox";
import { ImageCard } from "@/components/content/ImageCard";
import { images } from "@/data/images";

const tipCategories = [
  {
    title: "FERRAMENTAS SUBESTIMADAS",
    badge: "blue" as const,
    tips: [
      {
        title: "Survey Probe — a ferramenta mais subestimada do jogo",
        text: "A Survey Probe revela o fog of war numa área ao redor de onde você a coloca. É barata de craftar e extremamente útil. Use em toda zona nova que você entrar — mapear o terreno antes de explorar salva vidas e tempo. Muitos jogadores ignoram essa ferramenta, mas ela é essencial para navegação eficiente.",
      },
      {
        title: "Static Compactor — coleta recursos e revela segredos",
        text: "O Static Compactor coleta flower sand e converte em silício, um material importante para crafting. Além disso, ele pode revelar paredes escondidas em cavernas e ruínas. Sempre carregue um quando explorar áreas subterrâneas — você pode encontrar passagens secretas que outros jogadores simplesmente não percebem.",
      },
      {
        title: "Dew Reaper — sua fonte noturna de água",
        text: "O Dew Reaper é uma ferramenta NOTURNA. Durante a noite, plantas azuis brilhantes aparecem pelo deserto — use o Dew Reaper nelas para extrair água. É uma mecânica que muitos jogadores desconhecem por completo. Se você está com pouca água à noite, procure essas plantas luminescentes em vez de entrar em pânico.",
      },
      {
        title: "Recycler — decompõe gear em materiais valiosos",
        text: "O Recycler permite decompor equipamentos em materiais brutos. Isso é MUITO mais eficiente do que vender gear para NPCs. Além dos materiais padrão, você pode obter spice infused iron dust ao reciclar itens de maior qualidade — um recurso raro e valioso para crafting avançado.",
      },
      {
        title: "Vehicle Backup Tool — proteja seu veículo",
        text: "O Vehicle Backup Tool permite armazenar seu veículo em qualquer lugar. Sempre guarde seu veículo antes de sair para explorar a pé — isso o protege de tempestades de areia e de outros jogadores. Perder um veículo é um prejuízo enorme, então esse hábito é obrigatório.",
      },
      {
        title: "Respawn Beacon — respawn portátil estratégico",
        text: "O Respawn Beacon cria um ponto de respawn portátil no local onde você o coloca. Extremamente útil para expedições longas ou operações no Deep Desert. Porém, atenção: você só pode ter 1 ativo por vez. Se colocar outro, o anterior é destruído. Posicione-o com estratégia.",
      },
    ],
  },
  {
    title: "ECONOMIA REAL DO JOGO",
    badge: "gold" as const,
    tips: [
      {
        title: "Solari é abundante — o erro é NÃO COMPRAR de NPCs",
        text: "Diferente do que muitos iniciantes pensam, Solari não é escasso no jogo. O erro mais comum é acumular Solari e não gastar. NPCs vendem materiais essenciais que economizam horas de farm. Compre liberalmente — você sempre pode conseguir mais Solari rapidamente com missões e venda de loot.",
      },
      {
        title: "Lab chests respawnam a cada ~45 minutos",
        text: "Os baús dentro de laboratórios (labs) respawnam aproximadamente a cada 45 minutos. Isso significa que você pode criar rotas de farm, passando por vários labs em sequência. Quando completar o circuito, os primeiros baús já estarão disponíveis novamente. É uma fonte confiável e consistente de recursos.",
      },
      {
        title: "Recycling é muito melhor que vender para NPCs",
        text: "Gear que você não precisa deve ser reciclado, não vendido. O Recycler devolve materiais brutos que valem significativamente mais do que o Solari que um NPC pagaria pelo item. Além disso, você obtém materiais raros como spice infused iron dust que não são compráveis em lugar nenhum.",
      },
      {
        title: "Fuel cells: craft ou loot, essenciais para tudo",
        text: "Fuel cells são necessárias tanto para veículos quanto para manter a energia da sua base. Você pode craftá-las ou encontrá-las como loot em labs e acampamentos. Nunca saia sem estoque de fuel cells — ficar sem energia no meio do deserto ou ter sua base desligada é catastrófico.",
      },
      {
        title: "Unique schematics: 1 permit = 1 craft",
        text: "Schematics únicos funcionam como permits de uso único — cada permit permite craftar o item apenas uma vez. Eles são encontrados principalmente em lab chests. Quando encontrar um schematic raro, pense bem antes de usar. Você não terá outra chance sem encontrar outro permit.",
      },
    ],
  },
  {
    title: "ECONOMIA & SPICE TRADING",
    badge: "gold" as const,
    tips: [
      {
        title: "Deposite Solari no banco, mas não acumule sem usar",
        text: "Ao morrer, você perde uma porcentagem do Solari que está carregando. O banco é 100% seguro, então deposite o excesso. Porém, lembre-se: Solari é abundante no jogo. O erro real não é perder Solari — é não gastar em materiais úteis nos NPCs. Use o banco como proteção, não como poupança eterna.",
      },
      {
        title: "Venda Spice Refinado, não Bruto",
        text: "O preço por unidade de Spice Refinado é dramaticamente maior que o Bruto. Mesmo com a perda no processo de refinamento, você lucra muito mais refinando antes de vender. Uma Large Refinery (50:1) é essencial para maximizar lucros.",
      },
      {
        title: "Monitore o mercado de jogadores diariamente",
        text: "Preços flutuam com base na oferta e demanda dos jogadores. Compre materiais quando estão baratos (geralmente no meio da semana) e venda quando estão caros (antes do reset semanal do Deep Desert, quando todos estão se preparando).",
      },
      {
        title: "Diversifique suas fontes de renda",
        text: "Não dependa apenas de Spice. Crafting de equipamentos intermediários vende bem e constantemente. Stillsuits e Kits Médicos sempre têm demanda alta. Vendedores de missões pagam Solari confiável por tarefas repetitivas.",
      },
      {
        title: "O mercado negro de Harko Village tem margens melhores",
        text: "Itens vendidos no mercado negro de Harko Village frequentemente têm preço 10-20% melhor que em Arrakeen para itens raros. Se você tem reputação com ambas as facções, compare preços antes de vender.",
      },
    ],
  },
  {
    title: "META PVP & BUILDS",
    badge: "danger" as const,
    tips: [
      {
        title: "Mobilidade sempre vence dano puro",
        text: "O meta atual favorece builds com alta mobilidade. Um jogador que esquiva bem e se reposiciona constantemente é mais perigoso que um que simplesmente empilha dano. Invista em esquiva, velocidade de movimento e habilidades de reposicionamento.",
      },
      {
        title: "Disruptor + Slow Blade é o combo universal",
        text: "Independente da classe, todo jogador precisa dominar este combo. Disruptor para desestabilizar o escudo, Slow Blade para causar dano total. Pratique até virar automático. Quem domina isso primeiro numa luta geralmente vence.",
      },
      {
        title: "Bene Gesserit + Mentat é a dupla mais forte do jogo",
        text: "Uma Bene Gesserit usando A Voz enquanto um Mentat aplica Sapho Overdrive nos aliados é devastador. Se você joga em dupla, essa combinação domina tanto PvE quanto PvP em grupo. Coordenem cooldowns.",
      },
      {
        title: "Contra Troopers, feche distância imediatamente",
        text: "Troopers são fracos corpo a corpo mas mortais à distância. Se você está em classe melee, use terreno (dunas, rochas) para se aproximar sem ser alvejado. Uma vez no range corpo a corpo, a maioria dos Troopers perde vantagem drasticamente.",
      },
      {
        title: "Sempre carregue granadas de fumaça em PvP",
        text: "Smoke Screen é subestimada por iniciantes mas adorada por veteranos. Ela quebra line-of-sight, interrompe combos de Trooper e permite fugas ou reposicionamentos. Barata de craftar, carregue pelo menos 3.",
      },
    ],
  },
  {
    title: "EFICIÊNCIA & PROGRESSÃO",
    badge: "blue" as const,
    tips: [
      {
        title: "Intel Nodes dão XP massivo — não ignore",
        text: "Intel Nodes são pontos de coleta de informação espalhados pelo mapa que dão XP significativo na primeira interação. Muitos jogadores passam por eles sem perceber. Uma rota otimizada de Intel Nodes pode dar mais XP por hora que grinding de mobs.",
      },
      {
        title: "Refine em lotes, não individualmente",
        text: "O tempo de processamento por lote é quase fixo independente da quantidade. Refinar 1 ou 50 barras de ferro leva tempo similar. Acumule materiais brutos e processe tudo de uma vez. Isso economiza horas na semana.",
      },
      {
        title: "Use a noite para crafting, o dia para exploração",
        text: "A noite no jogo traz criaturas perigosas e baixa visibilidade, tornando exploração arriscada. Use esse tempo para processar materiais, organizar inventário e craftar. Reserve o dia (especialmente amanhecer/entardecer) para exploração ativa.",
      },
      {
        title: "Complete a campanha principal antes de ir ao Deep Desert",
        text: "A campanha principal desbloqueia estações de crafting, habilidades e até a classe Trooper gratuitamente. Jogadores que pulam a campanha perdem desbloqueios essenciais e vão para o Deep Desert despreparados.",
      },
      {
        title: "Priorize o upgrade de Stillsuit sobre armas",
        text: "Um Stillsuit melhor permite expedições mais longas, o que significa mais recursos coletados por viagem. O ganho em eficiência de um upgrade de Stillsuit supera o ganho em dano de uma arma melhor na maioria dos cenários.",
      },
    ],
  },
  {
    title: "MECÂNICAS OCULTAS",
    badge: "purple" as const,
    tips: [
      {
        title: "Tempestade Coriolis ≠ Sandstorm normal",
        text: "A Tempestade Coriolis é completamente diferente de uma sandstorm comum. Na Coriolis, você perde TUDO — inventário, gear equipado, tudo. É um evento devastador. Quando o alerta de Coriolis aparecer, largue tudo e procure abrigo imediatamente. Não confunda com tempestades de areia normais, que apenas reduzem visibilidade e causam dano leve.",
      },
      {
        title: "Class Trainers: NPCs que ensinam habilidades cross-class",
        text: "Existem NPCs chamados Class Trainers espalhados por Arrakeen e Harko Village que ensinam habilidades de outras classes para seu personagem. Um Swordmaster pode aprender técnicas de Bene Gesserit, um Trooper pode ganhar habilidades de Mentat. Procure esses NPCs — as habilidades cross-class dão vantagens enormes que a maioria dos jogadores desconhece.",
      },
      {
        title: "Respec é grátis a cada 48 horas",
        text: "Você pode fazer respec completo da sua build gratuitamente a cada 48 horas nos Class Trainers. Isso significa que experimentar builds diferentes não tem custo nenhum. Não tenha medo de testar configurações radicalmente diferentes — se não gostar, é só esperar 48h e refazer.",
      },
      {
        title: "Sistema de Durabilidade: barra de 3 cores",
        text: "A barra de durabilidade dos equipamentos tem 3 cores que indicam estados diferentes. Verde significa bom estado, amarelo indica que precisa de reparo em breve, e vermelho significa que o item está prestes a quebrar. Itens que chegam a zero de durabilidade são destruídos permanentemente. Monitore suas barras e repare preventivamente.",
      },
      {
        title: "Desert Walk reduz detecção de sandworms em 80%",
        text: "Segurar o botão de caminhada lenta ativa o Desert Walk, um padrão de movimento irregular que os Fremen usavam. A maioria dos jogadores não sabe que isso reduz drasticamente a chance de atrair sandworms. Use sempre que estiver no deserto aberto sem veículo.",
      },
      {
        title: "A temperatura afeta dano de certas armas",
        text: "Armas a laser (Lasguns) causam 15% mais dano em temperaturas altas (meio-dia) devido à condutividade do ar aquecido. Explosivos são ligeiramente mais eficazes em temperaturas baixas (noite) devido à densidade do ar. Detalhes pequenos que fazem diferença.",
      },
      {
        title: "Sietches Fremen têm puzzles que recompensam observação",
        text: "Os sietches abandonados não são apenas dungeons. Eles contêm puzzles ambientais baseados em marcações Fremen nas paredes. Prestar atenção nesses símbolos pode revelar salas secretas com loot exclusivo, incluindo blueprints do Stillsuit de Mestre.",
      },
      {
        title: "Sandworms pequenos dropam Dentes de Sandworm",
        text: "Sandworms juvenis (menores, encontrados raramente em cavernas) podem ser mortos e dropam Dentes de Sandworm, o material necessário para craftar a Crysknife — a melhor arma corpo a corpo do jogo. A maioria dos jogadores acha que sandworms são sempre invencíveis.",
      },
    ],
  },
  {
    title: "FAVORITOS DA COMUNIDADE",
    badge: "orange" as const,
    tips: [
      {
        title: "A 'Rota do Lixeiro' é a melhor forma de ganhar dinheiro no early game",
        text: "Jogadores do Reddit descobriram que uma rota circular no Hagga Basin passando por 7 acampamentos de bandidos rende mais Solari por hora do que qualquer outra atividade do early game. Os bandidos respawnam a cada 15 minutos e dropam equipamentos vendáveis consistentemente.",
      },
      {
        title: "Trio de ouro: Swordmaster + Mentat + Bene Gesserit",
        text: "A comunidade concorda que esse trio é a composição mais eficiente para conteúdo PvE de grupo. O Swordmaster tanqueia, o Mentat buffa e debuffa, e a Bene Gesserit controla com A Voz. Adicione um Trooper ou segundo Swordmaster para grupo de 4.",
      },
      {
        title: "Minas na porta da refinaria é a defesa mais eficiente",
        text: "No Deep Desert, jogadores que plantam minas na entrada de suas refinarias de Spice eliminam a maioria dos raiders antes que consigam roubar. 3 minas posicionadas corretamente matam qualquer jogador desprevenido.",
      },
      {
        title: "O 'Truque da Rocha' para fugir de PvP",
        text: "Ao ser perseguido por jogadores hostis, corra para a formação rochosa mais próxima. Agache atrás da rocha e use Camuflagem Natural (se Planetologist) ou simplesmente espere. A maioria dos perseguidores desiste em 60 segundos se perder line-of-sight.",
      },
      {
        title: "Guild de 5 jogadores coordenados vence guild de 20 desorganizados",
        text: "A comunidade enfatiza repetidamente: coordenação vence números. 5 jogadores em chamada de voz com builds complementares e estratégia definida destroem grupos muito maiores que não se comunicam. Invista em comunicação, não em recrutamento.",
      },
    ],
  },
];

export function ProTipsPage() {
  const { setCards } = useReference();

  useEffect(() => {
    const cards: ReferenceCard[] = [
      {
        id: "protip-survey-probe",
        type: "tip",
        title: "Survey Probe",
        content:
          "A ferramenta mais subestimada do jogo. Revela fog of war em áreas novas, é barata de craftar e essencial para navegação eficiente. Use em toda zona nova que você entrar.",
      },
      {
        id: "protip-lab-chests",
        type: "tip",
        title: "Lab Chests",
        content:
          "Baús de laboratório respawnam aproximadamente a cada 45 minutos. Crie rotas de farm circulares passando por vários labs — quando completar o circuito, os primeiros baús já estarão disponíveis novamente.",
      },
      {
        id: "protip-respec",
        type: "tip",
        title: "Respec Grátis",
        content:
          "Você pode fazer respec completo da sua build gratuitamente a cada 48 horas nos Class Trainers. Experimente builds diferentes sem medo — não tem custo nenhum.",
      },
      {
        id: "protip-coriolis",
        type: "reference",
        title: "Coriolis ≠ Sandstorm",
        content:
          "A Tempestade Coriolis é completamente diferente de uma sandstorm normal. Na Coriolis, você perde TUDO — inventário, gear equipado, tudo. Quando o alerta aparecer, procure abrigo imediatamente.",
      },
      {
        id: "protip-solari",
        type: "tip",
        title: "Solari Abundante",
        content:
          "Solari é abundante no jogo. O erro mais comum é acumular sem gastar. Compre materiais de NPCs liberalmente — economiza horas de farm e você sempre pode conseguir mais Solari rapidamente.",
      },
      {
        id: "protip-recycle",
        type: "tip",
        title: "Recicle Seu Gear",
        content:
          "O Recycler devolve materiais brutos que valem muito mais do que o Solari que um NPC pagaria. Além disso, você obtém materiais raros como spice infused iron dust. Recycler > vendor, sempre.",
      },
      {
        id: "protip-class-trainers",
        type: "reference",
        title: "Class Trainers",
        content:
          "NPCs espalhados por Arrakeen e Harko Village que ensinam habilidades de outras classes (cross-class skills). Um Swordmaster pode aprender técnicas de Bene Gesserit, um Trooper pode ganhar habilidades de Mentat.",
      },
      {
        id: "protip-vehicle-backup",
        type: "tip",
        title: "Vehicle Backup Tool",
        content:
          "Sempre guarde seu veículo com o Vehicle Backup Tool antes de sair para explorar a pé. Isso protege contra tempestades e outros jogadores. Perder um veículo é um prejuízo enorme.",
      },
    ];
    setCards(cards);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="PRO TIPS"
        subtitle="Estratégias avançadas, mecânicas ocultas e sabedoria acumulada pela comunidade de Dune Awakening. Estas dicas vão além do básico e podem transformar sua experiência no jogo."
        heroImage={images.hero.sandbikeSunset}
      />

      <ImageCard src={images.spice.harvesting1} caption="Colheita de spice: a atividade mais lucrativa do jogo" />

      <div className="space-y-10">
        {tipCategories.map((category) => (
          <section key={category.title}>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-2 w-2 rotate-45 bg-dune-gold" />
              <h2 className="text-lg lg:text-xl">{category.title}</h2>
              <Badge variant={category.badge} size="sm">
                {category.tips.length} dicas
              </Badge>
            </div>

            <Card variant="outlined" className="p-4">
              {category.tips.map((tip, i) => (
                <div key={i}>
                  <ProTipBox title={tip.title} text={tip.text} />
                  {i < category.tips.length - 1 && (
                    <div className="mx-4 border-b border-dune-brown-light/20" />
                  )}
                </div>
              ))}
            </Card>

            <DiamondDivider />
          </section>
        ))}
      </div>

      <ImageCard src={images.combat.gameplayCombat} caption="Combate avançado" />
    </MainContent>
  );
}
