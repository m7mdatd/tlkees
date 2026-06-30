"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Logo, Card, Badge, Button, IconButton, Avatar, Tabs, Tag } from "@/components/ds";
import { Icon } from "@/components/Icon";
import { useAuth } from "@/lib/auth";
import { listUsers } from "@/lib/users";

/* AdminDashboard — simplified admin console: KPIs + users management table. */
export default function AdminDashboard() {
  const router = useRouter();
  const { profile, logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tab, setTab] = useState("all");

  useEffect(() => {
    listUsers(200)
      .then((u) => { setUsers(u); setLoading(false); })
      .catch(() => { setError("تعذّر تحميل الأعضاء. تأكّد من صلاحيات قاعدة البيانات."); setLoading(false); });
  }, []);

  const total = users.length;
  const proCount = users.filter((u) => u.plan === "pro").length;
  const totalSummaries = users.reduce((a, u) => a + (u.summaryCount || 0), 0);
  const activeCount = users.filter((u) => (u.summaryCount || 0) > 0).length;

  const kpis = [
    { icon: "users", label: "إجمالي الأعضاء", value: total },
    { icon: "file-check", label: "إجمالي الملخّصات", value: totalSummaries },
    { icon: "activity", label: "أعضاء نشطون", value: activeCount },
    { icon: "zap", label: "أعضاء الباقة الاحترافية", value: proCount },
  ];

  const filtered = tab === "pro" ? users.filter((u) => u.plan === "pro")
    : tab === "admins" ? users.filter((u) => u.role === "admin")
    : users;

  async function handleLogout() { await logout(); router.push("/"); }

  return (
    <div style={{ minHeight: "100vh", background: "var(--surface-page)" }}>
      {/* Admin header */}
      <header style={{ height: "var(--header-h)", display: "flex", alignItems: "center", gap: "14px",
        padding: "0 28px", background: "var(--surface-inverse)", color: "var(--white)" }}>
        <Logo variant="full" size={20} tone="inverse" />
        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--navy-700)",
          color: "var(--teal-300)", fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-semibold)",
          padding: "4px 10px", borderRadius: "var(--radius-pill)" }}>
          <Icon name="shield-check" size={13} /> لوحة المسؤول
        </span>
        <div style={{ flex: 1 }} />
        <Button variant="ghost" size="sm" onClick={() => router.push("/dashboard")}
          style={{ color: "var(--navy-100)" }}>مساحة العمل</Button>
        <Avatar name={profile?.name || "مدير النظام"} size="sm" />
        <span style={{ fontSize: "var(--fs-sm)", color: "var(--navy-100)" }}>{profile?.name || "مدير النظام"}</span>
        <IconButton label="تسجيل الخروج" variant="ghost" onClick={handleLogout}>
          <span style={{ color: "var(--navy-200)", display: "inline-flex" }}><Icon name="log-out" /></span>
        </IconButton>
      </header>

      <div style={{ padding: "28px", maxWidth: "var(--container-xl)" }}>
        <h1 style={{ fontSize: "var(--fs-h3)", color: "var(--text-strong)", marginBottom: "4px" }}>لوحة التحكم</h1>
        <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)", marginBottom: "22px" }}>نظرة عامة على المنصة وإدارة الأعضاء</p>

        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "28px" }}>
          {kpis.map((k, i) => (
            <Card key={i} elevation="sm">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "var(--radius-md)",
                  background: "var(--surface-brand-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={k.icon} size={17} color="var(--navy-600)" />
                </div>
              </div>
              <div style={{ fontSize: "30px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", lineHeight: 1, fontFamily: "var(--font-mono)" }}>{k.value}</div>
              <div style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)", marginTop: "6px" }}>{k.label}</div>
            </Card>
          ))}
        </div>

        {/* Users table */}
        <Card elevation="sm" padding="0">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", borderBottom: "1px solid var(--border-subtle)" }}>
            <h2 style={{ fontSize: "var(--fs-h4)", color: "var(--text-strong)" }}>الأعضاء</h2>
            <Badge tone="neutral">{total}</Badge>
            <div style={{ flex: 1 }} />
            <Button variant="secondary" size="sm" iconStart={<Icon name="download" size={16} />}>تصدير</Button>
          </div>

          <div style={{ padding: "8px 20px 0" }}>
            <Tabs value={tab} onChange={setTab} items={[
              { id: "all", label: "الكل", badge: total },
              { id: "pro", label: "احترافية", badge: proCount },
              { id: "admins", label: "مشرفون", badge: users.filter((u) => u.role === "admin").length },
            ]} />
          </div>

          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "2.4fr 1fr 1fr 1fr 0.8fr 44px", gap: "12px",
            padding: "12px 20px", fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-semibold)",
            color: "var(--text-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
            <span>العضو</span><span>الدور</span><span>الباقة</span><span>الحالة</span><span>الملخّصات</span><span></span>
          </div>

          {loading ? (
            <div style={{ padding: "32px", textAlign: "center", color: "var(--text-muted)", fontSize: "var(--fs-sm)" }}>جارٍ التحميل…</div>
          ) : error ? (
            <div style={{ padding: "32px", textAlign: "center", color: "var(--danger-600)", fontSize: "var(--fs-sm)" }}>{error}</div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: "32px", textAlign: "center", color: "var(--text-muted)", fontSize: "var(--fs-sm)" }}>لا يوجد أعضاء.</div>
          ) : filtered.map((u, i) => (
            <div key={u.id} style={{ display: "grid", gridTemplateColumns: "2.4fr 1fr 1fr 1fr 0.8fr 44px", gap: "12px",
              padding: "14px 20px", alignItems: "center", fontSize: "var(--fs-sm)",
              borderBottom: i < filtered.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
                <Avatar name={u.name || u.email} size="sm" />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: "var(--fw-medium)", color: "var(--text-strong)" }}>{u.name || "—"}</div>
                  <div style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)", fontFamily: "var(--font-mono)", direction: "ltr", textAlign: "right" }}>{u.email}</div>
                </div>
              </div>
              <span style={{ color: "var(--text-body)" }}>
                {u.role === "admin" ? <Tag tone="accent">مشرف</Tag> : "عضو"}
              </span>
              <span style={{ color: "var(--text-body)" }}>{u.plan === "pro" ? "احترافية" : "مجانية"}</span>
              <span><Badge tone="success" dot>نشط</Badge></span>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-body)" }}>{u.summaryCount || 0}</span>
              <IconButton label="خيارات" variant="ghost" size="sm"><Icon name="ellipsis-vertical" size={16} /></IconButton>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
