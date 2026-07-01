import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const maxDuration = 30;

/* استقبال رسائل نموذج "تواصل معنا" وإرسالها عبر SMTP (بريد هوستنجر).
   المتغيّرات المطلوبة في البيئة:
     SMTP_HOST   (افتراضي smtp.hostinger.com)
     SMTP_PORT   (افتراضي 465)
     SMTP_USER   بريد الإرسال، مثل info@twal.sa
     SMTP_PASS   كلمة مرور صندوق البريد
     CONTACT_TO  وجهة الاستقبال (افتراضي info@twal.sa) */

function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

export async function POST(req) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  const host = SMTP_HOST || "smtp.hostinger.com";
  const port = Number(SMTP_PORT) || 465;
  const to = process.env.CONTACT_TO || "info@twal.sa";

  if (!SMTP_USER || !SMTP_PASS) {
    return Response.json(
      { error: "خدمة البريد غير مهيّأة. أضف SMTP_USER و SMTP_PASS في إعدادات البيئة." },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "طلب غير صالح." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();
  // حقل فخّ للسبام (يجب أن يبقى فارغاً)
  if ((body.website || "").trim()) return Response.json({ ok: true });

  if (!name || !email || !message) {
    return Response.json({ error: "الاسم والبريد والرسالة حقول مطلوبة." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "صيغة البريد الإلكتروني غير صحيحة." }, { status: 400 });
  }
  if (message.length > 5000) {
    return Response.json({ error: "الرسالة طويلة جداً (الحد ٥٠٠٠ حرف)." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 => SSL، 587 => STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subjectLine = subject
    ? `رسالة تواصل: ${subject}`
    : `رسالة تواصل جديدة من ${name}`;

  const rows = [
    ["الاسم", name],
    ["البريد", email],
    ["الجوال", phone || "—"],
    ["الموضوع", subject || "—"],
  ];

  const html = `
  <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;color:#1e293b;line-height:1.8">
    <h2 style="margin:0 0 12px">رسالة جديدة من نموذج التواصل</h2>
    <table style="border-collapse:collapse;font-size:14px">
      ${rows.map(([k, v]) => `<tr>
        <td style="padding:6px 12px;color:#64748b;font-weight:bold">${k}</td>
        <td style="padding:6px 12px">${escapeHtml(v)}</td>
      </tr>`).join("")}
    </table>
    <h3 style="margin:18px 0 6px">الرسالة</h3>
    <div style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;font-size:14px">${escapeHtml(message)}</div>
  </div>`;

  const text =
    `رسالة جديدة من نموذج التواصل\n\n` +
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nالرسالة:\n${message}`;

  try {
    await transporter.sendMail({
      from: `"موقع تلخيص" <${SMTP_USER}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: subjectLine,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (err) {
    const code = err?.code || "";
    const message =
      code === "EAUTH" ? "فشل التحقق من بيانات البريد (تحقّق من SMTP_USER/SMTP_PASS)."
      : code === "ETIMEDOUT" || code === "ECONNECTION" ? "تعذّر الاتصال بخادم البريد."
      : "تعذّر إرسال الرسالة، حاول لاحقاً.";
    return Response.json({ error: message }, { status: 502 });
  }
}
