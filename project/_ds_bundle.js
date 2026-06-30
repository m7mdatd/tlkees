/* @ds-bundle: {"format":3,"namespace":"DesignSystem_4df9a0","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"7a3dbd18a594","components/buttons/Button.jsx":"b0ae229c2d9a","components/buttons/IconButton.jsx":"f4f455445991","components/data-display/Avatar.jsx":"8eed86d772e7","components/data-display/Badge.jsx":"9ee1dfe37ec0","components/data-display/Card.jsx":"5c8e7c3ab26a","components/data-display/Tag.jsx":"08ad0613f5ba","components/feedback/Dialog.jsx":"9be90a7ef779","components/feedback/Toast.jsx":"8547ae7c064b","components/feedback/Tooltip.jsx":"fc3e6298c54b","components/forms/Checkbox.jsx":"90c2abcc550c","components/forms/Input.jsx":"023df07786f7","components/forms/Radio.jsx":"a20b4e155513","components/forms/Select.jsx":"ec8220f8755e","components/forms/Switch.jsx":"96459c9d24f0","components/forms/Textarea.jsx":"0c499feb5a26","components/navigation/Tabs.jsx":"c34befb0d487","ui_kits/app/AdminDashboard.jsx":"63f333ac415c","ui_kits/app/AppShell.jsx":"17a4fff3ff2b","ui_kits/app/AuthScreen.jsx":"af24e27ef02a","ui_kits/app/EditorScreen.jsx":"c59f444b8fae","ui_kits/app/LandingScreen.jsx":"0c68cc03b62b","ui_kits/app/LibraryScreen.jsx":"95ff2cd55db8","ui_kits/app/MemberDashboard.jsx":"8aa1b9a3ef35","ui_kits/app/icons.jsx":"6dfbc4559e88"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_4df9a0 = window.DesignSystem_4df9a0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * منصة تلخيص text logo. There is no graphic logo — the brand is the
 * wordmark plus a turquoise «ت» monogram tile. `variant` toggles which
 * parts render; `tone` adapts to light or dark (navy) backgrounds.
 */
function Logo({
  variant = "full",
  tone = "light",
  size = 28,
  style,
  ...rest
}) {
  const wordColor = tone === "inverse" ? "var(--white)" : "var(--navy-800)";
  const subColor = tone === "inverse" ? "var(--teal-300)" : "var(--teal-600)";
  const tile = Math.round(size * 1.28);
  const Mark = /*#__PURE__*/React.createElement("span", {
    style: {
      width: tile,
      height: tile,
      flexShrink: 0,
      borderRadius: Math.round(tile * 0.28),
      background: tone === "inverse" ? "var(--teal-400)" : "var(--brand-accent)",
      color: tone === "inverse" ? "var(--navy-900)" : "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: tile * 0.6,
      lineHeight: 1,
      boxShadow: "var(--shadow-sm)"
    }
  }, "\u062A");
  const Word = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: "-0.01em",
      display: "inline-flex",
      gap: "0.28em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: subColor,
      fontWeight: 500
    }
  }, "\u0645\u0646\u0635\u0629"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: wordColor
    }
  }, "\u062A\u0644\u062E\u064A\u0635"));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5em",
      ...style
    }
  }, rest), (variant === "full" || variant === "mark") && Mark, (variant === "full" || variant === "wordmark") && Word);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: "var(--fs-sm)",
    padding: "7px 14px",
    gap: "6px",
    radius: "var(--radius-sm)",
    height: "34px"
  },
  md: {
    fontSize: "var(--fs-body)",
    padding: "10px 20px",
    gap: "8px",
    radius: "var(--radius-md)",
    height: "42px"
  },
  lg: {
    fontSize: "var(--fs-lead)",
    padding: "13px 26px",
    gap: "10px",
    radius: "var(--radius-md)",
    height: "52px"
  }
};
function variantStyle(variant) {
  switch (variant) {
    case "accent":
      return {
        background: "var(--brand-accent)",
        color: "var(--white)",
        border: "1px solid transparent",
        "--hover-bg": "var(--brand-accent-hover)",
        "--active-bg": "var(--brand-accent-active)"
      };
    case "secondary":
      return {
        background: "var(--surface-card)",
        color: "var(--navy-800)",
        border: "1px solid var(--border-default)",
        "--hover-bg": "var(--gray-50)",
        "--active-bg": "var(--gray-100)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--navy-700)",
        border: "1px solid transparent",
        "--hover-bg": "var(--navy-50)",
        "--active-bg": "var(--navy-100)"
      };
    case "danger":
      return {
        background: "var(--danger-500)",
        color: "var(--white)",
        border: "1px solid transparent",
        "--hover-bg": "var(--danger-600)",
        "--active-bg": "var(--danger-600)"
      };
    case "primary":
    default:
      return {
        background: "var(--brand-primary)",
        color: "var(--white)",
        border: "1px solid transparent",
        "--hover-bg": "var(--brand-primary-hover)",
        "--active-bg": "var(--brand-primary-active)"
      };
  }
}

/**
 * Primary call-to-action button. Navy = primary actions, turquoise = the
 * single most important action on a screen (summarize / generate).
 */
