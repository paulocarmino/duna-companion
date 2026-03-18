import type { Mechanic } from "./types";

export const mechanics: Record<string, Mechanic> = {
  "water-management": {
    id: "water-management",
    title: "Gerenciamento de Água",
    icon: "Droplets",
    category: "survival",
    summary:
      "A água é o recurso mais precioso de Arrakis. Sua barra de hidratação drena constantemente — mais rápido sob o sol e durante atividades físicas. O fluxo completo de obtenção é: flores no chão → Leader John (recipiente) → Dew Reaper (noturno, plantas azuis) → Blood Extractor → Blood Bags → Blood Purifier → água limpa. Água também é necessária para crafting (ferro e aço precisam de água!).",
    details: [
      "Seu personagem consome água automaticamente ao longo do tempo. A taxa de consumo aumenta com calor, corrida e combate. Um Stillsuit reduz a perda drasticamente ao reciclar o suor e a respiração do seu corpo.",
      "O fluxo básico de coleta de água começa com flores no chão que você espreme diretamente no Leader John (seu recipiente de água). Depois, à noite, use o Dew Reaper em plantas azuis brilhantes para coletar orvalho e encher o Leader John.",
      "No mid/late game, o Blood Extractor permite extrair sangue de inimigos derrotados, gerando Blood Bags. Esses Blood Bags são processados no Blood Purifier (estação de crafting) para produzir água limpa — extremamente eficiente para expedições longas.",
      "Além de hidratação, a água é ingrediente essencial em receitas de crafting! Ferro e aço precisam de água no processo de refino. Sempre mantenha reservas extras na base.",
      "Desidratação severa (menos de 20% de água) causa penalidades: -30% de HP máximo, -50% de stamina, visão embaçada. Em 0%, você começa a perder vida rapidamente.",
    ],
    tips: [
      "No early game, colete flores do chão e esprema no Leader John — é a fonte mais acessível",
      "Dew Reaper só funciona à noite em plantas azuis brilhantes — planeje suas noites para coleta de água",
      "Stillsuit é prioridade absoluta de crafting — reduz perda de água em 40-60%",
      "Guarde água extra na base para crafting — receitas de ferro e aço consomem água no refino",
      "No calor extremo do meio-dia, fique na sombra ou dentro de estruturas para reduzir consumo",
    ],
    warningText:
      "NUNCA saia para explorar o deserto sem água suficiente. A desidratação é a causa #1 de morte de jogadores novos.",
    relatedMechanics: ["stillsuit", "heat-management", "dew-reaper", "blood-extraction"],
  },

  "shield-mechanics": {
    id: "shield-mechanics",
    title: "Escudos Holtzman",
    icon: "Shield",
    category: "combat",
    summary:
      "Escudos pessoais bloqueiam ataques rápidos (projéteis, golpes rápidos) mas são penetrados por ataques lentos (Slow Blade). O detalhe crucial: escudos atraem sandworms quando ativados no deserto aberto.",
    details: [
      "O escudo Holtzman cria um campo de força que repele objetos em alta velocidade. Isso torna armas de fogo e ataques rápidos ineficazes contra alvos com escudo. Apenas golpes lentos e deliberados (a técnica Slow Blade) penetram o escudo.",
      "A Disruptor Sidearm é a única arma de projétil que consegue penetrar escudos. Ela dispara um pulso de baixa velocidade especificamente projetado para passar pela barreira Holtzman.",
      "Escudos têm uma barra de energia própria que se esgota ao absorver golpes. Quando a energia acaba, o escudo cai e precisa recarregar. Escudos mais avançados têm mais capacidade e recarregam mais rápido.",
      "IMPORTANTE: Escudos emitem uma vibração em frequência específica que atrai sandworms de grandes distâncias. Usar escudo no deserto aberto é praticamente suicídio — os worms podem aparecer em 30-60 segundos.",
    ],
    tips: [
      "Use escudos SOMENTE dentro de estruturas, cavernas ou em terreno rochoso onde worms não chegam",
      "Em PvP no deserto, jogadores experientes NÃO usam escudo — preferem mobilidade e esquiva",
      "A Disruptor Sidearm é essencial: única arma ranged que quebra escudo — craft o quanto antes",
      "Contra inimigos com escudo, use ataques carregados (hold attack) para ativar a mecânica Slow Blade",
      "No early game, seu escudo básico aguenta 3-4 golpes antes de cair — use com sabedoria",
    ],
    warningText:
      "NUNCA ative escudos no deserto aberto. Sandworms são atraídos instantaneamente e matam em um único golpe. Sem exceção.",
    relatedMechanics: ["sandworm-behavior", "combat-basics"],
  },

  "sandworm-behavior": {
    id: "sandworm-behavior",
    title: "Sandworms (Vermes da Areia)",
    icon: "Bug",
    category: "survival",
    summary:
      "Sandworms são criaturas colossais invencíveis que patrulham o deserto. São atraídos por vibrações, escudos e colheita de spice. Morte por sandworm resulta em perda TOTAL de inventário (igual à tempestade Coriolis) — sem recuperação de corpo.",
    details: [
      "Sandworms são as maiores criaturas de Arrakis — podem ter centenas de metros de comprimento. Eles se movem sob a areia e detectam vibrações na superfície. Quanto mais vibração você gera, mais rápido eles aparecem.",
      "Existem cerca de 10 sandworms em Hagga Basin (área PvE) e mais de 50 no Deep Desert (área PvPvE). Eles patrulham rotas semi-aleatórias e podem ser detectados pela trepidação do chão e som crescente.",
      "Atividades que atraem worms (do mais ao menos): ativação de escudo, colheita de spice com refinaria, veículos pesados em alta velocidade, corrida prolongada na areia, combate prolongado na areia.",
      "Terreno rochoso é seguro — worms não conseguem penetrar rocha. Quando ouvir o tremor se aproximando, corra para rochas, estruturas ou elevações.",
      "ATENÇÃO: Morte por sandworm = perda TOTAL do inventário, igual à tempestade Coriolis. Não existe recuperação de corpo. Isso é diferente de morte normal, onde você pode voltar e recuperar seus itens. Deposite itens valiosos no banco com frequência.",
    ],
    tips: [
      "Fique atento ao tremor no chão e ao som crescente — são os sinais de um worm se aproximando",
      "Ande, não corra, quando estiver em areia e quiser evitar atenção",
      "Terreno rochoso = zona segura. Planeje suas rotas passando por áreas rochosas",
      "Ao colher spice, sempre tenha um ornithopter (veículo voador) por perto para fuga rápida",
      "Nunca carregue tudo que tem — deposite Solari e itens raros no banco regularmente",
    ],
    warningText:
      "Sandworms são INVENCÍVEIS. Não tente lutar. A única opção é fugir para terreno rochoso ou voar para longe. Morte = perda total de inventário (sem recuperação de corpo).",
    relatedMechanics: ["shield-mechanics", "spice-harvesting", "coriolis-storms"],
  },

  "spice-harvesting": {
    id: "spice-harvesting",
    title: "Colheita de Spice (Melange)",
    icon: "Sparkles",
    category: "crafting",
    summary:
      "Spice (melange) é a substância mais valiosa do universo. Pode ser encontrada em blocos pelo deserto e refinada em quantidades úteis. É usada como moeda universal no endgame, mas sua colheita atrai sandworms.",
    details: [
      "Spice aparece em depósitos pelo deserto — manchas alaranjadas/douradas na areia. Você pode coletar spice bruto diretamente, mas precisa refinar em uma refinaria para torná-lo utilizável.",
      "Existem 3 tiers de refinaria: Pequena (100:1 ratio de conversão — 100 spice bruto para 1 refinado), Média (75:1), e Grande (50:1). O investimento em refinarias melhores compensa rapidamente.",
      "Spice Blows são eventos especiais onde um gêiser de spice erupta do solo, gerando uma grande quantidade de spice bruto em uma área. Esses eventos são visíveis de longe (coluna dourada no céu) e atraem tanto jogadores quanto worms.",
      "A estratégia mais eficiente de colheita é hit-and-run com ornithopter: pousa, coleta spice bruto rapidamente, decola antes do worm chegar. Repita em vários pontos.",
      "No endgame, spice refinado é a moeda universal para trade entre jogadores, compra de blueprints raros, e crafting de equipamentos top tier.",
    ],
    tips: [
      "Não desperdice spice bruto numa Small Refinery se puder esperar pela Medium — a diferença de eficiência é enorme",
      "Spice Blows são ótimos para farm mas extremamente perigosos — vá com grupo e veículo de fuga",
      "Ornithopter hit-and-run: pousa > coleta 30-45s > decola. Não fique mais que 1 minuto no chão",
      "Guarde spice refinado no banco — é a moeda mais importante do endgame",
      "No Deep Desert, locais de spice são contestados (PvP) — esteja preparado para luta ou fuga",
    ],
    warningText:
      "Colheita de spice atrai sandworms rapidamente. Sempre tenha rota de fuga planejada e veículo próximo.",
    relatedMechanics: ["sandworm-behavior", "crafting-system"],
  },

  "crafting-system": {
    id: "crafting-system",
    title: "Sistema de Crafting",
    icon: "Hammer",
    category: "crafting",
    summary:
      "O crafting em Dune Awakening segue 3 etapas: coletar matéria-prima, refinar em materiais, e montar itens finais. Existem 6 estações de crafting especializadas, além do sistema de Intel/Research para desbloquear receitas avançadas.",
    details: [
      "As 6 estações principais: Fabricator (itens gerais, armas, armaduras), Ore Refinery (processamento de minério em barras), Chemical Refinery (lubrificante, silício, cobalt paste, fuel cells), Recycler (decompõe gear excedente em materiais), Repair Station (reparo de equipamentos danificados), Blood Purifier (converte sangue em água limpa).",
      "O fluxo de crafting: Minerar (ex: copper ore) → Refinar na Ore Refinery (copper ore → copper bar) → Montar no Fabricator (copper bars + fiber → equipamento). Chemical Refinery é necessária para materiais avançados como lubrificante e fuel cells.",
      "O sistema de Intel/Research permite desbloquear receitas avançadas. Colete intel points explorando, completando missões e descobrindo locais novos. Use esses pontos na árvore de pesquisa para liberar blueprints melhores.",
      "Qualidade de crafting: itens craftados podem ter qualidade variável dependendo do seu skill e dos materiais usados. Materiais de tier mais alto produzem itens com stats melhores.",
      "O Recycler é essencial para não desperdiçar gear — equipamentos que você não vai usar podem ser decompostos em materiais úteis, incluindo spice infused iron dust.",
    ],
    tips: [
      "Desbloqueie todas as estações o mais cedo possível — mesmo que não vá usar imediatamente",
      "Use o Recycler para decompor gear excedente — nunca descarte equipamento, recicle!",
      "Chemical Refinery é necessária para fuel cells (combustível de veículos e geradores) — priorize",
      "Preste atenção em receitas que exigem 'conhecimento' especial — alguns precisam ser encontrados no mundo",
      "No early game, foque em: Stillsuit → arma básica → armadura → ferramentas de coleta",
    ],
    relatedMechanics: ["resource-tiers", "base-building", "chemical-refinery"],
  },

  "class-system": {
    id: "class-system",
    title: "Sistema de Classes",
    icon: "Users",
    category: "progression",
    summary:
      "Dune Awakening tem 5 classes: Swordmaster, Mentat, Bene Gesserit, Trooper e Planetologist. Você escolhe uma no início mas pode aprender habilidades de outras classes através de Class Trainer NPCs. Respec é grátis a cada 48 horas.",
    details: [
      "Swordmaster: especialista em combate corpo-a-corpo. Melhor classe para iniciantes por ter alta sobrevivência e dano consistente. 3 árvores: Duelist (1v1), Guardian (tank), Blade Dancer (AoE).",
      "Mentat: mente computacional humana. Focado em cálculo, análise e suporte. Consegue prever movimentos de inimigos, tem buffs de grupo, e habilidades de controle de campo.",
      "Bene Gesserit: treinamento misterioso em controle corporal e mental. Habilidades de manipulação, debuffs, e a famosa Voz (stun AoE). Classe avançada com curva de aprendizado alta.",
      "Trooper: soldado de combate ranged/misto. Bom com armas de fogo, explosivos e táticas militares. Melhor em grupo e PvP estruturado.",
      "Planetologist: ecologista do deserto, desbloqueável durante a campanha. Especialista em sobrevivência, tracking, e interação com o ambiente. Ótimo para exploração e farm.",
    ],
    tips: [
      "DICA CRUCIAL: Não escolha Trooper no início! Você ganha acesso a Trooper de graça durante a campanha principal. Escolha outra classe (recomendado: Swordmaster ou Mentat) para sair da área inicial com 2 classes ao invés de 1.",
      "Planetologist também é desbloqueável — não está disponível na criação de personagem",
      "Visite Class Trainer NPCs pelo mundo para aprender habilidades cross-class (até 3 passivas de outras classes). Respec é gratuito a cada 48 horas!",
      "Swordmaster é a melhor opção para quem está começando: fácil de jogar, forte em solo, e escala bem no late game",
    ],
    warningText:
      "Escolher Trooper na criação de personagem é um desperdício — você ganha essa classe gratuitamente na campanha. Escolha outra!",
    relatedMechanics: ["combat-basics"],
  },

  "combat-basics": {
    id: "combat-basics",
    title: "Fundamentos de Combate",
    icon: "Swords",
    category: "combat",
    summary:
      "O combate em Dune Awakening mistura ação em tempo real com mecânicas táticas. Corpo-a-corpo domina (por causa dos escudos), mas armas ranged têm seu lugar. Mobilidade é rei — especialmente em PvP.",
    details: [
      "O combate corpo-a-corpo usa um sistema de ataque leve/pesado. Ataques leves são rápidos mas bloqueados por escudos. Ataques pesados (Slow Blade) penetram escudos mas são mais lentos e previsíveis.",
      "Dodge/roll é crucial — consome stamina mas te dá i-frames (invulnerabilidade momentânea). Gerenciar stamina entre ataques e esquivas é a chave para sobreviver.",
      "Armas ranged são menos eficazes contra escudos, EXCETO a Disruptor Sidearm que foi projetada especificamente para penetrar barreiras Holtzman.",
      "Em PvP, jogadores experientes priorizam mobilidade sobre dano bruto. Habilidades de dash, root, e slow são mais valiosas que +10% de dano.",
      "Combate em grupo segue a trindade clássica: tank na frente com escudo, DPS melee flanqueando, suporte/ranged atrás. Coordenação com Disruptors para quebrar escudos inimigos é essencial.",
    ],
    tips: [
      "Pratique o timing de Slow Blade — é a única forma confiável de matar inimigos com escudo",
      "Nunca gaste toda sua stamina atacando — guarde pelo menos 30% para esquivas de emergência",
      "A Disruptor Sidearm é obrigatória — craft e LEVE SEMPRE, mesmo se você for melee puro",
      "Em PvP, habilidades de mobilidade (dash, leap) valem mais que habilidades de dano puro",
      "Observe o escudo do inimigo: quando piscar/cintilar, está prestes a cair — momento de atacar agressivamente",
    ],
    relatedMechanics: ["shield-mechanics", "class-system"],
  },

  "heat-management": {
    id: "heat-management",
    title: "Gerenciamento de Calor",
    icon: "Thermometer",
    category: "survival",
    summary:
      "Arrakis é um dos planetas mais quentes da galáxia. O calor extremo durante o dia pode matar tão rápido quanto desidratação. Sombra, abrigo e horários de exploração são fundamentais para sobreviver.",
    details: [
      "O ciclo dia/noite afeta diretamente a temperatura. Durante o dia (especialmente meio-dia), a temperatura pode ser letal. À noite é significativamente mais frio e seguro para explorar.",
      "Exposição prolongada ao calor causa Heat Stress: redução de stamina, consumo acelerado de água, e eventualmente dano direto à vida. Um medidor de calor aparece na HUD.",
      "Fontes de abrigo: sombra de rochas, cavernas, estruturas construídas, e interiores de edifícios. Ficar na sombra reduz drasticamente o acúmulo de calor.",
      "Armaduras e equipamentos de sobrevivência podem ter resistência a calor. Stillsuits de tier alto também ajudam a regular temperatura corporal.",
    ],
    tips: [
      "Explore durante a manhã e fim de tarde — evite o deserto aberto ao meio-dia",
      "Cavernas são ótimas para se abrigar E geralmente contêm recursos e inimigos com loot",
      "Construa waypoints/abrigos em rotas que você usa frequentemente",
      "No early game, calor é mais perigoso que monstros — respeite o termômetro",
    ],
    relatedMechanics: ["water-management", "stillsuit"],
  },

  stillsuit: {
    id: "stillsuit",
    title: "Stillsuit",
    icon: "Shirt",
    category: "survival",
    summary:
      "O Stillsuit é uma roupa de sobrevivência que recicla a umidade do corpo (suor, respiração) em água potável. É o item mais importante para sobreviver no deserto, MAS tem um trade-off: excelente proteção térmica porém stats de armadura BAIXAS.",
    details: [
      "Stillsuits vêm em vários tiers de qualidade. Um stillsuit básico reduz perda de água em cerca de 40%. Um stillsuit avançado pode chegar a 80% ou mais de reciclagem.",
      "O trade-off principal: Stillsuits oferecem proteção térmica excelente, mas os stats de armadura são significativamente mais baixos que armaduras dedicadas. O jogo tem um sistema de 6 stats de armadura, e o stillsuit fica fraco em proteção física/combate.",
      "Você pode craftar seu primeiro stillsuit no Fabricator relativamente cedo. Priorize isso acima de armas e armaduras — sem água, você não sobrevive para lutar.",
      "O Blood Purifier é um addon que permite processar Blood Bags (extraídos de inimigos) em água limpa. Combinado com um bom stillsuit, torna expedições longas muito mais viáveis.",
    ],
    tips: [
      "Prioridade #1 de crafting: Stillsuit. Antes de armas, armaduras ou ferramentas",
      "Entenda o trade-off: stillsuit = ótimo para sobrevivência, ruim para combate. Troque para armadura antes de lutar se possível",
      "Upgrade o stillsuit sempre que possível — cada tier faz diferença enorme na duração das expedições",
      "Blood Purifier é game-changer para expedições longas — invista assim que disponível",
      "O sistema de 6 stats de armadura significa que você precisa escolher: proteção térmica (stillsuit) ou proteção de combate (armadura)",
    ],
    relatedMechanics: ["water-management", "crafting-system"],
  },

  "base-building": {
    id: "base-building",
    title: "Construção de Base",
    icon: "Building2",
    category: "crafting",
    summary:
      "Você pode construir bases usando o sistema de Sub-Fief — reivindique território, construa estruturas, e defenda com escudos e muros. Sua primeira base é TEMPORÁRIA — não invista demais nela. Bases precisam de Generator + Fuel Cells para funcionar.",
    details: [
      "Para construir uma base, você precisa de um Sub-Fief Console — um item que reivindica território e define os limites da sua base. Colocações têm custo de manutenção em Solari (taxa).",
      "IMPORTANTE: Sua primeira base é temporária! Não invista recursos demais nela. Foque no essencial (estações de crafting, armazenamento) e guarde materiais para a base permanente.",
      "A base precisa de um Generator alimentado por Fuel Cells para manter estações e defesas funcionando. Fuel Cells são craftadas na Chemical Refinery — mantenha sempre estoque.",
      "Sistema de permissões: bases têm 3 níveis de acesso — Owner (controle total), Co-Owner (quase tudo, exceto destruir a base), e Associate (acesso a portas e estações, sem construção). Configure com cuidado ao jogar em grupo.",
      "No Deep Desert, bases são temporárias — tempestades semanais destroem tudo. Foque bases permanentes em Hagga Basin.",
    ],
    tips: [
      "Não invista demais na primeira base — ela é temporária! Foque no mínimo funcional",
      "Generator + Fuel Cells são obrigatórios — sem energia, nada funciona na base",
      "Configure permissões corretamente: Owner/Co-Owner/Associate. Não dê Co-Owner para desconhecidos",
      "Coloque a base perto de recursos mas em terreno rochoso (seguro de worms)",
      "Sempre instale escudo de base se estiver em servidor com PvP",
    ],
    relatedMechanics: ["crafting-system", "chemical-refinery"],
  },

  "resource-tiers": {
    id: "resource-tiers",
    title: "Tiers de Recursos",
    icon: "Layers",
    category: "crafting",
    summary:
      "Recursos em Dune Awakening seguem uma progressão de tiers: Cobre → Ferro/Carbono → Aço → Alumínio → Duralumínio → Plastanium. Tiers mais altos aparecem em zonas mais perigosas.",
    details: [
      "Tier 1 (Cobre, Fibra Vegetal): Encontrado na área inicial e Hagga Basin. Usado para ferramentas e equipamentos básicos.",
      "Tier 2 (Ferro, Carbono): Encontrado em toda Hagga Basin. Usado para aço e equipamentos intermediários.",
      "Tier 3 (Aço, Alumínio): Requer refino. Encontrado em áreas mais perigosas de Hagga Basin. Equipamentos mid-game.",
      "Tier 4 (Duralumínio): Zonas de alto risco em Hagga Basin e bordas do Deep Desert. Equipamentos avançados.",
      "Tier 5 (Plastanium): Exclusivo do Deep Desert (PvPvE). Material de endgame para os melhores equipamentos.",
      "Materiais raros (Advanced Servoks, Micro-sandwich Fabric, Particle Capacitors, Plasteel Composites) são drops de dungeons e eventos especiais.",
    ],
    tips: [
      "Não tenha pressa de ir atrás de tiers altos — domine a área atual antes de avançar",
      "Refino é essencial: minerar e refinar em lote é muito mais eficiente que craftar com materiais brutos",
      "No Deep Desert, recursos de tier alto são disputados em PvP — vá preparado ou vá em grupo",
      "Materiais raros de dungeon são bind-on-pickup — você precisa fazer a dungeon pessoalmente",
    ],
    relatedMechanics: ["crafting-system", "spice-harvesting"],
  },

  vehicles: {
    id: "vehicles",
    title: "Veículos",
    icon: "Plane",
    category: "exploration",
    summary:
      "6 tipos de veículos disponíveis, de Sandbike a Ornithopter. Cada um tem 6 níveis de upgrade (Mk1-Mk6). Use o Vehicle Backup Tool para armazenar/deployar veículos, Fuel Cells para combustível, e Welding Torch para reparo.",
    details: [
      "Sandbike: veículo individual rápido, barato de craftar. Ótimo para o early game. Atrai worms moderadamente.",
      "Buggy: veículo para 2 jogadores com algum armazenamento. Bom para duplas. Mais resistente que a sandbike.",
      "Sandcrawler: veículo pesado para grupo. Alto armazenamento, lento, atrai worms significativamente.",
      "Ornithopter (3 variantes): aeronave que pode voar. Variantes incluem scout (rápido, pouco cargo), transport (mais cargo), e combat (com armas). Não atrai worms no ar. O veículo mais importante do jogo.",
      "Vehicle Backup Tool: ferramenta essencial que permite armazenar e deployar veículos. Sem ele, você não pode guardar seu veículo quando não estiver usando. Fuel Cells são o combustível — craft na Chemical Refinery. Welding Torch permite reparar veículos danificados em campo.",
    ],
    tips: [
      "Sandbike Mk1 deve ser seu primeiro veículo — rápido de craftar e muda completamente sua mobilidade",
      "Vehicle Backup Tool é obrigatório — sem ele, você não consegue guardar/deployar veículos",
      "Ornithopter é prioridade máxima de mid game — voar elimina 90% dos perigos do deserto",
      "Veículos têm sistema de permissões — configure quem pode pilotar para evitar roubo",
      "Welding Torch repara veículos em campo — sempre carregue um, especialmente com ornithopter",
    ],
    relatedMechanics: ["sandworm-behavior", "spice-harvesting"],
  },

  "landsraad-politics": {
    id: "landsraad-politics",
    title: "Landsraad e Política",
    icon: "Landmark",
    category: "social",
    summary:
      "O Landsraad é o conselho político do servidor. Guilds se alinham a Great Houses (Atreides ou Harkonnen) e votam semanalmente em políticas que afetam todo o servidor — buffs, regras de PvP, taxas, e mais.",
    details: [
      "Cada guild escolhe alinhamento com House Atreides ou House Harkonnen. Esse alinhamento define aliados e inimigos em PvP e no Landsraad.",
      "Semanalmente, o Landsraad abre votação em propostas que afetam gameplay do servidor inteiro: bônus de colheita, redução de taxas, buffs de combate, zonas PvP temporárias, etc.",
      "A facção vencedora na votação ganha o buff/efeito proposto para toda a semana. Perder a votação pode resultar em penalidades ou simplesmente perder o buff.",
      "War of Assassins é um sistema de PvP estruturado entre guilds. Guilds podem declarar guerra com regras específicas, e o perdedor sofre penalidades econômicas.",
      "Guilds podem ter até 32 membros. Coordenação política entre guilds da mesma facção é essencial para dominar o Landsraad.",
    ],
    tips: [
      "Junte-se a uma guild ativa — jogadores solo perdem todo o conteúdo político e grande parte do endgame",
      "Preste atenção nas votações semanais — os buffs/debuffs afetam seu gameplay significativamente",
      "War of Assassins é rentável se você vencer — mas as penalidades por perder são pesadas",
      "No early game, não se preocupe muito com política — foque em progressão e deixe isso pro mid/late game",
    ],
    relatedMechanics: ["class-system"],
  },

  "cut-array": {
    id: "cut-array",
    title: "Cut Array",
    icon: "Pickaxe",
    category: "crafting",
    summary:
      "Ferramenta principal de coleta de recursos. Upgradável em múltiplos tiers. Funciona em granito, cobre, metal e até portas — é a ferramenta mais versátil e a primeira que você deve craftar.",
    details: [
      "O Cut Array é sua ferramenta primária para coletar qualquer recurso sólido no mundo: granito, cobre, ferro, e outros minérios. Sem ele, você não consegue progredir — é literalmente a primeira coisa que deve craftar.",
      "Existem múltiplos tiers de Cut Array, cada um mais eficiente que o anterior. Tiers mais altos permitem minerar recursos que tiers inferiores não conseguem, além de minerar mais rápido.",
      "Além de mineração, o Cut Array funciona em portas trancadas e estruturas destrutíveis. Se encontrar uma porta que não abre, tente usar o Cut Array nela.",
      "O Cut Array consome Power Packs para funcionar. Sempre carregue Power Packs extras — ficar sem energia no meio de uma expedição é frustrante.",
    ],
    tips: [
      "Cut Array é a PRIMEIRA coisa a craftar — sem ele, você não coleta nada",
      "Upgrade o Cut Array assim que possível — tiers mais altos desbloqueiam novos materiais",
      "Sempre carregue Power Packs extras — Cut Array sem energia é inútil",
      "Use o Cut Array em portas e estruturas — ele funciona como ferramenta de demolição também",
      "Verifique se seu Cut Array é do tier certo para o material — tier baixo não minera recursos avançados",
    ],
    relatedMechanics: ["crafting-system", "power-packs"],
  },

  "power-packs": {
    id: "power-packs",
    title: "Power Packs",
    icon: "Battery",
    category: "crafting",
    summary:
      "Itens e ferramentas precisam de energia para funcionar. Power Packs são o combustível — vão de Improvised até MK2+. Cada Power Pack tem dois stats principais: regen (recarga) e power pool (capacidade total).",
    details: [
      "O sistema de energia é fundamental: ferramentas como Cut Array, Static Compactor e Dew Reaper consomem energia de Power Packs equipados. Sem Power Pack carregado, suas ferramentas não funcionam.",
      "Power Packs têm dois stats: Power Regen (velocidade de recarga da energia) e Power Pool (capacidade total de energia). Tiers mais altos melhoram ambos significativamente.",
      "A progressão vai de Improvised Power Pack (básico, pouca capacidade) até MK2 e superiores. Improvised é fácil de craftar no início, mas você vai precisar upgradar rapidamente conforme usa ferramentas mais exigentes.",
      "Power Packs recarregam automaticamente ao longo do tempo (baseado no stat de regen), mas a recarga é lenta em tiers baixos. Carregar Power Packs extras é mais prático que esperar recarregar.",
    ],
    tips: [
      "Sempre carregue pelo menos 2-3 Power Packs em expedições — trocar é mais rápido que esperar recarregar",
      "Improvised Power Pack é suficiente no início, mas upgrade para MK1+ assim que possível",
      "Preste atenção no stat de Power Regen — alta regeneração significa menos downtime",
      "Power Pool alto é essencial para sessões longas de mineração com Cut Array",
      "Craft Power Packs em lote — você vai consumir muitos, especialmente no mid game",
    ],
    relatedMechanics: ["cut-array", "crafting-system"],
  },

  "durability-system": {
    id: "durability-system",
    title: "Sistema de Durabilidade",
    icon: "BarChart3",
    category: "crafting",
    summary:
      "Equipamentos têm uma barra de durabilidade com 3 cores: amarelo (durabilidade restante), cinza (reparável na Repair Station), e vermelho (irreparável — cresce a cada reparo). Eventualmente, todo item precisa ser substituído.",
    details: [
      "A barra de durabilidade de cada item tem 3 seções coloridas: amarelo mostra a durabilidade atual, cinza mostra quanto pode ser reparado na Repair Station, e vermelho é a porção permanentemente perdida.",
      "Cada vez que você repara um item na Repair Station, a seção vermelha (irreparável) cresce um pouco. Isso significa que após múltiplos reparos, o item terá cada vez menos durabilidade máxima efetiva.",
      "Quando a barra inteira fica vermelha, o item está no fim da vida útil — não pode mais ser reparado e precisa ser substituído. Itens nesse estado podem ser reciclados no Recycler para recuperar alguns materiais.",
      "Itens de qualidade mais alta geralmente têm mais durabilidade total e a seção vermelha cresce mais devagar a cada reparo, tornando-os mais duráveis a longo prazo.",
    ],
    tips: [
      "Não espere o item quebrar completamente para reparar — repare quando a seção cinza aparecer",
      "Fique de olho na seção vermelha crescendo — quando estiver grande, comece a craftar o substituto",
      "Itens de qualidade alta duram mais e perdem menos durabilidade permanente por reparo",
      "Use o Recycler para decompor itens no fim da vida útil — não descarte, recicle!",
      "Carregue um segundo set de ferramentas em expedições longas — durabilidade acaba mais rápido do que parece",
    ],
    relatedMechanics: ["crafting-system"],
  },

  "blood-extraction": {
    id: "blood-extraction",
    title: "Extração de Sangue",
    icon: "Syringe",
    category: "survival",
    summary:
      "Blood Extractor → Blood Bags → Blood Purifier → água limpa. Sistema de conversão de sangue de inimigos em água — essencial para expedições longas no mid/late game.",
    details: [
      "O Blood Extractor é uma ferramenta que você usa em inimigos derrotados para extrair sangue, gerando Blood Bags. Funciona em NPCs humanoides e algumas criaturas — nem todos os inimigos rendem sangue.",
      "Blood Bags são itens intermediários que ocupam espaço no inventário. Eles precisam ser processados no Blood Purifier (estação de crafting na sua base) para se tornarem água limpa utilizável.",
      "O Blood Purifier é uma estação separada das demais — coloque na sua base junto com as outras estações de crafting. O processo de conversão leva algum tempo, então processe em lote.",
      "Este sistema se torna a principal fonte de água no mid/late game, superando coleta de orvalho e flores. Combinado com um bom Stillsuit, torna você praticamente autossuficiente em água durante expedições de combate.",
    ],
    tips: [
      "Use o Blood Extractor em TODO inimigo derrotado — não desperdice sangue grátis",
      "Processe Blood Bags em lote no Blood Purifier — é mais eficiente que processar um por um",
      "Blood Extractor + Stillsuit = combo de sobrevivência definitivo para expedições longas",
      "Nem todos os inimigos rendem Blood Bags — criaturas mecânicas e alguns tipos não têm sangue",
      "Priorize craftar o Blood Extractor assim que disponível — muda completamente sua gestão de água",
    ],
    relatedMechanics: ["water-management", "crafting-system"],
  },

  "respawn-beacon": {
    id: "respawn-beacon",
    title: "Respawn Beacon",
    icon: "Radio",
    category: "exploration",
    summary:
      "Ponto de respawn portátil que você coloca no mundo. Só permite 1 ativo por vez. Essencial para exploração de áreas remotas — evita a caminhada de volta após morrer.",
    details: [
      "O Respawn Beacon é um item deployável que cria um ponto de respawn temporário no local onde você colocar. Ao morrer, você pode escolher respawnar nele ao invés de voltar para a base.",
      "Você só pode ter 1 Respawn Beacon ativo por vez. Colocar um novo desativa o anterior automaticamente. Planeje onde colocar com cuidado — posicione-o em locais seguros perto da área que está explorando.",
      "O beacon tem durabilidade limitada e eventualmente se destrói. Além disso, outros jogadores podem encontrar e destruir seu beacon em zonas PvP.",
      "Essencial para exploração de áreas distantes da base, dungeons, e o Deep Desert. Sem ele, morrer em uma área remota significa uma longa caminhada de volta.",
    ],
    tips: [
      "SEMPRE coloque um Respawn Beacon antes de entrar em áreas perigosas ou dungeons",
      "Posicione o beacon em terreno rochoso e seguro — não no meio do deserto onde worms passam",
      "Lembre-se: só 1 ativo por vez. Colocar outro desativa o anterior",
      "Carregue materiais para craftar beacons extras durante expedições longas",
      "Em PvP, esconda o beacon — outros jogadores podem destruí-lo para te prejudicar",
    ],
    relatedMechanics: ["base-building"],
  },

  "static-compactor": {
    id: "static-compactor",
    title: "Static Compactor",
    icon: "Wind",
    category: "crafting",
    summary:
      "Ferramenta que coleta flower sand (plumas brancas que flutuam no ar) e as converte em silício. Também tem uma função secreta: revela paredes escondidas em ruínas e cavernas.",
    details: [
      "O Static Compactor é uma ferramenta especializada que captura flower sand — aquelas plumas/partículas brancas que você vê flutuando no ar em certas áreas. Essas partículas são convertidas em silício, material essencial para crafting avançado.",
      "Flower sand aparece em áreas específicas, geralmente perto de formações rochosas e vegetação. Procure as plumas brancas flutuando — onde elas estão, você pode usar o Static Compactor.",
      "Função bônus: o Static Compactor pode revelar paredes escondidas e passagens secretas em ruínas e cavernas! Use-o contra paredes suspeitas para encontrar salas ocultas com loot.",
      "Assim como outras ferramentas, o Static Compactor consome Power Packs para funcionar. Certifique-se de ter energia suficiente antes de ir coletar flower sand.",
    ],
    tips: [
      "Procure plumas brancas flutuando no ar — é o indicador de flower sand coletável",
      "Use o Static Compactor em paredes suspeitas dentro de ruínas — pode revelar passagens secretas!",
      "Silício é material essencial para crafting avançado — colete flower sand regularmente",
      "Leve Power Packs extras quando for coletar — o Static Compactor consome energia",
      "Áreas com vegetação e formações rochosas geralmente têm mais flower sand",
    ],
    relatedMechanics: ["crafting-system", "survey-probe"],
  },

  "survey-probe": {
    id: "survey-probe",
    title: "Survey Probe",
    icon: "Radar",
    category: "exploration",
    summary:
      "Revela fog of war e locais de interesse no mapa. Barato de craftar e deve ser usado em TODA zona nova que você visitar. Essencial para descobrir recursos, pontos de interesse e perigos.",
    details: [
      "O Survey Probe é um item consumível que você lança no ar para revelar uma área grande do mapa. Ele remove o fog of war e marca locais de interesse (recursos, NPCs, pontos de exploração) na sua interface.",
      "Survey Probes são baratos de craftar — não economize! Use um em cada nova zona que visitar. A informação que revelam (localização de recursos, inimigos, estruturas) vale muito mais que o custo de produção.",
      "Locais revelados pelo probe ficam permanentemente visíveis no seu mapa. Isso inclui depósitos de minério, acampamentos de NPCs, entradas de cavernas, e outros pontos de interesse.",
      "Em zonas PvPvE como o Deep Desert, Survey Probes também podem revelar bases de outros jogadores e atividade recente — informação crucial para sobrevivência.",
    ],
    tips: [
      "Use um Survey Probe em TODA zona nova — é a primeira coisa a fazer ao chegar em uma área desconhecida",
      "Craft Survey Probes em lote — são baratos e você vai usar muitos",
      "As informações reveladas são permanentes — vale muito a pena investir em probes",
      "No Deep Desert, probes revelam atividade de outros jogadores — use antes de se instalar",
      "Combine com Respawn Beacon: probe para revelar a área, beacon para ter ponto de respawn seguro",
    ],
    relatedMechanics: ["respawn-beacon"],
  },

  "dew-reaper": {
    id: "dew-reaper",
    title: "Dew Reaper",
    icon: "Droplet",
    category: "survival",
    summary:
      "Ferramenta NOTURNA que coleta orvalho de plantas azuis brilhantes e enche o Leader John (seu recipiente de água). Só funciona à noite — planeje suas atividades noturnas em torno da coleta de água.",
    details: [
      "O Dew Reaper é uma ferramenta específica para coleta de água à noite. Durante a noite, certas plantas emitem um brilho azul — essas plantas acumulam orvalho que pode ser coletado com o Dew Reaper.",
      "A água coletada vai diretamente para o Leader John, seu recipiente de água principal. O Leader John é como um cantil que armazena toda a sua água — o Dew Reaper é uma das formas de enchê-lo.",
      "As plantas azuis brilhantes aparecem em áreas com vegetação, geralmente perto de formações rochosas e oásis. Memorize as localizações para otimizar suas rotas noturnas de coleta.",
      "O Dew Reaper consome Power Packs, então carregue energia extra quando sair para coletar à noite. A coleta é relativamente rápida por planta, mas você precisa visitar várias para encher o Leader John.",
    ],
    tips: [
      "Dew Reaper SÓ funciona à noite — não perca tempo tentando usar durante o dia",
      "Procure o brilho azul das plantas — é fácil de identificar no escuro do deserto",
      "Planeje rotas noturnas passando por clusters de plantas azuis para maximizar coleta",
      "Leve Power Packs extras — sem energia, o Dew Reaper não funciona",
      "Combine com outras atividades noturnas: a noite também é mais segura para explorar (menos calor)",
    ],
    relatedMechanics: ["water-management"],
  },

  "coriolis-storms": {
    id: "coriolis-storms",
    title: "Tempestades Coriolis",
    icon: "CloudLightning",
    category: "survival",
    summary:
      "DIFERENTE de sandstorm normal! Tempestade Coriolis = morte = perde TUDO (igual sandworm). Sandstorm normal = você morre mas pode recuperar o corpo. Aprenda a distinguir as duas ou pague o preço.",
    details: [
      "Existem DOIS tipos de tempestade e é crucial diferenciá-los: Sandstorm normal (tempestade de areia comum) causa dano e pode matar, mas você pode voltar e recuperar seu corpo com todos os itens. Tempestade Coriolis é uma tempestade eletromagnética devastadora que causa perda TOTAL — igual morte por sandworm.",
      "Tempestades Coriolis são anunciadas com antecedência no jogo — fique atento aos avisos na HUD e no mapa. Quando uma Coriolis é anunciada, você tem tempo limitado para buscar abrigo seguro (estruturas, cavernas, bases).",
      "No Deep Desert, tempestades Coriolis semanais destroem TODAS as estruturas construídas na região. Bases no Deep Desert são sempre temporárias por causa disso.",
      "A diferença visual: sandstorms normais são tempestades de areia marrom/amarela. Tempestades Coriolis têm raios, eletricidade, e são visivelmente mais intensas e destrutivas.",
    ],
    tips: [
      "APRENDA a diferença entre sandstorm normal e Coriolis — uma você sobrevive, a outra perde TUDO",
      "Fique SEMPRE atento aos avisos de Coriolis na HUD — quando avisar, busque abrigo IMEDIATAMENTE",
      "Abrigos seguros contra Coriolis: cavernas, interiores de edifícios, bases com teto. Não basta ficar atrás de uma rocha",
      "No Deep Desert, não construa nada que não esteja preparado para perder — Coriolis destrói tudo semanalmente",
      "Se estiver longe de abrigo quando avisar Coriolis, use ornithopter para voar para zona segura o mais rápido possível",
    ],
    warningText:
      "Tempestade Coriolis = perda TOTAL de inventário (sem recuperação de corpo). NÃO confunda com sandstorm normal! Busque abrigo assim que o aviso aparecer.",
    relatedMechanics: ["sandworm-behavior"],
  },

  "chemical-refinery": {
    id: "chemical-refinery",
    title: "Chemical Refinery & Recycler",
    icon: "FlaskConical",
    category: "crafting",
    summary:
      "Chemical Refinery cria materiais avançados: lubrificante, silício processado, cobalt paste, e fuel cells (combustível). O Recycler complementa reciclando gear excedente em materiais — incluindo spice infused iron dust.",
    details: [
      "A Chemical Refinery é uma estação de crafting que processa materiais químicos avançados. Receitas incluem: lubrificante (necessário para veículos e máquinas), silício processado, cobalt paste, e fuel cells (combustível para veículos e geradores de base).",
      "Fuel Cells são o produto mais crítico da Chemical Refinery — sem elas, seus veículos não andam e seu gerador de base não funciona. Sempre mantenha estoque de fuel cells!",
      "O Recycler é a estação complementar que decompõe equipamentos e gear que você não precisa mais em materiais reutilizáveis. Isso inclui spice infused iron dust, que é um material valioso obtido ao reciclar certos itens.",
      "Ambas as estações devem ser construídas na sua base o mais cedo possível. A Chemical Refinery desbloqueia progressão de veículos e base, enquanto o Recycler garante que nenhum item é desperdiçado.",
    ],
    tips: [
      "Priorize construir a Chemical Refinery cedo — fuel cells são necessárias para veículos E gerador da base",
      "Nunca descarte gear excedente — sempre recicle no Recycler para recuperar materiais",
      "Craft fuel cells em lote — você vai precisar de muitas para manter veículos e base funcionando",
      "Spice infused iron dust (do Recycler) é um material valioso — não subestime o valor da reciclagem",
      "Lubrificante é necessário para craftar e manter veículos — mantenha estoque na base",
    ],
    relatedMechanics: ["crafting-system", "durability-system"],
  },
};
