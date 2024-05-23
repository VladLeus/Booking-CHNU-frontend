import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import PopoverMenuItem from '@ui/nav/elements/PopoverMenuItem.tsx';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

export function ProfileMenu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <div>
          <IconButton
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            ref={anchorRef}
            onClick={handleToggle}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 1,
              mt: 2,
              bgcolor: '#99dfff',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
            }}
          >
            <PersonIcon sx={{ color: 'black' }} />
          </IconButton>

          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <nav>
                        <PopoverMenuItem
                          to={'/profile_settings'}
                          icon={ManageAccountsIcon}
                          text={'Профіль'}
                          handleClose={handleClose}
                        />

                        <PopoverMenuItem
                          to={'/trip_history'}
                          icon={HistoryIcon}
                          text={'Історія подорожей'}
                          handleClose={handleClose}
                        />

                        <PopoverMenuItem
                          to={'/wallet'}
                          icon={AccountBalanceWalletIcon}
                          text={'Гаманець'}
                          handleClose={handleClose}
                        />

                        <PopoverMenuItem
                          to={'/'}
                          icon={LogoutIcon}
                          text={'Вийти'}
                          handleClose={handleClose}
                        />
                      </nav>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </>
  );
}