function Button({
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
    ...style
  };
  const handleEnter = e => {
    if (!isDisabled) e.currentTarget.style.background = v["--hover-bg"];
  };
  const handleLeave = e => {
    e.currentTarget.style.background = v.background;
  };
  const handleDown = e => {
    if (!isDisabled) {
      e.currentTarget.style.background = v["--active-bg"];
      e.currentTarget.style.transform = "translateY(1px)";
    }
  };
  const handleUp = e => {
    if (!isDisabled) {
      e.currentTarget.style.background = v["--hover-bg"];
      e.currentTarget.style.transform = "none";
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    onClick: onClick,
    style: base,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    onMouseDown: handleDown,
    onMouseUp: handleUp
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconStart, children, !loading && iconEnd);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "1em",
      height: "1em",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      borderRadius: "50%",
      display: "inline-block",
      animation: "tlkhs-spin 0.7s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes tlkhs-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: "34px",
  md: "42px",
  lg: "52px"
};
const ICON = {
  sm: "16px",
  md: "18px",
  lg: "20px"
};

/**
 * Square icon-only button. Use for toolbar actions, close buttons, and
 * inline controls where a label would be redundant. Always pass `label`.
 */
function IconButton({
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
    ghost: {
      background: "transparent",
      color: "var(--gray-600)",
      hover: "var(--navy-50)"
    },
    solid: {
      background: "var(--brand-primary)",
      color: "var(--white)",
      hover: "var(--brand-primary-hover)"
    },
    accent: {
      background: "var(--brand-accent)",
      color: "var(--white)",
      hover: "var(--brand-accent-hover)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--navy-700)",
      hover: "var(--gray-50)",
      border: true
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = v.hover;
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = v.background;
    },
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: ICON[size] || ICON.md,
      background: v.background,
      color: v.color,
      border: v.border ? "1px solid var(--border-default)" : "1px solid transparent",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background 140ms ease",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 28,
  md: 38,
  lg: 48
};

/**
 * User / document avatar. Renders `src` image, else initials on a navy
 * tint derived deterministically from the name.
 */
function Avatar({
  name = "",
  src,
  size = "md",
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("");
  const palette = ["var(--navy-600)", "var(--teal-600)", "var(--navy-800)", "var(--teal-700)"];
  const hue = palette[name.length % palette.length];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: dim,
      height: dim,
      flexShrink: 0,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: src ? "transparent" : hue,
      color: "var(--white)",
      fontSize: dim * 0.38,
      fontWeight: "var(--fw-semibold)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "؟");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: "var(--gray-100)",
    fg: "var(--gray-700)"
  },
  navy: {
    bg: "var(--navy-50)",
    fg: "var(--navy-700)"
  },
  accent: {
    bg: "var(--teal-50)",
    fg: "var(--teal-700)"
  },
  success: {
    bg: "var(--success-100)",
    fg: "var(--success-600)"
  },
  warning: {
    bg: "var(--warning-100)",
    fg: "var(--warning-600)"
  },
  danger: {
    bg: "var(--danger-100)",
    fg: "var(--danger-600)"
  }
};

/**
 * Small status / category label. `dot` prefixes a colored indicator.
 */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      background: t.bg,
      color: t.fg,
      fontSize: "var(--fs-2xs)",
      fontWeight: "var(--fw-semibold)",
      padding: "3px 10px",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. `elevation` controls shadow; `accent` adds a top-side
 * turquoise keyline. Composes header / body / footer via children.
 */
function Card({
  children,
  elevation = "sm",
  accent = false,
  padding = "var(--space-6)",
  interactive = false,
  style,
  ...rest
}) {
  const shadows = {
    none: "none",
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = shadows[elevation];
        e.currentTarget.style.transform = "none";
      }
    },
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderTop: accent ? "3px solid var(--brand-accent)" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: shadows[elevation] || shadows.sm,
      padding,
      transition: "box-shadow 160ms ease, transform 160ms ease",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Removable tag / chip for keywords, filters, document types.
 */
function Tag({
  children,
  onRemove,
  tone = "navy",
  style,
  ...rest
}) {
  const tones = {
    navy: {
      bg: "var(--navy-50)",
      fg: "var(--navy-700)",
      br: "var(--navy-100)"
    },
    accent: {
      bg: "var(--teal-50)",
      fg: "var(--teal-700)",
      br: "var(--teal-100)"
    },
    gray: {
      bg: "var(--gray-50)",
      fg: "var(--gray-700)",
      br: "var(--gray-200)"
    }
  };
  const t = tones[tone] || tones.navy;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.br}`,
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-medium)",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      lineHeight: 1.4,
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "\u0625\u0632\u0627\u0644\u0629",
    style: {
      border: "none",
      background: "transparent",
      color: "currentColor",
      cursor: "pointer",
      fontSize: "14px",
      lineHeight: 1,
      padding: 0,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Modal dialog with scrim. Controlled via `open`; renders nothing when closed.
 * Provide `title`, body via children, and `footer` for actions.
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = "520px"
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "color-mix(in srgb, var(--navy-950) 55%, transparent)",
      backdropFilter: "blur(2px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      animation: "tlkhs-fade 160ms ease"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes tlkhs-fade{from{opacity:0}to{opacity:1}}@keyframes tlkhs-pop{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}`), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      animation: "tlkhs-pop 200ms cubic-bezier(.2,.8,.2,1)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px",
      padding: "20px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u0625\u063A\u0644\u0627\u0642",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: "22px",
      color: "var(--text-subtle)",
      lineHeight: 1,
      padding: "2px"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 24px 0",
      color: "var(--text-body)",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-normal)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-start",
      gap: "10px",
      padding: "20px 24px 24px",
      marginTop: "8px"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  info: {
    bar: "var(--teal-500)",
    icon: "ℹ",
    iconColor: "var(--teal-700)"
  },
  success: {
    bar: "var(--success-500)",
    icon: "✓",
    iconColor: "var(--success-600)"
  },
  warning: {
    bar: "var(--warning-500)",
    icon: "!",
    iconColor: "var(--warning-600)"
  },
  danger: {
    bar: "var(--danger-500)",
    icon: "✕",
    iconColor: "var(--danger-600)"
  }
};

/**
 * Toast notification. Render inside a fixed stack; `tone` sets the leading
 * bar + icon. Static (presentational) — wire dismissal at the app level.
 */
function Toast({
  title,
  message,
  tone = "info",
  onClose,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      border: "1px solid var(--border-subtle)",
      borderInlineStart: `3px solid ${t.bar}`,
      padding: "14px 16px",
      minWidth: "300px",
      maxWidth: "420px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "22px",
      height: "22px",
      flexShrink: 0,
      borderRadius: "50%",
      background: t.bar,
      color: "var(--white)",
      fontSize: "13px",
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "1px"
    }
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      fontSize: "var(--fs-sm)"
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--fs-sm)",
      marginTop: title ? "2px" : 0
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u0625\u063A\u0644\u0627\u0642",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-subtle)",
      fontSize: "18px",
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Lightweight hover/focus tooltip. Wraps a single trigger child; `content`
 * is the label. `placement` positions the bubble (top default).
 */
function Tooltip({
  content,
  placement = "top",
  children
}) {
  const [show, setShow] = useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    start: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    end: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 1100,
      ...pos[placement],
      background: "var(--navy-900)",
      color: "var(--white)",
      fontSize: "var(--fs-2xs)",
      fontWeight: "var(--fw-medium)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none",
      animation: "tlkhs-tip 120ms ease"
    }
  }, content, /*#__PURE__*/React.createElement("style", null, `@keyframes tlkhs-tip{from{opacity:0}to{opacity:1}}`)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Checkbox with label. Controlled via `checked` or uncontrolled via `defaultChecked`.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  ...rest
}) {
  const [internal, setInternal] = useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : internal;
  const fieldId = id || (label ? `cb-${label}` : undefined);
  const toggle = e => {
    if (checked === undefined) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      fontSize: "var(--fs-body)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "20px",
      flexShrink: 0,
      borderRadius: "var(--radius-xs)",
      border: `1.5px solid ${isOn ? "var(--brand-accent)" : "var(--border-strong)"}`,
      background: isOn ? "var(--brand-accent)" : "var(--surface-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--white)",
      fontSize: "13px",
      fontWeight: 700,
      transition: "background 120ms ease, border-color 120ms ease"
    }
  }, isOn && "✓"), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: isOn,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Single-line text field with label, optional hint and error state.
 * RTL-first; place icons with `iconStart`.
 */
