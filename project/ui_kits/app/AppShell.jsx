/* AppShell — header + right-side nav rail for منصة تلخيص workspace (RTL). */
function AppShell({ active, onNavigate, onLogout, children }) {
  const { Logo, Avatar, IconButton, Badge } = window.DesignSystem_4df9a0;

  const nav = [
    { id: "home", label: "الرئيسية", icon: "house" },
    { id: "editor", label: "أداة التلخيص", icon: "sparkles" },
    { id: "library", label: "المكتبة", icon: "library" },
    { id: "templates", label: "القوالب", icon: "layout-template" },
    { id: "settings", label: "الإعدادات", icon: "settings" },
  ];

  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", background: "var(--surface-page)" }}>
      {/* Header */}
      <header style={{
        height: "var(--header-h)", flexShrink: 0,
        background: "var(--surface-card)", borderBottom: "1px solid var(--border-subtle)",
        display: "flex", alignItems: "center", gap: "20px", padding: "0 24px",
      }}>
        <Logo variant="full" size={22} />
        <div style={{
          flex: 1, maxWidth: "420px", marginInlineStart: "16px",
          display: "flex", alignItems: "center", gap: "8px",
          background: "var(--gray-50)", border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-md)", padding: "8px 12px",
        }}>
          <Icon name="search" size={16} color="var(--text-subtle)" />
          <input placeholder="ابحث في المخاطبات والملخّصات…" style={{
            flex: 1, border: "none", background: "transparent", outline: "none",
            font: "inherit", fontSize: "var(--fs-sm)", color: "var(--text-body)",
          }} />
          <kbd style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-subtle)",
            background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
            borderRadius: "4px", padding: "1px 6px" }}>⌘K</kbd>
        </div>
        <div style={{ flex: 1 }} />
        <IconButton label="الإشعارات" variant="ghost"><Icon name="bell" /></IconButton>
        <IconButton label="المساعدة" variant="ghost"><Icon name="circle-help" /></IconButton>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingInlineStart: "10px",
          borderInlineStart: "1px solid var(--border-subtle)" }}>
          <Avatar name="نورة العتيبي" size="sm" />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>نورة العتيبي</div>
            <div style={{ fontSize: "var(--fs-2xs)", color: "var(--text-muted)" }}>إدارة الاتصالات</div>
          </div>
          {onLogout && <IconButton label="تسجيل الخروج" variant="ghost" onClick={onLogout}><Icon name="log-out" /></IconButton>}
        </div>
      </header>

      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        {/* Nav rail */}
        <nav style={{
          width: "var(--sidebar-w)", flexShrink: 0, background: "var(--surface-card)",
          borderInlineStart: "1px solid var(--border-subtle)", padding: "20px 14px",
          display: "flex", flexDirection: "column", gap: "4px",
        }}>
          <div style={{ fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-semibold)", color: "var(--text-subtle)",
            letterSpacing: "0.04em", padding: "0 10px 8px" }}>مساحة العمل</div>
          {nav.map((n) => {
            const on = active === n.id;
            return (
              <button key={n.id} onClick={() => onNavigate(n.id)} style={{
                display: "flex", alignItems: "center", gap: "12px", width: "100%",
                padding: "11px 12px", border: "none", cursor: "pointer", textAlign: "right",
                borderRadius: "var(--radius-md)", font: "inherit",
                fontSize: "var(--fs-sm)", fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
                background: on ? "var(--surface-brand-subtle)" : "transparent",
                color: on ? "var(--navy-800)" : "var(--text-muted)",
                transition: "background 120ms ease",
              }}
              onMouseEnter={(e)=>{ if(!on) e.currentTarget.style.background="var(--gray-50)"; }}
              onMouseLeave={(e)=>{ if(!on) e.currentTarget.style.background="transparent"; }}>
                <Icon name={n.icon} size={18} color={on ? "var(--brand-accent)" : "var(--text-subtle)"} />
                {n.label}
              </button>
            );
          })}
          <div style={{ flex: 1 }} />
          <div style={{
            background: "var(--surface-inverse)", borderRadius: "var(--radius-lg)", padding: "16px",
            color: "var(--white)",
          }}>
            <div style={{ fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-sm)", marginBottom: "4px" }}>الباقة المجانية</div>
            <div style={{ fontSize: "var(--fs-2xs)", color: "var(--navy-200)", marginBottom: "12px" }}>٧ من ١٠ ملخّصات هذا الشهر</div>
            <div style={{ height: "6px", borderRadius: "99px", background: "var(--navy-700)", overflow: "hidden" }}>
              <div style={{ width: "70%", height: "100%", background: "var(--brand-accent)" }} />
            </div>
          </div>
        </nav>

        {/* Main */}
        <main style={{ flex: 1, minWidth: 0, overflow: "auto" }}>{children}</main>
      </div>
    </div>
  );
}
window.AppShell = AppShell;
