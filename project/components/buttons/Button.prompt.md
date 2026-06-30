**Button** — the primary clickable action. Navy `primary` for standard actions; turquoise `accent` reserved for the single most important action on a screen (e.g. «لخّص النص»).

```jsx
<Button variant="accent" size="lg" iconStart={<span>✦</span>}>لخّص النص</Button>
<Button variant="secondary">إلغاء</Button>
<Button variant="primary" loading>جارٍ التلخيص…</Button>
```

Variants: `primary` (navy), `accent` (turquoise), `secondary` (outlined), `ghost` (text), `danger` (red). Sizes `sm | md | lg`. Props: `iconStart`, `iconEnd`, `loading`, `disabled`, `fullWidth`.
