import { AppRouter } from './routes';
import Stack from '@mui/material/Stack';
import { useAppSelector } from '@shared/hooks';
import SignInActiveUser from '@modules/LoginActiveUser';
import NavBar from '@components/NavBar';

const App = () => {
  const { user } = useAppSelector((state) => state.user);
  const { isUserTokenChecked } = useAppSelector((state) => state.appState);

  if (!isUserTokenChecked) {
    return <SignInActiveUser />;
  }

  return (
    <Stack gap={2}>
      {user.isAuth && <NavBar />}
      <Stack
        justifyItems="center"
        alignItems="center"
        height="100%"
        sx={{ mt: 5 }}
      >
        <AppRouter />
      </Stack>
    </Stack>
  );
};

export default App;
