import { ComponentType } from 'react';
import { ButtonProps, SvgIconProps } from '@mui/material';

export interface NavBarLinkProps {
  to: string;
  icon: ComponentType<SvgIconProps>;
  text: string;
}

export interface CustomButtonProps extends ButtonProps {
  isActive: boolean;
}
