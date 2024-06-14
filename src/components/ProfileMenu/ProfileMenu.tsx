import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import { Popper } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { IconButton } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import PopoverMenuItem from '@ui/PopoverMenuItem';
import {
  handleToggle,
  handleClose,
  handleListKeyDown,
  usePrevious,
} from './actions.ts';
import LogOut from '@modules/LogOut';

export function ProfileMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const prevOpen = usePrevious(open);
  useEffect(() => {
    if (prevOpen && !open) {
      anchorRef.current!.focus();
    }
  }, [open, prevOpen]);

  return (
    <>
      <Stack direction="row" spacing={2} zIndex={10}>
        <div>
          <IconButton
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            ref={anchorRef}
            onClick={handleToggle(setOpen)}
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
                  <ClickAwayListener
                    onClickAway={handleClose(setOpen, anchorRef)}
                  >
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown(setOpen)}
                      sx={{ py: 0 }}
                    >
                      <nav>
                        <PopoverMenuItem
                          to={'profile-settings'}
                          icon={ManageAccountsIcon}
                          text={'Профіль'}
                          handleClose={handleClose(setOpen, anchorRef)}
                        />

                        <PopoverMenuItem
                          to={'trip-history'}
                          icon={HistoryIcon}
                          text={'Історія подорожей'}
                          handleClose={handleClose(setOpen, anchorRef)}
                        />

                        <PopoverMenuItem
                          to={'wallet'}
                          icon={AccountBalanceWalletIcon}
                          text={'Гаманець'}
                          handleClose={handleClose(setOpen, anchorRef)}
                        />

                        <LogOut anchorRef={anchorRef} setOpen={setOpen} />
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
