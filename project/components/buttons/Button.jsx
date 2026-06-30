import React from "react";

const SIZES = {
  sm: { fontSize: "var(--fs-sm)", padding: "7px 14px", gap: "6px", radius: "var(--radius-sm)", height: "34px" },
  md: { fontSize: "var(--fs-body)", padding: "10px 20px", gap: "8px", radius: "var(--radius-md)", height: "42px" },
  lg: { fontSize: "var(--fs-lead)", padding: "13px 26px", gap: "10px", radius: "var(--radius-md)", height: "52px" },
};

function variantStyle(variant) {
  switch (variant) {
    case "accent":
      return { background: "var(--brand-accent)", color: "var(--white)", border: "1px solid transparent",
        "--hover-bg": "var(--brand-accent-hover)", "--active-bg": "var(--brand-accent-active)" };
    case "secondary":
      return { background: "var(--surface-card)", color: "var(--navy-800)", border: "1px solid var(--border-default)",
        "--hover-bg": "var(--gray-50)", "--active-bg": "var(--gray-100)" };
    case "ghost":
      return { background: "transparent", color: "var(--navy-700)", border: "1px solid transparent",
        "--hover-bg": "var(--navy-50)", "--active-bg": "var(--navy-100)" };
    case "danger":
      return { background: "var(--danger-500)", color: "var(--white)", border: "1px solid transparent",
        "--hover-bg": "var(--danger-600)", "--active-bg": "var(--danger-600)" };
    case "primary":
    default:
      return { background: "var(--brand-primary)", color: "var(--white)", border: "1px solid transparent",
        "--hover-bg": "var(--brand-primary-hover)", "--active-bg": "var(--brand-primary-active)" };
  }
}

/**
 * Primary call-to-action button. Navy = primary actions, turquoise = the
 * single most important action on a screen (summarize / generate).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  iconStart,
  iconEnd,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant);
  const isDisabled = disabled || loading;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-semibold)",
    fontSize: s.fontSize,
    lineHeight: 1,
    height: s.height,
    padding: s.padding,
    borderRadius: s.radius,
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.55 : 1,
    transition: "background 140ms ease, transform 80ms ease, box-shadow 140ms ease",
    width: fullWidth ? "100%" : undefined,
    whiteSpace: "nowrap",
    userSelect: "none",
    ...v,
    ...style,
  };

  const handleEnter = (e) => { if (!isDisabled) e.currentTarget.style.background = v["--hover-bg"]; };
  const handleLeave = (e) => { e.currentTarget.style.background = v.background; };
  const handleDown = (e) => { if (!isDisabled) { e.currentTarget.style.background = v["--active-bg"]; e.currentTarget.style.transform = "translateY(1px)"; } };
  const handleUp = (e) => { if (!isDisabled) { e.currentTarget.style.background = v["--hover-bg"]; e.currentTarget.style.transform = "none"; } };

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      style={base}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      {...rest}
    >
      {loading && <Spinner />}
      {!loading && iconStart}
      {children}
      {!loading && iconEnd}
    </button>
  );
}

function Spinner() {
  return (
    <span
      aria-hidden="true"
      style={{
        width: "1em", height: "1em",
        border: "2px solid currentColor", borderTopColor: "transparent",
        borderRadius: "50%", display: "inline-block",
        animation: "tlkhs-spin 0.7s linear infinite",
      }}
    >
      <style>{`@keyframes tlkhs-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}
