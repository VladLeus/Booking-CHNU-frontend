import { FC } from 'react';
import { Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { PopoverMenuItemProps } from './types.ts';
import CustomPopoverMenuItem from './styled.ts';

const PopoverMenuItem: FC<PopoverMenuItemProps> = ({
  to,
  icon: Icon,
  text,
  handleClose,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <MenuItem onClick={handleClose}>
        <CustomPopoverMenuItem
          variant="text"
          startIcon={<Icon />}
          isActive={isActive}
        >
          <Typography variant="body1">{text}</Typography>
        </CustomPopoverMenuItem>
      </MenuItem>
    </Link>
  );
};

export default PopoverMenuItem;
