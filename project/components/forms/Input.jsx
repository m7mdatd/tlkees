import React, { useState } from "react";

/**
 * Single-line text field with label, optional hint and error state.
 * RTL-first; place icons with `iconStart`.
 */
export function Input({
  label,
  hint,
  error,
  iconStart,
  size = "md",
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || (label ? `in-${label}` : undefined);
  const pad = size === "sm" ? "8px 12px" : size === "lg" ? "14px 16px" : "11px 14px";
  const fs = size === "sm" ? "var(--fs-sm)" : "var(--fs-body)";

  const borderColor = error ? "var(--danger-500)" : focused ? "var(--border-focus)" : "var(--border-default)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-medium)", color: "var(--text-body)" }}>
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex", alignItems: "center", gap: "8px",
          background: disabled ? "var(--gray-100)" : "var(--surface-card)",
          border: `1px solid ${borderColor}`,
          borderRadius: "var(--radius-field)",
          padding: pad,
          boxShadow: focused && !error ? "var(--ring)" : "var(--shadow-inset)",
          transition: "border-color 120ms ease, box-shadow 120ms ease",
          opacity: disabled ? 0.7 : 1,
        }}
      >
        {iconStart && <span style={{ color: "var(--text-subtle)", display: "inline-flex", fontSize: "18px" }}>{iconStart}</span>}
        <input
          id={fieldId}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, border: "none", outline: "none", background: "transparent",
            font: "inherit", fontSize: fs, color: "var(--text-strong)", width: "100%",
            ...style,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: "var(--fs-xs)", color: error ? "var(--danger-600)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
