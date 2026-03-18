import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DiamondDivider } from "@/components/ui/DiamondDivider";
import { images } from "@/data/images";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";

interface FactionData {
  name: string;
  badge: "gold" | "blue" | "orange" | "purple" | "danger" | "neutral";
  motto: string;
  subtitle: string;
  overview: string;
  history: string;
  loreQuote: string;
  loreSource: string;
  characteristics: { label: string; value: string }[];
  keyFigures: { name: string; role: string; description: string }[];
  inGame: string;
  gameTip: string;
  image: string;
}

const factions: Record<string, FactionData> = {
  atreides: {
    name: "Casa Atreides",
    badge: "blue",
    motto: "Honra, diplomacia e justiça",
    image: images.factions.atreides,
    subtitle:
      "A Casa Atreides é conhecida por sua honra, liderança justa e habilidade diplomática. Governantes respeitados que conquistam lealdade através de justiça ao invés de medo.",
    overview:
      "A Casa Atreides de Caladan é uma das Grandes Casas mais respeitadas do Landsraad. Seus governantes são conhecidos pela integridade, honra militar e capacidade diplomática. Em Arrakis, os Atreides buscam governar com justiça, ganhando o respeito (e potencialmente a lealdade) dos habitantes locais. Seu exército, embora menor que o dos Harkonnen, é composto por soldados leais e bem treinados.",
    history:
      "A Casa Atreides tem raízes antigas, traçando sua linhagem até Agamenon da Grécia Antiga da Terra. Por gerações, governaram Caladan, um planeta oceânico rico em agricultura e pesca. Quando o Imperador transferiu o controle de Arrakis dos Harkonnen para os Atreides, muitos viram como uma armadilha -- e estavam certos. Nesta linha temporal, sem Paul como líder, a Casa Atreides luta para manter sua posição em Arrakis contra a pressão constante dos Harkonnen e a manipulação imperial.",
    loreQuote:
      "O segredo do governo Atreides: não é o poder que faz o líder, mas a capacidade de servir aqueles que lidera. Um Duke que não sangra por seu povo não merece sua lealdade.",
    loreSource: "Filosofia da Casa Atreides",
    characteristics: [
      { label: "Hub", value: "Arrakeen" },
      { label: "Planeta natal", value: "Caladan" },
      { label: "Estilo de governo", value: "Aristocracia benevolente" },
      { label: "Força militar", value: "Exército leal, menor mas disciplinado" },
      { label: "Especialização", value: "Diplomacia, honra, liderança" },
      { label: "Alinhamento", value: "Ordem e justiça" },
    ],
    keyFigures: [
      {
        name: "Duke Leto Atreides",
        role: "Líder da Casa",
        description:
          "Líder carismático e justo, Leto é respeitado por aliados e temido por inimigos não por crueldade, mas por sua determinação inabalável. Nesta linha temporal, sem o filho Paul, Leto enfrenta sozinho os desafios de governar Arrakis.",
      },
      {
        name: "Lady Jessica",
        role: "Concubina Bene Gesserit",
        description:
          "Bene Gesserit treinada que, nesta versão da história, seguiu as ordens da Irmandade e gerou uma filha. Sua lealdade dividida entre a Casa Atreides e a Bene Gesserit cria tensões políticas únicas.",
      },
      {
        name: "Gurney Halleck",
        role: "Mestre de Armas",
        description:
          "Guerreiro e poeta, Gurney é o mestre de armas dos Atreides. Ferozmente leal ao Duke Leto, ele treina os soldados Atreides e é um dos melhores espadachins do Imperium.",
      },
    ],
    inGame:
      "Alinhar-se com os Atreides oferece acesso a Arrakeen como hub principal, missões focadas em diplomacia e ordem, e equipamentos que enfatizam honra e disciplina. Soldados Atreides são aliados confiáveis e as missões tendem a focar em proteção, diplomacia e exploração pacífica. A reputação com os Atreides desbloqueia vendedores exclusivos em Arrakeen e missões de alto nível focadas em estabilizar a região.",
    gameTip:
      "Reputação com os Atreides é mais fácil de conseguir cedo no jogo, já que Arrakeen é a primeira cidade que você visita. Complete missões de patrulha e proteção para subir reputação rapidamente.",
  },
  harkonnen: {
    name: "Casa Harkonnen",
    badge: "danger",
    motto: "Poder, dominação e indústria",
    image: images.factions.harkonnen,
    subtitle:
      "A Casa Harkonnen é temida por sua brutalidade, ambição insaciável e eficiência industrial impiedosa. Onde os Atreides inspiram lealdade, os Harkonnen inspiram medo.",
    overview:
      "A Casa Harkonnen de Giedi Prime é o oposto dos Atreides em quase todos os aspectos. Governados pela ambição e pela crueldade, os Harkonnen veem Arrakis como nada mais do que uma mina de Spice a ser explorada até a última gota. Seu exército é massivo, equipado com a melhor tecnologia que o dinheiro pode comprar, e seus métodos incluem assassinato, suborno e terror como ferramentas políticas legítimas.",
    history:
      "Os Harkonnen controlaram Arrakis por décadas antes de serem forçados a ceder o planeta aos Atreides por ordem imperial. Sua exploração brutal do planeta e de seu povo deixou cicatrizes profundas. Nesta linha temporal, sem a ameaça de Paul Muad'Dib, os Harkonnen continuam suas operações de sabotagem e espionagem, buscando retomar o controle total da produção de Spice. Seu assentamento em Harko Village serve como base de operações para minar a autoridade Atreides.",
    loreQuote:
      "O poder não pede permissão. O poder não se justifica. O poder simplesmente é. E aqueles que o possuem moldam o universo à sua imagem.",
    loreSource: "Baron Vladimir Harkonnen",
    characteristics: [
      { label: "Hub", value: "Harko Village" },
      { label: "Planeta natal", value: "Giedi Prime" },
      { label: "Estilo de governo", value: "Tirania industrial" },
      { label: "Força militar", value: "Exército massivo, tecnologicamente superior" },
      { label: "Especialização", value: "Indústria, espionagem, força bruta" },
      { label: "Alinhamento", value: "Poder e lucro" },
    ],
    keyFigures: [
      {
        name: "Baron Vladimir Harkonnen",
        role: "Líder da Casa",
        description:
          "O Baron é um gênio político sádico e maquiavélico. Apesar de seu corpo debilitado (ele precisa de suspensores anti-gravitacionais para se mover), sua mente é afiada como uma crysknife. Ele orquestra a destruição dos Atreides nas sombras.",
      },
      {
        name: "Glossu 'Besta' Rabban",
        role: "Governador de Arrakis",
        description:
          "Sobrinho do Baron e governador bruto de Arrakis durante a ocupação Harkonnen. Conhecido por sua crueldade excessiva, Rabban governa pelo medo e pela violência. Sua administração é eficiente mas odiada.",
      },
      {
        name: "Feyd-Rautha Harkonnen",
        role: "Herdeiro",
        description:
          "Sobrinho mais novo do Baron, treinado para ser o herdeiro perfeito. Mais sutil e carismático que Rabban, Feyd-Rautha é um duelista habilidoso e político astuto que o Baron prepara para eventualmente governar Arrakis.",
      },
    ],
    inGame:
      "Alinhar-se com os Harkonnen oferece acesso ao mercado negro de Harko Village, missões de sabotagem, espionagem e combate direto. Os Harkonnen recompensam eficiência e resultados, não importa os métodos. Equipamentos Harkonnen tendem a ser mais brutais e poderosos, focados em dano máximo. A reputação alta desbloqueia contratos de assassinato e missões de sabotagem contra os Atreides.",
    gameTip:
      "O mercado negro de Harko Village vende itens raros que não estão disponíveis em Arrakeen. A rotação de itens muda semanalmente, então verifique regularmente. Alguns dos melhores blueprints de armas do jogo aparecem aqui.",
  },
  fremen: {
    name: "Fremen",
    badge: "gold",
    motto: "Sobrevivência, deserto e liberdade",
    image: images.factions.mysticalFigure,
    subtitle:
      "Os Fremen são o povo nativo de Arrakis, mestres absolutos da sobrevivência no deserto. Nesta linha temporal, eles desapareceram misteriosamente, mas seus vestígios permanecem.",
    overview:
      "Os Fremen são o povo do deserto, nascidos e criados nas condições mais hostis do universo conhecido. Sua cultura gira em torno da conservação de água (tão sagrada que até os mortos são destilados para recuperar a umidade), do respeito a Shai-Hulud (os sandworms) e da crença no Lisan al-Gaib, um messias que os libertaria. Nesta linha temporal alternativa de Dune Awakening, sem Paul Atreides, a profecia nunca se cumpriu.",
    history:
      "Os Fremen habitaram Arrakis por milênios, desenvolvendo uma cultura única de sobrevivência no deserto. Eles dominaram a arte de cavalgar sandworms, criaram os stillsuits mais eficientes já construídos e mantinham uma rede secreta de sietches (cavernas habitáveis) espalhados por todo o deserto. Porém, nesta linha temporal, sem um líder unificador, os Fremen gradualmente se fragmentaram. Alguns dizem que se retiraram para o deserto mais profundo; outros acreditam que deixaram Arrakis. O que resta são seus sietches abandonados, sua tecnologia perdida e lendas sussurradas nas areias.",
    loreQuote:
      "Deus criou Arrakis para treinar os fiéis. Não se pode desviar do caminho de Deus quando não há outro caminho. O deserto é o professor, e nós somos seus alunos eternos.",
    loreSource: "Sabedoria Fremen Ancestral",
    characteristics: [
      { label: "Hub", value: "Sietches abandonados (espalhados)" },
      { label: "Planeta natal", value: "Arrakis" },
      { label: "Status", value: "Desaparecidos nesta linha temporal" },
      { label: "Especialização", value: "Sobrevivência no deserto, sandworm riding" },
      { label: "Tecnologia", value: "Stillsuits, crysknives, thumpers" },
      { label: "Crença", value: "Lisan al-Gaib, Shai-Hulud" },
    ],
    keyFigures: [
      {
        name: "Stilgar",
        role: "Naib (líder) de Sietch Tabr",
        description:
          "Líder do sietch mais famoso de Arrakis. Nesta linha temporal, sem Paul para liderar a unificação Fremen, Stilgar tentou manter seu povo unido mas eventualmente desapareceu junto com os demais. Rumores dizem que ele ainda vive, escondido no deserto profundo.",
      },
      {
        name: "Chani",
        role: "Guerreira Fremen",
        description:
          "Filha de Liet-Kynes, Chani era uma das guerreiras mais habilidosas dos Fremen. Sem Paul, seu destino nesta linha temporal é desconhecido. Alguns jogadores relatam encontrar vestígios de sua passagem em sietches abandonados.",
      },
      {
        name: "Liet-Kynes",
        role: "Planetologista Imperial / Fremen",
        description:
          "Planetologista que sonhava em transformar Arrakis num paraíso verde. Seu conhecimento ecológico era incomparável. Seus laboratórios e notas de pesquisa podem ser encontrados espalhados pelo deserto, contendo informações valiosas.",
      },
    ],
    inGame:
      "Os Fremen não são uma facção ativa com a qual você interage diretamente como as Grandes Casas. Em vez disso, você descobre seus vestígios: sietches abandonados com loot raro, tecnologia Fremen perdida (os melhores stillsuits do jogo), e fragmentos de história que revelam o que aconteceu com eles. A reputação Fremen é construída encontrando artefatos e completando quebra-cabeças em seus sietches.",
    gameTip:
      "Os sietches Fremen contêm os blueprints do Stillsuit de Mestre (85% de recuperação de água), a melhor versão do jogo. Explorar cavernas e formações rochosas no Deep Desert é a forma de encontrá-los. Preste atenção em marcações Fremen nas paredes -- elas indicam a proximidade de um sietch.",
  },
  "bene-gesserit": {
    name: "Bene Gesserit",
    badge: "purple",
    motto: "Controle, manipulação e visão",
    image: images.factions.mysticalFigure,
    subtitle:
      "A Irmandade Bene Gesserit é uma organização secreta de mulheres com poderes sobre-humanos de controle do corpo e da mente. Elas manipulam a política do Imperium há milênios, trabalhando nas sombras.",
    overview:
      "A Bene Gesserit é uma ordem antiga dedicada ao desenvolvimento do potencial humano através de treinamento físico e mental extremo. Suas habilidades incluem o prana-bindu (controle total do corpo), A Voz (controle mental através de comandos vocais), Truthsaying (detecção infalível de mentiras) e programas de reprodução genética que duram milênios. Em Arrakis, a Bene Gesserit opera nas sombras, manipulando tanto Atreides quanto Harkonnen para seus próprios fins.",
    history:
      "A Irmandade Bene Gesserit existe há milênios, operando como uma ordem semi-religiosa focada no aprimoramento humano. Seu objetivo máximo é a criação do Kwisatz Haderach -- um ser humano com poderes mentais que transcendem gênero e tempo. Lady Jessica, concubina do Duke Leto, era uma Bene Gesserit que, nesta linha temporal, obedeceu às ordens da Irmandade e gerou uma filha ao invés de um filho. Essa decisão alterou o curso da história: o Kwisatz Haderach não nasceu, e a Irmandade continua buscando sua criação através de outros meios.",
    loreQuote:
      "Não devo temer. O medo é o assassino da mente. O medo é a pequena morte que traz a obliteração total. Enfrentarei meu medo. Permitirei que passe sobre mim e através de mim.",
    loreSource: "Litania Contra o Medo - Bene Gesserit",
    characteristics: [
      { label: "Hub", value: "Presença em Arrakeen e Harko (secreta)" },
      { label: "Sede", value: "Planeta Wallach IX (Escola Madre)" },
      { label: "Estilo", value: "Manipulação nas sombras" },
      { label: "Habilidades", value: "A Voz, Prana-Bindu, Truthsaying" },
      { label: "Objetivo", value: "Kwisatz Haderach, controle genético" },
      { label: "Alinhamento", value: "Interesse próprio acima de tudo" },
    ],
    keyFigures: [
      {
        name: "Reverenda Madre Gaius Helen Mohiam",
        role: "Truthsayer Imperial",
        description:
          "Uma das Bene Gesserit mais poderosas, Mohiam serve como Truthsayer (detectora de mentiras) do Imperador. Sua influência política é enorme, e ela usa suas habilidades para guiar decisões imperiais a favor da Irmandade.",
      },
      {
        name: "Lady Jessica",
        role: "Bene Gesserit / Casa Atreides",
        description:
          "Jessica vive dividida entre seu treinamento Bene Gesserit e seu amor pela Casa Atreides. Nesta linha temporal, ela obedeceu a Irmandade, mas sua lealdade ao Duke Leto cria conflitos internos que jogadores podem explorar em missões.",
      },
      {
        name: "A Escola Madre",
        role: "Liderança coletiva",
        description:
          "O conselho de Reverendas Madres que governa a Irmandade. Suas decisões afetam a política de todo o Imperium. Em Arrakis, seus agentes operam secretamente em ambas as cidades.",
      },
    ],
    inGame:
      "A Bene Gesserit opera como uma facção oculta. Suas missões envolvem espionagem, manipulação política e descobertas de segredos. A reputação com a Bene Gesserit desbloqueia habilidades cross-class únicas baseadas no treinamento Bene Gesserit (independente da sua classe), além de acesso a informações exclusivas sobre o mundo do jogo. Seus vendedores secretos oferecem itens únicos focados em controle mental e sobrevivência.",
    gameTip:
      "A Bene Gesserit oferece habilidades cross-class aprendidas via NPCs especiais. Mesmo que você não seja da classe Bene Gesserit, pode aprender versões menores de habilidades como Truthsaying (detectar mentiras de NPCs) e técnicas básicas de prana-bindu. Busque agentes da Irmandade em ambas as cidades.",
  },
};

