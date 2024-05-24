import { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';
import * as React from 'react';

export interface PopoverMenuItemProps {
  to: string;
  icon: ComponentType<SvgIconProps>;
  text: string;
  handleClose: (event: Event | React.SyntheticEvent) => void;
}
