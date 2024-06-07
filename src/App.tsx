import { useState } from 'react';
import { AppRouter } from './routes';
import { NavBar } from '@components/NavBar';
import Stack from '@mui/material/Stack';
import { useAppSelector } from '@shared/hooks';
import LoginActiveUser from '@modules/LoginActiveUser';

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
    <Stack gap={4} justifyItems="center" alignItems="center">
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
