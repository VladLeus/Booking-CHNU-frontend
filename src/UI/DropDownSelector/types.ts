export interface DropDownSelectorProps {
  label: string;
  helperText: string;
  width: string;
  valuesArray: string[];
  setValue: (newValue: string) => void;
  error: boolean;
}
