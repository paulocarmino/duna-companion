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

export function CombatPage() {
  const { setCards } = useReference();

  useEffect(() => {
    const cards: ReferenceCard[] = [
      {
        id: "combat-tip-slow-blade",
        type: "tip",
        title: "Pratique o Slow Blade contra NPCs primeiro",
        content:
          "Antes de entrar em PvP, pratique o timing do Slow Blade contra NPCs com escudo em Arrakeen. O timing é muito específico e precisa virar memória muscular. Recomendamos pelo menos 30 minutos de prática dedicada.",
      },
      {
        id: "combat-tip-disruptor",
        type: "tip",
        title: "O Disruptor é sua arma mais importante",
        content:
          "Muitos iniciantes ignoram o Disruptor e tentam usar apenas Slow Blade. O problema é que o Slow Blade demora para carregar, dando tempo ao oponente de reagir. Use o Disruptor para desestabilizar o escudo primeiro, depois aplique o Slow Blade na janela de oportunidade.",
      },
      {
        id: "combat-tip-stamina",
        type: "tip",
        title: "Gerencie sua stamina com cuidado",
        content:
          "Nunca gaste toda sua stamina em esquivas. Guarde sempre pelo menos 25% para uma esquiva de emergência ou para correr de uma situação desfavorável. Jogadores que ficam sem stamina são alvos fáceis.",
      },
      {
        id: "combat-tip-pvp-kits",
        type: "tip",
        title: "Sempre carregue kits de emergência",
        content:
          "Em PvP, sempre carregue pelo menos 2 Kits Médicos e materiais para Stillsuit de emergência. Combates longos drenam água rapidamente, e ficar sem água no meio de um fight é sentença de morte.",
      },
      {
        id: "combat-tip-group-comp",
        type: "tip",
        title: "Composição ideal para grupo de 4",
        content:
          "A composição ideal para grupo de 4 é: 1 Swordmaster Tank + 1 Swordmaster DPS ou Trooper + 1 Mentat + 1 Bene Gesserit. Essa composição cobre todas as necessidades de combate em PvE e PvP.",
      },
      {
        id: "combat-lore-holtzman",
        type: "lore",
        title: "Escudo Holtzman",
        content:
          "O escudo Holtzman gera um campo de força que repele objetos em alta velocidade, mas permite a passagem de objetos lentos — caso contrário, o usuário não conseguiria respirar. Isso tornou o combate com lâminas novamente a forma dominante de guerra no universo conhecido.",
      },
      {
        id: "combat-ref-armor-stats",
        type: "reference",
        title: "Armor Stats",
        content:
          "Cada peça de armadura possui 6 stats: Light Dart Protection, Blade Protection, Concussive Protection, Heavy Dart Protection, Heat Protection e Stamina Cost. O Stillsuit oferece excelente proteção térmica (Heat Protection), porém possui stats de armadura muito baixas — é um trade-off entre sobrevivência no deserto e proteção em combate.",
      },
      {
        id: "combat-tip-respec",
        type: "tip",
        title: "Respec Grátis 48h",
        content:
          "Você pode fazer respec da sua skill tree gratuitamente a cada 48 horas. Basta visitar os Class Trainer NPCs espalhados pelo mundo. Isso permite experimentar diferentes builds sem custo, então não tenha medo de testar combinações diferentes.",
      },
    ];
    setCards(cards);
    return () => setCards([]);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="GUIA DE COMBATE"
        subtitle="O combate em Dune Awakening é único. Escudos bloqueiam ataques rápidos, lâminas lentas penetram defesas, e armas de fogo são quase inúteis contra escudos pessoais. Dominar essas mecânicas é a diferença entre sobreviver e morrer nas areias de Arrakis."
        heroImage={images.combat.melee}
      />

      {/* Melee Basics */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">FUNDAMENTOS DO COMBATE CORPO A CORPO</h2>
        </div>

        <Card variant="strong" className="p-5">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
                Ataques Leves
              </h3>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
                Ataques rápidos que causam dano moderado. São bloqueados por escudos na maioria dos casos. Use contra inimigos sem escudo ou para manter pressão enquanto espera a abertura para um ataque pesado. Combos de ataques leves são eficientes contra criaturas do deserto que não possuem escudos.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
                Ataques Pesados
              </h3>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
                Ataques lentos e poderosos que penetram parcialmente os escudos. Requerem timing preciso e deixam você vulnerável durante a animação. O dano é significativamente maior que ataques leves, mas a janela de punição também é maior se você errar.
              </p>
            </div>

            <div className="rounded-lg bg-dune-gold/5 border border-dune-gold/15 p-4">
              <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
                A Técnica do Slow Blade
              </h3>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
                A mecânica central de combate em Dune Awakening. O "Slow Blade" é um ataque deliberadamente lento que penetra completamente os escudos Holtzman. Para executá-lo, você precisa segurar o botão de ataque pesado por mais tempo que o normal, reduzindo a velocidade da lâmina até ela passar pelo campo do escudo. O timing é crucial: solte cedo demais e o escudo bloqueia; segure tempo demais e o oponente esquiva.
              </p>
              <p className="mt-2 text-sm lg:text-base leading-relaxed text-dune-cream/85">
                Dominar o Slow Blade é absolutamente essencial para PvP. Sem ele, você não consegue causar dano real a jogadores com escudo ativo.
              </p>
            </div>
          </div>
        </Card>

        <ImageCard src={images.combat.meleeWiki} caption="Combate corpo-a-corpo com efeitos de escudo" />
      </section>

      <DiamondDivider />

      {/* Shield Mechanics */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">MECÂNICAS DE ESCUDO</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O escudo pessoal Holtzman é o pilar do sistema de combate. Entender como ele funciona é essencial para sobreviver em Arrakis.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="blue">Regra 1</Badge>
                <h4 className="text-sm font-semibold text-dune-cream">
                  Bloqueio de alta velocidade
                </h4>
              </div>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Projéteis (balas, flechas) são bloqueados quase completamente. Ataques rápidos corpo a corpo são parcialmente bloqueados. Apenas objetos lentos passam pelo campo.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="blue">Regra 2</Badge>
                <h4 className="text-sm font-semibold text-dune-cream">
                  Penetração do Slow Blade
                </h4>
              </div>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Ataques deliberadamente lentos (Slow Blade) penetram o escudo completamente. Esta é a única forma confiável de causar dano total a um alvo com escudo.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="blue">Regra 3</Badge>
                <h4 className="text-sm font-semibold text-dune-cream">
                  Regeneração do escudo
                </h4>
              </div>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Escudos regeneram lentamente quando não estão recebendo dano. Após 5 segundos sem ser atingido, o escudo começa a recarregar. Manter pressão constante impede a regeneração.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="danger">Regra 4</Badge>
                <h4 className="text-sm font-semibold text-dune-cream">
                  Escudo + Deserto = Morte
                </h4>
              </div>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Usar escudo no deserto aberto atrai sandworms. O campo elétrico do escudo é detectado a quilômetros de distância. Ativar o escudo fora de zonas seguras é praticamente suicídio.
              </p>
            </div>
          </div>
        </Card>

        <WarningBox
          title="NUNCA ative o escudo no deserto aberto"
          text="A vibração do escudo Holtzman atrai sandworms de grandes distâncias. Um sandworm pode chegar em questão de segundos e devorar você inteiro. Só use escudos dentro de edifícios, bases ou zonas seguras como Arrakeen e Harko Village. Esta é a regra número 1 de sobrevivência em Arrakis."
        />
      </section>

      <DiamondDivider />

      {/* Armor System */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SISTEMA DE ARMADURA</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Além do escudo Holtzman, a armadura física é uma camada crucial de proteção. Cada peça de armadura possui 6 stats que determinam sua eficácia em diferentes cenários de combate. Entender esses stats é fundamental para montar o equipamento certo para cada situação.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                stat: "Light Dart Protection",
                description: "Proteção contra projéteis leves como dardos e flechas. Essencial contra inimigos à distância.",
                badge: "blue" as const,
              },
              {
                stat: "Blade Protection",
                description: "Reduz o dano recebido de ataques com lâminas e espadas. Muito importante para combate corpo a corpo.",
                badge: "blue" as const,
              },
              {
                stat: "Concussive Protection",
                description: "Proteção contra dano de impacto e explosivos. Útil contra Troopers e granadas.",
                badge: "blue" as const,
              },
              {
                stat: "Heavy Dart Protection",
                description: "Proteção contra projéteis pesados como tiros de armas de fogo de grande calibre.",
                badge: "blue" as const,
              },
              {
                stat: "Heat Protection",
                description: "Proteção contra dano térmico e calor extremo do deserto. Fundamental para exploração no Deep Desert.",
                badge: "orange" as const,
              },
              {
                stat: "Stamina Cost",
                description: "Quanto de stamina extra cada peça consome. Armaduras mais pesadas drenam mais stamina nas ações.",
                badge: "danger" as const,
              },
            ].map((item) => (
              <div key={item.stat} className="rounded-lg bg-dune-brown-light/20 p-3">
                <Badge variant={item.badge} size="sm">
                  {item.stat}
                </Badge>
                <p className="mt-2 text-sm lg:text-base leading-relaxed text-dune-cream/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="outlined" className="mt-3 p-5">
          <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
            O Trade-off do Stillsuit
          </h3>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O Stillsuit oferece excelente proteção térmica (Heat Protection), sendo indispensável para exploração no deserto. Porém, seus stats de armadura de combate (Blade, Dart, Concussive) são muito baixos. Isso significa que você estará bem protegido contra o calor, mas vulnerável em combate direto. Considere trocar para uma armadura de combate quando souber que vai enfrentar inimigos, e voltar ao Stillsuit para exploração e coleta.
          </p>
        </Card>

        <Card variant="outlined" className="mt-3 p-5">
          <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
            Otimização por cenário
          </h3>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Peças de armadura diferentes otimizam para cenários diferentes. Para PvP corpo a corpo, priorize Blade Protection. Contra Troopers e explosivos, foque em Concussive Protection. Para exploração no Deep Desert, Heat Protection é obrigatória. Equilibre o Stamina Cost — armaduras muito pesadas limitam suas esquivas e mobilidade, o que pode ser fatal em combate.
          </p>
        </Card>
      </section>

      <DiamondDivider />

      {/* Disruptor Sidearm */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">DISRUPTOR SIDEARM</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-3 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O Disruptor Sidearm é uma arma lateral que todo jogador deve carregar. Diferente de armas de fogo convencionais, o Disruptor causa dano diretamente ao escudo do inimigo, enfraquecendo-o ou desativando-o temporariamente. Isso abre uma janela para ataques corpo a corpo devastadores.
          </p>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            A tática padrão em PvP é: Disruptor para baixar o escudo, seguido imediatamente de Slow Blade para causar dano total. Este combo de 2 passos é a base de todo combate PvP eficiente.
          </p>
        </Card>

        <ImageCard src={images.combat.rangedWiki} caption="Combate à distância" />
      </section>

      <DiamondDivider />

      {/* Dodge and Stamina */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">ESQUIVA E STAMINA</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
                Sistema de Esquiva
              </h3>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                A esquiva (dodge roll) concede frames de invulnerabilidade durante a animação. Você pode esquivar em qualquer direção, mas cada esquiva consome uma porção significativa de stamina. Esquivas consecutivas consomem progressivamente mais stamina.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm lg:text-base font-bold text-dune-gold">
                Gerenciamento de Stamina
              </h3>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Stamina é usada para esquivar, correr e realizar ataques pesados. Ela regenera automaticamente quando você não está realizando ações que a consomem. Gerenciar stamina é tão importante quanto gerenciar vida — sem stamina, você não esquiva, não corre e não ataca pesado.
              </p>
            </div>
          </div>
        </Card>

        <WarningBox text="O calor do deserto reduz sua regeneração de stamina. Em dias muito quentes, sua stamina regenera até 30% mais devagar, o que muda drasticamente o ritmo do combate. Planeje seus engajamentos levando em conta a temperatura." />
      </section>

      <DiamondDivider />

      {/* Death Mechanics */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">MECÂNICAS DE MORTE</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Nem todas as mortes em Dune Awakening são iguais. O tipo de morte determina o que você perde e se pode recuperar seus itens. Entender essas diferenças é fundamental para gerenciar o risco.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="blue">Morte Normal</Badge>
              </div>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Ao morrer em combate normal (PvP ou PvE), você mantém seu equipamento (gear). Seus materiais e recursos ficam no seu corpo como um "saco de loot" que pode ser recuperado. Volte ao local da morte para coletar seus itens antes que outro jogador o faça.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="danger">Morte por Sandworm</Badge>
              </div>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Se um sandworm devorar você, perde TUDO. Não há corpo para recuperar — o worm engoliu tudo. Seu gear, materiais, recursos... tudo desaparece permanentemente. Essa é a penalidade mais severa do jogo.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="danger">Morte por Tempestade Coriolis</Badge>
              </div>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Morrer em uma Tempestade Coriolis tem a mesma penalidade de morte por sandworm: você perde TUDO, sem recuperação. A tempestade destrói qualquer vestígio, não deixando corpo nem loot para recuperar. Fique sempre atento ao alerta de tempestade e busque abrigo imediatamente.
              </p>
            </div>
          </div>
        </Card>

        <WarningBox
          title="Sandworm e Tempestade = Perda TOTAL"
          text="Morte por sandworm ou Tempestade Coriolis resulta na perda permanente de TODO o seu inventário e equipamento. Não há corpo para recuperar. Nunca carregue itens valiosos insubstituíveis ao explorar o Deep Desert, e sempre tenha um plano de fuga para tempestades e sinais de atividade de worm."
        />
      </section>

      <DiamondDivider />

      {/* Respec */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">RESPEC DE HABILIDADES</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <p className="mb-3 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Em Dune Awakening, você pode refazer sua skill tree (respec) gratuitamente a cada 48 horas. Para isso, basta visitar um dos Class Trainer NPCs espalhados pelo mundo — eles podem ser encontrados em cidades e assentamentos principais.
          </p>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Isso significa que você não precisa ter medo de experimentar builds diferentes. Testou uma combinação que não funcionou? Espere 48 horas e redistribua seus pontos sem custo algum. Aproveite essa flexibilidade para adaptar sua build a diferentes situações — uma build focada em PvE para farm, e outra otimizada para PvP quando necessário.
          </p>
        </Card>
      </section>

      <DiamondDivider />

      {/* PvP Strategies */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">ESTRATÉGIAS PVP</h2>
        </div>

        <Card variant="strong" className="p-5 mb-4">
          <h3 className="mb-3 text-sm lg:text-base font-bold text-dune-gold">
            Princípio fundamental: Mobilidade vence Dano
          </h3>
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Em Dune Awakening, o jogador que controla o posicionamento vence. Não adianta ter o maior dano se você não consegue acertar o oponente. Foque em mobilidade, reposicionamento e timing de ataques ao invés de simplesmente trocar golpes.
          </p>

          <div className="space-y-3">
            <Accordion
              title={
                <span className="text-sm font-semibold text-dune-cream">
                  Combate 1v1
                </span>
              }
            >
              <ul className="space-y-2 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2">
                  <span className="shrink-0 text-dune-gold">1.</span>
                  Abra com Disruptor para enfraquecer o escudo do oponente.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-dune-gold">2.</span>
                  Esquive o contra-ataque — o oponente vai reagir agressivamente quando perceber que perdeu o escudo.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-dune-gold">3.</span>
                  Aplique Slow Blade durante a janela de recuperação do oponente.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-dune-gold">4.</span>
                  Se o oponente for agressivo, recue e espere ele gastar stamina. Jogadores ansiosos cometem erros.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-dune-gold">5.</span>
                  Nunca persiga um inimigo em fuga no deserto aberto. Pode ser uma emboscada.
                </li>
              </ul>
            </Accordion>

            <Accordion
              title={
                <span className="text-sm font-semibold text-dune-cream">
                  Combate em grupo (GvG)
                </span>
              }
            >
              <ul className="space-y-2 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2">
                  <span className="shrink-0 text-dune-gold">1.</span>
                  Coordenação é tudo. Um grupo organizado com comms vence 2x o número de jogadores desorganizados.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-dune-gold">2.</span>
                  Tenha pelo menos 1 Bene Gesserit para A Voz (stun AoE). Essa habilidade decide batalhas de grupo.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-dune-gold">3.</span>
                  Swordmasters devem proteger os Mentats e Bene Gesserits. Se o suporte morrer, o grupo cai.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-dune-gold">4.</span>
                  Troopers ficam na retaguarda causando dano com explosivos (que ignoram escudos parcialmente).
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-dune-gold">5.</span>
                  Foque alvos. Não espalhem dano. Derrubar 1 inimigo rapidamente é melhor que danificar 5.
                </li>
              </ul>
            </Accordion>
          </div>
        </Card>

        <ImageCard src={images.combat.battle} caption="Batalha entre jogadores no Deep Desert" />
      </section>

      <DiamondDivider />

      {/* PvE Enemy Types */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">TIPOS DE INIMIGOS PVE</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              name: "Criaturas do Deserto",
              badge: "neutral" as const,
              description:
                "Insetos gigantes, lagartos de areia e outros animais nativos. Não possuem escudos. Ataques rápidos são eficientes. Cuidado com os enxames — muitos podem sobrecarregar até jogadores experientes.",
            },
            {
              name: "Bandidos e Contrabandistas",
              badge: "orange" as const,
              description:
                "Humanos hostis encontrados em ruínas e acampamentos. Alguns possuem escudos, exigindo Slow Blade. Geralmente em grupos de 3-5. Podem dropar equipamentos úteis.",
            },
            {
              name: "Soldados das Grandes Casas",
              badge: "danger" as const,
              description:
                "Tropas Harkonnen ou Atreides em patrulha. Bem equipados com escudos e armas. Exigem tática e preparação. Aparecem em POIs importantes e missões de história.",
            },
            {
              name: "Sandworms",
              badge: "purple" as const,
              description:
                "Os deuses do deserto. NÃO são inimigos que você luta — são desastres naturais que você EVITA. Atraídos por vibrações rítmicas e escudos. Fuja para terreno rochoso ou use um thumper para distraí-los.",
            },
          ].map((enemy) => (
            <Card key={enemy.name} variant="outlined" className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <Badge variant={enemy.badge}>{enemy.name}</Badge>
              </div>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                {enemy.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <DiamondDivider />

      {/* Group Combat Roles */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">PAPÉIS EM COMBATE DE GRUPO</h2>
        </div>

        <div className="space-y-3">
          {[
            {
              role: "Tank (Swordmaster)",
              badge: "danger" as const,
              responsibilities: [
                "Ficar na linha de frente absorvendo dano",
                "Usar provocação para manter inimigos focados em você",
                "Proteger aliados squishy (Mentat, Bene Gesserit)",
                "Controlar posicionamento dos inimigos",
              ],
            },
            {
              role: "DPS (Swordmaster Ofensivo / Trooper)",
              badge: "orange" as const,
              responsibilities: [
                "Causar dano máximo nos alvos focados pelo grupo",
                "Finalizar inimigos com vida baixa",
                "Trooper: dano à distância e explosivos",
                "Swordmaster DPS: burst com Execução em alvos baixos",
              ],
            },
            {
              role: "Suporte (Mentat / Bene Gesserit)",
              badge: "blue" as const,
              responsibilities: [
                "Mentat: buffs no grupo, debuffs nos inimigos",
                "Bene Gesserit: controle de multidões com A Voz",
                "Manter-se vivo é a prioridade — se o suporte morre, o grupo desmorona",
                "Comunicar cooldowns importantes para o grupo",
              ],
            },
          ].map((role) => (
            <Card key={role.role} variant="strong" className="p-4">
              <Badge variant={role.badge} size="md">
                {role.role}
              </Badge>
              <ul className="mt-3 space-y-1.5">
                {role.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm lg:text-base text-dune-cream/70"
                  >
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-dune-gold/60" />
                    {resp}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </MainContent>
  );
}
