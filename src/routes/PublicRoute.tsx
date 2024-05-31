import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux.ts';

const PublicRoute = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return !isAuth ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;
