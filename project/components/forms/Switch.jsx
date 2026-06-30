import React, { useState } from "react";

/**
 * Toggle switch for on/off settings (e.g. «الحفاظ على النبرة الرسمية»).
 */
export function Switch({ label, checked, defaultChecked, disabled = false, onChange, id }) {
  const [internal, setInternal] = useState(defaultChecked || false);
  const on = checked !== undefined ? checked : internal;
  const fieldId = id || (label ? `sw-${label}` : undefined);

  const toggle = () => { if (disabled) return; const next = !on; if (checked === undefined) setInternal(next); onChange && onChange(next); };

  return (
    <label htmlFor={fieldId} style={{
      display: "inline-flex", alignItems: "center", gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.6 : 1,
      fontSize: "var(--fs-body)", color: "var(--text-body)",
    }}>
      <button
        id={fieldId} type="button" role="switch" aria-checked={on} disabled={disabled} onClick={toggle}
        style={{
          width: "42px", height: "24px", flexShrink: 0, borderRadius: "var(--radius-pill)",
          border: "none", padding: "2px", cursor: disabled ? "not-allowed" : "pointer",
          background: on ? "var(--brand-accent)" : "var(--gray-300)",
          display: "inline-flex", justifyContent: on ? "flex-start" : "flex-end",
          transition: "background 160ms ease",
        }}
      >
        <span style={{
          width: "20px", height: "20px", borderRadius: "50%", background: "var(--white)",
          boxShadow: "var(--shadow-sm)", transition: "transform 160ms ease",
        }} />
      </button>
      {label}
    </label>
  );
}
