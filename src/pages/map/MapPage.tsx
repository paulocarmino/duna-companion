import { useEffect } from "react";
import { ExternalLink, Map as MapIcon } from "lucide-react";
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
    id: "map-lore-arrakis",
    type: "lore",
    title: "Arrakis",
    content: "Arrakis, também chamado de Dune, é o terceiro planeta do sistema Canopus. Sua superfície é quase inteiramente deserto, sem água superficial. As únicas áreas habitáveis estão nos polos e nas regiões onde formações rochosas oferecem proteção contra as tempestades eternas do deserto.",
  },
  {
    id: "map-tip-hagga-base",
    type: "tip",
    title: "",
    content: "Use o Hagga Basin como sua base de operações permanente. Aqui você guarda seus recursos valiosos, mantém suas estações de crafting e prepara expedições para o Deep Desert. É seu porto seguro.",
  },
  {
    id: "map-tip-markers",
    type: "tip",
    title: "Marque tudo no mapa",
    content: "Use o sistema de waypoints extensivamente. Marque depósitos de recursos, cavernas, pontos de fuga e locais perigosos. No Deep Desert, seus marcadores persistem por uma semana (até o reset) e são a única forma confiável de navegar.",
  },
  {
    id: "map-tip-dunes",
    type: "tip",
    title: "Aprenda a ler as dunas",
    content: "Dunas altas oferecem visibilidade mas te expõem. Vales entre dunas oferecem cobertura mas limitam visão. Em PvP, use o terreno a seu favor -- sempre tente ter uma duna entre você e possíveis ameaças.",
  },
  {
    id: "map-tip-rocks",
    type: "tip",
    title: "Memorize formações rochosas",
    content: "Formações rochosas são seus pontos de referência permanentes no Hagga Basin. No Deep Desert, elas mudam com o reset semanal, mas durante a semana são âncoras confiáveis para navegação.",
  },
  {
    id: "map-tip-survey-probe",
    type: "tip",
    title: "Survey Probe",
    content: "Sempre use a Survey Probe ao entrar em uma nova zona. Ela revela recursos, POIs e pontos de interesse próximos, economizando tempo de exploração e ajudando a planejar sua rota com eficiência.",
  },
  {
    id: "map-tip-griffin-reach",
    type: "tip",
    title: "Griffin Reach Trade Post",
    content: "O Griffin Reach Trade Post é um ponto estratégico de comércio. Aqui você encontra vendedores com itens rotativos exclusivos e pode negociar com outros jogadores em segurança. Marque sua localização assim que descobri-lo.",
  },
  {
    id: "map-tip-lab-chests",
    type: "tip",
    title: "Lab Chests",
    content: "Os Lab Chests encontrados em Ecology Labs e outras instalações contêm materiais raros de crafting e dados de pesquisa. Eles reaparecem aproximadamente a cada 45 minutos, então vale a pena revisitar os locais periodicamente.",
  },
];

