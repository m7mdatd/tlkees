**Data display** — `Card`, `Badge`, `Tag`, `Avatar`.

```jsx
<Card accent elevation="md">
  <h3>ملخّص المخاطبة</h3>
  <p>نص الملخّص…</p>
</Card>
<Badge tone="accent" dot>جاهز</Badge>
<Badge tone="warning">قيد المراجعة</Badge>
<Tag tone="navy" onRemove={() => {}}>قرار إداري</Tag>
<Avatar name="نورة العتيبي" size="md" />
```

`Card`: `elevation` none→lg, `accent` top keyline, `interactive` hover-lift. `Badge` tones: neutral/navy/accent/success/warning/danger. `Tag` tones: navy/accent/gray.
