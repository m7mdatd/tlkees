import * as React from "react";

export interface TooltipProps {
  content: React.ReactNode;
  placement?: "top" | "bottom" | "start" | "end";
  children: React.ReactNode;
}

export function Tooltip(props: TooltipProps): JSX.Element;
