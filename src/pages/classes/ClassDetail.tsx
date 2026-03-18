import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Sword, Brain, Eye, Crosshair, Leaf, ArrowLeft } from "lucide-react";
import { MainContent } from "@/components/layout/MainContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DiamondDivider } from "@/components/ui/DiamondDivider";
import { Accordion } from "@/components/ui/Accordion";
import { WarningBox } from "@/components/content/WarningBox";
import { images } from "@/data/images";
import { useReference, type ReferenceCard } from "@/contexts/ReferenceContext";

const classHeroImages: Record<string, string> = {
  swordmaster: images.classes.swordmasterHero,
  mentat: images.classes.mentatHero,
  "bene-gesserit": images.classes.beneGesseritHero,
  trooper: images.classes.trooperHero,
  planetologist: images.classes.planetologistHero,
};

interface SkillTree {
  name: string;
  description: string;
  skills: { name: string; description: string; tier: string }[];
}

interface Build {
  name: string;
  focus: string;
  description: string;
  keySkills: string[];
  playstyle: string;
}

interface ClassData {
  name: string;
  icon: React.ElementType;
  role: string;
  roleBadge: "gold" | "blue" | "orange" | "purple" | "danger" | "neutral";
  difficulty: number;
  overview: string;
  lore: string;
  loreSource: string;
  skillTrees: SkillTree[];
  builds: Build[];
  tips: string[];
  warnings: string[];
}

