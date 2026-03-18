import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DiamondDivider } from "@/components/ui/DiamondDivider";
import { ImageCard } from "@/components/content/ImageCard";
import { images } from "@/data/images";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";

export function LoreOverview() {
  const { setCards } = useReference();

  useEffect(() => {
    const cards: ReferenceCard[] = [
      {
        id: "lore-alt-timeline",
        type: "lore",
        title: "Linha Temporal Alternativa",
        content: "Sem Paul Atreides para cumprir a profecia Fremen do Lisan al-Gaib, o povo do deserto permaneceu fragmentado. Seus sietches foram gradualmente abandonados, e os Fremen se tornaram uma lenda sussurrada nas areias.",
      },
      {
        id: "lore-butlerian",
        type: "lore",
        title: "Jihad Butleriana",
        content: "Tu não farás uma máquina à semelhança de uma mente humana. -- Mandamento primeiro da Bíblia Católica Laranja, estabelecida após a Jihad Butleriana.",
      },
      {
        id: "lore-spice",
        type: "lore",
        title: "A Spice Melange",
        content: "Quem controla a Spice, controla o universo. A Spice Melange é encontrada em apenas um lugar no universo conhecido: o planeta deserto de Arrakis.",
      },
    ];
    setCards(cards);
    return () => setCards([]);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="LORE & FACÇÕES"
        subtitle="Dune Awakening se passa numa linha temporal alternativa do universo criado por Frank Herbert. Entender a história, as facções e a ecologia de Arrakis enriquece profundamente a experiência de jogo e ajuda a compreender as motivações por trás de cada sistema do jogo."
        heroImage={images.hero.keyArt}
      />

      {/* Alternate Timeline */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">A LINHA TEMPORAL ALTERNATIVA</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Em Dune Awakening, a história diverge dos livros num ponto crucial: Paul Atreides nunca nasceu. Lady Jessica, seguindo as ordens da Bene Gesserit, gerou uma filha ao invés de um filho. Sem Paul, não houve o Muad'Dib, não houve a ascensão Fremen, e o equilíbrio de poder em Arrakis permaneceu nas mãos das Grandes Casas e do Imperador.
          </p>
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Esta mudança tem consequências profundas para o mundo do jogo. Os Fremen nunca se unificaram sob um líder messiânico e, misteriosamente, desapareceram do cenário político. As Grandes Casas continuam disputando o controle de Arrakis e da produção de Spice, e o Imperador mantém seu domínio através de manipulação política e força militar.
          </p>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Você, como jogador, entra neste conflito como um agente independente, escolhendo seu caminho entre as facções que disputam o recurso mais valioso do universo.
          </p>
        </Card>

      </section>

      <DiamondDivider />

      {/* Jihad Butleriana */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">A JIHAD BUTLERIANA</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Milhares de anos antes dos eventos de Dune Awakening, a humanidade travou uma guerra devastadora contra as máquinas pensantes -- computadores e inteligências artificiais que haviam escravizado a espécie humana. Essa guerra, conhecida como Jihad Butleriana, resultou na destruição completa de todas as máquinas pensantes e na proibição absoluta de recriá-las.
          </p>
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            O mandamento supremo que surgiu dessa guerra diz: "Não construirás uma máquina à semelhança da mente humana." Esta proibição moldou toda a civilização do Imperium. Sem computadores, a humanidade desenvolveu alternativas humanas: Mentats (computadores vivos), a Guilda Espacial (navegadores que usam Spice para dobrar o espaço) e a Bene Gesserit (mestras do corpo e da mente).
          </p>
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            No jogo, esta história explica por que não existem robots, IAs ou tecnologia digital. Toda "tecnologia" que você encontra é mecânica, química ou biológica. Os Mentats existem porque computadores não podem.
          </p>
        </Card>

      </section>

      <DiamondDivider />

      {/* The Spice */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">A SPICE MELANGE</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            A Spice Melange é a substância mais valiosa do universo conhecido. Encontrada apenas em Arrakis, ela é o motivo pelo qual todas as facções lutam pelo controle do planeta. Sem Spice, a civilização intergaláctica colapsa.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-gold/5 border border-dune-gold/15 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">Propriedades da Spice</h4>
              <ul className="space-y-1 text-sm lg:text-base text-dune-cream/70">
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Prolonga a vida humana significativamente</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Amplia a consciência e capacidades mentais</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Permite a Navegação Espacial pela Guilda (dobrar o espaço)</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Potencializa as habilidades da Bene Gesserit</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Aumenta a capacidade de cálculo dos Mentats</li>
                <li className="flex gap-2"><span className="shrink-0 text-dune-gold">--</span> Altamente viciante -- abstinência pode ser fatal</li>
              </ul>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">No jogo</h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Spice é a moeda de troca suprema e recurso de crafting essencial. Você coleta Spice Bruto no deserto (especialmente em Spice Blows), refina em Spice Melange utilizável e usa para crafting avançado, consumo (buffs temporários), comércio com outros jogadores e pagamento de taxas imperiais.
              </p>
            </div>
          </div>
        </Card>

        <ImageCard src={images.spice.harvestingWiki} caption="Colheita de Spice Melange" />
      </section>

      <DiamondDivider />

      {/* Sandworms */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">OS SANDWORMS E A ECOLOGIA DE ARRAKIS</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Os sandworms, chamados de Shai-Hulud pelos Fremen, são as criaturas mais impressionantes de Arrakis. Alguns exemplares ultrapassam 400 metros de comprimento. Eles são, na verdade, parte fundamental do ciclo de produção da Spice -- sem sandworms, não haveria Melange.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">O Ciclo da Spice</h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Sandtrout (larvas de sandworm) encapsulam água no subsolo, criando bolsões de pré-Spice. A pressão e temperatura eventualmente causam uma explosão (Spice Blow), ejetando Spice Bruto para a superfície. Os sandworms adultos se alimentam dos subprodutos desse processo. Sem worms, o ciclo para e a produção de Spice cessa.
              </p>
            </div>

            <div className="rounded-lg bg-dune-brown-light/20 p-3">
              <h4 className="mb-1 text-sm font-semibold text-dune-gold">Comportamento</h4>
              <p className="text-sm lg:text-base text-dune-cream/70">
                Sandworms são territoriais e atraídos por vibrações rítmicas e campos elétricos (escudos Holtzman). Eles não podem penetrar rocha sólida, o que explica por que assentamentos humanos em Arrakis são construídos sobre formações rochosas. Os Fremen aprenderam a cavalgar sandworms usando Maker Hooks para abrir os segmentos de sua pele.
              </p>
            </div>
          </div>
        </Card>

        <ImageCard src={images.sandworms.wikiWorm} caption="Shai-Hulud — o Grande Verme de Arrakis" />
      </section>

      <DiamondDivider />

      {/* Faction Links */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">AS GRANDES FACÇÕES</h2>
        </div>

        <p className="mb-4 text-sm lg:text-base text-dune-cream-muted">
          Arrakis é disputada por facções poderosas, cada uma com seus próprios objetivos, métodos e visão para o futuro do planeta. Clique em cada facção para saber mais.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              id: "atreides",
              name: "Casa Atreides",
              badge: "blue" as const,
              motto: "Honra, diplomacia e justiça",
              description: "Governantes justos conhecidos por sua honra militar e diplomacia. Hub: Arrakeen.",
            },
            {
              id: "harkonnen",
              name: "Casa Harkonnen",
              badge: "danger" as const,
              motto: "Poder, dominação e indústria",
              description: "Senhores implacáveis movidos por ambição e crueldade industrial. Hub: Harko Village.",
            },
            {
              id: "fremen",
              name: "Fremen",
              badge: "gold" as const,
              motto: "Sobrevivência, deserto e liberdade",
              description: "Nativos do deserto, desaparecidos nesta linha temporal. Mestres da sobrevivência.",
            },
            {
              id: "bene-gesserit",
              name: "Bene Gesserit",
              badge: "purple" as const,
              motto: "Controle, manipulação e visão",
              description: "Irmandade secreta que manipula a política do Imperium há milênios.",
            },
          ].map((faction) => (
            <Link key={faction.id} to={`/lore/${faction.id}`}>
              <Card hover className="p-4 h-full">
                <Badge variant={faction.badge} size="md">{faction.name}</Badge>
                <p className="mt-1 text-sm lg:text-base italic text-dune-cream-muted">
                  "{faction.motto}"
                </p>
                <p className="mt-2 text-sm lg:text-base leading-relaxed text-dune-cream/70">
                  {faction.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>

        <ImageCard src={images.map.environment} caption="A paisagem implacável de Arrakis" />
      </section>
    </MainContent>
  );
}
