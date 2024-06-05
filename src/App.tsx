import { AppRouter } from './routes';
import { NavBar } from '@components/NavBar';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useActions, useAppSelector } from '@shared/hooks';

function App() {
  const { setAuth } = useActions();
  const { isAuth } = useAppSelector((state) => state.user);

  useEffect(() => {
    const token: string | null = localStorage.getItem('user_auth_token');

    token ? setAuth(true) : redirect('/');
  }, []);
  return (
    <Stack gap={4} justifyItems="center" alignItems="center">
      {isAuth && (
        <>
          <NavBar />
          <AppRouter />
        </>
      )}
      {!isAuth && <AppRouter />}
    </Stack>
  );
}

export default App;
