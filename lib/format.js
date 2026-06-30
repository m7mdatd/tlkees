/* Small presentation helpers shared across screens. */

const MONTHS = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
];

/** Format a Firestore Timestamp | Date | millis into a short Arabic label. */
export function formatWhen(ts) {
  if (!ts) return "—";
  let d;
  if (typeof ts.toDate === "function") d = ts.toDate();
  else if (ts instanceof Date) d = ts;
  else if (typeof ts === "number") d = new Date(ts);
  else return "—";

  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = d.toDateString() === yesterday.toDateString();

  const hh = String(d.getHours() % 12 || 12).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const mer = d.getHours() < 12 ? "ص" : "م";
  const time = `${hh}:${mm} ${mer}`;

  if (sameDay) return `اليوم · ${time}`;
  if (isYesterday) return `أمس · ${time}`;
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

/** Map a document type to a Tag tone. */
export function toneForType(type) {
  if (["تعميم", "خطاب"].includes(type)) return "accent";
  if (["قرار", "محضر"].includes(type)) return "navy";
  return "gray";
}
