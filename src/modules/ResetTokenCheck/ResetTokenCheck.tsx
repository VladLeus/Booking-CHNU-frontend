import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@shared/hooks';

const ResetTokenCheck = () => {
  const query = useQuery();
  const jwtTempToken: string | null = query.get('token');
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const validateJWT = (token: string | null): boolean => {
    return token !== null && token !== '';
  };

  useEffect(() => {
    // Simulate some request processing
    setTimeout(() => {
      setIsTokenValid(validateJWT(jwtTempToken));
    }, 2000);
  }, [jwtTempToken]);

  useEffect(() => {
    if (isTokenValid) {
      localStorage.setItem('resetJWT', JSON.stringify(jwtTempToken));
      navigate('/password-reset');
    }
  }, [isTokenValid]);

  return (
    <>
      {isTokenValid === null && (
        <Typography variant="body2" color="textSecondary">
          Запит обробляється...
        </Typography>
      )}
      {isTokenValid === false && (
        <Typography variant="body2" color="textSecondary">
          Це посилання більше не валідне!
        </Typography>
      )}
    </>
  );
};

export default ResetTokenCheck;
