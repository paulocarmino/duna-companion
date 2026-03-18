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
    id: "landsraad-lore-assembly",
    type: "lore",
    title: "O Landsraad",
    content: "O Landsraad é a assembleia de todas as Grandes Casas do Imperium, um contrapeso ao poder absoluto do Imperador. Cada Casa tem voto, e as decisões do Landsraad afetam a política, o comércio e até a guerra entre os mundos. Em Arrakis, o Landsraad decide qual Casa controla a produção de Spice.",
  },
  {
    id: "landsraad-lore-kanly",
    type: "lore",
    title: "O Kanly",
    content: "O Kanly é tão antigo quanto a própria civilização. É o direito de vingança entre Grandes Casas, regulado pelas Convenções da Grande Assembleia. 'Forme de Kanly' é a declaração formal de guerra ritualizada -- assassinos são permitidos, mas armas atômicas são proibidas.",
  },
  {
    id: "landsraad-tip-influence",
    type: "tip",
    title: "",
    content: "Concentre suas atividades de influência entre quarta e sexta-feira, quando os multiplicadores são maiores. Ações no início da semana valem menos pontos que ações na reta final.",
  },
  {
    id: "landsraad-tip-guild",
    type: "tip",
    title: "",
    content: "Mesmo que você prefira jogar solo, entrar numa guild casual para os benefícios de influência e buffs passivos vale a pena. Você não precisa participar de todas as atividades, mas os multiplicadores de influência fazem grande diferença no Landsraad.",
  },
];

