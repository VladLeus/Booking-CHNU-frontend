import { useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@shared/hooks';
import { useLazyTokenCheckQuery } from '@modules/ResetTokenCheck/api';
import { LOADING_TEXT } from '@shared/constants';

const ResetTokenCheck = () => {
  const query = useQuery();
  const jwtTempToken: string | null = query.get('token');
  const [isTokenValid, setIsTokenValid] = useState<boolean>();
  const navigate = useNavigate();
  const [checkToken, { isLoading, isError }] = useLazyTokenCheckQuery();

  const validateToken = async (): Promise<void> => {
    const response = await checkToken(jwtTempToken!);

    if (response.data) {
      setIsTokenValid(true);
    } else if (response.error) {
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
      {isLoading && <Alert severity="info">{LOADING_TEXT}</Alert>}
      {isError && (
        <Alert severity="error" variant="filled">
          Це посилання більше не валідне!
        </Alert>
      )}
    </>
  );
};

export default ResetTokenCheck;
