import { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';

export interface CustomButtonProps {
  text: string;
  variant: 'outlined' | 'text' | 'contained';
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  disabled: boolean;
  handleClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: ComponentType<SvgIconProps>;
}
