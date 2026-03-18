import type { ProgressionPhase } from "../types";
import { images } from "../images";

export const midGame: ProgressionPhase = {
  id: "mid-game",
  title: "Meio do Jogo",
  subtitle:
    "Ornithopters, spice, e a fronteira do Deep Desert. As coisas ficam sérias.",
  levelRange: [50, 100],
  summary:
    "O mid game é onde Dune Awakening realmente abre. Ornithopters mudam completamente seu gameplay, spice se torna central, e você começa a se preparar para o endgame no Deep Desert.",
  heroImage: images.hero.highRes4k_1,
  blocks: [
    {
      type: "heading",
      content: "O Salto: Ornithopter",
      level: 2,
    },
    {
      type: "text",
      content:
        "Se você seguiu o guia do early game, já tem uma Sandbike. Agora é hora do upgrade mais transformador do jogo: o Ornithopter. Voar muda TUDO — elimina 90% dos perigos do deserto, permite acesso a locais inacessíveis, e torna a colheita de spice viável.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "vehicles",
      contextNote:
        "O Ornithopter Scout (variante rápida) deve ser sua prioridade #1 do mid game. O investimento em materiais é alto, mas o retorno é incomparável. Você literalmente salta de jogador terrestre para jogador aéreo.",
    },
    {
      type: "pro-tip",
      title: "Sempre Estacione em Rocha",
      text: "Ornithopters estacionados na areia podem ser destruídos por sandworms. SEMPRE estacione em terreno rochoso ou em plataformas elevadas. Perder um ornithopter é uma das maiores perdas materiais possíveis.",
    },
    {
      type: "pro-tip",
      title: "Vehicle Backup Tool: Salve Seu Ornithopter",
      text: "A Vehicle Backup Tool permite que você salve uma cópia do estado atual do seu veículo. Se ele for destruído, você pode restaurá-lo sem precisar craftar do zero. É um investimento essencial — especialmente para ornithopters, que são caros de produzir. Sempre faça backup antes de entrar em zonas perigosas.",
    },
    {
      type: "resource-table",
      title: "Materiais para Ornithopter Scout Mk1",
      resources: [
        { name: "Steel Bars", quantity: 80 },
        { name: "Aluminum Sheets", quantity: 40 },
        { name: "Fibra Sintética", quantity: 60 },
        { name: "Advanced Servoks", quantity: 4 },
        { name: "Tech Components", quantity: 20 },
      ],
    },
    {
      type: "image",
      imageUrl: images.vehicles.ornithopterFlight,
      caption: "Ornithopter em voo sobre o deserto de Arrakis",
      attribution: "Funcom",
    },

    {
      type: "heading",
      content: "Spice: A Nova Moeda",
      level: 2,
    },
    {
      type: "text",
      content:
        "Com um ornithopter, a colheita de spice se torna prática. E spice é o recurso mais importante do mid e late game — usado como moeda de trade, material de crafting avançado, e chave para progressão.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "spice-harvesting",
      contextNote:
        "Agora que você tem ornithopter, a estratégia hit-and-run se torna viável: pousa, coleta 30-45 segundos, decola antes do worm. Pratique até ficar confortável — essa será sua principal fonte de renda.",
    },
    {
      type: "pro-tip",
      title: "Medium Refinery > Small Refinery",
      text: "Se você ainda está usando a Small Refinery (100:1), pare. Invista na Medium Refinery (75:1) o mais rápido possível. A diferença de 25% na eficiência de conversão é ENORME quando você está processando grandes quantidades de spice bruto.",
    },
    {
      type: "warning",
      title: "Spice Blows: Alto Risco, Alta Recompensa",
      text: "Spice Blows (gêiseres de spice) são visíveis de longe pela coluna dourada no céu. Geram MUITO spice, mas atraem jogadores e sandworms. Só vá com grupo e rota de fuga planejada. Jogadores solo em Spice Blows são alvos fáceis.",
    },
    {
      type: "image",
      imageUrl: images.spice.harvesting1,
      caption: "Colheita de spice no deserto — timing é tudo",
      attribution: "Funcom",
    },

    {
      type: "heading",
      content: "Refinarias e Processamento Avançado",
      level: 2,
    },
    {
      type: "text",
      content:
        "No mid game, suas estações de crafting precisam evoluir. Além das refinarias de spice, você precisa de estações especializadas para processar materiais mais complexos que alimentam receitas avançadas.",
    },
    {
      type: "pro-tip",
      title: "Chemical Refinery: Processando Químicos",
      text: "A Chemical Refinery é essencial no mid game. Ela processa materiais brutos em componentes químicos usados em receitas avançadas — explosivos, combustíveis, e reagentes para equipamentos tier 3+. Construa uma na sua base assim que possível.",
    },
    {
      type: "pro-tip",
      title: "Recycler: Não Jogue Nada Fora",
      text: "O Recycler permite desmontar equipamentos velhos e recuperar parte dos materiais. Ao invés de jogar fora armas e armaduras obsoletas, recicle-as. Isso é especialmente útil no mid game quando você está trocando de tier constantemente — cada material recuperado conta.",
    },
    {
      type: "pro-tip",
      title: "Blood Purifier: Sobrevivência Avançada",
      text: "O Blood Purifier é uma estação que processa líquidos corporais e substâncias tóxicas. Ele é importante para craftar itens médicos avançados e para lidar com efeitos de veneno e toxinas que ficam mais comuns em áreas de mid/late game.",
    },

    {
      type: "heading",
      content: "Base: Gerador e Fuel Cells",
      level: 2,
    },
    {
      type: "text",
      content:
        "No mid game, sua base precisa de energia. Estações de crafting avançadas, refinarias, e defesas consomem energia — e para isso você precisa de um Gerador.",
    },
    {
      type: "pro-tip",
      title: "Gerador + Fuel Cells = Base Funcional",
      text: "O Gerador é o coração da sua base no mid game. Ele funciona com Fuel Cells, que você precisa craftar ou encontrar regularmente. Sem energia, suas estações avançadas simplesmente não funcionam. Mantenha sempre um estoque de Fuel Cells — ficar sem energia no meio de um craft é frustrante e perigoso se você depende de defesas ativas.",
    },

    {
      type: "heading",
      content: "Combate Avançado e PvP",
      level: 2,
    },
    {
      type: "text",
      content:
        "No mid game, o combate fica mais complexo. Você encontra inimigos mais fortes, dungeons com mecânicas, e — se aventurar no Deep Desert — outros jogadores. É hora de refinar suas habilidades.",
    },
    {
      type: "pro-tip",
      title: "Class Trainer NPCs: Respec Grátis a Cada 48h",
      text: "NPCs Class Trainers espalhados pelo mundo permitem que você faça respec (redistribuir pontos de habilidade) GRATUITAMENTE a cada 48 horas. Isso significa que você pode experimentar builds diferentes sem custo. Aproveite para testar combinações e descobrir o que funciona melhor para seu estilo de jogo antes de se comprometer com uma build de endgame.",
    },
    {
      type: "pro-tip",
      title: "Cross-Class: Visite Mentores NPC",
      text: "Além dos Class Trainers, NPCs mentores ensinam habilidades de outras classes. Você pode equipar até 3 passivas cross-class. Isso permite combinações poderosas — ex: tanque do Swordmaster + cura do Planetologist + buff do Mentat.",
    },
    {
      type: "pro-tip",
      title: "PvP: Mobilidade > Dano",
      text: "Em PvP, jogadores que investem em habilidades de mobilidade (dash, teleport, salto) consistentemente vencem contra builds puras de dano. Se puder se mover melhor que o oponente, você controla o combate.",
    },
    {
      type: "lore-note",
      loreText:
        "A Bene Gesserit possui uma habilidade chamada 'A Voz' — uma técnica de controle vocal que força obediência instantânea. No jogo, isso se traduz em um stun AoE extremamente poderoso que pode virar combates em grupo inteiros. A classe Bene Gesserit tem a maior curva de aprendizado, mas nas mãos certas, é a mais impactante do jogo.",
      source: "Ordem Bene Gesserit",
    },
    {
      type: "image",
      imageUrl: images.combat.battle,
      caption: "Combate PvP no mid game — mobilidade é a chave",
      attribution: "Funcom",
    },

    {
      type: "heading",
      content: "Upgrade de Base e Economia",
      level: 2,
    },
    {
      type: "text",
      content:
        "Sua base do early game precisa de upgrades significativos. Estações de crafting avançadas, armazenamento expandido, e defesas se você está em servidor PvP.",
    },
    {
      type: "pro-tip",
      title: "Economia Inteligente",
      text: "Comece a participar do trade entre jogadores. Spice refinado é a moeda universal. Materiais raros de dungeon podem valer muito se você não precisa deles. O trade chat e os hubs (Arrakeen, Harko Village) são onde o comércio acontece.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "base-building",
      contextNote:
        "No mid game, expanda sua base com estações de crafting tier 2+, hangares para ornithopter, e escudo de base se estiver em PvP. Posicione a Large Refinery aqui — você vai processar muito spice.",
    },

    {
      type: "heading",
      content: "Level 70-100: Porta do Endgame",
      level: 2,
    },
    {
      type: "text",
      content:
        "A partir do level 70, você começa a ter acesso a conteúdo pré-endgame: dungeons desafiadoras, áreas de Hagga Basin de alto risco, e as primeiras incursões no Deep Desert. Sua preparação aqui determina o quão suave será a transição.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "landsraad-politics",
      contextNote:
        "Hora de se envolver com guilds e política. Os buffs semanais do Landsraad são significativos no endgame. Junte-se a uma guild ativa e comece a participar das votações.",
    },
    {
      type: "pro-tip",
      title: "Deep Desert: Reconhecimento Primeiro",
      text: "Antes de ir de vez ao Deep Desert, faça voos de reconhecimento com o ornithopter. Identifique zonas seguras, pontos de recurso, e bases de outros jogadores. Conhecimento do terreno é vantagem enorme em PvPvE.",
    },
    {
      type: "checklist",
      title: "Checklist: Pronto para o Endgame?",
      items: [
        "Level 90+",
        "Ornithopter Mk2 ou melhor",
        "Armadura tier 3+",
        "Armas de aço/alumínio",
        "Large Spice Refinery funcionando",
        "Chemical Refinery construída",
        "Gerador com estoque de Fuel Cells",
        "Vehicle Backup Tool usado no ornithopter",
        "Estoque de spice refinado",
        "Membro de uma guild ativa",
        "3 habilidades cross-class equipadas",
        "Respec testado no Class Trainer",
        "Disruptor Sidearm tier 2+",
        "Conhecimento básico de PvP",
        "Rota de reconhecimento do Deep Desert feita",
        "Banco cheio de Solari",
      ],
    },
    {
      type: "quick-ref",
      refLabel: "Guia completo de combate e PvP",
      refTarget: "/combate",
    },
    {
      type: "quick-ref",
      refLabel: "Mapa detalhado com POIs",
      refTarget: "/mapa",
    },
  ],
};
