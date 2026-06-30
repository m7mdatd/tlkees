import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  rows?: number;
  /** Show a live character counter (pairs with maxLength). */
  showCount?: boolean;
}

export function Textarea(props: TextareaProps): JSX.Element;