export function MapPage() {
  const { setCards } = useReference();

  useEffect(() => {
    setCards(cards);
    return () => setCards([]);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="MAPA & LOCAIS"
        subtitle="Arrakis é vasto e implacável. O mundo do jogo é dividido em duas regiões principais: o Hagga Basin (seguro, PvE) e o Deep Desert (perigoso, PvPvE). Conhecer o terreno é tão importante quanto conhecer o combate."
        heroImage={images.map.overview}
      />

      {/* Interactive Map Link */}
      <a
        href="https://mapgenie.io/dune-awakening"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card variant="strong" hover className="mb-8 border border-dune-gold/20 p-4 transition-all hover:border-dune-gold/40 hover:shadow-[0_0_20px_rgba(244,207,139,0.08)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dune-gold/10">
              <MapIcon size={20} className="text-dune-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-dune-gold lg:text-base">
                Abrir Mapa Interativo (MapGenie)
              </p>
              <p className="text-sm lg:text-base text-dune-cream-muted">
                Mapa completo com todos os POIs, recursos e locais marcados
              </p>
            </div>
            <ExternalLink size={16} className="shrink-0 text-dune-gold/60" />
          </div>
        </Card>
      </a>

      {/* Hagga Basin */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">HAGGA BASIN</h2>
        </div>

        <Card variant="strong" className="p-5">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="blue" size="md">Zona PvE</Badge>
            <Badge variant="neutral" size="sm">64 km2</Badge>
            <Badge variant="neutral" size="sm">Instanciado</Badge>
          </div>

          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O Hagga Basin é a região inicial e zona segura principal de Dune Awakening. Com aproximadamente 64 km2 de área, essa região é instanciada -- ou seja, cada jogador (ou grupo) tem sua própria versão do mapa, garantindo que não haja PvP involuntário.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">Características</h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Sem PvP -- você não pode ser atacado por outros jogadores</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Base permanente -- suas construções nunca são destruídas por outros</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Recursos básicos a intermediários disponíveis</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Missões da campanha principal acontecem aqui</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Acesso a Arrakeen e vendedores</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Criaturas PvE de nível baixo a médio</li>
              </ul>
            </div>
          </div>
        </Card>

        <ImageCard src={images.map.haggaBasin} caption="Hagga Basin — zona PvE principal" />
      </section>

      <DiamondDivider />

      {/* Deep Desert */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">DEEP DESERT</h2>
        </div>

        <Card variant="strong" className="p-5">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="danger" size="md">Zona PvPvE</Badge>
            <Badge variant="neutral" size="sm">~500 km2</Badge>
            <Badge variant="orange" size="sm">9 sub-zonas</Badge>
            <Badge variant="purple" size="sm">Reset semanal</Badge>
          </div>

          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O Deep Desert é onde o jogo realmente acontece no endgame. Uma área massiva de aproximadamente 500 km2 dividida em 9 sub-zonas, cada uma com seus próprios recursos, POIs e níveis de perigo. Aqui, PvP é habilitado -- você pode atacar e ser atacado por qualquer jogador a qualquer momento.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-danger/5 border border-dune-danger/15 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-danger">Reset Semanal</h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                O mapa do Deep Desert reseta toda semana. Isso significa que todas as estruturas construídas lá, recursos coletados e alterações no terreno são apagadas. O layout das sub-zonas muda, POIs se movem e novos recursos aparecem em locais diferentes. Você precisa redescobrir o mapa toda semana.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">As 9 Sub-Zonas</h4>
              <p className="mb-2 text-sm lg:text-base text-dune-cream/70">
                Cada sub-zona varia em dificuldade e tipo de recurso disponível. Zonas centrais tendem a ser mais perigosas mas com recursos melhores. Zonas na borda são mais acessíveis mas com loot inferior.
              </p>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Zonas de borda: recursos Tier 3-4, menos jogadores, perigo moderado</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Zonas intermediárias: recursos Tier 4-5, PvP frequente, POIs valiosos</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Zonas centrais: recursos Tier 5-6, PvP intenso, melhores recompensas</li>
              </ul>
            </div>
          </div>
        </Card>

        <WarningBox
          title="O Deep Desert não perdoa"
          text="Ao morrer no Deep Desert, você perde TUDO que está carregando (exceto itens vinculados ao personagem). Leve apenas o necessário. Deposite Solari no banco antes de ir. Nunca carregue todos os seus melhores equipamentos de uma vez."
        />

        <ImageCard src={images.map.deepDesert} caption="Deep Desert — zona PvPvE de endgame" />
      </section>

      <DiamondDivider />

      {/* Safe Zones */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">ZONAS SEGURAS</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card variant="strong" className="p-5">
            <Badge variant="blue" size="md">Arrakeen</Badge>
            <p className="mt-3 text-sm lg:text-base leading-relaxed text-dune-cream/85">
              A capital de Arrakis e hub principal do jogo. Controlada pela Grande Casa que domina o planeta (varia conforme política do Landsraad). Aqui você encontra:
            </p>
            <ul className="mt-2 space-y-1 text-sm lg:text-base text-dune-cream/70">
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Vendedores de equipamentos e materiais</li>
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Banco para depositar Solari com segurança</li>
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> NPCs de missões e campanha</li>
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Estações de crafting públicas</li>
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Ponto de encontro social</li>
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Mercado de jogadores (trade)</li>
            </ul>
          </Card>

          <Card variant="strong" className="p-5">
            <Badge variant="orange" size="md">Harko Village</Badge>
            <p className="mt-3 text-sm lg:text-base leading-relaxed text-dune-cream/85">
              Assentamento Harkonnen, segundo hub social do jogo. Menor que Arrakeen mas com serviços únicos e vendedores exclusivos ligados à facção Harkonnen.
            </p>
            <ul className="mt-2 space-y-1 text-sm lg:text-base text-dune-cream/70">
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Vendedores Harkonnen com itens exclusivos</li>
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Missões da facção Harkonnen</li>
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Arena de treinamento PvP (consensual)</li>
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Banco (mesma conta que Arrakeen)</li>
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Acesso a missões do Deep Desert</li>
              <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Mercado negro (itens raros rotativos)</li>
            </ul>
          </Card>
        </div>

        {/* Griffin Reach Trade Post */}
        <Card variant="strong" className="mt-4 p-5">
          <Badge variant="gold" size="md">Griffin Reach Trade Post</Badge>
          <p className="mt-3 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Posto de comércio estratégico localizado entre o Hagga Basin e o Deep Desert. É uma zona segura importante para jogadores que transitam entre as duas regiões, oferecendo serviços essenciais antes de entrar no território perigoso.
          </p>
          <ul className="mt-2 space-y-1 text-sm lg:text-base text-dune-cream/70">
            <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Vendedores com itens rotativos exclusivos da região</li>
            <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Último ponto seguro antes do Deep Desert</li>
            <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Estações de reparo para veículos e equipamentos</li>
            <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Ponto de encontro para grupos antes de expedições</li>
            <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Negociação direta com outros jogadores em segurança</li>
          </ul>
        </Card>

        <ImageCard src={images.map.arrakeen} caption="Arrakeen — capital e hub seguro" />
        <ImageCard src={images.map.harkoVillage} caption="Harko Village — hub Harkonnen" />
      </section>

      <DiamondDivider />

      {/* Key POIs */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">PONTOS DE INTERESSE (POIs)</h2>
        </div>

        <div className="space-y-3">
          <Card variant="outlined" className="overflow-hidden">
            <Accordion
              title={
                <div className="flex items-center gap-2">
                  <Badge variant="gold">Imperial Testing Stations</Badge>
                </div>
              }
              defaultOpen
            >
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Estações de teste abandonadas do Imperium espalhadas pelo deserto. Contêm tecnologia avançada, blueprints raros e loot de alta qualidade. Fortemente guardadas por defesas automáticas e soldados imperiais. Frequentemente disputadas entre jogadores no Deep Desert. Os melhores blueprints de equipamento do jogo são encontrados aqui.
              </p>
            </Accordion>
          </Card>

          <Card variant="outlined" className="overflow-hidden">
            <Accordion
              title={
                <div className="flex items-center gap-2">
                  <Badge variant="purple">Fremen Caves (Sietches)</Badge>
                </div>
              }
            >
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Cavernas secretas dos Fremen, agora abandonadas nesta linha temporal alternativa. Contêm caches de equipamento Fremen (os melhores stillsuits), água armazenada e passagens subterrâneas. Difíceis de encontrar mas extremamente recompensadoras. Algumas contêm blueprints de Stillsuit de Mestre e tecnologia Fremen única.
              </p>
            </Accordion>
          </Card>

          <Card variant="outlined" className="overflow-hidden">
            <Accordion
              title={
                <div className="flex items-center gap-2">
                  <Badge variant="blue">Ecology Labs</Badge>
                </div>
              }
            >
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Laboratórios ecológicos usados por Planetologistas para estudar o ecossistema de Arrakis. Contêm dados de pesquisa que podem ser trocados por XP e reputação, além de materiais de crafting especializados. Menos disputados que Testing Stations, o que os torna bons para jogadores solo. Os Lab Chests encontrados aqui reaparecem aproximadamente a cada 45 minutos, então vale a pena revisitar periodicamente.
              </p>
            </Accordion>
          </Card>

          <Card variant="outlined" className="overflow-hidden">
            <Accordion
              title={
                <div className="flex items-center gap-2">
                  <Badge variant="orange">Spice Blow Sites</Badge>
                </div>
              }
            >
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Locais onde erupções de Spice (Spice Blows) ocorrem. Quando uma erupção acontece, uma coluna de areia e Spice é ejetada do chão, espalhando Spice Bruto pela área. Esses eventos são visíveis a distância e atraem tanto jogadores quanto sandworms. A coleta é uma corrida contra o tempo -- pegue o máximo antes que um worm chegue ou outro jogador te ataque.
              </p>
            </Accordion>
          </Card>

          <Card variant="outlined" className="overflow-hidden">
            <Accordion
              title={
                <div className="flex items-center gap-2">
                  <Badge variant="danger">Ship Crash Events</Badge>
                </div>
              }
            >
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                Eventos aleatórios onde naves espaciais caem no deserto. Contêm loot raro, componentes de veículo de alto tier e, ocasionalmente, armas únicas. São eventos temporários que aparecem no mapa e desaparecem após um tempo ou após serem saqueados. No Deep Desert, esses eventos são verdadeiras zonas de guerra entre jogadores competindo pelo loot.
              </p>
            </Accordion>
          </Card>
        </div>
      </section>

      <DiamondDivider />

      {/* Navigation Tips */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">DICAS DE NAVEGAÇÃO</h2>
        </div>

        <WarningBox text="Nunca entre no Deep Desert sem marcar a saída no mapa. Se você se perder e ficar sem água ou combustível, é morte certa. Tenha sempre uma rota de evacuação planejada." />

        <Card variant="outlined" className="mt-4 p-5">
          <h4 className="mb-2 text-sm font-semibold text-dune-gold">Survey Probe: sua melhor amiga</h4>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
            Ao chegar em qualquer zona nova, o primeiro passo é usar a Survey Probe. Ela escaneia a área ao redor e revela recursos, POIs ocultos e pontos de interesse no mapa. Isso economiza um tempo enorme de exploração manual e permite que você planeje sua rota antes de se expor ao perigo. Sempre carregue pelo menos 2-3 probes sobressalentes, especialmente no Deep Desert onde cada zona é desconhecida após o reset semanal.
          </p>
        </Card>
      </section>
    </MainContent>
  );
}
