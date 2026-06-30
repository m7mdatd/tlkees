# منصة تلخيص — Talkhees

منصة عربية (RTL) لتلخيص وإعادة صياغة النصوص والمخاطبات الرسمية، مع الحفاظ على النبرة الرسمية والمعنى الأصلي.

مبنية بـ **Next.js (App Router)** + **Firebase** (مصادقة + Firestore) + **Claude API** للتلخيص الفعلي، وجاهزة للنشر على **Vercel**.
الهوية البصرية مأخوذة من نظام التصميم في مجلد `project/` (الكحلي + الفيروزي، خط IBM Plex Sans Arabic).

## الصفحات

| المسار | الوصف | الحماية |
|--------|-------|---------|
| `/` | صفحة الهبوط | عامة |
| `/login` · `/register` | تسجيل الدخول / إنشاء حساب | عامة |
| `/dashboard` | مساحة عضو: الرئيسية + أداة التلخيص + المكتبة | تتطلب تسجيل دخول |
| `/admin` | لوحة المسؤول: مؤشرات + إدارة الأعضاء | تتطلب دور `admin` |
| `/api/summarize` | نقطة نهاية التلخيص عبر Claude (خادمية) | — |

## التشغيل محلياً

```bash
npm install
cp .env.example .env.local   # ثم املأ القيم
npm run dev                  # http://localhost:3000
```

## متغيّرات البيئة

انسخ `.env.example` إلى `.env.local` واملأ:

- `ANTHROPIC_API_KEY` — مفتاح Claude من <https://console.anthropic.com> (يُستخدم في الخادم فقط).
- `NEXT_PUBLIC_FIREBASE_*` — إعدادات تطبيق الويب من Firebase Console
  (Project settings → General → Your apps → SDK setup and configuration).

## إعداد Firebase

1. أنشئ مشروعاً في <https://console.firebase.google.com>.
2. **Authentication** → فعّل مزوّد **Email/Password**.
3. **Firestore Database** → أنشئ قاعدة بيانات (Production mode).
4. الصق محتوى `firestore.rules` في Firestore → **Rules** ثم انشره.
5. **Project settings** → أضف تطبيق ويب وانسخ قيم `NEXT_PUBLIC_FIREBASE_*`.

البنية في Firestore:
- `users/{uid}` — `{ name, email, role, plan, summaryCount, createdAt }`
- `summaries/{id}` — `{ userId, title, type, summary, points, wordCount, ratio, status, createdAt }`

### ترقية مستخدم إلى مسؤول

سجّل حساباً عادياً، ثم في Firestore Console افتح `users/{uid}` وغيّر `role` إلى `admin`.
سيظهر زر **لوحة المسؤول** في رأس مساحة العمل وتُتاح `/admin`.

## النشر على Vercel

1. ادفع المشروع إلى GitHub (تم).
2. في <https://vercel.com> → **Add New… → Project** واختر المستودع.
3. سيكتشف Vercel إطار Next.js تلقائياً (لا حاجة لإعدادات بناء).
4. في **Settings → Environment Variables** أضف كل متغيّرات `.env.example`
   (`ANTHROPIC_API_KEY` + `NEXT_PUBLIC_FIREBASE_*`).
5. **Deploy**. بعد النشر أضف نطاق Vercel إلى Firebase
   (Authentication → Settings → **Authorized domains**).

## بنية المشروع

```
app/                صفحات App Router + /api/summarize
components/         Icon + ds.jsx (مكوّنات نظام التصميم) + screens/ + RequireAuth
lib/               firebase, auth, summaries, users, format
styles/tokens/     توكنات CSS (ألوان، خطوط، مسافات…) منسوخة من نظام التصميم
firestore.rules    قواعد أمان Firestore
project/           نظام التصميم الأصلي (HTML/JSX prototypes) — المرجع البصري
DESIGN_HANDOFF.md  تعليمات تصدير Claude Design الأصلية
```

## ملاحظات

- التلخيص حقيقي عبر نموذج `claude-opus-4-8` ويُحفظ في مكتبة العضو تلقائياً.
- دون ضبط `NEXT_PUBLIC_FIREBASE_*` يعمل العرض لكن التسجيل/الحفظ معطّل (تظهر رسالة تنبيه).
- صورة الأفاتار تستخدم `<img>` عمداً (أحرف أولى)، لذا تحذير `next/image` متوقع وغير مؤثّر.
