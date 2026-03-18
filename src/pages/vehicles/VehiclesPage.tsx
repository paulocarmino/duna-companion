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

const vehicles = [
  {
    name: "Sandbike",
    type: "Terrestre",
    badge: "neutral" as const,
    description:
      "O veículo mais básico e acessível de Arrakis. Uma moto adaptada para deslizar sobre a areia com um sistema de propulsão por jato de ar comprimido. Rápida, ágil e econômica, mas sem proteção alguma para o piloto. Ideal para deslocamentos rápidos entre a base e pontos de coleta próximos.",
    pros: ["Barato de craftar", "Alta velocidade", "Ágil em terreno arenoso", "Baixo custo de combustível"],
    cons: ["Zero proteção", "Sem espaço de carga", "Frágil, destruída facilmente", "1 passageiro apenas"],
    craftTier: "Early Game",
  },
  {
    name: "Sand Crawler",
    type: "Terrestre",
    badge: "blue" as const,
    description:
      "Veículo blindado sobre esteiras projetado para travessias longas no deserto. Mais lento que o Sandbike mas muito mais resistente e com espaço de carga significativo. Usado para expedições de coleta onde você precisa transportar grandes quantidades de recursos de volta à base.",
    pros: ["Boa capacidade de carga", "Blindagem moderada", "Estável em tempestades", "2-3 passageiros"],
    cons: ["Lento", "Caro de manter", "Alvo fácil para PvP", "Atrai sandworms por vibração"],
    craftTier: "Mid Game",
  },
  {
    name: "Dune Buggy",
    type: "Terrestre",
    badge: "orange" as const,
    description:
      "Veículo leve e rápido com espaço para um artilheiro. Combina velocidade com capacidade de combate limitada. A torreta montada permite que um passageiro atire enquanto o motorista dirige, tornando-o eficaz para patrulhas e perseguições no Deep Desert.",
    pros: ["Rápido e manobrável", "Torreta para passageiro", "Bom para patrulhas", "2 passageiros"],
    cons: ["Blindagem leve", "Carga limitada", "Combustível drena rápido em alta velocidade", "Torreta tem ângulo limitado"],
    craftTier: "Mid Game",
  },
  {
    name: "Harvester",
    type: "Industrial",
    badge: "gold" as const,
    description:
      "O veículo industrial por excelência de Arrakis. Projetado exclusivamente para coleta de Spice em larga escala. Enorme, lento e caro, mas capaz de coletar quantidades massivas de Spice Bruto em Spice Blows. Requer proteção constante contra sandworms e jogadores rivais.",
    pros: ["Coleta massiva de Spice", "Capacidade de carga enorme", "Processamento parcial a bordo", "Essencial para guilds"],
    cons: ["Extremamente lento", "Alvo principal em PvP", "Atrai sandworms garantido", "Custo de craft altíssimo"],
    craftTier: "Late Game",
  },
  {
    name: "Transport Vessel",
    type: "Terrestre Pesado",
    badge: "purple" as const,
    description:
      "Veículo de transporte de tropas e equipamento. Pode carregar um esquadrão inteiro (até 6 jogadores) além de carga significativa. Blindagem pesada e espaço para múltiplas torretas defensivas. Usado em operações de grande escala e raids organizados no Deep Desert.",
    pros: ["Até 6 passageiros", "Blindagem pesada", "Múltiplas torretas", "Grande capacidade de carga"],
    cons: ["Muito lento", "Consome muito combustível", "Requer equipe para operar eficientemente", "Custo de manutenção alto"],
    craftTier: "Late Game",
  },
  {
    name: "Ornithopter",
    type: "Aéreo",
    badge: "gold" as const,
    description:
      "A joia da engenharia de transporte no universo Dune. Uma aeronave com asas articuladas que imita o voo de insetos, capaz de voar sobre o deserto ignorando sandworms e terreno. O Ornithopter muda completamente o jogo, oferecendo mobilidade tridimensional que nenhum veículo terrestre pode igualar.",
    pros: ["Voa sobre sandworms e terreno", "Velocidade máxima do jogo", "Acesso a áreas inacessíveis", "Revoluciona exploração"],
    cons: ["Extremamente caro de craftar", "Combustível raro e caro", "Vulnerável a ataques anti-aéreo", "Manutenção constante"],
    craftTier: "End Game",
  },
];

