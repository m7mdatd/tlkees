import * as React from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Optional count chip. */
  badge?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/**
 * @startingPoint section="Navigation" subtitle="Underlined tab bar with optional counts" viewport="520x80"
 */
export function Tabs(props: TabsProps): JSX.Element;
