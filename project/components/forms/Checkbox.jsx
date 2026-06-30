import React, { useState } from "react";

/**
 * Checkbox with label. Controlled via `checked` or uncontrolled via `defaultChecked`.
 */
export function Checkbox({ label, checked, defaultChecked, disabled = false, onChange, id, ...rest }) {
  const [internal, setInternal] = useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : internal;
  const fieldId = id || (label ? `cb-${label}` : undefined);

  const toggle = (e) => { if (checked === undefined) setInternal(e.target.checked); onChange && onChange(e); };

  return (
    <label htmlFor={fieldId} style={{
      display: "inline-flex", alignItems: "center", gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.6 : 1,
      fontSize: "var(--fs-body)", color: "var(--text-body)",
    }}>
      <span style={{
        width: "20px", height: "20px", flexShrink: 0,
        borderRadius: "var(--radius-xs)",
        border: `1.5px solid ${isOn ? "var(--brand-accent)" : "var(--border-strong)"}`,
        background: isOn ? "var(--brand-accent)" : "var(--surface-card)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "var(--white)", fontSize: "13px", fontWeight: 700,
        transition: "background 120ms ease, border-color 120ms ease",
      }}>
        {isOn && "✓"}
      </span>
      <input id={fieldId} type="checkbox" checked={isOn} disabled={disabled} onChange={toggle}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