function Input({
  label,
  hint,
  error,
  iconStart,
  size = "md",
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || (label ? `in-${label}` : undefined);
  const pad = size === "sm" ? "8px 12px" : size === "lg" ? "14px 16px" : "11px 14px";
  const fs = size === "sm" ? "var(--fs-sm)" : "var(--fs-body)";
  const borderColor = error ? "var(--danger-500)" : focused ? "var(--border-focus)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: disabled ? "var(--gray-100)" : "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-field)",
      padding: pad,
      boxShadow: focused && !error ? "var(--ring)" : "var(--shadow-inset)",
      transition: "border-color 120ms ease, box-shadow 120ms ease",
      opacity: disabled ? 0.7 : 1
    }
  }, iconStart && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-subtle)",
      display: "inline-flex",
      fontSize: "18px"
    }
  }, iconStart), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "inherit",
      fontSize: fs,
      color: "var(--text-strong)",
      width: "100%",
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: error ? "var(--danger-600)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Radio group. Pass `options` (string[] or {label,value}[]) and a `name`.
 */
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled = false
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value !== undefined ? value : internal;
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lbl = typeof o === "string" ? o : o.label;
    const on = current === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        fontSize: "var(--fs-body)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: "20px",
        height: "20px",
        flexShrink: 0,
        borderRadius: "50%",
        border: `1.5px solid ${on ? "var(--brand-accent)" : "var(--border-strong)"}`,
        background: "var(--surface-card)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color 120ms ease"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "var(--brand-accent)"
      }
    })), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: on,
      disabled: disabled,
      onChange: () => pick(val),
      style: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0
      }
    }), lbl);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Native select styled to match the system. RTL caret on the left.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  size = "md",
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || (label ? `sel-${label}` : undefined);
  const pad = size === "sm" ? "8px 12px" : size === "lg" ? "14px 16px" : "11px 14px";
  const borderColor = error ? "var(--danger-500)" : focused ? "var(--border-focus)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      font: "inherit",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      background: disabled ? "var(--gray-100)" : "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-field)",
      padding: pad,
      paddingLeft: "38px",
      boxShadow: focused && !error ? "var(--ring)" : "var(--shadow-inset)",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "border-color 120ms ease, box-shadow 120ms ease",
      ...style
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-subtle)",
      fontSize: "12px"
    }
  }, "\u25BC")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: error ? "var(--danger-600)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Toggle switch for on/off settings (e.g. «الحفاظ على النبرة الرسمية»).
 */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id
}) {
  const [internal, setInternal] = useState(defaultChecked || false);
  const on = checked !== undefined ? checked : internal;
  const fieldId = id || (label ? `sw-${label}` : undefined);
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (checked === undefined) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      fontSize: "var(--fs-body)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: fieldId,
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      width: "42px",
      height: "24px",
      flexShrink: 0,
      borderRadius: "var(--radius-pill)",
      border: "none",
      padding: "2px",
      cursor: disabled ? "not-allowed" : "pointer",
      background: on ? "var(--brand-accent)" : "var(--gray-300)",
      display: "inline-flex",
      justifyContent: on ? "flex-start" : "flex-end",
      transition: "background 160ms ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transition: "transform 160ms ease"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Multi-line text area — the workhorse of منصة تلخيص (paste source text here).
 * Supports an optional live character counter.
 */
function Textarea({
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
  const handle = e => {
    if (value === undefined) setInternal(e.target.value);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    maxLength: maxLength,
    value: val,
    disabled: disabled,
    onChange: handle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      font: "inherit",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-normal)",
      color: "var(--text-strong)",
      resize: "vertical",
      background: disabled ? "var(--gray-100)" : "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-field)",
      padding: "12px 14px",
      boxShadow: focused && !error ? "var(--ring)" : "var(--shadow-inset)",
      outline: "none",
      transition: "border-color 120ms ease, box-shadow 120ms ease",
      ...style
    }
  }, rest)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: error ? "var(--danger-600)" : "var(--text-muted)"
    }
  }, error || hint), showCount && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-subtle)",
      fontFamily: "var(--font-mono)"
    }
  }, String(val).length, maxLength ? ` / ${maxLength}` : "")));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Horizontal tabs. `items` = [{ id, label, badge? }]. Underline indicator
 * in turquoise; controlled via `value`/`onChange` or uncontrolled.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [internal, setInternal] = useState(defaultValue || items[0] && items[0].id);
  const active = value !== undefined ? value : internal;
  const pick = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, items.map(it => {
    const on = active === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(it.id),
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = "var(--navy-700)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = "var(--text-muted)";
      },
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        padding: "12px 16px",
        cursor: "pointer",
        fontSize: "var(--fs-sm)",
        fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
        fontFamily: "var(--font-sans)",
        color: on ? "var(--navy-900)" : "var(--text-muted)",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        transition: "color 120ms ease"
      }
    }, it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        background: on ? "var(--teal-100)" : "var(--gray-100)",
        color: on ? "var(--teal-700)" : "var(--gray-600)",
        fontSize: "var(--fs-2xs)",
        fontWeight: "var(--fw-semibold)",
        padding: "1px 7px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-mono)"
      }
    }, it.badge), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        insetInline: "8px",
        bottom: "-1px",
        height: "2.5px",
        borderRadius: "2px",
        background: on ? "var(--brand-accent)" : "transparent",
        transition: "background 140ms ease"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AdminDashboard.jsx
