import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux.ts';

const Private = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default Private;
