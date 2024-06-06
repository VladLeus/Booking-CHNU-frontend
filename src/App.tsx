import { AppRouter } from './routes';
import { NavBar } from '@components/NavBar';
import Stack from '@mui/material/Stack';
import { useAppSelector } from '@shared/hooks';
import LoginActiveUser from '@modules/LoginActiveUser';

function App() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Stack gap={4} justifyItems="center" alignItems="center">
      <LoginActiveUser />
      {user.isAuth && (
        <>
          <NavBar />
          <AppRouter />
        </>
      )}
      {!user.isAuth && <AppRouter />}
    </Stack>
  );
}

export default App;
