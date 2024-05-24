import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import KingBedIcon from '@mui/icons-material/KingBed';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NavBarLinkButton from '@ui/NavBarLink';
import { ProfileMenu } from '../profileMenu';

export function NavBar() {
  return (
    <AppBar position="fixed" sx={{ height: 150, backgroundColor: '#01579b' }}>
      <Toolbar sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            width: '90%',
            display: 'flex',
            justifyContent: 'space-between',
            m: 2,
          }}
        >
          <Typography variant="h4" sx={{ color: 'amber', fontWeight: 'bold' }}>
            Booking
          </Typography>
          <ProfileMenu />
        </Box>
        <Box
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '92%',
            mt: 1,
            gap: 2,
          }}
        >
          <NavBarLinkButton to="/" icon={KingBedIcon} text="Помешкання" />
          <NavBarLinkButton
            to="/cars"
            icon={DirectionsCarIcon}
            text="Оренда авто"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
