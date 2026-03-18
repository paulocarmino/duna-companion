# Dune Awakening Companion

A complete, interactive gameplay companion for **Dune Awakening**.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)

## About

**Dune Awakening Companion** is a web app that serves as a gameplay guide for Dune Awakening. All in-app content is in **Brazilian Portuguese**, covering everything from basic survival mechanics to advanced endgame strategies.

### Content

- **Progression Guide** — Full walkthrough split into Early, Mid, and Late game (Level 1–200)
- **Classes & Builds** — 5 classes (Swordmaster, Mentat, Bene Gesserit, Trooper, Planetologist) with skill trees and recommended builds
- **Combat** — Shields, Slow Blade, PvP, and tactics
- **Crafting & Resources** — Stations, recipes, and material tiers
- **Survival** — Water, heat, sandworms, and stillsuits
- **Base Building** — Construction, Sub-Fief, and defense
- **Vehicles** — From Sandbike to Ornithopter (Mk1–Mk6)
- **Map & Locations** — Hagga Basin, Deep Desert, and POIs
- **Lore & Factions** — Atreides, Harkonnen, Fremen, Bene Gesserit
- **Landsraad & Politics** — Guilds and weekly voting
- **Pro Tips** — Advanced strategies and meta
- **Beginner Tips** — Common mistakes and how to avoid them

## Architecture

3-column layout:

| Sidebar | Main Content | Reference Panel |
|---|---|---|
| Navigation across all sections | Pages with ProgressionRenderer | "Codex of Arrakis" with ReferenceCards |

### Reference Cards

The right-side panel displays contextual cards in 4 types:

- **Tip** (gold) — Practical tips
- **Lore** (purple) — Dune universe context
- **Mechanic** (blue) — Game mechanic explanations
- **Reference** (orange) — Data and reference tables

### Responsiveness

- **Desktop** — Fixed sidebar + side reference panel
- **Mobile** — Sidebar as drawer, bottom Command Bar, FAB for references, SlideOver panel

## Tech Stack

- **React 19** + **TypeScript 5.9**
- **Tailwind CSS 4** (via Vite plugin)
- **Vite 7** (build tool)
- **React Router 7** (routing)
- **Lucide React** (icons)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd dune-companion

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

### Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build (TypeScript + Vite) |
| `pnpm preview` | Preview the production build |

## Project Structure

```
src/
├── components/
│   ├── content/       # Content components (ProTipBox, Checklist, etc.)
│   ├── layout/        # Layout (MainContent, ReferencePanel, Footer, etc.)
│   ├── navigation/    # Navigation (Sidebar, CommandBar, ReferenceFab)
│   └── ui/            # Base components (Card, Badge, Accordion, etc.)
├── contexts/          # React Contexts (Sidebar, SlideOver, Reference)
├── data/              # Static data (mechanics, navigation, progression)
├── hooks/             # Custom hooks
├── layouts/           # Root layout
├── lib/               # Utilities
└── pages/             # Pages organized by section
```
