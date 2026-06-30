export type RadioOption = string | { label: string; value: string };

export interface RadioProps {
  name?: string;
  options?: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export function Radio(props: RadioProps): JSX.Element;
