"use client";
import React, { useState } from "react";
import { Button, Badge, Tag, Toast, IconButton } from "@/components/ds";
import { Icon } from "@/components/Icon";
import { useAuth } from "@/lib/auth";
import { createSummary } from "@/lib/summaries";
import { toneForType } from "@/lib/format";

const SAMPLE = "تحية طيبة وبعد،\n\nإشارةً إلى الاجتماع المنعقد بتاريخه، يسرّنا إحاطتكم علماً بأنه قد تقرر اعتماد الخطة التشغيلية للربع القادم، وتتضمن ثلاثة محاور رئيسية: تطوير الخدمات الرقمية، ورفع كفاءة الإجراءات الداخلية، وتعزيز قنوات التواصل مع المستفيدين. كما تقرر تشكيل لجنة لمتابعة التنفيذ ورفع تقرير دوري كل أسبوعين.\n\nنأمل التكرّم بالاطلاع واعتماد ما يلزم.";

/* EditorScreen — the core summarization tool. */
export default function EditorScreen() {
  const { user, isFirebaseConfigured } = useAuth();
  const [text, setText] = useState(SAMPLE);
  const [length, setLength] = useState("متوسط");
  const [style, setStyle] = useState("رسمي");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);

  const lengths = ["قصير", "متوسط", "طويل"];
  const styles = ["رسمي", "موجز", "ودّي", "تنفيذي"];
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  async function run() {
    if (!text.trim()) { setError("الرجاء إدخال نص للتلخيص."); return; }
    setLoading(true); setError(""); setResult(null);
    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, length, style }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "تعذّر التلخيص.");
      setResult(data);

      // Persist (best-effort) when a user is signed in.
      if (user && isFirebaseConfigured) {
        try {
          await createSummary(user.uid, {
            title: data.title,
            type: data.type,
            sourceText: text,
            summary: data.summary,
            points: data.points,
            length, style,
            wordCount: data.wordCount,
            ratio: data.ratio,
            status: "مكتمل",
          });
          setToast({ tone: "success", title: "تم التلخيص وحفظه", message: "الملخّص جاهز ومحفوظ في مكتبتك." });
        } catch {
          setToast({ tone: "warning", title: "تم التلخيص", message: "تعذّر الحفظ في المكتبة." });
        }
      } else {
        setToast({ tone: "success", title: "تم التلخيص بنجاح", message: "سجّل الدخول لحفظ الملخّص في مكتبتك." });
      }
      setTimeout(() => setToast(null), 3200);
    } catch (err) {
      setError(err.message || "تعذّر التلخيص.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Toolbar */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 24px",
        background: "var(--surface-card)", borderBottom: "1px solid var(--border-subtle)", flexWrap: "wrap" }}>
        <div>
          <h1 style={{ fontSize: "var(--fs-h4)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>أداة التلخيص</h1>
          <p style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)", marginTop: "2px" }}>لخّص وأعد صياغة المخاطبات الرسمية بدقة</p>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ position: "relative" }}>
          <select value={style} onChange={(e) => setStyle(e.target.value)} style={{
            appearance: "none", WebkitAppearance: "none", font: "inherit", fontSize: "var(--fs-sm)",
            color: "var(--text-strong)", background: "var(--surface-card)", border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-md)", padding: "8px 34px 8px 12px", cursor: "pointer", outline: "none",
          }}>
            {styles.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)",
            pointerEvents: "none", color: "var(--text-subtle)", fontSize: "11px" }}>▼</span>
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
        background: "var(--border-subtle)", minHeight: "420px" }}>
        {/* Source */}
        <section style={{ background: "var(--surface-card)", display: "flex", flexDirection: "column", minHeight: 0 }}>
          <PaneHeader icon="file-text" title="النص الأصلي" meta={`${words} كلمة`} />
          <textarea value={text} onChange={(e) => { setText(e.target.value); }}
            placeholder="ألصق نص المخاطبة أو الخطاب هنا…"
            style={{ flex: 1, border: "none", outline: "none", resize: "none", padding: "20px 24px", font: "inherit",
              fontSize: "var(--fs-body)", lineHeight: "var(--lh-relaxed)", color: "var(--text-body)",
              background: "transparent", whiteSpace: "pre-wrap" }} />
        </section>

        {/* Summary */}
        <section style={{ background: "var(--surface-card)", display: "flex", flexDirection: "column", minHeight: 0 }}>
          <PaneHeader icon="scroll-text" title="الملخّص" meta={result ? `اختصار ${result.ratio}` : ""}
            actions={result && <SummaryActions />} />
          <div style={{ flex: 1, overflow: "auto", padding: "20px 24px" }}>
            {loading && <SummarySkeleton />}
            {!loading && error && <ErrorState message={error} />}
            {!loading && !error && !result && <EmptyState />}
            {!loading && result && <SummaryBody result={result} length={length} />}
          </div>
        </section>
      </div>

      {toast && (
        <div style={{ position: "fixed", bottom: "24px", insetInlineStart: "24px", zIndex: 200 }}>
          <Toast tone={toast.tone} title={toast.title} message={toast.message} onClose={() => setToast(null)} />
        </div>
      )}
    </div>
  );
}

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
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <IconButton label="نسخ" variant="ghost" size="sm"><Icon name="copy" size={16} /></IconButton>
      <IconButton label="إعادة الصياغة" variant="ghost" size="sm"><Icon name="refresh-cw" size={16} /></IconButton>
      <IconButton label="تصدير" variant="ghost" size="sm"><Icon name="download" size={16} /></IconButton>
    </div>
  );
}

