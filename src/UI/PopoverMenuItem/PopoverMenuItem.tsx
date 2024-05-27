import { FC } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { PopoverMenuItemProps } from './types.ts';
import CustomPopoverMenuItem from './styled.ts';

const PopoverMenuItem: FC<PopoverMenuItemProps> = ({
  to,
  icon: Icon,
  text,
  handleClose,
}) => {
  return (
    <Link to={to}>
      <MenuItem onClick={handleClose}>
        <CustomPopoverMenuItem variant="text" startIcon={<Icon />}>
          <Typography variant="body1">{text}</Typography>
        </CustomPopoverMenuItem>
      </MenuItem>
    </Link>
  );
};

export default PopoverMenuItem;
