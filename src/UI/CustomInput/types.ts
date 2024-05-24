import { Control } from 'react-hook-form';
import { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';

interface FormInputs {
  inputName: string;
}

export interface CustomInputProps {
  name: keyof FormInputs;
  control: Control<FormInputs>;
  label: string;
  variant: 'filled' | 'outlined' | 'standard';
  icon: ComponentType<SvgIconProps>;
  error: boolean;
  helperText: string;
  value: string;
  setValue: (newValue: string) => void;
}