export function LandsraadPage() {
  const { setCards } = useReference();

  useEffect(() => {
    setCards(cards);
    return () => setCards([]);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="LANDSRAAD"
        subtitle="O Landsraad é o conselho das Grandes Casas do Imperium. Em Dune Awakening, ele representa o sistema político que governa Arrakis, determinando alinhamentos, buffs do servidor e o equilíbrio de poder entre Atreides e Harkonnen."
        heroImage={images.ui.landsraadTasks}
      />

      {/* Political System */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SISTEMA POLÍTICO</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O sistema político de Dune Awakening gira em torno do conflito entre duas Grandes Casas: Atreides e Harkonnen. Cada jogador deve escolher seu alinhamento, e as ações coletivas de todos os jogadores determinam qual Casa domina Arrakis a cada semana.
          </p>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Este sistema não é apenas cosmético -- a Casa dominante recebe buffs significativos no servidor, acesso a áreas exclusivas e vantagens comerciais. A Casa perdedora recebe debuffs, tornando cada ciclo político uma competição real com impacto mecânico.
          </p>
        </Card>
      </section>

      <DiamondDivider />

      {/* Weekly Voting */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">VOTAÇÃO SEMANAL</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Toda semana, o Landsraad realiza uma votação que determina políticas do servidor. Os jogadores influenciam o resultado através de suas ações durante a semana, não apenas de um voto direto.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">
                Como influenciar a votação
              </h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Completar missões da sua facção gera pontos de influência</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Coletar e vender Spice pela sua facção conta como influência econômica</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Vitórias em PvP no Deep Desert geram pontos militares</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Controlar POIs importantes no Deep Desert gera influência territorial</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Guilds organizadas multiplicam a influência de seus membros</li>
              </ul>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">
                Ciclo semanal
              </h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">Seg-Sex</span> Período de acumulação de influência</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">Sábado</span> Contagem de votos e resolução</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">Domingo</span> Nova política entra em vigor, buffs/debuffs aplicados</li>
              </ul>
            </div>
          </div>
        </Card>

      </section>

      <DiamondDivider />

      {/* House Alignment */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">ALINHAMENTO COM GRANDES CASAS</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card variant="strong" className="p-5">
            <Badge variant="blue" size="md">Casa Atreides</Badge>
            <div className="mt-3 space-y-3">
              <div>
                <h4 className="mb-1 text-xs font-semibold tracking-wider text-dune-cream-muted">FILOSOFIA</h4>
                <p className="text-sm lg:text-base text-dune-cream/70">
                  Ordem, justiça e proteção. Atreides favorece estabilidade, comércio justo e proteção dos mais fracos. Ideal para jogadores que preferem cooperação.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-xs font-semibold tracking-wider text-green-400/80">BUFFS AO DOMINAR</h4>
                <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                  <li>+15% de eficiência em comércio</li>
                  <li>+10% de defesa em base building</li>
                  <li>Redução de taxas em Arrakeen</li>
                  <li>Acesso a missões exclusivas Atreides</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card variant="strong" className="p-5">
            <Badge variant="danger" size="md">Casa Harkonnen</Badge>
            <div className="mt-3 space-y-3">
              <div>
                <h4 className="mb-1 text-xs font-semibold tracking-wider text-dune-cream-muted">FILOSOFIA</h4>
                <p className="text-sm lg:text-base text-dune-cream/70">
                  Poder, lucro e dominação. Harkonnen favorece a força bruta, exploração máxima de recursos e supremacia militar. Ideal para jogadores competitivos.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-xs font-semibold tracking-wider text-green-400/80">BUFFS AO DOMINAR</h4>
                <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                  <li>+15% de produção de Spice</li>
                  <li>+10% de dano em combate PvP</li>
                  <li>Acesso ao mercado negro ampliado</li>
                  <li>Acesso a missões exclusivas Harkonnen</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <WarningBox text="Trocar de alinhamento é possível mas custa caro. Você perde toda a reputação acumulada com a facção anterior e começa do zero com a nova. Pense bem antes de se alinhar." />

        <ImageCard src={images.factions.harkonnenScene} caption="Conflito entre facções pela dominância política" />
      </section>

      <DiamondDivider />

      {/* War of Assassins */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">GUERRA DE ASSASSINOS (KANLY)</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            A Guerra de Assassinos, ou Kanly, é uma forma ritualizada de conflito entre Grandes Casas, sancionada pelo Landsraad. Em Dune Awakening, o Kanly se manifesta como eventos PvP organizados entre facções, com regras, objetivos e recompensas específicas.
          </p>

          <div className="space-y-3">
            <Accordion
              title={<span className="text-sm font-semibold text-dune-cream">Regras do Kanly</span>}
              defaultOpen
            >
              <ul className="space-y-1.5 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">1.</span> O Kanly é declarado formalmente entre guilds de facções opostas</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">2.</span> Durante o período de Kanly, as guilds envolvidas recebem bônus de dano entre si</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">3.</span> Assassinatos de líderes inimigos valem pontos extras de influência</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">4.</span> O Kanly tem duração limitada (geralmente 3 dias) e regras de engajamento</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">5.</span> Civis (jogadores sem guild) não são alvos válidos de Kanly</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">6.</span> A guild vencedora recebe bônus de influência e recompensas materiais</li>
              </ul>
            </Accordion>

            <Accordion
              title={<span className="text-sm font-semibold text-dune-cream">Recompensas do Kanly</span>}
            >
              <ul className="space-y-1.5 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Pontos massivos de influência no Landsraad para a facção vencedora</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Blueprints exclusivos de armas e armaduras de Kanly</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Títulos e cosméticos únicos para participantes</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Bônus temporário de experiência para a guild vencedora</li>
              </ul>
            </Accordion>
          </div>
        </Card>

      </section>

      <DiamondDivider />

      {/* Guild System */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SISTEMA DE GUILDS</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Guilds são organizações de jogadores que operam dentro do sistema político do Landsraad. Uma guild pode ter até 32 membros e deve se alinhar com uma das Grandes Casas. Guilds são a principal forma de participar significativamente da política do servidor.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">Estrutura da Guild</h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Líder (1): controle total, declara Kanly, gerencia membros</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Oficiais (até 5): podem recrutar, gerenciar banco da guild</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Membros (até 26): contribuem com influência e participam de eventos</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Máximo total: 32 jogadores por guild</li>
              </ul>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">Benefícios de Guild</h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Multiplicador de influência no Landsraad (ações em grupo valem mais)</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Banco compartilhado de recursos e Solari</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Território de guild no Deep Desert (área protegida maior)</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Participação em Kanly e eventos de larga escala</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Buffs passivos baseados no nível da guild</li>
              </ul>
            </div>
          </div>
        </Card>

      </section>

      <DiamondDivider />

      {/* Buffs/Debuffs */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">BUFFS E DEBUFFS DA POLÍTICA</h2>
        </div>

        <div className="space-y-3">
          <Card variant="strong" className="p-4">
            <h3 className="mb-3 text-sm font-bold text-green-400">
              BUFFS DA FACÇÃO DOMINANTE
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { buff: "+15% de produção/comércio (varia por Casa)", type: "Econômico" },
                { buff: "+10% de dano ou defesa (varia por Casa)", type: "Combate" },
                { buff: "Redução de taxas em hubs", type: "Financeiro" },
                { buff: "Acesso a missões exclusivas semanais", type: "Conteúdo" },
                { buff: "Bônus de XP para membros da facção", type: "Progressão" },
                { buff: "Prioridade em eventos de Spice Blow", type: "Recursos" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm lg:text-base text-dune-cream/70">
                  <Badge variant="gold" size="sm">{item.type}</Badge>
                  <span>{item.buff}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="outlined" className="p-4">
            <h3 className="mb-3 text-sm font-bold text-dune-danger">
              DEBUFFS DA FACÇÃO PERDEDORA
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { debuff: "-10% de eficiência em produção", type: "Econômico" },
                { debuff: "+10% de custo em vendedores", type: "Financeiro" },
                { debuff: "Perda de acesso a áreas exclusivas", type: "Conteúdo" },
                { debuff: "Redução de multiplicadores de influência", type: "Político" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm lg:text-base text-dune-cream/70">
                  <Badge variant="danger" size="sm">{item.type}</Badge>
                  <span>{item.debuff}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <WarningBox text="Os debuffs da facção perdedora são reais e impactantes. Se você está na facção que perde consistentemente, considere se a luta vale a pena ou se trocar de lado seria mais estratégico. Pragmatismo é uma virtude em Arrakis." />
      </section>
    </MainContent>
  );
}
