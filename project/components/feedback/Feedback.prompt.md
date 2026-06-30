**Feedback** — `Dialog`, `Toast`, `Tooltip`.

```jsx
<Dialog open={open} onClose={close} title="حذف الملخّص؟"
  footer={<><Button variant="danger">حذف</Button><Button variant="secondary" onClick={close}>إلغاء</Button></>}>
  لا يمكن التراجع عن هذا الإجراء.
</Dialog>

<Toast tone="success" title="تم التلخيص" message="الملخّص جاهز للنسخ." onClose={()=>{}} />

<Tooltip content="نسخ إلى الحافظة"><IconButton label="نسخ">⧉</IconButton></Tooltip>
```

`Dialog` scrim is navy with blur + pop-in. `Toast` tones: info/success/warning/danger. `Tooltip` placements: top/bottom/start/end.