const ornithopterVariants = [
  {
    name: "Scout Ornithopter",
    badge: "blue" as const,
    seats: "1-2",
    description: "Variante leve e rápida focada em reconhecimento. Menor consumo de combustível e maior velocidade máxima. Sem armamento. Ideal para scouting de áreas no Deep Desert antes de enviar o grupo principal.",
    specialty: "Velocidade máxima, stealth",
  },
  {
    name: "Transport Ornithopter",
    badge: "gold" as const,
    seats: "4-6",
    description: "Variante de transporte com espaço para equipe completa e carga moderada. Mais lento que o Scout mas capaz de transportar um grupo inteiro sobre o deserto. Ideal para operações de grupo e evacuações rápidas.",
    specialty: "Capacidade de passageiros, carga",
  },
  {
    name: "Combat Ornithopter",
    badge: "danger" as const,
    seats: "2",
    description: "Variante armada com lasers montados e capacidade de bombardeio leve. Piloto e artilheiro. A arma aérea mais poderosa do jogo, mas também a mais cara de operar. Muda o balanço de poder em conflitos de grande escala.",
    specialty: "Armamento aéreo, bombardeio",
  },
];

const cards: ReferenceCard[] = [
  {
    id: "vehicles-tip-mk6",
    type: "tip",
    title: "Não invista em Mk6 cedo demais",
    content: "Não invista em Mk6 cedo demais. Um Sandbike Mk3 custa uma fração do preço de um Mk6 e faz o trabalho perfeitamente para o mid game. Reserve materiais Tier 5 e 6 para veículos de endgame como o Ornithopter.",
  },
  {
    id: "vehicles-tip-sandbike",
    type: "tip",
    title: "Sandbike: melhor custo-benefício do jogo",
    content: "O Sandbike Mk3 é provavelmente o veículo com melhor custo-benefício do jogo inteiro. Barato de craftar, rápido o suficiente para fugir da maioria dos perigos e fácil de substituir se destruído. Use para todas as expedições de rotina.",
  },
  {
    id: "vehicles-tip-crawler",
    type: "tip",
    title: "Sand Crawler: o veículo de farming",
    content: "Para expedições de coleta de recursos em larga escala, o Sand Crawler é imbatível. Sua capacidade de carga permite uma única viagem produtiva ao invés de múltiplas viagens com Sandbike. Leve um parceiro para vigiar enquanto você coleta.",
  },
  {
    id: "vehicles-tip-harvester",
    type: "tip",
    title: "Harvester: nunca vá sozinho",
    content: "O Harvester é lento e barulhento, atraindo sandworms e jogadores hostis. Sempre opere com pelo menos 2-3 jogadores de escolta. Um na vigília, outro em Dune Buggy para interceptação, e você operando o Harvester.",
  },
  {
    id: "vehicles-tip-ornithopter",
    type: "tip",
    title: "Ornithopter: combustível é vida",
    content: "Nunca decole sem combustível suficiente para a ida E a volta, mais 30% de reserva. Ficar sem combustível no ar resulta em crash, destruição do veículo e provável morte. Calcule suas rotas antes de decolar.",
  },
  {
    id: "vehicles-tip-backup-tool",
    type: "tip",
    title: "Vehicle Backup Tool",
    content: "Sempre guarde seus veículos na Vehicle Backup Tool antes de sair do jogo ou entrar em áreas perigosas. Se você desconectar com o veículo fora, ele pode ser destruído por tempestades ou outros jogadores. Prevenir é melhor que craftar tudo de novo.",
  },
  {
    id: "vehicles-ref-fuel-cells",
    type: "reference",
    title: "Fuel Cells",
    content: "Fuel Cells são craftadas na Chemical Refinery e também podem ser obtidas via loot. Cada veículo consome a taxas diferentes — veículos maiores gastam muito mais. Sempre carregue extras para não ficar parado no meio do deserto.",
  },
  {
    id: "vehicles-tip-welding-torch",
    type: "tip",
    title: "Welding Torch",
    content: "A Welding Torch é sua ferramenta de reparo em campo. Sempre carregue uma junto com Wire quando sair com veículos. Reparos em campo podem salvar seu veículo de ser destruído completamente, especialmente longe da base.",
  },
  {
    id: "vehicles-ref-permissions",
    type: "reference",
    title: "Permissões de Veículo",
    content: "O sistema de permissões tem três níveis: Owner (controle total), Co-Owner (pode dirigir e modificar) e Associate (passageiro apenas). Configure corretamente para gameplay em grupo e evite que estranhos roubem seu veículo.",
  },
  {
    id: "vehicles-lore-ornithopter",
    type: "lore",
    title: "Ornithopter na Lore",
    content: "Na lore de Dune, os Ornithopters possuem asas articuladas que imitam o movimento de insetos — uma tecnologia de engenharia pré-Jihad Butleriana. Após a proibição de máquinas pensantes, os Ornithopters se tornaram o principal meio de transporte aéreo no Imperium.",
  },
];

