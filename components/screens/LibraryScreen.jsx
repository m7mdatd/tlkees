"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Card, Badge, Tag, Button, IconButton } from "@/components/ds";
import { Icon } from "@/components/Icon";
import { useAuth } from "@/lib/auth";
import { listSummaries } from "@/lib/summaries";
import { formatWhen, toneForType } from "@/lib/format";

/* LibraryScreen — history of saved summaries & official correspondence. */
export default function LibraryScreen({ onNavigate }) {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("all");

  useEffect(() => {
    let active = true;
    if (user) {
      listSummaries(user.uid, 100)
        .then((d) => { if (active) { setItems(d); setLoading(false); } })
        .catch(() => { if (active) setLoading(false); });
    } else setLoading(false);
    return () => { active = false; };
  }, [user]);

  const official = items.filter((i) => ["تعميم", "خطاب", "قرار", "محضر"].includes(i.type));
  const drafts = items.filter((i) => i.status === "مسودة");
  const view = tab === "official" ? official : tab === "drafts" ? drafts : items;

  return (
    <div style={{ padding: "24px", maxWidth: "var(--container-lg)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
        <div>
          <h1 style={{ fontSize: "var(--fs-h3)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>المكتبة</h1>
          <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)", marginTop: "2px" }}>كل ملخّصاتك ومخاطباتك في مكان واحد</p>
        </div>
        <div style={{ flex: 1 }} />
        <Button variant="primary" onClick={() => onNavigate && onNavigate("editor")}
          iconStart={<Icon name="plus" size={18} />}>ملخّص جديد</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Tabs value={tab} onChange={setTab} items={[
          { id: "all", label: "الكل", badge: items.length },
          { id: "official", label: "مخاطبات رسمية", badge: official.length },
          { id: "drafts", label: "المسودات", badge: drafts.length },
        ]} />
      </div>

      {loading ? (
        <Card elevation="xs" style={{ textAlign: "center", padding: "36px", color: "var(--text-muted)", fontSize: "var(--fs-sm)" }}>
          جارٍ التحميل…
        </Card>
      ) : view.length === 0 ? (
        <Card elevation="xs" style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
          <Icon name="library" size={28} color="var(--text-subtle)" style={{ marginBottom: "12px" }} />
          <div style={{ fontSize: "var(--fs-sm)" }}>لا توجد عناصر هنا بعد.</div>
        </Card>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {view.map((it) => (
            <Card key={it.id} interactive elevation="xs" padding="16px 20px">
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "var(--radius-md)", flexShrink: 0,
                  background: "var(--surface-brand-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="file-text" size={20} color="var(--navy-600)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-body)" }}>{it.title}</span>
                    <Tag tone={toneForType(it.type)}>{it.type}</Tag>
                  </div>
                  <div style={{ display: "flex", gap: "14px", fontSize: "var(--fs-xs)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    <span>{formatWhen(it.createdAt)}</span>
                    <span>· {it.wordCount || 0} كلمة</span>
                    <span>· اختصار {it.ratio || "—"}</span>
                  </div>
                </div>
                <Badge tone={it.status === "مسودة" ? "neutral" : "success"} dot={it.status !== "مسودة"}>{it.status || "مكتمل"}</Badge>
                <IconButton label="خيارات" variant="ghost"><Icon name="ellipsis-vertical" size={18} /></IconButton>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
