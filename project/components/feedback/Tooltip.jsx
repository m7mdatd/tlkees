import React, { useState } from "react";

/**
 * Lightweight hover/focus tooltip. Wraps a single trigger child; `content`
 * is the label. `placement` positions the bubble (top default).
 */
export function Tooltip({ content, placement = "top", children }) {
  const [show, setShow] = useState(false);
  const pos = {
    top:    { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    start:  { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    end:    { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
  };
  return (
    <span style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
      {children}
      {show && (
        <span role="tooltip" style={{
          position: "absolute", zIndex: 1100, ...pos[placement],
          background: "var(--navy-900)", color: "var(--white)",
          fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-medium)",
          padding: "6px 10px", borderRadius: "var(--radius-sm)", whiteSpace: "nowrap",
          boxShadow: "var(--shadow-md)", pointerEvents: "none",
          animation: "tlkhs-tip 120ms ease",
        }}>
          {content}
          <style>{`@keyframes tlkhs-tip{from{opacity:0}to{opacity:1}}`}</style>
        </span>
      )}
    </span>
  );
}