export function VehiclesPage() {
  const { setCards } = useReference();

  useEffect(() => {
    setCards(cards);
    return () => setCards([]);
  }, [setCards]);

  return (
    <MainContent>
      <PageHeader
        title="VEÍCULOS"
        subtitle="De sandbikes básicas a ornithopters que dominam os céus de Arrakis, veículos são essenciais para explorar, coletar recursos e sobreviver nas vastas distâncias do deserto. Cada veículo tem seu papel e momento certo de uso."
        heroImage={images.vehicles.ornithopterFlight}
      />

      {/* Vehicle Backup Tool */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">VEHICLE BACKUP TOOL</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            A Vehicle Backup Tool é uma ferramenta essencial que armazena e deploia seus veículos de forma segura. Funciona como um "cofre portátil" para o seu veículo — você guarda nela e pode retirar quando precisar. Este é um dos itens mais importantes do jogo para qualquer jogador que possua veículos.
          </p>

          <div className="space-y-2">
            {[
              { label: "Armazenamento seguro", desc: "Guarda o veículo em formato portátil, protegendo-o de tempestades de areia e outros jogadores." },
              { label: "Proteção contra tempestades", desc: "Tempestades podem destruir veículos deixados no mundo. A Backup Tool é a única proteção garantida." },
              { label: "Essencial ao desconectar", desc: "Sempre guarde seu veículo antes de sair do jogo. Veículos deixados no mundo ficam vulneráveis enquanto você está offline." },
              { label: "Áreas perigosas", desc: "Antes de entrar em zonas de PvP ou áreas com sandworms, guarde o veículo. É mais fácil caminhar de volta do que craftar um novo." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg bg-dune-brown-light/20 px-3 py-2.5">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-dune-gold" />
                <div>
                  <span className="text-sm font-semibold text-dune-cream">{item.label}: </span>
                  <span className="text-sm lg:text-base text-dune-cream/70">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <WarningBox text="Nunca desconecte do jogo com seu veículo fora da Backup Tool. Tempestades de areia e jogadores hostis podem destruí-lo enquanto você está offline. Perder um veículo de endgame como o Ornithopter por descuido é devastador." />
      </section>

      <DiamondDivider />

      {/* Vehicle List */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">TODOS OS VEÍCULOS</h2>
        </div>

        <div className="space-y-4">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.name} variant="outlined" className="p-5">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-base font-bold text-dune-cream">{vehicle.name}</h3>
                <Badge variant={vehicle.badge}>{vehicle.type}</Badge>
                <Badge variant="neutral" size="sm">{vehicle.craftTier}</Badge>
              </div>
              <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
                {vehicle.description}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-xs font-semibold tracking-wider text-green-400/80">VANTAGENS</h4>
                  <ul className="space-y-1">
                    {vehicle.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm lg:text-base text-dune-cream/70">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-green-400/60" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-semibold tracking-wider text-dune-danger/80">DESVANTAGENS</h4>
                  <ul className="space-y-1">
                    {vehicle.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm lg:text-base text-dune-cream/70">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-dune-danger/60" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <ImageCard src={images.vehicles.sandbike} caption="Sandbike: seu primeiro veículo no deserto" />
      </section>

      <DiamondDivider />

      {/* Combustível e Fuel Cells */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">COMBUSTÍVEL E FUEL CELLS</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Todos os veículos em Dune Awakening precisam de Fuel Cells para funcionar. Sem combustível, seu veículo é apenas um pedaço de metal caro parado no deserto. Gerenciar seu estoque de Fuel Cells é tão importante quanto manter o veículo em boas condições.
          </p>

          <div className="space-y-2">
            {[
              { label: "Crafting", desc: "Fuel Cells são craftadas na Chemical Refinery usando recursos químicos. Aprenda a receita cedo e mantenha produção constante." },
              { label: "Loot", desc: "Também podem ser obtidas via loot em pontos de interesse, caixas de suprimento e inimigos derrotados. Porém, depender só de loot é arriscado." },
              { label: "Consumo variável", desc: "Diferentes veículos consomem Fuel Cells em taxas diferentes. Uma Sandbike gasta muito menos que um Ornithopter ou Harvester." },
              { label: "Carregue extras", desc: "Sempre leve Fuel Cells extras em expedições longas. Ficar sem combustível no Deep Desert pode significar perder o veículo e a vida." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg bg-dune-brown-light/20 px-3 py-2.5">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-dune-gold" />
                <div>
                  <span className="text-sm font-semibold text-dune-cream">{item.label}: </span>
                  <span className="text-sm lg:text-base text-dune-cream/70">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <DiamondDivider />

      {/* Sistema de Permissões */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">SISTEMA DE PERMISSÕES</h2>
        </div>

        <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream-muted">
          Veículos possuem um sistema de permissões que determina quem pode interagir com eles e de que forma. Configurar permissões corretamente é fundamental para gameplay em grupo e para proteger seus veículos de uso indevido.
        </p>

        <div className="space-y-3">
          {[
            {
              role: "Owner",
              badge: "gold" as const,
              desc: "Controle total do veículo. Pode dirigir, modificar, reparar, guardar na Backup Tool e alterar permissões de outros jogadores. Apenas o criador do veículo é o Owner.",
            },
            {
              role: "Co-Owner",
              badge: "blue" as const,
              desc: "Pode dirigir o veículo e realizar modificações. Não pode alterar permissões nem guardar na Backup Tool do Owner. Ideal para membros de confiança do seu grupo.",
            },
            {
              role: "Associate",
              badge: "neutral" as const,
              desc: "Pode usar o veículo como passageiro e operar torretas, mas não pode dirigir nem modificar. Útil para dar carona a aliados sem arriscar o controle do veículo.",
            },
          ].map((perm) => (
            <Card key={perm.role} variant="outlined" className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={perm.badge} size="md">{perm.role}</Badge>
              </div>
              <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">{perm.desc}</p>
            </Card>
          ))}
        </div>

        <WarningBox text="Cuidado ao dar permissão de Co-Owner para jogadores que você não conhece bem. Um Co-Owner pode dirigir seu veículo para longe ou colocá-lo em situações perigosas. Use Associate para jogadores casuais." />
      </section>

      <DiamondDivider />

      {/* Reparo de Veículos */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">REPARO DE VEÍCULOS</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Veículos sofrem dano ao longo do uso e precisam ser reparados regularmente. O sistema de durabilidade dos veículos funciona da mesma forma que equipamentos: a barra de durabilidade muda de cor conforme o estado do veículo, indicando a urgência do reparo.
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="mb-2 text-xs font-semibold tracking-wider text-dune-gold/80">REPARO EM CAMPO</h4>
              <div className="space-y-2">
                {[
                  "Welding Torch + Wire são os itens necessários para reparos em campo.",
                  "Reparos em campo restauram durabilidade parcialmente — não substituem reparos completos.",
                  "Sempre carregue Welding Torch e Wire quando sair com veículos para expedições longas.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-lg bg-dune-brown-light/20 px-3 py-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dune-gold/60" />
                    <span className="text-sm lg:text-base text-dune-cream/70">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-xs font-semibold tracking-wider text-dune-gold/80">REPAIR STATION NA BASE</h4>
              <div className="space-y-2">
                {[
                  "A Repair Station na sua base realiza reparos completos, restaurando toda a durabilidade.",
                  "Requer materiais específicos dependendo do veículo e do nível de dano.",
                  "Sempre repare completamente antes de expedições longas ao Deep Desert.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-lg bg-dune-brown-light/20 px-3 py-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dune-gold/60" />
                    <span className="text-sm lg:text-base text-dune-cream/70">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-xs font-semibold tracking-wider text-dune-gold/80">INDICADORES DE DURABILIDADE</h4>
              <div className="space-y-2">
                {[
                  { color: "text-yellow-400", label: "Amarelo", desc: "Durabilidade moderada — veículo funcional mas precisa de atenção em breve." },
                  { color: "text-gray-400", label: "Cinza", desc: "Durabilidade baixa — desempenho reduzido, repare o mais rápido possível." },
                  { color: "text-red-400", label: "Vermelho", desc: "Durabilidade crítica — veículo prestes a ser destruído. Pare e repare imediatamente." },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg bg-dune-brown-light/20 px-3 py-2.5">
                    <span className={`text-sm font-bold ${item.color}`}>{item.label}</span>
                    <span className="text-sm lg:text-base text-dune-cream/70">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      <DiamondDivider />

      {/* Mk Progression */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">PROGRESSÃO MK1 A MK6</h2>
        </div>

        <Card variant="strong" className="p-5">
          <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream/85">
            Cada veículo pode ser craftado em diferentes níveis de qualidade, de Mk1 (básico) a Mk6 (máximo). O nível Mk afeta velocidade, durabilidade, capacidade de carga e eficiência de combustível. Subir de Mk requer materiais progressivamente mais raros.
          </p>

          <div className="space-y-2">
            {[
              { mk: "Mk1", desc: "Versão básica. Materiais comuns. Funcional mas sem extras.", color: "text-gray-400" },
              { mk: "Mk2", desc: "+15% velocidade, +10% durabilidade. Materiais de Tier 2.", color: "text-gray-300" },
              { mk: "Mk3", desc: "+30% velocidade, +25% durabilidade, capacidade de carga extra. Tier 3.", color: "text-blue-300" },
              { mk: "Mk4", desc: "+45% velocidade, +40% durabilidade, sistemas extras. Tier 4.", color: "text-purple-300" },
              { mk: "Mk5", desc: "+60% velocidade, +60% durabilidade, eficiência de combustível. Tier 5.", color: "text-orange-300" },
              { mk: "Mk6", desc: "Máximo. +80% tudo. Materiais Tier 6 + componentes raros do Deep Desert.", color: "text-dune-gold" },
            ].map((item) => (
              <div key={item.mk} className="flex items-center gap-3 rounded-lg bg-dune-brown-light/20 px-3 py-2.5">
                <span className={`text-sm font-bold ${item.color}`}>{item.mk}</span>
                <span className="text-sm lg:text-base text-dune-cream/70">{item.desc}</span>
              </div>
            ))}
          </div>
        </Card>

        <ImageCard src={images.vehicles.ornithopterDesert} caption="Ornithopter sobrevoando o deserto de Arrakis" />
      </section>

      <DiamondDivider />

      {/* Ornithopter Variants */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">VARIANTES DE ORNITHOPTER</h2>
        </div>

        <p className="mb-4 text-sm lg:text-base leading-relaxed text-dune-cream-muted">
          O Ornithopter possui três variantes especializadas. Cada uma serve um propósito diferente e requer blueprints específicos para craftar. Os blueprints são obtidos através de missões de endgame, reputação com facções ou loot raro no Deep Desert.
        </p>

        <div className="space-y-3">
          {ornithopterVariants.map((variant) => (
            <Card key={variant.name} variant="outlined" className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant={variant.badge} size="md">{variant.name}</Badge>
                </div>
                <span className="text-sm lg:text-base text-dune-cream-muted">{variant.seats} assentos</span>
              </div>
              <p className="mb-2 text-sm lg:text-base leading-relaxed text-dune-cream/70">{variant.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm lg:text-base text-dune-cream-muted">Especialidade:</span>
                <Badge variant="gold" size="sm">{variant.specialty}</Badge>
              </div>
            </Card>
          ))}
        </div>

        <WarningBox text="Ornithopters são os veículos mais valiosos e caros do jogo. Perder um no Deep Desert (destruído por jogadores ou crash) é uma perda enorme. Nunca voe no Deep Desert sem scouting prévio e sempre tenha uma rota de fuga planejada." />

        <ImageCard src={images.vehicles.combatVehicles} caption="Veículos de combate" />
      </section>

      <DiamondDivider />

      {/* Vehicle Tips */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">DICAS PARA VEÍCULOS</h2>
        </div>

      </section>
    </MainContent>
  );
}
