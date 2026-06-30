/* LibraryScreen — history of saved summaries & official correspondence. */
function LibraryScreen() {
  const { Tabs, Card, Badge, Tag, Button, IconButton } = window.DesignSystem_4df9a0;

  const items = [
    { title: "اعتماد الخطة التشغيلية للربع القادم", type: "قرار", tone: "navy", status: "مكتمل", st: "success", words: 312, ratio: "64٪", date: "اليوم · 10:24 ص" },
    { title: "تعميم بشأن مواعيد الدوام في رمضان", type: "تعميم", tone: "accent", status: "مكتمل", st: "success", words: 188, ratio: "58٪", date: "أمس · 04:10 م" },
    { title: "محضر اجتماع لجنة التحول الرقمي", type: "محضر", tone: "navy", status: "قيد المراجعة", st: "warning", words: 540, ratio: "71٪", date: "٢٨ يونيو" },
    { title: "خطاب رد على استفسار جهة حكومية", type: "خطاب", tone: "accent", status: "مسودة", st: "neutral", words: 96, ratio: "—", date: "٢٦ يونيو" },
  ];

  return (
    <div style={{ padding: "24px", maxWidth: "var(--container-lg)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
        <div>
          <h1 style={{ fontSize: "var(--fs-h3)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>المكتبة</h1>
          <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)", marginTop: "2px" }}>كل ملخّصاتك ومخاطباتك في مكان واحد</p>
        </div>
        <div style={{ flex: 1 }} />
        <Button variant="primary" iconStart={<Icon name="plus" size={18} />}>ملخّص جديد</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Tabs defaultValue="all" items={[
          { id: "all", label: "الكل", badge: 24 },
          { id: "official", label: "مخاطبات رسمية", badge: 8 },
          { id: "summaries", label: "الملخّصات", badge: 12 },
          { id: "drafts", label: "المسودات", badge: 4 },
        ]} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {items.map((it, i) => (
          <Card key={i} interactive elevation="xs" padding="16px 20px">
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "var(--radius-md)", flexShrink: 0,
                background: "var(--surface-brand-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="file-text" size={20} color="var(--navy-600)" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-body)" }}>{it.title}</span>
                  <Tag tone={it.tone}>{it.type}</Tag>
                </div>
                <div style={{ display: "flex", gap: "14px", fontSize: "var(--fs-xs)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  <span>{it.date}</span>
                  <span>· {it.words} كلمة</span>
                  <span>· اختصار {it.ratio}</span>
                </div>
              </div>
              <Badge tone={it.st} dot={it.st !== "neutral"}>{it.status}</Badge>
              <IconButton label="خيارات" variant="ghost"><Icon name="ellipsis-vertical" size={18} /></IconButton>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
window.LibraryScreen = LibraryScreen;
