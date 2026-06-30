"use client";
import React, { useState } from "react";

/* ============================================================
   منصة تلخيص — Design System primitives (React port of project/components)
   Navy = trust/formality · Turquoise = clarity/action · IBM Plex · RTL.
   ============================================================ */

/* ---------------- Button ---------------- */
const BTN_SIZES = {
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

export function Button({
  children, variant = "primary", size = "md", iconStart, iconEnd,
  loading = false, disabled = false, fullWidth = false, type = "button",
  onClick, style, ...rest
}) {
  const s = BTN_SIZES[size] || BTN_SIZES.md;
  const v = variantStyle(variant);
  const isDisabled = disabled || loading;

  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: s.gap,
    fontFamily: "var(--font-sans)", fontWeight: "var(--fw-semibold)", fontSize: s.fontSize,
    lineHeight: 1, height: s.height, padding: s.padding, borderRadius: s.radius,
    cursor: isDisabled ? "not-allowed" : "pointer", opacity: isDisabled ? 0.55 : 1,
    transition: "background 140ms ease, transform 80ms ease, box-shadow 140ms ease",
    width: fullWidth ? "100%" : undefined, whiteSpace: "nowrap", userSelect: "none",
    ...v, ...style,
  };

  const onEnter = (e) => { if (!isDisabled) e.currentTarget.style.background = v["--hover-bg"]; };
  const onLeave = (e) => { e.currentTarget.style.background = v.background; };
  const onDown = (e) => { if (!isDisabled) { e.currentTarget.style.background = v["--active-bg"]; e.currentTarget.style.transform = "translateY(1px)"; } };
  const onUp = (e) => { if (!isDisabled) { e.currentTarget.style.background = v["--hover-bg"]; e.currentTarget.style.transform = "none"; } };

  return (
    <button type={type} disabled={isDisabled} onClick={onClick} style={base}
      onMouseEnter={onEnter} onMouseLeave={onLeave} onMouseDown={onDown} onMouseUp={onUp} {...rest}>
      {loading && <Spinner />}
      {!loading && iconStart}
      {children}
      {!loading && iconEnd}
    </button>
  );
}

