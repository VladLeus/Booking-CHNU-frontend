import { Button, ButtonProps, styled } from '@mui/material';

const CustomPopoverMenuItem = styled(Button)<ButtonProps>(({ theme }) => ({
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

export default CustomPopoverMenuItem;
