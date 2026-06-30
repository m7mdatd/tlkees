import React, { useState } from "react";

/**
 * Horizontal tabs. `items` = [{ id, label, badge? }]. Underline indicator
 * in turquoise; controlled via `value`/`onChange` or uncontrolled.
 */
export function Tabs({ items = [], value, defaultValue, onChange, style }) {
  const [internal, setInternal] = useState(defaultValue || (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;

  const pick = (id) => { if (value === undefined) setInternal(id); onChange && onChange(id); };

  return (
    <div role="tablist" style={{
      display: "flex", gap: "4px", borderBottom: "1px solid var(--border-subtle)",
      ...style,
    }}>
      {items.map((it) => {
        const on = active === it.id;
        return (
          <button
            key={it.id} role="tab" aria-selected={on} onClick={() => pick(it.id)}
            onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = "var(--navy-700)"; }}
            onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = "var(--text-muted)"; }}
            style={{
              position: "relative", border: "none", background: "transparent",
              padding: "12px 16px", cursor: "pointer",
              fontSize: "var(--fs-sm)", fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
              fontFamily: "var(--font-sans)",
              color: on ? "var(--navy-900)" : "var(--text-muted)",
              display: "inline-flex", alignItems: "center", gap: "8px",
              transition: "color 120ms ease",
            }}
          >
            {it.label}
            {it.badge != null && (
              <span style={{
                background: on ? "var(--teal-100)" : "var(--gray-100)",
                color: on ? "var(--teal-700)" : "var(--gray-600)",
                fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-semibold)",
                padding: "1px 7px", borderRadius: "var(--radius-pill)", fontFamily: "var(--font-mono)",
              }}>{it.badge}</span>
            )}
            <span style={{
              position: "absolute", insetInline: "8px", bottom: "-1px", height: "2.5px",
              borderRadius: "2px", background: on ? "var(--brand-accent)" : "transparent",
              transition: "background 140ms ease",
            }} />
          </button>
        );
      })}
    </div>
  );
}
