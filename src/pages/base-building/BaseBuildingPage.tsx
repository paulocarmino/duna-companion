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

const cards: ReferenceCard[] = [
  {
    id: "base-tip-start",
    type: "tip",
    title: "Primeiros Passos",
    content: "Comece com Tier 1 e foque em ter Fabricator + Armazém + Windtrap primeiro. Não tente construir tudo de uma vez — upgrades virão naturalmente conforme você progride.",
  },
  {
    id: "base-tip-strategy",
    type: "tip",
    title: "Estratégia de Bases",
    content: "A estratégia mais eficiente é manter sua base principal no Hagga Basin (segura, permanente) e construir bases temporárias de operação no Deep Desert para expedições de recursos. Nunca guarde todo seu loot no Deep Desert.",
  },
  {
    id: "base-tip-temporary",
    type: "tip",
    title: "Primeira Base Temporária",
    content: "Não invista demais na sua primeira base — ela é temporária. Você vai relocar conforme entende melhor o mapa e os recursos. Foque apenas no essencial para sobreviver e progredir.",
  },
  {
    id: "base-ref-generator",
    type: "reference",
    title: "Gerador",
    content: "O gerador alimenta o escudo da base e as bancadas de trabalho avançadas. Sem ele, estações como a Chemical Refinery e o Ore Refinery não funcionam. Mantenha sempre Fuel Cells extras.",
  },
  {
    id: "base-tip-flores",
    type: "tip",
    title: "Perto de Flores",
    content: "Construa sua base perto de flores (fontes de água). Água é essencial para sobrevivência em Arrakis e ter fontes naturais por perto economiza muito tempo e recursos no início do jogo.",
  },
  {
    id: "base-ref-griffin",
    type: "reference",
    title: "Griffin Reach",
    content: "Griffin Reach Trade Post é a melhor localização para sua primeira base. Fica perto de um ponto de comércio, tem flores (água) nas proximidades e acesso a recursos básicos essenciais para o early game.",
  },
  {
    id: "base-ref-permissions",
    type: "reference",
    title: "Permissões",
    content: "Sistema de permissões: Owner tem controle total, Co-Owner pode construir e modificar estruturas, Associate pode usar estações de trabalho e acessar armazenamento. Configure corretamente para jogar com amigos.",
  },
  {
    id: "base-tip-fuelcells",
    type: "tip",
    title: "Fuel Cells",
    content: "O gerador precisa de Fuel Cells para funcionar. Sem elas, tudo para — escudo, bancadas avançadas, tudo. Sempre mantenha Fuel Cells extras no armazém. Você pode craftá-las na Chemical Refinery ou encontrá-las como loot.",
  },
];

