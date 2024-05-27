import { Button, ButtonProps, styled } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  isActive: boolean;
}

const CustomPopoverMenuItem = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<CustomButtonProps>(({ theme, isActive }) => ({
  color: isActive
    ? theme.palette.primary.main
    : theme.palette.getContrastText('#fff'),
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

export default CustomPopoverMenuItem;
