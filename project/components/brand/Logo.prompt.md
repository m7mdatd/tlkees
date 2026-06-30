**Logo** — the منصة تلخيص text logo. No graphic mark exists; the brand is the wordmark + a turquoise «ت» monogram tile.

```jsx
<Logo variant="full" size={28} />              {/* monogram + wordmark */}
<Logo variant="wordmark" />                    {/* text only */}
<Logo variant="mark" />                         {/* tile only — favicon/avatar */}
<Logo tone="inverse" />                         {/* on navy backgrounds */}
```

`size` is the wordmark px size; the tile scales from it. Never recolor outside navy/turquoise.
