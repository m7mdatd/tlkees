# منصة تلخيص — Design System

نظام التصميم لمنصة **تلخيص**: منصّة عربية لتلخيص وإعادة صياغة النصوص والمخاطبات الرسمية.
The design system for **Talkhees (تلخيص)** — an Arabic-first platform that summarizes and
rephrases texts and official correspondence (المخاطبات الرسمية).

> **Sources.** No codebase, Figma file, or brand kit was provided. This system was built
> from the brief: name as text logo (no graphic logo), navy (الكحلي) + turquoise (الفيروزي)
> palette, and IBM type. If a real product, brand guide, or font files exist, share them and
> this system will be reconciled against them.

---

## What this product is
- **Purpose:** paste a long official letter, circular, memo, or decision → get a faithful,
  concise summary (and optional rephrase) that keeps the formal register and meaning.
- **Audience:** government & corporate communications staff, administrators, executive offices.
- **Surfaces:** a web workspace (RTL) — a summarization editor and a library of saved summaries.
- **Language & direction:** Arabic-first, **RTL** throughout. Latin/numeric metadata uses mono.

---

## Content fundamentals — كيف نكتب

**Tone.** Formal, respectful, calm, and economical — never casual, never hype. The product
serves official correspondence, so the voice mirrors that register: clear, dignified, precise.

**Person & address.** Address the user with the polite plural / imperative used in formal Arabic
(«ألصق النص»، «اعتمد ما يلزم»). Avoid first person from the product. No slang.

**Casing & punctuation.** Arabic has no letter case; emphasis comes from **weight**, not capitals.
Use Arabic punctuation and quotation marks «…». Latin labels stay lowercase or Title Case sparingly.

**Numerals.** Prefer Arabic-Indic numerals (٤٢٠، ٦٤٪) in product copy and counts; Latin numerals are
acceptable in technical/version contexts. Counts, ratios, timestamps render in IBM Plex Mono.

**Length.** Microcopy is short and action-led. Button labels are 1–3 words («لخّص النص»،
«ملخّص جديد»). Helper text is one calm sentence.

**Emoji.** Not used. The register is formal; iconography carries visual meaning instead.

**Examples (use these as voice references):**
- Hero: «حوّل المخاطبات الرسمية الطويلة إلى ملخّصات دقيقة وواضحة في ثوانٍ.»
- Empty state: «اضغط «لخّص النص» للحصول على ملخّص يحافظ على النبرة الرسمية.»
- Success toast: «تم التلخيص بنجاح — الملخّص جاهز للنسخ أو التصدير.»
- Section labels: «النص الأصلي»، «الملخّص»، «النقاط الرئيسية»، «مخاطبات رسمية».

---

## Visual foundations — الأسس البصرية

**Palette.** Two brand hues over a cool neutral ground:
- **Navy · الكحلي** (`--navy-800 #0E2C4A`) — primary. Trust, formality, structure. Used for
  primary buttons, headings, the inverse sidebar panel, and the wordmark.
- **Turquoise · الفيروزي** (`--teal-500 #14ABA1`) — accent. Clarity and action. Reserved for the
  single hero action (summarize), active indicators, focus rings, and small highlights.
- **Neutrals** — a faintly navy-tinted cool gray scale for text, borders, and surfaces.
- Discipline: navy + turquoise only for brand color. Status colors (success/warning/danger) appear
  only for their semantic meaning. No purple, no third brand hue, no gradients as decoration.

**Typography.** IBM Plex Sans Arabic across the board (display → body), IBM Plex Mono for numerals,
counts, versions, and timestamps. Display/headings are Bold (700) / Semibold (600); body is Regular
(400) at 16px with a generous **1.6 line-height** (Arabic reads better a touch looser). Emphasis is
by weight, never caps.

