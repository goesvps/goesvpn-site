# GoesVPN Design System

## Sources
- `uploads/Manual_da_Marca_GoesVPN.pdf` — official brand manual (colors, typography, logo usage, carousel application pattern).
- `uploads/logocomfundobranco.png` — logo file, white background only (no transparent/dark version supplied).
- `https://loja.goesvpn.com.br` — live storefront, fetched for copy, IA and product structure (no codebase or Figma access was available, so visual styling for the storefront UI kit is inferred from the brand manual, not the live CSS).
- No codebase or Figma file was attached to this project.

## Company & product context
GoesVPN is a Brazilian company building apps, digital storefronts and digital products. Its flagship product is **loja.goesvpn.com.br** ("Minha Loja"), a marketplace where customers buy courses, e-books, templates, spreadsheets and software; producers list and sell their own products; and affiliates earn commission promoting the catalog. The brand identity is deliberately tech/futuristic: dark backgrounds, blue gradients, and a neon-cyan accent, reinforced by a robot mascot, evoking security, technology and connection.

## Content fundamentals
- **Language**: Brazilian Portuguese, direct address to the buyer ("Acesse instantaneamente e comece sua jornada digital hoje mesmo", "Cadastre seu e-mail e seja o primeiro a saber").
- **Tone**: energetic, benefit-forward, low-friction — copy leads with outcomes ("transformam sua vida") and removes-risk language ("Garantia de 7 dias", "Sem spam, prometemos!").
- **Casing**: sentence case for headlines/body; eyebrows and CTA buttons are ALL CAPS with bold weight (per brand manual).
- **Emoji**: used functionally as category/trust icons on the storefront (🎓 📚 🎨 📊 💻 ♾️ 🔒 ✅ ⚡) — not as decoration in body copy.
- **Numbers as proof**: category counts ("2.4K+", "1.8K+") and short trust stats ("7 dias", "R$ 197") appear as compact chips, not paragraphs.
- **CTAs**: short, verb-first, uppercase ("Explorar catálogo", "Quero receber", "Comprar").

## Visual foundations
- **Colors**: 5-color palette straight from the logo — Preto Profundo `#04070D` (primary bg), Azul Marinho `#0E3267` (secondary bg / blocks), Azul Aço `#2F6494` (support/shadows, used at 10–35% opacity), Ciano Neon `#35D1F2` (CTAs, icons, glow — never a large background fill), Branco Gelo `#D5E9F4` (primary text on dark). Preto Profundo and Azul Marinho are never combined without a shape transition (circle/block) between them.
- **Type**: geometric, bold, screen-legible. Montserrat Black/ExtraBold for H1s, Poppins Bold for eyebrows/subheads (uppercase, cyan), Inter Regular/Medium for body (Branco Gelo on dark, `#1A1A1A` on light). CTAs are bold, uppercase, high-contrast (cyan fill + black text).
- **Spacing**: 4px base scale (4/8/16/24/32/48/64/96/128px), generous section padding (64–96px vertical).
- **Backgrounds**: flat dark fields (no photography); the signature motif is a low-opacity (14–16%) neon-cyan circle "glow" in a corner, plus a thin vertical cyan bar beside titles as a signature element.
- **Animation**: none specified in brand materials — treat as a static/minimal-motion brand; UI kit uses only simple hover/transition easing (`--ease-standard`, ~120–200ms), no bounces.
- **Hover states**: cards lighten one step (`--surface-card` → `--surface-card-hover`); buttons brighten (`--accent` → `--accent-hover`).
- **Press/active**: buttons darken (`--accent-active`); no scale/shrink effects specified.
- **Borders**: hairline, low-contrast (`--border-subtle` / `--border-default`, white-gelo at 10–16% opacity) — never heavy or colored borders except the intentional cyan accent bar.
- **Shadows**: soft dark drop shadows for elevation (`--shadow-card`, `--shadow-elevated`); cyan glow (`--glow-accent`) reserved for CTAs and the signature circle motif, not general elevation.
- **Corner radii**: pill-shaped buttons/chips (`--radius-pill`), 10–16px rounded cards (`--radius-md` / `--radius-lg`).
- **Cards**: dark surface (`--surface-card`), 1px subtle border, soft shadow, 10–16px radius — no colored left-border accent.
- **Transparency/blur**: used sparingly — sticky header uses a translucent blurred dark background; the glow circle uses opacity, not blur, for its softness.
- **Imagery color vibe**: no photography supplied; the only imagery is the flat-illustrated robot mascot. Product thumbnails in the UI kit use a navy→steel-blue gradient placeholder rather than invented photography.
- **Layout rules**: sticky header; centered max-width content (`--container-max: 1200px`); a page indicator ("01 / 05") bottom-right on carousel-style compositions.

## Iconography
- The brand manual defines no formal icon system. The live storefront uses **emoji** as category/trust icons (🎓 📚 🎨 📊 💻 ♾️ 🔒 ✅ ⚡) — kept as-is in the UI kit for storefront-specific chips to match the real product.
- For UI-kit chrome that needs crisper icons (cart, menu, search), this system substitutes **Lucide** (MIT, CDN-loaded, stroke-based) as the closest match to the brand's clean geometric-tech look. This is a documented substitution, not something found in source material — flagged per `guidelines/iconography.card.html`.
- No SVG/PNG icon sprite was supplied by the brand.

## Fonts
Poppins, Montserrat and Inter are the brand manual's own recommended (free, Google Fonts) typefaces — no font files were supplied, so `tokens/fonts.css` loads them from the Google Fonts CDN. This is not a substitution; it matches the manual exactly.

## Logo
Only a white-background PNG (`assets/logo-white-bg.png`) was supplied — no transparent or dark-mode version. It is used as-is (placed on a white chip) in dark contexts (see `ui_kits/loja/Header.jsx`) rather than recolored or re-drawn. If a transparent-background or reversed logo exists, please share it.

## Index
- `styles.css` — root stylesheet, imports everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `base.css` — global resets.
- `assets/logo-white-bg.png` — the only logo asset supplied.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand/glow pattern, Iconography).
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Switch.
- `components/core/` — Card, Badge, Tag.
- `components/navigation/` — Tabs.
- `components/feedback/` — Toast, Tooltip.
- `ui_kits/loja/` — click-through recreation of the loja.goesvpn.com.br storefront (Home → Catalog → Cart drawer).
- `SKILL.md` — Claude Code / Agent Skills-compatible export of this system.

### Intentional additions
No component-inventory source (codebase/Figma) was attached, so the standard primitive set above was authored from scratch, sized to what the storefront needs (no Dialog/Radio/Accordion — not seen in the fetched storefront copy).
