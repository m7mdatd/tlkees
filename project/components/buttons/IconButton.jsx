import React from "react";

const SIZES = { sm: "34px", md: "42px", lg: "52px" };
const ICON = { sm: "16px", md: "18px", lg: "20px" };

/**
 * Square icon-only button. Use for toolbar actions, close buttons, and
 * inline controls where a label would be redundant. Always pass `label`.
 */
export function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const variants = {
    ghost:     { background: "transparent", color: "var(--gray-600)", hover: "var(--navy-50)" },
    solid:     { background: "var(--brand-primary)", color: "var(--white)", hover: "var(--brand-primary-hover)" },
    accent:    { background: "var(--brand-accent)", color: "var(--white)", hover: "var(--brand-accent-hover)" },
    secondary: { background: "var(--surface-card)", color: "var(--navy-700)", hover: "var(--gray-50)", border: true },
  };
  const v = variants[variant] || variants.ghost;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = v.hover; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = v.background; }}
      style={{
        width: dim, height: dim,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        fontSize: ICON[size] || ICON.md,
        background: v.background, color: v.color,
        border: v.border ? "1px solid var(--border-default)" : "1px solid transparent",
        borderRadius: "var(--radius-md)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "background 140ms ease",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
