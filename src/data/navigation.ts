import type { NavItem } from "./types";

export const navigation: NavItem[] = [
  { label: "Início", path: "/", icon: "Home" },
  {
    label: "Guia de Progressão",
    path: "/progressao",
    icon: "TrendingUp",
    children: [
      { label: "Início do Jogo", path: "/progressao/inicio", icon: "Sprout" },
      { label: "Meio do Jogo", path: "/progressao/meio", icon: "Swords" },
      { label: "Final do Jogo", path: "/progressao/final", icon: "Crown" },
    ],
  },
  {
    label: "Classes & Builds",
    path: "/classes",
    icon: "Users",
    children: [
      { label: "Visão Geral", path: "/classes", icon: "LayoutGrid" },
      { label: "Swordmaster", path: "/classes/swordmaster", icon: "Sword" },
      { label: "Mentat", path: "/classes/mentat", icon: "Brain" },
      { label: "Bene Gesserit", path: "/classes/bene-gesserit", icon: "Eye" },
      { label: "Trooper", path: "/classes/trooper", icon: "Crosshair" },
      { label: "Planetologist", path: "/classes/planetologist", icon: "Leaf" },
    ],
  },
  { label: "Combate", path: "/combate", icon: "Shield" },
  { label: "Crafting & Recursos", path: "/crafting", icon: "Hammer" },
  { label: "Sobrevivência", path: "/sobrevivencia", icon: "Droplets" },
  { label: "Base Building", path: "/base", icon: "Building2" },
  { label: "Veículos", path: "/veiculos", icon: "Plane" },
  { label: "Mapa & Locais", path: "/mapa", icon: "Map" },
  {
    label: "Lore & Facções",
    path: "/lore",
    icon: "BookOpen",
    children: [
      { label: "Lore", path: "/lore", icon: "BookOpen" },
      { label: "Atreides", path: "/lore/atreides", icon: "Shield" },
      { label: "Harkonnen", path: "/lore/harkonnen", icon: "Skull" },
      { label: "Fremen", path: "/lore/fremen", icon: "Eye" },
      { label: "Bene Gesserit", path: "/lore/bene-gesserit", icon: "Sparkles" },
    ],
  },
  { label: "Landsraad & Política", path: "/landsraad", icon: "Landmark" },
  { label: "Pro Tips", path: "/pro-tips", icon: "Zap" },
  { label: "Dicas de Iniciante", path: "/iniciante", icon: "HelpCircle" },
];
