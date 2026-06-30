import * as React from "react";

export interface ToastProps {
  title?: React.ReactNode;
  message?: React.ReactNode;
  tone?: "info" | "success" | "warning" | "danger";
  onClose?: () => void;
  style?: React.CSSProperties;
}

export function Toast(props: ToastProps): JSX.Element;
