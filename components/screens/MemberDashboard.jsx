"use client";
import React, { useEffect, useState } from "react";
import { Card, Button, Badge, Tag } from "@/components/ds";
import { Icon } from "@/components/Icon";
import { useAuth } from "@/lib/auth";
import { listSummaries } from "@/lib/summaries";
import { formatWhen, toneForType } from "@/lib/format";

/* MemberDashboard — member home: greeting, usage stats, recent work. */
export default function MemberDashboard({ onNavigate }) {
  const { user, profile } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let active = true;
    if (user) listSummaries(user.uid, 20).then((d) => { if (active) setItems(d); }).catch(() => {});
    return () => { active = false; };
  }, [user]);

  const firstName = (profile?.name || "").trim().split(/\s+/)[0] || "بك";
  const count = profile?.summaryCount ?? items.length;
  const avgRatio = computeAvgRatio(items);
  const savedHours = (items.length * 0.45).toFixed(1);

  const stats = [
    { icon: "file-check", label: "ملخّصات هذا الشهر", value: count, sub: "من ١٠ في الباقة المجانية" },
    { icon: "clock", label: "الوقت الموفَّر", value: savedHours, sub: "ساعة تقريباً" },
    { icon: "trending-up", label: "متوسط الاختصار", value: avgRatio, sub: "من طول النص الأصلي" },
  ];
  const recent = items.slice(0, 3);
  const quotaPct = Math.min(100, Math.round((count / 10) * 100));

  return (
    <div style={{ padding: "28px 24px", maxWidth: "var(--container-lg)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
        <div>
          <h1 style={{ fontSize: "var(--fs-h2)", color: "var(--text-strong)" }}>مرحباً، {firstName} 👋</h1>
          <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)", marginTop: "4px" }}>إليك نظرة سريعة على نشاطك في منصة تلخيص</p>
        </div>
        <div style={{ flex: 1 }} />
        <Button variant="accent" onClick={() => onNavigate && onNavigate("editor")}
          iconStart={<Icon name="sparkles" size={18} />}>ملخّص جديد</Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "16px" }}>
        {stats.map((s, i) => (
          <Card key={i} elevation="sm">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-md)",
                background: "var(--surface-brand-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={s.icon} size={18} color="var(--navy-600)" />
              </div>
              <span style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>{s.label}</span>
            </div>
            <div style={{ fontSize: "40px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", lineHeight: 1, fontFamily: "var(--font-mono)" }}>{s.value}</div>
            <div style={{ fontSize: "var(--fs-xs)", color: "var(--text-subtle)", marginTop: "6px" }}>{s.sub}</div>
          </Card>
        ))}
      </div>

      <Card accent elevation="sm" style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-sm)" }}>استهلاك الباقة المجانية</span>
          <Badge tone="accent">{count} / ١٠</Badge>
        </div>
        <div style={{ height: "8px", borderRadius: "99px", background: "var(--gray-100)", overflow: "hidden" }}>
          <div style={{ width: `${quotaPct}%`, height: "100%", background: "var(--brand-accent)" }} />
        </div>
        <div style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)", marginTop: "10px" }}>
          تتجدد الباقة شهرياً · <a href="#" style={{ color: "var(--text-link)" }}>الترقية إلى الاحترافية</a>
        </div>
      </Card>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <h2 style={{ fontSize: "var(--fs-h4)", color: "var(--text-strong)" }}>أحدث الملخّصات</h2>
        <button onClick={() => onNavigate && onNavigate("library")} style={{ border: "none", background: "transparent",
          cursor: "pointer", color: "var(--text-link)", fontSize: "var(--fs-sm)", font: "inherit",
          display: "inline-flex", alignItems: "center", gap: "4px" }}>
          عرض الكل <Icon name="arrow-left" size={15} />
        </button>
      </div>

      {recent.length === 0 ? (
        <Card elevation="xs" style={{ textAlign: "center", padding: "36px", color: "var(--text-muted)" }}>
          <Icon name="scroll-text" size={26} color="var(--text-subtle)" style={{ marginBottom: "10px" }} />
          <div style={{ fontSize: "var(--fs-sm)" }}>لا توجد ملخّصات بعد. ابدأ بإنشاء ملخّصك الأول.</div>
        </Card>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {recent.map((r) => (
            <Card key={r.id} interactive elevation="xs" padding="14px 18px">
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "var(--radius-md)", flexShrink: 0,
                  background: "var(--surface-accent-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="scroll-text" size={18} color="var(--teal-700)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontWeight: "var(--fw-medium)", color: "var(--text-strong)", fontSize: "var(--fs-sm)" }}>{r.title}</span>
                    <Tag tone={toneForType(r.type)}>{r.type}</Tag>
                  </div>
                  <div style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginTop: "3px" }}>{formatWhen(r.createdAt)}</div>
                </div>
                <Icon name="arrow-left" size={16} color="var(--text-subtle)" />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function computeAvgRatio(items) {
  const nums = items.map((i) => parseInt(String(i.ratio).replace(/[^\d]/g, ""), 10)).filter((n) => !isNaN(n));
  if (!nums.length) return "—";
  return `${Math.round(nums.reduce((a, b) => a + b, 0) / nums.length)}٪`;
}
