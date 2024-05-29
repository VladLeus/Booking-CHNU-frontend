import { AppRouter } from './routes';
import { NavBar } from '@components/navBar';
import { useActions } from '@hooks/actions.ts';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

function App() {
  const { setAuth } = useActions();

  useEffect(() => {
    const token: string | null = localStorage.getItem('user_auth_token');

    token ? setAuth(true) : redirect('/');
  }, []);
  return (
    <>
      <NavBar />
      <div className="pt-[120px]">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
