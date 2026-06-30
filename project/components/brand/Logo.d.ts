import * as React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `full` = monogram + wordmark, `wordmark` = text only, `mark` = tile only. */
  variant?: "full" | "wordmark" | "mark";
  /** `light` for light backgrounds, `inverse` for navy backgrounds. */
  tone?: "light" | "inverse";
  /** Wordmark font-size in px; the tile scales from it. */
  size?: number;
}

/**
 * @startingPoint section="Brand" subtitle="منصة تلخيص text logo" viewport="320x80"
 */
export function Logo(props: LogoProps): JSX.Element;
