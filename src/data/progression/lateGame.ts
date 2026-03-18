import type { ProgressionPhase } from "../types";
import { images } from "../images";

export const lateGame: ProgressionPhase = {
  id: "late-game",
  title: "Final do Jogo / Endgame",
  subtitle:
    "Deep Desert, política entre facções, e a luta pelo controle de Arrakis.",
  levelRange: [100, 200],
  summary:
    "O endgame de Dune Awakening é centrado no Deep Desert — uma zona massiva de PvPvE que reseta semanalmente com tempestades. Aqui, spice, política, e combate entre jogadores se fundem no conteúdo mais desafiador do jogo.",
  heroImage: images.hero.highRes4k_2,
  blocks: [
    {
      type: "heading",
      content: "Deep Desert: O Verdadeiro Arrakis",
      level: 2,
    },
    {
      type: "text",
      content:
        "O Deep Desert é uma zona de 500+ km² com 9 sub-zonas, comportando até 300 jogadores simultaneamente. Diferente de Hagga Basin, aqui é PvPvE — outros jogadores podem (e vão) te atacar. Tempestades semanais destroem TODAS as construções, resetando o mapa.",
    },
    {
      type: "warning",
      title: "Tudo é Temporário no Deep Desert",
      text: "Bases construídas no Deep Desert são destruídas toda semana pela tempestade de areia. Não invista materiais preciosos em construções aqui — builds minimalistas e funcionais são a estratégia correta. Sua base permanente deve ficar em Hagga Basin.",
    },

    {
      type: "heading",
      content: "Coriolis vs Tempestade de Areia: Entenda a Diferença",
      level: 2,
    },
    {
      type: "text",
      content:
        "No Deep Desert existem DOIS tipos de tempestade, e confundir os dois é um erro fatal. A tempestade de areia comum (sandstorm) é perigosa mas sobrevivível — causa dano gradual e reduz visibilidade. Já o Coriolis Storm é outra história completamente diferente.",
    },
    {
      type: "warning",
      title: "Coriolis Storm = Perde TUDO",
      text: "O Coriolis Storm é a tempestade semanal que reseta o Deep Desert. Se você estiver na zona quando ele chegar, você MORRE e perde TODO o seu inventário — sem exceção. Não é como morrer para um mob ou jogador onde você pode recuperar parte do loot. No Coriolis, TUDO se vai. Fique atento aos avisos no mapa e SAIA da zona antes que o Coriolis chegue. Não arrisque 'só mais uma viagem' — jogadores veteranos já perderam cargas inteiras de spice por ganância.",
    },
    {
      type: "pro-tip",
      title: "Tempestade de Areia Comum: Sobrevivível",
      text: "Tempestades de areia normais acontecem regularmente no Deep Desert. Elas reduzem visibilidade, causam dano ao longo do tempo e dificultam a navegação, mas são gerenciáveis com o equipamento certo: stillsuit de alto tier, abrigo temporário, ou simplesmente encontrar uma formação rochosa para se proteger. Use-as a seu favor — outros jogadores também ficam vulneráveis durante tempestades.",
    },
    {
      type: "pro-tip",
      title: "Tempestade Semanal (Coriolis) = Recomeço",
      text: "O Coriolis não é só destruição — ele também regenera recursos, muda a posição de pontos de interesse, e redistribui depósitos de spice. As primeiras horas após o Coriolis são um gold rush — todo mundo correndo para reivindicar os melhores spots. Estar preparado para essa corrida é uma vantagem enorme.",
    },
    {
      type: "lore-note",
      loreText:
        "As tempestades Coriolis de Arrakis são o fenômeno natural mais destrutivo do universo conhecido. Ventos de até 700 km/h carregam areia abrasiva capaz de desgastar aço em minutos. Os Fremen — nativos do deserto — aprenderam a prever e sobreviver essas tempestades ao longo de gerações. No jogo, o Coriolis representa o ciclo de renovação que mantém o endgame dinâmico.",
      source: "Ecologia de Arrakis",
    },
    {
      type: "image",
      imageUrl: images.map.deepDesert,
      caption: "O Deep Desert — 500+ km² de território hostil e disputado",
      attribution: "Fextralife Wiki",
    },

    {
      type: "heading",
      content: "Mecânicas de Morte no Endgame",
      level: 2,
    },
    {
      type: "text",
      content:
        "No endgame, morrer tem consequências muito mais graves do que no early game. Entender as diferentes formas de morte e suas penalidades é crucial para não perder horas de progresso.",
    },
    {
      type: "pro-tip",
      title: "Tipos de Morte e Consequências",
      text: "Morte para PvE (mobs, queda, desidratação): você perde parte do inventário e respawna na base mais próxima. Morte para PvP: o jogador que te matou pode saquear seu inventário. Morte por sandworm: perde TUDO que está carregando, sem exceção. Morte por Coriolis Storm: perde absolutamente TUDO, inventário completo. A regra de ouro: quanto mais perigosa a zona, menos itens valiosos você carrega.",
    },
    {
      type: "warning",
      title: "Nunca Carregue Tudo no Deep Desert",
      text: "Antes de entrar no Deep Desert, deposite tudo que não é essencial na sua base em Hagga Basin. Leve apenas o equipamento necessário, consumíveis, e espaço vazio para loot. Se morrer, a perda é minimizada. Jogadores experientes usam 'loadouts descartáveis' — equipamentos bons o suficiente para funcionar, mas baratos o suficiente para perder sem dor.",
    },

    {
      type: "heading",
      content: "PvP Sério",
      level: 2,
    },
    {
      type: "text",
      content:
        "No Deep Desert, PvP não é opcional — é o estado natural. Outros jogadores vão contestar spots de spice, raidar suas estruturas, e emboscar rotas de transporte. Preparação e estratégia são tudo.",
    },
    {
      type: "pro-tip",
      title: "Nunca Ande Sozinho",
      text: "Solo play no Deep Desert é viável para reconhecimento e hit-and-run de spice, mas qualquer atividade séria (construção de base, farm prolongado, dungeons) deve ser feita com sua guild. Força numérica é a melhor defesa.",
    },
    {
      type: "pro-tip",
      title: "Build de PvP: O Meta Atual",
      text: "Swordmaster com passivas de Mentat (buff de velocidade) e Bene Gesserit (debuff de esquiva) é a build PvP mais consistente. A Voz (stun AoE da Bene Gesserit) como cross-class skill é game-changer em combates de grupo.",
    },
    {
      type: "pro-tip",
      title: "Ornithopter de Combate",
      text: "No endgame, o Ornithopter variante Combat se torna essencial para combate aéreo e suporte terrestre. Invista em upgrade para Mk3+ — a diferença de armamento e blindagem é significativa.",
    },
    {
      type: "image",
      imageUrl: images.combat.battle,
      caption: "Batalha no Deep Desert — coordenação de guild é essencial",
      attribution: "Funcom",
    },

    {
      type: "heading",
      content: "Economia de Endgame",
      level: 2,
    },
    {
      type: "text",
      content:
        "Spice refinado é rei. Toda a economia gira em torno dele — trade, crafting de tier 5 (Plastanium), blueprints raros, e upgrades de veículo. Montar uma operação eficiente de colheita e refino é tão importante quanto habilidade em combate.",
    },
    {
      type: "pro-tip",
      title: "Large Refinery: Obrigatório",
      text: "Se você ainda não tem a Large Spice Refinery (50:1), isso é prioridade absoluta. A diferença de 100:1 (Small) para 50:1 (Large) significa que você precisa coletar METADE do spice bruto para o mesmo resultado. Em semanas de farm, isso são horas economizadas.",
    },
    {
      type: "pro-tip",
      title: "Materiais Raros de Dungeon",
      text: "Advanced Servoks, Micro-sandwich Fabric, Particle Capacitors, e Plasteel Composites são drops exclusivos de dungeons de endgame. Eles são bind-on-pickup, então você PRECISA fazer as dungeons pessoalmente. Forme grupos específicos para farm de dungeon.",
    },
    {
      type: "resource-table",
      title: "Materiais de Endgame (Tier 5)",
      resources: [
        { name: "Plastanium", quantity: 0, tier: 5 },
        { name: "Advanced Servoks", quantity: 0, tier: 5 },
        { name: "Micro-sandwich Fabric", quantity: 0, tier: 5 },
        { name: "Particle Capacitors", quantity: 0, tier: 5 },
        { name: "Plasteel Composites", quantity: 0, tier: 5 },
      ],
    },
    {
      type: "image",
      imageUrl: images.spice.harvesting2,
      caption:
        "Operação de colheita de spice em larga escala — a base da economia de endgame",
      attribution: "Funcom",
    },

    {
      type: "heading",
      content: "Landsraad e Guerra Política",
      level: 2,
    },
    {
      type: "text",
      content:
        "O endgame político é tão importante quanto o militar. Guilds coordenam votações no Landsraad, declaram Wars of Assassins, e lutam pelo controle de recursos estratégicos. Isso é o que dá longevidade ao jogo.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "landsraad-politics",
      contextNote:
        "No endgame, o Landsraad deixa de ser opcional e se torna central. Os buffs semanais podem ser a diferença entre sua guild dominar ou ser dominada. Participar ativamente da política é tão importante quanto farm e PvP.",
    },
    {
      type: "pro-tip",
      title: "War of Assassins: Calcule Antes",
      text: "Declarar guerra é caro e as penalidades por perder são severas. Nunca declare guerra sem ter certeza da sua vantagem numérica e de equipamento. Uma guerra perdida pode atrasar sua guild semanas.",
    },
    {
      type: "lore-note",
      loreText:
        "O Landsraad é o grande conselho das Casas Nobres do Império — a instituição política mais importante do universo Dune. Decisões do Landsraad podem mudar o destino de planetas inteiros. No Kanly (código de honra entre as Casas), a War of Assassins é uma forma 'civilizada' de resolver disputas — com regras estritas mas consequências mortais. O jogo traduz essa política complexa em mecânicas de votação e guerra entre guilds.",
      source: "Política Imperial",
    },

    {
      type: "heading",
      content: "Nível 150-200: Maestria",
      level: 2,
    },
    {
      type: "text",
      content:
        "Os últimos 50 níveis são sobre otimização e maestria. Você já sabe jogar — agora é sobre jogar melhor que todos. Builds perfeitos, economia otimizada, e liderança política.",
    },
    {
      type: "pro-tip",
      title: "Especialização de Guild",
      text: "Guilds de sucesso no endgame têm membros especializados: farmers de spice, PvPers dedicados, diplomatas para o Landsraad, e crafters que fornecem equipamento para o grupo. Encontre seu nicho e seja o melhor nele.",
    },
    {
      type: "pro-tip",
      title: "O Jogo Nunca 'Acaba'",
      text: "Mesmo no level 200, o reset semanal do Deep Desert (via Coriolis Storm) garante que sempre haja objetivos. Cada semana é um novo ciclo de corrida por território, recursos, e poder político. O verdadeiro endgame é a jornada, não o destino.",
    },
    {
      type: "checklist",
      title: "Objetivos de Endgame",
      items: [
        "Ornithopter Combat Mk4+",
        "Armadura Plastanium completa",
        "Armas tier 5 com mods",
        "Guild de 20+ membros ativos",
        "Participação ativa no Landsraad",
        "Operação de spice farm eficiente",
        "Pelo menos 1 War of Assassins vencida",
        "Dominar pelo menos 1 zona do Deep Desert por semana",
        "Sobreviver e evacuar antes do Coriolis Storm consistentemente",
        "Level 200",
        "Todas as 5 classes desbloqueadas e experimentadas",
      ],
    },
    {
      type: "quick-ref",
      refLabel: "Guia completo do Landsraad",
      refTarget: "/landsraad",
    },
    {
      type: "quick-ref",
      refLabel: "Pro Tips avançados",
      refTarget: "/pro-tips",
    },
  ],
};
