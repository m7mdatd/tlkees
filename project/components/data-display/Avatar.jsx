import React from "react";

const SIZES = { sm: 28, md: 38, lg: 48 };

/**
 * User / document avatar. Renders `src` image, else initials on a navy
 * tint derived deterministically from the name.
 */
export function Avatar({ name = "", src, size = "md", style, ...rest }) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("");
  const palette = ["var(--navy-600)", "var(--teal-600)", "var(--navy-800)", "var(--teal-700)"];
  const hue = palette[name.length % palette.length];

  return (
    <span style={{
      width: dim, height: dim, flexShrink: 0, borderRadius: "50%",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", background: src ? "transparent" : hue, color: "var(--white)",
      fontSize: dim * 0.38, fontWeight: "var(--fw-semibold)", fontFamily: "var(--font-sans)",
      ...style,
    }} {...rest}>
      {src ? <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (initials || "؟")}
    </span>
  );
}
