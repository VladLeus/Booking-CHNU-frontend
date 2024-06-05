import { ComponentType } from 'react';
import { ButtonProps, SvgIconProps } from '@mui/material';

export interface CustomButtonProps extends ButtonProps {
  text: string;
  handleClick?: () => void;
  icon?: ComponentType<SvgIconProps>;
}
