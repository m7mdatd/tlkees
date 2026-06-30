import React from "react";

/**
 * Removable tag / chip for keywords, filters, document types.
 */
export function Tag({ children, onRemove, tone = "navy", style, ...rest }) {
  const tones = {
    navy:   { bg: "var(--navy-50)", fg: "var(--navy-700)", br: "var(--navy-100)" },
    accent: { bg: "var(--teal-50)", fg: "var(--teal-700)", br: "var(--teal-100)" },
    gray:   { bg: "var(--gray-50)", fg: "var(--gray-700)", br: "var(--gray-200)" },
  };
  const t = tones[tone] || tones.navy;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      background: t.bg, color: t.fg, border: `1px solid ${t.br}`,
      fontSize: "var(--fs-xs)", fontWeight: "var(--fw-medium)",
      padding: "4px 10px", borderRadius: "var(--radius-sm)", lineHeight: 1.4,
      ...style,
    }} {...rest}>
      {children}
      {onRemove && (
        <button type="button" onClick={onRemove} aria-label="إزالة"
          style={{ border: "none", background: "transparent", color: "currentColor", cursor: "pointer",
            fontSize: "14px", lineHeight: 1, padding: 0, opacity: 0.7 }}>×</button>
      )}
    </span>
  );
}
