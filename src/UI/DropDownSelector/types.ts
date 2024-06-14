import { Control, FieldValues, Path } from 'react-hook-form';
import { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';

export interface DropDownSelectorProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  valuesArray: string[];
  error: boolean;
  helperText: string;
  icon?: ComponentType<SvgIconProps>;
}
