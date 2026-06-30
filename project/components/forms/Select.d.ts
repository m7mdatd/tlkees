import * as React from "react";

export type SelectOption = string | { label: string; value: string };

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  options?: SelectOption[];
  size?: "sm" | "md" | "lg";
}

export function Select(props: SelectProps): JSX.Element;
