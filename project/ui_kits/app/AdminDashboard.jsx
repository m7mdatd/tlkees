/* AdminDashboard — simplified admin console: KPIs + users management table. */
function AdminDashboard({ onLogout }) {
  const { Logo, Card, Badge, Button, IconButton, Avatar, Tabs, Tag } = window.DesignSystem_4df9a0;

  const kpis = [
    { icon: "users", label: "إجمالي الأعضاء", value: "١٬٢٤٨", delta: "+٤.٢٪", up: true },
    { icon: "file-check", label: "ملخّصات هذا الشهر", value: "٨٬٧٦٢", delta: "+١٢٪", up: true },
    { icon: "activity", label: "نشطون يومياً", value: "٣١٤", delta: "+٢٪", up: true },
    { icon: "zap", label: "أعضاء الباقة الاحترافية", value: "١٨٦", delta: "-١٪", up: false },
  ];
  const users = [
    { name: "نورة العتيبي", email: "noura@gov.sa", role: "عضو", plan: "احترافية", status: "نشط", st: "success", count: "٤٢" },
    { name: "عبدالله الشمري", email: "a.shamri@corp.sa", role: "عضو", plan: "مجانية", status: "نشط", st: "success", count: "٧" },
    { name: "سارة القحطاني", email: "sara.q@org.sa", role: "مشرف", plan: "احترافية", status: "نشط", st: "success", count: "١٢٨" },
    { name: "خالد الدوسري", email: "khaled@gov.sa", role: "عضو", plan: "مجانية", status: "موقوف", st: "danger", count: "٠" },
    { name: "ريم الحربي", email: "reem.h@corp.sa", role: "عضو", plan: "احترافية", status: "بانتظار", st: "warning", count: "٣" },
  ];

  return (
    <div style={{ minHeight: "100%", background: "var(--surface-page)" }}>
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
        <Avatar name="مدير النظام" size="sm" />
        <span style={{ fontSize: "var(--fs-sm)", color: "var(--navy-100)" }}>مدير النظام</span>
        <IconButton label="تسجيل الخروج" variant="ghost" onClick={onLogout}>
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
                <Badge tone={k.up ? "success" : "danger"}>{k.delta}</Badge>
              </div>
              <div style={{ fontSize: "30px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", lineHeight: 1, fontFamily: "var(--font-mono)" }}>{k.value}</div>
              <div style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)", marginTop: "6px" }}>{k.label}</div>
            </Card>
          ))}
        </div>

        {/* Users table */}
        <Card elevation="sm" padding="0">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px",
            borderBottom: "1px solid var(--border-subtle)" }}>
            <h2 style={{ fontSize: "var(--fs-h4)", color: "var(--text-strong)" }}>الأعضاء</h2>
            <Badge tone="neutral">١٬٢٤٨</Badge>
            <div style={{ flex: 1 }} />
            <Button variant="secondary" size="sm" iconStart={<Icon name="users" size={16} />}>تصدير</Button>
            <Button variant="primary" size="sm" iconStart={<Icon name="plus" size={16} />}>دعوة عضو</Button>
          </div>

          <div style={{ padding: "8px 20px 0" }}>
            <Tabs defaultValue="all" items={[
              { id: "all", label: "الكل", badge: "١٢٤٨" },
              { id: "active", label: "نشط", badge: "١١٠٢" },
              { id: "pro", label: "احترافية", badge: "١٨٦" },
              { id: "suspended", label: "موقوف", badge: "٩" },
            ]} />
          </div>

          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "2.4fr 1fr 1fr 1fr 0.8fr 44px", gap: "12px",
            padding: "12px 20px", fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-semibold)",
            color: "var(--text-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
            <span>العضو</span><span>الدور</span><span>الباقة</span><span>الحالة</span><span>الملخّصات</span><span></span>
          </div>

          {users.map((u, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2.4fr 1fr 1fr 1fr 0.8fr 44px", gap: "12px",
              padding: "14px 20px", alignItems: "center", fontSize: "var(--fs-sm)",
              borderBottom: i < users.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
                <Avatar name={u.name} size="sm" />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: "var(--fw-medium)", color: "var(--text-strong)" }}>{u.name}</div>
                  <div style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)", fontFamily: "var(--font-mono)", direction: "ltr", textAlign: "right" }}>{u.email}</div>
                </div>
              </div>
              <span style={{ color: "var(--text-body)" }}>
                {u.role === "مشرف" ? <Tag tone="accent">{u.role}</Tag> : u.role}
              </span>
              <span style={{ color: "var(--text-body)" }}>{u.plan}</span>
              <span><Badge tone={u.st} dot>{u.status}</Badge></span>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-body)" }}>{u.count}</span>
              <IconButton label="خيارات" variant="ghost" size="sm"><Icon name="ellipsis-vertical" size={16} /></IconButton>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
window.AdminDashboard = AdminDashboard;
