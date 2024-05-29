import { Control, Path, FieldValues } from 'react-hook-form';
import { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';

export interface CustomInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
  variant: 'filled' | 'outlined' | 'standard';
  icon?: ComponentType<SvgIconProps>;
  error: boolean;
  helperText: string;
  value: string;
  setValue: (newValue: string) => void;
  handleIconClick?: () => void;
}
