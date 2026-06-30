/* AuthScreen — login + register, two-column (navy brand panel + form). */
function AuthScreen({ mode = "login", onAuth, onAdmin, onBack }) {
  const { Logo, Button, Input, Checkbox } = window.DesignSystem_4df9a0;
  const [tab, setTab] = React.useState(mode);
  React.useEffect(() => setTab(mode), [mode]);
  const isLogin = tab === "login";

  return (
    <div style={{ minHeight: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--surface-card)" }}>
      {/* Brand panel */}
      <div style={{ background: "var(--surface-inverse)", padding: "48px", display: "flex",
        flexDirection: "column", justifyContent: "space-between", color: "var(--white)" }}>
        <Logo variant="full" size={24} tone="inverse" />
        <div>
          <h2 style={{ fontSize: "var(--fs-h1)", color: "var(--white)", lineHeight: 1.2, marginBottom: "16px" }}>
            ملخّصات رسمية<br />دقيقة في ثوانٍ
          </h2>
          <p style={{ fontSize: "var(--fs-lead)", color: "var(--navy-200)", lineHeight: 1.7, maxWidth: "380px" }}>
            انضم إلى منصة تلخيص ولخّص مخاطباتك الرسمية مع الحفاظ على نبرتها ومعناها.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "28px" }}>
            {["تلخيص فوري للنصوص الطويلة", "إعادة صياغة بأساليب متعددة", "مكتبة لحفظ ملخّصاتك"].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--navy-100)", fontSize: "var(--fs-sm)" }}>
                <Icon name="check" size={16} color="var(--teal-300)" />{t}
              </div>
            ))}
          </div>
        </div>
        <div style={{ fontSize: "var(--fs-xs)", color: "var(--navy-300)" }}>© ٢٠٢٦ منصة تلخيص</div>
      </div>

      {/* Form */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px" }}>
        <div style={{ width: "100%", maxWidth: "380px" }}>
          {onBack && (
            <button onClick={onBack} style={{ border: "none", background: "transparent", cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--text-muted)",
              fontSize: "var(--fs-sm)", font: "inherit", marginBottom: "24px", padding: 0 }}>
              <Icon name="arrow-right" size={16} /> العودة للرئيسية
            </button>
          )}
          {/* Toggle */}
          <div style={{ display: "inline-flex", background: "var(--gray-100)", borderRadius: "var(--radius-md)",
            padding: "3px", marginBottom: "28px", width: "100%" }}>
            {[["login", "تسجيل الدخول"], ["register", "حساب جديد"]].map(([id, label]) => (
              <button key={id} onClick={() => setTab(id)} style={{
                flex: 1, border: "none", cursor: "pointer", font: "inherit", fontSize: "var(--fs-sm)",
                fontWeight: "var(--fw-semibold)", padding: "9px", borderRadius: "var(--radius-sm)",
                background: tab === id ? "var(--surface-card)" : "transparent",
                color: tab === id ? "var(--navy-800)" : "var(--text-muted)",
                boxShadow: tab === id ? "var(--shadow-xs)" : "none",
              }}>{label}</button>
            ))}
          </div>

          <h1 style={{ fontSize: "var(--fs-h3)", color: "var(--text-strong)", marginBottom: "6px" }}>
            {isLogin ? "مرحباً بعودتك" : "أنشئ حسابك"}
          </h1>
          <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)", marginBottom: "24px" }}>
            {isLogin ? "سجّل الدخول للمتابعة إلى لوحة التحكم" : "ابدأ بتلخيص مخاطباتك مجاناً"}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {!isLogin && <Input label="الاسم الكامل" placeholder="نورة العتيبي" iconStart={<Icon name="user" size={18} />} />}
            <Input label="البريد الإلكتروني" type="email" placeholder="name@example.com" iconStart={<Icon name="mail" size={18} />} />
            <Input label="كلمة المرور" type="password" placeholder="••••••••" iconStart={<Icon name="lock" size={18} />} />
            {isLogin
              ? <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Checkbox label="تذكّرني" />
                  <a href="#" style={{ fontSize: "var(--fs-sm)", color: "var(--text-link)" }}>نسيت كلمة المرور؟</a>
                </div>
              : <Checkbox label="أوافق على شروط الاستخدام وسياسة الخصوصية" />}
            <Button variant="accent" fullWidth size="lg" onClick={() => onAuth && onAuth("member")}>
              {isLogin ? "تسجيل الدخول" : "إنشاء الحساب"}
            </Button>
          </div>

          <div style={{ marginTop: "22px", textAlign: "center", fontSize: "var(--fs-xs)", color: "var(--text-subtle)" }}>
            للعرض التوضيحي: <button onClick={() => onAdmin && onAdmin()} style={{ border: "none", background: "transparent",
              color: "var(--text-link)", cursor: "pointer", font: "inherit", textDecoration: "underline" }}>الدخول كمسؤول</button>
          </div>
        </div>
      </div>
    </div>
  );
}
window.AuthScreen = AuthScreen;
