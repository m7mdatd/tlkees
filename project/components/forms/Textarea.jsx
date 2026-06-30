import React, { useState } from "react";

/**
 * Multi-line text area — the workhorse of منصة تلخيص (paste source text here).
 * Supports an optional live character counter.
 */
export function Textarea({
  label,
  hint,
  error,
  rows = 6,
  maxLength,
  showCount = false,
  value,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [internal, setInternal] = useState(value || "");
  const val = value !== undefined ? value : internal;
  const fieldId = id || (label ? `ta-${label}` : undefined);
  const borderColor = error ? "var(--danger-500)" : focused ? "var(--border-focus)" : "var(--border-default)";

  const handle = (e) => { if (value === undefined) setInternal(e.target.value); onChange && onChange(e); };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-medium)", color: "var(--text-body)" }}>
          {label}
        </label>
      )}
      <textarea
        id={fieldId}
        rows={rows}
        maxLength={maxLength}
        value={val}
        disabled={disabled}
        onChange={handle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          font: "inherit", fontSize: "var(--fs-body)", lineHeight: "var(--lh-normal)",
          color: "var(--text-strong)", resize: "vertical",
          background: disabled ? "var(--gray-100)" : "var(--surface-card)",
          border: `1px solid ${borderColor}`, borderRadius: "var(--radius-field)",
          padding: "12px 14px",
          boxShadow: focused && !error ? "var(--ring)" : "var(--shadow-inset)",
          outline: "none", transition: "border-color 120ms ease, box-shadow 120ms ease",
          ...style,
        }}
        {...rest}
      />
      <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
        <span style={{ fontSize: "var(--fs-xs)", color: error ? "var(--danger-600)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
        {showCount && (
          <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-subtle)", fontFamily: "var(--font-mono)" }}>
            {String(val).length}{maxLength ? ` / ${maxLength}` : ""}
          </span>
        )}
      </div>
    </div>
  );
}
