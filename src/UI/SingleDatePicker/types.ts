import { Control, FieldValues, Path } from 'react-hook-form';

export interface SingleDatePickerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  error: boolean;
  helperText: string;
}
