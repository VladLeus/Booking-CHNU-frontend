import { FC, ComponentType } from 'react';
import {
  Button,
  ButtonProps,
  styled,
  SvgIconProps,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

interface Props {
  to: string;
  icon: ComponentType<SvgIconProps>;
  text: string;
  handleClose: (event: Event | React.SyntheticEvent) => void;
}
const PopoverMenuItem: FC<Props> = ({ to, icon: Icon, text, handleClose }) => {
  const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#fff'),
    border: 'none',
    outline: 'none',
    textAlign: 'left',
    padding: '5px 0',
    textTransform: 'none',
    '&:hover': {
      borderColor: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: 'none',
    },
  }));

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