**Backgrounds.** Flat and quiet — `--surface-page` (#F5F8FA) ground, white cards. No photographic
hero imagery, no full-bleed gradients, no textures. The one rich surface is the navy sidebar panel
(`--surface-inverse`). Summaries are presented as clean white "paper."

**Cards.** White, `--radius-lg (14px)`, 1px `--border-subtle` hairline, soft navy-tinted shadow
(`--shadow-sm` resting). An optional 3px turquoise top keyline (`accent`) marks result cards.
Interactive cards lift 2px and deepen to `--shadow-md` on hover.

**Shadows.** Soft, low-spread, and tinted with navy (rgba 14,44,74) rather than pure black — paper on
a cool desk, not floating glass. Scale xs→xl plus a turquoise `--shadow-accent` glow for active accents.
Inputs use a faint inset (`--shadow-inset`).

**Corner radii.** Calm rounding: controls & cards default to `--radius-md (10px)` / `--radius-lg (14px)`.
Pills (`999px`) only for chips, badges, and avatars. Nothing fully pill-shaped that isn't a token/identity.

**Borders.** Hairline 1px borders (`--border-subtle / --border-default`); turquoise border on focus
and on accent surfaces. Dividers separate the two editor panes and pane headers.

**Animation.** Restrained and quick. Transitions 120–200ms, `ease` / `cubic-bezier(.2,.8,.2,1)` for the
dialog pop. Buttons translateY(1px) on press. The summarize action shows a shimmer skeleton then a
fade-in. No bounces, no infinite decorative loops.

**Hover / press states.** Hover = a step darker on filled buttons (navy-700 / teal-600), subtle navy-50
wash on ghost/nav items. Press = the next-darker shade + a 1px downward nudge. Focus = turquoise ring
(`--ring`, 3px 35%-alpha turquoise).

**Transparency & blur.** Used sparingly: the dialog scrim is navy at ~55% with a 2px backdrop blur.
Otherwise surfaces are opaque.

**Layout rules.** Fixed 64px header, 280px right-side nav rail (RTL), scrolling main. Reading widths
capped (`--container-lg/md`). 4px spacing grid. The editor is a 50/50 two-pane split with source on the
right (start) and summary on the left.

---

## Iconography — الأيقونات

- **System:** clean **2px line icons in the Lucide style** (lucide.dev, ISC). They are hand-bundled
  as React SVGs in `ui_kits/app/icons.jsx` so React keeps DOM control across re-renders (Lucide's
  runtime node-replacement fights React). Stroke `2`, round caps/joins, 24×24 viewBox, `currentColor`.
  **In production, swap for the real `lucide-react` package** — the names used (`search`, `bell`,
  `sparkles`, `library`, `file-text`, `copy`, `refresh-cw`, `download`, `check`, `plus`,
  `ellipsis-vertical`, `settings`, `layout-template`, `circle-help`) all map 1:1 to Lucide.
- **Sizing:** 16px inline / 18px default / 20–24px for feature tiles. Color via `currentColor` so icons
  inherit text color; accent (turquoise) reserved for active/primary affordances.
- **No emoji**, no Unicode-glyph icons in product UI. Decorative `✦` appears only as a flourish on the
  summarize action and the logo monogram concept.
- **Logo:** there is **no graphic logo**. The brand mark is the wordmark «منصة تلخيص» plus a turquoise
  «ت» monogram tile — see the `Logo` component (`components/brand/`).

---

## How to use this system

Consumers link the single global stylesheet and read components off the compiled bundle:

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Card, Logo } = window.DesignSystem_4df9a0; // namespace
</script>
```

All color/type/spacing decisions flow from CSS custom properties in `tokens/` — reference the
**semantic aliases** (`--brand-primary`, `--surface-card`, `--text-body`, `--border-subtle`) in new
work, not the raw scale.

---

## Index — manifest of this project

**Foundations**
- `styles.css` — global entry point (@import list only). Consumers link this.
- `tokens/colors.css` — navy, turquoise, neutral, status scales + semantic aliases.
- `tokens/typography.css` — families, weights, type scale, line-heights, roles.
- `tokens/spacing.css` · `tokens/radii.css` · `tokens/shadows.css` · `tokens/base.css` (RTL resets).
- `tokens/fonts.css` — IBM Plex Sans Arabic + IBM Plex Mono (Google Fonts CDN — see caveat below).

**Components** (`components/<group>/` — `.jsx` + `.d.ts` + `.prompt.md` + a card per group)
- `buttons/` — `Button`, `IconButton`
- `forms/` — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- `data-display/` — `Card`, `Badge`, `Tag`, `Avatar`
- `navigation/` — `Tabs`
- `feedback/` — `Dialog`, `Toast`, `Tooltip`
- `brand/` — `Logo`

**Foundation specimen cards** (`guidelines/*.card.html`) — Colors, Type, Spacing groups.

**UI kit** (`ui_kits/app/`) — interactive RTL web workspace: `AppShell`, `EditorScreen` (the
summarization tool), `LibraryScreen`; wired in `index.html`. Icons in `icons.jsx`.

**Other**
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

---

## Caveats / open questions
- **Fonts are loaded from the Google Fonts CDN** (`tokens/fonts.css`), so the compiler reports 0
  self-hosted webfonts. Fonts render correctly in the browser. Share the licensed IBM Plex Sans Arabic
  / IBM Plex Mono `.woff2` files to self-host (offline-safe, no third-party request).
- **No real product reference** was available — screens, copy, and the library content are plausible
  but invented. Share a Figma file, screenshots, or the live app to make the UI kit pixel-accurate.
- **Icons are Lucide-style, hand-bundled**, not the official package. Swap to `lucide-react` in production.
- **"IBM" font** was interpreted as the IBM Plex family (IBM Plex Sans Arabic for Arabic). Confirm if you
  meant a different IBM typeface.
