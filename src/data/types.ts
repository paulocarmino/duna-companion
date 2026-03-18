/* ── Mechanic System ── */

export type MechanicCategory =
  | "survival"
  | "combat"
  | "crafting"
  | "exploration"
  | "social"
  | "progression";

export interface Mechanic {
  id: string;
  title: string;
  icon: string;
  category: MechanicCategory;
  summary: string;
  details: string[];
  tips: string[];
  warningText?: string;
  relatedMechanics?: string[];
  imageUrl?: string;
}

/* ── Progression Guide ── */

export type ProgressionBlockType =
  | "text"
  | "heading"
  | "mechanic-spotlight"
  | "pro-tip"
  | "warning"
  | "resource-table"
  | "lore-note"
  | "quick-ref"
  | "image"
  | "checklist";

export interface ResourceRequirement {
  name: string;
  quantity: number;
  tier?: number;
}

export interface ProgressionBlock {
  type: ProgressionBlockType;
  content?: string;
  level?: 2 | 3 | 4;
  mechanicId?: string;
  contextNote?: string;
  title?: string;
  text?: string;
  resources?: ResourceRequirement[];
  loreText?: string;
  source?: string;
  refLabel?: string;
  refTarget?: string;
  imageUrl?: string;
  caption?: string;
  attribution?: string;
  items?: string[];
}

export interface ProgressionPhase {
  id: string;
  title: string;
  subtitle: string;
  levelRange: [number, number];
  summary: string;
  heroImage?: string;
  blocks: ProgressionBlock[];
}

/* ── Classes ── */

export interface SkillNode {
  name: string;
  description: string;
  tier: number;
}

export interface SkillTree {
  name: string;
  description: string;
  nodes: SkillNode[];
}

export interface Build {
  name: string;
  description: string;
  skills: string[];
  gear: string[];
  playstyle: string;
  difficulty: "Iniciante" | "Intermediario" | "Avancado";
}

export interface GameClass {
  id: string;
  name: string;
  title: string;
  description: string;
  role: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  imageUrl?: string;
  skillTrees: SkillTree[];
  recommendedBuilds: Build[];
  pros: string[];
  cons: string[];
  playstyle: string;
}

/* ── Resources & Crafting ── */

export interface Resource {
  id: string;
  name: string;
  tier: number;
  description: string;
  locations: string[];
  usedIn: string[];
  imageUrl?: string;
}

export interface CraftingStation {
  id: string;
  name: string;
  unlockLevel: number;
  description: string;
  recipes: Recipe[];
}

export interface Recipe {
  name: string;
  station: string;
  ingredients: ResourceRequirement[];
  result: string;
  craftTime?: string;
}

/* ── Vehicles ── */

export interface VehicleMk {
  level: number;
  stats: Record<string, string | number>;
  materialsNeeded: ResourceRequirement[];
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  description: string;
  imageUrl?: string;
  mkLevels: VehicleMk[];
  unlockRequirement: string;
}

/* ── Map ── */

export interface POI {
  name: string;
  type: string;
  description: string;
  dangers: string[];
  rewards: string[];
}

export interface MapZone {
  id: string;
  name: string;
  type: "pve" | "pvpve";
  size: string;
  description: string;
  pointsOfInterest: POI[];
  imageUrl?: string;
}

/* ── Factions / Lore ── */

export interface Faction {
  id: string;
  name: string;
  description: string;
  history: string[];
  notableFigures: string[];
  alignment: string;
  imageUrl?: string;
}

/* ── Navigation ── */

export interface NavItem {
  label: string;
  path: string;
  icon: string;
  children?: NavItem[];
}