export function BaseBuildingPage() {
  const { setCards } = useReference();

  useEffect(() => {
    setCards(cards);
    return () => setCards([]);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="BASE BUILDING"
        subtitle="Sua base é seu refúgio em Arrakis. Desde uma cabana simples no Hagga Basin até uma fortaleza no Deep Desert, construir e manter uma base é essencial para progresso, crafting e armazenamento seguro de recursos."
        heroImage={images.crafting.baseOverview}
      />

      {/* Important First Base Info */}
      <section className="mt-8">
        <WarningBox text="SUA PRIMEIRA BASE É TEMPORÁRIA — Não invista demais nela! Construa perto do Griffin Reach Trade Post e de flores (fontes de água). Foque apenas no essencial: Fabricator, armazenamento e Ore Refinery. Você vai relocar assim que entender melhor o mapa." />

        <Card variant="strong" className="mt-4 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="gold" size="md">Dica Essencial</Badge>
          </div>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            No início do jogo, o mais importante é ter uma base funcional rapidamente — não perfeita. Coloque seu Sub-Fief Console perto do Griffin Reach Trade Post, que oferece acesso a comércio e tem flores (fontes de água) nas proximidades. Monte um Fabricator para crafting básico, um armazém para guardar recursos e um Ore Refinery para processar minérios. Tudo além disso pode esperar.
          </p>
        </Card>
      </section>

      <DiamondDivider />

      {/* Sub-Fief Console */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SISTEMA SUB-FIEF CONSOLE</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O Sub-Fief Console é o núcleo da sua base. É um dispositivo especial que define o território da sua construção e deve ser o primeiro item colocado ao criar uma nova base. Sem o Sub-Fief Console, você não pode construir estruturas permanentes.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">Como funciona</h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> O Console define uma área de construção ao seu redor</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Todas as estruturas devem estar dentro dessa área</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Upgrades no Console expandem a área disponível</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Se o Console for destruído, suas estruturas ficam vulneráveis</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Você pode ter múltiplos Sub-Fiefs em locais diferentes</li>
              </ul>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">Tiers do Console</h4>
              <div className="mt-2 space-y-2">
                {[
                  { tier: "Tier 1", area: "Pequena", desc: "Área básica, suficiente para workshop e armazém inicial" },
                  { tier: "Tier 2", area: "Média", desc: "Permite mais estruturas, refinarias e defesas básicas" },
                  { tier: "Tier 3", area: "Grande", desc: "Área completa para base operacional com todas as estações" },
                  { tier: "Tier 4", area: "Fortaleza", desc: "Máximo de área, permite defesas avançadas e múltiplas refinarias" },
                ].map((t) => (
                  <div key={t.tier} className="flex items-center gap-3 text-sm lg:text-base">
                    <Badge variant="gold" size="sm">{t.tier}</Badge>
                    <span className="text-dune-cream/70">{t.area} — {t.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      <DiamondDivider />

      {/* Generator and Fuel Cells */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">GERADOR E FUEL CELLS</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O gerador é o coração energético da sua base. Ele alimenta o escudo protetor e as bancadas de trabalho avançadas. Sem um gerador funcionando, estações como a Chemical Refinery e o Ore Refinery não operam — e seu escudo fica desativado.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">O que o gerador alimenta</h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Escudo de base (campo Holtzman estrutural)</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Bancadas de trabalho avançadas (Chemical Refinery, Ore Refinery, etc.)</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Torretas automáticas e sistemas de defesa</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Iluminação e funcionalidades extras da base</li>
              </ul>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">Fuel Cells</h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                O gerador consome Fuel Cells para funcionar. Sem elas, tudo para — escudo desativa, bancadas avançadas não funcionam. Você pode obter Fuel Cells de duas formas: craftando na Chemical Refinery ou encontrando como loot em POIs e inimigos. Sempre mantenha Fuel Cells extras no armazém para não ficar sem energia em momentos críticos.
              </p>
            </div>
          </div>

          <WarningBox text="Sem Fuel Cells, seu gerador para e suas estações avançadas ficam inoperantes. Isso pode travar completamente seu progresso de crafting. Mantenha sempre um estoque reserva!" />
        </Card>
      </section>

      <DiamondDivider />

      {/* Base Permissions */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">PERMISSÕES DE BASE</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O sistema de permissões permite que você controle quem pode fazer o quê na sua base. Essencial para jogar com amigos ou membros da guilda, cada nível de permissão oferece acesso diferente.
          </p>

          <div className="space-y-3">
            {[
              {
                role: "Owner",
                badge: "gold" as const,
                desc: "Controle total da base. Pode construir, destruir, modificar permissões de outros jogadores, acessar todos os armazéns e gerenciar o Sub-Fief Console. Apenas um Owner por base.",
              },
              {
                role: "Co-Owner",
                badge: "blue" as const,
                desc: "Pode construir novas estruturas, modificar as existentes e acessar todos os armazéns. Não pode destruir o Sub-Fief Console nem alterar permissões de outros jogadores.",
              },
              {
                role: "Associate",
                badge: "neutral" as const,
                desc: "Pode usar estações de trabalho (bancadas, refinarias) e acessar armazenamento compartilhado. Não pode construir nem modificar estruturas. Ideal para membros de guilda que precisam usar a base.",
              },
            ].map((perm) => (
              <div key={perm.role} className="rounded-lg bg-dune-brown-light/20 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant={perm.badge} size="sm">{perm.role}</Badge>
                </div>
                <p className="text-sm lg:text-base text-dune-cream/70">{perm.desc}</p>
              </div>
            ))}
          </div>

          <WarningBox text="Configure as permissões com cuidado! Um Co-Owner pode modificar sua base livremente. Só conceda esse nível a pessoas de confiança. Para membros casuais da guilda, Associate é suficiente." />
        </Card>
      </section>

      <DiamondDivider />

      {/* Building Materials */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">MATERIAIS DE CONSTRUÇÃO</h2>
        </div>

        <div className="space-y-3">
          {[
            {
              name: "Estruturas de Arenito",
              tier: "Básico",
              badge: "neutral" as const,
              durability: "Baixa",
              materials: "Blocos de Arenito (abundantes)",
              description: "As primeiras estruturas que você pode construir. Fáceis de obter mas com baixa durabilidade. Suficientes para o early game no Hagga Basin onde não há PvP.",
            },
            {
              name: "Estruturas de Pedra",
              tier: "Intermediário",
              badge: "blue" as const,
              durability: "Média",
              materials: "Pedra Cortada + Argamassa",
              description: "Upgrade significativo em durabilidade. Requerem processamento de pedra bruta em pedra cortada. Resistem a criaturas do deserto e dano ambiental.",
            },
            {
              name: "Estruturas de Metal Reforçado",
              tier: "Avançado",
              badge: "purple" as const,
              durability: "Alta",
              materials: "Placas de Aço + Rebites + Estrutura Metálica",
              description: "Resistentes a ataques de jogadores e explosivos. Necessárias para bases no Deep Desert onde PvP é constante. Custo alto mas durabilidade justifica.",
            },
            {
              name: "Estruturas Imperiais",
              tier: "Elite",
              badge: "gold" as const,
              durability: "Máxima",
              materials: "Plastanium + Liga Imperial + Componentes Avançados",
              description: "O topo da construção. Resistência máxima, estética imperial e funcionalidades extras como auto-reparo lento. Materiais extremamente raros.",
            },
          ].map((mat) => (
            <Card key={mat.name} variant="outlined" className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant={mat.badge}>{mat.tier}</Badge>
                  <h3 className="text-sm font-semibold text-dune-cream">{mat.name}</h3>
                </div>
                <span className="text-sm lg:text-base text-dune-cream-muted">Durabilidade: {mat.durability}</span>
              </div>
              <p className="mb-1 text-sm lg:text-base leading-relaxed text-dune-cream/70">{mat.description}</p>
              <p className="text-sm lg:text-base text-dune-cream-muted">Materiais: {mat.materials}</p>
            </Card>
          ))}
        </div>

        <ImageCard src={images.crafting.building} caption="Construção de estruturas em Arrakis" />
      </section>

      <DiamondDivider />

      {/* Optimal Base Locations */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">LOCALIZAÇÕES IDEAIS PARA BASES</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            A localização da sua base afeta acesso a recursos, segurança e eficiência logística. Escolha com cuidado — mover uma base inteira é custoso e demorado.
          </p>

          <div className="space-y-3">
            <Accordion
              title={
                <span className="text-sm font-semibold text-dune-cream">
                  Griffin Reach Trade Post (recomendado para primeira base)
                </span>
              }
              defaultOpen
            >
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                A melhor localização para sua primeira base. Fica próximo de um ponto de comércio onde você pode vender e comprar recursos. Além disso, a região tem flores (fontes de água) nas proximidades, o que é essencial para sobrevivência no início. Construa aqui primeiro e reloce quando tiver mais experiência.
              </p>
            </Accordion>

            <Accordion
              title={
                <span className="text-sm font-semibold text-dune-cream">
                  Próximo a flores (fontes de água)
                </span>
              }
            >
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Flores em Arrakis indicam presença de água subterrânea. Construir perto delas garante acesso fácil a água, um recurso vital para sobrevivência. Sem água por perto, você gasta tempo e recursos se deslocando constantemente para reabastecer.
              </p>
            </Accordion>

            <Accordion
              title={
                <span className="text-sm font-semibold text-dune-cream">
                  Próximo a formações rochosas
                </span>
              }
            >
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Ideal para proteção natural contra sandworms (eles não atravessam rocha) e acesso a mineração. Formações rochosas também oferecem sombra, reduzindo o impacto térmico. Desvantagem: pode limitar a área de expansão da base.
              </p>
            </Accordion>

            <Accordion
              title={
                <span className="text-sm font-semibold text-dune-cream">
                  Entre recursos diversos
                </span>
              }
            >
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Posicione sua base entre depósitos de minério, áreas de coleta de plantas e rotas de Spice Blow. Isso minimiza tempo de viagem e maximiza eficiência de farming. Use o mapa para identificar clusters de recursos antes de escolher o local.
              </p>
            </Accordion>

            <Accordion
              title={
                <span className="text-sm font-semibold text-dune-cream">
                  Longe de rotas de alto tráfego (Deep Desert)
                </span>
              }
            >
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                No Deep Desert, evite construir perto de POIs populares ou rotas óbvias entre objetivos. Bases em locais discretos são menos propensas a serem descobertas e atacadas por outros jogadores. Uma base escondida vale mais do que uma base fortificada em local óbvio.
              </p>
            </Accordion>
          </div>
        </Card>
      </section>

      <DiamondDivider />

      {/* Defense Systems */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SISTEMAS DE DEFESA</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              name: "Escudo de Base",
              badge: "blue" as const,
              description: "Campo Holtzman em escala de estrutura. Protege contra projéteis e ataques a distância. Não bloqueia ataques corpo a corpo ou explosivos. Consome energia do gerador constantemente.",
            },
            {
              name: "Torretas Automáticas",
              badge: "danger" as const,
              description: "Armas montadas que disparam automaticamente contra intrusos. Eficazes contra infantaria mas podem ser destruídas com explosivos. Requerem munição e manutenção.",
            },
            {
              name: "Muros e Portões",
              badge: "neutral" as const,
              description: "Barreiras físicas que controlam acesso à base. Portões podem ser trancados e são a primeira linha de defesa. Muros de metal reforçado resistem a explosivos.",
            },
            {
              name: "Armadilhas",
              badge: "orange" as const,
              description: "Minas, espinhos e armadilhas de areia que causam dano a intrusos. Invisíveis para atacantes e eficazes como primeira surpresa. Precisam ser reabastecidas após ativação.",
            },
          ].map((defense) => (
            <Card key={defense.name} variant="outlined" className="p-4">
              <Badge variant={defense.badge} size="md">{defense.name}</Badge>
              <p className="mt-2 text-sm lg:text-base leading-relaxed text-dune-cream/70">
                {defense.description}
              </p>
            </Card>
          ))}
        </div>

        <WarningBox text="Escudos de base atraem sandworms da mesma forma que escudos pessoais. No deserto aberto, ativar o escudo da base pode chamar um worm que danifica suas estruturas externas. Use o escudo apenas quando sob ataque de jogadores." />
      </section>

      <DiamondDivider />

      {/* Hagga Basin vs Deep Desert */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">HAGGA BASIN vs DEEP DESERT</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card variant="strong" className="p-5">
            <Badge variant="blue" size="md">Hagga Basin</Badge>
            <ul className="mt-3 space-y-2 text-sm lg:text-base text-dune-cream/70">
              <li className="flex gap-2"><span className="text-green-400">+</span> Zona PvE segura, sem ataques de jogadores</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Base permanente, nunca reseta</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Ideal para iniciantes e crafting</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Próximo a Arrakeen para comércio</li>
              <li className="flex gap-2"><span className="text-dune-danger">-</span> Recursos limitados a tiers básicos</li>
              <li className="flex gap-2"><span className="text-dune-danger">-</span> Sem acesso a Spice de alta qualidade</li>
              <li className="flex gap-2"><span className="text-dune-danger">-</span> Área de construção pode ser limitada</li>
            </ul>
          </Card>

          <Card variant="strong" className="p-5">
            <Badge variant="orange" size="md">Deep Desert</Badge>
            <ul className="mt-3 space-y-2 text-sm lg:text-base text-dune-cream/70">
              <li className="flex gap-2"><span className="text-green-400">+</span> Recursos raros e de alto tier</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Spice de alta qualidade abundante</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> POIs exclusivos e loot superior</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Territórios maiores para bases</li>
              <li className="flex gap-2"><span className="text-dune-danger">-</span> Zona PvPvE, ataques de jogadores constantes</li>
              <li className="flex gap-2"><span className="text-dune-danger">-</span> Mapa reseta semanalmente</li>
              <li className="flex gap-2"><span className="text-dune-danger">-</span> Base pode ser raidada e destruída</li>
            </ul>
          </Card>
        </div>

        <ImageCard src={images.crafting.baseRefinery} caption="Base com refinaria de spice no deserto" />
      </section>

      <DiamondDivider />

      {/* Maintenance Costs */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">CUSTOS DE MANUTENÇÃO</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Bases em Dune Awakening têm custos de manutenção que devem ser pagos regularmente em Solari (a moeda do jogo). Se você não pagar, suas estruturas degradam gradualmente e eventualmente colapsam.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">
                Taxação por Solari
              </h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Cada estrutura tem um custo semanal de manutenção em Solari. Estruturas maiores e mais avançadas custam mais. O custo total depende do tamanho da base, quantidade de estruturas e tier dos materiais usados. Bases no Deep Desert têm custo adicional de 20%.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">
                Degradação por falta de pagamento
              </h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Se você não pagar a manutenção, estruturas perdem durabilidade lentamente. Após 1 semana sem pagamento, as estruturas começam a mostrar dano visual. Após 2 semanas, elas podem colapsar. O Sub-Fief Console é o último a ser afetado.
              </p>
            </div>
          </div>
        </Card>

        <WarningBox text="Calcule seus custos de manutenção antes de expandir a base. Uma base enorme que você não consegue manter é pior do que uma base compacta e funcional. Foque em construir o que você realmente precisa." />
      </section>
    </MainContent>
  );
}
