**Forms** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`. All RTL-first, share the inset field well, turquoise focus ring, and red error state.

```jsx
<Input label="عنوان المخاطبة" placeholder="اكتب العنوان…" hint="اختياري" />
<Textarea label="النص الأصلي" rows={8} showCount maxLength={5000} />
<Select label="الأسلوب" options={["رسمي","موجز","تفصيلي"]} />
<Checkbox label="إظهار النقاط الرئيسية" defaultChecked />
<Radio name="len" options={["قصير","متوسط","طويل"]} defaultValue="متوسط" />
<Switch label="الحفاظ على النبرة الرسمية" defaultChecked />
```

Controlled (`value`/`checked` + `onChange`) or uncontrolled (`defaultValue`/`defaultChecked`).
