/* EditorScreen — the core summarization tool. Right pane: source text.
   Left pane: generated summary. Top bar: style, length, tone, action. */
function EditorScreen() {
  const { Button, Select, Badge, Tag, Card, Switch, Toast } = window.DesignSystem_4df9a0;
  const SAMPLE = "تحية طيبة وبعد،\n\nإشارةً إلى الاجتماع المنعقد بتاريخه، يسرّنا إحاطتكم علماً بأنه قد تقرر اعتماد الخطة التشغيلية للربع القادم، وتتضمن ثلاثة محاور رئيسية: تطوير الخدمات الرقمية، ورفع كفاءة الإجراءات الداخلية، وتعزيز قنوات التواصل مع المستفيدين. كما تقرر تشكيل لجنة لمتابعة التنفيذ ورفع تقرير دوري كل أسبوعين.\n\nنأمل التكرّم بالاطلاع واعتماد ما يلزم.";

  const [text, setText] = React.useState(SAMPLE);
  const [length, setLength] = React.useState("متوسط");
  const [done, setDone] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [toast, setToast] = React.useState(false);

  const run = () => {
    setLoading(true); setDone(false);
    setTimeout(() => { setLoading(false); setDone(true); setToast(true); setTimeout(() => setToast(false), 2600); }, 1300);
  };

  const lengths = ["قصير", "متوسط", "طويل"];
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Toolbar */}
      <div style={{
        display: "flex", alignItems: "center", gap: "16px", padding: "16px 24px",
        background: "var(--surface-card)", borderBottom: "1px solid var(--border-subtle)", flexWrap: "wrap",
      }}>
        <div>
          <h1 style={{ fontSize: "var(--fs-h4)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>أداة التلخيص</h1>
          <p style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)", marginTop: "2px" }}>لخّص وأعد صياغة المخاطبات الرسمية بدقة</p>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ width: "180px" }}>
          <Select options={["رسمي", "موجز", "ودّي", "تنفيذي"]} size="sm" />
        </div>
        {/* segmented length */}
        <div style={{ display: "inline-flex", background: "var(--gray-100)", borderRadius: "var(--radius-md)", padding: "3px" }}>
          {lengths.map((l) => (
            <button key={l} onClick={() => setLength(l)} style={{
              border: "none", cursor: "pointer", font: "inherit", fontSize: "var(--fs-xs)",
              fontWeight: "var(--fw-medium)", padding: "6px 14px", borderRadius: "var(--radius-sm)",
              background: length === l ? "var(--surface-card)" : "transparent",
              color: length === l ? "var(--navy-800)" : "var(--text-muted)",
              boxShadow: length === l ? "var(--shadow-xs)" : "none",
            }}>{l}</button>
          ))}
        </div>
        <Button variant="accent" loading={loading} onClick={run}
          iconStart={!loading && <Icon name="sparkles" size={18} />}>
          {loading ? "جارٍ التلخيص…" : "لخّص النص"}
        </Button>
      </div>

      {/* Panes */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px",
        background: "var(--border-subtle)", minHeight: 0 }}>
        {/* Source (right in RTL) */}
        <section style={{ background: "var(--surface-card)", display: "flex", flexDirection: "column", minHeight: 0 }}>
          <PaneHeader icon="file-text" title="النص الأصلي" meta={`${words} كلمة`} />
          <textarea value={text} onChange={(e) => { setText(e.target.value); setDone(false); }}
            placeholder="ألصق نص المخاطبة أو الخطاب هنا…"
            style={{
              flex: 1, border: "none", outline: "none", resize: "none", padding: "20px 24px",
              font: "inherit", fontSize: "var(--fs-body)", lineHeight: "var(--lh-relaxed)",
              color: "var(--text-body)", background: "transparent", whiteSpace: "pre-wrap",
            }} />
        </section>

        {/* Summary (left in RTL) */}
        <section style={{ background: "var(--surface-card)", display: "flex", flexDirection: "column", minHeight: 0 }}>
          <PaneHeader icon="scroll-text" title="الملخّص" meta={done ? "اختصار ٦٤٪" : ""}
            actions={done && <SummaryActions />} />
          <div style={{ flex: 1, overflow: "auto", padding: "20px 24px" }}>
            {loading && <SummarySkeleton />}
            {!loading && !done && <EmptyState />}
            {!loading && done && <SummaryBody length={length} />}
          </div>
        </section>
      </div>

      {toast && (
        <div style={{ position: "fixed", bottom: "24px", insetInlineStart: "24px", zIndex: 200 }}>
          <Toast tone="success" title="تم التلخيص بنجاح" message="الملخّص جاهز للنسخ أو التصدير." onClose={() => setToast(false)} />
        </div>
      )}
    </div>
  );

  function PaneHeader({ icon, title, meta, actions }) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 24px",
        borderBottom: "1px solid var(--border-subtle)" }}>
        <Icon name={icon} size={18} color="var(--brand-accent)" />
        <span style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-sm)" }}>{title}</span>
        {meta && <Badge tone="neutral">{meta}</Badge>}
        <div style={{ flex: 1 }} />
        {actions}
      </div>
    );
  }

  function SummaryActions() {
    const { IconButton } = window.DesignSystem_4df9a0;
    return (
      <div style={{ display: "flex", gap: "4px" }}>
        <IconButton label="نسخ" variant="ghost" size="sm"><Icon name="copy" size={16} /></IconButton>
        <IconButton label="إعادة الصياغة" variant="ghost" size="sm"><Icon name="refresh-cw" size={16} /></IconButton>
        <IconButton label="تصدير" variant="ghost" size="sm"><Icon name="download" size={16} /></IconButton>
      </div>
    );
  }

  function SummaryBody({ length }) {
    const { Tag } = window.DesignSystem_4df9a0;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "18px", lineHeight: "var(--lh-relaxed)" }}>
        <p style={{ fontSize: "var(--fs-lead)", color: "var(--text-strong)", fontWeight: "var(--fw-medium)" }}>
          اعتُمدت الخطة التشغيلية للربع القادم، وتقوم على ثلاثة محاور مع تشكيل لجنة لمتابعة التنفيذ.
        </p>
        <div>
          <div style={{ fontSize: "var(--fs-xs)", fontWeight: "var(--fw-semibold)", color: "var(--text-subtle)", marginBottom: "8px" }}>النقاط الرئيسية</div>
          <ul style={{ margin: 0, paddingInlineStart: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {["تطوير الخدمات الرقمية", "رفع كفاءة الإجراءات الداخلية", "تعزيز قنوات التواصل مع المستفيدين", "رفع تقرير متابعة كل أسبوعين"].map((p, i) => (
              <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "var(--fs-body)", color: "var(--text-body)" }}>
                <Icon name="check" size={16} color="var(--brand-accent)" style={{ marginTop: "4px", flexShrink: 0 }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", paddingTop: "8px", borderTop: "1px solid var(--border-subtle)" }}>
          <Tag tone="accent">قرار</Tag>
          <Tag tone="navy">خطة تشغيلية</Tag>
          <Tag tone="gray">{length}</Tag>
        </div>
      </div>
    );
  }

  function SummarySkeleton() {
    const bar = (w) => <div style={{ height: "14px", width: w, borderRadius: "6px",
      background: "linear-gradient(90deg,var(--gray-100),var(--gray-200),var(--gray-100))",
      backgroundSize: "200% 100%", animation: "tlkhs-shimmer 1.2s infinite" }} />;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <style>{`@keyframes tlkhs-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
        {bar("90%")}{bar("75%")}{bar("82%")}<div style={{ height: "8px" }} />{bar("60%")}{bar("70%")}
      </div>
    );
  }

  function EmptyState() {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center", color: "var(--text-subtle)", gap: "12px", paddingTop: "40px" }}>
        <div style={{ width: "52px", height: "52px", borderRadius: "var(--radius-lg)",
          background: "var(--surface-accent-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="sparkles" size={24} color="var(--brand-accent)" />
        </div>
        <div style={{ fontSize: "var(--fs-sm)", maxWidth: "240px", lineHeight: 1.6 }}>
          اضغط «لخّص النص» للحصول على ملخّص دقيق يحافظ على النبرة الرسمية.
        </div>
      </div>
    );
  }
}
window.EditorScreen = EditorScreen;
