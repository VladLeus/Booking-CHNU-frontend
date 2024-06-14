import { FC } from 'react';
import { Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CustomNavLink from './styles.ts';
import { NavBarLinkProps } from './types.ts';

const NavBarLinkButton: FC<NavBarLinkProps> = ({ to, icon: Icon, text }) => {
  const location = useLocation();
  const isActive = location.pathname.includes(to);

  return (
    <Link to={to}>
      <Stack direction="row" gap={2}>
        <CustomNavLink
          variant="outlined"
          startIcon={<Icon />}
          isActive={isActive}
        >
          <Typography variant="body1">{text}</Typography>
        </CustomNavLink>
      </Stack>
    </Link>
  );
};

export default NavBarLinkButton;
