import { useState } from 'react';
import { AppRouter } from './routes';
import Stack from '@mui/material/Stack';
import { useAppSelector } from '@shared/hooks';
import LoginActiveUser from '@modules/LoginActiveUser';
import NavBar from '@components/NavBar';

function App() {
  const { user } = useAppSelector((state) => state.user);
  const [checkComplete, setCheckComplete] = useState(false);

  const handleCheckComplete = () => {
    setCheckComplete(true);
  };

  if (!checkComplete) {
    return <LoginActiveUser onCheckComplete={handleCheckComplete} />;
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
}

export default App;
