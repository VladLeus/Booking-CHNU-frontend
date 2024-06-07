import { Control, FieldValues, Path } from 'react-hook-form';
import React, { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';

export interface CustomAutoCompleteProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: string[];
  icon?: ComponentType<SvgIconProps>;
  error: boolean;
  helperText: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
