import * as React from "react";

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> {
  /** Accessible label — required, used for aria-label + tooltip title. */
  label: string;
  variant?: "ghost" | "solid" | "accent" | "secondary";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
