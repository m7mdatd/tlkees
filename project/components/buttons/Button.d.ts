import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Navy `primary` for main actions, `accent` (turquoise) for the single hero action. */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  /** Element rendered before the label (icon). */
  iconStart?: React.ReactNode;
  /** Element rendered after the label (icon). */
  iconEnd?: React.ReactNode;
  /** Shows a spinner and disables interaction. */
  loading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

/**
 * @startingPoint section="Buttons" subtitle="Primary, accent, secondary, ghost & danger button" viewport="320x120"
 */
export function Button(props: ButtonProps): JSX.Element;
