# Dune Awakening Companion - Design Guideline

## Conceito Visual: "Brutalismo Desertico Cinematografico"

Inspirado diretamente nos filmes Dune de Denis Villeneuve e na UI oficial de Dune Awakening. A estetica evoca um manuscrito antigo de Arrakis digitalizado — quente, texturizado, monumental, com contencao no uso de cor.

**NAO eh**: dark mode generico com neon, cyberpunk, tech startup, cold minimalism.
**EH**: quente, desertico, texturizado, atmospheric, cinematografico, monumental.

---

## Paleta de Cores

### Primarias
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Dune Gold | `#f4cf8b` | 244, 207, 139 | Accent primario. Headings, links, destaques. Usar com CONTENCAO — nao eh neon. |
| Dune Gold Dim | `#c9a55e` | 201, 165, 94 | Variacao apagada para bordas, separadores, estados secundarios. |
| Dune Cream | `#fff5d2` | 255, 245, 210 | Texto principal. Tom quente, nao branco puro. |
| Dune Cream Muted | `#bfb49e` | 191, 180, 158 | Texto secundario, descricoes, placeholders. |

### Secundarias
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Dune Orange | `#e0984b` | 224, 152, 75 | Accent secundario, hover states, badges. |
| Dune Orange Hover | `#e15e09` | 225, 94, 9 | CTAs intensos, hover de botoes primarios. |
| Dune Blue | `#3576ae` | 53, 118, 174 | Agua, spice, mecanicas, informacao. Usado SOMENTE contextualmente. |
| Dune Blue Dim | `#2a5d8a` | 42, 93, 138 | Variacao apagada do blue. |
| Dune Purple | `#311c35` | 49, 28, 53 | Gradientes atmosfericos, lore, backgrounds profundos. |
| Dune Purple Dim | `#231428` | 35, 20, 40 | Sombras profundas. |
| Dune Danger | `#c0392b` | 192, 57, 43 | Avisos, perigos, sandworms. |

### Backgrounds
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Dune Dark | `#131313` | 19, 19, 19 | Background principal. Dark brown quente, NAO preto puro. |
| Dune Dark Lighter | `#1a1917` | 26, 25, 23 | Variacao levemente mais clara para camadas. |
| Dune Brown | `#24201d` | 36, 32, 29 | Cards, sidebar, paineis, glassmorphism base. |
| Dune Brown Light | `#2e2a26` | 46, 42, 38 | Hover states de elementos sobre brown. |

---

## Tipografia

### Fontes
| Uso | Fonte | Peso | Estilo |
|-----|-------|------|--------|
| Headings | **Philosopher** (Google Fonts) | 700 (Bold) | Uppercase, letter-spacing 0.15em |
| Body | **Raleway** (Google Fonts) | 400 (Regular) | Normal case, line-height 1.7 |
| Labels/Tags | Raleway | 600 (Semi-bold) | Uppercase, letter-spacing 0.1em, font-size menor |
| Code/Numeros | Raleway | 500 (Medium) | Tabular nums quando disponivel |

### Escalas
- Display (hero): 40-48px
- H1: 32-36px
- H2: 24-28px
- H3: 18-20px
- H4: 16px
- Body: 15px
- Small: 13px
- Micro: 11px (labels, badges)
- Nano: 10px (metadata, footers)

