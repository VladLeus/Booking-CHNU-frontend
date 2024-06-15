import { useLazyLoginActiveQuery } from '@modules/LoginActiveUser/api';
import { useActions } from '@shared/hooks';
import { Alert } from '@mui/material';
import { useEffect } from 'react';

const SignInActiveUser = () => {
  const [signInActive, { isLoading }] = useLazyLoginActiveQuery();
  const { signInActiveUser, setIsUserTokenChecked } = useActions();

  const signInIfActive = async () => {
    if (localStorage.getItem('user_auth_token')) {
      const token = JSON.parse(localStorage.getItem('user_auth_token')!);
      const response = await signInActive({ token: token });
      if (response.data) {
        signInActiveUser({
          id: response.data.data.id,
          email: response.data.data.email,
          name: response.data.data.name,
          surname: response.data.data.last_name,
          phone: response.data.data.phone_number,
          gender: response.data.data.gender,
          birthdate: response.data.data.birthdate,
        });
      }
    }
    setIsUserTokenChecked(true);
  };

  useEffect(() => {
    signInIfActive();
  }, []);

  return (
    <>
      {isLoading && (
        <Alert severity="info">Зачекайте, триває зв'язок з сервером</Alert>
      )}
    </>
  );
};

export default SignInActiveUser;
