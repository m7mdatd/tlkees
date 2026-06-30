import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error message; also turns the field red. */
  error?: string;
  iconStart?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

/**
 * @startingPoint section="Forms" subtitle="Labelled text field with hint & error" viewport="360x110"
 */
export function Input(props: InputProps): JSX.Element;
