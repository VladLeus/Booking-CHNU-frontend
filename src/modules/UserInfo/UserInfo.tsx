import Stack from '@mui/material/Stack';
import UserProfile from '@components/UserProfile';
import { Alert } from '@mui/material';
import { useLazyGetUserInfoQuery } from '@modules/UserInfo/api';
import CustomButton from '@ui/CustomButton';
import { useEffect, useState } from 'react';
import { useActions, useAppSelector } from '@shared/hooks';
import { LoginActiveUserState } from '@store/user/types.ts';
import { ERROR_MAPPER } from '@shared/utils';
import { LOADING_TEXT } from '@shared/constants';

const UserInfo = () => {
  const { user } = useAppSelector((state) => state.user);
  const [getUserInfo, { isLoading, isError }] = useLazyGetUserInfoQuery();
  const { signInActiveUser, toggleModal } = useActions();
  const [errorText, setErrorText] = useState<string>('');

  const getInfo = async () => {
    const response = await getUserInfo('');
    if (response.data) {
      const user: LoginActiveUserState = {
        id: response.data.data.id,
        email: response.data.data.email,
        name: response.data.data.name,
        surname: response.data.data.last_name,
        phone: response.data.data.phone_number,
        gender: response.data.data.gender,
        birthdate: response.data.data.birthdate,
      };
      signInActiveUser(user);
    } else if (response.error && 'status' in response.error) {
      setErrorText(ERROR_MAPPER[response.error.status]);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      {isLoading && <Alert severity="info">{LOADING_TEXT}</Alert>}
      {isError && (
        <Alert variant="filled" severity="error">
          {errorText}
        </Alert>
      )}

      <Stack sx={{ mt: 2 }}>
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
            handleClick={() => toggleModal()}
            color={'primary'}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default UserInfo;
