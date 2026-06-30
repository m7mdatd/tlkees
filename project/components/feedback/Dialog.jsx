import React from "react";

/**
 * Modal dialog with scrim. Controlled via `open`; renders nothing when closed.
 * Provide `title`, body via children, and `footer` for actions.
 */
export function Dialog({ open, onClose, title, children, footer, width = "520px" }) {
  if (!open) return null;
  return (
    <div
      role="dialog" aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "color-mix(in srgb, var(--navy-950) 55%, transparent)",
        backdropFilter: "blur(2px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "24px",
        animation: "tlkhs-fade 160ms ease",
      }}
    >
      <style>{`@keyframes tlkhs-fade{from{opacity:0}to{opacity:1}}@keyframes tlkhs-pop{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}`}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: width, background: "var(--surface-card)",
          borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-xl)",
          animation: "tlkhs-pop 200ms cubic-bezier(.2,.8,.2,1)", overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          gap: "16px", padding: "20px 24px 0" }}>
          <h3 style={{ fontSize: "var(--fs-h4)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{title}</h3>
          <button type="button" onClick={onClose} aria-label="إغلاق"
            style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: "22px",
              color: "var(--text-subtle)", lineHeight: 1, padding: "2px" }}>×</button>
        </div>
        <div style={{ padding: "12px 24px 0", color: "var(--text-body)", fontSize: "var(--fs-body)",
          lineHeight: "var(--lh-normal)" }}>{children}</div>
        {footer && (
          <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px",
            padding: "20px 24px 24px", marginTop: "8px" }}>{footer}</div>
        )}
      </div>
    </div>
  );
}
