---
name: talkhees-design
description: Use this skill to generate well-branded interfaces and assets for منصة تلخيص (Talkhees), an Arabic RTL platform for summarizing and rephrasing official correspondence — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors (navy الكحلي + turquoise الفيروزي), IBM Plex type, fonts, the text logo, and a UI kit of components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill first — it holds the brand context, content
fundamentals (formal Arabic, RTL, no emoji), visual foundations, and iconography rules. Then explore
the other files:

- `styles.css` + `tokens/` — link `styles.css` to pick up all color/type/spacing custom properties.
- `components/<group>/` — React UI primitives (`Button`, `Card`, `Logo`, form controls, `Tabs`,
  `Dialog`, `Toast`, …). Each has a `.prompt.md` with usage. Read components off the compiled bundle:
  `const { Button } = window.DesignSystem_4df9a0;` after `<script src="_ds_bundle.js">`.
- `guidelines/*.card.html` — foundation specimens (colors, type, spacing).
- `ui_kits/app/` — a full interactive RTL web workspace (summarization editor + library) to copy from.

Defaults to remember: Arabic-first and **RTL** (`dir="rtl"`); IBM Plex Sans Arabic body at 1.6
line-height; navy + turquoise only for brand color (turquoise reserved for the single hero action);
flat quiet backgrounds, soft navy-tinted shadows, 10–14px radii; Lucide-style 2px line icons; **no emoji**;
the brand is a text wordmark «منصة تلخيص» (no graphic logo).

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static
HTML files for the user to view. If working on production code, copy assets and apply the rules here to
become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask what they want to build or design, ask a few
focused questions, and act as an expert designer who outputs HTML artifacts _or_ production code,
depending on the need.
