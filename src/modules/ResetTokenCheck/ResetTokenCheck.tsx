import { useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@shared/hooks';
import { useLazyTokenCheckQuery } from '@modules/ResetTokenCheck/api';

const ResetTokenCheck = () => {
  const query = useQuery();
  const jwtTempToken: string | null = query.get('token');
  const [isTokenValid, setIsTokenValid] = useState<boolean>();
  const navigate = useNavigate();
  const [checkToken, { isLoading, isError }] = useLazyTokenCheckQuery();

  const validateToken = async (): Promise<void> => {
    const response = await checkToken(jwtTempToken!);

    if (response.data) {
      console.log(response.data);
      setIsTokenValid(true);
    } else if (response.error) {
      console.log(response.error);
      setIsTokenValid(false);
    }
  };

  useEffect(() => {
    if (jwtTempToken === null) {
      setIsTokenValid(false);
      return;
    }
    validateToken();
  }, []);

  useEffect(() => {
    if (isTokenValid) {
      localStorage.setItem('resetJWT', JSON.stringify(jwtTempToken));
      navigate('/password-reset');
    }
  }, [isTokenValid]);

  return (
    <>
      {isLoading && <Alert severity="info">Запит обробляється...</Alert>}
      {isError && (
        <Alert severity="error" variant="filled">
          Це посилання більше не валідне!
        </Alert>
      )}
    </>
  );
};

export default ResetTokenCheck;
