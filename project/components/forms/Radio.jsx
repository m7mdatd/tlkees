import React from "react";

/**
 * Radio group. Pass `options` (string[] or {label,value}[]) and a `name`.
 */
export function Radio({ name, options = [], value, defaultValue, onChange, disabled = false }) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value !== undefined ? value : internal;

  const pick = (v) => { if (value === undefined) setInternal(v); onChange && onChange(v); };

  return (
    <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {options.map((o) => {
        const val = typeof o === "string" ? o : o.value;
        const lbl = typeof o === "string" ? o : o.label;
        const on = current === val;
        return (
          <label key={val} style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.6 : 1,
            fontSize: "var(--fs-body)", color: "var(--text-body)",
          }}>
            <span style={{
              width: "20px", height: "20px", flexShrink: 0, borderRadius: "50%",
              border: `1.5px solid ${on ? "var(--brand-accent)" : "var(--border-strong)"}`,
              background: "var(--surface-card)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              transition: "border-color 120ms ease",
            }}>
              {on && <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--brand-accent)" }} />}
            </span>
            <input type="radio" name={name} value={val} checked={on} disabled={disabled}
              onChange={() => pick(val)} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
            {lbl}
          </label>
        );
      })}
    </div>
  );
}