function Spinner() {
  return (
    <span aria-hidden="true" style={{
      width: "1em", height: "1em", border: "2px solid currentColor", borderTopColor: "transparent",
      borderRadius: "50%", display: "inline-block", animation: "tlkhs-spin 0.7s linear infinite",
    }}>
      <style>{`@keyframes tlkhs-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}

/* ---------------- IconButton ---------------- */
const IB_SIZES = { sm: "34px", md: "42px", lg: "52px" };
const IB_ICON = { sm: "16px", md: "18px", lg: "20px" };

export function IconButton({ children, label, variant = "ghost", size = "md", disabled = false, onClick, style, ...rest }) {
  const dim = IB_SIZES[size] || IB_SIZES.md;
  const variants = {
    ghost:     { background: "transparent", color: "var(--gray-600)", hover: "var(--navy-50)" },
    solid:     { background: "var(--brand-primary)", color: "var(--white)", hover: "var(--brand-primary-hover)" },
    accent:    { background: "var(--brand-accent)", color: "var(--white)", hover: "var(--brand-accent-hover)" },
    secondary: { background: "var(--surface-card)", color: "var(--navy-700)", hover: "var(--gray-50)", border: true },
  };
  const v = variants[variant] || variants.ghost;
  return (
    <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = v.hover; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = v.background; }}
      style={{
        width: dim, height: dim, display: "inline-flex", alignItems: "center", justifyContent: "center",
        fontSize: IB_ICON[size] || IB_ICON.md, background: v.background, color: v.color,
        border: v.border ? "1px solid var(--border-default)" : "1px solid transparent",
        borderRadius: "var(--radius-md)", cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1, transition: "background 140ms ease", ...style,
      }} {...rest}>
      {children}
    </button>
  );
}

/* ---------------- Logo ---------------- */
export function Logo({ variant = "full", tone = "light", size = 28, style, ...rest }) {
  const wordColor = tone === "inverse" ? "var(--white)" : "var(--navy-800)";
  const subColor = tone === "inverse" ? "var(--teal-300)" : "var(--teal-600)";
  const tile = Math.round(size * 1.28);

  const Mark = (
    <span style={{
      width: tile, height: tile, flexShrink: 0, borderRadius: Math.round(tile * 0.28),
      background: tone === "inverse" ? "var(--teal-400)" : "var(--brand-accent)",
      color: tone === "inverse" ? "var(--navy-900)" : "var(--white)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: tile * 0.6, lineHeight: 1,
      boxShadow: "var(--shadow-sm)",
    }}>ت</span>
  );
  const Word = (
    <span style={{
      fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: size, lineHeight: 1,
      letterSpacing: "-0.01em", display: "inline-flex", gap: "0.28em",
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

/* ---------------- Card ---------------- */
export function Card({ children, elevation = "sm", accent = false, padding = "var(--space-6)", interactive = false, style, ...rest }) {
  const shadows = { none: "none", xs: "var(--shadow-xs)", sm: "var(--shadow-sm)", md: "var(--shadow-md)", lg: "var(--shadow-lg)" };
  return (
    <div
      onMouseEnter={(e) => { if (interactive) { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
      onMouseLeave={(e) => { if (interactive) { e.currentTarget.style.boxShadow = shadows[elevation]; e.currentTarget.style.transform = "none"; } }}
      style={{
        background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
        borderTop: accent ? "3px solid var(--brand-accent)" : "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-card)", boxShadow: shadows[elevation] || shadows.sm, padding,
        transition: "box-shadow 160ms ease, transform 160ms ease",
        cursor: interactive ? "pointer" : "default", ...style,
      }} {...rest}>
      {children}
    </div>
  );
}

/* ---------------- Badge ---------------- */
const BADGE_TONES = {
  neutral: { bg: "var(--gray-100)", fg: "var(--gray-700)" },
  navy:    { bg: "var(--navy-50)", fg: "var(--navy-700)" },
  accent:  { bg: "var(--teal-50)", fg: "var(--teal-700)" },
  success: { bg: "var(--success-100)", fg: "var(--success-600)" },
  warning: { bg: "var(--warning-100)", fg: "var(--warning-600)" },
  danger:  { bg: "var(--danger-100)", fg: "var(--danger-600)" },
};
export function Badge({ children, tone = "neutral", dot = false, style, ...rest }) {
  const t = BADGE_TONES[tone] || BADGE_TONES.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "6px", background: t.bg, color: t.fg,
      fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-semibold)", padding: "3px 10px",
      borderRadius: "var(--radius-pill)", lineHeight: 1.4, whiteSpace: "nowrap", ...style,
    }} {...rest}>
      {dot && <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "currentColor" }} />}
      {children}
    </span>
  );
}

/* ---------------- Tag ---------------- */
export function Tag({ children, onRemove, tone = "navy", style, ...rest }) {
  const tones = {
    navy:   { bg: "var(--navy-50)", fg: "var(--navy-700)", br: "var(--navy-100)" },
    accent: { bg: "var(--teal-50)", fg: "var(--teal-700)", br: "var(--teal-100)" },
    gray:   { bg: "var(--gray-50)", fg: "var(--gray-700)", br: "var(--gray-200)" },
  };
  const t = tones[tone] || tones.navy;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "6px", background: t.bg, color: t.fg,
      border: `1px solid ${t.br}`, fontSize: "var(--fs-xs)", fontWeight: "var(--fw-medium)",
      padding: "4px 10px", borderRadius: "var(--radius-sm)", lineHeight: 1.4, ...style,
    }} {...rest}>
      {children}
      {onRemove && (
        <button type="button" onClick={onRemove} aria-label="إزالة"
          style={{ border: "none", background: "transparent", color: "currentColor", cursor: "pointer",
            fontSize: "14px", lineHeight: 1, padding: 0, opacity: 0.7 }}>×</button>
      )}
    </span>
  );
}

/* ---------------- Avatar ---------------- */
const AV_SIZES = { sm: 28, md: 38, lg: 48 };
export function Avatar({ name = "", src, size = "md", style, ...rest }) {
  const dim = AV_SIZES[size] || AV_SIZES.md;
  const initials = name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("");
  const palette = ["var(--navy-600)", "var(--teal-600)", "var(--navy-800)", "var(--teal-700)"];
  const hue = palette[name.length % palette.length];
  return (
    <span style={{
      width: dim, height: dim, flexShrink: 0, borderRadius: "50%",
      display: "inline-flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
      background: src ? "transparent" : hue, color: "var(--white)", fontSize: dim * 0.38,
      fontWeight: "var(--fw-semibold)", fontFamily: "var(--font-sans)", ...style,
    }} {...rest}>
      {src ? <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (initials || "؟")}
    </span>
  );
}

/* ---------------- Input ---------------- */
export function Input({ label, hint, error, iconStart, size = "md", disabled = false, id, style, ...rest }) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || (label ? `in-${label}` : undefined);
  const pad = size === "sm" ? "8px 12px" : size === "lg" ? "14px 16px" : "11px 14px";
  const fs = size === "sm" ? "var(--fs-sm)" : "var(--fs-body)";
  const borderColor = error ? "var(--danger-500)" : focused ? "var(--border-focus)" : "var(--border-default)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-medium)", color: "var(--text-body)" }}>{label}</label>
      )}
      <div style={{
        display: "flex", alignItems: "center", gap: "8px",
        background: disabled ? "var(--gray-100)" : "var(--surface-card)",
        border: `1px solid ${borderColor}`, borderRadius: "var(--radius-field)", padding: pad,
        boxShadow: focused && !error ? "var(--ring)" : "var(--shadow-inset)",
        transition: "border-color 120ms ease, box-shadow 120ms ease", opacity: disabled ? 0.7 : 1,
      }}>
        {iconStart && <span style={{ color: "var(--text-subtle)", display: "inline-flex", fontSize: "18px" }}>{iconStart}</span>}
        <input id={fieldId} disabled={disabled} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ flex: 1, border: "none", outline: "none", background: "transparent", font: "inherit",
            fontSize: fs, color: "var(--text-strong)", width: "100%", ...style }} {...rest} />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: "var(--fs-xs)", color: error ? "var(--danger-600)" : "var(--text-muted)" }}>{error || hint}</span>
      )}
    </div>
  );
}

/* ---------------- Textarea ---------------- */
export function Textarea({ label, hint, error, rows = 6, maxLength, showCount = false, value, disabled = false, id, onChange, style, ...rest }) {
  const [focused, setFocused] = useState(false);
  const [internal, setInternal] = useState(value || "");
  const val = value !== undefined ? value : internal;
  const fieldId = id || (label ? `ta-${label}` : undefined);
  const borderColor = error ? "var(--danger-500)" : focused ? "var(--border-focus)" : "var(--border-default)";
  const handle = (e) => { if (value === undefined) setInternal(e.target.value); onChange && onChange(e); };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-medium)", color: "var(--text-body)" }}>{label}</label>
      )}
      <textarea id={fieldId} rows={rows} maxLength={maxLength} value={val} disabled={disabled} onChange={handle}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          font: "inherit", fontSize: "var(--fs-body)", lineHeight: "var(--lh-normal)", color: "var(--text-strong)",
          resize: "vertical", background: disabled ? "var(--gray-100)" : "var(--surface-card)",
          border: `1px solid ${borderColor}`, borderRadius: "var(--radius-field)", padding: "12px 14px",
          boxShadow: focused && !error ? "var(--ring)" : "var(--shadow-inset)", outline: "none",
          transition: "border-color 120ms ease, box-shadow 120ms ease", ...style,
        }} {...rest} />
      <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
        <span style={{ fontSize: "var(--fs-xs)", color: error ? "var(--danger-600)" : "var(--text-muted)" }}>{error || hint}</span>
        {showCount && (
          <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-subtle)", fontFamily: "var(--font-mono)" }}>
            {String(val).length}{maxLength ? ` / ${maxLength}` : ""}
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------------- Select ---------------- */
export function Select({ label, hint, error, options = [], size = "md", disabled = false, id, style, ...rest }) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || (label ? `sel-${label}` : undefined);
  const pad = size === "sm" ? "8px 12px" : size === "lg" ? "14px 16px" : "11px 14px";
  const borderColor = error ? "var(--danger-500)" : focused ? "var(--border-focus)" : "var(--border-default)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-medium)", color: "var(--text-body)" }}>{label}</label>
      )}
      <div style={{ position: "relative" }}>
        <select id={fieldId} disabled={disabled} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            appearance: "none", WebkitAppearance: "none", width: "100%", font: "inherit",
            fontSize: "var(--fs-body)", color: "var(--text-strong)",
            background: disabled ? "var(--gray-100)" : "var(--surface-card)",
            border: `1px solid ${borderColor}`, borderRadius: "var(--radius-field)", padding: pad, paddingLeft: "38px",
            boxShadow: focused && !error ? "var(--ring)" : "var(--shadow-inset)", outline: "none",
            cursor: disabled ? "not-allowed" : "pointer", transition: "border-color 120ms ease, box-shadow 120ms ease", ...style,
          }} {...rest}>
          {options.map((o) =>
            typeof o === "string" ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>
          )}
        </select>
        <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)",
          pointerEvents: "none", color: "var(--text-subtle)", fontSize: "12px" }}>▼</span>
      </div>
      {(hint || error) && (
        <span style={{ fontSize: "var(--fs-xs)", color: error ? "var(--danger-600)" : "var(--text-muted)" }}>{error || hint}</span>
      )}
    </div>
  );
}

/* ---------------- Checkbox ---------------- */
export function Checkbox({ label, checked, defaultChecked, disabled = false, onChange, id, ...rest }) {
  const [internal, setInternal] = useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : internal;
  const fieldId = id || (label ? `cb-${label}` : undefined);
  const toggle = (e) => { if (checked === undefined) setInternal(e.target.checked); onChange && onChange(e); };
  return (
    <label htmlFor={fieldId} style={{
      display: "inline-flex", alignItems: "center", gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.6 : 1,
      fontSize: "var(--fs-body)", color: "var(--text-body)",
    }}>
      <span style={{
        width: "20px", height: "20px", flexShrink: 0, borderRadius: "var(--radius-xs)",
        border: `1.5px solid ${isOn ? "var(--brand-accent)" : "var(--border-strong)"}`,
        background: isOn ? "var(--brand-accent)" : "var(--surface-card)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "var(--white)", fontSize: "13px", fontWeight: 700,
        transition: "background 120ms ease, border-color 120ms ease",
      }}>{isOn && "✓"}</span>
      <input id={fieldId} type="checkbox" checked={isOn} disabled={disabled} onChange={toggle}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}

/* ---------------- Switch ---------------- */
export function Switch({ label, checked, defaultChecked, disabled = false, onChange, id }) {
  const [internal, setInternal] = useState(defaultChecked || false);
  const on = checked !== undefined ? checked : internal;
  const fieldId = id || (label ? `sw-${label}` : undefined);
  const toggle = () => { if (disabled) return; const next = !on; if (checked === undefined) setInternal(next); onChange && onChange(next); };
  return (
    <label htmlFor={fieldId} style={{
      display: "inline-flex", alignItems: "center", gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.6 : 1,
      fontSize: "var(--fs-body)", color: "var(--text-body)",
    }}>
      <button id={fieldId} type="button" role="switch" aria-checked={on} disabled={disabled} onClick={toggle}
        style={{
          width: "42px", height: "24px", flexShrink: 0, borderRadius: "var(--radius-pill)",
          border: "none", padding: "2px", cursor: disabled ? "not-allowed" : "pointer",
          background: on ? "var(--brand-accent)" : "var(--gray-300)",
          display: "inline-flex", justifyContent: on ? "flex-start" : "flex-end", transition: "background 160ms ease",
        }}>
        <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--white)",
          boxShadow: "var(--shadow-sm)", transition: "transform 160ms ease" }} />
      </button>
      {label}
    </label>
  );
}

/* ---------------- Tabs ---------------- */
export function Tabs({ items = [], value, defaultValue, onChange, style }) {
  const [internal, setInternal] = useState(defaultValue || (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const pick = (id) => { if (value === undefined) setInternal(id); onChange && onChange(id); };
  return (
    <div role="tablist" style={{ display: "flex", gap: "4px", borderBottom: "1px solid var(--border-subtle)", ...style }}>
      {items.map((it) => {
        const on = active === it.id;
        return (
          <button key={it.id} role="tab" aria-selected={on} onClick={() => pick(it.id)}
            onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = "var(--navy-700)"; }}
            onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = "var(--text-muted)"; }}
            style={{
              position: "relative", border: "none", background: "transparent", padding: "12px 16px", cursor: "pointer",
              fontSize: "var(--fs-sm)", fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
              fontFamily: "var(--font-sans)", color: on ? "var(--navy-900)" : "var(--text-muted)",
              display: "inline-flex", alignItems: "center", gap: "8px", transition: "color 120ms ease",
            }}>
            {it.label}
            {it.badge != null && (
              <span style={{
                background: on ? "var(--teal-100)" : "var(--gray-100)", color: on ? "var(--teal-700)" : "var(--gray-600)",
                fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-semibold)", padding: "1px 7px",
                borderRadius: "var(--radius-pill)", fontFamily: "var(--font-mono)",
              }}>{it.badge}</span>
            )}
            <span style={{ position: "absolute", insetInline: "8px", bottom: "-1px", height: "2.5px",
              borderRadius: "2px", background: on ? "var(--brand-accent)" : "transparent", transition: "background 140ms ease" }} />
          </button>
        );
      })}
    </div>
  );
}

/* ---------------- Toast ---------------- */
const TOAST_TONES = {
  info:    { bar: "var(--teal-500)", icon: "ℹ" },
  success: { bar: "var(--success-500)", icon: "✓" },
  warning: { bar: "var(--warning-500)", icon: "!" },
  danger:  { bar: "var(--danger-500)", icon: "✕" },
};
export function Toast({ title, message, tone = "info", onClose, style }) {
  const t = TOAST_TONES[tone] || TOAST_TONES.info;
  return (
    <div style={{
      display: "flex", gap: "12px", alignItems: "flex-start", background: "var(--surface-card)",
      borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-subtle)",
      borderInlineStart: `3px solid ${t.bar}`, padding: "14px 16px", minWidth: "300px", maxWidth: "420px", ...style,
    }}>
      <span style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "50%", background: t.bar,
        color: "var(--white)", fontSize: "13px", fontWeight: 700, display: "inline-flex",
        alignItems: "center", justifyContent: "center", marginTop: "1px" }}>{t.icon}</span>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-sm)" }}>{title}</div>}
        {message && <div style={{ color: "var(--text-muted)", fontSize: "var(--fs-sm)", marginTop: title ? "2px" : 0 }}>{message}</div>}
      </div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="إغلاق"
          style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-subtle)",
            fontSize: "18px", lineHeight: 1, padding: 0 }}>×</button>
      )}
    </div>
  );
}

/* ---------------- Dialog ---------------- */
export function Dialog({ open, onClose, title, children, footer, width = "520px" }) {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "color-mix(in srgb, var(--navy-950) 55%, transparent)", backdropFilter: "blur(2px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", animation: "tlkhs-fade 160ms ease",
      }}>
      <style>{`@keyframes tlkhs-fade{from{opacity:0}to{opacity:1}}@keyframes tlkhs-pop{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}`}</style>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: "100%", maxWidth: width, background: "var(--surface-card)", borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-xl)", animation: "tlkhs-pop 200ms cubic-bezier(.2,.8,.2,1)", overflow: "hidden",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", padding: "20px 24px 0" }}>
          <h3 style={{ fontSize: "var(--fs-h4)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{title}</h3>
          <button type="button" onClick={onClose} aria-label="إغلاق"
            style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: "22px",
              color: "var(--text-subtle)", lineHeight: 1, padding: "2px" }}>×</button>
        </div>
        <div style={{ padding: "12px 24px 0", color: "var(--text-body)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-normal)" }}>{children}</div>
        {footer && <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px", padding: "20px 24px 24px", marginTop: "8px" }}>{footer}</div>}
      </div>
    </div>
  );
}

/* ---------------- Tooltip ---------------- */
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
          position: "absolute", zIndex: 1100, ...pos[placement], background: "var(--navy-900)", color: "var(--white)",
          fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-medium)", padding: "6px 10px", borderRadius: "var(--radius-sm)",
          whiteSpace: "nowrap", boxShadow: "var(--shadow-md)", pointerEvents: "none", animation: "tlkhs-tip 120ms ease",
        }}>
          {content}
          <style>{`@keyframes tlkhs-tip{from{opacity:0}to{opacity:1}}`}</style>
        </span>
      )}
    </span>
  );
}
