/* LandingScreen — very simple marketing page for منصة تلخيص. */
function LandingScreen({ onLogin, onRegister }) {
  const { Logo, Button, Badge, Card } = window.DesignSystem_4df9a0;

  const features = [
    { icon: "zap", title: "تلخيص فوري", body: "ألصق النص واحصل على ملخّص دقيق في ثوانٍ." },
    { icon: "file-check", title: "نبرة رسمية", body: "يحافظ على أسلوب المخاطبات الرسمية ومعناها." },
    { icon: "languages", title: "إعادة صياغة", body: "أعد صياغة الخطابات والتعاميم بأساليب متعددة." },
  ];

  return (
    <div style={{ minHeight: "100%", background: "var(--surface-page)", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <header style={{ height: "var(--header-h)", display: "flex", alignItems: "center", gap: "16px",
        padding: "0 32px", borderBottom: "1px solid var(--border-subtle)", background: "var(--surface-card)" }}>
        <Logo variant="full" size={22} />
        <div style={{ flex: 1 }} />
        <Button variant="ghost" size="sm" onClick={onLogin}>تسجيل الدخول</Button>
        <Button variant="primary" size="sm" onClick={onRegister}>ابدأ مجاناً</Button>
      </header>

      {/* Hero */}
      <section style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center", padding: "72px 24px 56px", gap: "22px" }}>
        <Badge tone="accent" dot>منصة عربية للتلخيص الذكي</Badge>
        <h1 style={{ fontSize: "var(--fs-display)", lineHeight: 1.1, color: "var(--text-strong)", maxWidth: "780px" }}>
          لخّص <span style={{ color: "var(--brand-accent)" }}>المخاطبات الرسمية</span> الطويلة في ثوانٍ
        </h1>
        <p style={{ fontSize: "var(--fs-lead)", color: "var(--text-muted)", maxWidth: "560px", lineHeight: 1.7 }}>
          منصة تلخيص تحوّل التعاميم والخطابات والقرارات إلى ملخّصات واضحة ودقيقة،
          مع الحفاظ على النبرة الرسمية والمعنى الأصلي.
        </p>
        <div style={{ display: "flex", gap: "12px", marginTop: "6px" }}>
          <Button variant="accent" size="lg" onClick={onRegister}
            iconStart={<Icon name="sparkles" size={20} />}>أنشئ حساباً مجانياً</Button>
          <Button variant="secondary" size="lg" onClick={onLogin}>لديّ حساب</Button>
        </div>

        {/* Features */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px",
          maxWidth: "880px", width: "100%", marginTop: "44px" }}>
          {features.map((f, i) => (
            <Card key={i} elevation="sm" style={{ textAlign: "right" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-md)", marginBottom: "14px",
                background: "var(--surface-accent-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={f.icon} size={22} color="var(--brand-accent)" />
              </div>
              <div style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-h4)", marginBottom: "6px" }}>{f.title}</div>
              <div style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{f.body}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "20px 32px", borderTop: "1px solid var(--border-subtle)",
        display: "flex", alignItems: "center", gap: "12px", background: "var(--surface-card)" }}>
        <Logo variant="mark" size={18} />
        <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)" }}>© ٢٠٢٦ منصة تلخيص — جميع الحقوق محفوظة</span>
      </footer>
    </div>
  );
}
window.LandingScreen = LandingScreen;
