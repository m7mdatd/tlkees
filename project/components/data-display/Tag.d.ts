import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "navy" | "accent" | "gray";
  /** When provided, renders a × remove button. */
  onRemove?: () => void;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
