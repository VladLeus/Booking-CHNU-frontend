import { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';

export interface CustomButtonProps {
  text: string;
  variant: 'outlined' | 'text' | 'contained';
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  disabled: boolean;
  icon: ComponentType<SvgIconProps>;
  handleClick?: () => void;
  handleSubmit?: () => void;
}
