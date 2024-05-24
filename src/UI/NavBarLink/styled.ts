import { Button, styled } from '@mui/material';
import { CustomButtonProps } from '@ui/NavBarLink/types.ts';

const CustomButton = styled(Button)<CustomButtonProps>(
  ({ theme, isActive }) => ({
    color: theme.palette.getContrastText('#000'),
    borderColor: isActive ? '#fff' : 'transparent',
    outline: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
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
  }),
);

export default CustomButton;
