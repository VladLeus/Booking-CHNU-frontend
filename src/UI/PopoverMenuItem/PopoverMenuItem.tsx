import { FC } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { PopoverMenuItemProps } from './types.ts';
import CustomButton from './styled.ts';

const PopoverMenuItem: FC<PopoverMenuItemProps> = ({
  to,
  icon: Icon,
  text,
  handleClose,
}) => {
  return (
    <Link to={to}>
      <MenuItem onClick={handleClose}>
        <CustomButton variant="text" startIcon={<Icon />}>
          <Typography variant="body1">{text}</Typography>
        </CustomButton>
      </MenuItem>
    </Link>
  );
};

export default PopoverMenuItem;
