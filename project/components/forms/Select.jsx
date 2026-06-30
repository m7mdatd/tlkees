import React, { useState } from "react";

/**
 * Native select styled to match the system. RTL caret on the left.
 */
export function Select({ label, hint, error, options = [], size = "md", disabled = false, id, style, ...rest }) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || (label ? `sel-${label}` : undefined);
  const pad = size === "sm" ? "8px 12px" : size === "lg" ? "14px 16px" : "11px 14px";
  const borderColor = error ? "var(--danger-500)" : focused ? "var(--border-focus)" : "var(--border-default)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-medium)", color: "var(--text-body)" }}>
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          id={fieldId}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            appearance: "none", WebkitAppearance: "none",
            width: "100%", font: "inherit", fontSize: "var(--fs-body)", color: "var(--text-strong)",
            background: disabled ? "var(--gray-100)" : "var(--surface-card)",
            border: `1px solid ${borderColor}`, borderRadius: "var(--radius-field)",
            padding: pad, paddingLeft: "38px",
            boxShadow: focused && !error ? "var(--ring)" : "var(--shadow-inset)",
            outline: "none", cursor: disabled ? "not-allowed" : "pointer",
            transition: "border-color 120ms ease, box-shadow 120ms ease",
            ...style,
          }}
          {...rest}
        >
          {options.map((o) =>
            typeof o === "string"
              ? <option key={o} value={o}>{o}</option>
              : <option key={o.value} value={o.value}>{o.label}</option>
          )}
        </select>
        <span style={{
          position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)",
          pointerEvents: "none", color: "var(--text-subtle)", fontSize: "12px",
        }}>▼</span>
      </div>
      {(hint || error) && (
        <span style={{ fontSize: "var(--fs-xs)", color: error ? "var(--danger-600)" : "var(--text-muted)" }}>{error || hint}</span>
      )}
    </div>
  );
}
