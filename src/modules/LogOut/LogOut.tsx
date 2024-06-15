import LogoutIcon from '@mui/icons-material/Logout';
import { handleClose } from '@components/ProfileMenu/actions.ts';
import PopoverMenuItem from '@ui/PopoverMenuItem';
import { LogOutProps } from '@modules/LogOut/types.ts';
import { FC } from 'react';
import { useLogoutMutation } from '@modules/LogOut/api';
import { useActions } from '@shared/hooks';
import Stack from '@mui/material/Stack';
import { Alert } from '@mui/material';

const LogOut: FC<LogOutProps> = ({ setOpen, anchorRef }) => {
  const [logout, { isLoading, isError }] = useLogoutMutation();
  const { logOutUser, setIsUserTokenChecked } = useActions();

  const handleLogOutClick = async () => {
    const token = JSON.parse(localStorage.getItem('user_auth_token')!);
    const response = await logout({ token: token });

    if (response.data) {
      localStorage.removeItem('user_auth_token');
      setIsUserTokenChecked(false);
      logOutUser();
    } else if (response.error) {
      console.log(response.error);
    }
  };
  return (
    <Stack gap={1} onClick={handleLogOutClick}>
      <PopoverMenuItem
        to={''}
        icon={LogoutIcon}
        text={'Вийти'}
        handleClose={handleClose(setOpen, anchorRef)}
      />
      {isLoading && <Alert severity="info">Обробка запиту ...</Alert>}
      {isError && (
        <Alert severity="error" variant="filled">
          Виникла помилка
        </Alert>
      )}
    </Stack>
  );
};

export default LogOut;