const classData: Record<string, ClassData> = {
  swordmaster: {
    name: "Swordmaster",
    icon: Sword,
    role: "DPS / Tank",
    roleBadge: "danger",
    difficulty: 2,
    overview:
      "O Swordmaster é a encarnação do combate corpo a corpo em Arrakis. Descendente das tradições marciais da Escola Ginaz, ele domina todas as formas de combate com lâminas, desde facas crys até espadas longas. Sua força reside na combinação de dano consistente com alta sobrevivência, tornando-o a escolha perfeita para jogadores que querem estar sempre na linha de frente.",
    lore: "Os Swordmasters da Escola Ginaz são considerados os melhores duelistas do universo conhecido. Seu treinamento é tão rigoroso que poucos sobrevivem para receber o título. Em Arrakis, suas habilidades com lâminas são ainda mais valiosas, pois o combate corpo a corpo é rei num mundo onde escudos bloqueiam projéteis.",
    loreSource: "Adaptado do universo de Frank Herbert",
    skillTrees: [
      {
        name: "Caminho da Lâmina",
        description:
          "Focado em dano corpo a corpo puro e domínio de armas brancas.",
        skills: [
          {
            name: "Corte Preciso",
            description:
              "Aumenta o dano de ataques leves em 15%. Base para toda a árvore de dano.",
            tier: "Tier 1",
          },
          {
            name: "Investida Mortal",
            description:
              "Avanço rápido que causa dano e atordoa brevemente. Excelente para fechar distância.",
            tier: "Tier 2",
          },
          {
            name: "Fúria de Lâminas",
            description:
              "Combo de 5 golpes rápidos. Cada golpe aumenta a velocidade do próximo em 5%.",
            tier: "Tier 3",
          },
          {
            name: "Execução",
            description:
              "Golpe final devastador. Causa 300% de dano contra alvos abaixo de 25% de vida.",
            tier: "Tier 4",
          },
        ],
      },
      {
        name: "Caminho do Guardião",
        description:
          "Focado em defesa, sustain e capacidade de absorver dano pelo grupo.",
        skills: [
          {
            name: "Postura Defensiva",
            description:
              "Reduz dano recebido em 20% por 8 segundos. Cooldown de 20 segundos.",
            tier: "Tier 1",
          },
          {
            name: "Contra-ataque",
            description:
              "Ao bloquear um ataque, automaticamente revida com 80% do dano de ataque.",
            tier: "Tier 2",
          },
          {
            name: "Bastião",
            description:
              "Gera provocação em área, forçando inimigos a atacar você por 5 segundos.",
            tier: "Tier 3",
          },
          {
            name: "Determinação Inabalável",
            description:
              "Ao receber dano letal, sobrevive com 1 HP e ganha imunidade por 3 segundos. Cooldown de 120s.",
            tier: "Tier 4",
          },
        ],
      },
      {
        name: "Caminho do Duelo",
        description:
          "Especialização em combate 1v1 e situações de PvP.",
        skills: [
          {
            name: "Leitura de Combate",
            description:
              "Marca um alvo, aumentando seu dano contra ele em 10% e reduzindo o dano que ele causa a você.",
            tier: "Tier 1",
          },
          {
            name: "Desarme",
            description:
              "Chance de 15% de desarmar o oponente ao acertar ataques pesados.",
            tier: "Tier 2",
          },
          {
            name: "Slow Blade Mastery",
            description:
              "Seus ataques lentos penetram escudos com 40% mais eficiência.",
            tier: "Tier 3",
          },
          {
            name: "Supremacia em Duelo",
            description:
              "Em combate 1v1, todos os seus atributos aumentam em 15%. Desativa se houver aliados próximos.",
            tier: "Tier 4",
          },
        ],
      },
    ],
    builds: [
      {
        name: "DPS Ofensivo",
        focus: "Caminho da Lâmina + Caminho do Duelo",
        description:
          "Build focada em maximizar dano corpo a corpo. Ideal para PvP e para derrubar alvos rapidamente em PvE. Priorize Corte Preciso e Slow Blade Mastery cedo.",
        keySkills: [
          "Corte Preciso",
          "Fúria de Lâminas",
          "Slow Blade Mastery",
          "Execução",
        ],
        playstyle:
          "Agressivo. Feche distância rápido com Investida Mortal, aplique combo de Fúria de Lâminas e finalize com Execução quando o alvo estiver baixo. Em PvP, use Slow Blade Mastery para penetrar escudos.",
      },
      {
        name: "Tank de Grupo",
        focus: "Caminho do Guardião + Caminho da Lâmina",
        description:
          "Build defensiva para conteúdo em grupo. Você será a linha de frente, absorvendo dano e mantendo os inimigos focados em você enquanto seus aliados causam dano.",
        keySkills: [
          "Postura Defensiva",
          "Bastião",
          "Contra-ataque",
          "Determinação Inabalável",
        ],
        playstyle:
          "Posicional. Use Bastião para agregar inimigos, mantenha Postura Defensiva ativa e use Contra-ataque para manter ameaça. Determinação Inabalável é seu seguro de vida.",
      },
    ],
    tips: [
      "Sempre comece combates com Investida Mortal para fechar distância e garantir o primeiro golpe.",
      "Em PvP, não tente perseguir Troopers em campo aberto. Force o combate em espaços fechados onde sua vantagem corpo a corpo brilha.",
      "Contra Bene Gesserit, fique em movimento constante para evitar A Voz. Se for atordoado, use Determinação Inabalável como backup.",
      "O Swordmaster é a melhor classe para aprender as mecânicas de Slow Blade, que são essenciais para todo o jogo.",
      "Existem NPCs Class Trainers espalhados pelo mundo que ensinam habilidades de outras classes. Procure-os para expandir seu arsenal. Você pode fazer respec grátis a cada 48 horas.",
    ],
    warnings: [
      "Não ignore a árvore do Guardião completamente, mesmo como DPS. Postura Defensiva salva vidas em situações de emergência.",
    ],
  },
  mentat: {
    name: "Mentat",
    icon: Brain,
    role: "Suporte / Controle",
    roleBadge: "blue",
    difficulty: 3,
    overview:
      "O Mentat é o cérebro de qualquer operação em Arrakis. Treinado para processar informações em velocidade sobre-humana, ele fornece buffs cruciais para aliados, debuffs para inimigos e tem a capacidade única de prever ações inimigas. Embora seu dano solo seja limitado, em grupo ele multiplica a eficiência de todos ao redor.",
    lore: "Após a Jihad Butleriana proibir computadores e máquinas pensantes, a humanidade desenvolveu os Mentats -- humanos treinados desde a infância para funcionar como computadores vivos. Seu Suco de Safo, uma droga que amplia a capacidade cognitiva, permite cálculos instantâneos que desafiam a lógica comum.",
    loreSource: "Jihad Butleriana - Enciclopédia de Dune",
    skillTrees: [
      {
        name: "Caminho da Análise",
        description:
          "Habilidades de suporte e buff que amplificam o poder dos aliados.",
        skills: [
          {
            name: "Projeção Tática",
            description:
              "Analisa o campo de batalha, aumentando a precisão de todos os aliados próximos em 12% por 15s.",
            tier: "Tier 1",
          },
          {
            name: "Cálculo Preditivo",
            description:
              "Prevê o próximo ataque inimigo, concedendo esquiva aumentada ao alvo aliado.",
            tier: "Tier 2",
          },
          {
            name: "Sincronização Mental",
            description:
              "Conecta a mente de até 4 aliados, compartilhando 10% dos buffs entre todos.",
            tier: "Tier 3",
          },
          {
            name: "Sapho Overdrive",
            description:
              "Buff supremo: aumenta todos os atributos dos aliados em 20% por 10 segundos. Cooldown de 180s.",
            tier: "Tier 4",
          },
        ],
      },
      {
        name: "Caminho da Sabotagem",
        description:
          "Debuffs e controle de área que enfraquecem os inimigos.",
        skills: [
          {
            name: "Interferência Cognitiva",
            description:
              "Reduz a velocidade de ataque do alvo em 15% por 10s.",
            tier: "Tier 1",
          },
          {
            name: "Sobrecarga Mental",
            description:
              "Causa dano psíquico em área e confunde inimigos por 3 segundos.",
            tier: "Tier 2",
          },
          {
            name: "Análise de Fraqueza",
            description:
              "Marca um alvo, aumentando todo dano que ele recebe em 25% por 8 segundos.",
            tier: "Tier 3",
          },
          {
            name: "Colapso Lógico",
            description:
              "Desativa todas as habilidades do alvo por 4 segundos. Eficaz contra jogadores e bosses.",
            tier: "Tier 4",
          },
        ],
      },
      {
        name: "Caminho do Estrategista",
        description:
          "Habilidades híbridas focadas em utilidade e sobrevivência pessoal.",
        skills: [
          {
            name: "Campo de Dados",
            description:
              "Cria uma zona que revela inimigos invisíveis e mostra barras de vida. Dura 20 segundos.",
            tier: "Tier 1",
          },
          {
            name: "Esquiva Calculada",
            description:
              "Prevê ataques e esquiva automaticamente o próximo ataque recebido. Cooldown de 30s.",
            tier: "Tier 2",
          },
          {
            name: "Rede de Informação",
            description:
              "Marca todos os inimigos no minimapa num raio de 50 metros por 30 segundos.",
            tier: "Tier 3",
          },
          {
            name: "Plano Mestre",
            description:
              "Analisa o combate em tempo real, reduzindo o cooldown de todas as habilidades em 30% por 15s.",
            tier: "Tier 4",
          },
        ],
      },
    ],
    builds: [
      {
        name: "Suporte Puro",
        focus: "Caminho da Análise + Caminho da Sabotagem",
        description:
          "O melhor build para conteúdo em grupo. Você será o multiplicador de força da equipe, buffando aliados e debuffando inimigos simultaneamente.",
        keySkills: [
          "Projeção Tática",
          "Sincronização Mental",
          "Análise de Fraqueza",
          "Sapho Overdrive",
        ],
        playstyle:
          "Fique na retaguarda, mantenha buffs ativos nos aliados e aplique Análise de Fraqueza no alvo primário do grupo. Use Sapho Overdrive em momentos decisivos como bosses ou emboscadas PvP.",
      },
      {
        name: "Controlador Solo",
        focus: "Caminho da Sabotagem + Caminho do Estrategista",
        description:
          "Build para jogar solo ou em dupla. Foco em controle de inimigos e sobrevivência pessoal.",
        keySkills: [
          "Interferência Cognitiva",
          "Sobrecarga Mental",
          "Esquiva Calculada",
          "Colapso Lógico",
        ],
        playstyle:
          "Controle os inimigos com debuffs, use Esquiva Calculada para sobreviver e finalize com Sobrecarga Mental. Funciona bem com um Swordmaster parceiro.",
      },
    ],
    tips: [
      "Sapho Overdrive é a habilidade mais poderosa do jogo em termos de impacto em grupo. Guarde para momentos críticos.",
      "Análise de Fraqueza funciona em bosses -- use sempre no alvo primário do grupo.",
      "Em PvP, Colapso Lógico é devastador contra Bene Gesserit que dependem de habilidades para sobreviver.",
      "Campo de Dados revela jogadores usando stealth. Use preventivamente antes de entrar em áreas suspeitas.",
      "Existem NPCs Class Trainers espalhados pelo mundo que ensinam habilidades de outras classes. Procure-os para expandir seu arsenal. Você pode fazer respec grátis a cada 48 horas.",
    ],
    warnings: [
      "Mentat solo é fraco em combate direto. Se estiver jogando sozinho, invista pesado no Caminho do Estrategista para sobrevivência.",
    ],
  },
  "bene-gesserit": {
    name: "Bene Gesserit",
    icon: Eye,
    role: "Controle / Debuff",
    roleBadge: "purple",
    difficulty: 5,
    overview:
      "A Bene Gesserit é a classe mais complexa e potencialmente mais poderosa de Dune Awakening. Suas habilidades de controle mental, manipulação e A Voz a tornam uma força imparável em combate em grupo. Porém, dominar essa classe exige prática extensiva, posicionamento impecável e profundo entendimento das mecânicas de combate.",
    lore: "A Irmandade Bene Gesserit é uma ordem antiga de mulheres que domina o prana-bindu, o controle total de cada músculo e nervo do corpo. A Voz, sua arma mais temida, permite comandar ações de outros através de tonalidades específicas. Seus programas de reprodução moldam a genética humana há milênios, buscando o Kwisatz Haderach.",
    loreSource: "Irmandade Bene Gesserit - Dune, Frank Herbert",
    skillTrees: [
      {
        name: "Caminho da Voz",
        description:
          "A arma suprema da Bene Gesserit. Controle mental e stuns em área.",
        skills: [
          {
            name: "Comando Menor",
            description:
              "Ordena um alvo a parar por 2 segundos. Alcance de 15 metros. Cooldown de 15s.",
            tier: "Tier 1",
          },
          {
            name: "Sussurro Paralisante",
            description:
              "Paralisa alvos em cone frontal por 1.5 segundos. Eficaz contra grupos.",
            tier: "Tier 2",
          },
          {
            name: "A Voz",
            description:
              "Stun AoE em área grande por 3 segundos. A habilidade mais forte do jogo. Cooldown de 90s.",
            tier: "Tier 3",
          },
          {
            name: "Domínio Absoluto",
            description:
              "Assume controle de um alvo não-jogador por 10 segundos, ou atordoa um jogador por 4 segundos. Cooldown de 180s.",
            tier: "Tier 4",
          },
        ],
      },
      {
        name: "Caminho do Prana-Bindu",
        description:
          "Controle corporal, esquiva e habilidades físicas amplificadas.",
        skills: [
          {
            name: "Reflexos Amplificados",
            description:
              "Aumenta velocidade de movimento e esquiva em 20% por 10s.",
            tier: "Tier 1",
          },
          {
            name: "Toque Nervoso",
            description:
              "Ataque corpo a corpo que paralisa o membro atingido, reduzindo dano ou velocidade do alvo.",
            tier: "Tier 2",
          },
          {
            name: "Invisibilidade Muscular",
            description:
              "Controla os músculos para ficar imediatamente invisível por 5 segundos. Qualquer ação cancela.",
            tier: "Tier 3",
          },
          {
            name: "Prana-Bindu Supremo",
            description:
              "Ativa controle total do corpo: imune a stuns, velocidade +30%, esquiva +40% por 8 segundos.",
            tier: "Tier 4",
          },
        ],
      },
      {
        name: "Caminho da Manipulação",
        description:
          "Debuffs psicológicos e controle emocional de inimigos.",
        skills: [
          {
            name: "Semeadura de Dúvida",
            description:
              "Reduz a precisão do alvo em 20% e o dano causado em 10% por 12s.",
            tier: "Tier 1",
          },
          {
            name: "Medo Projetado",
            description:
              "Faz o alvo fugir em pânico por 3 segundos. Funciona em jogadores e NPCs.",
            tier: "Tier 2",
          },
          {
            name: "Rede de Influência",
            description:
              "Debuffs aplicados a um alvo se espalham para inimigos próximos num raio de 8 metros.",
            tier: "Tier 3",
          },
          {
            name: "Quebra de Vontade",
            description:
              "Remove todos os buffs do alvo e impede novas aplicações por 6 segundos.",
            tier: "Tier 4",
          },
        ],
      },
    ],
    builds: [
      {
        name: "Controladora de Grupo",
        focus: "Caminho da Voz + Caminho da Manipulação",
        description:
          "O build definitivo para combate em grupo e PvP em larga escala. Você controla o ritmo da batalha inteira com stuns e debuffs devastadores.",
        keySkills: [
          "A Voz",
          "Sussurro Paralisante",
          "Rede de Influência",
          "Quebra de Vontade",
        ],
        playstyle:
          "Posicionamento é tudo. Fique atrás do tank, espere o momento certo e use A Voz quando os inimigos estiverem agrupados. Aplique debuffs constantemente e use Quebra de Vontade em alvos buffados.",
      },
      {
        name: "Assassina Sombria",
        focus: "Caminho do Prana-Bindu + Caminho da Voz",
        description:
          "Build para PvP solo e emboscadas. Use stealth para se aproximar, atordoe com Comando Menor e elimine rapidamente.",
        keySkills: [
          "Invisibilidade Muscular",
          "Comando Menor",
          "Toque Nervoso",
          "Prana-Bindu Supremo",
        ],
        playstyle:
          "Ative Invisibilidade Muscular, aproxime-se do alvo, aplique Comando Menor seguido de Toque Nervoso. Use Prana-Bindu Supremo para escapar se necessário.",
      },
    ],
    tips: [
      "A Voz é game-changing em PvP em larga escala. Um stun AoE de 3 segundos num grupo inteiro pode decidir a batalha.",
      "Pratique o timing de A Voz extensivamente. Usar cedo demais ou tarde demais desperdiça a habilidade mais importante do jogo.",
      "Invisibilidade Muscular é excelente para scouting no Deep Desert. Use para verificar áreas antes de seu grupo avançar.",
      "Contra Mentats, priorize Quebra de Vontade para remover os buffs que eles aplicam no grupo deles.",
      "Existem NPCs Class Trainers espalhados pelo mundo que ensinam habilidades de outras classes. Procure-os para expandir seu arsenal. Você pode fazer respec grátis a cada 48 horas.",
    ],
    warnings: [
      "Esta é a classe mais difícil do jogo. Se você é iniciante, considere começar com Swordmaster e migrar para Bene Gesserit quando dominar as mecânicas básicas.",
    ],
  },
  trooper: {
    name: "Trooper",
    icon: Crosshair,
    role: "DPS a Distância",
    roleBadge: "orange",
    difficulty: 2,
    overview:
      "O Trooper é o soldado versátil das areias de Arrakis. Combinando armas de fogo, explosivos e disciplina militar, ele mantém distância segura dos inimigos enquanto causa dano consistente. Especialmente eficaz em PvE e em combate em grupo, onde pode explorar sua vantagem de alcance ao máximo.",
    lore: "As forças militares das Grandes Casas sempre dependeram de seus soldados de infantaria. Em Arrakis, esses Troopers enfrentam desafios únicos: sandworms, tempestades de areia e a constante ameaça de emboscadas por facções rivais. Sua adaptação ao deserto os torna guerreiros resilientes e eficientes.",
    loreSource: "Forças Militares das Grandes Casas",
    skillTrees: [
      {
        name: "Caminho do Atirador",
        description: "Dano a distância preciso e sustained.",
        skills: [
          {
            name: "Mira Firme",
            description:
              "Aumenta precisão em 15% quando parado. Dano crítico +10%.",
            tier: "Tier 1",
          },
          {
            name: "Tiro Perfurante",
            description:
              "Disparo que ignora 30% da armadura do alvo. Cooldown de 12s.",
            tier: "Tier 2",
          },
          {
            name: "Rajada Concentrada",
            description:
              "3 disparos rápidos com dano crescente: 80%, 100%, 130% do dano base.",
            tier: "Tier 3",
          },
          {
            name: "Tiro Letal",
            description:
              "Disparo único com 400% de dano. Requer 2 segundos de carga. Cooldown de 45s.",
            tier: "Tier 4",
          },
        ],
      },
      {
        name: "Caminho dos Explosivos",
        description: "Dano em área e controle de zona.",
        skills: [
          {
            name: "Granada Fragmentação",
            description:
              "Lança uma granada que causa dano em área de 5 metros. Cooldown de 18s.",
            tier: "Tier 1",
          },
          {
            name: "Mina de Proximidade",
            description:
              "Planta uma mina invisível que detona quando inimigos se aproximam. Até 3 ativas.",
            tier: "Tier 2",
          },
          {
            name: "Barreira Explosiva",
            description:
              "Cria uma linha de explosivos que detona em sequência, controlando uma área por 10s.",
            tier: "Tier 3",
          },
          {
            name: "Bombardeio Orbital",
            description:
              "Marca uma área para bombardeio. Após 3 segundos, causa dano massivo na área. Cooldown de 120s.",
            tier: "Tier 4",
          },
        ],
      },
      {
        name: "Caminho da Mobilidade",
        description: "Agilidade, reposicionamento e sobrevivência.",
        skills: [
          {
            name: "Rolamento Tático",
            description:
              "Rolamento evasivo que concede 1 segundo de invulnerabilidade. Cooldown de 8s.",
            tier: "Tier 1",
          },
          {
            name: "Smoke Screen",
            description:
              "Lança uma granada de fumaça que obscurece a visão numa área por 8 segundos.",
            tier: "Tier 2",
          },
          {
            name: "Reposicionamento Rápido",
            description:
              "Teleporta até 15 metros para trás, saindo do combate instantaneamente.",
            tier: "Tier 3",
          },
          {
            name: "Adrenalina de Combate",
            description:
              "Ao matar um inimigo, todos os cooldowns são reduzidos em 5 segundos e velocidade aumenta 20% por 5s.",
            tier: "Tier 4",
          },
        ],
      },
    ],
    builds: [
      {
        name: "Atirador de Elite",
        focus: "Caminho do Atirador + Caminho da Mobilidade",
        description:
          "Build focada em dano a distância máximo com mobilidade para se reposicionar. Ideal para PvE e PvP em campo aberto.",
        keySkills: [
          "Mira Firme",
          "Tiro Perfurante",
          "Tiro Letal",
          "Reposicionamento Rápido",
        ],
        playstyle:
          "Mantenha distância máxima, use Mira Firme para dano consistente e Tiro Letal para burst. Se inimigos fecharem distância, use Reposicionamento Rápido.",
      },
      {
        name: "Demolidor",
        focus: "Caminho dos Explosivos + Caminho do Atirador",
        description:
          "Build para controle de área e dano AoE massivo. Excelente em defesa de base e combate contra grupos de inimigos.",
        keySkills: [
          "Granada Fragmentação",
          "Mina de Proximidade",
          "Barreira Explosiva",
          "Bombardeio Orbital",
        ],
        playstyle:
          "Plante minas em pontos de passagem, use granadas para controle de área e Bombardeio Orbital para dano massivo em objetivos fixos.",
      },
    ],
    tips: [
      "Escudos pessoais bloqueiam ataques a distância. Contra inimigos com escudo, use explosivos que causam dano por concussão.",
      "Minas de Proximidade são invisíveis para inimigos. Plante em passagens estreitas e pontos de loot para emboscadas.",
      "Em PvP, nunca fique parado usando Mira Firme por muito tempo. Jogadores espertos vão flanquear você.",
      "Combine Smoke Screen com Reposicionamento Rápido para fugas eficazes de situações desfavoráveis.",
      "Existem NPCs Class Trainers espalhados pelo mundo que ensinam habilidades de outras classes. Procure-os para expandir seu arsenal. Você pode fazer respec grátis a cada 48 horas.",
    ],
    warnings: [
      "Lembre-se: escudos bloqueiam projéteis. Trooper é forte mas tem essa contra-mecânica fundamental. Sempre carregue uma arma corpo a corpo como backup.",
    ],
  },
  planetologist: {
    name: "Planetologist",
    icon: Leaf,
    role: "Explorador / Sobrevivência",
    roleBadge: "gold",
    difficulty: 3,
    overview:
      "O Planetologist é a classe de desbloqueio progressivo de Dune Awakening, indisponível na criação de personagem. Especialista no ecossistema de Arrakis, ele domina a sobrevivência no deserto como ninguém, rastreia recursos com precisão e interage com o ambiente de maneiras únicas. Embora seu combate direto seja inferior, sua capacidade de explorar e sobreviver é incomparável.",
    lore: "Planetologistas são cientistas dedicados ao estudo ecológico de mundos inteiros. Em Arrakis, eles estudam o ciclo da especiaria, os padrões de sandworms e os segredos dos desertos profundos. O mais famoso Planetologista, Liet-Kynes, sonhava em transformar Arrakis num paraíso verde -- um sonho que nesta linha temporal alternativa nunca se realizou.",
    loreSource: "Ecologia de Arrakis - Liet-Kynes",
    skillTrees: [
      {
        name: "Caminho do Ecologista",
        description:
          "Interação com o ambiente, coleta de recursos e sobrevivência.",
        skills: [
          {
            name: "Olho do Deserto",
            description:
              "Revela recursos raros num raio de 100 metros. Marca no minimapa por 60 segundos.",
            tier: "Tier 1",
          },
          {
            name: "Coleta Eficiente",
            description:
              "Aumenta quantidade de recursos coletados em 25% e velocidade de coleta em 15%.",
            tier: "Tier 2",
          },
          {
            name: "Simbiose do Deserto",
            description:
              "Regenera vida e água lentamente enquanto estiver no deserto aberto. Efeito dobra à noite.",
            tier: "Tier 3",
          },
          {
            name: "Chamado do Worm",
            description:
              "Invoca um sandworm pequeno que ataca inimigos na área. Pode ser cavalgado por 30 segundos.",
            tier: "Tier 4",
          },
        ],
      },
      {
        name: "Caminho do Rastreador",
        description:
          "Detecção de inimigos, rastreamento e furtividade.",
        skills: [
          {
            name: "Pegadas no Deserto",
            description:
              "Vê rastros de jogadores e NPCs que passaram na área nas últimas 5 minutos.",
            tier: "Tier 1",
          },
          {
            name: "Camuflagem Natural",
            description:
              "Fica invisível enquanto agachado e parado no deserto. Detecção reduzida em 60%.",
            tier: "Tier 2",
          },
          {
            name: "Armadilha do Deserto",
            description:
              "Cria uma armadilha natural que prende inimigos por 4 segundos e causa dano de veneno.",
            tier: "Tier 3",
          },
          {
            name: "Sentidos Primordiais",
            description:
              "Detecta todos os jogadores e criaturas num raio de 200 metros. Mostra nível e direção.",
            tier: "Tier 4",
          },
        ],
      },
      {
        name: "Caminho da Especiaria",
        description:
          "Especialização em Spice e interação com o ciclo da melange.",
        skills: [
          {
            name: "Faro da Especiaria",
            description:
              "Detecta depósitos de Spice num raio muito maior que outras classes. Mostra qualidade.",
            tier: "Tier 1",
          },
          {
            name: "Refinamento Natural",
            description:
              "Pode refinar Spice em campo sem estação, com eficiência de 80% da Small Refinery.",
            tier: "Tier 2",
          },
          {
            name: "Tolerância à Melange",
            description:
              "Resistência a overdose de Spice aumentada em 50%. Buffs de Spice duram 30% mais.",
            tier: "Tier 3",
          },
          {
            name: "Prescience",
            description:
              "Ao consumir Spice, ganha visão do futuro: revela a posição de todos os jogadores no servidor por 10 segundos.",
            tier: "Tier 4",
          },
        ],
      },
    ],
    builds: [
      {
        name: "Explorador Supremo",
        focus: "Caminho do Ecologista + Caminho do Rastreador",
        description:
          "O build definitivo para exploração e farming. Você encontra recursos mais rápido, coleta mais e sobrevive mais tempo no deserto.",
        keySkills: [
          "Olho do Deserto",
          "Coleta Eficiente",
          "Camuflagem Natural",
          "Sentidos Primordiais",
        ],
        playstyle:
          "Use Olho do Deserto para encontrar recursos, Coleta Eficiente para maximizar ganhos e Camuflagem Natural para evitar conflitos desnecessários no Deep Desert.",
      },
      {
        name: "Mestre da Especiaria",
        focus: "Caminho da Especiaria + Caminho do Ecologista",
        description:
          "Build focada em maximizar a produção e uso de Spice. Ideal para jogadores focados em economia.",
        keySkills: [
          "Faro da Especiaria",
          "Refinamento Natural",
          "Tolerância à Melange",
          "Chamado do Worm",
        ],
        playstyle:
          "Foque em encontrar e refinar Spice. Use Tolerância à Melange para buffs estendidos e Chamado do Worm para proteção em áreas perigosas.",
      },
    ],
    tips: [
      "Olho do Deserto revela recursos que outras classes não conseguem ver. Use isso para encontrar depósitos raros de Spice.",
      "Camuflagem Natural é perfeita para evitar PvP no Deep Desert quando você está carregando recursos valiosos.",
      "Chamado do Worm é arriscado perto de sua base -- o worm pode destruir suas estruturas.",
      "Refinamento Natural em campo é menos eficiente que usar estação, mas permite operar sem base no Deep Desert.",
      "Existem NPCs Class Trainers espalhados pelo mundo que ensinam habilidades de outras classes. Procure-os para expandir seu arsenal. Você pode fazer respec grátis a cada 48 horas.",
    ],
    warnings: [
      "O Planetologist não está disponível na criação de personagem. Você precisa progredir no jogo para desbloqueá-lo. Não espere para começar -- escolha outra classe e desbloqueie o Planetologist durante a campanha.",
    ],
  },
};

