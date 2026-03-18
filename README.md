# Dune Awakening Companion

Guia completo e interativo para sobreviver e dominar Arrakis no jogo **Dune Awakening**.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)

## Sobre

O **Dune Awakening Companion** é uma aplicação web que serve como guia de gameplay para o jogo Dune Awakening. Todo o conteúdo é em **Português Brasileiro** e cobre desde mecânicas básicas de sobrevivência até estratégias avançadas de endgame.

### Conteúdo disponível

- **Guia de Progressão** — Walkthrough completo dividido em Early, Mid e Late game (Level 1–200)
- **Classes & Builds** — As 5 classes (Swordmaster, Mentat, Bene Gesserit, Trooper, Planetologist) com skill trees e builds recomendados
- **Combate** — Escudos, Slow Blade, PvP e táticas
- **Crafting & Recursos** — Estações, receitas e tiers de materiais
- **Sobrevivência** — Água, calor, sandworms e stillsuits
- **Base Building** — Construção, Sub-Fief e defesa
- **Veículos** — Da Sandbike ao Ornithopter (Mk1–Mk6)
- **Mapa & Locais** — Hagga Basin, Deep Desert e POIs
- **Lore & Facções** — Atreides, Harkonnen, Fremen, Bene Gesserit
- **Landsraad & Política** — Guilds e votação semanal
- **Pro Tips** — Estratégias avançadas e meta
- **Dicas de Iniciante** — Erros comuns e como evitá-los

## Arquitetura

Layout de 3 colunas:

| Sidebar | Conteúdo Principal | Painel de Referência |
|---|---|---|
| Navegação com todas as seções | Páginas com ProgressionRenderer | "Códex de Arrakis" com ReferenceCards |

### Reference Cards

O painel lateral direito exibe cards contextuais de 4 tipos:

- 🟡 **Tip** (gold) — Dicas práticas
- 🟣 **Lore** (purple) — Contexto do universo Dune
- 🔵 **Mechanic** (blue) — Explicação de mecânicas do jogo
- 🟠 **Reference** (orange) — Dados e tabelas de referência

### Responsividade

- **Desktop** — Sidebar fixa + painel de referência lateral
- **Mobile** — Sidebar como drawer, Command Bar inferior, FAB para referências, SlideOver panel

## Tech Stack

- **React 19** + **TypeScript 5.9**
- **Tailwind CSS 4** (via plugin Vite)
- **Vite 7** (build tool)
- **React Router 7** (roteamento)
- **Lucide React** (ícones)

## Começando

### Pré-requisitos

- Node.js 18+
- pnpm

### Instalação

```bash
# Clonar o repositório
git clone <repo-url>
cd dune-companion

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Build de produção (TypeScript + Vite) |
| `pnpm preview` | Preview do build de produção |

## Estrutura do Projeto

```
src/
├── components/
│   ├── content/       # Componentes de conteúdo (ProTipBox, Checklist, etc.)
│   ├── layout/        # Layout (MainContent, ReferencePanel, Footer, etc.)
│   ├── navigation/    # Navegação (Sidebar, CommandBar, ReferenceFab)
│   └── ui/            # Componentes base (Card, Badge, Accordion, etc.)
├── contexts/          # React Contexts (Sidebar, SlideOver, Reference)
├── data/              # Dados estáticos (mechanics, navigation, progression)
├── hooks/             # Custom hooks
├── layouts/           # Root layout
├── lib/               # Utilitários
└── pages/             # Páginas organizadas por seção
```
