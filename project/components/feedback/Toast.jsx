import React from "react";

const TONES = {
  info:    { bar: "var(--teal-500)", icon: "ℹ", iconColor: "var(--teal-700)" },
  success: { bar: "var(--success-500)", icon: "✓", iconColor: "var(--success-600)" },
  warning: { bar: "var(--warning-500)", icon: "!", iconColor: "var(--warning-600)" },
  danger:  { bar: "var(--danger-500)", icon: "✕", iconColor: "var(--danger-600)" },
};

/**
 * Toast notification. Render inside a fixed stack; `tone` sets the leading
 * bar + icon. Static (presentational) — wire dismissal at the app level.
 */
export function Toast({ title, message, tone = "info", onClose, style }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div style={{
      display: "flex", gap: "12px", alignItems: "flex-start",
      background: "var(--surface-card)", borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-subtle)",
      borderInlineStart: `3px solid ${t.bar}`,
      padding: "14px 16px", minWidth: "300px", maxWidth: "420px",
      ...style,
    }}>
      <span style={{
        width: "22px", height: "22px", flexShrink: 0, borderRadius: "50%",
        background: t.bar, color: "var(--white)", fontSize: "13px", fontWeight: 700,
        display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: "1px",
      }}>{t.icon}</span>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-sm)" }}>{title}</div>}
        {message && <div style={{ color: "var(--text-muted)", fontSize: "var(--fs-sm)", marginTop: title ? "2px" : 0 }}>{message}</div>}
      </div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="إغلاق"
          style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-subtle)",
            fontSize: "18px", lineHeight: 1, padding: 0 }}>×</button>
      )}
    </div>
  );
}
