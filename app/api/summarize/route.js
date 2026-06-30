import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 60;

const LENGTH_GUIDE = {
  "قصير": "ملخّص مكثّف جداً في جملة إلى جملتين، ونقطتين إلى ثلاث نقاط رئيسية.",
  "متوسط": "ملخّص واضح في فقرة قصيرة، وثلاث إلى خمس نقاط رئيسية.",
  "طويل": "ملخّص تفصيلي في فقرة أو فقرتين، وخمس إلى سبع نقاط رئيسية.",
};

const SUMMARY_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string", description: "عنوان موجز للمستند (٣ إلى ٧ كلمات)." },
    type: { type: "string", description: "نوع المخاطبة: قرار، تعميم، محضر، خطاب، أو نص." },
    headline: { type: "string", description: "جملة واحدة تلخّص جوهر النص." },
    summary: { type: "string", description: "الملخّص النصّي الكامل بالنبرة المطلوبة." },
    points: {
      type: "array",
      items: { type: "string" },
      description: "النقاط الرئيسية، كل نقطة جملة قصيرة.",
    },
  },
  required: ["title", "type", "headline", "summary", "points"],
  additionalProperties: false,
};

export async function POST(req) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "مفتاح Claude غير مهيّأ. أضف ANTHROPIC_API_KEY في إعدادات البيئة." },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "طلب غير صالح." }, { status: 400 });
  }

  const text = (body.text || "").trim();
  const length = body.length || "متوسط";
  const style = body.style || "رسمي";

  if (!text) return Response.json({ error: "النص فارغ." }, { status: 400 });
  if (text.length > 50000) {
    return Response.json({ error: "النص طويل جداً (الحد ٥٠ ألف حرف)." }, { status: 400 });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const system = `أنت مساعد متخصّص في تلخيص وإعادة صياغة المخاطبات الرسمية العربية لمنصة "تلخيص".
- حافظ على المعنى الأصلي والنبرة الرسمية ودقة المصطلحات.
- اكتب بأسلوب "${style}".
- ${LENGTH_GUIDE[length] || LENGTH_GUIDE["متوسط"]}
- لا تُضِف معلومات غير موجودة في النص الأصلي.
- أعد النتيجة بالعربية الفصحى.`;

  try {
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const response = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 2048,
      system,
      output_config: { format: { type: "json_schema", schema: SUMMARY_SCHEMA } },
      messages: [{ role: "user", content: `لخّص النص التالي:\n\n${text}` }],
    });

    if (response.stop_reason === "refusal") {
      return Response.json({ error: "تعذّر معالجة هذا النص." }, { status: 422 });
    }

    const block = response.content.find((b) => b.type === "text");
    const data = JSON.parse(block.text);

    const summaryWords = (data.summary || "").split(/\s+/).filter(Boolean).length;
    const ratio = wordCount > 0
      ? `${Math.max(0, Math.round((1 - summaryWords / wordCount) * 100))}٪`
      : "—";

    return Response.json({
      title: data.title,
      type: data.type,
      headline: data.headline,
      summary: data.summary,
      points: Array.isArray(data.points) ? data.points : [],
      wordCount,
      ratio,
    });
  } catch (err) {
    const message =
      err?.status === 429 ? "الخدمة مزدحمة حالياً، حاول بعد قليل."
      : err?.status === 401 ? "مفتاح Claude غير صالح."
      : "حدث خطأ أثناء التلخيص.";
    return Response.json({ error: message }, { status: 502 });
  }
}
