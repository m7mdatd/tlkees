import React from "react";

const TONES = {
  neutral: { bg: "var(--gray-100)", fg: "var(--gray-700)" },
  navy:    { bg: "var(--navy-50)", fg: "var(--navy-700)" },
  accent:  { bg: "var(--teal-50)", fg: "var(--teal-700)" },
  success: { bg: "var(--success-100)", fg: "var(--success-600)" },
  warning: { bg: "var(--warning-100)", fg: "var(--warning-600)" },
  danger:  { bg: "var(--danger-100)", fg: "var(--danger-600)" },
};

/**
 * Small status / category label. `dot` prefixes a colored indicator.
 */
export function Badge({ children, tone = "neutral", dot = false, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      background: t.bg, color: t.fg,
      fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-semibold)",
      padding: "3px 10px", borderRadius: "var(--radius-pill)",
      lineHeight: 1.4, whiteSpace: "nowrap",
      ...style,
    }} {...rest}>
      {dot && <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "currentColor" }} />}
      {children}
    </span>
  );
}
