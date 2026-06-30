"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo, Button, Input, Checkbox } from "@/components/ds";
import { Icon } from "@/components/Icon";
import { useAuth } from "@/lib/auth";

/* AuthScreen — login + register, two-column (navy brand panel + form). */
export default function AuthScreen({ mode = "login" }) {
  const router = useRouter();
  const { login, register, isFirebaseConfigured } = useAuth();
  const isLogin = mode === "login";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!isLogin && !agree) { setError("يجب الموافقة على الشروط للمتابعة."); return; }
    setLoading(true);
    try {
      if (isLogin) await login({ email, password });
      else await register({ name, email, password });
      router.push("/dashboard");
    } catch (err) {
      setError(translateAuthError(err));
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--surface-card)" }}>
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
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "380px" }}>
          <button type="button" onClick={() => router.push("/")} style={{ border: "none", background: "transparent", cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--text-muted)",
            fontSize: "var(--fs-sm)", font: "inherit", marginBottom: "24px", padding: 0 }}>
            <Icon name="arrow-right" size={16} /> العودة للرئيسية
          </button>

          {/* Toggle */}
          <div style={{ display: "inline-flex", background: "var(--gray-100)", borderRadius: "var(--radius-md)",
            padding: "3px", marginBottom: "28px", width: "100%" }}>
            {[["login", "تسجيل الدخول"], ["register", "حساب جديد"]].map(([id, label]) => (
              <button key={id} type="button" onClick={() => router.push(id === "login" ? "/login" : "/register")} style={{
                flex: 1, border: "none", cursor: "pointer", font: "inherit", fontSize: "var(--fs-sm)",
                fontWeight: "var(--fw-semibold)", padding: "9px", borderRadius: "var(--radius-sm)",
                background: mode === id ? "var(--surface-card)" : "transparent",
                color: mode === id ? "var(--navy-800)" : "var(--text-muted)",
                boxShadow: mode === id ? "var(--shadow-xs)" : "none",
              }}>{label}</button>
            ))}
          </div>

          <h1 style={{ fontSize: "var(--fs-h3)", color: "var(--text-strong)", marginBottom: "6px" }}>
            {isLogin ? "مرحباً بعودتك" : "أنشئ حسابك"}
          </h1>
          <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)", marginBottom: "24px" }}>
            {isLogin ? "سجّل الدخول للمتابعة إلى لوحة التحكم" : "ابدأ بتلخيص مخاطباتك مجاناً"}
          </p>

          {!isFirebaseConfigured && (
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", background: "var(--warning-100)",
              color: "var(--warning-600)", borderRadius: "var(--radius-md)", padding: "12px 14px",
              fontSize: "var(--fs-xs)", marginBottom: "16px", lineHeight: 1.6 }}>
              <Icon name="alert-triangle" size={16} style={{ marginTop: "2px" }} />
              <span>لم تُضبط إعدادات Firebase بعد. أضف متغيّرات <code>NEXT_PUBLIC_FIREBASE_*</code> لتفعيل التسجيل.</span>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {!isLogin && (
              <Input label="الاسم الكامل" placeholder="نورة العتيبي" value={name}
                onChange={(e) => setName(e.target.value)} iconStart={<Icon name="user" size={18} />} required />
            )}
            <Input label="البريد الإلكتروني" type="email" placeholder="name@example.com" value={email}
              onChange={(e) => setEmail(e.target.value)} iconStart={<Icon name="mail" size={18} />} required />
            <Input label="كلمة المرور" type="password" placeholder="••••••••" value={password}
              onChange={(e) => setPassword(e.target.value)} iconStart={<Icon name="lock" size={18} />} required />
            {isLogin
              ? <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Checkbox label="تذكّرني" />
                  <a href="#" style={{ fontSize: "var(--fs-sm)", color: "var(--text-link)" }}>نسيت كلمة المرور؟</a>
                </div>
              : <Checkbox label="أوافق على شروط الاستخدام وسياسة الخصوصية" checked={agree} onChange={(e) => setAgree(e.target.checked)} />}

            {error && (
              <div style={{ background: "var(--danger-100)", color: "var(--danger-600)", borderRadius: "var(--radius-md)",
                padding: "10px 12px", fontSize: "var(--fs-sm)" }}>{error}</div>
            )}

            <Button type="submit" variant="accent" fullWidth size="lg" loading={loading}>
              {isLogin ? "تسجيل الدخول" : "إنشاء الحساب"}
            </Button>
          </div>

          <div style={{ marginTop: "22px", textAlign: "center", fontSize: "var(--fs-xs)", color: "var(--text-subtle)" }}>
            {isLogin ? "ليس لديك حساب؟ " : "لديك حساب بالفعل؟ "}
            <button type="button" onClick={() => router.push(isLogin ? "/register" : "/login")}
              style={{ border: "none", background: "transparent", color: "var(--text-link)", cursor: "pointer",
                font: "inherit", textDecoration: "underline" }}>
              {isLogin ? "أنشئ حساباً" : "سجّل الدخول"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function translateAuthError(err) {
  const code = err?.code || "";
  if (code.includes("invalid-credential") || code.includes("wrong-password") || code.includes("user-not-found"))
    return "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
  if (code.includes("email-already-in-use")) return "هذا البريد مسجّل مسبقاً.";
  if (code.includes("weak-password")) return "كلمة المرور ضعيفة (٦ أحرف على الأقل).";
  if (code.includes("invalid-email")) return "صيغة البريد الإلكتروني غير صحيحة.";
  return err?.message || "تعذّر إتمام العملية، حاول مجدداً.";
}
