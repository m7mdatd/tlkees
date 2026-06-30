import React from "react";

/**
 * Surface container. `elevation` controls shadow; `accent` adds a top-side
 * turquoise keyline. Composes header / body / footer via children.
 */
export function Card({ children, elevation = "sm", accent = false, padding = "var(--space-6)", interactive = false, style, ...rest }) {
  const shadows = { none: "none", xs: "var(--shadow-xs)", sm: "var(--shadow-sm)", md: "var(--shadow-md)", lg: "var(--shadow-lg)" };
  return (
    <div
      onMouseEnter={(e) => { if (interactive) { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
      onMouseLeave={(e) => { if (interactive) { e.currentTarget.style.boxShadow = shadows[elevation]; e.currentTarget.style.transform = "none"; } }}
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderTop: accent ? "3px solid var(--brand-accent)" : "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-card)",
        boxShadow: shadows[elevation] || shadows.sm,
        padding,
        transition: "box-shadow 160ms ease, transform 160ms ease",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
