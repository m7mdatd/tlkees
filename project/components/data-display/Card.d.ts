import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: "none" | "xs" | "sm" | "md" | "lg";
  /** Adds a turquoise top keyline. */
  accent?: boolean;
  padding?: string;
  /** Lifts on hover — use for clickable cards. */
  interactive?: boolean;
  children?: React.ReactNode;
}

/**
 * @startingPoint section="Surfaces" subtitle="Elevated content surface" viewport="360x180"
 */
export function Card(props: CardProps): JSX.Element;