try { (() => {
/* AdminDashboard — simplified admin console: KPIs + users management table. */
function AdminDashboard({
  onLogout
}) {
  const {
    Logo,
    Card,
    Badge,
    Button,
    IconButton,
    Avatar,
    Tabs,
    Tag
  } = window.DesignSystem_4df9a0;
  const kpis = [{
    icon: "users",
    label: "إجمالي الأعضاء",
    value: "١٬٢٤٨",
    delta: "+٤.٢٪",
    up: true
  }, {
    icon: "file-check",
    label: "ملخّصات هذا الشهر",
    value: "٨٬٧٦٢",
    delta: "+١٢٪",
    up: true
  }, {
    icon: "activity",
    label: "نشطون يومياً",
    value: "٣١٤",
    delta: "+٢٪",
    up: true
  }, {
    icon: "zap",
    label: "أعضاء الباقة الاحترافية",
    value: "١٨٦",
    delta: "-١٪",
    up: false
  }];
  const users = [{
    name: "نورة العتيبي",
    email: "noura@gov.sa",
    role: "عضو",
    plan: "احترافية",
    status: "نشط",
    st: "success",
    count: "٤٢"
  }, {
    name: "عبدالله الشمري",
    email: "a.shamri@corp.sa",
    role: "عضو",
    plan: "مجانية",
    status: "نشط",
    st: "success",
    count: "٧"
  }, {
    name: "سارة القحطاني",
    email: "sara.q@org.sa",
    role: "مشرف",
    plan: "احترافية",
    status: "نشط",
    st: "success",
    count: "١٢٨"
  }, {
    name: "خالد الدوسري",
    email: "khaled@gov.sa",
    role: "عضو",
    plan: "مجانية",
    status: "موقوف",
    st: "danger",
    count: "٠"
  }, {
    name: "ريم الحربي",
    email: "reem.h@corp.sa",
    role: "عضو",
    plan: "احترافية",
    status: "بانتظار",
    st: "warning",
    count: "٣"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--header-h)",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      padding: "0 28px",
      background: "var(--surface-inverse)",
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    size: 20,
    tone: "inverse"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      background: "var(--navy-700)",
      color: "var(--teal-300)",
      fontSize: "var(--fs-2xs)",
      fontWeight: "var(--fw-semibold)",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 13
  }), " \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0633\u0624\u0648\u0644"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--navy-100)"
    }
  }, "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645"), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
    variant: "ghost",
    onClick: onLogout
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--navy-200)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px",
      maxWidth: "var(--container-xl)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h3)",
      color: "var(--text-strong)",
      marginBottom: "4px"
    }
  }, "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      marginBottom: "22px"
    }
  }, "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0629 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0623\u0639\u0636\u0627\u0621"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px",
      marginBottom: "28px"
    }
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    elevation: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "34px",
      height: "34px",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-brand-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: k.icon,
    size: 17,
    color: "var(--navy-600)"
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: k.up ? "success" : "danger"
  }, k.delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "30px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      lineHeight: 1,
      fontFamily: "var(--font-mono)"
    }
  }, k.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, k.label)))), /*#__PURE__*/React.createElement(Card, {
    elevation: "sm",
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "16px 20px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h4)",
      color: "var(--text-strong)"
    }
  }, "\u0627\u0644\u0623\u0639\u0636\u0627\u0621"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "\u0661\u066C\u0662\u0664\u0668"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconStart: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 16
    })
  }, "\u062A\u0635\u062F\u064A\u0631"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconStart: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })
  }, "\u062F\u0639\u0648\u0629 \u0639\u0636\u0648")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 0"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    defaultValue: "all",
    items: [{
      id: "all",
      label: "الكل",
      badge: "١٢٤٨"
    }, {
      id: "active",
      label: "نشط",
      badge: "١١٠٢"
    }, {
      id: "pro",
      label: "احترافية",
      badge: "١٨٦"
    }, {
      id: "suspended",
      label: "موقوف",
      badge: "٩"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2.4fr 1fr 1fr 1fr 0.8fr 44px",
      gap: "12px",
      padding: "12px 20px",
      fontSize: "var(--fs-2xs)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0639\u0636\u0648"), /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u062F\u0648\u0631"), /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0628\u0627\u0642\u0629"), /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u062D\u0627\u0644\u0629"), /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0645\u0644\u062E\u0651\u0635\u0627\u062A"), /*#__PURE__*/React.createElement("span", null)), users.map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "2.4fr 1fr 1fr 1fr 0.8fr 44px",
      gap: "12px",
      padding: "14px 20px",
      alignItems: "center",
      fontSize: "var(--fs-sm)",
      borderBottom: i < users.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: u.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)"
    }
  }, u.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      direction: "ltr",
      textAlign: "right"
    }
  }, u.email))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)"
    }
  }, u.role === "مشرف" ? /*#__PURE__*/React.createElement(Tag, {
    tone: "accent"
  }, u.role) : u.role), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)"
    }
  }, u.plan), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: u.st,
    dot: true
  }, u.status)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--text-body)"
    }
  }, u.count), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u062E\u064A\u0627\u0631\u0627\u062A",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ellipsis-vertical",
    size: 16
  })))))));
}
window.AdminDashboard = AdminDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AdminDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
/* AppShell — header + right-side nav rail for منصة تلخيص workspace (RTL). */
function AppShell({
  active,
  onNavigate,
  onLogout,
  children
}) {
  const {
    Logo,
    Avatar,
    IconButton,
    Badge
  } = window.DesignSystem_4df9a0;
  const nav = [{
    id: "home",
    label: "الرئيسية",
    icon: "house"
  }, {
    id: "editor",
    label: "أداة التلخيص",
    icon: "sparkles"
  }, {
    id: "library",
    label: "المكتبة",
    icon: "library"
  }, {
    id: "templates",
    label: "القوالب",
    icon: "layout-template"
  }, {
    id: "settings",
    label: "الإعدادات",
    icon: "settings"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--header-h)",
      flexShrink: 0,
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    size: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: "420px",
      marginInlineStart: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: "var(--gray-50)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      padding: "8px 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "var(--text-subtle)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "\u0627\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0645\u062E\u0627\u0637\u0628\u0627\u062A \u0648\u0627\u0644\u0645\u0644\u062E\u0651\u0635\u0627\u062A\u2026",
    style: {
      flex: 1,
      border: "none",
      background: "transparent",
      outline: "none",
      font: "inherit",
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)"
    }
  }), /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "var(--text-subtle)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "4px",
      padding: "1px 6px"
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell"
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-help"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      paddingInlineStart: "10px",
      borderInlineStart: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0646\u0648\u0631\u0629 \u0627\u0644\u0639\u062A\u064A\u0628\u064A",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, "\u0646\u0648\u0631\u0629 \u0627\u0644\u0639\u062A\u064A\u0628\u064A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-2xs)",
      color: "var(--text-muted)"
    }
  }, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u062A\u0635\u0627\u0644\u0627\u062A")), onLogout && /*#__PURE__*/React.createElement(IconButton, {
    label: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
    variant: "ghost",
    onClick: onLogout
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      width: "var(--sidebar-w)",
      flexShrink: 0,
      background: "var(--surface-card)",
      borderInlineStart: "1px solid var(--border-subtle)",
      padding: "20px 14px",
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-2xs)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-subtle)",
      letterSpacing: "0.04em",
      padding: "0 10px 8px"
    }
  }, "\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0639\u0645\u0644"), nav.map(n => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        padding: "11px 12px",
        border: "none",
        cursor: "pointer",
        textAlign: "right",
        borderRadius: "var(--radius-md)",
        font: "inherit",
        fontSize: "var(--fs-sm)",
        fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
        background: on ? "var(--surface-brand-subtle)" : "transparent",
        color: on ? "var(--navy-800)" : "var(--text-muted)",
        transition: "background 120ms ease"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "var(--gray-50)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18,
      color: on ? "var(--brand-accent)" : "var(--text-subtle)"
    }), n.label);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-inverse)",
      borderRadius: "var(--radius-lg)",
      padding: "16px",
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-sm)",
      marginBottom: "4px"
    }
  }, "\u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0645\u062C\u0627\u0646\u064A\u0629"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-2xs)",
      color: "var(--navy-200)",
      marginBottom: "12px"
    }
  }, "\u0667 \u0645\u0646 \u0661\u0660 \u0645\u0644\u062E\u0651\u0635\u0627\u062A \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "6px",
      borderRadius: "99px",
      background: "var(--navy-700)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "70%",
      height: "100%",
      background: "var(--brand-accent)"
    }
  })))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: "auto"
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AuthScreen.jsx
try { (() => {
/* AuthScreen — login + register, two-column (navy brand panel + form). */
function AuthScreen({
  mode = "login",
  onAuth,
  onAdmin,
  onBack
}) {
  const {
    Logo,
    Button,
    Input,
    Checkbox
  } = window.DesignSystem_4df9a0;
  const [tab, setTab] = React.useState(mode);
  React.useEffect(() => setTab(mode), [mode]);
  const isLogin = tab === "login";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-inverse)",
      padding: "48px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    size: 24,
    tone: "inverse"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      color: "var(--white)",
      lineHeight: 1.2,
      marginBottom: "16px"
    }
  }, "\u0645\u0644\u062E\u0651\u0635\u0627\u062A \u0631\u0633\u0645\u064A\u0629", /*#__PURE__*/React.createElement("br", null), "\u062F\u0642\u064A\u0642\u0629 \u0641\u064A \u062B\u0648\u0627\u0646\u064D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lead)",
      color: "var(--navy-200)",
      lineHeight: 1.7,
      maxWidth: "380px"
    }
  }, "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0645\u0646\u0635\u0629 \u062A\u0644\u062E\u064A\u0635 \u0648\u0644\u062E\u0651\u0635 \u0645\u062E\u0627\u0637\u0628\u0627\u062A\u0643 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0646\u0628\u0631\u062A\u0647\u0627 \u0648\u0645\u0639\u0646\u0627\u0647\u0627."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "28px"
    }
  }, ["تلخيص فوري للنصوص الطويلة", "إعادة صياغة بأساليب متعددة", "مكتبة لحفظ ملخّصاتك"].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "var(--navy-100)",
      fontSize: "var(--fs-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--teal-300)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--navy-300)"
    }
  }, "\xA9 \u0662\u0660\u0662\u0666 \u0645\u0646\u0635\u0629 \u062A\u0644\u062E\u064A\u0635")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "380px"
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      color: "var(--text-muted)",
      fontSize: "var(--fs-sm)",
      font: "inherit",
      marginBottom: "24px",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }), " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0631\u0626\u064A\u0633\u064A\u0629"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      background: "var(--gray-100)",
      borderRadius: "var(--radius-md)",
      padding: "3px",
      marginBottom: "28px",
      width: "100%"
    }
  }, [["login", "تسجيل الدخول"], ["register", "حساب جديد"]].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      flex: 1,
      border: "none",
      cursor: "pointer",
      font: "inherit",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      padding: "9px",
      borderRadius: "var(--radius-sm)",
      background: tab === id ? "var(--surface-card)" : "transparent",
      color: tab === id ? "var(--navy-800)" : "var(--text-muted)",
      boxShadow: tab === id ? "var(--shadow-xs)" : "none"
    }
  }, label))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h3)",
      color: "var(--text-strong)",
      marginBottom: "6px"
    }
  }, isLogin ? "مرحباً بعودتك" : "أنشئ حسابك"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      marginBottom: "24px"
    }
  }, isLogin ? "سجّل الدخول للمتابعة إلى لوحة التحكم" : "ابدأ بتلخيص مخاطباتك مجاناً"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, !isLogin && /*#__PURE__*/React.createElement(Input, {
    label: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
    placeholder: "\u0646\u0648\u0631\u0629 \u0627\u0644\u0639\u062A\u064A\u0628\u064A",
    iconStart: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    type: "email",
    placeholder: "name@example.com",
    iconStart: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    iconStart: /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 18
    })
  }), isLogin ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u062A\u0630\u0643\u0651\u0631\u0646\u064A"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-link)"
    }
  }, "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F")) : /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0623\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0648\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    size: "lg",
    onClick: () => onAuth && onAuth("member")
  }, isLogin ? "تسجيل الدخول" : "إنشاء الحساب")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "22px",
      textAlign: "center",
      fontSize: "var(--fs-xs)",
      color: "var(--text-subtle)"
    }
  }, "\u0644\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0648\u0636\u064A\u062D\u064A: ", /*#__PURE__*/React.createElement("button", {
    onClick: () => onAdmin && onAdmin(),
    style: {
      border: "none",
      background: "transparent",
      color: "var(--text-link)",
      cursor: "pointer",
      font: "inherit",
      textDecoration: "underline"
    }
  }, "\u0627\u0644\u062F\u062E\u0648\u0644 \u0643\u0645\u0633\u0624\u0648\u0644")))));
}
window.AuthScreen = AuthScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AuthScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/EditorScreen.jsx
try { (() => {
/* EditorScreen — the core summarization tool. Right pane: source text.
   Left pane: generated summary. Top bar: style, length, tone, action. */
function EditorScreen() {
  const {
    Button,
    Select,
    Badge,
    Tag,
    Card,
    Switch,
    Toast
  } = window.DesignSystem_4df9a0;
  const SAMPLE = "تحية طيبة وبعد،\n\nإشارةً إلى الاجتماع المنعقد بتاريخه، يسرّنا إحاطتكم علماً بأنه قد تقرر اعتماد الخطة التشغيلية للربع القادم، وتتضمن ثلاثة محاور رئيسية: تطوير الخدمات الرقمية، ورفع كفاءة الإجراءات الداخلية، وتعزيز قنوات التواصل مع المستفيدين. كما تقرر تشكيل لجنة لمتابعة التنفيذ ورفع تقرير دوري كل أسبوعين.\n\nنأمل التكرّم بالاطلاع واعتماد ما يلزم.";
  const [text, setText] = React.useState(SAMPLE);
  const [length, setLength] = React.useState("متوسط");
  const [done, setDone] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const run = () => {
    setLoading(true);
    setDone(false);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setToast(true);
      setTimeout(() => setToast(false), 2600);
    }, 1300);
  };
  const lengths = ["قصير", "متوسط", "طويل"];
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "16px 24px",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, "\u0623\u062F\u0627\u0629 \u0627\u0644\u062A\u0644\u062E\u064A\u0635"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)",
      marginTop: "2px"
    }
  }, "\u0644\u062E\u0651\u0635 \u0648\u0623\u0639\u062F \u0635\u064A\u0627\u063A\u0629 \u0627\u0644\u0645\u062E\u0627\u0637\u0628\u0627\u062A \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0628\u062F\u0642\u0629")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "180px"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["رسمي", "موجز", "ودّي", "تنفيذي"],
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      background: "var(--gray-100)",
      borderRadius: "var(--radius-md)",
      padding: "3px"
    }
  }, lengths.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLength(l),
    style: {
      border: "none",
      cursor: "pointer",
      font: "inherit",
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-medium)",
      padding: "6px 14px",
      borderRadius: "var(--radius-sm)",
      background: length === l ? "var(--surface-card)" : "transparent",
      color: length === l ? "var(--navy-800)" : "var(--text-muted)",
      boxShadow: length === l ? "var(--shadow-xs)" : "none"
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    loading: loading,
    onClick: run,
    iconStart: !loading && /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 18
    })
  }, loading ? "جارٍ التلخيص…" : "لخّص النص")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1px",
      background: "var(--border-subtle)",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      display: "flex",
      flexDirection: "column",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(PaneHeader, {
    icon: "file-text",
    title: "\u0627\u0644\u0646\u0635 \u0627\u0644\u0623\u0635\u0644\u064A",
    meta: `${words} كلمة`
  }), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => {
      setText(e.target.value);
      setDone(false);
    },
    placeholder: "\u0623\u0644\u0635\u0642 \u0646\u0635 \u0627\u0644\u0645\u062E\u0627\u0637\u0628\u0629 \u0623\u0648 \u0627\u0644\u062E\u0637\u0627\u0628 \u0647\u0646\u0627\u2026",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      resize: "none",
      padding: "20px 24px",
      font: "inherit",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-relaxed)",
      color: "var(--text-body)",
      background: "transparent",
      whiteSpace: "pre-wrap"
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      display: "flex",
      flexDirection: "column",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(PaneHeader, {
    icon: "scroll-text",
    title: "\u0627\u0644\u0645\u0644\u062E\u0651\u0635",
    meta: done ? "اختصار ٦٤٪" : "",
    actions: done && /*#__PURE__*/React.createElement(SummaryActions, null)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "20px 24px"
    }
  }, loading && /*#__PURE__*/React.createElement(SummarySkeleton, null), !loading && !done && /*#__PURE__*/React.createElement(EmptyState, null), !loading && done && /*#__PURE__*/React.createElement(SummaryBody, {
    length: length
  })))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: "24px",
      insetInlineStart: "24px",
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "\u062A\u0645 \u0627\u0644\u062A\u0644\u062E\u064A\u0635 \u0628\u0646\u062C\u0627\u062D",
    message: "\u0627\u0644\u0645\u0644\u062E\u0651\u0635 \u062C\u0627\u0647\u0632 \u0644\u0644\u0646\u0633\u062E \u0623\u0648 \u0627\u0644\u062A\u0635\u062F\u064A\u0631.",
    onClose: () => setToast(false)
  })));
  function PaneHeader({
    icon,
    title,
    meta,
    actions
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 24px",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18,
      color: "var(--brand-accent)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-strong)",
        fontSize: "var(--fs-sm)"
      }
    }, title), meta && /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, meta), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), actions);
  }
  function SummaryActions() {
    const {
      IconButton
    } = window.DesignSystem_4df9a0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "4px"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "\u0646\u0633\u062E",
      variant: "ghost",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "copy",
      size: 16
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0635\u064A\u0627\u063A\u0629",
      variant: "ghost",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "refresh-cw",
      size: 16
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "\u062A\u0635\u062F\u064A\u0631",
      variant: "ghost",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 16
    })));
  }
  function SummaryBody({
    length
  }) {
    const {
      Tag
    } = window.DesignSystem_4df9a0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        lineHeight: "var(--lh-relaxed)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--fs-lead)",
        color: "var(--text-strong)",
        fontWeight: "var(--fw-medium)"
      }
    }, "\u0627\u0639\u062A\u064F\u0645\u062F\u062A \u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0644\u0644\u0631\u0628\u0639 \u0627\u0644\u0642\u0627\u062F\u0645\u060C \u0648\u062A\u0642\u0648\u0645 \u0639\u0644\u0649 \u062B\u0644\u0627\u062B\u0629 \u0645\u062D\u0627\u0648\u0631 \u0645\u0639 \u062A\u0634\u0643\u064A\u0644 \u0644\u062C\u0646\u0629 \u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-xs)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-subtle)",
        marginBottom: "8px"
      }
    }, "\u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingInlineStart: "0",
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }
    }, ["تطوير الخدمات الرقمية", "رفع كفاءة الإجراءات الداخلية", "تعزيز قنوات التواصل مع المستفيدين", "رفع تقرير متابعة كل أسبوعين"].map((p, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
        fontSize: "var(--fs-body)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--brand-accent)",
      style: {
        marginTop: "4px",
        flexShrink: 0
      }
    }), p)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        paddingTop: "8px",
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      tone: "accent"
    }, "\u0642\u0631\u0627\u0631"), /*#__PURE__*/React.createElement(Tag, {
      tone: "navy"
    }, "\u062E\u0637\u0629 \u062A\u0634\u063A\u064A\u0644\u064A\u0629"), /*#__PURE__*/React.createElement(Tag, {
      tone: "gray"
    }, length)));
  }
  function SummarySkeleton() {
    const bar = w => /*#__PURE__*/React.createElement("div", {
      style: {
        height: "14px",
        width: w,
        borderRadius: "6px",
        background: "linear-gradient(90deg,var(--gray-100),var(--gray-200),var(--gray-100))",
        backgroundSize: "200% 100%",
        animation: "tlkhs-shimmer 1.2s infinite"
      }
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }
    }, /*#__PURE__*/React.createElement("style", null, `@keyframes tlkhs-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`), bar("90%"), bar("75%"), bar("82%"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: "8px"
      }
    }), bar("60%"), bar("70%"));
  }
  function EmptyState() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "var(--text-subtle)",
        gap: "12px",
        paddingTop: "40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "52px",
        height: "52px",
        borderRadius: "var(--radius-lg)",
        background: "var(--surface-accent-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 24,
      color: "var(--brand-accent)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-sm)",
        maxWidth: "240px",
        lineHeight: 1.6
      }
    }, "\u0627\u0636\u063A\u0637 \xAB\u0644\u062E\u0651\u0635 \u0627\u0644\u0646\u0635\xBB \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0645\u0644\u062E\u0651\u0635 \u062F\u0642\u064A\u0642 \u064A\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u0646\u0628\u0631\u0629 \u0627\u0644\u0631\u0633\u0645\u064A\u0629."));
  }
}
window.EditorScreen = EditorScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/EditorScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/LandingScreen.jsx
try { (() => {
/* LandingScreen — very simple marketing page for منصة تلخيص. */
function LandingScreen({
  onLogin,
  onRegister
}) {
  const {
    Logo,
    Button,
    Badge,
    Card
  } = window.DesignSystem_4df9a0;
  const features = [{
    icon: "zap",
    title: "تلخيص فوري",
    body: "ألصق النص واحصل على ملخّص دقيق في ثوانٍ."
  }, {
    icon: "file-check",
    title: "نبرة رسمية",
    body: "يحافظ على أسلوب المخاطبات الرسمية ومعناها."
  }, {
    icon: "languages",
    title: "إعادة صياغة",
    body: "أعد صياغة الخطابات والتعاميم بأساليب متعددة."
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--surface-page)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--header-h)",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "0 32px",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    size: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onLogin
  }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onRegister
  }, "\u0627\u0628\u062F\u0623 \u0645\u062C\u0627\u0646\u0627\u064B")), /*#__PURE__*/React.createElement("section", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "72px 24px 56px",
      gap: "22px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, "\u0645\u0646\u0635\u0629 \u0639\u0631\u0628\u064A\u0629 \u0644\u0644\u062A\u0644\u062E\u064A\u0635 \u0627\u0644\u0630\u0643\u064A"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-display)",
      lineHeight: 1.1,
      color: "var(--text-strong)",
      maxWidth: "780px"
    }
  }, "\u0644\u062E\u0651\u0635 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-accent)"
    }
  }, "\u0627\u0644\u0645\u062E\u0627\u0637\u0628\u0627\u062A \u0627\u0644\u0631\u0633\u0645\u064A\u0629"), " \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0641\u064A \u062B\u0648\u0627\u0646\u064D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lead)",
      color: "var(--text-muted)",
      maxWidth: "560px",
      lineHeight: 1.7
    }
  }, "\u0645\u0646\u0635\u0629 \u062A\u0644\u062E\u064A\u0635 \u062A\u062D\u0648\u0651\u0644 \u0627\u0644\u062A\u0639\u0627\u0645\u064A\u0645 \u0648\u0627\u0644\u062E\u0637\u0627\u0628\u0627\u062A \u0648\u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0625\u0644\u0649 \u0645\u0644\u062E\u0651\u0635\u0627\u062A \u0648\u0627\u0636\u062D\u0629 \u0648\u062F\u0642\u064A\u0642\u0629\u060C \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u0646\u0628\u0631\u0629 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0648\u0627\u0644\u0645\u0639\u0646\u0649 \u0627\u0644\u0623\u0635\u0644\u064A."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      marginTop: "6px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onRegister,
    iconStart: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 20
    })
  }, "\u0623\u0646\u0634\u0626 \u062D\u0633\u0627\u0628\u0627\u064B \u0645\u062C\u0627\u0646\u064A\u0627\u064B"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onLogin
  }, "\u0644\u062F\u064A\u0651 \u062D\u0633\u0627\u0628")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
      maxWidth: "880px",
      width: "100%",
      marginTop: "44px"
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    elevation: "sm",
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-md)",
      marginBottom: "14px",
      background: "var(--surface-accent-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 22,
    color: "var(--brand-accent)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      fontSize: "var(--fs-h4)",
      marginBottom: "6px"
    }
  }, f.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.6
    }
  }, f.body))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "20px 32px",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)"
    }
  }, "\xA9 \u0662\u0660\u0662\u0666 \u0645\u0646\u0635\u0629 \u062A\u0644\u062E\u064A\u0635 \u2014 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629")));
}
window.LandingScreen = LandingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/LandingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/LibraryScreen.jsx
try { (() => {
/* LibraryScreen — history of saved summaries & official correspondence. */
function LibraryScreen() {
  const {
    Tabs,
    Card,
    Badge,
    Tag,
    Button,
    IconButton
  } = window.DesignSystem_4df9a0;
  const items = [{
    title: "اعتماد الخطة التشغيلية للربع القادم",
    type: "قرار",
    tone: "navy",
    status: "مكتمل",
    st: "success",
    words: 312,
    ratio: "64٪",
    date: "اليوم · 10:24 ص"
  }, {
    title: "تعميم بشأن مواعيد الدوام في رمضان",
    type: "تعميم",
    tone: "accent",
    status: "مكتمل",
    st: "success",
    words: 188,
    ratio: "58٪",
    date: "أمس · 04:10 م"
  }, {
    title: "محضر اجتماع لجنة التحول الرقمي",
    type: "محضر",
    tone: "navy",
    status: "قيد المراجعة",
    st: "warning",
    words: 540,
    ratio: "71٪",
    date: "٢٨ يونيو"
  }, {
    title: "خطاب رد على استفسار جهة حكومية",
    type: "خطاب",
    tone: "accent",
    status: "مسودة",
    st: "neutral",
    words: 96,
    ratio: "—",
    date: "٢٦ يونيو"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px",
      maxWidth: "var(--container-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, "\u0627\u0644\u0645\u0643\u062A\u0628\u0629"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      marginTop: "2px"
    }
  }, "\u0643\u0644 \u0645\u0644\u062E\u0651\u0635\u0627\u062A\u0643 \u0648\u0645\u062E\u0627\u0637\u0628\u0627\u062A\u0643 \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconStart: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    })
  }, "\u0645\u0644\u062E\u0651\u0635 \u062C\u062F\u064A\u062F")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    defaultValue: "all",
    items: [{
      id: "all",
      label: "الكل",
      badge: 24
    }, {
      id: "official",
      label: "مخاطبات رسمية",
      badge: 8
    }, {
      id: "summaries",
      label: "الملخّصات",
      badge: 12
    }, {
      id: "drafts",
      label: "المسودات",
      badge: 4
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    elevation: "xs",
    padding: "16px 20px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "42px",
      height: "42px",
      borderRadius: "var(--radius-md)",
      flexShrink: 0,
      background: "var(--surface-brand-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 20,
    color: "var(--navy-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      fontSize: "var(--fs-body)"
    }
  }, it.title), /*#__PURE__*/React.createElement(Tag, {
    tone: it.tone
  }, it.type)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("span", null, it.date), /*#__PURE__*/React.createElement("span", null, "\xB7 ", it.words, " \u0643\u0644\u0645\u0629"), /*#__PURE__*/React.createElement("span", null, "\xB7 \u0627\u062E\u062A\u0635\u0627\u0631 ", it.ratio))), /*#__PURE__*/React.createElement(Badge, {
    tone: it.st,
    dot: it.st !== "neutral"
  }, it.status), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u062E\u064A\u0627\u0631\u0627\u062A",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ellipsis-vertical",
    size: 18
  })))))));
}
window.LibraryScreen = LibraryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/LibraryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/MemberDashboard.jsx
try { (() => {
/* MemberDashboard — simple member home: greeting, usage stats, recent work. */
function MemberDashboard({
  onNavigate
}) {
  const {
    Card,
    Button,
    Badge,
    Tag
  } = window.DesignSystem_4df9a0;
  const stats = [{
    icon: "file-check",
    label: "ملخّصات هذا الشهر",
    value: "٧",
    sub: "من ١٠ في الباقة المجانية"
  }, {
    icon: "clock",
    label: "الوقت الموفَّر",
    value: "٣.٢",
    sub: "ساعة تقريباً"
  }, {
    icon: "trending-up",
    label: "متوسط الاختصار",
    value: "٦٤٪",
    sub: "من طول النص الأصلي"
  }];
  const recent = [{
    title: "اعتماد الخطة التشغيلية للربع القادم",
    type: "قرار",
    tone: "navy",
    when: "اليوم · 10:24 ص"
  }, {
    title: "تعميم بشأن مواعيد الدوام في رمضان",
    type: "تعميم",
    tone: "accent",
    when: "أمس · 04:10 م"
  }, {
    title: "محضر اجتماع لجنة التحول الرقمي",
    type: "محضر",
    tone: "navy",
    when: "٢٨ يونيو"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 24px",
      maxWidth: "var(--container-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h2)",
      color: "var(--text-strong)"
    }
  }, "\u0645\u0631\u062D\u0628\u0627\u064B\u060C \u0646\u0648\u0631\u0629 \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      marginTop: "4px"
    }
  }, "\u0625\u0644\u064A\u0643 \u0646\u0638\u0631\u0629 \u0633\u0631\u064A\u0639\u0629 \u0639\u0644\u0649 \u0646\u0634\u0627\u0637\u0643 \u0641\u064A \u0645\u0646\u0635\u0629 \u062A\u0644\u062E\u064A\u0635")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate && onNavigate("editor"),
    iconStart: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 18
    })
  }, "\u0645\u0644\u062E\u0651\u0635 \u062C\u062F\u064A\u062F")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
      marginBottom: "16px"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    elevation: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "36px",
      height: "36px",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-brand-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 18,
    color: "var(--navy-600)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)"
    }
  }, s.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "40px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      lineHeight: 1,
      fontFamily: "var(--font-mono)"
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-subtle)",
      marginTop: "6px"
    }
  }, s.sub)))), /*#__PURE__*/React.createElement(Card, {
    accent: true,
    elevation: "sm",
    style: {
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      fontSize: "var(--fs-sm)"
    }
  }, "\u0627\u0633\u062A\u0647\u0644\u0627\u0643 \u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0645\u062C\u0627\u0646\u064A\u0629"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "\u0667 / \u0661\u0660")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "8px",
      borderRadius: "99px",
      background: "var(--gray-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "70%",
      height: "100%",
      background: "var(--brand-accent)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)",
      marginTop: "10px"
    }
  }, "\u062A\u062A\u062C\u062F\u062F \u0627\u0644\u0628\u0627\u0642\u0629 \u062E\u0644\u0627\u0644 \u0661\u0662 \u064A\u0648\u0645\u0627\u064B \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--text-link)"
    }
  }, "\u0627\u0644\u062A\u0631\u0642\u064A\u0629 \u0625\u0644\u0649 \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h4)",
      color: "var(--text-strong)"
    }
  }, "\u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0644\u062E\u0651\u0635\u0627\u062A"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate && onNavigate("library"),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-link)",
      fontSize: "var(--fs-sm)",
      font: "inherit",
      display: "inline-flex",
      alignItems: "center",
      gap: "4px"
    }
  }, "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, recent.map((r, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    elevation: "xs",
    padding: "14px 18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "38px",
      height: "38px",
      borderRadius: "var(--radius-md)",
      flexShrink: 0,
      background: "var(--surface-accent-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "scroll-text",
    size: 18,
    color: "var(--teal-700)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)",
      fontSize: "var(--fs-sm)"
    }
  }, r.title), /*#__PURE__*/React.createElement(Tag, {
    tone: r.tone
  }, r.type)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      marginTop: "3px"
    }
  }, r.when)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16,
    color: "var(--text-subtle)"
  }))))));
}
window.MemberDashboard = MemberDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/MemberDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/icons.jsx
try { (() => {
/* Icon — consistent 2px line icons mirroring the Lucide set (lucide.dev, ISC).
   Hand-bundled as React SVGs so React keeps DOM control across re-renders.
   In production, swap for the real `lucide-react` package. */
const ICON_PATHS = {
  "search": '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  "bell": '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  "circle-help": '<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  "sparkles": '<path d="M11 3 12.7 7.8 17.5 9.5 12.7 11.2 11 16 9.3 11.2 4.5 9.5 9.3 7.8z"/><path d="M19 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
  "library": '<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
  "layout-template": '<rect x="3" y="3" width="18" height="7" rx="1"/><rect x="3" y="14" width="9" height="7" rx="1"/><rect x="15" y="14" width="6" height="7" rx="1"/>',
  "settings": '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/>',
  "file-text": '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>',
  "scroll-text": '<path d="M3 7h14M3 12h10M3 17h12"/>',
  "copy": '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  "refresh-cw": '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  "download": '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "plus": '<path d="M12 5v14M5 12h14"/>',
  "ellipsis-vertical": '<circle cx="12" cy="5" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none"/>',
  "house": '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/><path d="M9 21v-6h6v6"/>',
  "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "user": '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
  "shield-check": '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/>',
  "trending-up": '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  "mail": '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  "lock": '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  "arrow-left": '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "zap": '<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',
  "file-check": '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="m9 15 2 2 4-4"/>',
  "activity": '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  "ban": '<circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "pencil": '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  "languages": '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>'
};
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "inline-block",
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: ICON_PATHS[name] || ""
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
