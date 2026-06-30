import React from "react";

/**
 * منصة تلخيص text logo. There is no graphic logo — the brand is the
 * wordmark plus a turquoise «ت» monogram tile. `variant` toggles which
 * parts render; `tone` adapts to light or dark (navy) backgrounds.
 */
export function Logo({ variant = "full", tone = "light", size = 28, style, ...rest }) {
  const wordColor = tone === "inverse" ? "var(--white)" : "var(--navy-800)";
  const subColor = tone === "inverse" ? "var(--teal-300)" : "var(--teal-600)";
  const tile = Math.round(size * 1.28);

  const Mark = (
    <span style={{
      width: tile, height: tile, flexShrink: 0,
      borderRadius: Math.round(tile * 0.28),
      background: tone === "inverse" ? "var(--teal-400)" : "var(--brand-accent)",
      color: tone === "inverse" ? "var(--navy-900)" : "var(--white)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: tile * 0.6, lineHeight: 1,
      boxShadow: "var(--shadow-sm)",
    }}>ت</span>
  );

  const Word = (
    <span style={{
      fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: size,
      lineHeight: 1, letterSpacing: "-0.01em", display: "inline-flex", gap: "0.28em",
    }}>
      <span style={{ color: subColor, fontWeight: 500 }}>منصة</span>
      <span style={{ color: wordColor }}>تلخيص</span>
    </span>
  );

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5em", ...style }} {...rest}>
      {(variant === "full" || variant === "mark") && Mark}
      {(variant === "full" || variant === "wordmark") && Word}
    </span>
  );
}