### Regras
- Headings sao SEMPRE uppercase com letter-spacing
- Body text usa line-height generoso (1.7)
- Nunca use branco puro (#fff) — sempre cream (#fff5d2) ou muted (#bfb49e)
- Paragrafos devem ter max-width para leitura confortavel (~65-75 caracteres por linha)

---

## Espacamento

- Padding de cards: 16-24px
- Gap entre cards em grid: 12-16px
- Margem de secoes: 40-48px top
- Breathing room: GENEROSO. Evite informacao colada.
- Sidebar width: 288px (18rem)
- Content max-width: 896px (56rem)

---

## Componentes Visuais

### Glassmorphism (Quente)
```css
/* Glass padrao */
background: rgba(36, 32, 29, 0.55);
backdrop-filter: blur(16px);
border: 1px solid rgba(244, 207, 139, 0.08);

/* Glass forte */
background: rgba(36, 32, 29, 0.8);
backdrop-filter: blur(24px);
border: 1px solid rgba(244, 207, 139, 0.12);
```
IMPORTANTE: o glassmorphism usa tons MARROM (24, 20, 13), NAO cinza. Isso da a sensacao quente e organica.

### Noise Overlay (Textura de Areia)
Aplicado sobre paineis para dar textura sutil. Opacity muito baixa (3-4%). Usa feTurbulence SVG para gerar ruido proceduralmentee.

### Gradientes Atmosfericos
```css
/* Background principal */
radial-gradient(ellipse at 20% 0%, rgba(49,28,53,0.4) 0%, transparent 60%),
radial-gradient(ellipse at 80% 100%, rgba(49,28,53,0.2) 0%, transparent 50%);
```
Purple sutil que cria profundidade — como o ceu de Arrakis ao entardecer.

### Elementos Decorativos
- **Diamante/Losango**: quadrado rotacionado 45deg em gold. Usado como separadores, bullets, e accents.
- **Linhas douradas**: h-px com gradient from-transparent to-gold/20. Finas, sutis.
- **Border radius**: 8px padrao (rounded-lg). Evitar cantos muito arredondados.

### Animacoes
SEMPRE sutis. Nunca flashy.
- Fade-in no conteudo: 400ms ease-out, translateY(8px) -> 0
- Slide de painel: 300ms ease-out
- Hover glow: box-shadow com gold em opacity muito baixa (0.05)
- Expand/collapse: 300ms ease-in-out com grid-rows trick
- Transicao de cores: 200ms

---

## Iconografia

- Biblioteca: **Lucide React** (apenas)
- Tamanho padrao: 16px
- Em headers: 24px
- Em badges/labels: 14px
- Cor: herda do texto pai
- NAO usar emojis em nenhum contexto

---

## Responsividade

- Desktop: Sidebar fixa + conteudo + slide-over panel
- Tablet (< 1024px): Sidebar como drawer overlay, conteudo fullwidth
- Mobile (< 768px): Command Bar flutuante no bottom, slide-over vira fullscreen modal
- Breakpoints: 768px (md), 1024px (lg)

---

## Prompts para Geracao de Assets (IA)

Use estes prompts em Midjourney, DALL-E, ou outra IA gerativa:

### Favicon (32x32 / 192x192)
```
Minimalist geometric logo for a Dune Awakening game companion app.
A golden diamond/rhombus shape on a dark brown background (#131313).
The diamond is warm gold (#f4cf8b) with subtle sand texture.
Clean, sharp edges. No text. Icon style, 1:1 ratio.
Style: cinematic, minimal, warm gold on dark.
```

### Logo Principal
```
Logo for "DUNE AWAKENING COMPANION" app.
Uppercase text in a serif font similar to Philosopher.
Golden sand color (#f4cf8b) on dark background (#131313).
A small diamond/rhombus accent above or between words.
Style: monumental, cinematic, inspired by Denis Villeneuve's Dune films.
Clean and readable. No ornate decorations, just typography and one geometric accent.
Aspect ratio: 3:1 horizontal.
```

### Open Graph Image (1200x630)
```
Dark cinematic banner for a Dune game companion website.
Background: deep dark brown (#131313) with subtle purple atmospheric gradient.
Center: golden text "DUNE AWAKENING" in uppercase serif font with generous letter-spacing.
Below: smaller text "COMPANION" in lighter gold.
Decorative: thin golden lines extending from a central diamond shape.
Subtle sand/noise texture overlay.
Mood: epic, mysterious, warm gold on darkness.
Style: Villeneuve Dune aesthetic, not sci-fi neon.
```

### Guia para a IA Gerativa
Ao gerar qualquer asset para este projeto, siga estas diretrizes:

**DO (Faca):**
- Use tons quentes: golds, ambers, browns, deep purples
- Mantenha minimalismo — poucos elementos, bem posicionados
- Inspire-se nos filmes Dune de Villeneuve (2021, 2024)
- Use texturas de areia sutis
- Formas geometricas simples (diamantes, linhas retas)
- Sensacao de monumentalidade e vastidao

**DON'T (Nao faca):**
- Neon, brilho intenso, cores saturadas
- Efeitos cyberpunk ou sci-fi generico
- Decoracoes ornamentadas ou complexas
- Branco puro ou preto puro
- Emojis ou icones cartoon
- Gradientes coloridos tipo arco-iris

### Paleta Resumida para Prompts
Quando pedir assets, inclua estas cores no prompt:
- Background: #131313 (dark brown quase preto)
- Primary accent: #f4cf8b (gold areia)
- Secondary accent: #e0984b (amber queimado)
- Atmospheric: #311c35 (purple profundo)
- Text: #fff5d2 (cream quente)
