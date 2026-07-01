"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo, Button, Input, Textarea, Card } from "@/components/ds";
import { Icon } from "@/components/Icon";

/* ContactScreen — نموذج "تواصل معنا" يرسل إلى info@twal.sa عبر /api/contact. */
export default function ContactScreen() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", website: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("الرجاء تعبئة الاسم والبريد والرسالة.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "تعذّر إرسال الرسالة.");
      setSent(true);
    } catch (err) {
      setError(err.message || "تعذّر إرسال الرسالة، حاول لاحقاً.");
    } finally {
      setLoading(false);
    }
  }

  const channels = [
    { icon: "mail", label: "البريد الإلكتروني", value: "info@twal.sa" },
    { icon: "clock", label: "أوقات الرد", value: "خلال يوم عمل واحد" },
    { icon: "shield-check", label: "خصوصيتك", value: "بياناتك تُستخدم للرد فقط" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--surface-page)", display: "flex", flexDirection: "column" }}>
      <header style={{ height: "var(--header-h)", display: "flex", alignItems: "center", gap: "16px",
        padding: "0 32px", borderBottom: "1px solid var(--border-subtle)", background: "var(--surface-card)" }}>
        <button type="button" onClick={() => router.push("/")} style={{ border: "none", background: "transparent", cursor: "pointer", padding: 0, display: "flex" }}>
          <Logo variant="full" size={22} />
        </button>
        <div style={{ flex: 1 }} />
        <Button variant="ghost" size="sm" onClick={() => router.push("/login")}>تسجيل الدخول</Button>
        <Button variant="primary" size="sm" onClick={() => router.push("/register")}>ابدأ مجاناً</Button>
      </header>

      <section style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "56px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: "620px", marginBottom: "36px" }}>
          <h1 style={{ fontSize: "var(--fs-h1)", color: "var(--text-strong)", marginBottom: "12px" }}>تواصل معنا</h1>
          <p style={{ fontSize: "var(--fs-lead)", color: "var(--text-muted)", lineHeight: 1.7 }}>
            هل لديك سؤال أو اقتراح أو استفسار عن منصة تلخيص؟ أرسل لنا رسالة وسنعود إليك في أقرب وقت.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "24px",
          width: "100%", maxWidth: "920px", alignItems: "start" }}>
          {/* Form card */}
          <Card elevation="md" padding="28px">
            {sent ? (
              <div style={{ textAlign: "center", padding: "28px 12px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", margin: "0 auto 16px",
                  background: "var(--surface-accent-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="check" size={28} color="var(--brand-accent)" />
                </div>
                <h3 style={{ fontSize: "var(--fs-h4)", color: "var(--text-strong)", marginBottom: "8px" }}>تم إرسال رسالتك</h3>
                <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "20px" }}>
                  شكراً لتواصلك معنا، سنرد على بريدك في أقرب وقت ممكن.
                </p>
                <Button variant="secondary" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "", website: "" }); }}>
                  إرسال رسالة أخرى
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <Input label="الاسم الكامل" placeholder="نورة العتيبي" value={form.name}
                    onChange={set("name")} iconStart={<Icon name="user" size={18} />} required />
                  <Input label="البريد الإلكتروني" type="email" placeholder="name@example.com" value={form.email}
                    onChange={set("email")} iconStart={<Icon name="mail" size={18} />} required />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <Input label="رقم الجوال (اختياري)" placeholder="05xxxxxxxx" value={form.phone} onChange={set("phone")} />
                  <Input label="الموضوع (اختياري)" placeholder="استفسار عن الخدمة" value={form.subject} onChange={set("subject")} />
                </div>
                <Textarea label="الرسالة" rows={6} placeholder="اكتب رسالتك هنا..." value={form.message}
                  onChange={set("message")} maxLength={5000} showCount required />

                {/* honeypot لمكافحة السبام — مخفي عن المستخدم */}
                <input type="text" name="website" value={form.website} onChange={set("website")}
                  tabIndex={-1} autoComplete="off" aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />

                {error && (
                  <div style={{ background: "var(--danger-100)", color: "var(--danger-600)", borderRadius: "var(--radius-md)",
                    padding: "10px 12px", fontSize: "var(--fs-sm)" }}>{error}</div>
                )}

                <Button type="submit" variant="accent" size="lg" fullWidth loading={loading}
                  iconStart={<Icon name="mail" size={18} />}>إرسال الرسالة</Button>
              </form>
            )}
          </Card>

          {/* Side info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {channels.map((c, i) => (
              <Card key={i} elevation="sm" padding="18px">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-md)", flexShrink: 0,
                    background: "var(--surface-accent-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={c.icon} size={20} color="var(--brand-accent)" />
                  </div>
                  <div>
                    <div style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)" }}>{c.label}</div>
                    <div style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{c.value}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "20px 32px", borderTop: "1px solid var(--border-subtle)",
        display: "flex", alignItems: "center", gap: "12px", background: "var(--surface-card)" }}>
        <Logo variant="mark" size={18} />
        <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)" }}>© ٢٠٢٦ منصة تلخيص — جميع الحقوق محفوظة</span>
      </footer>
    </div>
  );
}