export function FactionDetail() {
  const { factionId } = useParams<{ factionId: string }>();
  const faction = factionId ? factions[factionId] : undefined;

  const { setCards } = useReference();

  useEffect(() => {
    if (!faction || !factionId) {
      setCards([]);
      return;
    }

    const cards: ReferenceCard[] = [
      {
        id: `faction-${factionId}-lore`,
        type: "lore",
        title: faction.name,
        content: faction.loreQuote,
      },
      {
        id: `faction-${factionId}-tip`,
        type: "tip",
        title: "",
        content: faction.gameTip,
      },
    ];
    setCards(cards);
    return () => setCards([]);
  }, [faction, factionId, setCards]);

  if (!faction) {
    return (
      <MainContent>
        <div className="py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-dune-cream">
            Facção não encontrada
          </h1>
          <p className="mb-6 text-dune-cream-muted">
            A facção que você procura não existe ou ainda não foi documentada.
          </p>
          <Link
            to="/lore"
            className="inline-flex items-center gap-2 text-sm text-dune-gold hover:text-dune-gold/80"
          >
            <ArrowLeft size={14} />
            Voltar para Lore
          </Link>
        </div>
      </MainContent>
    );
  }

  return (
    <MainContent>
      <PageHeader title={faction.name.toUpperCase()} subtitle={faction.subtitle} heroImage={faction.image} />

      <div className="mb-6">
        <Badge variant={faction.badge} size="md">"{faction.motto}"</Badge>
      </div>

      {/* Overview */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">VISÃO GERAL</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            {faction.overview}
          </p>
        </Card>
      </section>

      <DiamondDivider />

      {/* Characteristics */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">CARACTERÍSTICAS</h2>
        </div>

        <Card variant="outlined" className="p-5">
          <div className="grid gap-2 sm:grid-cols-2">
            {faction.characteristics.map((char) => (
              <div key={char.label} className="flex items-center gap-3 rounded-lg bg-dune-brown-light/20 px-3 py-2">
                <span className="text-xs font-semibold text-dune-gold min-w-[100px]">
                  {char.label}
                </span>
                <span className="text-sm lg:text-base text-dune-cream/70">{char.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <DiamondDivider />

      {/* History */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">HISTÓRIA</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            {faction.history}
          </p>
        </Card>
      </section>

      <DiamondDivider />

      {/* Key Figures */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">FIGURAS IMPORTANTES</h2>
        </div>

        <div className="space-y-3">
          {faction.keyFigures.map((figure) => (
            <Card key={figure.name} variant="outlined" className="p-4">
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-sm font-bold text-dune-cream">{figure.name}</h3>
                <Badge variant={faction.badge} size="sm">{figure.role}</Badge>
              </div>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                {figure.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <DiamondDivider />

      {/* In Game */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">NO JOGO</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="text-sm lg:text-base leading-relaxed text-dune-cream/85">
            {faction.inGame}
          </p>
        </Card>

      </section>
    </MainContent>
  );
}
