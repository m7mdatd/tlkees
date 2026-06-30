import * as React from "react";

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Action buttons row. */
  footer?: React.ReactNode;
  width?: string;
}

export function Dialog(props: DialogProps): JSX.Element | null;
