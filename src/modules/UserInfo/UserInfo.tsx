import Stack from '@mui/material/Stack';
import UserProfile from '@components/UserProfile';
import { Alert } from '@mui/material';
import { useGetUserInfoQuery } from '@modules/UserInfo/api';
import CustomButton from '@ui/CustomButton';
import { FC, useEffect } from 'react';
import { useActions, useAppSelector } from '@shared/hooks';
import { LoginActiveUserState } from '@shared/store/user/types.ts';

const UserInfo: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  const { data: user_info, isLoading, isError } = useGetUserInfoQuery('');
  const { loginActiveUser } = useActions();

  useEffect(() => {
    if (user_info) {
      const user: LoginActiveUserState = {
        id: user_info.data.id,
        email: user_info.data.email,
        name: user_info.data.name,
        surname: user_info.data.last_name,
        phone: user_info.data.phone_number,
        gender: user_info.data.gender,
        birthdate: user_info.data.birthdate,
      };
      loginActiveUser(user);
    }
  }, [user_info]);

  const { user } = useAppSelector((state) => state.user);

  if (!user_info) {
    return <Alert severity="error">Помилка завантаження даних</Alert>;
  }

  return (
    <>
      {isLoading && <Alert severity="info">Loading...</Alert>}
      {isError && (
        <Alert variant="filled" severity="error">
          Error fetching balance information.
        </Alert>
      )}

      <Stack>
        <UserProfile
          firstName={user.name}
          lastName={user.surname!}
          email={user.email}
          phoneNumber={user.phone!}
          birthdate={user.birthdate!}
          gender={user.gender!}
        />
        <Stack mt={1.4} alignItems="center" justifyContent="center">
          <CustomButton
            text={'Змінити'}
            variant={'outlined'}
            size={'small'}
            type={'button'}
            handleClick={handleClick}
            color={'primary'}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default UserInfo;