export function ClassDetail() {
  const { classId } = useParams<{ classId: string }>();
  const cls = classId ? classData[classId] : undefined;

  const { setCards } = useReference();

  useEffect(() => {
    if (!cls || !classId) {
      setCards([]);
      return;
    }

    const cards: ReferenceCard[] = [
      {
        id: `class-${classId}-lore`,
        type: "lore",
        title: cls.name,
        content: cls.lore,
      },
      ...cls.tips.map((tip, i) => ({
        id: `class-${classId}-tip-${i}`,
        type: "tip" as const,
        title: "",
        content: tip,
      })),
    ];
    setCards(cards);
    return () => setCards([]);
  }, [cls, classId, setCards]);

  if (!cls) {
    return (
      <MainContent>
        <div className="py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-dune-cream">
            Classe não encontrada
          </h1>
          <p className="mb-6 text-dune-cream-muted">
            A classe que você procura não existe ou ainda não foi documentada.
          </p>
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 text-sm text-dune-gold hover:text-dune-gold/80"
          >
            <ArrowLeft size={14} />
            Voltar para Classes
          </Link>
        </div>
      </MainContent>
    );
  }

  return (
    <MainContent>
      <PageHeader
        title={cls.name.toUpperCase()}
        subtitle={cls.overview}
        heroImage={classId ? classHeroImages[classId] : undefined}
      />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Badge variant={cls.roleBadge} size="md">
          {cls.role}
        </Badge>
        <div className="flex items-center gap-2">
          <span className="text-sm text-dune-cream-muted">Dificuldade:</span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`h-2.5 w-2.5 rotate-45 ${
                  i < cls.difficulty
                    ? "bg-dune-gold"
                    : "border border-dune-gold/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <DiamondDivider />

      {/* Skill Trees */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">ÁRVORES DE HABILIDADE</h2>
        </div>

        <div className="space-y-3">
          {cls.skillTrees.map((tree) => (
            <Card key={tree.name} variant="outlined" className="overflow-hidden">
              <Accordion
                title={
                  <div>
                    <h3 className="text-sm font-bold text-dune-cream">
                      {tree.name}
                    </h3>
                    <p className="mt-0.5 text-sm lg:text-base text-dune-cream-muted">
                      {tree.description}
                    </p>
                  </div>
                }
              >
                <div className="space-y-3 pt-2">
                  {tree.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-lg bg-dune-brown-light/20 p-3"
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <Badge variant="gold" size="sm">
                          {skill.tier}
                        </Badge>
                        <h4 className="text-sm font-semibold text-dune-cream">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Accordion>
            </Card>
          ))}
        </div>
      </section>

      <DiamondDivider />

      {/* Builds */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">BUILDS RECOMENDADOS</h2>
        </div>

        <div className="space-y-4">
          {cls.builds.map((build) => (
            <Card key={build.name} variant="strong" className="p-5">
              <div className="mb-2 flex items-center gap-3">
                <h3 className="text-base font-bold text-dune-gold">
                  {build.name}
                </h3>
                <Badge variant="neutral" size="sm">
                  {build.focus}
                </Badge>
              </div>
              <p className="mb-3 text-sm lg:text-base leading-relaxed text-dune-cream/85">
                {build.description}
              </p>

              <div className="mb-3">
                <h4 className="mb-1.5 text-xs font-semibold tracking-wider text-dune-cream-muted">
                  HABILIDADES CHAVE
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {build.keySkills.map((skill) => (
                    <Badge key={skill} variant="gold" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-dune-brown-light/20 p-3">
                <h4 className="mb-1 text-xs font-semibold tracking-wider text-dune-cream-muted">
                  ESTILO DE JOGO
                </h4>
                <p className="text-sm lg:text-base leading-relaxed text-dune-cream/70">
                  {build.playstyle}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <DiamondDivider />

      {/* Tips */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-dune-gold" />
          <h2 className="text-lg lg:text-xl">DICAS DE GAMEPLAY</h2>
        </div>

        {cls.warnings.map((warning, i) => (
          <WarningBox key={i} text={warning} />
        ))}
      </section>
    </MainContent>
  );
}
