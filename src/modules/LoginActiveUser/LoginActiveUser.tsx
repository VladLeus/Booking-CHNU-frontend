import { useLazyLoginActiveQuery } from '@modules/LoginActiveUser/api';
import { useActions } from '@shared/hooks';
import { Alert } from '@mui/material';
import { FC, useEffect } from 'react';
import { LoginActiveUserProps } from '@modules/LoginActiveUser/types.ts';

const LoginActiveUser: FC<LoginActiveUserProps> = ({ onCheckComplete }) => {
  const [loginActive, { isLoading }] = useLazyLoginActiveQuery();
  const { loginActiveUser } = useActions();

  const loginIfActive = async () => {
    if (localStorage.getItem('user_auth_token')) {
      const token = JSON.parse(localStorage.getItem('user_auth_token')!);
      const response = await loginActive({ token: token });
      if (response.data) {
        loginActiveUser({
          id: response.data.data.id,
          email: response.data.data.email,
          name: response.data.data.name,
          surname: response.data.data.last_name,
          phone: response.data.data.phone_number,
          gender: response.data.data.gender,
          birthdate: response.data.data.birthdate,
        });
      } else if (response.error) {
        console.log(response.error);
      }
    }
    onCheckComplete();
  };

  useEffect(() => {
    loginIfActive();
  }, []);

  return (
    <>
      {isLoading && (
        <Alert severity="info">Зачекайте, триває зв'язок з сервером </Alert>
      )}
    </>
  );
};

export default LoginActiveUser;
