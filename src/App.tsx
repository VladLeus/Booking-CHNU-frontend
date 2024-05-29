import { AppRouter } from './routes';
import { NavBar } from '@components/navBar';
import { useActions } from '@hooks/actions.ts';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux.ts';
import Stack from '@mui/material/Stack';

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
      <AppRouter />
    </Stack>
  );
}

export default App;