function SummaryBody({ result, length }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "18px", lineHeight: "var(--lh-relaxed)" }}>
      <p style={{ fontSize: "var(--fs-lead)", color: "var(--text-strong)", fontWeight: "var(--fw-medium)" }}>
        {result.headline || result.summary}
      </p>
      {result.headline && result.summary && (
        <p style={{ fontSize: "var(--fs-body)", color: "var(--text-body)" }}>{result.summary}</p>
      )}
      {result.points?.length > 0 && (
        <div>
          <div style={{ fontSize: "var(--fs-xs)", fontWeight: "var(--fw-semibold)", color: "var(--text-subtle)", marginBottom: "8px" }}>النقاط الرئيسية</div>
          <ul style={{ margin: 0, paddingInlineStart: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {result.points.map((p, i) => (
              <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "var(--fs-body)", color: "var(--text-body)" }}>
                <Icon name="check" size={16} color="var(--brand-accent)" style={{ marginTop: "4px", flexShrink: 0 }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", paddingTop: "8px", borderTop: "1px solid var(--border-subtle)" }}>
        {result.type && <Tag tone={toneForType(result.type)}>{result.type}</Tag>}
        <Tag tone="gray">{length}</Tag>
      </div>
    </div>
  );
}

function SummarySkeleton() {
  const bar = (w, k) => <div key={k} style={{ height: "14px", width: w, borderRadius: "6px",
    background: "linear-gradient(90deg,var(--gray-100),var(--gray-200),var(--gray-100))",
    backgroundSize: "200% 100%", animation: "tlkhs-shimmer 1.2s infinite" }} />;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <style>{`@keyframes tlkhs-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
      {bar("90%", 1)}{bar("75%", 2)}{bar("82%", 3)}<div style={{ height: "8px" }} />{bar("60%", 4)}{bar("70%", 5)}
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

function ErrorState({ message }) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", textAlign: "center", color: "var(--danger-600)", gap: "12px", paddingTop: "40px" }}>
      <div style={{ width: "52px", height: "52px", borderRadius: "var(--radius-lg)",
        background: "var(--danger-100)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name="alert-triangle" size={24} color="var(--danger-600)" />
      </div>
      <div style={{ fontSize: "var(--fs-sm)", maxWidth: "260px", lineHeight: 1.6 }}>{message}</div>
    </div>
  );
}
