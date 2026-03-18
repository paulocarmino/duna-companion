import type { ProgressionPhase } from "../types";
import { images } from "../images";

export const earlyGame: ProgressionPhase = {
  id: "early-game",
  title: "Início do Jogo",
  subtitle:
    "Seus primeiros passos em Arrakis. Sobreviva, aprenda, e prepare-se para o deserto.",
  levelRange: [1, 50],
  summary:
    "O início de Dune Awakening é sobre aprender a sobreviver. Água, calor, e criaturas hostis vão testar você desde o primeiro minuto. Foque em crafting básico, escolha de classe, e estabelecer uma base segura.",
  heroImage: images.hero.desertVista,
  blocks: [
    {
      type: "heading",
      content: "Criação de Personagem e Escolha de Classe",
      level: 2,
    },
    {
      type: "text",
      content:
        "Ao criar seu personagem, você terá que escolher uma classe inicial. Essa é a primeira decisão importante do jogo — e a maioria dos jogadores novos erra aqui.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "class-system",
      contextNote:
        "PARE e leia isso antes de escolher sua classe. Essa decisão afeta todo seu early game e pode te dar uma vantagem enorme se feita corretamente.",
    },
    {
      type: "pro-tip",
      title: "Não Escolha Trooper na Criação!",
      text: "A classe Trooper é desbloqueada GRATUITAMENTE durante a campanha principal. Se você escolher outra classe na criação (recomendamos Swordmaster), você sai da área tutorial com DUAS classes ao invés de uma. Isso te dá muito mais versatilidade no early game. Swordmaster + Trooper é uma combinação sólida pra quem está começando.",
    },
    {
      type: "lore-note",
      loreText:
        "No universo Dune, não existem computadores. Após a Jihad Butleriana — uma guerra contra as máquinas pensantes — toda forma de inteligência artificial foi proibida. Por isso, humanos treinados como Mentats (calculadores humanos) e Bene Gesserit (controle mental e corporal avançado) substituem funções que normalmente seriam de máquinas. Cada classe do jogo reflete um desses caminhos de treinamento humano elevado.",
      source: "Universo de Frank Herbert",
    },
    {
      type: "image",
      imageUrl: images.classes.characterPresets,
      caption:
        "Tela de criação de personagem — escolha sua classe com sabedoria",
      attribution: "Fextralife Wiki",
    },

    {
      type: "heading",
      content: "Cut Array: Sua Ferramenta Principal",
      level: 2,
    },
    {
      type: "text",
      content:
        "A Cut Array é a ferramenta de coleta mais importante do jogo. Com ela você corta arbustos, extrai minérios e coleta praticamente todo recurso do mundo. Sem ela, você não faz nada — então craftar sua primeira Cut Array é prioridade absoluta.",
    },
    {
      type: "pro-tip",
      title: "Power Packs: Ferramentas Precisam de Energia",
      text: "Todas as ferramentas elétricas (incluindo a Cut Array) precisam de Power Packs para funcionar. Power Packs são basicamente baterias — quando acabam, sua ferramenta para. Sempre carregue Power Packs extras. Você pode craftá-los na Survival Bench e também encontrá-los em contêineres pelo mundo.",
    },
    {
      type: "warning",
      title: "Sem Power Pack = Sem Coleta",
      text: "Se seus Power Packs acabarem no meio de uma expedição, você fica completamente impossibilitado de coletar recursos. Leve SEMPRE pelo menos 3-4 Power Packs extras antes de sair para explorar.",
    },

    {
      type: "heading",
      content: "Survey Probe: Revelando o Mapa",
      level: 2,
    },
    {
      type: "text",
      content:
        "A Survey Probe é uma ferramenta essencial que revela o fog of war no mapa. Ao usá-la, você descobre recursos, pontos de interesse e terreno ao redor da sua posição. Use-a constantemente enquanto explora para não perder nada importante.",
    },
    {
      type: "pro-tip",
      title: "Survey Probe em Terreno Elevado",
      text: "Use a Survey Probe em pontos altos (topos de penhascos, formações rochosas) para revelar uma área muito maior do mapa. Isso economiza probes e dá uma visão estratégica excelente da região.",
    },

    {
      type: "heading",
      content: "Primeiros Minutos: A Área Tutorial",
      level: 2,
    },
    {
      type: "text",
      content:
        "Você começa em uma área controlada e segura. Use esse tempo para aprender os controles, coleta básica, e o sistema de crafting. Não tenha pressa de sair — a área tutorial tem tudo que você precisa para os primeiros levels.",
    },
    {
      type: "text",
      content:
        "Procure e colete TUDO que encontrar: fibra vegetal de arbustos, pedras do chão, galhos. Fibra vegetal (Plant Fiber) é o recurso mais importante do early game — usada em praticamente todo crafting básico. Colha cada arbusto que ver.",
    },
    {
      type: "pro-tip",
      title: "Plant Fiber é Ouro",
      text: "Colha TODOS os arbustos. Plant Fiber é usada em stillsuits, bandagens, cordas, e dezenas de receitas básicas. Você nunca terá demais no early game. Sério, passar do lado de um arbusto sem colher é pecado.",
    },
    {
      type: "checklist",
      title: "Antes de Sair da Área Tutorial",
      items: [
        "Coletar pelo menos 100 Plant Fiber",
        "Craftar ferramentas básicas (picareta, machado)",
        "Cut Array craftada",
        "Power Pack equipado",
        "Survey Probe usado",
        "Craftar bandagens de emergência",
        "Aprender a usar a Survival Bench",
        "Completar todas as quests do tutorial",
        "Familiarizar-se com os controles de combate",
      ],
    },

    {
      type: "heading",
      content: "Sobrevivência 101: Água e Calor",
      level: 2,
    },
    {
      type: "text",
      content:
        "Assim que sair da área tutorial, a prioridade ABSOLUTA é água. Arrakis é implacável — a desidratação mata mais jogadores que qualquer monstro ou jogador inimigo. Antes de explorar, antes de lutar, antes de qualquer coisa: resolva sua água.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "water-management",
      contextNote:
        "Prioridade #1 ao sair do tutorial. Localize a fonte de água mais próxima e garanta suprimento antes de fazer QUALQUER outra coisa.",
    },
    {
      type: "pro-tip",
      title: "Líder John e as Flores para Água",
      text: "Procure o Líder John (Leader John) na região inicial. Ele ensina sobre as flores que podem ser processadas para extrair água. Flores são uma fonte renovável e acessível de água no early game — colete todas que encontrar e processe na estação adequada.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "heat-management",
      contextNote:
        "O calor trabalha junto com a desidratação. Explorar ao meio-dia consome água muito mais rápido. Planeje suas expedições para manhã e fim de tarde.",
    },
    {
      type: "warning",
      title: "O Deserto Não Perdoa",
      text: "Sem água + calor do meio-dia = morte em menos de 5 minutos. NUNCA saia para explorar sem pelo menos 2 cantis cheios e um plano de onde encontrar mais água.",
    },
    {
      type: "pro-tip",
      title: "Stillsuit: Seu Melhor Amigo",
      text: "O Stillsuit deve ser o PRIMEIRO item que você crafta na Survival Bench. Ele recicla a umidade do seu corpo e reduz drasticamente o consumo de água. Um stillsuit básico já muda completamente sua experiência de sobrevivência.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "stillsuit",
      contextNote:
        "Craft isso AGORA. Antes de armas, antes de armadura. O stillsuit é literalmente a diferença entre morrer em 5 minutos ou sobreviver 30+ minutos no deserto.",
    },
    {
      type: "image",
      imageUrl: images.classes.stillsuit,
      caption: "Jogador equipado com Stillsuit no deserto de Arrakis",
      attribution: "PC Gamer",
    },

    {
      type: "heading",
      content: "Seu Primeiro Crafting Sério",
      level: 2,
    },
    {
      type: "text",
      content:
        "Com água garantida e stillsuit equipado, agora você pode começar a pensar em equipamento de verdade. O sistema de crafting em Dune Awakening é profundo, mas no early game você só precisa entender o básico.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "crafting-system",
      contextNote:
        "Não precisa dominar tudo agora. Foque na Survival Bench e Weapons Bench. As outras estações ficam mais importantes no mid game.",
    },
    {
      type: "pro-tip",
      title: "Intel e Research: Desbloqueando Receitas",
      text: "O sistema de Intel/Research é como você desbloqueia novas receitas de crafting. Ao explorar, você encontra Intel Nodes (terminais de dados) que dão pontos de pesquisa. Use esses pontos na árvore de Research para liberar receitas melhores. Não ignore isso — sem pesquisa, você fica preso no crafting básico para sempre.",
    },
    {
      type: "resource-table",
      title: "Prioridades de Crafting (Early Game)",
      resources: [
        { name: "Stillsuit Básico", quantity: 1, tier: 1 },
        { name: "Cut Array", quantity: 1, tier: 1 },
        { name: "Picareta de Ferro", quantity: 1, tier: 2 },
        { name: "Espada/Adaga", quantity: 1, tier: 1 },
        { name: "Cantil Extra", quantity: 2, tier: 1 },
        { name: "Bandagens", quantity: 10, tier: 1 },
        { name: "Suspensor Module", quantity: 1, tier: 1 },
      ],
    },
    {
      type: "pro-tip",
      title: "Suspensor Module = Inventário Expandido",
      text: "O Suspensor Module aumenta sua capacidade de carga significativamente. Craft o quanto antes — carregar mais recursos por viagem economiza MUITO tempo. É um dos itens mais subestimados do early game.",
    },

    {
      type: "heading",
      content: "Combate no Early Game",
      level: 2,
    },
    {
      type: "text",
      content:
        "O combate em Dune Awakening é mais tático do que parece. Escudos mudam completamente a dinâmica — você não pode simplesmente atirar em tudo e esperar que morra. Entender como escudos funcionam é essencial desde o começo.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "shield-mechanics",
      contextNote:
        "Preste muita atenção nessa mecânica. Escudos são úteis mas MORTAIS no lugar errado. Usar escudo no deserto aberto atrai sandworms — e sandworms matam instantaneamente.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "combat-basics",
      contextNote:
        "No early game, foque em dominar o timing de ataques pesados (Slow Blade) e esquivas. Isso vai te carregar até o mid game.",
    },
    {
      type: "lore-note",
      loreText:
        "No universo Dune, a prevalência de escudos pessoais tornou armas de fogo quase obsoletas. A arte da luta com lâminas renasceu — combatentes treinam por anos para dominar a técnica do Slow Blade, um golpe deliberadamente lento que penetra o campo de força do escudo. É por isso que espadas e adagas são mais valiosas que rifles neste mundo.",
      source: "Tradição militar do Império",
    },
    {
      type: "warning",
      title: "Escudos + Deserto = Morte",
      text: "Repito: NUNCA use escudos no deserto aberto. A vibração do escudo atrai sandworms em 30-60 segundos. Use escudos apenas dentro de estruturas, cavernas ou terreno 100% rochoso.",
    },

    {
      type: "heading",
      content: "Sandworms: Respeite ou Morra",
      level: 2,
    },
    {
      type: "text",
      content:
        "Você provavelmente já ouviu falar dos sandworms. No jogo, eles são tudo que dizem e mais. São invencíveis, instantaneamente letais, e vão comer seu inventário inteiro quando te matarem. A boa notícia: são previsíveis se você souber o que fazer.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "sandworm-behavior",
      contextNote:
        "Esse é o conhecimento que separa jogadores que morrem toda hora de jogadores que exploram o deserto com confiança. Memorize o que atrai worms e o que é seguro.",
    },
    {
      type: "pro-tip",
      title: "Planeje Suas Rotas",
      text: "Antes de sair para explorar, olhe o mapa e trace uma rota que passe por terreno rochoso sempre que possível. Rochas são seus oásis de segurança no deserto — worms não penetram rocha. Se ouvir tremor, corra para a rocha mais próxima.",
    },
    {
      type: "image",
      imageUrl: images.sandworms.encounter,
      caption:
        "Encontro com um Sandworm — se você está vendo isso, já era tarde demais",
      attribution: "Funcom",
    },

    {
      type: "heading",
      content: "Estabelecendo Sua Primeira Base",
      level: 2,
    },
    {
      type: "text",
      content:
        "Por volta do level 10-15, você terá recursos suficientes para pensar em construir sua primeira base. Uma base bem posicionada muda completamente seu ritmo de jogo — ponto de respawn, armazenamento seguro, estações de crafting avançadas.",
    },
    {
      type: "warning",
      title: "Sua Primeira Base é TEMPORÁRIA",
      text: "Não invista demais na sua primeira base! Ela é um ponto de apoio inicial, não sua base definitiva. Conforme você progride e desbloqueia novos recursos e estações, você vai querer relocar. Construa o mínimo funcional: fundação, paredes, teto, porta, baú, e uma Survival Bench.",
    },
    {
      type: "pro-tip",
      title: "Construa Perto de Griffin Reach + Flores",
      text: "A localização ideal para sua primeira base é perto de Griffin Reach, numa área com flores. As flores são sua fonte principal de água no early game, e Griffin Reach oferece acesso a NPCs, quests e comércio. Terreno rochoso na região também protege contra worms.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "base-building",
      contextNote:
        "Não precisa ser elaborada no começo. Uma fundação, 4 paredes, teto, porta, baú de armazenamento, e uma Survival Bench já é o suficiente. Localização importa mais que tamanho.",
    },
    {
      type: "pro-tip",
      title: "Deposite Solari no Banco",
      text: "Ao morrer, você PERDE Solari (dinheiro) que estiver carregando. Sempre deposite no banco mais próximo (em cidades como Arrakeen ou Harko Village). Carregue apenas o necessário para a expedição atual.",
    },
    {
      type: "image",
      imageUrl: images.crafting.baseOverview,
      caption: "Exemplo de base construída em Hagga Basin",
      attribution: "Funcom",
    },

    {
      type: "heading",
      content: "Level 20-35: Expandindo Horizontes",
      level: 2,
    },
    {
      type: "text",
      content:
        "Com base estabelecida, stillsuit equipado, e habilidades básicas de combate, você está pronto para explorar mais. Essa fase é sobre descobrir Hagga Basin, completar missões, e começar a se preparar para veículos.",
    },
    {
      type: "text",
      content:
        "Intel Nodes são a melhor fonte de XP nessa faixa de level. São terminais espalhados pelo mundo que dão XP significativo ao interagir. Procure-os ativamente enquanto explora — eles estão marcados no mapa quando você se aproxima.",
    },
    {
      type: "pro-tip",
      title: "Intel Nodes = XP Rápido",
      text: "Intel Nodes dão mais XP por minuto investido do que qualquer outra atividade no early game. Enquanto explora, desvie da rota para pegar cada Intel Node que aparecer. Combine com quests da área para maximizar eficiência.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "resource-tiers",
      contextNote:
        "Nessa fase você começa a encontrar Ferro e Carbono. Pare de usar ferramentas de cobre e faça upgrade para ferro — a diferença de eficiência é enorme.",
    },

    {
      type: "heading",
      content: "Level 35-50: Preparação para o Mid Game",
      level: 2,
    },
    {
      type: "text",
      content:
        "Os últimos levels do early game são sobre se preparar para o salto de dificuldade que vem no mid game. Seu primeiro veículo, armas melhores, e começar a entender spice são as prioridades.",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "vehicles",
      contextNote:
        "A Sandbike Mk1 é seu primeiro objetivo de veículo. Ela transforma completamente seu ritmo de jogo — distâncias que levavam 10 minutos a pé levam 2 minutos de bike.",
    },
    {
      type: "image",
      imageUrl: images.vehicles.sandbikeLandscape,
      caption: "Sandbike atravessando o deserto — seu primeiro veículo muda tudo",
      attribution: "PC Gamer",
    },
    {
      type: "mechanic-spotlight",
      mechanicId: "spice-harvesting",
      contextNote:
        "Comece a prestar atenção em depósitos de spice que encontrar. No early game você não vai colher muito, mas entender onde aparece e como funciona te prepara pro mid game onde spice vira essencial.",
    },
    {
      type: "checklist",
      title: "Checklist: Pronto para o Mid Game?",
      items: [
        "Level 45+",
        "Stillsuit tier 2 ou melhor",
        "Cut Array craftada e com Power Packs extras",
        "Survey Probe usado para mapear a região",
        "Sandbike Mk1 craftada",
        "Ferramentas e armas de ferro/aço",
        "Base funcional com todas as estações básicas",
        "Pelo menos 2 classes desbloqueadas",
        "Entender mecânica de escudos e sandworms",
        "Solari depositado no banco regularmente",
        "Missões da área tutorial completas",
        "Disruptor Sidearm craftada",
      ],
    },
    {
      type: "pro-tip",
      title: "Journey System",
      text: "O jogo rastreia seu progresso em 5 arquétipos: Killer, Explorer, Survivor, Crafter, Socialite. Completar marcos em cada um dá recompensas únicas. Não precisa se especializar — diversificar dá boas recompensas.",
    },
    {
      type: "quick-ref",
      refLabel: "Ver todas as classes em detalhe",
      refTarget: "/classes",
    },
    {
      type: "quick-ref",
      refLabel: "Tabela completa de recursos e onde encontrar",
      refTarget: "/crafting",
    },
  ],
};
